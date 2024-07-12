---
layout: post
category: "probability"
title:  "Random Variables"
tags: ["probability", "random variable"]
description: "Mapping from outcomes to a measurable space"
---

Given a probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ and a measurable space $$\left(S,\mathcal{S}\right)$$, a **random variable** is a function $$X:\Omega\rightarrow S$$ such that:

$$\left\{\omega\in\Omega:X\left(\omega\right)\in A\right\}\in\mathcal{F}\,\,\forall\,A\in\mathcal{S}.$$

$$S$$ is called the **state space** of $$X$$ and $$\mathcal{S}$$ is its corresponding $$\sigma$$-algebra.

A second probability measure is often constructed when referring to the random variable $$X$$ and the values in the state space $$S$$ so that the underlying probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ and the original probability measure $$\mathbb{P}$$ do not need to be continually referenced.

Given a random variable $$X$$ defined with respect to an underlying probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ and measurable space $$\left(S,\mathcal{S}\right)$$, the **pushforward probability measure** is a probability measure $$\mathbb{P}_X$$ on $$\left(S,\mathcal{S}\right)$$ such that:

$$\mathbb{P}_X\left(X\in A\right) = \mathbb{P}\left(\left\{\omega\in\Omega:X\left(\omega\right)\in A\right\}\right)\,\,\forall\,A\in\mathcal{S}.$$

The pushforward probability measure $$\mathbb{P}_X$$ assigns probabilities to measurable subsets of the state space, $$A\in\mathcal{S},$$ and defines the **probability distribution** of $$X$$ over the state space $$S.$$ The complete probability space is $$\left(S,\mathcal{S},\mathbb{P}_X\right).$$

The **support** of the probability distribution $$\mathbb{P}_X$$ is the subset of the state space $$\mathcal{X}\subseteq S$$ such that the following properties are satisfied:

$$\mathbb{P}_X\left(X\in A\right)>0\,\,\forall\,A\subseteq\mathcal{X},A\neq\varnothing$$

$$\mathbb{P}_X\left(\mathcal{X}\right)=1$$

Given a random variable $$X$$ defined on the measurable space $$\left(S,\mathcal{S}\right),$$ $$X$$ is a **discrete random variable** if there is an injective function between the state space $$S$$ and the set (or subset) of natural numbers $$\mathbb{N}.$$ That is, $$S$$ is countable:

$$S=\{x_1,\ldots,x_n\}\,\mathrm{(finite), or}$$

$$S=\{x_1,\ldots\}\,\mathrm{(infinite)}$$

In this scenario $$S$$ is referred to as a discrete state space.

Let $$X$$ be a discrete random variable defined on the probability space $$\left(S,\mathcal{S},\mathbb{P}_X\right).$$ The **probability mass function** (pmf) is a function $$p_X:S\rightarrow\left[0,1\right]$$ defined by:

$$p_X\left(x\right)=\mathbb{P}_X\left(X=x\right)\,\,\forall\,x\in S$$

The pmf $$p_X\left(x\right)$$ assigns probability to each element $$x\in S.$$ Generally, the pmf is defined to be zero for all values $$x\in\mathbb{R}\setminus S$$ so that $$p_X\left(x\right)$$ is defined for all $$x\in\mathbb{R}.$$

The pmf $$p_X\left(x\right)$$ has the following properties:

$$p_X\left(x\right)\geq 0\,\,\forall\,x\in S$$

$$\sum_{x\in S}p_X\left(x\right)=1$$

The elements $$x\in S$$ form a set partition of the state space $$S$$; that is, all elements in $$S$$ are disjoint. The probability $$\mathbb{P}_X\left(X\in A\right)$$ where $$A\in\mathcal{X}$$ and $$\mathcal{X}$$ is the support of $$\mathbb{P}_X$$ is constructed through the summation of the pmf:

$$
\begin{align}
\mathbb{P}_X\left(X\in A\right)&=\sum_{x\in A}\mathbb{P}_X\left(X=x\right)\\
&=\sum_{x\in A}p_X\left(x\right)
\end{align}
$$

The **cumulative distribution function** (cdf) $$F_X\left(x\right)$$ of a discrete random variable $$X$$ is:

$$F_X\left(x\right)=\mathbb{P}_X\left(X\leq x\right)\,\,\forall\,x\in\mathbb{R}$$

The probability $$\mathbb{P}_X\left(x\in A\right)$$ where $$A\subseteq S$$ and $$A$$ is a semi-closed interval $$\left(a_1, a_2\right]$$ where $$a_1<a_2$$ is constructed through the difference of cdfs:

$$
\begin{align}
\mathbb{P}_X\left(x\in A\right)&=\mathbb{P}_X\left(X\leq a_2\right)-\mathbb{P}_X\left(x\leq a_2\right)\\
&=F_X\left(a_2\right)-F_X\left(a_1\right)
\end{align}
$$
