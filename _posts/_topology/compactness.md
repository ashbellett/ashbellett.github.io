---
title:  "Compactness"
description: "Finiteness for infinite sets"
---

Let $$X$$ be a topological space and $$A\subseteq X.$$ An **open cover** of $$A$$ is a collection of open sets whose union contains $$A.$$ A **subcover** of an open cover of $$A$$ is a subcollection of the open cover whose union still contains $$A.$$

Let $$X$$ be a topological space and $$A\subseteq X.$$ The set $$A$$ is **compact** if and only if every open cover of $$A$$ has a finite subcover. The space $$X$$ is a **compact space** if and only if $$X$$ is compact as a subset of itself. Compactness of $$A$$ is a property of the subspace $$A$$ alone, so it does not depend on the space in which $$A$$ sits.

Compact sets have the following properties:
- finite sets are compact;
- $$\mathbb{R}$$ is not compact, since the open cover $$\left\{\left(-n,n\right):n\in\mathbb{N}\right\}$$ has no finite subcover;
- $$\left(0,1\right]$$ is not compact, since $$\left\{\left(\frac{1}{n},2\right):n\in\mathbb{N}\right\}$$ has no finite subcover;
- a closed bounded interval $$\left[a,b\right]$$ is compact;
- a closed subset of a compact set is compact;
- a compact subset of a Hausdorff space is closed;
- a finite union of compact sets is compact;
- the product of finitely many compact spaces is compact;
- the continuous image of a compact set is compact: if $$f:X\rightarrow Y$$ is continuous and $$A\subseteq X$$ is compact then $$f(A)$$ is compact.

A continuous bijection from a compact space onto a Hausdorff space is a homeomorphism, since it maps closed sets, which are compact, to compact sets, which are closed.

Let $$(X,d)$$ be a metric space and $$A\subseteq X.$$ The set $$A$$ is **sequentially compact** if and only if every sequence in $$A$$ has a subsequence that converges to a point of $$A.$$

Let $$(X,d)$$ be a metric space and $$A\subseteq X.$$ The set $$A$$ is **totally bounded** if and only if for every $$\varepsilon>0$$ it is covered by finitely many open balls of radius $$\varepsilon.$$ A totally bounded set is bounded, and in $$\mathbb{R}^n$$ the converse holds.

Let $$(X,d)$$ be a metric space and $$A\subseteq X.$$ The following are equivalent:
- $$A$$ is compact;
- $$A$$ is sequentially compact;
- $$A$$ is complete and totally bounded.

Let $$A\subseteq\mathbb{R}^n.$$ The **Heine–Borel theorem** states that $$A$$ is compact if and only if it is closed and bounded.

Let $$\left(\underline{x}_n\right)$$ be a bounded sequence in $$\mathbb{R}^n.$$ The **Bolzano–Weierstrass theorem** states that $$\left(\underline{x}_n\right)$$ has a convergent subsequence. The Bolzano–Weierstrass theorem is the sequential compactness of closed balls in $$\mathbb{R}^n.$$

Neither the Heine–Borel theorem nor the Bolzano–Weierstrass theorem holds in every metric space: the closed unit ball of an infinite-dimensional normed vector space is closed and bounded but not compact, and the discrete metric makes every infinite set closed, bounded and non-compact.

Let $$A$$ be a compact metric space with an open cover. The **Lebesgue number lemma** states that there exists $$\delta>0$$ such that every subset of $$A$$ with diameter less than $$\delta$$ lies inside some set of the cover. Such a $$\delta$$ is a **Lebesgue number** of the cover.

Let $$A$$ be a non-empty compact space and $$f:A\rightarrow\mathbb{R}$$ be continuous. The image $$f(A)$$ is a compact subset of $$\mathbb{R},$$ so it is closed and bounded and contains its supremum and infimum. Hence $$f$$ is bounded and attains its maximum and minimum.

$$\exists\,x_{\min},x_{\max}\in A:f\left(x_{\min}\right)\leq f(x)\leq f\left(x_{\max}\right)\,\,\forall\,x\in A$$

This extends the extreme value theorem from closed bounded intervals to compact sets. The Heine–Cantor theorem extends in the same way: a continuous function from a compact metric space to a metric space is uniformly continuous.

Let $$(X,d)$$ be a metric space, $$A\subseteq X$$ be non-empty and $$x\in X.$$ The **distance** from $$x$$ to $$A$$ is the infimum of the distances from $$x$$ to points of $$A.$$

$$d(x,A):=\inf_{a\in A}d(x,a)$$

If $$A$$ is compact then the distance from $$x$$ to $$A$$ is attained at some point of $$A,$$ and two disjoint compact sets are at positive distance from one another.
