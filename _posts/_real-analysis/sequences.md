---
title:  "Sequences"
description: "Ordered collections of numbers"
---

A **sequence** $$ (a_n) $$ is a function $$a:\mathbb{N} \rightarrow \mathbb{R}$$ that maps each natural number $$n \in \mathbb{N}$$ to a real number $$a_n \in \mathbb{R}.$$ The number $$a_n$$ is the **$$n$$-th term** of the sequence.

Let $$ (a_n) $$ be a sequence. The sequence $$ (a_n) $$ is **bounded** if and only if the set of its terms is a bounded set.

$$ \exists M \geq 0 : \lvert a_n\rvert \leq M \, \, \forall n \in \mathbb{N} $$

Equivalently, $$ (a_n) $$ is bounded if and only if there exist real numbers $$A$$ and $$B$$ with $$A \leq a_n \leq B$$ for all $$n.$$

Let $$ (a_n) $$ be a sequence. The sequence $$ (a_n) $$ is **monotonically increasing** if and only if $$a_{n+1} \geq a_n$$ for all $$n.$$ The sequence $$ (a_n) $$ is **monotonically decreasing** if and only if $$a_{n+1} \leq a_n$$ for all $$n.$$ The sequence $$ (a_n) $$ is **monotonic** if and only if it is either monotonically increasing or monotonically decreasing.

Let $$ (a_n) $$ be a sequence and $$L \in \mathbb{R}.$$ The sequence $$ (a_n) $$ **converges** to $$L$$ if and only if for every $$ \varepsilon >0$$ there exists $$N \in \mathbb{N}$$ such that $$a_n$$ is $$ \varepsilon $$-close to $$L$$ for all $$n \geq N.$$

$$ \forall \varepsilon > 0 \, \exists N \in \mathbb{N} : \lvert a_n-L \rvert \leq \varepsilon \, \forall n \geq N $$

Let $$ (a_n) $$ be a sequence. The sequence $$ (a_n) $$ is **convergent** if and only if it converges to some $$L \in \mathbb{R}.$$ The sequence $$ (a_n) $$ is **divergent** if and only if it is not convergent. Convergent sequences have the following properties:
- a convergent sequence converges to exactly one real number;
- every convergent sequence is bounded;
- every bounded monotonic sequence is convergent.

Let $$ (a_n) $$ be a sequence. The sequence $$ (a_n) $$ is a **Cauchy sequence** if and only if for every $$\varepsilon > 0$$ there exists $$N \in \mathbb{N}$$ such that $$a_m$$ and $$a_n$$ are $$\varepsilon$$-close for all $$m, n \geq N.$$

$$ \forall \varepsilon > 0 \, \exists N \in \mathbb{N} : \lvert a_n-a_m \rvert \leq \varepsilon \, \forall m,n \geq N $$

The terms of a Cauchy sequence become arbitrarily close to one another. A sequence of real numbers is convergent if and only if it is a Cauchy sequence. This property is the **completeness** of the real numbers. The rational numbers are not complete: the decimal truncations $$1, 1.4, 1.41, 1.414, \ldots$$ of $$\sqrt{2}$$ form a Cauchy sequence of rational numbers that converges to no rational number.

Let $$ (a_n) $$ be a sequence and $$n_1<n_2<\cdots$$ be an increasing sequence of natural numbers. The sequence $$ (a_{n_k}) $$ is a **subsequence** of $$ (a_n) .$$ Every subsequence of a convergent sequence converges to the same limit as the sequence.
