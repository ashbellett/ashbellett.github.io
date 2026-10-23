---
layout: post
category: "probability"
title:  "Moments"
tags: ["probability", "moment"]
description: "Information about a distribution's shape"
---

Let $$X$$ be a real-valued random variable. The **expectation** or **mean** $$\mathbb{E}\left[X\right]$$ of $$X$$ is the average of its values weighted by their probabilities. If $$X$$ is discrete with pmf $$p_X$$ and state space $$S$$ then

$$\mathbb{E}\left[X\right]:=\sum_{x\in S}x\,p_X\left(x\right)$$

and if $$X$$ is continuous with pdf $$f_X$$ then

$$\mathbb{E}\left[X\right]:=\int_{-\infty}^{\infty}x\,f_X\left(x\right)dx,$$

in each case provided the sum or improper integral is absolutely convergent. Otherwise the expectation does not exist. The expectation is a property of the probability distribution of $$X,$$ is often written $$\mu,$$ and need not be a value that $$X$$ can take.

The **law of the unconscious statistician** states that the expectation of a transformation $$g(X)$$ can be computed from the distribution of $$X$$ without finding the distribution of $$g(X).$$

$$\mathbb{E}\left[g(X)\right]=\sum_{x\in S}g(x)\,p_X\left(x\right),\qquad\mathbb{E}\left[g(X)\right]=\int_{-\infty}^{\infty}g(x)\,f_X\left(x\right)dx$$

For a random vector $$\underline{X}$$ and $$g:\mathbb{R}^n\rightarrow\mathbb{R}$$ the same holds with the joint pmf or pdf, $$\mathbb{E}\left[g(\underline{X})\right]=\int_{\mathbb{R}^n}g(\underline{x})\,f_{\underline{X}}\left(\underline{x}\right)d\underline{x}.$$

Let $$X,Y$$ be random variables with finite expectations, $$a,b,c\in\mathbb{R}$$ and $$A$$ be an event with indicator random variable $$\mathbf{1}_A,$$ which is $$1$$ if $$A$$ occurs and $$0$$ otherwise. The expectation has the following properties:

$$\mathbb{E}\left[c\right]=c,\qquad\mathbb{E}\left[\mathbf{1}_A\right]=\mathbb{P}\left(A\right)$$

$$\mathbb{E}\left[aX+bY+c\right]=a\,\mathbb{E}\left[X\right]+b\,\mathbb{E}\left[Y\right]+c$$

$$\mathrm{if}\,\,X\leq Y\,\,\mathrm{then}\,\,\mathbb{E}\left[X\right]\leq\mathbb{E}\left[Y\right]$$

$$\left\lvert\mathbb{E}\left[X\right]\right\rvert\leq\mathbb{E}\left[\lvert X\rvert\right]$$

$$\mathrm{if}\,\,X\,\,\mathrm{and}\,\,Y\,\,\mathrm{are}\,\,\mathrm{independent}\,\,\mathrm{then}\,\,\mathbb{E}\left[XY\right]=\mathbb{E}\left[X\right]\mathbb{E}\left[Y\right]$$

The first property of the second line is linearity, which holds whether or not $$X$$ and $$Y$$ are independent. A statement about random variables holds **almost surely** (a.s.) if it holds with probability one.

Let $$X$$ have finite mean $$\mu.$$ The **variance** of $$X$$ is the expected squared deviation from the mean, and the **standard deviation** $$\sigma$$ is its square root.

$$\mathrm{var}\left[X\right]:=\mathbb{E}\left[\left(X-\mu\right)^2\right]=\mathbb{E}\left[X^2\right]-\mu^2$$

$$\sigma:=\sqrt{\mathrm{var}\left[X\right]}$$

The variance is finite if and only if $$\mathbb{E}\left[X^2\right]$$ is finite. It satisfies $$\mathrm{var}\left[X\right]\geq 0$$ with equality if and only if $$X=\mu$$ almost surely, and for $$a,b\in\mathbb{R}$$

$$\mathrm{var}\left[aX+b\right]=a^2\,\mathrm{var}\left[X\right].$$

The variance is measured in squared units of $$X$$ whereas the standard deviation is measured in the units of $$X.$$

Let $$k\in\mathbb{N}.$$ The **$$k$$-th moment** of $$X$$ is $$\mathbb{E}\left[X^k\right],$$ the **$$k$$-th central moment** is $$\mathbb{E}\left[\left(X-\mu\right)^k\right]$$ and the **$$k$$-th standardised moment** is $$\mathbb{E}\left[\left(\frac{X-\mu}{\sigma}\right)^k\right].$$ The mean is the first moment and the variance is the second central moment. If the $$k$$-th moment is finite then every lower moment is finite. The **skewness** of $$X$$ is its third standardised moment and measures the asymmetry of its distribution, being zero for a distribution symmetric about its mean. The **kurtosis** of $$X$$ is its fourth standardised moment and measures the weight of its tails relative to its centre, and the **excess kurtosis** is the kurtosis minus $$3,$$ the kurtosis of the normal distribution. The **standardisation** of $$X$$ is the random variable $$Z=\frac{X-\mu}{\sigma},$$ which has mean $$0$$ and variance $$1.$$

Let $$X$$ and $$Y$$ be random variables with finite variances and means $$\mu_X$$ and $$\mu_Y.$$ The **covariance** of $$X$$ and $$Y$$ is the expected product of their deviations from their means.

$$\mathrm{cov}\left[X,Y\right]:=\mathbb{E}\left[\left(X-\mu_X\right)\left(Y-\mu_Y\right)\right]=\mathbb{E}\left[XY\right]-\mu_X\mu_Y$$

The covariance satisfies the following properties for $$a,b,c,d\in\mathbb{R}:$$

$$\mathrm{cov}\left[X,Y\right]=\mathrm{cov}\left[Y,X\right],\qquad\mathrm{cov}\left[X,X\right]=\mathrm{var}\left[X\right]$$

$$\mathrm{cov}\left[aX+b,cY+d\right]=ac\,\mathrm{cov}\left[X,Y\right]$$

$$\mathrm{var}\left[X+Y\right]=\mathrm{var}\left[X\right]+\mathrm{var}\left[Y\right]+2\,\mathrm{cov}\left[X,Y\right]$$

$$X$$ and $$Y$$ are **uncorrelated** if and only if $$\mathrm{cov}\left[X,Y\right]=0,$$ in which case the variance of their sum is the sum of their variances. Independent random variables are uncorrelated, but uncorrelated random variables need not be independent; for example, if $$X$$ is symmetric about $$0$$ with finite third moment then $$X$$ and $$X^2$$ are uncorrelated but not independent.

The **correlation** of $$X$$ and $$Y$$ is their covariance scaled by their standard deviations, which makes it free of units.

$$\rho_{X,Y}:=\frac{\mathrm{cov}\left[X,Y\right]}{\sigma_X\sigma_Y}=\mathrm{cov}\left[\frac{X-\mu_X}{\sigma_X},\frac{Y-\mu_Y}{\sigma_Y}\right]$$

The correlation satisfies $$-1\leq\rho_{X,Y}\leq 1,$$ with $$\lvert\rho_{X,Y}\rvert=1$$ if and only if $$Y=aX+b$$ almost surely for some $$a\neq 0$$ with the sign of $$a$$ equal to the sign of $$\rho_{X,Y}.$$ Correlation measures linear dependence only.

Let $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ be a random vector whose components have finite variances. The **mean vector** $$\underline{\mu}=\mathbb{E}\left[\underline{X}\right]$$ is the vector of component means and the **covariance matrix** $$\Sigma=\mathrm{cov}\left[\underline{X}\right]\in\mathbb{R}^{\,n\times n}$$ is the matrix of pairwise covariances.

$$\underline{\mu}_i:=\mathbb{E}\left[X_i\right],\qquad\Sigma_{ij}:=\mathrm{cov}\left[X_i,X_j\right]$$

$$\Sigma=\mathbb{E}\left[\left(\underline{X}-\underline{\mu}\right)\left(\underline{X}-\underline{\mu}\right)^\intercal\right]$$

The covariance matrix is symmetric and positive semi-definite, since $$\underline{a}^\intercal\Sigma\underline{a}=\mathrm{var}\left[\underline{a}^\intercal\underline{X}\right]\geq 0$$ for every $$\underline{a}\in\mathbb{R}^n,$$ and is positive definite unless some linear combination of the components is almost surely constant. Its diagonal holds the variances of the components. For $$A\in\mathbb{R}^{\,m\times n}$$ and $$\underline{b}\in\mathbb{R}^m$$ the affine transformation $$A\underline{X}+\underline{b}$$ has

$$\mathbb{E}\left[A\underline{X}+\underline{b}\right]=A\underline{\mu}+\underline{b}$$

$$\mathrm{cov}\left[A\underline{X}+\underline{b}\right]=A\Sigma A^\intercal.$$

The **correlation matrix** has entries $$\rho_{X_i,X_j},$$ so has ones on its diagonal, and is the covariance matrix of the standardised components.

Let $$\left(X,Y\right)$$ be a random vector and $$x$$ be a value with $$p_X\left(x\right)>0$$ or $$f_X\left(x\right)>0.$$ The **conditional expectation** of $$Y$$ given $$X=x$$ is the expectation of the conditional distribution of $$Y$$ given $$X=x.$$

$$\mathbb{E}\left[Y\mid X=x\right]:=\sum_y y\,p_{Y\mid X}\left(y\mid x\right)$$

$$\mathbb{E}\left[Y\mid X=x\right]:=\int_{-\infty}^{\infty}y\,f_{Y\mid X}\left(y\mid x\right)dy$$

This is a function $$h(x)=\mathbb{E}\left[Y\mid X=x\right]$$ of $$x,$$ and the **conditional expectation** $$\mathbb{E}\left[Y\mid X\right]:=h(X)$$ is the random variable obtained by evaluating it at $$X.$$ The **law of total expectation** or **tower property** states that averaging the conditional expectation over $$X$$ recovers the expectation of $$Y.$$

$$\mathbb{E}\left[\mathbb{E}\left[Y\mid X\right]\right]=\mathbb{E}\left[Y\right]$$

Conditional expectation is linear in $$Y,$$ satisfies $$\mathbb{E}\left[g(X)Y\mid X\right]=g(X)\,\mathbb{E}\left[Y\mid X\right]$$ for any function $$g,$$ equals $$\mathbb{E}\left[Y\right]$$ if $$X$$ and $$Y$$ are independent and, among all functions of $$X$$ with finite variance, minimises the mean squared error $$\mathbb{E}\left[\left(Y-g(X)\right)^2\right],$$ so it is the best predictor of $$Y$$ from $$X$$ in mean square. The **conditional variance** of $$Y$$ given $$X$$ is the variance of the conditional distribution,

$$\mathrm{var}\left[Y\mid X\right]:=\mathbb{E}\left[\left(Y-\mathbb{E}\left[Y\mid X\right]\right)^2\mid X\right],$$

and the **law of total variance** decomposes the variance of $$Y$$ into the expected variance within values of $$X$$ plus the variance of the conditional means between values of $$X.$$

$$\mathrm{var}\left[Y\right]=\mathbb{E}\left[\mathrm{var}\left[Y\mid X\right]\right]+\mathrm{var}\left[\mathbb{E}\left[Y\mid X\right]\right]$$

Let $$X$$ be a discrete random variable with state space $$\{0,1,2,\ldots\}.$$ The **probability generating function** (pgf) of $$X$$ is the power series whose coefficients are the pmf.

$$G_X\left(s\right):=\mathbb{E}\left[s^X\right]=\sum_{k=0}^{\infty}p_X\left(k\right)s^k,\qquad\lvert s\rvert\leq 1$$

The pgf satisfies $$G_X\left(1\right)=1$$ and determines the distribution of $$X,$$ since $$p_X\left(k\right)=\frac{1}{k!}G_X^{(k)}\left(0\right).$$ Its derivatives at $$s=1$$ give the **factorial moments** $$\mathbb{E}\left[X\left(X-1\right)\cdots\left(X-k+1\right)\right]=G_X^{(k)}\left(1\right),$$ so that

$$\mathbb{E}\left[X\right]=G_X'\left(1\right),\qquad\mathrm{var}\left[X\right]=G_X''\left(1\right)+G_X'\left(1\right)-G_X'\left(1\right)^2.$$

If $$X$$ and $$Y$$ are independent then $$G_{X+Y}\left(s\right)=G_X\left(s\right)G_Y\left(s\right),$$ which makes the pgf the standard tool for sums of independent counts.

Let $$X$$ be a random variable. The **moment generating function** (mgf) of $$X$$ is

$$M_X\left(t\right):=\mathbb{E}\left[e^{tX}\right]$$

provided this expectation is finite for all $$t$$ in some open interval containing $$0;$$ otherwise the mgf does not exist. When it exists every moment of $$X$$ is finite and is obtained by differentiating at $$0,$$ since the series expansion of the exponential gives

$$M_X\left(t\right)=\sum_{k=0}^{\infty}\frac{\mathbb{E}\left[X^k\right]}{k!}t^k,\qquad\mathbb{E}\left[X^k\right]=M_X^{(k)}\left(0\right).$$

The mgf satisfies $$M_X\left(0\right)=1$$ and $$M_{aX+b}\left(t\right)=e^{bt}M_X\left(at\right),$$ and if $$X$$ and $$Y$$ are independent then $$M_{X+Y}\left(t\right)=M_X\left(t\right)M_Y\left(t\right).$$ The **uniqueness theorem** states that two random variables whose mgfs exist and agree on an open interval containing $$0$$ have the same distribution, which allows distributions of sums and transformations to be identified from their mgfs. The **cumulant generating function** is $$K_X\left(t\right):=\log_e M_X\left(t\right)$$ and its derivatives at $$0$$ are the **cumulants** $$\kappa_k=K_X^{(k)}\left(0\right),$$ of which $$\kappa_1=\mu,$$ $$\kappa_2=\sigma^2$$ and $$\kappa_3$$ is the third central moment. Cumulants of independent random variables add.

Let $$X$$ be a random variable and $$i$$ be the imaginary unit. The **characteristic function** of $$X$$ is

$$\varphi_X\left(t\right):=\mathbb{E}\left[e^{itX}\right]=\mathbb{E}\left[\cos\left(tX\right)\right]+i\,\mathbb{E}\left[\sin\left(tX\right)\right]\,\,\forall\,t\in\mathbb{R}.$$

Unlike the mgf the characteristic function exists for every random variable, since $$\lvert e^{itX}\rvert=1,$$ and it satisfies $$\varphi_X\left(0\right)=1,$$ $$\lvert\varphi_X\left(t\right)\rvert\leq 1,$$ $$\varphi_{aX+b}\left(t\right)=e^{itb}\varphi_X\left(at\right)$$ and $$\varphi_{X+Y}=\varphi_X\varphi_Y$$ for independent $$X$$ and $$Y.$$ If the $$k$$-th moment of $$X$$ is finite then $$\mathbb{E}\left[X^k\right]=i^{-k}\varphi_X^{(k)}\left(0\right).$$ The **inversion theorem** states that the characteristic function determines the distribution of $$X$$ uniquely, so two random variables have the same distribution if and only if they have the same characteristic function. The characteristic function is the tool used to prove limit theorems about sums of random variables. When the mgf exists, $$\varphi_X\left(t\right)=M_X\left(it\right).$$
