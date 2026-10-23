---
layout: post
category: "bayesian-statistics"
title:  "Bayesian Inference"
tags: ["bayesian", "statistics", "inference"]
description: "Updating beliefs about parameters with data"
---

In Bayesian statistics the unknown parameter $$\theta\in\Theta$$ of a population is modelled as a random variable, so that uncertainty about $$\theta$$ is expressed with a probability distribution and probability statements can be made about $$\theta$$ itself rather than only about data. Let $$\underline{X}$$ be a random sample from the population $$\mathbb{P}_{X;\,\theta}$$ with pmf or pdf $$f\left(\underline{x}\mid\theta\right),$$ which as a function of $$\theta$$ for observed $$\underline{x}$$ is the likelihood $$\mathcal{L}\left(\theta\mid\underline{x}\right).$$ The **prior distribution** of $$\theta,$$ with pmf or pdf $$\pi\left(\theta\right),$$ represents beliefs about $$\theta$$ before the data are observed. A **Bayesian model** is the joint distribution of the data and the parameter,

$$f\left(\underline{x},\theta\right)=f\left(\underline{x}\mid\theta\right)\pi\left(\theta\right),$$

in which the likelihood is the conditional distribution of the data given the parameter.

The **posterior distribution** of $$\theta$$ is its conditional distribution given the observed data, obtained from Bayes' theorem for densities.

$$\pi\left(\theta\mid\underline{x}\right)=\frac{f\left(\underline{x}\mid\theta\right)\pi\left(\theta\right)}{f\left(\underline{x}\right)}=\frac{\mathcal{L}\left(\theta\mid\underline{x}\right)\pi\left(\theta\right)}{\int_{\Theta}\mathcal{L}\left(\theta'\mid\underline{x}\right)\pi\left(\theta'\right)d\theta'}$$

The denominator is the **marginal likelihood** or **evidence**, the marginal pmf or pdf of the data obtained by integrating the parameter out of the Bayesian model,

$$f\left(\underline{x}\right)=\int_{\Theta}f\left(\underline{x}\mid\theta\right)\pi\left(\theta\right)d\theta,$$

with the integral replaced by a sum for a discrete parameter. It does not depend on $$\theta,$$ so the posterior distribution is determined up to a normalising constant by the product of the likelihood and the prior.

$$\pi\left(\theta\mid\underline{x}\right)\propto\mathcal{L}\left(\theta\mid\underline{x}\right)\pi\left(\theta\right)$$

The posterior distribution contains everything the data and the prior say about $$\theta,$$ and all Bayesian inference about $$\theta$$ is derived from it. For example, let $$X_1,\ldots,X_n$$ be iid $$\mathrm{Bernoulli}\left(\theta\right)$$ with $$s=\sum_{i=1}^n x_i$$ successes and prior $$\theta\sim\mathrm{Beta}\left(\alpha,\beta\right).$$ Then

$$\pi\left(\theta\mid\underline{x}\right)\propto\theta^s\left(1-\theta\right)^{n-s}\theta^{\alpha-1}\left(1-\theta\right)^{\beta-1}=\theta^{\alpha+s-1}\left(1-\theta\right)^{\beta+n-s-1},$$

which is the kernel of a $$\mathrm{Beta}\left(\alpha+s,\beta+n-s\right)$$ distribution, so the posterior mean $$\frac{\alpha+s}{\alpha+\beta+n}$$ lies between the prior mean $$\frac{\alpha}{\alpha+\beta}$$ and the maximum likelihood estimate $$\frac{s}{n}$$ and moves towards the latter as $$n$$ grows.

Since the likelihood depends on the data only through a sufficient statistic $$T\left(\underline{x}\right)$$ by the factorisation theorem, so does the posterior distribution: $$\pi\left(\theta\mid\underline{x}\right)=\pi\left(\theta\mid T\left(\underline{x}\right)\right).$$ More generally the posterior depends on the data only through the likelihood function, so two experiments that produce proportional likelihoods lead to the same inference, a property known as the **likelihood principle** that frequentist procedures based on sampling distributions do not share.

Bayesian updating is **sequential**: if the data arrive in two parts $$\underline{x}_1$$ and $$\underline{x}_2$$ that are conditionally independent given $$\theta$$ then the posterior after the first part serves as the prior for the second, and the result is the same as updating on all the data at once.

$$\pi\left(\theta\mid\underline{x}_1,\underline{x}_2\right)\propto f\left(\underline{x}_2\mid\theta\right)\pi\left(\theta\mid\underline{x}_1\right)\propto f\left(\underline{x}_2\mid\theta\right)f\left(\underline{x}_1\mid\theta\right)\pi\left(\theta\right)$$

For iid data the posterior therefore does not depend on the order in which the observations are processed.

Let $$\theta=\left(\theta_1,\theta_2\right)$$ where only $$\theta_1$$ is of interest and $$\theta_2$$ is a **nuisance parameter**. The **marginal posterior distribution** of $$\theta_1$$ is obtained by integrating the nuisance parameter out of the joint posterior, which accounts for the uncertainty about $$\theta_2$$ rather than fixing it at an estimate.

$$\pi\left(\theta_1\mid\underline{x}\right)=\int\pi\left(\theta_1,\theta_2\mid\underline{x}\right)d\theta_2$$

Let $$\tilde{X}$$ be a future observation from the same population, conditionally independent of $$\underline{X}$$ given $$\theta.$$ The **posterior predictive distribution** of $$\tilde{X}$$ is its conditional distribution given the observed data, obtained by averaging the population distribution over the posterior distribution of the parameter.

$$f\left(\tilde{x}\mid\underline{x}\right)=\int_{\Theta}f\left(\tilde{x}\mid\theta\right)\pi\left(\theta\mid\underline{x}\right)d\theta$$

The posterior predictive distribution incorporates both the randomness of $$\tilde{X}$$ given $$\theta$$ and the remaining uncertainty about $$\theta,$$ so it is more dispersed than $$f\left(\tilde{x}\mid\hat{\theta}\right)$$ for any point estimate $$\hat{\theta}.$$ The marginal likelihood is the **prior predictive distribution**, the same construction with the prior in place of the posterior, and describes what data the model expects before any are seen. In the Bernoulli example the posterior predictive probability of a success is the posterior mean, $$\mathbb{P}\left(\tilde{X}=1\mid\underline{x}\right)=\frac{\alpha+s}{\alpha+\beta+n}.$$

The use of a prior distribution is justified by the following representation of data that are judged to be symmetric. A sequence of random variables $$X_1,X_2,\ldots$$ is **exchangeable** if and only if the joint distribution of any finite subcollection is invariant under permutations of the indices,

$$\left(X_1,\ldots,X_n\right)\,\,\mathrm{has}\,\,\mathrm{the}\,\,\mathrm{same}\,\,\mathrm{distribution}\,\,\mathrm{as}\,\,\left(X_{\sigma(1)},\ldots,X_{\sigma(n)}\right)\,\,\forall\,n,\,\mathrm{permutations}\,\,\sigma,$$

so that the order of the observations carries no information. An iid sequence is exchangeable, but an exchangeable sequence need not be independent: if $$\theta\sim\mathrm{Beta}\left(\alpha,\beta\right)$$ and the $$X_i$$ are iid $$\mathrm{Bernoulli}\left(\theta\right)$$ given $$\theta$$ then the $$X_i$$ are exchangeable but positively correlated, since each observation carries information about the common $$\theta.$$

**De Finetti's representation theorem** states that an infinite sequence of binary random variables is exchangeable if and only if it is a mixture of iid Bernoulli sequences: there exists a unique distribution $$Q$$ on $$\left[0,1\right]$$ such that

$$\mathbb{P}\left(X_1=x_1,\ldots,X_n=x_n\right)=\int_0^1\prod_{i=1}^n\theta^{x_i}\left(1-\theta\right)^{1-x_i}dQ\left(\theta\right)\,\,\forall\,n,$$

where $$\theta$$ is the almost sure limit of the relative frequency $$\frac{1}{n}\sum_{i=1}^n X_i$$ and $$Q$$ is its distribution. The theorem generalises to real-valued exchangeable sequences, which are mixtures of iid sequences from some distribution $$F$$ with a prior over $$F.$$ It shows that assuming exchangeability is equivalent to assuming a parametric model with iid observations given a parameter together with a prior distribution on that parameter, so the prior is not an optional addition but the distribution of the limiting frequency implied by the symmetry judgement, and the parameter is given meaning as a long-run property of the observable sequence.
