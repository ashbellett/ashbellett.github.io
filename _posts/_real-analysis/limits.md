---
title:  "Limits"
description: "Behaviour as points are approached"
---

Let $$ (a_n) $$ be a sequence that converges to $$L \in \mathbb{R}.$$ The **limit** of $$ (a_n) $$ is the number $$L.$$

$$ L = \lim_{n\rightarrow \infty} a_n$$

The statement "$$ (a_n) $$ converges to $$L$$" is also written $$a_n \rightarrow L$$ as $$n \rightarrow \infty .$$

Let $$ (a_n) $$ and $$ (b_n) $$ be convergent sequences and $$c \in \mathbb{R}.$$ The **limit laws** state that sums, differences, scalar multiples, products and quotients of convergent sequences converge to the corresponding combinations of their limits.

$$ \lim_{n\rightarrow \infty} \left( a_n \pm b_n \right) = \lim_{n\rightarrow \infty} a_n \pm \lim_{n\rightarrow \infty} b_n $$

$$ \lim_{n\rightarrow \infty} \left( c \cdot a_n \right) = c \cdot \lim_{n\rightarrow \infty} a_n $$

$$ \lim_{n\rightarrow \infty} \left( a_n \cdot b_n \right) = \lim_{n\rightarrow \infty} a_n \cdot \lim_{n\rightarrow \infty} b_n $$

$$ \lim_{n\rightarrow \infty} \left( \frac{a_n}{b_n} \right) = \frac{\lim_{n\rightarrow \infty} a_n}{\lim_{n\rightarrow \infty} b_n} \,\, \mathrm{if} \,\, b_n \neq 0 \, \forall n \,\, \mathrm{and} \,\, \lim_{n\rightarrow \infty} b_n \neq 0 $$

The convergence assumption is necessary: if $$a_n = n$$ and $$b_n = -n$$ then $$a_n + b_n \rightarrow 0$$ even though neither $$\lim_{n\rightarrow \infty} a_n$$ nor $$\lim_{n\rightarrow \infty} b_n$$ exists.

The following **common limits** hold:

$$ \lim_{n\rightarrow \infty} \frac{1}{n} = 0$$

$$ \lim_{n\rightarrow \infty} c = c \, \, \forall c \in \mathbb{R} $$

$$ \lim_{n\rightarrow \infty} x^n = 0 \, \, \forall \, \lvert x\rvert < 1 $$

$$ \lim_{n\rightarrow \infty} x^{\frac{1}{n}} = 1 \, \, \forall \, x > 0 $$

Let $$X \subseteq \mathbb{R}$$ and $$x_0 \in \mathbb{R}.$$ The point $$x_0$$ is a **limit point** of $$X$$ if and only if every open interval containing $$x_0$$ contains a point of $$X$$ other than $$x_0.$$

Let $$X \subseteq \mathbb{R},$$ $$f: X \rightarrow \mathbb{R}$$ be a function, $$x_0 \in \mathbb{R}$$ be a limit point of $$X$$ and $$L \in \mathbb{R}.$$ The function $$f$$ has the **limit** $$L$$ as $$x \rightarrow x_0$$ if and only if for every $$\varepsilon > 0$$ there exists $$\delta > 0$$ such that $$f(x)$$ is $$\varepsilon$$-close to $$L$$ for all $$x \in X$$ with $$0 < \lvert x-x_0\rvert < \delta.$$

$$ \lim_{x\rightarrow x_0} f(x) = L \Leftrightarrow \forall \varepsilon > 0 \, \exists \delta > 0 : \lvert f(x)-L \rvert \leq \varepsilon \, \forall x \in X, \, 0 < \lvert x-x_0\rvert < \delta $$

The value $$f(x_0),$$ if it is defined, plays no part in the limit. The limit laws hold for limits of functions in the same form as for limits of sequences.

Let $$X \subseteq \mathbb{R},$$ $$f: X \rightarrow \mathbb{R}$$ be a function and $$x_0 \in \mathbb{R}$$ be a limit point of $$X.$$ The function $$f$$ has the limit $$L$$ as $$x \rightarrow x_0$$ if and only if $$f(x_n) \rightarrow L$$ for every sequence $$(x_n)$$ of points of $$X \setminus \{x_0\}$$ with $$x_n \rightarrow x_0.$$
