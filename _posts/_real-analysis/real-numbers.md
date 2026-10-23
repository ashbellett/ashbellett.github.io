---
layout: post
category: "real-analysis"
title:  "Real Numbers"
tags: ["real", "analysis", "real number"]
description: "Scalar quantities"
---

The **absolute value** or **modulus** $$\lvert x\rvert$$ of a real number $$x \in \mathbb{R}$$ is $$x$$ when $$x$$ is positive, $$-x$$ when $$x$$ is negative and $$0$$ when $$x$$ is zero.

$$ \lvert x\rvert \, := \begin{cases}
    -x & x<0 \\
    0 & x=0 \\
    x & x>0
 \end{cases}
$$

Let $$x,y \in \mathbb{R}$$ be real numbers. The **distance** $$d(x,y)$$ between $$x$$ and $$y$$ is the absolute value of their difference.

$$d(x,y) := \lvert x-y\rvert$$

Let $$x,y,\varepsilon \in \mathbb{R}$$ be real numbers and $$ \varepsilon>0 .$$ $$x$$ and $$y$$ are $$ \boldsymbol{\varepsilon} $$**-close** if and only if $$d(x,y) \leq \varepsilon .$$

Let $$S \subseteq \mathbb{R}$$ and $$x \in \mathbb{R}.$$ $$x$$ is an **upper bound** of $$S$$ if $$s \leq x \, \forall s \in S$$ and $$x$$ is a **lower bound** of $$S$$ if $$x \leq s \, \forall s \in S.$$ $$S$$ is **bounded above** if it has an upper bound, **bounded below** if it has a lower bound and **bounded** if it is both bounded above and bounded below. Equivalently, $$S$$ is bounded if and only if $$\exists M \geq 0 : \lvert s\rvert \leq M \, \forall s \in S.$$

Let $$S \subseteq \mathbb{R}$$ and $$\alpha \in \mathbb{R}.$$ $$\alpha$$ is the **supremum** or **least upper bound** of $$S$$ if $$\alpha$$ is an upper bound of $$S$$ and for all upper bounds $$z$$ of $$S,$$ $$\alpha \leq z.$$ $$\alpha$$ is the **infimum** or **greatest lower bound** of $$S$$ if $$\alpha$$ is a lower bound of $$S$$ and for all lower bounds $$z$$ of $$S,$$ $$z \leq \alpha.$$

Let $$X \subseteq \mathbb{R}.$$ $$X$$ is an **interval** if and only if for all $$x,y \in X$$ with $$x<y,$$ every $$z \in \mathbb{R}$$ with $$x<z<y$$ is also in $$X.$$ The empty set is an interval since it has no such $$x,y.$$ A non-empty bounded interval has **endpoints** $$a=\inf X$$ and $$b=\sup X$$ and is one of four sets, depending on which endpoints it contains: the **open interval** $$(a,b)=\{x\in\mathbb{R}:a<x<b\},$$ the **closed interval** $$[a,b]=\{x\in\mathbb{R}:a\leq x\leq b\}$$ and the **half-open intervals** $$[a,b)$$ and $$(a,b].$$ An unbounded interval is one of $$(a,\infty),$$ $$[a,\infty),$$ $$(-\infty,b),$$ $$(-\infty,b]$$ or $$\mathbb{R}.$$ The **length** of a non-empty bounded interval is $$b-a,$$ and the empty set has length $$0.$$

Let $$S \subseteq \mathbb{R}$$ and $$\alpha \in \mathbb{R}.$$ $$\alpha$$ is the **maximum** of $$S$$ if $$\alpha \in S$$ and $$s \leq \alpha \, \forall s \in S.$$ $$\alpha$$ is the **minimum** of $$S$$ if $$\alpha \in S$$ and $$\alpha \leq s \, \forall s \in S.$$ If $$S=\varnothing$$ or $$S$$ is not bounded above then the maximum does not exist, and if $$S=\varnothing$$ or $$S$$ is not bounded below then the minimum does not exist. A non-empty bounded set need not have a maximum or minimum either; for example, the open interval $$(0,1)$$ has neither.
