---
title: Analysis of Kali Uchis' "Sin Miedo"
description: Diving deep into this album's structure, language and musical theory
date: 17/08/2021
tags: programming, design, infographics
---

# Analysis of Kali Uchis' <br>"Sin Miedo"
*17/08/2021*



In this post, I'll tackle some of the ideas and thought processes I went through to elaborate a music-and-language-flavoured infographic about Kali Uchis' third album. If you want to skip all the details, the final product <a href="#final-product">lives at the very end of this page</a>.


## The idea
The first idea that inspired me to make this project was the way in which Kali interchanged languages. If you've listened to any of the songs, you probably noticed that Spanish and English are used all over the place, apparently where Kali feels it sounds better or even sometimes to make rhymes between the two. Amazing!

I am a native Spanish speaker and have been studying English for almost my whole life, so this felt very at home. 

First thing that came to mind was: *can we calculate the Spanish-English percentage for each song?*


## The algorithms and data

Obviously, I could go and manually tag each verse and then count them all, but we don't do that here. I used a very simple **Natural Language Processing** (NLP for short) algorithm that can detect the language a certain input of text is in.

I did this for each verse, that is, for each sentence in the poem. Since these algorithms are very well trained in English, but not so much in other languages, I counted how many verses were in English, and made 1 minus that to obtain the Spanish proportion. This is an example of our target data:


| Verse                                 | Language |
| :------------------------------------- | --------:|
| Suave sabe a cherry cola              | ES       |
| Dura como una pistola                 | ES       |
| If it’s true life is what you make it | EN       |
| All the seeds I planted will grow     | EN       | 


Of course, there are some edge cases in which a verse can be in both languages at the same time:

> "Mami ay que rico", that's all I hear him sayin'

Or some verses that only contain words like "*yeah*".

I didn't think too much about these cases, since I am not pretending this to be a thorough analysis of the language use in the album, but rather a mildly orientative perspective on the bilingual nature of its composition.

So basically, now we can iterate through each text file containing the lyrics for each song, and for each song iterate through each verse to get the language tag. After that, we count and divide to obtain a percentage of English-Spanish per song. 

Here some python-flavoured pseudo-code:

```python
for song in songs:
	for verse in song:
		verse_langs.append(
			detect_language(verse)
		)
	es_count = verse_langs.count('ES')
	es_proportion = es_count / len(song)
	en_proportion = 1 - es_proportion
	
```


Here's the output data:



| Song                 	|   ES % 	|
|:----------------------|-------:	|
| fue mejor            	|  65.12 	|
| la luna enamorada    	|  72.22 	|
| telepatia            	|  59.52 	|
| te pongo mal         	|  78.16 	|
| angel sin cielo      	| 100.00 	|
| la luz               	|  92.16 	|
| aguardiente y limon  	|  67.74 	|
| no eres tu           	|  72.73 	|
| de nadie             	|  77.55 	|
| que te pedi          	| 100.00 	|
| vaya con dios        	|  90.00 	|
| aqui yo mando        	| 76.19  	|
| quiero sentirme bien 	| 50.00  	|


### Some other ideas
While on the topic for analyzing some aspects of the album, I decided to go a step further and not only look at the lyrics, but also at the music.

#### Tempo
First thing that jumped to mind was extracting the BPM (beats per minute) or tempi for the songs. This was not a fancy-pants process, I just looked it up on google and noted it down one by one. After all there's only 13 songs.

#### Keys and Chords
The last bit of information I wanted to extract was the key for each song.

To do this, I listened to every song with my guitar by my side and carefully analyzed the key for each song.

As always, there were some edge cases, like some songs don't come in standard modes like Ionian or Eolian, but more so like Phrygian. I decided to normalize everything to their relative Ionian mode. So, if a song was in E Phrygian, I would note down C Ionian, which has the exact same notes.

I know it's not the same, but I wanted to find a way in which every data point was referring to the exact same thing, and this process was the closest thing to "normalizing" a set of keys that I could think of.

I also went and extracted each unique chord for every song, but didn't use that data in the end. Funny part is what took the most time by a long run. It is what it is!

## Design

After having done all the hard work of elaborating these datasets, it was time to have fun with shapes and color!

I used mainly [RAWGraphs](https://rawgraphs.io) to do the hard work of creating the chart, and the absolute banger of it is it can be exported to SVG.

This means that you can import this file into Illustrator or Inkscape, or whatever other vector-based software and start tweaking as needed. 

And the cool thing is that, being carefully not to mess it up while editing, you have the proportions correctly calculated, which is one of the most important things!

I created a palette based on the album's cover, and coloured the graphs accordingly. Easy!

<a id="final-product"></a>


## The final product

Here's the final product for you to see. You can click on it to view it in glorious full resolution. Also, I published it on [twitter](https://twitter.com/jesi_rgb/status/1426575462315307010?s=20). Feel free to reach out if you have any other questions!

<a href="/portfolio-images/analysis-sin-miedo/sin-miedo-analysis.pdf">

![Final Product](/portfolio-images/analysis-sin-miedo/analysis-sin-miedo.jpg)

</a>

