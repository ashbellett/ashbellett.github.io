---
layout: post
category: "probability"
title:  "Concentration Bounds"
tags: ["probability", "concentration bound"]
description: "Inequalities describing deviation of random variables"
---

A **concentration inequality** bounds the probability that a random variable deviates from its mean, or another reference value, using limited information about its distribution such as its moments, its range or the independence of its components. The bounds are valid for every distribution that satisfies the assumptions, which is what makes them useful when the distribution itself is unknown.

**Markov's inequality** states that if $$X$$ is a non-negative random variable with finite mean then for every $$a>0$$

$$\mathbb{P}\left(X\geq a\right)\leq\frac{\mathbb{E}\left[X\right]}{a}.$$

It follows from $$a\,\mathbf{1}_{\{X\geq a\}}\leq X$$ by taking expectations, and it is the inequality from which the others below are derived by applying it to a transformation of $$X.$$

**Chebyshev's inequality** states that if $$X$$ has finite mean $$\mu$$ and variance $$\sigma^2$$ then for every $$a>0$$

$$\mathbb{P}\left(\lvert X-\mu\rvert\geq a\right)\leq\frac{\sigma^2}{a^2},$$

which is Markov's inequality applied to $$\left(X-\mu\right)^2.$$ Taking $$a=k\sigma$$ shows that the probability of a deviation of at least $$k$$ standard deviations is at most $$\frac{1}{k^2}$$ for any distribution with finite variance. Applying Markov's inequality to $$\lvert X-\mu\rvert^k$$ gives the analogous bound $$\frac{\mathbb{E}\left[\lvert X-\mu\rvert^k\right]}{a^k}$$ from any finite moment.

The **Chernoff bound** states that if the mgf of $$X$$ exists then for every $$a\in\mathbb{R}$$

$$\mathbb{P}\left(X\geq a\right)\leq\inf_{t>0}e^{-ta}M_X\left(t\right),\qquad\mathbb{P}\left(X\leq a\right)\leq\inf_{t<0}e^{-ta}M_X\left(t\right),$$

which is Markov's inequality applied to $$e^{tX}$$ followed by optimising over $$t.$$ Because the mgf of a sum of independent random variables is the product of their mgfs, the Chernoff bound gives tail probabilities for sums that decrease exponentially in $$a,$$ whereas Chebyshev's inequality decreases only as $$\frac{1}{a^2}.$$

**Jensen's inequality** for random variables states that if $$\varphi:\mathbb{R}\rightarrow\mathbb{R}$$ is a convex function and $$X$$ has finite mean then

$$\varphi\left(\mathbb{E}\left[X\right]\right)\leq\mathbb{E}\left[\varphi\left(X\right)\right]$$

whenever the right-hand side exists, and the inequality reverses for concave $$\varphi.$$ It is the extension of Jensen's inequality for convex combinations from finite weighted averages to expectations, and the same statement holds for a random vector and a convex function on $$\mathbb{R}^n.$$ Consequences include $$\mathbb{E}\left[X^2\right]\geq\mathbb{E}\left[X\right]^2,$$ so that variances are non-negative, $$\mathbb{E}\left[\frac{1}{X}\right]\geq\frac{1}{\mathbb{E}\left[X\right]}$$ for positive $$X,$$ and $$\mathbb{E}\left[\log_e X\right]\leq\log_e\mathbb{E}\left[X\right].$$

The **Cauchy–Schwarz inequality** for random variables states that if $$X$$ and $$Y$$ have finite second moments then

$$\mathbb{E}\left[XY\right]^2\leq\mathbb{E}\left[X^2\right]\mathbb{E}\left[Y^2\right]$$

with equality if and only if $$Y=cX$$ almost surely for some $$c\in\mathbb{R}.$$ It is the Cauchy-Schwarz inequality of the inner product $$\langle X,Y\rangle=\mathbb{E}\left[XY\right]$$ on random variables with finite second moments, and applied to $$X-\mu_X$$ and $$Y-\mu_Y$$ it gives $$\lvert\mathrm{cov}\left[X,Y\right]\rvert\leq\sigma_X\sigma_Y,$$ so that correlations lie in $$\left[-1,1\right].$$

**Hölder's inequality** generalises the Cauchy–Schwarz inequality to exponents $$p,q>1$$ with $$\frac{1}{p}+\frac{1}{q}=1.$$

$$\mathbb{E}\left[\lvert XY\rvert\right]\leq\mathbb{E}\left[\lvert X\rvert^p\right]^{\frac{1}{p}}\mathbb{E}\left[\lvert Y\rvert^q\right]^{\frac{1}{q}}$$

**Lyapunov's inequality** states that for $$0<r<s$$

$$\mathbb{E}\left[\lvert X\rvert^r\right]^{\frac{1}{r}}\leq\mathbb{E}\left[\lvert X\rvert^s\right]^{\frac{1}{s}},$$

which follows from Jensen's inequality applied to the convex function $$x\mapsto x^{\frac{s}{r}}$$ and shows that the existence of the $$s$$-th moment implies the existence of all lower moments.

Let $$X$$ be a random variable with mean $$\mu.$$ $$X$$ is **sub-Gaussian** with **variance proxy** $$v>0$$ if and only if its centred mgf is bounded by that of a $$\mathrm{N}\left(0,v\right)$$ random variable.

$$\mathbb{E}\left[e^{t\left(X-\mu\right)}\right]\leq\exp\left(\frac{vt^2}{2}\right)\,\,\forall\,t\in\mathbb{R}$$

The Chernoff bound then gives $$\mathbb{P}\left(X-\mu\geq a\right)\leq\exp\left(-\frac{a^2}{2v}\right)$$ for every $$a>0,$$ so a sub-Gaussian random variable has tails that decay at least as fast as a normal distribution with variance $$v.$$ A normal random variable is sub-Gaussian with variance proxy equal to its variance, and the sum of independent sub-Gaussian random variables is sub-Gaussian with variance proxy equal to the sum of their variance proxies.

**Hoeffding's lemma** states that if $$a\leq X\leq b$$ almost surely then $$X$$ is sub-Gaussian with variance proxy $$\frac{\left(b-a\right)^2}{4}.$$

$$\mathbb{E}\left[e^{t\left(X-\mu\right)}\right]\leq\exp\left(\frac{t^2\left(b-a\right)^2}{8}\right)\,\,\forall\,t\in\mathbb{R}$$

Let $$X_1,\ldots,X_n$$ be independent random variables with $$a_i\leq X_i\leq b_i$$ almost surely and $$S_n=\sum_{i=1}^n X_i.$$ **Hoeffding's inequality** states that for every $$s>0$$

$$\mathbb{P}\left(S_n-\mathbb{E}\left[S_n\right]\geq s\right)\leq\exp\left(-\frac{2s^2}{\sum_{i=1}^n\left(b_i-a_i\right)^2}\right),\qquad\mathbb{P}\left(\left\lvert S_n-\mathbb{E}\left[S_n\right]\right\rvert\geq s\right)\leq 2\exp\left(-\frac{2s^2}{\sum_{i=1}^n\left(b_i-a_i\right)^2}\right).$$

It follows from the Chernoff bound and Hoeffding's lemma. For the average $$\overline{X}_n=\frac{1}{n}S_n$$ of iid random variables in $$\left[0,1\right]$$ with mean $$\mu$$ it gives

$$\mathbb{P}\left(\left\lvert\overline{X}_n-\mu\right\rvert\geq\varepsilon\right)\leq 2e^{-2n\varepsilon^2},$$

so the average concentrates around the mean at a rate that does not depend on the distribution beyond its range.

Hoeffding's inequality uses only the range of each variable and so is loose when the variances are much smaller than the squared ranges. **Bernstein's inequality** states that if $$X_1,\ldots,X_n$$ are independent with $$\lvert X_i-\mathbb{E}\left[X_i\right]\rvert\leq M$$ almost surely and $$\sigma^2=\sum_{i=1}^n\mathrm{var}\left[X_i\right]$$ then for every $$s>0$$

$$\mathbb{P}\left(S_n-\mathbb{E}\left[S_n\right]\geq s\right)\leq\exp\left(-\frac{s^2}{2\left(\sigma^2+\frac{Ms}{3}\right)}\right).$$

For $$s$$ small relative to $$\frac{\sigma^2}{M}$$ the bound behaves like the Gaussian tail $$\exp\left(-\frac{s^2}{2\sigma^2}\right)$$ and for large $$s$$ like the exponential tail $$\exp\left(-\frac{3s}{2M}\right).$$

Concentration extends from sums to functions of independent random variables that do not depend too much on any one of them. A function $$f:\mathbb{R}^n\rightarrow\mathbb{R}$$ satisfies the **bounded differences property** with constants $$c_1,\ldots,c_n$$ if changing its $$i$$-th argument alone changes its value by at most $$c_i.$$

$$\sup_{x_1,\ldots,x_n,\,x_i'}\left\lvert f\left(x_1,\ldots,x_i,\ldots,x_n\right)-f\left(x_1,\ldots,x_i',\ldots,x_n\right)\right\rvert\leq c_i\,\,\forall\,i$$

**McDiarmid's inequality** or the **bounded differences inequality** states that if $$X_1,\ldots,X_n$$ are independent and $$f$$ satisfies the bounded differences property then for every $$s>0$$

$$\mathbb{P}\left(f\left(X_1,\ldots,X_n\right)-\mathbb{E}\left[f\left(X_1,\ldots,X_n\right)\right]\geq s\right)\leq\exp\left(-\frac{2s^2}{\sum_{i=1}^n c_i^2}\right).$$

Hoeffding's inequality is the special case $$f\left(\underline{x}\right)=\sum_{i=1}^n x_i$$ with $$c_i=b_i-a_i.$$ McDiarmid's inequality bounds, for example, the deviation of an empirical error rate or of the largest deviation between an empirical and a true cdf from its mean.

Let $$X_1,\ldots,X_n$$ be independent, $$X_1',\ldots,X_n'$$ be independent copies of them and $$\underline{X}^{(i)}$$ be $$\underline{X}$$ with its $$i$$-th component replaced by $$X_i'.$$ The **Efron–Stein inequality** bounds the variance of a function of independent random variables by the expected effect of resampling one component at a time.

$$\mathrm{var}\left[f\left(\underline{X}\right)\right]\leq\frac{1}{2}\sum_{i=1}^n\mathbb{E}\left[\left(f\left(\underline{X}\right)-f\left(\underline{X}^{(i)}\right)\right)^2\right]$$

For a sum the inequality is an equality, and for a function with the bounded differences property it gives $$\mathrm{var}\left[f\left(\underline{X}\right)\right]\leq\frac{1}{4}\sum_{i=1}^n c_i^2.$$

**Gaussian concentration** states that if $$\underline{Z}\sim\mathrm{N}_n\left(\underline{0},I_n\right)$$ and $$f:\mathbb{R}^n\rightarrow\mathbb{R}$$ is Lipschitz continuous with constant $$L$$ with respect to Euclidean distance then $$f\left(\underline{Z}\right)$$ is sub-Gaussian with variance proxy $$L^2.$$

$$\mathbb{P}\left(f\left(\underline{Z}\right)-\mathbb{E}\left[f\left(\underline{Z}\right)\right]\geq s\right)\leq\exp\left(-\frac{s^2}{2L^2}\right)\,\,\forall\,s>0$$

The bound does not depend on the dimension $$n,$$ which is why, for example, the Euclidean length $$\lVert\underline{Z}\rVert$$ of a standard normal random vector concentrates within a constant distance of $$\sqrt{n}$$ in every dimension.
