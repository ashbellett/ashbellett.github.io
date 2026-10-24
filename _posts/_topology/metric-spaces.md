---
layout: post
category: "topology"
title:  "Metric Spaces"
tags: ["topology", "metric space"]
description: "Sets with a notion of distance"
---

Let $$X$$ be a set. A **metric** on $$X$$ is a function $$d:X\times X\rightarrow\mathbb{R}$$ that assigns a distance to each pair of points and satisfies the metric axioms for all $$x,y,z\in X:$$

$$d(x,y)\geq 0,\,\,\mathrm{with}\,\,d(x,y)=0\,\,\mathrm{if}\,\mathrm{and}\,\mathrm{only}\,\mathrm{if}\,\,x=y$$

$$d(x,y)=d(y,x)$$

$$d(x,z)\leq d(x,y)+d(y,z).$$

The third axiom is the triangle inequality. A **metric space** $$(X,d)$$ is a set equipped with a metric, and is written $$X$$ when the metric is understood. Any subset $$A\subseteq X$$ is a metric space with the restriction of $$d$$ to $$A\times A,$$ the **metric subspace** $$A.$$ The real numbers with $$d(x,y)=\lvert x-y\rvert$$ and $$\mathbb{R}^n$$ with the Euclidean distance are metric spaces, the latter being the **Euclidean space** $$\mathbb{R}^n.$$ Any set is a metric space under the **discrete metric**, which is $$0$$ when $$x=y$$ and $$1$$ otherwise.

A **normed vector space** is a vector space $$\mathcal{V}$$ over $$\mathbb{R}$$ or $$\mathbb{C}$$ with a function $$\lVert\cdot\rVert:\mathcal{V}\rightarrow\mathbb{R},$$ its norm, that satisfies the norm axioms for all $$\underline{u},\underline{v}\in\mathcal{V}$$ and scalars $$\lambda:$$

$$\lVert\underline{v}\rVert\geq 0,\,\,\mathrm{with}\,\,\lVert\underline{v}\rVert=0\,\,\mathrm{if}\,\mathrm{and}\,\mathrm{only}\,\mathrm{if}\,\,\underline{v}=\underline{0}$$

$$\lVert\lambda\,\underline{v}\rVert=\lvert\lambda\rvert\lVert\underline{v}\rVert$$

$$\lVert\underline{u}+\underline{v}\rVert\leq\lVert\underline{u}\rVert+\lVert\underline{v}\rVert.$$

The norm of an inner product space satisfies these axioms by the Cauchy-Schwarz inequality. Every normed vector space is a metric space with the **induced metric** $$d(\underline{u},\underline{v}):=\lVert\underline{u}-\underline{v}\rVert.$$ For $$p\geq 1$$ the **$$p$$-norm** and the **maximum norm** on $$\mathbb{R}^n$$ are

$$\lVert\underline{x}\rVert_p:=\left(\sum_{i=1}^{n}\lvert x_i\rvert^p\right)^{\frac{1}{p}},\qquad\lVert\underline{x}\rVert_\infty:=\max_{1\leq i\leq n}\lvert x_i\rvert,$$

of which $$\lVert\cdot\rVert_2$$ is the Euclidean norm, $$\lVert\cdot\rVert_1$$ is the **Manhattan norm** and $$\lVert\underline{x}\rVert_p\rightarrow\lVert\underline{x}\rVert_\infty$$ as $$p\rightarrow\infty.$$ The triangle inequality for the $$p$$-norm is the **Minkowski inequality**.

Let $$(X,d)$$ be a metric space, $$x\in X$$ and $$r>0.$$ The **open ball**, **closed ball** and **sphere** of radius $$r$$ centred at $$x$$ are the sets of points at distance less than, at most and exactly $$r$$ from $$x.$$

$$B(x,r):=\left\{y\in X:d(x,y)<r\right\},\qquad\overline{B}(x,r):=\left\{y\in X:d(x,y)\leq r\right\},\qquad S(x,r):=\left\{y\in X:d(x,y)=r\right\}$$

A set $$U\subseteq X$$ is **open** if every point of $$U$$ is the centre of some open ball contained in $$U,$$ and a set $$F\subseteq X$$ is **closed** if its complement $$X\setminus F$$ is open.

$$U\,\,\mathrm{is}\,\mathrm{open}\Leftrightarrow\forall\,x\in U\,\exists\,r>0:B(x,r)\subseteq U$$

In $$\mathbb{R}^n$$ with the Euclidean distance this is the earlier definition of an open set. Open balls are open and closed balls, spheres and finite sets are closed; open intervals are open in $$\mathbb{R}$$ and closed intervals are closed. A set can be both open and closed, as $$\varnothing$$ and $$X$$ are, or neither, as $$\left[0,1\right)$$ is in $$\mathbb{R}.$$ Under the discrete metric every set is open. Open and closed sets have the following properties:
- $$\varnothing$$ and $$X$$ are open and closed;
- the union of any collection of open sets is open and the intersection of finitely many open sets is open;
- the intersection of any collection of closed sets is closed and the union of finitely many closed sets is closed.

The finiteness conditions cannot be dropped: $$\bigcap_{n=1}^{\infty}\left(-\frac{1}{n},\frac{1}{n}\right)=\left\{0\right\}$$ is an intersection of open sets that is not open.

Let $$A\subseteq X$$ and $$x\in X.$$ $$x$$ is an **interior point** of $$A$$ if some open ball centred at $$x$$ is contained in $$A,$$ a **limit point** of $$A$$ if every open ball centred at $$x$$ contains a point of $$A$$ other than $$x,$$ and an **isolated point** of $$A$$ if $$x\in A$$ and some open ball centred at $$x$$ contains no other point of $$A.$$ The **interior** $$\mathrm{int}\,A$$ of $$A$$ is the set of its interior points, the **closure** $$\overline{A}$$ of $$A$$ is the union of $$A$$ and its limit points and the **boundary** $$\partial A$$ of $$A$$ is the closure without the interior.

$$\mathrm{int}\,A\subseteq A\subseteq\overline{A},\qquad\partial A:=\overline{A}\setminus\mathrm{int}\,A$$

The interior is the largest open set contained in $$A$$ and the closure is the smallest closed set containing $$A,$$ so $$A$$ is open if and only if $$A=\mathrm{int}\,A$$ and closed if and only if $$A=\overline{A},$$ which holds if and only if $$A$$ contains all of its limit points. The boundary is closed and $$x\in\partial A$$ if and only if every open ball centred at $$x$$ meets both $$A$$ and $$X\setminus A.$$ For example, in $$\mathbb{R}$$ the interval $$\left[0,1\right)$$ has interior $$\left(0,1\right),$$ closure $$\left[0,1\right]$$ and boundary $$\left\{0,1\right\},$$ whereas the rational numbers $$\mathbb{Q}$$ have empty interior and closure $$\mathbb{R}.$$ A set $$A$$ is **dense** in $$X$$ if $$\overline{A}=X,$$ as $$\mathbb{Q}$$ is in $$\mathbb{R}.$$

A set $$A\subseteq X$$ is **bounded** if it is contained in some ball, and its **diameter** is the supremum of the distances between its points.

$$\mathrm{diam}\,A:=\sup\left\{d(x,y):x,y\in A\right\}$$

A sequence $$\left(x_n\right)$$ of points of $$X$$ **converges** to $$x\in X,$$ written $$x_n\rightarrow x,$$ if and only if the distances $$d\left(x_n,x\right)$$ converge to $$0$$ as a sequence of real numbers.

$$\forall\varepsilon>0\,\exists N\in\mathbb{N}:d\left(x_n,x\right)\leq\varepsilon\,\,\forall\,n\geq N$$

Equivalently, every open ball centred at $$x$$ contains all but finitely many terms of the sequence. A convergent sequence has exactly one limit and is bounded. In $$\mathbb{R}^n$$ a sequence converges if and only if each of its coordinates converges, and in a metric subspace convergence means convergence in the whole space with the limit lying in the subspace. Let $$n_1<n_2<\cdots$$ be an increasing sequence of indices. The sequence $$\left(x_{n_k}\right)$$ is a **subsequence** of $$\left(x_n\right),$$ and every subsequence of a convergent sequence converges to the same limit.

Convergence determines the closed sets: $$x\in\overline{A}$$ if and only if $$x$$ is the limit of a sequence of points of $$A,$$ so $$A$$ is closed if and only if it contains the limit of every convergent sequence of its points.

Let $$\left(X,d_X\right)$$ and $$\left(Y,d_Y\right)$$ be metric spaces, $$f:X\rightarrow Y$$ be a function and $$x_0\in X.$$ $$f$$ is **continuous** at $$x_0$$ if and only if points close to $$x_0$$ are mapped to points close to $$f\left(x_0\right),$$ and continuous on $$X$$ if it is continuous at every point.

$$\forall\varepsilon>0\,\exists\delta>0:d_Y\left(f(x),f\left(x_0\right)\right)\leq\varepsilon\,\,\forall\,x\in X,\,d_X\left(x,x_0\right)<\delta$$

For real functions of one or several real variables this is the earlier definition of continuity. The following are equivalent:
- $$f$$ is continuous on $$X;$$
- $$f\left(x_n\right)\rightarrow f(x)$$ whenever $$x_n\rightarrow x$$ in $$X;$$
- the inverse image $$f^{-1}(V)$$ of every open set $$V\subseteq Y$$ is open in $$X;$$
- the inverse image of every closed set in $$Y$$ is closed in $$X.$$

A composition of continuous functions is continuous. The metric $$d:X\times X\rightarrow\mathbb{R}$$ is itself continuous in each argument, since $$\lvert d(x,z)-d(y,z)\rvert\leq d(x,y),$$ and in a normed vector space the norm, addition and scalar multiplication are continuous.

$$f$$ is **uniformly continuous** if $$\delta$$ can be chosen to depend on $$\varepsilon$$ alone, **Lipschitz continuous** with constant $$L\geq 0$$ if $$d_Y\left(f(x),f(y)\right)\leq L\,d_X(x,y)$$ for all $$x,y\in X$$ and an **isometry** if it preserves distances, $$d_Y\left(f(x),f(y)\right)=d_X(x,y).$$ An isometry is injective and Lipschitz continuous with constant $$1,$$ and Lipschitz continuity implies uniform continuity, which implies continuity.

Two metrics $$d$$ and $$d'$$ on $$X$$ are **equivalent** if they have the same open sets, which holds if and only if they have the same convergent sequences with the same limits, and **strongly equivalent** if there are constants $$0<c\leq C$$ with

$$c\,d(x,y)\leq d'(x,y)\leq C\,d(x,y)\,\,\forall\,x,y\in X.$$

Strongly equivalent metrics are equivalent and have the same bounded sets, Cauchy sequences and uniformly continuous functions, whereas equivalent metrics need not: $$d'(x,y)=\min\left\{1,\lvert x-y\rvert\right\}$$ is equivalent to the usual metric on $$\mathbb{R}$$ but makes $$\mathbb{R}$$ bounded. Two norms are **equivalent** if their induced metrics are strongly equivalent. Any two norms on $$\mathbb{R}^n$$ are equivalent, since

$$\lVert\underline{x}\rVert_\infty\leq\lVert\underline{x}\rVert_2\leq\lVert\underline{x}\rVert_1\leq n\lVert\underline{x}\rVert_\infty,$$

so open sets, convergence and continuity in $$\mathbb{R}^n$$ do not depend on which norm is used.
