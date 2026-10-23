---
layout: post
category: "frequentist-statistics"
title:  "Estimators"
tags: ["statistics", "estimators"]
description: "Calculating parameters from data"
---

Let $$\underline{X}$$ be a random sample distributed according to the population $$\mathbb{P}_{X;\,\theta}.$$ An **estimator** for the parameter $$\theta$$ is a statistic whose value $$\hat{\theta}$$ is intended to approximate $$\theta:$$

$$\hat{\theta}=t\left(\underline{X}\right).$$

A realised value of an estimator is called an **estimate** and is evaluated for an observed random sample $$\underline{x}:$$

$$\hat{\theta}=t\left(\underline{x}\right).$$

The **bias** $$b\left(\hat{\theta}\right)$$ of an estimator $$\hat{\theta}$$ is the difference between the expected value of its sampling distribution and the true value of the parameter $$\theta:$$

$$b\left(\hat{\theta}\right)=\mathbb{E}\left[\hat{\theta}\right]-\theta.$$

An estimator is **unbiased** if the expected value of its sampling distribution is equal to the parameter being estimated:

$$\mathbb{E}\left[\hat{\theta}\right]=\theta\Leftrightarrow b\left(\hat{\theta}\right)=0.$$

The **standard error** $$se\left(\hat{\theta}\right)$$ of an estimator $$\hat{\theta}$$ is the standard deviation of its sampling distribution:

$$se\left(\hat{\theta}\right)=\sqrt{\mathrm{var}\left[\hat{\theta}\right]}.$$

The **mean squared error** $$MSE\left(\hat{\theta}\right)$$ of an estimator $$\hat{\theta}$$ is defined as a function of the parameter $$\theta:$$

$$
\begin{align*}
MSE\left(\hat{\theta}\right)&=\mathbb{E}\left[\left(\hat{\theta}-\theta\right)^2\right]\\
&=b^2\left(\hat{\theta}\right)+\mathrm{var}\left[\hat{\theta}\right]
\end{align*}
$$

and captures the trade-off between the bias and variance of an estimator.

The bias, standard error and mean squared error are all defined in terms of the moments of the estimator's sampling distribution. However, since the random samples are drawn from the population $$\mathbb{P}_{X;\,\theta}$$ then these quantities can also be calculated as functions of the moments of $$\mathbb{P}_{X;\,\theta}.$$

Let $$\hat{\theta}_n=t_n\left(X_1,\ldots,X_n\right)$$ be an estimator of $$\theta$$ computed from a random sample of size $$n,$$ for each $$n\in\mathbb{N}.$$ The sequence of estimators is **consistent** for $$\theta$$ if and only if it converges in probability to the true parameter value, whatever that value is.

$$\hat{\theta}_n\xrightarrow{p}\theta\,\,\forall\,\theta\in\Theta$$

It is **strongly consistent** if the convergence is almost sure. Consistency states that with enough data the estimator is close to the truth with high probability, and is the minimal requirement of a sensible estimator. By Markov's inequality applied to $$\left(\hat{\theta}_n-\theta\right)^2,$$ an estimator whose mean squared error tends to zero is consistent.

$$\mathbb{P}\left(\left\lvert\hat{\theta}_n-\theta\right\rvert>\varepsilon\right)\leq\frac{MSE\left(\hat{\theta}_n\right)}{\varepsilon^2}=\frac{b^2\left(\hat{\theta}_n\right)+\mathrm{var}\left[\hat{\theta}_n\right]}{\varepsilon^2}\rightarrow 0$$

An estimator is therefore consistent if its bias and variance both tend to zero, in which case it is **asymptotically unbiased**. The sample mean is consistent for the population mean by the weak law of large numbers, and strongly consistent by the strong law, and the sample variance is consistent for the population variance. Consistency and unbiasedness are distinct: $$X_1$$ is an unbiased but inconsistent estimator of the population mean, whereas $$\frac{1}{n}\sum_{i=1}^n\left(X_i-\overline{X}_n\right)^2$$ is a biased but consistent estimator of the population variance. By the continuous mapping theorem, if $$\hat{\theta}_n$$ is consistent for $$\theta$$ and $$g$$ is continuous then $$g\left(\hat{\theta}_n\right)$$ is consistent for $$g\left(\theta\right).$$

A sequence of estimators is **asymptotically normal** if and only if its standardised error converges in distribution to a normal distribution,

$$\sqrt{n}\left(\hat{\theta}_n-\theta\right)\xrightarrow{d}\mathrm{N}\left(0,v\left(\theta\right)\right),$$

where $$v\left(\theta\right)$$ is the **asymptotic variance**. An asymptotically normal estimator is consistent, and its sampling distribution is approximately $$\mathrm{N}\left(\theta,\frac{v\left(\theta\right)}{n}\right)$$ for large $$n,$$ which is what interval estimates and hypothesis tests are built on. The sample mean is asymptotically normal with $$v=\sigma^2$$ by the central limit theorem, and the delta method gives the asymptotic normality of smooth functions of asymptotically normal estimators.

Let the population $$\mathbb{P}_{X;\,\theta}$$ have pmf or pdf $$f_{X;\,\theta}\left(x;\,\theta\right)$$ with scalar parameter $$\theta$$ in an open parameter space, and suppose the **regularity conditions** hold: the support of $$f_{X;\,\theta}$$ does not depend on $$\theta,$$ $$f_{X;\,\theta}$$ is twice differentiable in $$\theta$$ and differentiation with respect to $$\theta$$ and integration or summation over $$x$$ may be interchanged. The **score** is the derivative of the log pmf or pdf with respect to the parameter,

$$s\left(\theta;\,x\right):=\frac{\partial}{\partial\theta}\log_e f_{X;\,\theta}\left(x;\,\theta\right),$$

which measures how sensitive the log probability of the observation $$x$$ is to the parameter. The score has expectation zero under the population, $$\mathbb{E}\left[s\left(\theta;\,X\right)\right]=0,$$ since $$\int\frac{\partial}{\partial\theta}f_{X;\,\theta}\left(x;\,\theta\right)dx=\frac{\partial}{\partial\theta}\int f_{X;\,\theta}\left(x;\,\theta\right)dx=0.$$

The **Fisher information** $$I\left(\theta\right)$$ of a single observation is the variance of the score, which under the regularity conditions is also the negative expected second derivative of the log pmf or pdf.

$$I\left(\theta\right):=\mathrm{var}\left[s\left(\theta;\,X\right)\right]=\mathbb{E}\left[s\left(\theta;\,X\right)^2\right]=-\mathbb{E}\left[\frac{\partial^2}{\partial\theta^2}\log_e f_{X;\,\theta}\left(X;\,\theta\right)\right]$$

The Fisher information measures how much an observation reveals about $$\theta:$$ a large value means that the distribution changes rapidly with $$\theta,$$ so nearby parameter values are easy to distinguish. Since the score of a random sample is the sum of the scores of its iid observations, the Fisher information of a random sample of size $$n$$ is $$n\,I\left(\theta\right).$$ For a vector parameter $$\underline{\theta}\in\mathbb{R}^k$$ the score is the gradient $$\nabla_{\underline{\theta}}\log_e f_{X;\,\underline{\theta}}$$ and the **Fisher information matrix** $$I\left(\underline{\theta}\right)\in\mathbb{R}^{\,k\times k}$$ is its covariance matrix, which equals the negative expected Hessian matrix of the log pmf or pdf.

The **Cramér–Rao lower bound** states that under the regularity conditions the variance of any unbiased estimator $$\hat{\theta}$$ of $$\theta$$ based on a random sample of size $$n$$ is at least the reciprocal of the Fisher information of the sample.

$$\mathrm{var}\left[\hat{\theta}\right]\geq\frac{1}{n\,I\left(\theta\right)}$$

More generally, an estimator $$\hat{\theta}$$ with bias $$b\left(\theta\right)$$ satisfies $$\mathrm{var}\left[\hat{\theta}\right]\geq\frac{\left(1+b'\left(\theta\right)\right)^2}{n\,I\left(\theta\right)},$$ an unbiased estimator of $$g\left(\theta\right)$$ satisfies $$\mathrm{var}\left[\hat{g}\right]\geq\frac{g'\left(\theta\right)^2}{n\,I\left(\theta\right)}$$ and, for a vector parameter, the covariance matrix of an unbiased estimator satisfies $$\mathrm{cov}\left[\hat{\underline{\theta}}\right]-\frac{1}{n}I\left(\underline{\theta}\right)^{-1}$$ is positive semi-definite. The bound follows from the Cauchy–Schwarz inequality applied to $$\hat{\theta}-\theta$$ and the score of the sample. A biased estimator can have smaller variance, and even smaller mean squared error, than the bound allows for unbiased estimators.

An unbiased estimator whose variance attains the Cramér–Rao lower bound for every $$\theta\in\Theta$$ is **efficient**. The **efficiency** of an unbiased estimator is the ratio of the bound to its variance,

$$e\left(\hat{\theta}\right):=\frac{1}{n\,I\left(\theta\right)\,\mathrm{var}\left[\hat{\theta}\right]}\in\left(0,1\right],$$

so an efficient estimator has efficiency one. The **relative efficiency** of two unbiased estimators $$\hat{\theta}_1$$ and $$\hat{\theta}_2$$ is the ratio of their variances $$\frac{\mathrm{var}\left[\hat{\theta}_2\right]}{\mathrm{var}\left[\hat{\theta}_1\right]},$$ which is the factor by which the sample size using $$\hat{\theta}_2$$ must be increased to match the precision of $$\hat{\theta}_1.$$ For example, for a normal population the sample mean is efficient for $$\mu$$ whereas the sample median has asymptotic variance $$\frac{\pi\sigma^2}{2},$$ so its relative efficiency with respect to the sample mean is $$\frac{2}{\pi}\approx 0.64.$$ An efficient estimator need not exist, and when it does it is unique. An asymptotically normal estimator is **asymptotically efficient** if its asymptotic variance equals $$\frac{1}{I\left(\theta\right)},$$ the smallest asymptotic variance that a consistent and asymptotically normal estimator can have at all but a negligible set of parameter values.
