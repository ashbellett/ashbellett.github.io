---
layout: post
category: "real-analysis"
title:  "Sequences"
tags: ["real", "analysis", "sequences"]
description: "Ordered collections of numbers"
---

A **sequence** $$ (a_n) $$ is a function $$a:\mathbb{N} \rightarrow \mathbb{R}$$ that maps natural numbers $$n \in \mathbb{N}$$ to real numbers $$a_n \in \mathbb{R}.$$

A sequence $$ (a_n) $$ is **bounded** by real numbers $$A$$ and $$B$$ if and only if $$A \leq a_n \leq B \, \, \forall n.$$ Equivalently, $$ (a_n) $$ is bounded if and only if $$ \exists M \geq 0 : \lvert a_n\rvert \leq M \, \, \forall n.$$

A sequence $$ (a_n) $$ is **monotonically increasing** if and only if $$a_{n+1} \geq a_n \, \, \forall n$$ and **monotonically decreasing** if and only if $$a_{n+1} \leq a_n \, \, \forall n.$$

A sequence $$ (a_n) $$ **converges** to a real number $$L$$ if and only if for every $$ \varepsilon >0$$ there exists $$N \in \mathbb{N}$$ such that $$a_n$$ is $$ \varepsilon $$-close to $$L$$ for all $$n \geq N.$$

$$ \forall \varepsilon > 0 \, \exists N \in \mathbb{N} : \lvert a_n-L \rvert \leq \varepsilon \, \forall n \geq N $$

Every convergent sequence is bounded and every bounded monotonic sequence is convergent. A sequence is **divergent** if it is not convergent.

A sequence $$ (a_n) $$ is a **Cauchy sequence** if for every $$\varepsilon > 0$$ there exists $$N \in \mathbb{N}$$ such that for all natural numbers $$m, n \geq N,$$ $$a_m$$ and $$a_n$$ are $$\varepsilon$$-close.

$$ \forall \varepsilon > 0 \, \exists N \in \mathbb{N} : \lvert a_n-a_m \rvert \leq \varepsilon \, \forall m,n \geq N $$

A Cauchy sequence is a sequence whose terms become arbitrarily close to one another. A sequence of real numbers is **convergent** if and only if it is a Cauchy sequence. This holds because the real numbers are complete; it fails in the rational numbers, where the decimal truncations $$1, 1.4, 1.41, 1.414, \ldots$$ of $$\sqrt{2}$$ form a Cauchy sequence with no rational limit.
