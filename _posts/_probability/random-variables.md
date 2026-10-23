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

The **support** of the probability distribution $$\mathbb{P}_X$$ of a real-valued random variable $$X$$ is the smallest closed set $$\mathcal{X}\subseteq\mathbb{R}$$ such that $$\mathbb{P}_X\left(X\in\mathcal{X}\right)=1.$$ Equivalently, it is the set of points whose every neighbourhood has positive probability:

$$\mathcal{X}=\left\{x\in\mathbb{R}:\mathbb{P}_X\left(x-\varepsilon<X<x+\varepsilon\right)>0\,\,\forall\,\varepsilon>0\right\}.$$

Individual points of the support can have probability zero; for a continuous random variable every point does. In practice the support of a discrete random variable is usually taken to be $$\left\{x:p_X\left(x\right)>0\right\}$$ and that of a continuous random variable $$\left\{x:f_X\left(x\right)>0\right\}$$ (see below), which differ from the definition above by at most a set of probability zero.

A **cumulative distribution function** (cdf) $$F_X\left(x\right)$$ of a random variable $$X$$ is:

$$F_X\left(x\right)=\mathbb{P}_X\left(X\leq x\right)\,\,\forall\,x\in\mathbb{R}.$$

A cdf has the following properties:

- $$F_X$$ is monotonically increasing;
- $$F_X$$ is right-continuous;
- $$F_X$$ have the limiting cases:

$$\lim_{x\rightarrow-\infty}F_X\left(x\right)=0$$

$$\lim_{x\rightarrow\infty}F_X\left(x\right)=1.$$

The probability $$\mathbb{P}_X\left(X\in A\right)$$ where $$A\subseteq S$$ and $$A=\left(a_1, a_2\right]$$ is a half-open interval where $$a_1<a_2$$ is constructed through the difference of cdfs:

$$
\begin{align*}
\mathbb{P}_X\left(X\in A\right)&=\mathbb{P}_X\left(a_1<X\leq a_2\right)\\
&=\mathbb{P}_X\left(X\leq a_2\right)-\mathbb{P}_X\left(X\leq a_1\right)\\
&=F_X\left(a_2\right)-F_X\left(a_1\right).
\end{align*}
$$

Given a random variable $$X$$ defined on the measurable space $$\left(S,\mathcal{S}\right),$$ $$X$$ is a **discrete random variable** if there is an injective function from the state space $$S$$ to the natural numbers $$\mathbb{N}.$$ That is, $$S$$ is countable:

$$S=\{x_1,\ldots,x_n\}\,\mathrm{(finite), or}$$

$$S=\{x_1,\ldots\}\,\mathrm{(infinite)}.$$

In this scenario $$S$$ is referred to as a discrete state space.

Let $$X$$ be a discrete random variable defined on the probability space $$\left(S,\mathcal{S},\mathbb{P}_X\right).$$ The **probability mass function** (pmf) is a function $$p_X:S\rightarrow\left[0,1\right]$$ defined by:

$$p_X\left(x\right)=\mathbb{P}_X\left(X=x\right)\,\,\forall\,x\in S.$$

The pmf $$p_X\left(x\right)$$ assigns probability to each element $$x\in S.$$ Generally, the pmf is defined to be zero for all values $$x\in\mathbb{R}\setminus S$$ so that $$p_X\left(x\right)$$ is defined for all $$x\in\mathbb{R}.$$

The pmf $$p_X$$ of a discrete random variable $$X$$ has the following properties:

$$p_X\left(x\right)\geq 0\,\,\forall\,x\in S$$

$$\sum_{x\in S}p_X\left(x\right)=1.$$

For discrete random variables, the singleton sets $$\{x\},$$ $$x\in S,$$ form a partition of the state space $$S$$ into disjoint events. The probability $$\mathbb{P}_X\left(X\in A\right)$$ for any $$A\in\mathcal{S}$$ is constructed through the summation of the pmf:

$$
\begin{align*}
\mathbb{P}_X\left(X\in A\right)&=\sum_{x\in A}\mathbb{P}_X\left(X=x\right)\\
&=\sum_{x\in A}p_X\left(x\right).
\end{align*}
$$

Let $$X$$ be a discrete random variable with support $$\mathcal{X}=\left\{x_1,x_2,\ldots\right\}$$ where $$x_1<x_2<\ldots,$$ pmf $$p_X$$ and cdf $$F_X.$$ Given $$x\in\mathbb{R},$$ for $$x<x_1$$ then $$F_X\left(x\right)=0$$ and for $$x\geq x_1:$$

$$F_X\left(x\right)=\sum_{x_i\leq x}p_X\left(x_i\right)\Leftrightarrow p_X\left(x_i\right)=F_X\left(x_i\right)-F_X\left(x_{i-1}\right)\,\,\forall\,i\in\left\{2,3,\ldots\right\}.$$

A random variable $$X$$ is a **continuous random variable** if the cdf is a continuous function on $$\mathbb{R}.$$ $$X$$ is **absolutely continuous** if the cdf $$F_X$$ can be written in terms of its **probability density function** (pdf) $$f_X$$ as:

$$F_X\left(x\right)=\int_{-\infty}^x f_X\left(t\right)\,dt.$$

Continuous pdfs and cdfs have the following properties. The pdf is the derivative of the cdf at every $$x$$ where $$F_X$$ is differentiable (for example, wherever $$f_X$$ is continuous):

$$f_X\left(x\right)=\frac{d}{dt}\left[F_X\left(t\right)\right]_{t=x}$$

The probability that $$X$$ takes any single value is zero, $$\mathbb{P}_X\left(X=x\right)=0\,\,\forall\,x\in\mathbb{R},$$ so the density $$f_X\left(x\right)$$ is not a probability and can even exceed one. Including or excluding the endpoints of an interval therefore does not change its probability:

$$
\begin{align*}
\mathbb{P}_X\left(x_1\leq X\leq x_2\right)&=\mathbb{P}_X\left(x_1<X<x_2\right)\\
&=F_X\left(x_2\right)-F_X\left(x_1\right)\,\,\forall\,x_1<x_2;\,x_1,x_2\in\mathbb{R}.
\end{align*}
$$

The pdf $$f_X$$ of a continuous random variable $$X$$ has the following properties:

$$f_X\left(x\right)\geq 0\,\,\forall\,x\in\mathbb{R}$$

$$\int_{-\infty}^{\infty}f_X\left(x\right)\,dx=1.$$

Let random variables $$X_1$$ and $$X_2$$ be defined on the probability spaces $$\left(S_1,\mathcal{S}_1,\mathbb{P}_{X_1}\right)$$ and $$\left(S_2,\mathcal{S}_2,\mathbb{P}_{X_2}\right)$$ respectively and with respect to a common underlying probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right).$$ The **random variable events** $$X_1\in A_1$$ and $$X_2\in A_2$$ where $$A_1\in\mathcal{S}_1$$ and $$A_2\in\mathcal{S}_2$$ are associated with the events $$E_1,E_2\in\mathcal{F}$$ respectively:

$$\mathbb{P}_{X_1}\left(X_1\in A_1\right)=\mathbb{P}\left(E_1\right)$$

$$\mathbb{P}_{X_2}\left(X_2\in A_2\right)=\mathbb{P}\left(E_2\right).$$

The **joint random variable event** is $$\left(X_1\in A_1,X_2\in A_2\right)$$ and corresponds to the intersection of the associated sample space events $$E_1\cap E_2.$$ The **bivariate probability distribution** for the bivariate random vector $$\left(X_1,X_2\right)$$ is a joint pushforward probability measure:

$$\mathbb{P}_{X_1,X_2}\left(X_1\in A_1,X_2\in A_2\right)=\mathbb{P}\left(\left\{\omega\in\Omega:X_1\left(\omega\right)\in A_1,X_2\left(\omega\right)\in A_2\right\}\right).$$

The random variables $$X_1$$ and $$X_2$$ are independent if and only if:

$$\mathbb{P}_{X_1,X_2}\left(X_1\in A_1,X_2\in A_2\right)=\mathbb{P}_{X_1}\left(X_1\in A_1\right)\mathbb{P}_{X_2}\left(X_2\in A_2\right)\,\,\forall\,A_1\in\mathcal{S}_1,A_2\in\mathcal{S}_2.$$

Two random variables $$X_1$$ and $$X_2$$ are **identically distributed** if and only if they have the same probability distribution, $$\mathbb{P}_{X_1}\left(X_1\in A\right)=\mathbb{P}_{X_2}\left(X_2\in A\right)\,\,\forall\,A.$$ A collection of random variables that are mutually independent and identically distributed is **independent and identically distributed** (iid).

Let $$X_1,\ldots,X_n$$ be real-valued random variables defined with respect to a common probability space. The **random vector** $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ is the function $$\underline{X}:\Omega\rightarrow\mathbb{R}^n$$ with components $$X_i,$$ and its **joint distribution** $$\mathbb{P}_{\underline{X}}$$ is the pushforward probability measure on $$\mathbb{R}^n.$$ The **joint cumulative distribution function** of $$\underline{X}$$ is

$$F_{\underline{X}}\left(\underline{x}\right)=\mathbb{P}\left(X_1\leq x_1,\ldots,X_n\leq x_n\right)\,\,\forall\,\underline{x}\in\mathbb{R}^n.$$

If every $$X_i$$ is discrete then $$\underline{X}$$ is a **discrete random vector** with **joint probability mass function**

$$p_{\underline{X}}\left(\underline{x}\right)=\mathbb{P}\left(X_1=x_1,\ldots,X_n=x_n\right)$$

and $$\underline{X}$$ is a **continuous random vector** if there is a **joint probability density function** $$f_{\underline{X}}:\mathbb{R}^n\rightarrow\left[0,\infty\right)$$ such that for every measurable $$A\subseteq\mathbb{R}^n$$

$$\mathbb{P}\left(\underline{X}\in A\right)=\int_A f_{\underline{X}}\left(\underline{x}\right)d\underline{x}.$$

The joint pmf sums to one over the state space and the joint pdf integrates to one over $$\mathbb{R}^n.$$ The **marginal distribution** of a component $$X_i$$ is its own probability distribution and is recovered from the joint distribution by summing or integrating over the other components. For $$n=2$$ the **marginal pmf** and **marginal pdf** of $$X_1$$ are

$$p_{X_1}\left(x_1\right)=\sum_{x_2}p_{X_1,X_2}\left(x_1,x_2\right)$$

$$f_{X_1}\left(x_1\right)=\int_{-\infty}^{\infty}f_{X_1,X_2}\left(x_1,x_2\right)dx_2.$$

The random variables $$X_1,\ldots,X_n$$ are mutually independent if and only if the joint cdf factorises as the product of the marginal cdfs for all $$\underline{x},$$ and equivalently if and only if the joint pmf or pdf factorises as the product of the marginal pmfs or pdfs.

$$F_{\underline{X}}\left(\underline{x}\right)=\prod_{i=1}^n F_{X_i}\left(x_i\right)$$

$$f_{\underline{X}}\left(\underline{x}\right)=\prod_{i=1}^n f_{X_i}\left(x_i\right)$$

Let $$\left(X_1,X_2\right)$$ be a discrete random vector and $$x_2$$ be a value with $$p_{X_2}\left(x_2\right)>0.$$ The **conditional pmf** of $$X_1$$ given $$X_2=x_2$$ is the conditional probability of the event $$X_1=x_1$$ given the event $$X_2=x_2.$$

$$p_{X_1\mid X_2}\left(x_1\mid x_2\right)=\frac{p_{X_1,X_2}\left(x_1,x_2\right)}{p_{X_2}\left(x_2\right)}$$

Let $$\left(X_1,X_2\right)$$ be a continuous random vector and $$x_2$$ be a value with $$f_{X_2}\left(x_2\right)>0.$$ The **conditional pdf** of $$X_1$$ given $$X_2=x_2$$ is defined by the same ratio of densities, even though the event $$X_2=x_2$$ has probability zero.

$$f_{X_1\mid X_2}\left(x_1\mid x_2\right)=\frac{f_{X_1,X_2}\left(x_1,x_2\right)}{f_{X_2}\left(x_2\right)}$$

The **conditional distribution** of $$X_1$$ given $$X_2=x_2$$ is the probability distribution with this pmf or pdf. Rearranging gives the **chain rule** $$f_{X_1,X_2}=f_{X_1\mid X_2}f_{X_2},$$ and $$X_1$$ and $$X_2$$ are independent if and only if the conditional distribution of $$X_1$$ given $$X_2=x_2$$ equals the marginal distribution of $$X_1$$ for every $$x_2.$$ Bayes' theorem for densities follows in the same way as for events.

$$f_{X_2\mid X_1}\left(x_2\mid x_1\right)=\frac{f_{X_1\mid X_2}\left(x_1\mid x_2\right)f_{X_2}\left(x_2\right)}{f_{X_1}\left(x_1\right)}$$

Let $$X$$ be a random variable and $$g:\mathbb{R}\rightarrow\mathbb{R}$$ be a function. The **transformation** $$Y=g(X)$$ is a random variable whose distribution is determined by that of $$X$$ through $$F_Y\left(y\right)=\mathbb{P}\left(g(X)\leq y\right).$$ If $$X$$ is discrete then

$$p_Y\left(y\right)=\sum_{x:\,g(x)=y}p_X\left(x\right).$$

If $$X$$ is continuous and $$g$$ is strictly monotonic and differentiable on the support of $$X$$ then the **change of variables formula** gives

$$f_Y\left(y\right)=f_X\left(g^{-1}\left(y\right)\right)\left\lvert\frac{d}{dy}g^{-1}\left(y\right)\right\rvert.$$

If $$g$$ is not monotonic the formula is applied separately on each interval where $$g$$ is monotonic and the contributions are summed; for example $$Y=X^2$$ has $$f_Y\left(y\right)=\frac{1}{2\sqrt{y}}\left(f_X\left(\sqrt{y}\right)+f_X\left(-\sqrt{y}\right)\right)$$ for $$y>0.$$ For a continuous random vector $$\underline{X}$$ and a bijection $$\underline{g}:\mathbb{R}^n\rightarrow\mathbb{R}^n$$ that is continuously differentiable with continuously differentiable inverse, the change of variables theorem for multiple integrals gives

$$f_{\underline{Y}}\left(\underline{y}\right)=f_{\underline{X}}\left(\underline{g}^{-1}\left(\underline{y}\right)\right)\left\lvert\det J_{\underline{g}^{-1}}\left(\underline{y}\right)\right\rvert$$

where $$J_{\underline{g}^{-1}}$$ is the Jacobian matrix of the inverse transformation.
