---
layout: post
category: "Linear Algebra"
title:  "Vector Spaces"
tags: ["linear algebra", "vector space"]
description: "A fundamental linear algebra structure"
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
