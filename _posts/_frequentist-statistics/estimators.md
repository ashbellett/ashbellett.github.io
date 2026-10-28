---
layout: post
category: "frequentist-statistics"
title:  "Estimators"
tags: ["statistics", "estimators"]
description: "Calculating parameters from data"
---

Let $$\underline{X}$$ be a random sample from the population $$\mathbb{P}_{X;\,\theta}.$$ An **estimator** of $$\theta$$ is a statistic $$\hat{\theta}=t\left(\underline{X}\right)$$ whose value is intended to approximate $$\theta.$$

Let $$\hat{\theta}=t\left(\underline{X}\right)$$ be an estimator of $$\theta$$ and $$\underline{x}$$ be an observed random sample. An **estimate** of $$\theta$$ is the realised value $$\hat{\theta}=t\left(\underline{x}\right)$$ of the estimator.

Let $$\hat{\theta}$$ be an estimator of $$\theta$$ with finite expectation. The **bias** of $$\hat{\theta}$$ is the difference between the expectation of its sampling distribution and the true value of the parameter.

$$b\left(\hat{\theta}\right):=\mathbb{E}\left[\hat{\theta}\right]-\theta$$

Let $$\hat{\theta}$$ be an estimator of $$\theta.$$ The estimator $$\hat{\theta}$$ is **unbiased** if and only if the expectation of its sampling distribution equals the parameter.

$$\mathbb{E}\left[\hat{\theta}\right]=\theta\Leftrightarrow b\left(\hat{\theta}\right)=0$$

Let $$\hat{\theta}$$ be an estimator of $$\theta$$ with finite variance. The **standard error** of $$\hat{\theta}$$ is the standard deviation of its sampling distribution.

$$se\left(\hat{\theta}\right):=\sqrt{\mathrm{var}\left[\hat{\theta}\right]}$$

Let $$\hat{\theta}$$ be an estimator of $$\theta$$ with finite variance. The **mean squared error** of $$\hat{\theta}$$ is the expected squared difference between the estimator and the parameter, which is the sum of the squared bias and the variance.

$$
\begin{align*}
MSE\left(\hat{\theta}\right)&:=\mathbb{E}\left[\left(\hat{\theta}-\theta\right)^2\right]\\
&=b^2\left(\hat{\theta}\right)+\mathrm{var}\left[\hat{\theta}\right]
\end{align*}
$$

The mean squared error captures the trade-off between the bias and the variance of an estimator. The bias, standard error and mean squared error are defined in terms of the moments of the sampling distribution of the estimator, and since the random sample is drawn from the population $$\mathbb{P}_{X;\,\theta}$$ they can also be calculated as functions of the moments of $$\mathbb{P}_{X;\,\theta}.$$

Let $$\hat{\theta}_n=t_n\left(X_1,\ldots,X_n\right)$$ be an estimator of $$\theta$$ computed from a random sample of size $$n,$$ for each $$n\in\mathbb{N}.$$ The sequence of estimators is **consistent** for $$\theta$$ if and only if it converges in probability to the true parameter value, whatever that value is.

$$\hat{\theta}_n\xrightarrow{p}\theta\,\,\forall\,\theta\in\Theta$$

Let $$\hat{\theta}_n$$ be a sequence of estimators of $$\theta.$$ The sequence is **strongly consistent** for $$\theta$$ if and only if it converges almost surely to the true parameter value.

Let $$\hat{\theta}_n$$ be a sequence of estimators of $$\theta.$$ The sequence is **asymptotically unbiased** if and only if its bias tends to zero as $$n\rightarrow\infty.$$ Consistency has the following properties:
- consistency states that with enough data the estimator is close to the truth with high probability, and is the minimal requirement of a sensible estimator;
- by Markov's inequality applied to $$\left(\hat{\theta}_n-\theta\right)^2,$$ an estimator whose mean squared error tends to zero is consistent, since $$\mathbb{P}\left(\left\lvert\hat{\theta}_n-\theta\right\rvert>\varepsilon\right)\leq\frac{MSE\left(\hat{\theta}_n\right)}{\varepsilon^2}=\frac{b^2\left(\hat{\theta}_n\right)+\mathrm{var}\left[\hat{\theta}_n\right]}{\varepsilon^2};$$
- an estimator is therefore consistent if it is asymptotically unbiased and its variance tends to zero;
- the sample mean is consistent for the population mean by the weak law of large numbers, and strongly consistent by the strong law, and the sample variance is consistent for the population variance;
- consistency and unbiasedness are distinct: $$X_1$$ is an unbiased but inconsistent estimator of the population mean, whereas $$\frac{1}{n}\sum_{i=1}^n\left(X_i-\overline{X}_n\right)^2$$ is a biased but consistent estimator of the population variance;
- by the continuous mapping theorem, if $$\hat{\theta}_n$$ is consistent for $$\theta$$ and $$g$$ is continuous then $$g\left(\hat{\theta}_n\right)$$ is consistent for $$g\left(\theta\right).$$

Let $$\hat{\theta}_n$$ be a sequence of estimators of $$\theta.$$ The sequence is **asymptotically normal** if and only if its standardised error converges in distribution to a normal distribution.

$$\sqrt{n}\left(\hat{\theta}_n-\theta\right)\xrightarrow{d}\mathrm{N}\left(0,v\left(\theta\right)\right)$$

Let $$\hat{\theta}_n$$ be an asymptotically normal sequence of estimators of $$\theta$$ with limiting variance $$v\left(\theta\right).$$ The **asymptotic variance** of $$\hat{\theta}_n$$ is $$v\left(\theta\right).$$ Asymptotic normality has the following properties:
- an asymptotically normal estimator is consistent;
- the sampling distribution of an asymptotically normal estimator is approximately $$\mathrm{N}\left(\theta,\frac{v\left(\theta\right)}{n}\right)$$ for large $$n,$$ which is what the interval estimates and tests of the following notes are built on;
- the sample mean is asymptotically normal with $$v=\sigma^2$$ by the central limit theorem;
- the delta method gives the asymptotic normality of smooth functions of asymptotically normal estimators.

Let $$\mathbb{P}_{X;\,\theta}$$ be a population with pmf or pdf $$f_{X;\,\theta}\left(x;\,\theta\right)$$ and scalar parameter $$\theta$$ in an open parameter space. The **regularity conditions** are the following conditions on the population:
- the support of $$f_{X;\,\theta}$$ does not depend on $$\theta;$$
- $$f_{X;\,\theta}$$ is twice differentiable in $$\theta;$$
- differentiation with respect to $$\theta$$ and integration or summation over $$x$$ may be interchanged.

Let $$\mathbb{P}_{X;\,\theta}$$ be a population with pmf or pdf $$f_{X;\,\theta}\left(x;\,\theta\right)$$ satisfying the regularity conditions. The **score** of an observation $$x$$ is the derivative of the log pmf or pdf with respect to the parameter.

$$s\left(\theta;\,x\right):=\frac{\partial}{\partial\theta}\log_e f_{X;\,\theta}\left(x;\,\theta\right)$$

The score measures how sensitive the log probability of the observation $$x$$ is to the parameter. The score has expectation zero under the population, $$\mathbb{E}\left[s\left(\theta;\,X\right)\right]=0,$$ since $$\int\frac{\partial}{\partial\theta}f_{X;\,\theta}\left(x;\,\theta\right)dx=\frac{\partial}{\partial\theta}\int f_{X;\,\theta}\left(x;\,\theta\right)dx=0.$$

Let $$\mathbb{P}_{X;\,\theta}$$ be a population satisfying the regularity conditions. The **Fisher information** of a single observation is the variance of the score.

$$I\left(\theta\right):=\mathrm{var}\left[s\left(\theta;\,X\right)\right]=\mathbb{E}\left[s\left(\theta;\,X\right)^2\right]=-\mathbb{E}\left[\frac{\partial^2}{\partial\theta^2}\log_e f_{X;\,\theta}\left(X;\,\theta\right)\right]$$

The last equality holds under the regularity conditions. The Fisher information has the following properties:
- it measures how much an observation reveals about $$\theta:$$ a large value means that the distribution changes rapidly with $$\theta,$$ so nearby parameter values are easy to distinguish;
- since the score of a random sample is the sum of the scores of its iid observations, the Fisher information of a random sample of size $$n$$ is $$n\,I\left(\theta\right).$$

Let $$\mathbb{P}_{X;\,\underline{\theta}}$$ be a population with vector parameter $$\underline{\theta}\in\mathbb{R}^k$$ satisfying the regularity conditions. The score is the gradient $$\nabla_{\underline{\theta}}\log_e f_{X;\,\underline{\theta}}.$$ The **Fisher information matrix** $$I\left(\underline{\theta}\right)\in\mathbb{R}^{\,k\times k}$$ is the covariance matrix of the score, which equals the negative expected Hessian matrix of the log pmf or pdf.

Let $$\mathbb{P}_{X;\,\theta}$$ be a population satisfying the regularity conditions and $$\hat{\theta}$$ be an unbiased estimator of $$\theta$$ based on a random sample of size $$n.$$ The **Cramér–Rao lower bound** states that the variance of $$\hat{\theta}$$ is at least the reciprocal of the Fisher information of the sample.

$$\mathrm{var}\left[\hat{\theta}\right]\geq\frac{1}{n\,I\left(\theta\right)}$$

The Cramér–Rao lower bound has the following properties:
- it follows from the Cauchy–Schwarz inequality applied to $$\hat{\theta}-\theta$$ and the score of the sample;
- an estimator $$\hat{\theta}$$ with bias $$b\left(\theta\right)$$ satisfies $$\mathrm{var}\left[\hat{\theta}\right]\geq\frac{\left(1+b'\left(\theta\right)\right)^2}{n\,I\left(\theta\right)};$$
- an unbiased estimator $$\hat{g}$$ of $$g\left(\theta\right)$$ satisfies $$\mathrm{var}\left[\hat{g}\right]\geq\frac{g'\left(\theta\right)^2}{n\,I\left(\theta\right)};$$
- for a vector parameter, the covariance matrix of an unbiased estimator satisfies that $$\mathrm{cov}\left[\hat{\underline{\theta}}\right]-\frac{1}{n}I\left(\underline{\theta}\right)^{-1}$$ is positive semi-definite;
- a biased estimator can have smaller variance, and even smaller mean squared error, than the bound allows for unbiased estimators.

Let $$\hat{\theta}$$ be an unbiased estimator of $$\theta.$$ The estimator $$\hat{\theta}$$ is **efficient** if and only if its variance attains the Cramér–Rao lower bound for every $$\theta\in\Theta.$$ An efficient estimator need not exist, and when it does it is unique.

Let $$\hat{\theta}$$ be an unbiased estimator of $$\theta.$$ The **efficiency** of $$\hat{\theta}$$ is the ratio of the Cramér–Rao lower bound to its variance.

$$e\left(\hat{\theta}\right):=\frac{1}{n\,I\left(\theta\right)\,\mathrm{var}\left[\hat{\theta}\right]}\in\left(0,1\right]$$

An efficient estimator has efficiency one.

Let $$\hat{\theta}_1$$ and $$\hat{\theta}_2$$ be unbiased estimators of $$\theta.$$ The **relative efficiency** of $$\hat{\theta}_1$$ with respect to $$\hat{\theta}_2$$ is the ratio of their variances.

$$\frac{\mathrm{var}\left[\hat{\theta}_2\right]}{\mathrm{var}\left[\hat{\theta}_1\right]}$$

The relative efficiency is the factor by which the sample size using $$\hat{\theta}_2$$ must be increased to match the precision of $$\hat{\theta}_1.$$ For example, for a normal population the sample mean is efficient for $$\mu$$ whereas the sample median has asymptotic variance $$\frac{\pi\sigma^2}{2},$$ so the relative efficiency of the sample median with respect to the sample mean is $$\frac{2}{\pi}\approx 0.64.$$

Let $$\hat{\theta}_n$$ be an asymptotically normal sequence of estimators of $$\theta.$$ The sequence is **asymptotically efficient** if and only if its asymptotic variance equals $$\frac{1}{I\left(\theta\right)}.$$ This is the smallest asymptotic variance that a consistent and asymptotically normal estimator can have at all but a negligible set of parameter values.
