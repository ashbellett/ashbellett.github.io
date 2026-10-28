---
layout: post
category: "real-analysis"
title:  "Real Numbers"
tags: ["real", "analysis", "real number"]
description: "Scalar quantities"
---

Let $$x \in \mathbb{R}$$ be a real number. The **absolute value** or **modulus** of $$x,$$ written $$\lvert x\rvert,$$ is $$x$$ when $$x$$ is positive, $$-x$$ when $$x$$ is negative and $$0$$ when $$x$$ is zero.

$$ \lvert x\rvert \, := \begin{cases}
    -x & x<0 \\
    0 & x=0 \\
    x & x>0
 \end{cases}
$$

Let $$x,y \in \mathbb{R}$$ be real numbers. The **distance** between $$x$$ and $$y,$$ written $$d(x,y),$$ is the absolute value of their difference.

$$d(x,y) := \lvert x-y\rvert$$

Let $$x,y \in \mathbb{R}$$ be real numbers and $$\varepsilon>0$$ be a real number. The numbers $$x$$ and $$y$$ are $$ \boldsymbol{\varepsilon} $$**-close** if and only if $$d(x,y) \leq \varepsilon .$$

Let $$S \subseteq \mathbb{R}$$ and $$x \in \mathbb{R}.$$ The number $$x$$ is an **upper bound** of $$S$$ if and only if $$s \leq x$$ for all $$s \in S.$$ The number $$x$$ is a **lower bound** of $$S$$ if and only if $$x \leq s$$ for all $$s \in S.$$

Let $$S \subseteq \mathbb{R}.$$ The set $$S$$ is **bounded above** if and only if it has an upper bound. The set $$S$$ is **bounded below** if and only if it has a lower bound. The set $$S$$ is **bounded** if and only if it is both bounded above and bounded below. Equivalently, $$S$$ is bounded if and only if $$\exists M \geq 0 : \lvert s\rvert \leq M \, \forall s \in S.$$

Let $$S \subseteq \mathbb{R}$$ and $$\alpha \in \mathbb{R}.$$ The number $$\alpha$$ is the **supremum** or **least upper bound** of $$S,$$ written $$\sup S,$$ if and only if $$\alpha$$ is an upper bound of $$S$$ and $$\alpha \leq z$$ for every upper bound $$z$$ of $$S.$$ The number $$\alpha$$ is the **infimum** or **greatest lower bound** of $$S,$$ written $$\inf S,$$ if and only if $$\alpha$$ is a lower bound of $$S$$ and $$z \leq \alpha$$ for every lower bound $$z$$ of $$S.$$ Every non-empty set that is bounded above has a supremum, and every non-empty set that is bounded below has an infimum.

Let $$S \subseteq \mathbb{R}$$ and $$\alpha \in \mathbb{R}.$$ The number $$\alpha$$ is the **maximum** of $$S,$$ written $$\max S,$$ if and only if $$\alpha \in S$$ and $$s \leq \alpha$$ for all $$s \in S.$$ The number $$\alpha$$ is the **minimum** of $$S,$$ written $$\min S,$$ if and only if $$\alpha \in S$$ and $$\alpha \leq s$$ for all $$s \in S.$$ The maximum and minimum have the following properties:
- if the maximum exists then it is the supremum, and if the minimum exists then it is the infimum;
- if $$S=\varnothing$$ or $$S$$ is not bounded above then the maximum does not exist;
- if $$S=\varnothing$$ or $$S$$ is not bounded below then the minimum does not exist;
- a non-empty bounded set need not have a maximum or minimum, for example the set $$\{x\in\mathbb{R}:0<x<1\}$$ has neither.

Let $$X \subseteq \mathbb{R}.$$ The set $$X$$ is an **interval** if and only if for all $$x,y \in X$$ with $$x<y,$$ every $$z \in \mathbb{R}$$ with $$x<z<y$$ is also in $$X.$$ The empty set is an interval since it has no such $$x$$ and $$y.$$

Let $$X \subseteq \mathbb{R}$$ be a non-empty bounded interval. The **endpoints** of $$X$$ are $$a=\inf X$$ and $$b=\sup X.$$ The interval $$X$$ is one of four sets, depending on which endpoints it contains:
- the **open interval** $$(a,b):=\{x\in\mathbb{R}:a<x<b\};$$
- the **closed interval** $$[a,b]:=\{x\in\mathbb{R}:a\leq x\leq b\};$$
- the **half-open intervals** $$[a,b):=\{x\in\mathbb{R}:a\leq x<b\}$$ and $$(a,b]:=\{x\in\mathbb{R}:a<x\leq b\}.$$

An unbounded interval is one of $$(a,\infty),$$ $$[a,\infty),$$ $$(-\infty,b),$$ $$(-\infty,b]$$ or $$\mathbb{R}.$$

Let $$X \subseteq \mathbb{R}$$ be a bounded interval. The **length** of $$X,$$ written $$\lvert X\rvert,$$ is $$b-a$$ if $$X$$ is non-empty with endpoints $$a$$ and $$b,$$ and $$0$$ if $$X$$ is empty.
