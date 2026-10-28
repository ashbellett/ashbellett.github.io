---
title:  "Point Estimation"
description: "Finding parameter values from data"
---

Let $$\underline{X}$$ be a random sample of size $$n$$ from the population $$\mathbb{P}_{X;\,\theta}$$ and $$k\geq 1.$$ The **$$k$$-th sample moment** of $$\underline{X}$$ is the statistic given by the average of the $$k$$-th powers of the observations.

$$m_k:=\frac{1}{n}\sum_{i=1}^n X_i^k$$

The $$k$$-th sample moment is an unbiased estimator of the $$k$$-th population moment $$\mathbb{E}\left[X^k\right].$$

Let $$\underline{X}$$ be a random sample from the population $$\mathbb{P}_{X;\,\theta},$$ where $$\theta$$ contains $$k$$ parameters that can be expressed in terms of the first $$k$$ moments of the population. The **method of moments** is the estimation method that equates the first $$k$$ sample moments with the corresponding population moments and solves the resulting system of equations for $$\theta.$$ The **method of moments estimator** of $$\theta$$ is the solution of this system.

Let $$\underline{x}$$ be an observed random sample of size $$n$$ from the population $$\mathbb{P}_{X;\,\theta}$$ with joint pmf or pdf $$f_{\underline{X};\,\theta}\left(\underline{x};\,\theta\right).$$ The **likelihood function** of $$\theta$$ given $$\underline{x}$$ is the joint pmf or pdf of the observed random sample viewed as a function of $$\theta.$$

$$\mathcal{L}\left(\theta\mid\underline{x}\right):=f_{\underline{X};\,\theta}\left(\underline{x};\,\theta\right)$$

Let $$\underline{x}$$ be an observed random sample of iid observations from the population with pmf or pdf $$f_{X;\,\theta}\left(x;\,\theta\right).$$ The likelihood function is the product of the pmfs or pdfs of the observations.

$$\mathcal{L}\left(\theta\mid\underline{x}\right)=\prod_{i=1}^n f_{X;\,\theta}\left(x_i;\,\theta\right)$$

If the observations are independent but not identically distributed, with the $$i$$-th observation having pmf or pdf $$f_{X;\,\theta,i},$$ then the likelihood function is $$\mathcal{L}\left(\theta\mid\underline{x}\right)=\prod_{i=1}^n f_{X;\,\theta,i}\left(x_i;\,\theta\right).$$

Let $$\underline{x}$$ be an observed random sample with likelihood function $$\mathcal{L}\left(\theta\mid\underline{x}\right).$$ The **log-likelihood function** of $$\theta$$ given $$\underline{x}$$ is the natural logarithm of the likelihood function.

$$\ell\left(\theta\mid\underline{x}\right):=\log_e\mathcal{L}\left(\theta\mid\underline{x}\right)$$

The likelihood function often contains exponential terms and products, which the log-likelihood function turns into sums.

Let $$\underline{x}$$ be an observed random sample with likelihood function $$\mathcal{L}\left(\theta\mid\underline{x}\right).$$ The **maximum likelihood estimate** (MLE) of $$\theta$$ is the value of $$\theta$$ that maximises the likelihood function for the given $$\underline{x}.$$

$$\hat{\theta}\left(\underline{x}\right):=\operatorname*{arg\,max}_{\theta\in\Theta}\,\mathcal{L}\left(\theta\mid\underline{x}\right)$$

Because the logarithm is strictly increasing and the likelihood is positive, the maximum likelihood estimate also maximises the log-likelihood function, which is often more practical to maximise.

$$\hat{\theta}\left(\underline{x}\right)=\operatorname*{arg\,max}_{\theta\in\Theta}\,\ell\left(\theta\mid\underline{x}\right)$$

Let $$\underline{X}$$ be a random sample from the population $$\mathbb{P}_{X;\,\theta}.$$ The **maximum likelihood estimator** (also MLE) of $$\theta$$ is the estimator $$\hat{\theta}\left(\underline{X}\right)$$ whose value at each observed random sample is the maximum likelihood estimate.

Let $$\hat{\theta}\left(\underline{X}\right)$$ be the maximum likelihood estimator of $$\theta$$ under the regularity conditions and some further smoothness conditions. The maximum likelihood estimator has the following asymptotic properties, which make it the default estimator in parametric models:
- it is consistent, $$\hat{\theta}\left(\underline{X}\right)\xrightarrow{p}\theta;$$
- it is asymptotically normal with asymptotic variance equal to the reciprocal of the Fisher information, $$\sqrt{n}\left(\hat{\theta}\left(\underline{X}\right)-\theta\right)\xrightarrow{d}\mathrm{N}\left(0,\frac{1}{I\left(\theta\right)}\right),$$ so it is asymptotically efficient;
- it is **invariant**: if $$\hat{\theta}$$ is the maximum likelihood estimate of $$\theta$$ then $$g\left(\hat{\theta}\right)$$ is the maximum likelihood estimate of $$g\left(\theta\right)$$ for any function $$g.$$

The maximum likelihood estimator is in general biased for finite $$n.$$ For example, the maximum likelihood estimate of a normal variance is $$\frac{1}{n}\sum_{i=1}^n\left(x_i-\overline{x}\right)^2$$ rather than the unbiased sample variance.

Let $$\underline{x}$$ be an observed random sample with log-likelihood function $$\ell$$ and maximum likelihood estimate $$\hat{\theta}.$$ The **observed Fisher information** is the negative second derivative of the log-likelihood function at the maximum likelihood estimate.

$$-\ell''\left(\hat{\theta}\mid\underline{x}\right)$$

The observed Fisher information is a consistent estimate of $$n\,I\left(\theta\right),$$ and gives the approximate standard error $$se\left(\hat{\theta}\right)\approx\left(-\ell''\left(\hat{\theta}\mid\underline{x}\right)\right)^{-\frac{1}{2}}.$$
