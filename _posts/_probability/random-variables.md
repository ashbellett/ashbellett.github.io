---
layout: post
category: "probability"
title:  "Random Variables"
tags: ["probability", "random variable"]
description: "Mapping from outcomes to a measurable space"
---

Given a probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ and a measurable space $$\left(S,\mathcal{S}\right),$$ a **random variable** is a function $$X:\Omega\rightarrow S$$ such that:

$$\left\{\omega\in\Omega:X\left(\omega\right)\in A\right\}\in\mathcal{F}\,\,\forall\,A\in\mathcal{S}.$$

$$S$$ is called the **state space** of $$X$$ and $$\mathcal{S}$$ is its corresponding $$\sigma$$-algebra.

A second probability measure is often constructed when referring to the random variable $$X$$ and the values in the state space $$S$$ so that the underlying probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ and the original probability measure $$\mathbb{P}$$ do not need to be continually referenced.

Given a random variable $$X$$ defined with respect to an underlying probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ and measurable space $$\left(S,\mathcal{S}\right),$$ the **pushforward probability measure** is a probability measure $$\mathbb{P}_X$$ on $$\left(S,\mathcal{S}\right)$$ such that:

$$\mathbb{P}_X\left(X\in A\right) = \mathbb{P}\left(\left\{\omega\in\Omega:X\left(\omega\right)\in A\right\}\right)\,\,\forall\,A\in\mathcal{S}.$$

The pushforward probability measure $$\mathbb{P}_X$$ assigns probabilities to measurable subsets of the state space, $$A\in\mathcal{S},$$ and defines the **probability distribution** of $$X$$ over the state space $$S.$$ The complete probability space is $$\left(S,\mathcal{S},\mathbb{P}_X\right).$$

The **support** of the probability distribution $$\mathbb{P}_X$$ is the subset of the state space $$\mathcal{X}\subseteq S$$ such that the following properties are satisfied:

$$\mathbb{P}_X\left(X\in A\right)>0\,\,\forall\,A\subseteq\mathcal{X},A\neq\varnothing$$

$$\mathbb{P}_X\left(\mathcal{X}\right)=1.$$

A **cumulative distribution function** (cdf) $$F_X\left(x\right)$$ of a random variable $$X$$ is:

$$F_X\left(x\right)=\mathbb{P}_X\left(X\leq x\right)\,\,\forall\,x\in\mathbb{R}.$$

A cdf has the following properties:

- $$F_X$$ is monotonically increasing;
- $$F_X$$ is right-continuous;
- $$F_X$$ have the limiting cases:

$$\lim_{x\rightarrow-\infty}F_X\left(x\right)=0$$

$$\lim_{x\rightarrow\infty}F_X\left(x\right)=1.$$

The probability $$\mathbb{P}_X\left(x\in A\right)$$ where $$A\subseteq S$$ and $$A=\left(a_1, a_2\right]$$ is a semi-closed interval where $$a_1<a_2$$ is constructed through the difference of cdfs:

$$
\begin{align}
\mathbb{P}_X\left(x\in A\right)&=\mathbb{P}_X\left(a_1<X\leq a_2\right)\\
&=\mathbb{P}_X\left(X\leq a_2\right)-\mathbb{P}_X\left(X\leq a_1\right)\\
&=F_X\left(a_2\right)-F_X\left(a_1\right).
\end{align}
$$

Given a random variable $$X$$ defined on the measurable space $$\left(S,\mathcal{S}\right),$$ $$X$$ is a **discrete random variable** if there is an injective function between the state space $$S$$ and the set (or subset) of natural numbers $$\mathbb{N}.$$ That is, $$S$$ is countable:

$$S=\{x_1,\ldots,x_n\}\,\mathrm{(finite), or}$$

$$S=\{x_1,\ldots\}\,\mathrm{(infinite)}.$$

In this scenario $$S$$ is referred to as a discrete state space.

Let $$X$$ be a discrete random variable defined on the probability space $$\left(S,\mathcal{S},\mathbb{P}_X\right).$$ The **probability mass function** (pmf) is a function $$p_X:S\rightarrow\left[0,1\right]$$ defined by:

$$p_X\left(x\right)=\mathbb{P}_X\left(X=x\right)\,\,\forall\,x\in S.$$

The pmf $$p_X\left(x\right)$$ assigns probability to each element $$x\in S.$$ Generally, the pmf is defined to be zero for all values $$x\in\mathbb{R}\setminus S$$ so that $$p_X\left(x\right)$$ is defined for all $$x\in\mathbb{R}.$$

The pmf $$p_X$$ of a discrete random variable $$X$$ has the following properties:

$$p_X\left(x\right)\geq 0\,\,\forall\,x\in S$$

$$\sum_{x\in S}p_X\left(x\right)=1.$$

For discrete random variables, the elements $$x\in S$$ form a set partition of the state space $$S$$; that is, all elements in $$S$$ are disjoint. The probability $$\mathbb{P}_X\left(X\in A\right)$$ where $$A\in\mathcal{X}$$ and $$\mathcal{X}$$ is the support of $$\mathbb{P}_X$$ is constructed through the summation of the pmf:

$$
\begin{align}
\mathbb{P}_X\left(X\in A\right)&=\sum_{x\in A}\mathbb{P}_X\left(X=x\right)\\
&=\sum_{x\in A}p_X\left(x\right).
\end{align}
$$

Let $$X$$ be a discrete random variable with support $$\mathcal{X}=\left\{x_1,x_2,\ldots\right\}$$ where $$x_1<x_2<\ldots,$$ pmf $$p_X$$ and cdf $$F_X.$$ Given $$x\in\mathbb{R},$$ for $$x<x_1$$ then $$F_X\left(x\right)=0$$ and for $$x\geq x_1:$$

$$F_X\left(x\right)=\sum_{x_i\leq x}p_X\left(x_i\right)\Leftrightarrow p_X\left(x_i\right)=F_X\left(x_i\right)-F_X\left(x_{i-1}\right)\,\,\forall\,i\in\left\{2,3,\ldots\right\}.$$

A random variable $$X$$ is a **continuous random variable** if the cdf is a continuous function on $$\mathbb{R}.$$ $$X$$ is **absolutely continuous** if the cdf $$F_X$$ can be written in terms of its **probability density function** (pdf) $$f_X$$ as:

$$F_X\left(x\right)=\int_{-\infty}^x f_X\left(t\right)\,dt.$$

The support of a continuous random variable is $$\mathcal{X}=\left\{x:f_X\left(x\right)>0\right\}.$$

Continuous pdfs and cdfs have the following properties:

$$f_X\left(x\right)=\frac{d}{dt}\left[F_X\left(t\right)\right]_{t=x}$$

$$f_X\left(x\right)\neq\mathbb{P}\left(X=x\right)=0$$

$$
\begin{align}
\mathbb{P}_X\left(x_1\leq X\leq x_2\right)&=\mathbb{P}_X\left(x_1<X<x_2\right)\\
&=F_X\left(x_2\right)-F_X\left(x_1\right)\,\,\forall\,x_1<x_2;\,x_1,x_2\in\mathbb{R}.
\end{align}
$$

The pdf $$f_X$$ of a continuous random variable $$X$$ has the following properties:

$$f_X\left(x\right)\geq 0\,\,\forall\,x\in\mathbb{R}$$

$$\int_{-\infty}^{\infty}f_X\left(x\right)\,dx=1.$$

Let random variables $$X_1$$ and $$X_2$$ be defined on the probability spaces $$\left(S_1,\mathcal{S}_1,\mathbb{P}_{X_1}\right)$$ and $$\left(S_2,\mathcal{S}_2,\mathbb{P}_{X_2}\right)$$ respectively and with respect to a common underlying probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right).$$ The **random variable events** $$X_1\in A_1$$ and $$X_2\in A_2$$ where $$A_1\in\mathcal{S}_1$$ and $$A_2\in\mathcal{S}_2$$ are associated with the events $$E_1,E_2\in\Omega$$ respectively:

$$\mathbb{P}_{X_1}\left(X_1\in A_1\right)=\mathbb{P}\left(E_1\right)$$

$$\mathbb{P}_{X_2}\left(X_2\in A_2\right)=\mathbb{P}\left(E_2\right).$$

The **joint random variable event** is $$\left(X_1\in A_1,X_2\in A_2\right)$$ and corresponds to the intersection of the associated sample space events $$E_1\cap E_2.$$ The **bivariate probability distribution** for the bivariate random vector $$\left(X_1,X_2\right)$$ is a joint pushforward probability measure:

$$\mathbb{P}_{X_1,X_2}\left(X_1\in A_1,X_2\in A_2\right)=\mathbb{P}\left(\left\{\omega\in\Omega:X_1\left(\omega\right)\in A_1,X_2\left(\omega\right)\in A_2\right\}\right).$$

The random variables $$X_1$$ and $$X_2$$ are independent if and only if:

$$\mathbb{P}_{X_1,X_2}\left(X_1\in A_1,X_2\in A_2\right)=\mathbb{P}_{X_1}\left(X_1\in A_1\right)\mathbb{P}_{X_2}\left(X_2\in A_2\right).$$
