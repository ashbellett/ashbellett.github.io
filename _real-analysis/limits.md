---
layout: post
category: "Real analysis"
title:  "Limits"
tags: ["real analysis", "limit"]
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

A **sequence** $$ \left(a_n \right)_{n \in \mathbb{N}}^\infty $$ is a function $$a:\mathbb{N} \rightarrow \mathbb{R}$$ that maps natural numbers $$n \in \mathbb{N}$$ to real numbers $$a_n \in \mathbb{R}$$.

A sequence $$ (a_n)_{n \in \mathbb{N}}^\infty $$ is **bounded** by real numbers $$A$$ and $$B$$ if and only if $$A< \lvert a_n\lvert<B \, \, \forall n$$.

A sequence $$ (a_n)_{n \in \mathbb{N}}^\infty $$ is **monotonically increasing** if and only if $$a_{n+1} \geq a_n \, \, \forall n$$ and **monotonically decreasing** if and only if $$a_{n+1} \leq a_n \, \, \forall n$$.

A sequence $$ (a_n)_{n \in \mathbb{N}}^\infty $$ **converges** to a real number $$C$$ if and only if $$ \exists N \in \mathbb{N}$$ such that $$ (a_n)_{n=N}^\infty $$ is $$ \varepsilon $$-close to $$C$$ for all $$ \varepsilon >0$$. Every convergent sequence is bounded and every bounded monotonic sequence is convergent. A sequence is **divergent** if it is not convergent.

If a sequence $$ (a_n)_{n \in \mathbb{N}}^\infty $$ converges to $$L \in \mathbb{R}$$, the sequence is **convergent** and has a **limit** $$L$$.

$$ L = \lim_{n\rightarrow \infty} a_n$$

The statement "$$ (a_n)_{n \in \mathbb{N}}^\infty $$ converges to $$L$$" is represented as $$a_n \rightarrow L$$ as $$n \rightarrow \infty $$.

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