---
title: "PNG vs QOI: simplicity at its finest"
description: Rethinking the most popular image format
date: 29/03/2022
tags: programming, animation, reducible
pinned: true
---

# PNG vs QOI: simplicity at its finest
*29/03/2022*


In this new episode, we are going to talk a lot about PNG: how it works, how it does what it does 
and more importantly, why it does what it does.

PNG is arguably the most popular image format, at least in the web. It is characterized for being a *lossless image format*, which means that no data is lost in the encoding part. This is begs the age old question: *"which is best? PNG or JPEG?"*

The boring answer is... it depends. PNG won't lose any of the data in the transformation, but that also makes it much more heavy. JPEG removes only specific frequencies of our images, so that hopefully the change is not noticeable. 

The main point is that JPEG is incredibly good at **compressing photographs**. Like, real world photographs. The quality is very good and the compression ratios are insane. On the other hand, PNG is not only great, but almost compulsory when rasterizing vector shapes... namely **icons**. Icons usually feature extremely hard edges and vibrant contrast, things that JPEG does not deal well with. For this reason, PNG is the de-facto choice when doing these kind of things. Hopefully that explains a bit more about why one is simply **not better** than the other.

In this video, we talk about how PNG attempts to save your data not losing absolutely anything in the way. And towards the end, we present a brand new (quite literally) algorithm, developed by Dominic Szablewski, called **QOI (standing for Quite Okay Image format)**. This new algorithm proves to be extremely close to PNG in compression ratio but also much, much faster in compression speed, an interesting factor that can be translated to something like *lossless video compression*.

Anyways, as always, here's the final product!

<iframe width="560" height="315" src="https://www.youtube.com/embed/EFUYNoFRHQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>