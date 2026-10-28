---
layout: post
category: "probability"
title:  "Moments"
tags: ["probability", "moment"]
description: "Information about a distribution's shape"
---

Let $$X$$ be a discrete real-valued random variable with pmf $$p_X$$ and state space $$S.$$ The **expectation** or **mean** of $$X$$ is the sum of its values weighted by their probabilities, provided the sum is absolutely convergent.

$$\mathbb{E}\left[X\right]:=\sum_{x\in S}x\,p_X\left(x\right)$$

Let $$X$$ be a continuous random variable with pdf $$f_X.$$ The **expectation** or **mean** of $$X$$ is the integral of its values weighted by its density, provided the improper integral is absolutely convergent.

$$\mathbb{E}\left[X\right]:=\int_{-\infty}^{\infty}x\,f_X\left(x\right)dx$$

If the sum or integral is not absolutely convergent then the expectation does not exist. The expectation is a property of the probability distribution of $$X,$$ is often written $$\mu,$$ and need not be a value that $$X$$ can take.

Let $$X$$ be a real-valued random variable and $$g:\mathbb{R}\rightarrow\mathbb{R}$$ be a function. The **law of the unconscious statistician** states that the expectation of the transformation $$g(X)$$ can be computed from the distribution of $$X$$ without finding the distribution of $$g(X).$$

$$\mathbb{E}\left[g(X)\right]=\sum_{x\in S}g(x)\,p_X\left(x\right),\qquad\mathbb{E}\left[g(X)\right]=\int_{-\infty}^{\infty}g(x)\,f_X\left(x\right)dx$$

For a random vector $$\underline{X}$$ and $$g:\mathbb{R}^n\rightarrow\mathbb{R}$$ the same holds with the joint pmf or pdf, $$\mathbb{E}\left[g(\underline{X})\right]=\int_{\mathbb{R}^n}g(\underline{x})\,f_{\underline{X}}\left(\underline{x}\right)d\underline{x}.$$

Let $$A$$ be an event. The **indicator random variable** of $$A$$ is the random variable $$\mathbf{1}_A$$ that is $$1$$ if $$A$$ occurs and $$0$$ otherwise.

Let $$X,Y$$ be random variables with finite expectations, $$a,b,c\in\mathbb{R}$$ and $$A$$ be an event. The expectation has the following properties:

$$\mathbb{E}\left[c\right]=c,\qquad\mathbb{E}\left[\mathbf{1}_A\right]=\mathbb{P}\left(A\right)$$

$$\mathbb{E}\left[aX+bY+c\right]=a\,\mathbb{E}\left[X\right]+b\,\mathbb{E}\left[Y\right]+c$$

$$\mathrm{if}\,\,X\leq Y\,\,\mathrm{then}\,\,\mathbb{E}\left[X\right]\leq\mathbb{E}\left[Y\right]$$

$$\left\lvert\mathbb{E}\left[X\right]\right\rvert\leq\mathbb{E}\left[\lvert X\rvert\right]$$

$$\mathrm{if}\,\,X\,\,\mathrm{and}\,\,Y\,\,\mathrm{are}\,\,\mathrm{independent}\,\,\mathrm{then}\,\,\mathbb{E}\left[XY\right]=\mathbb{E}\left[X\right]\mathbb{E}\left[Y\right]$$

The second property is **linearity** of expectation, which holds whether or not $$X$$ and $$Y$$ are independent.

A statement about random variables holds **almost surely** (a.s.) if and only if it holds with probability one.

Let $$X$$ be a random variable with finite mean $$\mu.$$ The **variance** of $$X$$ is the expected squared deviation from the mean.

$$\mathrm{var}\left[X\right]:=\mathbb{E}\left[\left(X-\mu\right)^2\right]=\mathbb{E}\left[X^2\right]-\mu^2$$

Let $$X$$ be a random variable with finite variance. The **standard deviation** of $$X$$ is the square root of its variance.

$$\sigma:=\sqrt{\mathrm{var}\left[X\right]}$$

The variance and standard deviation have the following properties for $$a,b\in\mathbb{R}:$$
- the variance is finite if and only if $$\mathbb{E}\left[X^2\right]$$ is finite;
- $$\mathrm{var}\left[X\right]\geq 0$$ with equality if and only if $$X=\mu$$ almost surely;
- $$\mathrm{var}\left[aX+b\right]=a^2\,\mathrm{var}\left[X\right];$$
- the variance is measured in squared units of $$X$$ whereas the standard deviation is measured in the units of $$X.$$

Let $$X$$ be a random variable with mean $$\mu$$ and standard deviation $$\sigma,$$ and $$k\in\mathbb{N}.$$ The **$$k$$-th moment** of $$X$$ is $$\mathbb{E}\left[X^k\right].$$ The **$$k$$-th central moment** of $$X$$ is $$\mathbb{E}\left[\left(X-\mu\right)^k\right].$$ The **$$k$$-th standardised moment** of $$X$$ is $$\mathbb{E}\left[\left(\frac{X-\mu}{\sigma}\right)^k\right].$$ Moments have the following properties:
- the mean is the first moment and the variance is the second central moment;
- if the $$k$$-th moment is finite then every lower moment is finite.

Let $$X$$ be a random variable with finite third moment. The **skewness** of $$X$$ is its third standardised moment. The skewness measures the asymmetry of the distribution of $$X,$$ and is zero for a distribution symmetric about its mean.

Let $$X$$ be a random variable with finite fourth moment. The **kurtosis** of $$X$$ is its fourth standardised moment. The **excess kurtosis** of $$X$$ is the kurtosis minus $$3.$$ The kurtosis measures the weight of the tails of the distribution relative to its centre.

Let $$X$$ be a random variable with mean $$\mu$$ and standard deviation $$\sigma>0.$$ The **standardisation** of $$X$$ is the random variable $$Z=\frac{X-\mu}{\sigma},$$ which has mean $$0$$ and variance $$1.$$

Let $$X$$ and $$Y$$ be random variables with finite variances and means $$\mu_X$$ and $$\mu_Y.$$ The **covariance** of $$X$$ and $$Y$$ is the expected product of their deviations from their means.

$$\mathrm{cov}\left[X,Y\right]:=\mathbb{E}\left[\left(X-\mu_X\right)\left(Y-\mu_Y\right)\right]=\mathbb{E}\left[XY\right]-\mu_X\mu_Y$$

The covariance has the following properties for $$a,b,c,d\in\mathbb{R}:$$

$$\mathrm{cov}\left[X,Y\right]=\mathrm{cov}\left[Y,X\right],\qquad\mathrm{cov}\left[X,X\right]=\mathrm{var}\left[X\right]$$

$$\mathrm{cov}\left[aX+b,cY+d\right]=ac\,\mathrm{cov}\left[X,Y\right]$$

$$\mathrm{var}\left[X+Y\right]=\mathrm{var}\left[X\right]+\mathrm{var}\left[Y\right]+2\,\mathrm{cov}\left[X,Y\right]$$

Let $$X$$ and $$Y$$ be random variables with finite variances. The random variables $$X$$ and $$Y$$ are **uncorrelated** if and only if $$\mathrm{cov}\left[X,Y\right]=0.$$ Uncorrelated random variables have the following properties:
- the variance of the sum of uncorrelated random variables is the sum of their variances;
- independent random variables are uncorrelated;
- uncorrelated random variables need not be independent: if $$X$$ is symmetric about $$0$$ with finite third moment then $$X$$ and $$X^2$$ are uncorrelated but not independent.

Let $$X$$ and $$Y$$ be random variables with finite positive variances. The **correlation** of $$X$$ and $$Y$$ is their covariance divided by the product of their standard deviations.

$$\rho_{X,Y}:=\frac{\mathrm{cov}\left[X,Y\right]}{\sigma_X\sigma_Y}=\mathrm{cov}\left[\frac{X-\mu_X}{\sigma_X},\frac{Y-\mu_Y}{\sigma_Y}\right]$$

The correlation has the following properties:
- it is free of units;
- $$-1\leq\rho_{X,Y}\leq 1;$$
- $$\lvert\rho_{X,Y}\rvert=1$$ if and only if $$Y=aX+b$$ almost surely for some $$a\neq 0,$$ with the sign of $$a$$ equal to the sign of $$\rho_{X,Y};$$
- correlation measures linear dependence only.

Let $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ be a random vector whose components have finite variances. The **mean vector** of $$\underline{X}$$ is the vector of component means.

$$\underline{\mu}:=\mathbb{E}\left[\underline{X}\right],\qquad\mu_i=\mathbb{E}\left[X_i\right]$$

Let $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ be a random vector whose components have finite variances and mean vector $$\underline{\mu}.$$ The **covariance matrix** of $$\underline{X}$$ is the matrix $$\Sigma=\mathrm{cov}\left[\underline{X}\right]\in\mathbb{R}^{\,n\times n}$$ of pairwise covariances of the components.

$$\Sigma_{ij}:=\mathrm{cov}\left[X_i,X_j\right],\qquad\Sigma=\mathbb{E}\left[\left(\underline{X}-\underline{\mu}\right)\left(\underline{X}-\underline{\mu}\right)^\intercal\right]$$

The covariance matrix has the following properties for $$A\in\mathbb{R}^{\,m\times n}$$ and $$\underline{b}\in\mathbb{R}^m:$$
- its diagonal holds the variances of the components;
- it is symmetric and positive semi-definite, since $$\underline{a}^\intercal\Sigma\underline{a}=\mathrm{var}\left[\underline{a}^\intercal\underline{X}\right]\geq 0$$ for every $$\underline{a}\in\mathbb{R}^n;$$
- it is positive definite unless some linear combination of the components is almost surely constant;
- the affine transformation $$A\underline{X}+\underline{b}$$ has mean vector $$A\underline{\mu}+\underline{b}$$ and covariance matrix $$A\Sigma A^\intercal.$$

Let $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ be a random vector whose components have finite positive variances. The **correlation matrix** of $$\underline{X}$$ is the matrix with entries $$\rho_{X_i,X_j}.$$ The correlation matrix has ones on its diagonal and is the covariance matrix of the standardised components.

Let $$\left(X,Y\right)$$ be a random vector and $$x$$ be a value with $$p_X\left(x\right)>0$$ or $$f_X\left(x\right)>0.$$ The **conditional expectation** of $$Y$$ given $$X=x$$ is the expectation of the conditional distribution of $$Y$$ given $$X=x.$$

$$\mathbb{E}\left[Y\mid X=x\right]:=\sum_y y\,p_{Y\mid X}\left(y\mid x\right),\qquad\mathbb{E}\left[Y\mid X=x\right]:=\int_{-\infty}^{\infty}y\,f_{Y\mid X}\left(y\mid x\right)dy$$

Let $$\left(X,Y\right)$$ be a random vector and $$h(x)=\mathbb{E}\left[Y\mid X=x\right].$$ The **conditional expectation** of $$Y$$ given $$X$$ is the random variable obtained by evaluating $$h$$ at $$X.$$

$$\mathbb{E}\left[Y\mid X\right]:=h(X)$$

Let $$\left(X,Y\right)$$ be a random vector with $$Y$$ having finite expectation. The **law of total expectation** or **tower property** states that averaging the conditional expectation over $$X$$ recovers the expectation of $$Y.$$

$$\mathbb{E}\left[\mathbb{E}\left[Y\mid X\right]\right]=\mathbb{E}\left[Y\right]$$

Conditional expectation has the following properties:
- it is linear in $$Y;$$
- $$\mathbb{E}\left[g(X)Y\mid X\right]=g(X)\,\mathbb{E}\left[Y\mid X\right]$$ for any function $$g;$$
- if $$X$$ and $$Y$$ are independent then $$\mathbb{E}\left[Y\mid X\right]=\mathbb{E}\left[Y\right];$$
- among all functions of $$X$$ with finite variance, $$\mathbb{E}\left[Y\mid X\right]$$ minimises the expected squared error $$\mathbb{E}\left[\left(Y-g(X)\right)^2\right],$$ so it is the best predictor of $$Y$$ from $$X$$ in mean square.

Let $$\left(X,Y\right)$$ be a random vector with $$Y$$ having finite variance. The **conditional variance** of $$Y$$ given $$X$$ is the variance of the conditional distribution of $$Y$$ given $$X.$$

$$\mathrm{var}\left[Y\mid X\right]:=\mathbb{E}\left[\left(Y-\mathbb{E}\left[Y\mid X\right]\right)^2\mid X\right]$$

Let $$\left(X,Y\right)$$ be a random vector with $$Y$$ having finite variance. The **law of total variance** states that the variance of $$Y$$ is the expected variance within values of $$X$$ plus the variance of the conditional means between values of $$X.$$

$$\mathrm{var}\left[Y\right]=\mathbb{E}\left[\mathrm{var}\left[Y\mid X\right]\right]+\mathrm{var}\left[\mathbb{E}\left[Y\mid X\right]\right]$$

Let $$X$$ be a discrete random variable with state space $$\{0,1,2,\ldots\}.$$ The **probability generating function** (pgf) of $$X$$ is the power series whose coefficients are the values of the pmf.

$$G_X\left(s\right):=\mathbb{E}\left[s^X\right]=\sum_{k=0}^{\infty}p_X\left(k\right)s^k,\qquad\lvert s\rvert\leq 1$$

Let $$X$$ be a discrete random variable with state space $$\{0,1,2,\ldots\}$$ and $$k\in\mathbb{N}.$$ The **$$k$$-th factorial moment** of $$X$$ is $$\mathbb{E}\left[X\left(X-1\right)\cdots\left(X-k+1\right)\right].$$ The pgf has the following properties:
- $$G_X\left(1\right)=1;$$
- the pgf determines the distribution of $$X,$$ since $$p_X\left(k\right)=\frac{1}{k!}G_X^{(k)}\left(0\right);$$
- the $$k$$-th factorial moment is $$G_X^{(k)}\left(1\right),$$ so $$\mathbb{E}\left[X\right]=G_X'\left(1\right)$$ and $$\mathrm{var}\left[X\right]=G_X''\left(1\right)+G_X'\left(1\right)-G_X'\left(1\right)^2;$$
- if $$X$$ and $$Y$$ are independent then $$G_{X+Y}\left(s\right)=G_X\left(s\right)G_Y\left(s\right).$$

Let $$X$$ be a random variable. The **moment generating function** (mgf) of $$X$$ is the expectation of the exponential of $$tX,$$ provided this expectation is finite for all $$t$$ in some open interval containing $$0.$$

$$M_X\left(t\right):=\mathbb{E}\left[e^{tX}\right]$$

If no such interval exists then the mgf does not exist. The mgf has the following properties:
- when it exists, every moment of $$X$$ is finite and is obtained by differentiating at $$0,$$ since the series expansion of the exponential gives $$M_X\left(t\right)=\sum_{k=0}^{\infty}\frac{\mathbb{E}\left[X^k\right]}{k!}t^k$$ and $$\mathbb{E}\left[X^k\right]=M_X^{(k)}\left(0\right);$$
- $$M_X\left(0\right)=1$$ and $$M_{aX+b}\left(t\right)=e^{bt}M_X\left(at\right);$$
- if $$X$$ and $$Y$$ are independent then $$M_{X+Y}\left(t\right)=M_X\left(t\right)M_Y\left(t\right).$$

Let $$X$$ and $$Y$$ be random variables whose mgfs exist. The **uniqueness theorem** states that if $$M_X$$ and $$M_Y$$ agree on an open interval containing $$0$$ then $$X$$ and $$Y$$ have the same distribution.

Let $$X$$ be a random variable whose mgf exists. The **cumulant generating function** of $$X$$ is the natural logarithm of the mgf.

$$K_X\left(t\right):=\log_e M_X\left(t\right)$$

Let $$X$$ be a random variable whose mgf exists and $$k\geq 1.$$ The **$$k$$-th cumulant** of $$X$$ is the $$k$$-th derivative of the cumulant generating function at $$0.$$

$$\kappa_k:=K_X^{(k)}\left(0\right)$$

The cumulants have the following properties: $$\kappa_1=\mu,$$ $$\kappa_2=\sigma^2,$$ $$\kappa_3$$ is the third central moment and cumulants of independent random variables add.

Let $$X$$ be a random variable and $$i$$ be the imaginary unit. The **characteristic function** of $$X$$ is the expectation of the complex exponential of $$itX.$$

$$\varphi_X\left(t\right):=\mathbb{E}\left[e^{itX}\right]=\mathbb{E}\left[\cos\left(tX\right)\right]+i\,\mathbb{E}\left[\sin\left(tX\right)\right]\,\,\forall\,t\in\mathbb{R}$$

The characteristic function has the following properties:
- it exists for every random variable, since $$\lvert e^{itX}\rvert=1;$$
- $$\varphi_X\left(0\right)=1$$ and $$\lvert\varphi_X\left(t\right)\rvert\leq 1;$$
- $$\varphi_{aX+b}\left(t\right)=e^{itb}\varphi_X\left(at\right);$$
- if $$X$$ and $$Y$$ are independent then $$\varphi_{X+Y}=\varphi_X\varphi_Y;$$
- if the $$k$$-th moment of $$X$$ is finite then $$\mathbb{E}\left[X^k\right]=i^{-k}\varphi_X^{(k)}\left(0\right);$$
- when the mgf exists, $$\varphi_X\left(t\right)=M_X\left(it\right).$$

Let $$X$$ and $$Y$$ be random variables. The **inversion theorem** states that the characteristic function determines the distribution uniquely, so $$X$$ and $$Y$$ have the same distribution if and only if they have the same characteristic function. The characteristic function is the tool used to prove limit theorems about sums of random variables.
