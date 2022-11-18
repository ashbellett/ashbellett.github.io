---
layout: post
category: "Set Theory"
title:  "Logic"
tags: ["set theory", "logic"]
description: "The formal language of mathematics"
---

Below is some block mathematics.

$$ \int_0^\infty x\psi(x) dx = 1 $$

Here is some inline mathematics $$ \int_0^\infty \psi f(x) dx = 1 $$

Below is some Python code

{% highlight python %}
import math

class Point:

  def __init__(self, x: float, y: float, z: float):
    self.x = x
    self.y = y
    self.z = z

  def distance(self) -> float:
    math.sqrt(x*x + y*y + z*z)
    
{% endhighlight %}
