---
title: GIF encoding
description: The most extensive guide to GIF encoding
date: 14/08/2022
---

# GIF encoding in p5.js

#gif #p5js

Okay! It's now time to understand how GIF actually works, at least in the contest of a library like and javascript. This article will particularly be focused on the decisions I made while adding this functionality to the tool, which may not be the best, but it's mostly a journey through what I discovered and learned.

I will try to explain the whole process from beginning to end of what it takes to create a GIF out of any given animation.

## GIF files: a bit of story and terms

So first: we gotta understand what is a GIF. We are all familiar with how it's used (mainly for memes at this point) and how it works: it's a piece of short video with no audio and with a very particular and rather _crunchy_ look and feel.

Essentially, the GIF specification defines GIF as a standard way of lossless, palette based image compression. And initially, it didn't even support animation, but they implemented it very early, so it's almost always been a type of animation file.

Fun fact: the GIF latest release (version 89a) that we know and love was published in 1989 (33 years ago at this point).

Let's review some of the mentioned features real quick.

##### Lossless

On the one hand, lossless means that the compressed data will be exactly preserved in the encoding and decoding stages, as opposed to _lossy_ formats which will deliberately remove information in order to make files smaller. I am looking at you, JPEG.

##### Palettes

On the other hand, palette based means that the encoder will not save every color individually but rather generate a static palette of colors for each frame that we'll keep referencing. This constrains the color space to whatever this palette allows us to play with. And, in the GIF specification, that constrain is pretty tight since we only have 256 colors.

## Main functionality

Okay, so... how does it work? Very simple. As we mentioned, we'll specify a color palette that every pixel in every frame will have to reference somehow, and specifies a delay between each frame. That's essentially it!

Let's dive a bit more into each aspect.

Usually, there's a javascript library (or framework) for absolutely anything. But in this context, what we usually get is GIF encoders: libraries that make all the work of writing headers and bytes at low level... but what frames you put in, how you process and deal with them and what palette you use is up to you.

### Global palettes

So, first, we have to figure out a way to generate a color palette. Color palettes **MUST** be the size of a power of 2 and less than or equal to 256. Pretty limited. We could simply use something like this, which tries to capture every single color as best as it can.

But that's lame, because this palette will work mediocrely for every gif and good for almost no case. It's quite recommended to use your animation to generate a palette. And we are gonna do that!

How? Simple! Go through each pixel in each frame on your animation and extract the most important colors.

Given an animation, we can take absolutely every pixel and _quantize_ this color space. [Quantization](https://en.wikipedia.org/wiki/Color_quantization) is a fancy term for "summing up", we want to take the most important colors in this space.

More specifically, this technique tries to shrink the space of 16M+ colors (8 bit) down to a palette with less colors, in our case, 256 or less, while trying to preserve the quality of it.

This technique is pretty involved and there are lots of simple and sophisticated ways to implement it. So we can, at least, get a sense of what we are talking about, let us see one of the simplest that I could find. It lies under the family of **Popularity Algorithms**.

#### Quantizing colors: Popularity algorithm

Just to be very clear, I want to reinforce what is our main goal with all this. We have a color space of more than 16M colors ($256^3$) and we want to find the most important colors that our particular image has. **We want to find a subset of all the possible colors that best represents the colors in our image**.

##### Step 1: Breaking down the color space

First, we start with our original color space, which can be very conveniently be represented as a cube in 3D space, where each axis indicates the amount of each of our components: red, green and blue.

Any point in this space will be represented by its corresponding coordinate: `[234, 12, 89]`. Each component in this coordinate will tell us how much red, green or blue there is in this particular point (or color).

If we do this for absolutely every possible combination, we end up with our $256^3$ colors, which equals to 16M+.

Now, the key part is we are going to group all this points in chunks, little $n\times n \times n$ cubes. For example, we could group them in little packages of $32 \times 32 \times 32$, each containing 32768 colors. This already is quantizing the 16M+ space into a space of only 512 colors. This comes from $\frac{256^3}{32^3} = 512$, or more importantly: $\frac{256}{32} = 8$, meaning that we are getting an eighth of the total colors for each axis `[r, g, b]`. This ratio will be important next.

##### Step 2: Define the chunks

Now, we are going to associate each chunk with the average of all the colors it holds. That is, in our particular example, for each of the 32K colors that each chunk has, take the average of the red, green and blue channels independently. We can associate this new "average color" with our chunk in a dictionary, for example:

```python
color_chunks[chunk] = [avg(red), avg(green), avg(blue)]
```

We are now going to define that key `chunk`!

##### Step 3: Mapping the colors to the chunks

Having all these little packages prepared, now we are going to associate every color present in our image with the corresponding chunk it falls in. This gotta be my favourite part.

For every pixel in our image, take the color and find the chunk where it belongs. This can be done in a variety of ways, depending on the technique. One of the most intuitive follows like this.

If we assign an integer index to every one of our chunks starting from the bottom and going sequentially, we can convert that index to a coordinate by a simple **change of base**. For example, the little chunk that is in the position 0 would be in the new coordinate system `[0,0,0]`.

Let us consider the same example as before, in which we sliced the space into 8, resulting in packages of $32^3$ colors.

- Chunk #15 is located at (0, 1, 7)
- Chunk #16 is located at (0, 2, 0)
- Chunk #53 is located at (0, 6, 5)
- Chunk #353 is located at (5, 4, 1)
- Chunk #511 is located at (7, 7, 7) (this would be the last one!)

So the `key` that we mentioned before is going to be our index! The dictionary would look like this, for example:

```python
color_chunks[53] = [avg(red), avg(green), avg(blue)]
```

Now, to get the coordinate of the chunk from the pixel in our image, we just have to divide its coordinates by our chunk size, in this case, 32.

```python
[254 // 32, 127 // 32, 32 // 32] = [7, 3, 1] # if decimal, just floor it
```

Now, we have `731`, a number in base 8, which we can convert to base 10:

$7*8^2 + 3*8 + 1 = 473$

Now, simply access `color_chunks[473]` and obtain our new averaged, quantized color!

**TL;DR** Summing up the process:

1. Get the chunk size and ratio. If we divide in n chunks, each chunk will be 256 / n long.
   1. For example: `ratio = 8`, `chunk_size = 256 / ratio`
2. Get the pixel from your image and divide each component by the `chunk_size`.
3. Treat this triplet of numbers as a number in base $B_{ratio}$. Consequently, convert that number to base ten by adding the products with the corresponding powers of your base.
4. Now you got the index! Access your dictionary and that is our color!

##### Step 4: Rank the chunks in terms of popularity

Now that we know how to covert an RGB color from our image to the corresponding chunk it lies on, we can track a counter of how many colors are referring each chunk.

This will effectively tell us what are the most relevant chunks that better sum up our image. From there, since every chunk is actually represented by a color (the average), we retrieve the 256 most referenced, and thus, important chunks, and, consequently, their associated colors. This will effectively return a set of colors that we can use for our GIF!

_Side note_
_All this information and much more can be found on this spectacular article by Steven Segenchuk: [An Overview of Color Quantization Techniques](http://web.cs.wpi.edu/~matt/courses/cs563/talks/color_quant/CQindex.html)_

### Applying a palette

Great! So now we have a color palette that's tailored to our specific animation. Now, we need to use this palette on every frame and encode it, for every frame.

The way we do this is by taking every pixel in one frame and checking what's the nearest color in the palette. This is usually done via the euclidean metric, treating the color space as a cube and minimizing the distance between the target color and the palette color.

Once we have decided what color from the palette we'll put in here, what we actually insert is not the color BUT the index of that color in the palette. This will result in an image of the same width and height, but with single numbers representing every color in our palette.

And this very "indexed frame" is what we'll put into the encoder. Neat!

But wait... there's more!

### Transparency optimization

Encoding it this way would be absolutely fine, but GIFs are known for being extremely big files. So, making some tweaks to hopefully save some space will surely be useful. How do we do that?

One of the most common tricks is ✨**transparency optimization**✨, which aims to only write what's different from frame to frame, and leave as transparent whatever did not change.

Essentially, we are DIGGING HOLES into every frame if the last one had sections that match exactly. This way, we kinda "see through" this frame into the last frame, because those "holes" are simply transparent colors.

To do this, we simply make the difference between every pair of frames and mark those pixel indices where there's a match. Then, we'll color this matches with a special color from the palette that we'll use to make holes. This can be absolutely any color.

Finally, we'll tell the encoder that whenever it finds this particular index in any frame, just smash it and make a hole there. This special color should not match with any other in the palette, so it's usually artificially generated.

This way, if we have a static background in our animation, this background will only be encoded once in the first frame. All the subsequent frames will simply have huge holes that let you see through the animation. That's beautiful! This decreases the file size by a ton.

## Conclusion

So, to recap:

- Gather every frame from your animation

- Generate a global palette

- Apply the palette to every frame

- Smash holes wherever applies

- Encode each frame

- Enjoy!
