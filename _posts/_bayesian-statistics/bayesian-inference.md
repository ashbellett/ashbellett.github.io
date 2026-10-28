---
layout: post
category: "bayesian-statistics"
title:  "Bayesian Inference"
tags: ["bayesian", "statistics", "inference"]
description: "Updating beliefs about parameters with data"
---

Let $$\underline{X}$$ be a random sample from the population $$\mathbb{P}_{X;\,\theta}$$ with pmf or pdf $$f\left(\underline{x}\mid\theta\right)$$ and parameter $$\theta\in\Theta.$$ In Bayesian statistics the parameter $$\theta$$ is modelled as a random variable, so that uncertainty about $$\theta$$ is expressed with a probability distribution and probability statements can be made about $$\theta$$ itself rather than only about data. The pmf or pdf $$f\left(\underline{x}\mid\theta\right)$$ viewed as a function of $$\theta$$ for observed $$\underline{x}$$ is the likelihood $$\mathcal{L}\left(\theta\mid\underline{x}\right).$$

Let $$\theta\in\Theta$$ be a parameter modelled as a random variable. The **prior distribution** of $$\theta$$ is the probability distribution of $$\theta,$$ with pmf or pdf $$\pi\left(\theta\right),$$ that represents beliefs about $$\theta$$ before the data are observed.

Let $$\underline{X}$$ be a random sample with pmf or pdf $$f\left(\underline{x}\mid\theta\right)$$ and $$\theta$$ have prior distribution $$\pi\left(\theta\right).$$ A **Bayesian model** is the joint distribution of the data and the parameter, in which the likelihood is the conditional distribution of the data given the parameter.

$$f\left(\underline{x},\theta\right)=f\left(\underline{x}\mid\theta\right)\pi\left(\theta\right)$$

Let $$f\left(\underline{x},\theta\right)=f\left(\underline{x}\mid\theta\right)\pi\left(\theta\right)$$ be a Bayesian model. The **marginal likelihood** or **evidence** of the data is the marginal pmf or pdf of the data, obtained by integrating the parameter out of the Bayesian model, with the integral replaced by a sum for a discrete parameter.

$$f\left(\underline{x}\right):=\int_{\Theta}f\left(\underline{x}\mid\theta\right)\pi\left(\theta\right)d\theta$$

Let $$f\left(\underline{x},\theta\right)=f\left(\underline{x}\mid\theta\right)\pi\left(\theta\right)$$ be a Bayesian model and $$\underline{x}$$ be the observed data. The **posterior distribution** of $$\theta$$ is the conditional distribution of $$\theta$$ given the observed data, obtained from Bayes' theorem for densities.

$$\pi\left(\theta\mid\underline{x}\right):=\frac{f\left(\underline{x}\mid\theta\right)\pi\left(\theta\right)}{f\left(\underline{x}\right)}=\frac{\mathcal{L}\left(\theta\mid\underline{x}\right)\pi\left(\theta\right)}{\int_{\Theta}\mathcal{L}\left(\theta'\mid\underline{x}\right)\pi\left(\theta'\right)d\theta'}$$

The posterior distribution has the following properties:
- the marginal likelihood does not depend on $$\theta,$$ so the posterior distribution is determined up to a normalising constant by the product of the likelihood and the prior, $$\pi\left(\theta\mid\underline{x}\right)\propto\mathcal{L}\left(\theta\mid\underline{x}\right)\pi\left(\theta\right);$$
- the posterior distribution contains everything the data and the prior say about $$\theta,$$ and all Bayesian inference about $$\theta$$ is derived from it;
- by the factorisation theorem the likelihood depends on the data only through a sufficient statistic $$T\left(\underline{x}\right),$$ so $$\pi\left(\theta\mid\underline{x}\right)=\pi\left(\theta\mid T\left(\underline{x}\right)\right).$$

Let $$\pi\left(\theta\mid\underline{x}\right)$$ be a posterior distribution. The **posterior mean** of $$\theta$$ is the mean of the posterior distribution. For example, let $$X_1,\ldots,X_n$$ be iid $$\mathrm{Bernoulli}\left(\theta\right)$$ with $$s=\sum_{i=1}^n x_i$$ successes and prior $$\theta\sim\mathrm{Beta}\left(\alpha,\beta\right).$$ Then

$$\pi\left(\theta\mid\underline{x}\right)\propto\theta^s\left(1-\theta\right)^{n-s}\theta^{\alpha-1}\left(1-\theta\right)^{\beta-1}=\theta^{\alpha+s-1}\left(1-\theta\right)^{\beta+n-s-1},$$

which is the kernel of a $$\mathrm{Beta}\left(\alpha+s,\beta+n-s\right)$$ distribution. The posterior mean $$\frac{\alpha+s}{\alpha+\beta+n}$$ lies between the prior mean $$\frac{\alpha}{\alpha+\beta}$$ and the maximum likelihood estimate $$\frac{s}{n},$$ and moves towards the latter as $$n$$ grows.

The **likelihood principle** is the principle that inference about $$\theta$$ should depend on the data only through the likelihood function. Bayesian inference satisfies the likelihood principle, since the posterior depends on the data only through the likelihood, so two experiments that produce proportional likelihoods lead to the same inference. Frequentist procedures based on sampling distributions do not satisfy the likelihood principle.

Let the data arrive in two parts $$\underline{x}_1$$ and $$\underline{x}_2$$ that are conditionally independent given $$\theta.$$ **Sequential updating** is the property that the posterior after the first part serves as the prior for the second part, and the result is the same as updating on all the data at once.

$$\pi\left(\theta\mid\underline{x}_1,\underline{x}_2\right)\propto f\left(\underline{x}_2\mid\theta\right)\pi\left(\theta\mid\underline{x}_1\right)\propto f\left(\underline{x}_2\mid\theta\right)f\left(\underline{x}_1\mid\theta\right)\pi\left(\theta\right)$$

For iid data the posterior therefore does not depend on the order in which the observations are processed.

Let $$\theta=\left(\theta_1,\theta_2\right)$$ be a parameter of which only $$\theta_1$$ is of interest. The component $$\theta_2$$ is a **nuisance parameter**.

Let $$\theta=\left(\theta_1,\theta_2\right)$$ with nuisance parameter $$\theta_2$$ and joint posterior $$\pi\left(\theta_1,\theta_2\mid\underline{x}\right).$$ The **marginal posterior distribution** of $$\theta_1$$ is the posterior distribution of $$\theta_1$$ obtained by integrating the nuisance parameter out of the joint posterior.

$$\pi\left(\theta_1\mid\underline{x}\right)=\int\pi\left(\theta_1,\theta_2\mid\underline{x}\right)d\theta_2$$

The marginal posterior distribution accounts for the uncertainty about $$\theta_2$$ rather than fixing it at an estimate.

Let $$\tilde{X}$$ be a future observation from the same population, conditionally independent of $$\underline{X}$$ given $$\theta.$$ The **posterior predictive distribution** of $$\tilde{X}$$ is the conditional distribution of $$\tilde{X}$$ given the observed data, obtained by averaging the population distribution over the posterior distribution of the parameter.

$$f\left(\tilde{x}\mid\underline{x}\right):=\int_{\Theta}f\left(\tilde{x}\mid\theta\right)\pi\left(\theta\mid\underline{x}\right)d\theta$$

The posterior predictive distribution incorporates both the randomness of $$\tilde{X}$$ given $$\theta$$ and the remaining uncertainty about $$\theta,$$ so it is more dispersed than $$f\left(\tilde{x}\mid\hat{\theta}\right)$$ for any point estimate $$\hat{\theta}.$$ In the Bernoulli example the posterior predictive probability of a success is the posterior mean, $$\mathbb{P}\left(\tilde{X}=1\mid\underline{x}\right)=\frac{\alpha+s}{\alpha+\beta+n}.$$

Let $$\tilde{X}$$ be an observation from the population. The **prior predictive distribution** of $$\tilde{X}$$ is the distribution obtained by averaging the population distribution over the prior distribution of the parameter, which is the marginal likelihood. The prior predictive distribution describes what data the model expects before any are seen.

Let $$X_1,X_2,\ldots$$ be a sequence of random variables. The sequence is **exchangeable** if and only if the joint distribution of any finite subcollection is invariant under permutations of the indices.

$$\left(X_1,\ldots,X_n\right)\,\,\mathrm{has}\,\,\mathrm{the}\,\,\mathrm{same}\,\,\mathrm{distribution}\,\,\mathrm{as}\,\,\left(X_{\sigma(1)},\ldots,X_{\sigma(n)}\right)\,\,\forall\,n,\,\mathrm{permutations}\,\,\sigma$$

Exchangeability has the following properties:
- the order of the observations carries no information;
- an iid sequence is exchangeable;
- an exchangeable sequence need not be independent: if $$\theta\sim\mathrm{Beta}\left(\alpha,\beta\right)$$ and the $$X_i$$ are iid $$\mathrm{Bernoulli}\left(\theta\right)$$ given $$\theta$$ then the $$X_i$$ are exchangeable but positively correlated, since each observation carries information about the common $$\theta.$$

Let $$X_1,X_2,\ldots$$ be an infinite sequence of binary random variables. **De Finetti's representation theorem** states that the sequence is exchangeable if and only if it is a mixture of iid Bernoulli sequences, that is, there exists a unique distribution $$Q$$ on $$\left[0,1\right]$$ such that

$$\mathbb{P}\left(X_1=x_1,\ldots,X_n=x_n\right)=\int_0^1\prod_{i=1}^n\theta^{x_i}\left(1-\theta\right)^{1-x_i}dQ\left(\theta\right)\,\,\forall\,n.$$

De Finetti's representation theorem has the following properties:
- $$\theta$$ is the almost sure limit of the relative frequency $$\frac{1}{n}\sum_{i=1}^n X_i$$ and $$Q$$ is its distribution;
- the theorem generalises to real-valued exchangeable sequences, which are mixtures of iid sequences from some distribution $$F$$ with a prior over $$F;$$
- assuming exchangeability is equivalent to assuming a parametric model with iid observations given a parameter together with a prior distribution on that parameter, so the prior is the distribution of the limiting frequency implied by the symmetry judgement and the parameter is given meaning as a long-run property of the observable sequence.
