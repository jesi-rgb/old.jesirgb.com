---
title: "PageRank: A trillion dollar algorithm"
description: Reinventing recommendation systems
date: 23/05/2022
tags: programming, animation, reducible
pinned: true
---

# PageRank: A trillion dollar algorithm

_23/05/2022_

It's video time! In this new video, we are going to go through the meat and potatoes of **PageRank**, the first iteration of the software that today we know as Google. These days, one might consider Google as an advertisements company, rather than a technology one, but in the early days, it was nothing more than a search engine.

The reason for its inmense successs was how effective it was at doing the thing it was supposed to do: search. Whenever a user types in a query, _like "mass of the earth"_, this piece of software should return whatever document that it has within its reach is **most relevant**. And what PageRank does is, literally, **rank pages based on their relevance**. As stated in many places, the name is doubly appropriate, since it ranks pages but also, one of its developers is called Larry Page.

Now, how this ranking is done is the thick of it. And one very interesting way of looking a this problem is through Markov Chains, since they provide a very useful framework to solve this particular problem. By finding the stationary distribution of the markov chain that lies under the network of pages, we can rank each page's relevance and thus, offer a high quality recommendation system. If all these terms sound weird to you, I kindly invite to watch the video! _(the invitation might be a bit biased but...)_

On top of this, the video is seasoned with lots of engineering techniques and a powerful reflection of "**perfection vs good enough**", which, in my opinion, is key to solve this kind of very hard problems.

That's it for today! Hope you like it! See ya in the next one!

<iframe width="560" height="315" src="https://www.youtube.com/embed/JGQe4kiPnrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
