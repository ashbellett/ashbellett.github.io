---
layout: post
category: "Linear Algebra"
title:  "Matrices"
tags: ["linear algebra", "matrix"]
description: "Multi-dimensional data structures"
---

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