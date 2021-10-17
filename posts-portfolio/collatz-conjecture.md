---
title: Collatz conjecture
description: Breaking down the process for some Veritasium-flavoured bubbly math
date: 30/07/2021
tags: programming, animation
---

# Collatz conjecture 
*30/07/2021*

*I have written another article in my [blogpost](https://thinking-thoughts.vercel.app/blog/veritasium-math-freelancer) where I go into more detail about the problem itself and why it's interesting. Here, I will talk more about the process on how we worked to achieve this particular animation.*


## The idea

Given that we know how the problem works and some of its properties, we wanted to see what was the pattern that formed in some specific case. The case in particular involved laying out all the odd numbers and exploring what lies behind them.

You see, when we have an odd number, the problem asks to multiply and add one. That will **always** yield an even number. That is 50% of the times we try with any number, since odd numbers represent 50% of all natural numbers. Then, ocasionally we'll obtain an odd number again, or maybe not.

The thing is, there is a pattern under this concept. Given all odd numbers, 50% of the time we'll obtain an even number AND end up in an odd number. 25% of the time we'll need to divide twice before reaching an odd number. 1/8th of the time we'll need to divide tree times before reaching an odd number... and so on. Can you see the pattern? This is what we are going to visualize.

## The process
![Frame of the animation](/portfolio-images/collatz-conjecture/long-curtain.png)
In order to show this property, we'll put every odd number up until some maximum one, like 257 in my case. You can set the upper bound to whatever you want, it'll just show more numbers and the pattern will be better appreciated the more numbers you add.

For that, we create a row of nodes with all the odd numbers, which can be easily accomplished in python like this, where we specify the beginning, end and step, to get every other number starting from one:

```python
for i in range(1, max_number, 2):
	# do things
```

this will give the first row of all odd numbers up until `max_number`.

From here, it's just as easy as setting up a `while` loop for each number in our first row and keep dividing as long as we can. That is, if we divide and still obtain an even number, keep dividing. If we run into an odd number, stop and go with the next in the row. 

```python
nodes = []
for each odd_number:
	result = odd_number
	while result % 2 == 0:
		result /= 2
		n = Node(result) # create a node

		# save the nodes in a data structure
		nodes.append(n)	
```


This will also allow to make groups out of the "columns", which can afterwards be animated in any specific order to match the voice over.


## The result
Here are some frames of the result, all using [ManimGL](https://github.com/3b1b/manim)

![Frame of the animation](/portfolio-images/collatz-conjecture/curtain.png)


![Frame of the animation](/portfolio-images/collatz-conjecture/main-gif.gif)



Finally, here's the published video. We put a lot of effort and passion into it, so hopefully you'll love it! 💖

<iframe width="560" height="315" src="https://www.youtube.com/embed/094y1Z2wpJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Manim is a great way of developing animations and I encourage anyone interested in this field to give it a try. The animation side of things makes you more aware of every step in the algorithm you are developing, and forces to change your mindset to be very thoughtful about what you want to represent and how. In the same way that you're usually told to "*develop a given algorithm from scratch to really learn how it works*", I would go as far as **animating** it. It is really the definitive exercise.