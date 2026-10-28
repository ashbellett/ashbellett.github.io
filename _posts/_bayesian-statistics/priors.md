---
layout: post
category: "bayesian-statistics"
title:  "Priors"
tags: ["bayesian", "statistics", "prior"]
description: "Representing beliefs before data are observed"
---

Let $$\mathcal{F}=\left\{f\left(x\mid\theta\right):\theta\in\Theta\right\}$$ be a parametric family for the data and $$\mathcal{P}$$ be a family of prior distributions on $$\Theta.$$ The family $$\mathcal{P}$$ is a **conjugate prior** family for $$\mathcal{F}$$ if and only if the posterior distribution belongs to $$\mathcal{P}$$ whenever the prior does, for every possible observation.

$$\pi\in\mathcal{P}\Rightarrow\pi\left(\cdot\mid\underline{x}\right)\in\mathcal{P}\,\,\forall\,\underline{x}$$

Let $$\pi\left(\theta\mid\phi\right)$$ be a prior distribution on $$\theta$$ indexed by $$\phi.$$ The parameters $$\phi$$ of the prior distribution are its **hyperparameters**, named to distinguish them from the parameter $$\theta.$$ With a conjugate prior the posterior is found by updating the hyperparameters rather than by integration.

Let $$X_1,\ldots,X_n$$ be iid given $$\theta$$ with $$s=\sum_{i=1}^n x_i.$$ The following are standard conjugate pairs:
- $$\mathrm{Bernoulli}\left(\theta\right)$$ or $$\mathrm{Binomial}\left(m,\theta\right)$$ data with $$\theta\sim\mathrm{Beta}\left(\alpha,\beta\right)$$ gives $$\theta\mid\underline{x}\sim\mathrm{Beta}\left(\alpha+s,\beta+nm-s\right),$$ with $$m=1$$ for Bernoulli data;
- $$\mathrm{Poisson}\left(\theta\right)$$ data with $$\theta\sim\mathrm{Gamma}\left(\alpha,\beta\right)$$ gives $$\theta\mid\underline{x}\sim\mathrm{Gamma}\left(\alpha+s,\beta+n\right);$$
- $$\mathrm{Exponential}\left(\theta\right)$$ data with $$\theta\sim\mathrm{Gamma}\left(\alpha,\beta\right)$$ gives $$\theta\mid\underline{x}\sim\mathrm{Gamma}\left(\alpha+n,\beta+s\right);$$
- $$\mathrm{Multinomial}\left(m,\underline{\theta}\right)$$ data with $$\underline{\theta}\sim\mathrm{Dirichlet}\left(\underline{\alpha}\right)$$ gives $$\underline{\theta}\mid\underline{x}\sim\mathrm{Dirichlet}\left(\underline{\alpha}+\underline{s}\right)$$ where $$\underline{s}$$ is the vector of category counts;
- $$\mathrm{N}\left(\theta,\sigma^2\right)$$ data with known $$\sigma^2$$ and $$\theta\sim\mathrm{N}\left(\mu_0,\tau_0^2\right)$$ gives $$\theta\mid\underline{x}\sim\mathrm{N}\left(\mu_n,\tau_n^2\right)$$ with

$$\frac{1}{\tau_n^2}=\frac{1}{\tau_0^2}+\frac{n}{\sigma^2},\qquad\mu_n=\tau_n^2\left(\frac{\mu_0}{\tau_0^2}+\frac{n\overline{x}}{\sigma^2}\right).$$

Let $$X$$ be a random variable with variance $$\sigma^2.$$ The **precision** of $$X$$ is the reciprocal of its variance, $$\frac{1}{\sigma^2}.$$ In the normal conjugate pair the posterior precision is the sum of the prior precision and the data precision, and the posterior mean is the precision-weighted average of the prior mean and the sample mean.

Let $$\pi\left(\theta\mid\phi\right)$$ be a conjugate prior. The **prior sample size** of the prior is the number of pseudo-observations that the hyperparameters can be read as representing. Conjugate priors have the following properties:
- in each standard pair the posterior mean is a weighted average of the prior mean and the maximum likelihood estimate, with the weight on the data increasing with $$n;$$
- the $$\mathrm{Beta}\left(\alpha,\beta\right)$$ prior acts like $$\alpha$$ prior successes and $$\beta$$ prior failures;
- for normal data with unknown mean and variance the conjugate prior is the normal-inverse-gamma distribution, in which $$\sigma^2$$ has an inverse-gamma prior and $$\theta$$ given $$\sigma^2$$ has a normal prior.

Let the data have the exponential family form $$f\left(x\mid\theta\right)=h\left(x\right)\exp\left(\underline{\eta}\left(\theta\right)^\intercal\underline{T}\left(x\right)-A\left(\theta\right)\right),$$ and $$\underline{\tau}$$ and $$n_0>0$$ be hyperparameters. The **exponential family conjugate prior** is the family of priors

$$\pi\left(\theta\mid\underline{\tau},n_0\right)\propto\exp\left(\underline{\eta}\left(\theta\right)^\intercal\underline{\tau}-n_0A\left(\theta\right)\right).$$

The exponential family conjugate prior has the following properties:
- it is conjugate, and the posterior given $$n$$ iid observations has hyperparameters $$\underline{\tau}+\sum_{i=1}^n\underline{T}\left(x_i\right)$$ and $$n_0+n;$$
- $$\underline{\tau}$$ plays the role of the natural statistics of $$n_0$$ prior observations;
- all of the standard conjugate pairs above are instances of this construction, so conjugate priors exist for every exponential family.

Let $$\pi\left(\theta\right)$$ be a non-negative function on $$\Theta$$ used as a prior. The prior is **proper** if and only if it is a probability distribution, that is, its sum or integral over $$\Theta$$ is finite. The prior is **improper** if and only if its sum or integral over $$\Theta$$ is infinite, such as $$\pi\left(\theta\right)\propto 1$$ on $$\mathbb{R}.$$ Improper priors have the following properties:
- an improper prior cannot represent beliefs, but it can be used formally in Bayes' theorem provided the resulting posterior is proper;
- the posterior is proper if and only if the marginal likelihood $$\int_{\Theta}f\left(\underline{x}\mid\theta\right)\pi\left(\theta\right)d\theta$$ is finite;
- the prior $$\pi\left(\theta\right)\propto 1$$ on a normal mean gives the proper posterior $$\mathrm{N}\left(\overline{x},\frac{\sigma^2}{n}\right);$$
- improper priors are often limits of conjugate priors as the prior sample size tends to zero.

A **non-informative prior** is a prior intended to let the data dominate the posterior by expressing as little prior knowledge as possible.

The **flat prior** is the prior $$\pi\left(\theta\right)\propto 1.$$ The flat prior is not invariant under reparametrisation: if $$\theta$$ has a flat prior then by the change of variables formula $$\phi=g\left(\theta\right)$$ has prior $$\pi\left(\phi\right)\propto\left\lvert\frac{d}{d\phi}g^{-1}\left(\phi\right)\right\rvert,$$ which is not flat unless $$g$$ is affine, so flatness depends on the parametrisation chosen.

Let $$I\left(\theta\right)$$ be the Fisher information of the population. The **Jeffreys prior** is the prior proportional to the square root of the Fisher information, or of the determinant of the Fisher information matrix for a vector parameter.

$$\pi_J\left(\theta\right)\propto\sqrt{I\left(\theta\right)},\qquad\pi_J\left(\underline{\theta}\right)\propto\sqrt{\lvert I\left(\underline{\theta}\right)\rvert}$$

The Jeffreys prior has the following properties:
- it is invariant under reparametrisation, since the Fisher information transforms as $$I\left(\phi\right)=I\left(\theta\right)\left(\frac{d\theta}{d\phi}\right)^2$$ and the square root exactly cancels the change of variables factor;
- for a Bernoulli probability it is $$\mathrm{Beta}\left(\frac{1}{2},\frac{1}{2}\right);$$
- for a normal mean with known variance it is flat;
- for a normal standard deviation with known mean it is $$\pi_J\left(\sigma\right)\propto\frac{1}{\sigma},$$ which is flat in $$\log_e\sigma;$$
- it is often improper and can perform poorly for vector parameters.

Let $$p$$ and $$q$$ be pmfs or pdfs on the same space. The **Kullback–Leibler divergence** from $$q$$ to $$p$$ is the expected log ratio of the two densities under $$p.$$

$$\mathrm{KL}\left(p\,\|\,q\right):=\int p\left(\theta\right)\log_e\frac{p\left(\theta\right)}{q\left(\theta\right)}d\theta=\mathbb{E}_p\left[\log_e\frac{p\left(\theta\right)}{q\left(\theta\right)}\right]$$

The Kullback–Leibler divergence has the following properties:
- by Jensen's inequality applied to the concave logarithm, $$\mathrm{KL}\left(p\,\|\,q\right)\geq 0$$ with equality if and only if $$p=q$$ almost everywhere;
- it measures how different $$q$$ is from $$p$$ but is not symmetric and so is not a distance.

A **reference prior** is the prior that maximises the expected Kullback–Leibler divergence from the prior to the posterior, that is the expected information about $$\theta$$ gained from the data, in the limit of large samples. The reference prior has the following properties:
- for a scalar parameter under the regularity conditions the reference prior is the Jeffreys prior;
- for vector parameters the reference prior construction treats parameters of interest and nuisance parameters in turn and avoids the problems of the multivariate Jeffreys prior.

A **weakly informative prior** is a proper prior that rules out implausible parameter values but is otherwise diffuse relative to the information in the data, such as a normal prior with a large variance on a location parameter or a half-Cauchy or half-normal prior on a scale parameter. Weakly informative priors regularise the posterior, keep it proper and stabilise computation, and are the usual default in practice.

Let $$\theta_1,\ldots,\theta_k$$ be the parameters of $$k$$ related groups of observations. A **hierarchical prior** is a prior that models the group parameters as iid draws from a common distribution with its own unknown hyperparameters $$\phi.$$ The **hyperprior** is the prior distribution $$\pi\left(\phi\right)$$ placed on the hyperparameters.

$$x_{ij}\mid\theta_j\sim f\left(x\mid\theta_j\right),\qquad\theta_j\mid\phi\sim\pi\left(\theta\mid\phi\right),\qquad\phi\sim\pi\left(\phi\right)$$

A **hierarchical model** is a Bayesian model with such levels. In a hierarchical model the group parameters are exchangeable given $$\phi.$$

Let $$\theta_1,\ldots,\theta_k$$ be group parameters in a hierarchical model. **Shrinkage** or **partial pooling** is the property that the posterior for each $$\theta_j$$ combines that group's data with information from the other groups through the posterior of $$\phi,$$ so that the estimates are pulled towards the common mean by an amount that depends on the group sample size and the estimated between-group variation. Shrinkage interpolates between estimating each group separately and pooling all groups into one, and reduces the mean squared error of the group estimates.

**Empirical Bayes** is the method that replaces the hyperprior by a point estimate of $$\phi$$ obtained by maximising the marginal likelihood $$f\left(\underline{x}\mid\phi\right).$$ Empirical Bayes approximates the hierarchical analysis but ignores the uncertainty in $$\phi.$$

Let $$\theta_0$$ be the true parameter value and the prior pdf be continuous and positive at $$\theta_0.$$ **Posterior consistency** is the property that the posterior probability of every neighbourhood of $$\theta_0$$ converges to one almost surely as $$n\rightarrow\infty.$$ As $$n\rightarrow\infty$$ the likelihood becomes increasingly concentrated near $$\theta_0$$ and the posterior follows it, so the posterior concentrates at the truth regardless of the prior.

Let $$\theta_0$$ be the true parameter value, the prior pdf be continuous and positive at $$\theta_0$$ and the regularity conditions hold. The **Bernstein–von Mises theorem** states that the posterior distribution is asymptotically normal and centred at the maximum likelihood estimate with variance given by the Fisher information, in the sense that the total variation distance between the two distributions converges to zero in probability.

$$\pi\left(\theta\mid\underline{x}\right)\approx\mathrm{N}\left(\hat{\theta},\frac{1}{n\,I\left(\hat{\theta}\right)}\right)$$

The Bernstein–von Mises theorem has the following properties:
- the prior washes out: two analysts with different positive priors reach nearly the same posterior given enough data;
- Bayesian interval estimates asymptotically coincide with frequentist confidence intervals;
- the theorem fails when the regularity conditions do not hold, when the true value lies on the boundary of the parameter space, or when the number of parameters grows with the sample size, as in non-parametric models, where the prior can matter even asymptotically.
