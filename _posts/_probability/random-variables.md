---
title:  "Random Variables"
description: "Mapping from outcomes to a measurable space"
---

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space and $$\left(S,\mathcal{S}\right)$$ be a measurable space. A **random variable** is a function $$X:\Omega\rightarrow S$$ such that the inverse image of every measurable subset of $$S$$ is an event.

$$\left\{\omega\in\Omega:X\left(\omega\right)\in A\right\}\in\mathcal{F}\,\,\forall\,A\in\mathcal{S}$$

Let $$X:\Omega\rightarrow S$$ be a random variable. The set $$S$$ is the **state space** of $$X$$ and $$\mathcal{S}$$ is its $$\sigma$$-algebra. The random variable $$X$$ is **real-valued** if and only if $$S\subseteq\mathbb{R}.$$ The notation $$X\in A$$ denotes the event $$\left\{\omega\in\Omega:X\left(\omega\right)\in A\right\}.$$

Let $$X:\Omega\rightarrow S$$ be a random variable on the probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right).$$ The **pushforward probability measure** of $$X$$ is the probability measure $$\mathbb{P}_X$$ on $$\left(S,\mathcal{S}\right)$$ that assigns to each measurable subset of $$S$$ the probability of its inverse image.

$$\mathbb{P}_X\left(A\right) := \mathbb{P}\left(\left\{\omega\in\Omega:X\left(\omega\right)\in A\right\}\right)\,\,\forall\,A\in\mathcal{S}$$

The pushforward probability measure is also written $$\mathbb{P}_X\left(X\in A\right)$$ or $$\mathbb{P}\left(X\in A\right).$$ The triple $$\left(S,\mathcal{S},\mathbb{P}_X\right)$$ is a probability space, which allows the underlying probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ to be left implicit.

Let $$X$$ be a random variable with pushforward probability measure $$\mathbb{P}_X.$$ The **probability distribution** of $$X$$ is the probability measure $$\mathbb{P}_X$$ on the state space.

Let $$X$$ be a real-valued random variable. The **cumulative distribution function** (cdf) of $$X$$ is the function $$F_X:\mathbb{R}\rightarrow\left[0,1\right]$$ that gives the probability that $$X$$ is at most $$x.$$

$$F_X\left(x\right):=\mathbb{P}_X\left(X\leq x\right)\,\,\forall\,x\in\mathbb{R}$$

The cdf has the following properties:
- $$F_X$$ is monotonically increasing;
- $$F_X$$ is right-continuous;
- $$\lim_{x\rightarrow-\infty}F_X\left(x\right)=0$$ and $$\lim_{x\rightarrow\infty}F_X\left(x\right)=1;$$
- the probability of a half-open interval is a difference of cdf values, $$\mathbb{P}_X\left(a_1<X\leq a_2\right)=F_X\left(a_2\right)-F_X\left(a_1\right)$$ for $$a_1<a_2;$$
- the cdf determines the probability distribution of $$X.$$

Let $$X$$ be a random variable with state space $$S.$$ The random variable $$X$$ is a **discrete random variable** if and only if $$S$$ is countable, that is, $$S=\{x_1,\ldots,x_n\}$$ is finite or $$S=\{x_1,x_2,\ldots\}$$ is countably infinite. The state space of a discrete random variable is a **discrete state space**.

Let $$X$$ be a discrete random variable with state space $$S.$$ The **probability mass function** (pmf) of $$X$$ is the function $$p_X:S\rightarrow\left[0,1\right]$$ that gives the probability that $$X$$ takes each value.

$$p_X\left(x\right):=\mathbb{P}_X\left(X=x\right)\,\,\forall\,x\in S$$

The pmf is extended to $$\mathbb{R}$$ by setting $$p_X\left(x\right)=0$$ for $$x\in\mathbb{R}\setminus S.$$ The pmf has the following properties:

$$p_X\left(x\right)\geq 0\,\,\forall\,x\in S$$

$$\sum_{x\in S}p_X\left(x\right)=1$$

$$\mathbb{P}_X\left(X\in A\right)=\sum_{x\in A}p_X\left(x\right)\,\,\forall\,A\in\mathcal{S}$$

The last property holds since the singleton sets $$\{x\},$$ $$x\in S,$$ form a partition of $$S$$ into disjoint events.

Let $$X$$ be a discrete random variable with state space $$\left\{x_1,x_2,\ldots\right\}$$ where $$x_1<x_2<\ldots,$$ pmf $$p_X$$ and cdf $$F_X.$$ The cdf and pmf are related as follows: $$F_X\left(x\right)=0$$ for $$x<x_1,$$ and

$$F_X\left(x\right)=\sum_{x_i\leq x}p_X\left(x_i\right)\,\,\forall\,x\geq x_1,\qquad p_X\left(x_i\right)=F_X\left(x_i\right)-F_X\left(x_{i-1}\right)\,\,\forall\,i\geq 2.$$

Let $$X$$ be a real-valued random variable. The random variable $$X$$ is a **continuous random variable** if and only if its cdf is a continuous function on $$\mathbb{R}.$$

Let $$X$$ be a real-valued random variable. The random variable $$X$$ is **absolutely continuous** if and only if there exists a function $$f_X:\mathbb{R}\rightarrow\left[0,\infty\right)$$ such that the cdf is the integral of $$f_X.$$

$$F_X\left(x\right)=\int_{-\infty}^x f_X\left(t\right)\,dt\,\,\forall\,x\in\mathbb{R}$$

Let $$X$$ be an absolutely continuous random variable. The **probability density function** (pdf) of $$X$$ is the function $$f_X$$ above. Below, a continuous random variable is taken to be absolutely continuous. The pdf has the following properties:

$$f_X\left(x\right)\geq 0\,\,\forall\,x\in\mathbb{R}$$

$$\int_{-\infty}^{\infty}f_X\left(x\right)\,dx=1$$

$$f_X\left(x\right)=\frac{d}{dx}F_X\left(x\right)\,\,\mathrm{wherever}\,\,F_X\,\,\mathrm{is}\,\,\mathrm{differentiable}$$

$$\mathbb{P}_X\left(X\in A\right)=\int_A f_X\left(x\right)\,dx$$

The cdf is differentiable wherever $$f_X$$ is continuous. Continuous random variables have the following properties:
- the probability that $$X$$ takes any single value is zero, $$\mathbb{P}_X\left(X=x\right)=0$$ for all $$x\in\mathbb{R};$$
- the density $$f_X\left(x\right)$$ is not a probability and can exceed one;
- including or excluding the endpoints of an interval does not change its probability, $$\mathbb{P}_X\left(x_1\leq X\leq x_2\right)=\mathbb{P}_X\left(x_1<X<x_2\right)=F_X\left(x_2\right)-F_X\left(x_1\right)$$ for $$x_1<x_2.$$

Let $$X$$ be a real-valued random variable with probability distribution $$\mathbb{P}_X.$$ The **support** of $$\mathbb{P}_X$$ is the smallest closed set $$\mathcal{X}\subseteq\mathbb{R}$$ with $$\mathbb{P}_X\left(X\in\mathcal{X}\right)=1.$$ Equivalently, the support is the set of points whose every neighbourhood has positive probability.

$$\mathcal{X}=\left\{x\in\mathbb{R}:\mathbb{P}_X\left(x-\varepsilon<X<x+\varepsilon\right)>0\,\,\forall\,\varepsilon>0\right\}$$

Individual points of the support can have probability zero, and for a continuous random variable every point does. In practice the support of a discrete random variable is taken to be $$\left\{x:p_X\left(x\right)>0\right\}$$ and the support of a continuous random variable is taken to be $$\left\{x:f_X\left(x\right)>0\right\},$$ which differ from the definition above by at most a set of probability zero.

Let $$X_1$$ and $$X_2$$ be random variables with a common state space. The random variables $$X_1$$ and $$X_2$$ are **identically distributed** if and only if they have the same probability distribution.

$$\mathbb{P}_{X_1}\left(X_1\in A\right)=\mathbb{P}_{X_2}\left(X_2\in A\right)\,\,\forall\,A$$

Let $$X_1,\ldots,X_n$$ be real-valued random variables defined on a common probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right).$$ The **random vector** $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ is the function $$\underline{X}:\Omega\rightarrow\mathbb{R}^n$$ with components $$X_i.$$

Let $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ be a random vector. The **joint distribution** of $$\underline{X}$$ is its pushforward probability measure $$\mathbb{P}_{\underline{X}}$$ on $$\mathbb{R}^n.$$

Let $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ be a random vector. The **joint cumulative distribution function** of $$\underline{X}$$ is the function that gives the probability that every component is at most the corresponding coordinate.

$$F_{\underline{X}}\left(\underline{x}\right):=\mathbb{P}\left(X_1\leq x_1,\ldots,X_n\leq x_n\right)\,\,\forall\,\underline{x}\in\mathbb{R}^n$$

Let $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ be a random vector. The random vector $$\underline{X}$$ is a **discrete random vector** if and only if every component $$X_i$$ is discrete.

Let $$\underline{X}$$ be a discrete random vector. The **joint probability mass function** of $$\underline{X}$$ is the function that gives the probability that the components take each tuple of values.

$$p_{\underline{X}}\left(\underline{x}\right):=\mathbb{P}\left(X_1=x_1,\ldots,X_n=x_n\right)$$

The joint pmf sums to one over the state space.

Let $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ be a random vector. The random vector $$\underline{X}$$ is a **continuous random vector** if and only if there exists a function $$f_{\underline{X}}:\mathbb{R}^n\rightarrow\left[0,\infty\right)$$ such that for every measurable $$A\subseteq\mathbb{R}^n$$

$$\mathbb{P}\left(\underline{X}\in A\right)=\int_A f_{\underline{X}}\left(\underline{x}\right)d\underline{x}.$$

Let $$\underline{X}$$ be a continuous random vector. The **joint probability density function** of $$\underline{X}$$ is the function $$f_{\underline{X}}$$ above. The joint pdf integrates to one over $$\mathbb{R}^n.$$

Let $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ be a random vector. The **marginal distribution** of a component $$X_i$$ is the probability distribution of $$X_i$$ alone. The marginal distribution is recovered from the joint distribution by summing or integrating over the other components. For $$n=2$$ the **marginal pmf** and **marginal pdf** of $$X_1$$ are

$$p_{X_1}\left(x_1\right)=\sum_{x_2}p_{X_1,X_2}\left(x_1,x_2\right),\qquad f_{X_1}\left(x_1\right)=\int_{-\infty}^{\infty}f_{X_1,X_2}\left(x_1,x_2\right)dx_2.$$

Let $$X_1$$ and $$X_2$$ be random variables defined on a common probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ with state spaces $$\left(S_1,\mathcal{S}_1\right)$$ and $$\left(S_2,\mathcal{S}_2\right),$$ and $$A_1\in\mathcal{S}_1$$ and $$A_2\in\mathcal{S}_2.$$ The **random variable events** $$X_1\in A_1$$ and $$X_2\in A_2$$ are the events $$E_1=\left\{\omega:X_1\left(\omega\right)\in A_1\right\}$$ and $$E_2=\left\{\omega:X_2\left(\omega\right)\in A_2\right\}$$ in $$\mathcal{F},$$ so that $$\mathbb{P}_{X_1}\left(X_1\in A_1\right)=\mathbb{P}\left(E_1\right)$$ and $$\mathbb{P}_{X_2}\left(X_2\in A_2\right)=\mathbb{P}\left(E_2\right).$$ The **joint random variable event** $$\left(X_1\in A_1,X_2\in A_2\right)$$ is the intersection $$E_1\cap E_2.$$

Let $$X_1$$ and $$X_2$$ be random variables defined on a common probability space. The **bivariate probability distribution** of the random vector $$\left(X_1,X_2\right)$$ is the joint pushforward probability measure.

$$\mathbb{P}_{X_1,X_2}\left(X_1\in A_1,X_2\in A_2\right):=\mathbb{P}\left(\left\{\omega\in\Omega:X_1\left(\omega\right)\in A_1,X_2\left(\omega\right)\in A_2\right\}\right)$$

Let $$X_1$$ and $$X_2$$ be random variables defined on a common probability space. The random variables $$X_1$$ and $$X_2$$ are **independent** if and only if every pair of random variable events is independent.

$$\mathbb{P}_{X_1,X_2}\left(X_1\in A_1,X_2\in A_2\right)=\mathbb{P}_{X_1}\left(X_1\in A_1\right)\mathbb{P}_{X_2}\left(X_2\in A_2\right)\,\,\forall\,A_1\in\mathcal{S}_1,A_2\in\mathcal{S}_2$$

Let $$X_1,\ldots,X_n$$ be random variables defined on a common probability space. The random variables are **mutually independent** if and only if the events $$X_1\in A_1,\ldots,X_n\in A_n$$ are mutually independent for every choice of measurable sets $$A_1,\ldots,A_n.$$ The random variables $$X_1,\ldots,X_n$$ are mutually independent if and only if the joint cdf factorises as the product of the marginal cdfs for all $$\underline{x},$$ and equivalently if and only if the joint pmf or pdf factorises as the product of the marginal pmfs or pdfs.

$$F_{\underline{X}}\left(\underline{x}\right)=\prod_{i=1}^n F_{X_i}\left(x_i\right)$$

$$f_{\underline{X}}\left(\underline{x}\right)=\prod_{i=1}^n f_{X_i}\left(x_i\right)$$

Let $$X_1,\ldots,X_n$$ be random variables defined on a common probability space. The random variables are **independent and identically distributed** (iid) if and only if they are mutually independent and identically distributed.

Let $$\left(X_1,X_2\right)$$ be a discrete random vector and $$x_2$$ be a value with $$p_{X_2}\left(x_2\right)>0.$$ The **conditional pmf** of $$X_1$$ given $$X_2=x_2$$ is the conditional probability of the event $$X_1=x_1$$ given the event $$X_2=x_2.$$

$$p_{X_1\mid X_2}\left(x_1\mid x_2\right):=\frac{p_{X_1,X_2}\left(x_1,x_2\right)}{p_{X_2}\left(x_2\right)}$$

Let $$\left(X_1,X_2\right)$$ be a continuous random vector and $$x_2$$ be a value with $$f_{X_2}\left(x_2\right)>0.$$ The **conditional pdf** of $$X_1$$ given $$X_2=x_2$$ is the ratio of the joint pdf to the marginal pdf of $$X_2,$$ even though the event $$X_2=x_2$$ has probability zero.

$$f_{X_1\mid X_2}\left(x_1\mid x_2\right):=\frac{f_{X_1,X_2}\left(x_1,x_2\right)}{f_{X_2}\left(x_2\right)}$$

Let $$\left(X_1,X_2\right)$$ be a random vector. The **conditional distribution** of $$X_1$$ given $$X_2=x_2$$ is the probability distribution with the conditional pmf or pdf. Conditional distributions have the following properties:
- the joint pdf factorises as $$f_{X_1,X_2}=f_{X_1\mid X_2}f_{X_2},$$ and likewise for pmfs;
- $$X_1$$ and $$X_2$$ are independent if and only if the conditional distribution of $$X_1$$ given $$X_2=x_2$$ equals the marginal distribution of $$X_1$$ for every $$x_2;$$
- **Bayes' theorem for densities** follows in the same way as for events:

$$f_{X_2\mid X_1}\left(x_2\mid x_1\right)=\frac{f_{X_1\mid X_2}\left(x_1\mid x_2\right)f_{X_2}\left(x_2\right)}{f_{X_1}\left(x_1\right)}.$$

Let $$X$$ be a real-valued random variable and $$g:\mathbb{R}\rightarrow\mathbb{R}$$ be a function. The **transformation** of $$X$$ by $$g$$ is the random variable $$Y=g(X),$$ whose distribution is determined by that of $$X$$ through $$F_Y\left(y\right)=\mathbb{P}\left(g(X)\leq y\right).$$ If $$X$$ is discrete then the pmf of $$Y$$ sums the pmf of $$X$$ over the preimage of each value.

$$p_Y\left(y\right)=\sum_{x:\,g(x)=y}p_X\left(x\right)$$

Let $$X$$ be a continuous random variable and $$g:\mathbb{R}\rightarrow\mathbb{R}$$ be strictly monotonic and differentiable on the support of $$X.$$ The **change of variables formula** states that the pdf of $$Y=g(X)$$ is the pdf of $$X$$ at the preimage scaled by the derivative of the inverse.

$$f_Y\left(y\right)=f_X\left(g^{-1}\left(y\right)\right)\left\lvert\frac{d}{dy}g^{-1}\left(y\right)\right\rvert$$

If $$g$$ is not monotonic the formula is applied separately on each interval where $$g$$ is monotonic and the contributions are summed. For example, $$Y=X^2$$ has $$f_Y\left(y\right)=\frac{1}{2\sqrt{y}}\left(f_X\left(\sqrt{y}\right)+f_X\left(-\sqrt{y}\right)\right)$$ for $$y>0.$$

Let $$\underline{X}$$ be a continuous random vector and $$\underline{g}:\mathbb{R}^n\rightarrow\mathbb{R}^n$$ be a bijection that is continuously differentiable with continuously differentiable inverse. The **multivariate change of variables formula** states that the joint pdf of $$\underline{Y}=\underline{g}\left(\underline{X}\right)$$ is the joint pdf of $$\underline{X}$$ at the preimage scaled by the absolute value of the Jacobian determinant of the inverse, which follows from the change of variables theorem for multiple integrals.

$$f_{\underline{Y}}\left(\underline{y}\right)=f_{\underline{X}}\left(\underline{g}^{-1}\left(\underline{y}\right)\right)\left\lvert\det J_{\underline{g}^{-1}}\left(\underline{y}\right)\right\rvert$$
