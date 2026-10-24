---
layout: post
category: "real-analysis"
title:  "Continuity"
tags: ["real", "analysis", "continuity"]
description: "Whether a function is unbroken"
---

Let $$X \subseteq \mathbb{R}$$ be a subset of real numbers, $$x_0 \in X$$ and $$f: X \rightarrow \mathbb{R}$$ be a function that maps elements of $$X$$ to real numbers. The function $$f$$ is **continuous** at $$x_0$$ if and only if the limit of $$f(x)$$ as $$x \rightarrow x_0$$ is equal to $$f(x_0).$$

$$ \lim_{x \rightarrow x_0} f(x) = f(x_0) $$

This uses the limit of a function, which requires $$x_0$$ to be a limit point of $$X.$$ If $$x_0$$ is an isolated point of $$X$$ (some open interval around $$x_0$$ contains no other point of $$X$$) then $$f$$ is continuous at $$x_0$$ by convention. Written out, $$f$$ is continuous at $$x_0$$ if and only if for every $$\varepsilon>0$$ there exists $$\delta>0,$$ which may depend on both $$\varepsilon$$ and $$x_0,$$ such that

$$\lvert f(x)-f(x_0)\rvert\leq\varepsilon\,\,\forall\,x\in X,\,\lvert x-x_0\rvert<\delta.$$

The function $$f$$ is continuous on $$X$$ if and only if $$f$$ is continuous at $$x \, \, \forall \, x \in X.$$ Otherwise, $$f$$ is **discontinuous**.

Let $$f,g:X\rightarrow\mathbb{R}$$ be continuous at $$x_0\in X$$ and $$c\in\mathbb{R}.$$ The limit laws give that $$f+g,$$ $$f-g,$$ $$c\,f$$ and $$f\,g$$ are continuous at $$x_0,$$ and $$\frac{f}{g}$$ is continuous at $$x_0$$ if $$g(x_0)\neq 0.$$ Let $$Y\subseteq\mathbb{R},$$ $$f:X\rightarrow Y$$ be continuous at $$x_0$$ and $$g:Y\rightarrow\mathbb{R}$$ be continuous at $$f(x_0).$$ The composition $$g\circ f:X\rightarrow\mathbb{R}$$ is continuous at $$x_0.$$ Constant functions and the identity function $$x\mapsto x$$ are continuous, so every polynomial is continuous on $$\mathbb{R}$$ and every rational function is continuous wherever its denominator is non-zero.

Let $$f_n:X\rightarrow\mathbb{R}$$ be a sequence of functions that converges uniformly to $$f:X\rightarrow\mathbb{R}.$$ If every $$f_n$$ is continuous at $$x_0\in X$$ then $$f$$ is continuous at $$x_0,$$ so a uniform limit of continuous functions is continuous. Pointwise convergence does not suffice, since $$f_n(x)=x^n$$ converges pointwise on $$\left[0,1\right]$$ to a discontinuous function. A power series converges uniformly on every closed interval inside its interval of convergence and its partial sums are polynomials, so it is continuous on $$\left(c-R,c+R\right);$$ in particular the exponential, cosine and sine functions are continuous on $$\mathbb{R}.$$

The **intermediate value theorem** states that if a function $$f:[a,b]\rightarrow\mathbb{R}$$ is continuous and $$C$$ lies strictly between $$f(a)$$ and $$f(b)$$ (either $$f(a)<C<f(b)$$ or $$f(b)<C<f(a)$$) then there is at least one $$c\in(a,b) : f(c)=C.$$

Let $$f:X\rightarrow\mathbb{R}$$ be a function. $$f$$ is bounded on $$X$$ if and only if its image $$f(X)$$ is a bounded set.

$$\exists M\geq 0:\lvert f(x)\rvert\leq M\,\,\forall\,x\in X$$

The **extreme value theorem** states that if $$f:[a,b]\rightarrow\mathbb{R}$$ is continuous on a closed bounded interval then $$f$$ is bounded and attains its maximum and minimum.

$$\exists\,x_{\min},x_{\max}\in[a,b]:f\left(x_{\min}\right)\leq f(x)\leq f\left(x_{\max}\right)\,\,\forall\,x\in[a,b]$$

Both the intermediate and extreme value theorems can fail on intervals that are not closed and bounded. For example, $$f(x)=\frac{1}{x}$$ is continuous on $$(0,1]$$ but unbounded.

Let $$X$$ be an interval and $$f:X\rightarrow\mathbb{R}$$ be continuous. The image $$f(X)$$ is an interval, since by the intermediate value theorem it contains every value between any two of its elements. If $$X=[a,b]$$ is closed and bounded then, by the extreme value theorem, $$f([a,b])$$ is the closed bounded interval $$\left[f\left(x_{\min}\right),f\left(x_{\max}\right)\right].$$

A function $$f:X\rightarrow\mathbb{R}$$ is **uniformly continuous** on $$X$$ if and only if for every $$\varepsilon>0$$ there exists $$\delta>0$$ that depends on $$\varepsilon$$ alone such that $$f(x)$$ and $$f(y)$$ are $$\varepsilon$$-close whenever $$x,y\in X$$ are within $$\delta$$ of each other.

$$\forall\varepsilon>0\,\exists\delta>0:\lvert f(x)-f(y)\rvert\leq\varepsilon\,\,\forall\,x,y\in X,\,\lvert x-y\rvert<\delta$$

A uniformly continuous function is continuous. The converse is false: $$f(x)=x^2$$ is continuous but not uniformly continuous on $$\mathbb{R},$$ and $$f(x)=\frac{1}{x}$$ is continuous but not uniformly continuous on $$(0,1].$$ The **Heine–Cantor theorem** states that a continuous function on a closed bounded interval $$[a,b]$$ is uniformly continuous.

A function $$f:X\rightarrow\mathbb{R}$$ is **Lipschitz continuous** on $$X$$ if and only if there exists a **Lipschitz constant** $$L\geq 0$$ that bounds how fast $$f$$ can change.

$$\lvert f(x)-f(y)\rvert\leq L\,\lvert x-y\rvert\,\,\forall\,x,y\in X$$

A Lipschitz continuous function is uniformly continuous, since $$\delta=\frac{\varepsilon}{L}$$ works for every $$\varepsilon>0$$ when $$L>0.$$ The converse is false: $$f(x)=\sqrt{x}$$ is uniformly continuous but not Lipschitz continuous on $$[0,1].$$

Let $$X$$ be an interval and $$f:X\rightarrow\mathbb{R}$$ be a function. $$f$$ is **monotonically increasing** if and only if $$f(x)\leq f(y)$$ whenever $$x<y$$ and **strictly increasing** if and only if $$f(x)<f(y)$$ whenever $$x<y.$$ $$f$$ is **monotonically decreasing** or **strictly decreasing** if and only if $$-f$$ is monotonically or strictly increasing respectively. $$f$$ is **monotonic** if it is either monotonically increasing or monotonically decreasing, and **strictly monotonic** if it is either strictly increasing or strictly decreasing.

A monotonic function $$f$$ on an interval $$X$$ is continuous if and only if its image $$f(X)$$ is an interval. A monotonic function can be discontinuous at no more than countably many points of $$X.$$

Let $$X$$ be an interval and $$f:X\rightarrow\mathbb{R}$$ be continuous and strictly monotonic. Then $$f$$ is injective, its image $$Y=f(X)$$ is an interval and its inverse function $$f^{-1}:Y\rightarrow X$$ is continuous and strictly monotonic in the same direction as $$f.$$ Conversely, a continuous injective function on an interval is strictly monotonic. For example, $$f(x)=x^n$$ is continuous and strictly increasing on $$[0,\infty)$$ for $$n\in\mathbb{N},$$ so the $$n$$-th root $$f^{-1}(y)=y^{\frac{1}{n}}$$ is continuous and strictly increasing on $$[0,\infty).$$
