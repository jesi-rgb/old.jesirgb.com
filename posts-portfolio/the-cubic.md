---
title: The problem that broke math
description: Showcasing some of the animations in Veritasium's take on cubic functions
date: 02/11/2021
tags: programming, animation, veritasium
---

# The problem that broke math
*02/11/2021*

In this episode, the team at Veritasium tries to depict how hard was for mathematicians to find what the solution to an apparently simple polynomial could be, only to lead to one of history's most breakthroughs in mathematics.

I won't spoil the story here, since it is REALLY good. But I will share some of the works I did for the team. In my [blogpost](/blog) I will breakdown how some of them were made, since what looks very simple and obivous can sometimes be incredibly elaborate to pull off!


## The idea

The main idea was to depict the geometric processes through which all the mathematicians mentioned had to go to solve any problem at the time. We could've shown graphs and functions, and more advanced algebra to solve the problems, but that was not what these people were doing. They based all their knowledge and trust in what they could *see* and *touch*, so the presence of geometry was quite necessary.


## Completing the square

Here's the full animation for the geometric proof of the classic **quadratic formula** that you probably know of! 


![Cubes dancing](/portfolio-images/the-cubic/squares.mp4)

## Completing the cube

Here's the animation for the exact same thing but in 3D, solving the **cubic formula** in this case. 

Though very subtle, all the cubes have what artists would consider a *stroke*, that is like a black outline. In [this article in my blog](/blog/stroke-cubes-manim), I'll carry you through the process of creating such thing, since Manim does not allow for stroke polyhedra when in the 3D realm. We had to pull some clever tricks to make it work!

![Cubes dancing](/portfolio-images/the-cubic/cubes.mp4)




