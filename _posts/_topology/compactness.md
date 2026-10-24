---
layout: post
category: "topology"
title:  "Compactness"
tags: ["topology", "compactness"]
description: "Finiteness for infinite sets"
---

Let $$X$$ be a topological space and $$A\subseteq X.$$ An **open cover** of $$A$$ is a collection of open sets whose union contains $$A,$$ and a **subcover** is a subcollection of an open cover that still covers $$A.$$ The set $$A$$ is **compact** if and only if every open cover of $$A$$ has a finite subcover, and $$X$$ is a compact space if $$X$$ is compact as a subset of itself. Compactness of $$A$$ is a property of the subspace $$A$$ alone, so it does not depend on the space in which $$A$$ sits.

Finite sets are compact, $$\mathbb{R}$$ is not compact, since the open cover $$\left\{\left(-n,n\right):n\in\mathbb{N}\right\}$$ has no finite subcover, and $$\left(0,1\right]$$ is not compact, since $$\left\{\left(\frac{1}{n},2\right):n\in\mathbb{N}\right\}$$ has no finite subcover. A closed bounded interval $$\left[a,b\right]$$ is compact. Compact sets have the following properties:
- a closed subset of a compact set is compact;
- a compact subset of a Hausdorff space is closed;
- a finite union of compact sets is compact;
- the product of finitely many compact spaces is compact;
- the continuous image of a compact set is compact.

The last property states that if $$f:X\rightarrow Y$$ is continuous and $$A\subseteq X$$ is compact then $$f(A)$$ is compact. Consequently a continuous bijection from a compact space onto a Hausdorff space is a homeomorphism, since it maps closed sets, which are compact, to compact sets, which are closed.

A set $$A$$ in a metric space is **sequentially compact** if and only if every sequence in $$A$$ has a subsequence that converges to a point of $$A,$$ and **totally bounded** if and only if for every $$\varepsilon>0$$ it is covered by finitely many open balls of radius $$\varepsilon.$$ A totally bounded set is bounded, and in $$\mathbb{R}^n$$ the converse holds. In a metric space the following are equivalent:
- $$A$$ is compact;
- $$A$$ is sequentially compact;
- $$A$$ is complete and totally bounded.

The **Heine–Borel theorem** states that a subset of $$\mathbb{R}^n$$ is compact if and only if it is closed and bounded. The **Bolzano–Weierstrass theorem** states that every bounded sequence in $$\mathbb{R}^n$$ has a convergent subsequence, which is the sequential compactness of closed balls. Neither holds in every metric space: the closed unit ball of an infinite-dimensional normed vector space is closed and bounded but not compact, and the discrete metric makes every infinite set closed, bounded and non-compact. The **Lebesgue number lemma** states that for every open cover of a compact metric space $$A$$ there exists $$\delta>0$$ such that every subset of $$A$$ with diameter less than $$\delta$$ lies inside some set of the cover.

Let $$A$$ be a non-empty compact space and $$f:A\rightarrow\mathbb{R}$$ be continuous. Since $$f(A)$$ is a compact subset of $$\mathbb{R}$$ it is closed and bounded, so it contains its supremum and infimum: $$f$$ is bounded and attains its maximum and minimum.

$$\exists\,x_{\min},x_{\max}\in A:f\left(x_{\min}\right)\leq f(x)\leq f\left(x_{\max}\right)\,\,\forall\,x\in A$$

This extends the extreme value theorem from closed bounded intervals to compact sets, and the Heine–Cantor theorem extends in the same way: a continuous function from a compact metric space to a metric space is uniformly continuous. If $$A$$ is a compact subset of a metric space and $$x\in X$$ then the distance $$d(x,A):=\inf_{a\in A}d(x,a)$$ is attained at some point of $$A,$$ and two disjoint compact sets are at positive distance from one another.
