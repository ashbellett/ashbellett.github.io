---
layout: post
category: "real-analysis"
title:  "Real Numbers"
tags: ["real", "analysis", "real number"]
description: "Scalar quantities"
---

The **absolute value** or **modulus** $$\lvert x\lvert$$ of a real number $$x \in \mathbb{R}$$ is $$x$$ when $$x$$ is positive, $$-x$$ when $$x$$ is negative and $$0$$ when $$x$$ is zero.

$$ \lvert x\lvert \, := \begin{cases}
    -x & x<0 \\
    0 & x=0 \\
    x & x>0
 \end{cases}
$$

Let $$x,y \in \mathbb{R}$$ be real numbers. The **distance** $$d(x,y)$$ between $$x$$ and $$y$$ is the absolute value of their difference.

$$d(x,y) := \lvert x-y\lvert$$

Let $$x,y,\varepsilon \in \mathbb{R}$$ be real numbers and $$ \varepsilon>0 .$$ $$x$$ and $$y$$ are $$ \boldsymbol{\varepsilon} $$**-close** if and only if $$d(x,y) \leq \varepsilon .$$

Let $$S \subseteq \mathbb{R}$$ and $$x \in \mathbb{R}.$$ $$x$$ is an **upper bound** of $$S$$ if $$s \leq x \, \forall s \in S$$ and $$x$$ is an **lower bound** of $$S$$ if $$x \leq s \, \forall s \in S.$$

Let $$S \subseteq \mathbb{R}$$ and $$\alpha \in \mathbb{R}.$$ $$\alpha$$ is a **supremum** or **least upper bound** of $$S$$ if for all upper bounds $$z$$ of $$S,$$ $$\alpha \leq z.$$ $$\alpha$$ is an **infimum** or **greatest lower bound** of $$S$$ if for all lower bounds $$z$$ of $$S,$$ $$z \leq \alpha.$$

Let $$S \subseteq \mathbb{R}$$ and $$\alpha \in \mathbb{R}.$$ $$\alpha$$ is the **maximum** of $$S$$ if $$\alpha \in S$$ and $$s \leq \alpha \, \forall s \in S.$$ $$\alpha$$ is the **minimum** of $$S$$ if $$\alpha \in S$$ and $$\alpha \leq s \, \forall s \in S.$$ If $$S=\varnothing$$ or $$S$$ is not bounded then the maximum or minimum does not exist.
