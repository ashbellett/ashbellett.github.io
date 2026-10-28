---
layout: post
category: "topology"
title:  "Metric Spaces"
tags: ["topology", "metric space"]
description: "Sets with a notion of distance"
---

Let $$X$$ be a set. A **metric** on $$X$$ is a function $$d:X\times X\rightarrow\mathbb{R}$$ that satisfies the metric axioms for all $$x,y,z\in X:$$

$$d(x,y)\geq 0,\,\,\mathrm{with}\,\,d(x,y)=0\,\,\mathrm{if}\,\mathrm{and}\,\mathrm{only}\,\mathrm{if}\,\,x=y$$

$$d(x,y)=d(y,x)$$

$$d(x,z)\leq d(x,y)+d(y,z)$$

The third axiom is the **triangle inequality**.

Let $$X$$ be a set and $$d$$ be a metric on $$X.$$ The pair $$(X,d)$$ is a **metric space**, and is written $$X$$ when the metric is understood. The real numbers with $$d(x,y)=\lvert x-y\rvert$$ form a metric space, and $$\mathbb{R}^n$$ with the Euclidean distance is the metric space called **Euclidean space**.

Let $$(X,d)$$ be a metric space and $$A\subseteq X.$$ The **metric subspace** $$A$$ is the metric space $$(A,d_A)$$ where $$d_A$$ is the restriction of $$d$$ to $$A\times A.$$

Let $$X$$ be a set. The **discrete metric** on $$X$$ is the metric that is $$0$$ when $$x=y$$ and $$1$$ otherwise. Any set is a metric space under the discrete metric.

Let $$\mathcal{V}$$ be a vector space over $$\mathbb{R}$$ or $$\mathbb{C}.$$ A **norm** on $$\mathcal{V}$$ is a function $$\lVert\cdot\rVert:\mathcal{V}\rightarrow\mathbb{R}$$ that satisfies the norm axioms for all $$\underline{u},\underline{v}\in\mathcal{V}$$ and all scalars $$\lambda:$$

$$\lVert\underline{v}\rVert\geq 0,\,\,\mathrm{with}\,\,\lVert\underline{v}\rVert=0\,\,\mathrm{if}\,\mathrm{and}\,\mathrm{only}\,\mathrm{if}\,\,\underline{v}=\underline{0}$$

$$\lVert\lambda\,\underline{v}\rVert=\lvert\lambda\rvert\lVert\underline{v}\rVert$$

$$\lVert\underline{u}+\underline{v}\rVert\leq\lVert\underline{u}\rVert+\lVert\underline{v}\rVert$$

Let $$\mathcal{V}$$ be a vector space over $$\mathbb{R}$$ or $$\mathbb{C}$$ and $$\lVert\cdot\rVert$$ be a norm on $$\mathcal{V}.$$ The pair $$(\mathcal{V},\lVert\cdot\rVert)$$ is a **normed vector space**. The norm of an inner product space satisfies the norm axioms by the Cauchy-Schwarz inequality, so every inner product space is a normed vector space.

Let $$\mathcal{V}$$ be a normed vector space. The **induced metric** on $$\mathcal{V}$$ is the metric given by the norm of the difference of two vectors.

$$d(\underline{u},\underline{v}):=\lVert\underline{u}-\underline{v}\rVert$$

Every normed vector space is a metric space with its induced metric.

Let $$\underline{x}\in\mathbb{R}^n$$ and $$p\geq 1.$$ The **$$p$$-norm** of $$\underline{x}$$ is the $$p$$-th root of the sum of the $$p$$-th powers of the absolute values of its coordinates, and the **maximum norm** of $$\underline{x}$$ is the largest absolute value of its coordinates.

$$\lVert\underline{x}\rVert_p:=\left(\sum_{i=1}^{n}\lvert x_i\rvert^p\right)^{\frac{1}{p}},\qquad\lVert\underline{x}\rVert_\infty:=\max_{1\leq i\leq n}\lvert x_i\rvert$$

The $$2$$-norm is the **Euclidean norm**, the $$1$$-norm is the **Manhattan norm** and $$\lVert\underline{x}\rVert_p\rightarrow\lVert\underline{x}\rVert_\infty$$ as $$p\rightarrow\infty.$$ The triangle inequality for the $$p$$-norm is the **Minkowski inequality**.

Let $$(X,d)$$ be a metric space, $$x\in X$$ and $$r>0.$$ The **open ball** of radius $$r$$ centred at $$x$$ is the set of points at distance less than $$r$$ from $$x.$$ The **closed ball** of radius $$r$$ centred at $$x$$ is the set of points at distance at most $$r$$ from $$x.$$ The **sphere** of radius $$r$$ centred at $$x$$ is the set of points at distance exactly $$r$$ from $$x.$$

$$B(x,r):=\left\{y\in X:d(x,y)<r\right\},\qquad\overline{B}(x,r):=\left\{y\in X:d(x,y)\leq r\right\},\qquad S(x,r):=\left\{y\in X:d(x,y)=r\right\}$$

Let $$(X,d)$$ be a metric space and $$U\subseteq X.$$ The set $$U$$ is **open** if and only if every point of $$U$$ is the centre of some open ball contained in $$U.$$

$$\forall\,x\in U\,\exists\,r>0:B(x,r)\subseteq U$$

Let $$(X,d)$$ be a metric space and $$F\subseteq X.$$ The set $$F$$ is **closed** if and only if its complement $$X\setminus F$$ is open.

In $$\mathbb{R}^n$$ with the Euclidean distance this is the earlier definition of an open set. Open and closed sets have the following properties:
- open balls are open, and closed balls, spheres and finite sets are closed;
- open intervals are open in $$\mathbb{R}$$ and closed intervals are closed in $$\mathbb{R};$$
- a set can be both open and closed, as $$\varnothing$$ and $$X$$ are, or neither, as $$\left[0,1\right)$$ is in $$\mathbb{R};$$
- under the discrete metric every set is open;
- the union of any collection of open sets is open and the intersection of finitely many open sets is open;
- the intersection of any collection of closed sets is closed and the union of finitely many closed sets is closed.

The finiteness conditions cannot be dropped: $$\bigcap_{n=1}^{\infty}\left(-\frac{1}{n},\frac{1}{n}\right)=\left\{0\right\}$$ is an intersection of open sets that is not open.

Let $$(X,d)$$ be a metric space, $$A\subseteq X$$ and $$x\in X.$$ The point $$x$$ is an **interior point** of $$A$$ if and only if some open ball centred at $$x$$ is contained in $$A.$$ The point $$x$$ is a **limit point** of $$A$$ if and only if every open ball centred at $$x$$ contains a point of $$A$$ other than $$x.$$ The point $$x$$ is an **isolated point** of $$A$$ if and only if $$x\in A$$ and some open ball centred at $$x$$ contains no other point of $$A.$$

Let $$(X,d)$$ be a metric space and $$A\subseteq X.$$ The **interior** of $$A,$$ written $$\mathrm{int}\,A,$$ is the set of interior points of $$A.$$ The **closure** of $$A,$$ written $$\overline{A},$$ is the union of $$A$$ and its limit points. The **boundary** of $$A,$$ written $$\partial A,$$ is the closure of $$A$$ without the interior of $$A.$$

$$\mathrm{int}\,A\subseteq A\subseteq\overline{A},\qquad\partial A:=\overline{A}\setminus\mathrm{int}\,A$$

The interior, closure and boundary have the following properties:
- the interior is the largest open set contained in $$A,$$ so $$A$$ is open if and only if $$A=\mathrm{int}\,A;$$
- the closure is the smallest closed set containing $$A,$$ so $$A$$ is closed if and only if $$A=\overline{A},$$ which holds if and only if $$A$$ contains all of its limit points;
- the boundary is closed, and $$x\in\partial A$$ if and only if every open ball centred at $$x$$ meets both $$A$$ and $$X\setminus A.$$

For example, in $$\mathbb{R}$$ the interval $$\left[0,1\right)$$ has interior $$\left(0,1\right),$$ closure $$\left[0,1\right]$$ and boundary $$\left\{0,1\right\},$$ whereas the rational numbers $$\mathbb{Q}$$ have empty interior and closure $$\mathbb{R}.$$

Let $$(X,d)$$ be a metric space and $$A\subseteq X.$$ The set $$A$$ is **dense** in $$X$$ if and only if $$\overline{A}=X.$$ The rational numbers are dense in $$\mathbb{R}.$$

Let $$(X,d)$$ be a metric space and $$A\subseteq X.$$ The set $$A$$ is **bounded** if and only if it is contained in some ball. The **diameter** of $$A$$ is the supremum of the distances between its points.

$$\mathrm{diam}\,A:=\sup\left\{d(x,y):x,y\in A\right\}$$

Let $$(X,d)$$ be a metric space, $$\left(x_n\right)$$ be a sequence of points of $$X$$ and $$x\in X.$$ The sequence $$\left(x_n\right)$$ **converges** to $$x,$$ written $$x_n\rightarrow x,$$ if and only if the distances $$d\left(x_n,x\right)$$ converge to $$0$$ as a sequence of real numbers.

$$\forall\varepsilon>0\,\exists N\in\mathbb{N}:d\left(x_n,x\right)\leq\varepsilon\,\,\forall\,n\geq N$$

Equivalently, every open ball centred at $$x$$ contains all but finitely many terms of the sequence. Convergent sequences in a metric space have the following properties:
- a convergent sequence has exactly one limit and is bounded;
- in $$\mathbb{R}^n$$ a sequence converges if and only if each of its coordinates converges;
- in a metric subspace a sequence converges if and only if it converges in the whole space with the limit lying in the subspace;
- every subsequence of a convergent sequence converges to the same limit;
- $$x\in\overline{A}$$ if and only if $$x$$ is the limit of a sequence of points of $$A,$$ so $$A$$ is closed if and only if it contains the limit of every convergent sequence of its points.

Let $$\left(X,d_X\right)$$ and $$\left(Y,d_Y\right)$$ be metric spaces, $$f:X\rightarrow Y$$ be a function and $$x_0\in X.$$ The function $$f$$ is **continuous** at $$x_0$$ if and only if for every $$\varepsilon>0$$ there exists $$\delta>0$$ such that points within $$\delta$$ of $$x_0$$ are mapped to points within $$\varepsilon$$ of $$f\left(x_0\right).$$

$$\forall\varepsilon>0\,\exists\delta>0:d_Y\left(f(x),f\left(x_0\right)\right)\leq\varepsilon\,\,\forall\,x\in X,\,d_X\left(x,x_0\right)<\delta$$

Let $$\left(X,d_X\right)$$ and $$\left(Y,d_Y\right)$$ be metric spaces and $$f:X\rightarrow Y$$ be a function. The function $$f$$ is **continuous** on $$X$$ if and only if it is continuous at every point of $$X.$$ For real functions of one or several real variables this is the earlier definition of continuity. The following are equivalent:
- $$f$$ is continuous on $$X;$$
- $$f\left(x_n\right)\rightarrow f(x)$$ whenever $$x_n\rightarrow x$$ in $$X;$$
- the inverse image $$f^{-1}(V)$$ of every open set $$V\subseteq Y$$ is open in $$X;$$
- the inverse image of every closed set in $$Y$$ is closed in $$X.$$

Continuous functions on metric spaces have the following properties:
- a composition of continuous functions is continuous;
- the metric $$d:X\times X\rightarrow\mathbb{R}$$ is continuous in each argument, since $$\lvert d(x,z)-d(y,z)\rvert\leq d(x,y);$$
- in a normed vector space the norm, addition and scalar multiplication are continuous.

Let $$\left(X,d_X\right)$$ and $$\left(Y,d_Y\right)$$ be metric spaces and $$f:X\rightarrow Y$$ be a function. The function $$f$$ is **uniformly continuous** if and only if for every $$\varepsilon>0$$ there exists $$\delta>0,$$ depending on $$\varepsilon$$ alone, such that $$d_Y\left(f(x),f(y)\right)\leq\varepsilon$$ for all $$x,y\in X$$ with $$d_X(x,y)<\delta.$$

Let $$\left(X,d_X\right)$$ and $$\left(Y,d_Y\right)$$ be metric spaces and $$f:X\rightarrow Y$$ be a function. The function $$f$$ is **Lipschitz continuous** with constant $$L\geq 0$$ if and only if $$d_Y\left(f(x),f(y)\right)\leq L\,d_X(x,y)$$ for all $$x,y\in X.$$

Let $$\left(X,d_X\right)$$ and $$\left(Y,d_Y\right)$$ be metric spaces and $$f:X\rightarrow Y$$ be a function. The function $$f$$ is an **isometry** if and only if it preserves distances.

$$d_Y\left(f(x),f(y)\right)=d_X(x,y)\,\,\forall\,x,y\in X$$

An isometry is injective and Lipschitz continuous with constant $$1.$$ Lipschitz continuity implies uniform continuity, which implies continuity.

Let $$X$$ be a set and $$d$$ and $$d'$$ be metrics on $$X.$$ The metrics $$d$$ and $$d'$$ are **equivalent** if and only if they have the same open sets. Two metrics are equivalent if and only if they have the same convergent sequences with the same limits.

Let $$X$$ be a set and $$d$$ and $$d'$$ be metrics on $$X.$$ The metrics $$d$$ and $$d'$$ are **strongly equivalent** if and only if there are constants $$0<c\leq C$$ such that each metric is bounded above and below by constant multiples of the other.

$$c\,d(x,y)\leq d'(x,y)\leq C\,d(x,y)\,\,\forall\,x,y\in X$$

Strongly equivalent metrics are equivalent, and have the same bounded sets, Cauchy sequences and uniformly continuous functions. Equivalent metrics need not: $$d'(x,y)=\min\left\{1,\lvert x-y\rvert\right\}$$ is equivalent to the usual metric on $$\mathbb{R}$$ but makes $$\mathbb{R}$$ bounded.

Let $$\mathcal{V}$$ be a vector space and $$\lVert\cdot\rVert$$ and $$\lVert\cdot\rVert'$$ be norms on $$\mathcal{V}.$$ The norms are **equivalent** if and only if their induced metrics are strongly equivalent. Any two norms on $$\mathbb{R}^n$$ are equivalent, since

$$\lVert\underline{x}\rVert_\infty\leq\lVert\underline{x}\rVert_2\leq\lVert\underline{x}\rVert_1\leq n\lVert\underline{x}\rVert_\infty,$$

so open sets, convergence and continuity in $$\mathbb{R}^n$$ do not depend on which norm is used.
