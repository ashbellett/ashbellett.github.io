---
layout: post
category: "topology"
title:  "Completeness"
tags: ["topology", "completeness"]
description: "Spaces without missing limits"
---

Let $$(X,d)$$ be a metric space and $$\left(x_n\right)$$ be a sequence in $$X.$$ The sequence $$\left(x_n\right)$$ is a **Cauchy sequence** if and only if its terms become arbitrarily close to one another.

$$\forall\varepsilon>0\,\exists N\in\mathbb{N}:d\left(x_m,x_n\right)\leq\varepsilon\,\,\forall\,m,n\geq N$$

Cauchy sequences have the following properties:
- every convergent sequence is a Cauchy sequence;
- every Cauchy sequence is bounded;
- a Cauchy sequence with a convergent subsequence converges to the same limit.

Let $$(X,d)$$ be a metric space. The metric space $$X$$ is **complete** if and only if every Cauchy sequence in $$X$$ converges to a point of $$X.$$ Complete metric spaces have the following properties:
- the real numbers are complete, and so is $$\mathbb{R}^n$$ with any norm, since convergence in $$\mathbb{R}^n$$ is coordinatewise;
- the rational numbers are not complete, since a sequence of rational numbers converging to $$\sqrt{2}$$ is a Cauchy sequence with no limit in $$\mathbb{Q};$$
- the open interval $$\left(0,1\right)$$ is not complete, since $$\left(\frac{1}{n}\right)$$ has no limit in it;
- completeness is preserved by strong equivalence of metrics but not by equivalence;
- if $$X$$ is complete and $$A\subseteq X$$ then the metric subspace $$A$$ is complete if and only if $$A$$ is closed in $$X;$$
- a complete metric subspace of any metric space is closed.

A **Banach space** is a complete normed vector space. A **Hilbert space** is a complete inner product space. Every finite-dimensional normed vector space is a Banach space, and $$\mathbb{R}^n$$ with the dot product is a Hilbert space.

Let $$(X,d)$$ be a metric space. A **completion** of $$X$$ is a complete metric space that contains an isometric copy of $$X$$ as a dense subset. Every metric space has a completion, which is unique up to isometry. The real numbers are the completion of the rational numbers.

Let $$(X,d)$$ be a metric space and $$T:X\rightarrow X$$ be a function. A point $$x^*\in X$$ is a **fixed point** of $$T$$ if and only if $$T\left(x^*\right)=x^*.$$

Let $$(X,d)$$ be a metric space and $$T:X\rightarrow X$$ be a function. The function $$T$$ is a **contraction** if and only if it is Lipschitz continuous with a constant $$q<1,$$ so that it brings every pair of points closer together by at least the factor $$q.$$

$$d\left(T(x),T(y)\right)\leq q\,d(x,y)\,\,\forall\,x,y\in X,\qquad 0\leq q<1$$

Let $$(X,d)$$ be a non-empty complete metric space and $$T:X\rightarrow X$$ be a contraction with constant $$q.$$ The **contraction mapping theorem** or **Banach fixed-point theorem** states that $$T$$ has exactly one fixed point $$x^*,$$ and that for any $$x_0\in X$$ the sequence of iterates $$x_{n+1}:=T\left(x_n\right)$$ converges to $$x^*$$ with

$$d\left(x_n,x^*\right)\leq\frac{q^n}{1-q}\,d\left(x_1,x_0\right).$$

The iterates form a Cauchy sequence because $$d\left(x_{n+1},x_n\right)\leq q^n d\left(x_1,x_0\right)$$ is summable, completeness gives the limit, continuity of $$T$$ makes the limit a fixed point and the contraction property rules out a second fixed point. The contraction mapping theorem has the following properties:
- the constant $$q<1$$ is essential: $$T(x)=x+\frac{1}{x}$$ on $$\left[1,\infty\right)$$ satisfies $$d\left(T(x),T(y)\right)<d(x,y)$$ for $$x\neq y$$ but has no fixed point;
- if some iterate $$T^k=T\circ\cdots\circ T$$ is a contraction then $$T$$ has exactly one fixed point, since a fixed point of $$T^k$$ is unique and $$T$$ maps it to another fixed point of $$T^k.$$
