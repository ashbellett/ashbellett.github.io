---
layout: post
category: "Real Analysis"
title:  "Sequences"
tags: ["real", "analysis", "sequences"]
description: "Ordered collections of numbers"
---

A **sequence** $$ (a_n) $$ is a function $$a:\mathbb{N} \rightarrow \mathbb{R}$$ that maps natural numbers $$n \in \mathbb{N}$$ to real numbers $$a_n \in \mathbb{R}.$$

A sequence $$ (a_n) $$ is **bounded** by real numbers $$A$$ and $$B$$ if and only if $$A< \lvert a_n\lvert<B \, \, \forall n.$$

A sequence $$ (a_n) $$ is **monotonically increasing** if and only if $$a_{n+1} \geq a_n \, \, \forall n$$ and **monotonically decreasing** if and only if $$a_{n+1} \leq a_n \, \, \forall n.$$

A sequence $$ (a_n) $$ **converges** to a real number $$L$$ if and only if $$ \exists N \in \mathbb{N}$$ such that $$ (a_n) $$ is $$ \varepsilon $$-close to $$L$$ for all $$ \varepsilon >0.$$ Every convergent sequence is bounded and every bounded monotonic sequence is convergent. A sequence is **divergent** if it is not convergent.

A sequence $$ (a_n) $$ is a **Cauchy sequence** if there exists a positive integer $$N \in \mathbb{N}$$ such that for all natural numbers $$m, n \geq N,$$ $$a_m$$ and $$a_n$$ are $$\varepsilon$$-close.

$$ \exists N \in \mathbb{N} : \lvert a_n-a_m \leq \varepsilon \lvert \, \forall m,n \geq N $$

A Cauchy sequence is a sequence whose terms become arbitrarily close to one another. A sequence is **convergent** if and only if it is a Cauchy sequence.
