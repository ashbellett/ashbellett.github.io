---
layout: post
category: "Analysis"
title:  "Limits"
tags: ["analysis", "limit"]
description: "Behaviour as points are approached"
---

The **absolute value** $$\lvert x\lvert$$ of a real number $$x \in \mathbb{R}$$ is $$x$$ when $$x$$ is positive, $$-x$$ when $$x$$ is negative and $$0$$ when $$x$$ is zero.

$$ \lvert x\lvert \, := \begin{cases}
    -x & x<0 \\
    0 & x=0 \\
    x & x>0
 \end{cases}
$$

Let $$x \in \mathbb{R}$$ and $$y \in \mathbb{R}$$ be real numbers. The **distance** $$d(x,y)$$ between $$x$$ and $$y$$ is the absolute value of their difference.

$$d(x,y) := \lvert x-y\lvert$$

Let $$x \in \mathbb{R}$$, $$y \in \mathbb{R}$$ and $$ \varepsilon>0 $$ be real numbers. $$x$$ and $$y$$ are $$ \varepsilon $$**-close** if and only if $$d(x,y) \leq \varepsilon $$.

Let $$S \subseteq \mathbb{R}$$ and $$x \in \mathbb{R}$$. $$x$$ is an **upper bound** of $$S$$ if $$s \leq x \, \forall s \in S$$ and $$x$$ is an **lower bound** of $$S$$ if $$x \leq s \, \forall s \in S$$.

Let $$S \subseteq \mathbb{R}$$ and $$\alpha \in \mathbb{R}$$. $$\alpha$$ is a **supremum** or **least upper bound** of $$S$$ if for all upper bounds $$z$$ of $$S$$, $$\alpha \leq z$$. $$\alpha$$ is an **infimum** or **greatest lower bound** of $$S$$ if for all lower bounds $$z$$ of $$S$$, $$z \leq \alpha$$.

Let $$S \subseteq \mathbb{R}$$ and $$\alpha \in \mathbb{R}$$. $$\alpha$$ is the **maximum** of $$S$$ if $$\alpha \in S$$ and $$s \leq \alpha \, \forall s \in S$$. $$\alpha$$ is the **minimum** of $$S$$ if $$\alpha \in S$$ and $$\alpha \leq s \, \forall s \in S$$. If $$S=\varnothing$$ or $$S$$ is not bounded then the maximum or minimum does not exist.

A **sequence** $$ (a_n) $$ is a function $$a:\mathbb{N} \rightarrow \mathbb{R}$$ that maps natural numbers $$n \in \mathbb{N}$$ to real numbers $$a_n \in \mathbb{R}$$.

A sequence $$ (a_n) $$ is **bounded** by real numbers $$A$$ and $$B$$ if and only if $$A< \lvert a_n\lvert<B \, \, \forall n$$.

A sequence $$ (a_n) $$ is **monotonically increasing** if and only if $$a_{n+1} \geq a_n \, \, \forall n$$ and **monotonically decreasing** if and only if $$a_{n+1} \leq a_n \, \, \forall n$$.

A sequence $$ (a_n) $$ **converges** to a real number $$L$$ if and only if $$ \exists N \in \mathbb{N}$$ such that $$ (a_n) $$ is $$ \varepsilon $$-close to $$L$$ for all $$ \varepsilon >0$$. Every convergent sequence is bounded and every bounded monotonic sequence is convergent. A sequence is **divergent** if it is not convergent.

If a sequence $$ (a_n) $$ converges to $$L \in \mathbb{R}$$, the sequence is **convergent** and has a **limit** $$L$$.

$$ L = \lim_{n\rightarrow \infty} a_n$$

The statement "$$ (a_n) $$ converges to $$L$$" is represented as $$a_n \rightarrow L$$ as $$n \rightarrow \infty $$.

A sequence $$ (a_n) $$ is a **Cauchy sequence** if there exists a positive integer $$N \in \mathbb{N}$$ such that for all natural numbers $$m, n \geq N$$, $$a_m$$ and $$a_n$$ are $$\varepsilon$$-close.

$$ \exists N \in \mathbb{N} : \lvert a_n-a_m \leq \varepsilon \lvert \, \forall m,n \geq N $$

A Cauchy sequence is a sequence whose terms become arbitrarily close to one another. A sequence is convergent if and only if it is a Cauchy sequence.

The **limit laws** are:

$$ \lim_{n\rightarrow \infty} \left( a_n \pm b_n \right) = \lim_{n\rightarrow \infty} a_n \pm \lim_{n\rightarrow \infty} b_n $$

$$ \lim_{n\rightarrow \infty} \left( c \cdot a_n \right) = c \cdot \lim_{n\rightarrow \infty} a_n, \, c \in \mathbb{R} $$

$$ \lim_{n\rightarrow \infty} \left( a_n \cdot b_n \right) = \lim_{n\rightarrow \infty} a_n \cdot \lim_{n\rightarrow \infty} b_n $$

$$ \lim_{n\rightarrow \infty} \left( \frac{a_n}{b_n} \right) = \frac{\lim_{n\rightarrow \infty} a_n}{\lim_{n\rightarrow \infty} b_n} \, \, \forall \, b_n, \lim_{n\rightarrow \infty} b_n \neq 0 $$

Some **common limits** include:

$$ \lim_{n\rightarrow \infty} \frac{1}{n} = 0$$

$$ \lim_{n\rightarrow \infty} c = c \, \, \forall c \in \mathbb{R} $$

$$ \lim_{n\rightarrow \infty} x^n = 0 \, \, \forall \, \lvert x\lvert < 0 $$

$$ \lim_{n\rightarrow \infty} x^{\frac{1}{n}} = 1 \, \, \forall \, x > 0 $$