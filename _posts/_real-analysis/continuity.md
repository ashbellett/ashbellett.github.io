---
layout: post
category: "real-analysis"
title:  "Continuity"
tags: ["real", "analysis", "continuity"]
description: "Whether a function is unbroken"
---

Let $$X \subseteq \mathbb{R}$$ and $$x_0 \in X.$$ The point $$x_0$$ is an **isolated point** of $$X$$ if and only if some open interval containing $$x_0$$ contains no other point of $$X.$$ A point of $$X$$ is either an isolated point of $$X$$ or a limit point of $$X.$$

Let $$X \subseteq \mathbb{R},$$ $$f: X \rightarrow \mathbb{R}$$ be a function and $$x_0 \in X.$$ The function $$f$$ is **continuous** at $$x_0$$ if and only if for every $$\varepsilon>0$$ there exists $$\delta>0$$ such that $$f(x)$$ is $$\varepsilon$$-close to $$f(x_0)$$ for all $$x \in X$$ with $$\lvert x-x_0\rvert<\delta.$$

$$\forall \varepsilon>0 \, \exists \delta>0 : \lvert f(x)-f(x_0)\rvert\leq\varepsilon\,\,\forall\,x\in X,\,\lvert x-x_0\rvert<\delta$$

The number $$\delta$$ may depend on both $$\varepsilon$$ and $$x_0.$$ If $$x_0$$ is a limit point of $$X$$ then $$f$$ is continuous at $$x_0$$ if and only if the limit of $$f(x)$$ as $$x \rightarrow x_0$$ equals $$f(x_0).$$

$$ \lim_{x \rightarrow x_0} f(x) = f(x_0) $$

If $$x_0$$ is an isolated point of $$X$$ then $$f$$ is continuous at $$x_0.$$

Let $$X \subseteq \mathbb{R}$$ and $$f: X \rightarrow \mathbb{R}$$ be a function. The function $$f$$ is **continuous** on $$X$$ if and only if $$f$$ is continuous at every $$x \in X.$$ The function $$f$$ is **discontinuous** at a point $$x_0 \in X$$ if and only if $$f$$ is not continuous at $$x_0.$$

Let $$X \subseteq \mathbb{R},$$ $$f,g:X\rightarrow\mathbb{R}$$ be continuous at $$x_0\in X$$ and $$c\in\mathbb{R}.$$ Continuity has the following properties, which follow from the limit laws:
- $$f+g,$$ $$f-g,$$ $$c\,f$$ and $$f\,g$$ are continuous at $$x_0;$$
- $$\frac{f}{g}$$ is continuous at $$x_0$$ if $$g(x_0)\neq 0;$$
- constant functions and the identity function $$x\mapsto x$$ are continuous, so every polynomial is continuous on $$\mathbb{R}$$ and every rational function is continuous wherever its denominator is non-zero.

Let $$X,Y\subseteq\mathbb{R},$$ $$f:X\rightarrow Y$$ be continuous at $$x_0 \in X$$ and $$g:Y\rightarrow\mathbb{R}$$ be continuous at $$f(x_0).$$ The composition $$g\circ f:X\rightarrow\mathbb{R}$$ is continuous at $$x_0.$$

Let $$X \subseteq \mathbb{R},$$ $$f_n:X\rightarrow\mathbb{R}$$ be a sequence of functions that converges uniformly to $$f:X\rightarrow\mathbb{R}$$ and $$x_0\in X.$$ If every $$f_n$$ is continuous at $$x_0$$ then $$f$$ is continuous at $$x_0.$$ A uniform limit of continuous functions is therefore continuous. Pointwise convergence does not suffice: $$f_n(x)=x^n$$ converges pointwise on $$\left[0,1\right]$$ to a discontinuous function. A power series is continuous on its open interval of convergence, since it converges uniformly on every closed interval inside that interval and its partial sums are polynomials. In particular the exponential, cosine and sine functions are continuous on $$\mathbb{R}.$$

Let $$f:[a,b]\rightarrow\mathbb{R}$$ be continuous and $$C \in \mathbb{R}$$ lie strictly between $$f(a)$$ and $$f(b),$$ so that either $$f(a)<C<f(b)$$ or $$f(b)<C<f(a).$$ The **intermediate value theorem** states that $$f$$ attains the value $$C$$ at some point strictly between $$a$$ and $$b.$$

$$\exists\,c\in(a,b) : f(c)=C$$

Let $$X \subseteq \mathbb{R}$$ and $$f:X\rightarrow\mathbb{R}$$ be a function. The function $$f$$ is **bounded** on $$X$$ if and only if its image $$f(X)$$ is a bounded set.

$$\exists M\geq 0:\lvert f(x)\rvert\leq M\,\,\forall\,x\in X$$

Let $$f:[a,b]\rightarrow\mathbb{R}$$ be continuous on the closed bounded interval $$[a,b].$$ The **extreme value theorem** states that $$f$$ is bounded and attains its maximum and minimum.

$$\exists\,x_{\min},x_{\max}\in[a,b]:f\left(x_{\min}\right)\leq f(x)\leq f\left(x_{\max}\right)\,\,\forall\,x\in[a,b]$$

The intermediate and extreme value theorems can fail on intervals that are not closed and bounded. For example, $$f(x)=\frac{1}{x}$$ is continuous on $$(0,1]$$ but unbounded.

Let $$X$$ be an interval and $$f:X\rightarrow\mathbb{R}$$ be continuous. The image $$f(X)$$ is an interval, since by the intermediate value theorem it contains every value between any two of its elements. If $$X=[a,b]$$ is closed and bounded then, by the extreme value theorem, $$f([a,b])$$ is the closed bounded interval $$\left[f\left(x_{\min}\right),f\left(x_{\max}\right)\right].$$

Let $$X \subseteq \mathbb{R}$$ and $$f:X\rightarrow\mathbb{R}$$ be a function. The function $$f$$ is **uniformly continuous** on $$X$$ if and only if for every $$\varepsilon>0$$ there exists $$\delta>0,$$ depending on $$\varepsilon$$ alone, such that $$f(x)$$ and $$f(y)$$ are $$\varepsilon$$-close for all $$x,y\in X$$ with $$\lvert x-y\rvert<\delta.$$

$$\forall\varepsilon>0\,\exists\delta>0:\lvert f(x)-f(y)\rvert\leq\varepsilon\,\,\forall\,x,y\in X,\,\lvert x-y\rvert<\delta$$

A uniformly continuous function is continuous. The converse is false: $$f(x)=x^2$$ is continuous but not uniformly continuous on $$\mathbb{R},$$ and $$f(x)=\frac{1}{x}$$ is continuous but not uniformly continuous on $$(0,1].$$

Let $$f:[a,b]\rightarrow\mathbb{R}$$ be continuous on the closed bounded interval $$[a,b].$$ The **Heine–Cantor theorem** states that $$f$$ is uniformly continuous on $$[a,b].$$

Let $$X \subseteq \mathbb{R}$$ and $$f:X\rightarrow\mathbb{R}$$ be a function. The function $$f$$ is **Lipschitz continuous** on $$X$$ if and only if there exists a constant $$L\geq 0$$ such that the change in $$f$$ is at most $$L$$ times the change in its argument.

$$\lvert f(x)-f(y)\rvert\leq L\,\lvert x-y\rvert\,\,\forall\,x,y\in X$$

The constant $$L$$ is a **Lipschitz constant** of $$f.$$ A Lipschitz continuous function is uniformly continuous, since $$\delta=\frac{\varepsilon}{L}$$ works for every $$\varepsilon>0$$ when $$L>0.$$ The converse is false: $$f(x)=\sqrt{x}$$ is uniformly continuous but not Lipschitz continuous on $$[0,1].$$

Let $$X$$ be an interval and $$f:X\rightarrow\mathbb{R}$$ be a function. The function $$f$$ is **monotonically increasing** if and only if $$f(x)\leq f(y)$$ whenever $$x<y.$$ The function $$f$$ is **strictly increasing** if and only if $$f(x)<f(y)$$ whenever $$x<y.$$ The function $$f$$ is **monotonically decreasing** if and only if $$-f$$ is monotonically increasing. The function $$f$$ is **strictly decreasing** if and only if $$-f$$ is strictly increasing.

Let $$X$$ be an interval and $$f:X\rightarrow\mathbb{R}$$ be a function. The function $$f$$ is **monotonic** if and only if it is either monotonically increasing or monotonically decreasing. The function $$f$$ is **strictly monotonic** if and only if it is either strictly increasing or strictly decreasing. Monotonic functions have the following properties:
- a monotonic function $$f$$ on an interval $$X$$ is continuous if and only if its image $$f(X)$$ is an interval;
- a monotonic function is discontinuous at no more than countably many points of $$X.$$

Let $$X$$ be an interval and $$f:X\rightarrow\mathbb{R}$$ be continuous and strictly monotonic. Then $$f$$ is injective, its image $$Y=f(X)$$ is an interval and its inverse function $$f^{-1}:Y\rightarrow X$$ is continuous and strictly monotonic in the same direction as $$f.$$ Conversely, a continuous injective function on an interval is strictly monotonic. For example, $$f(x)=x^n$$ is continuous and strictly increasing on $$[0,\infty)$$ for $$n\in\mathbb{N},$$ so the $$n$$-th root $$f^{-1}(y)=y^{\frac{1}{n}}$$ is continuous and strictly increasing on $$[0,\infty).$$
