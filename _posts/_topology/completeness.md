---
layout: post
category: "topology"
title:  "Completeness"
tags: ["topology", "completeness"]
description: "Spaces without missing limits"
---

Let $$(X,d)$$ be a metric space. A sequence $$\left(x_n\right)$$ in $$X$$ is a **Cauchy sequence** if and only if its terms become arbitrarily close to one another.

$$\forall\varepsilon>0\,\exists N\in\mathbb{N}:d\left(x_m,x_n\right)\leq\varepsilon\,\,\forall\,m,n\geq N$$

Every convergent sequence is a Cauchy sequence and every Cauchy sequence is bounded. A Cauchy sequence with a convergent subsequence converges to the same limit. The metric space $$X$$ is **complete** if and only if every Cauchy sequence in $$X$$ converges to a point of $$X.$$

The real numbers are complete and so, since convergence in $$\mathbb{R}^n$$ is coordinatewise, is $$\mathbb{R}^n$$ with any norm. The rational numbers are not complete, since a sequence of rational numbers converging to $$\sqrt{2}$$ is a Cauchy sequence with no limit in $$\mathbb{Q},$$ and neither is the open interval $$\left(0,1\right),$$ in which $$\left(\frac{1}{n}\right)$$ has no limit. Completeness is preserved by strong equivalence of metrics but not by equivalence. Let $$A\subseteq X.$$ If $$X$$ is complete then the metric subspace $$A$$ is complete if and only if $$A$$ is closed in $$X,$$ and a complete metric subspace of any metric space is closed.

A **Banach space** is a complete normed vector space and a **Hilbert space** is a complete inner product space. Every finite-dimensional normed vector space is a Banach space and $$\mathbb{R}^n$$ with the dot product is a Hilbert space. Every metric space $$X$$ has a **completion**, a complete metric space containing an isometric copy of $$X$$ as a dense subset, which is unique up to isometry; the real numbers are the completion of the rational numbers.

Let $$T:X\rightarrow X$$ be a function from a metric space to itself. A point $$x^*\in X$$ is a **fixed point** of $$T$$ if $$T\left(x^*\right)=x^*.$$ $$T$$ is a **contraction** if it is Lipschitz continuous with a constant $$q<1,$$ so that it brings every pair of points closer together by at least the factor $$q.$$

$$d\left(T(x),T(y)\right)\leq q\,d(x,y)\,\,\forall\,x,y\in X,\qquad 0\leq q<1$$

The **contraction mapping theorem** states that a contraction $$T$$ on a non-empty complete metric space has exactly one fixed point $$x^*,$$ and that for any $$x_0\in X$$ the sequence of iterates $$x_{n+1}:=T\left(x_n\right)$$ converges to $$x^*$$ with

$$d\left(x_n,x^*\right)\leq\frac{q^n}{1-q}\,d\left(x_1,x_0\right).$$

The iterates form a Cauchy sequence because $$d\left(x_{n+1},x_n\right)\leq q^n d\left(x_1,x_0\right)$$ is summable, completeness gives the limit, continuity of $$T$$ makes the limit a fixed point and the contraction property rules out a second one. The theorem is also called the **Banach fixed-point theorem**. The constant $$q<1$$ is essential: $$T(x)=x+\frac{1}{x}$$ on $$\left[1,\infty\right)$$ satisfies $$d\left(T(x),T(y)\right)<d(x,y)$$ for $$x\neq y$$ but has no fixed point. If $$T$$ is not a contraction but some iterate $$T^k=T\circ\cdots\circ T$$ is, then $$T$$ still has exactly one fixed point, since a fixed point of $$T^k$$ is unique and $$T$$ maps it to another fixed point of $$T^k.$$
