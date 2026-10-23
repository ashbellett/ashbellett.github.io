---
layout: post
category: "bayesian-statistics"
title:  "Posterior Summaries"
tags: ["bayesian", "statistics", "posterior", "decision"]
description: "Estimates, intervals and decisions from the posterior"
---

The posterior distribution is the complete answer to a Bayesian inference problem, but it is usually summarised by a point estimate, an interval or a decision. These summaries are derived from decision theory, in which the consequences of each choice are assessed under the posterior distribution. Let $$\mathcal{A}$$ be a set of **actions** and $$L:\Theta\times\mathcal{A}\rightarrow\left[0,\infty\right)$$ be a **loss function**, where $$L\left(\theta,a\right)$$ is the loss incurred by taking action $$a$$ when the true parameter value is $$\theta.$$ The **utility** of an action is the negative of its loss, so minimising loss and maximising utility are equivalent.

The **posterior expected loss** of an action is its expected loss under the posterior distribution,

$$\rho\left(a\mid\underline{x}\right):=\mathbb{E}\left[L\left(\theta,a\right)\mid\underline{x}\right]=\int_{\Theta}L\left(\theta,a\right)\pi\left(\theta\mid\underline{x}\right)d\theta,$$

and a **Bayes action** minimises the posterior expected loss.

$$a^*\left(\underline{x}\right):=\operatorname*{arg\,min}_{a\in\mathcal{A}}\rho\left(a\mid\underline{x}\right)$$

A **decision rule** $$\delta$$ maps each possible data set to an action, and its **frequentist risk** at $$\theta$$ is its expected loss over repeated sampling with $$\theta$$ fixed, $$R\left(\theta,\delta\right):=\mathbb{E}\left[L\left(\theta,\delta\left(\underline{X}\right)\right)\mid\theta\right].$$ The **Bayes risk** of a decision rule is its frequentist risk averaged over the prior,

$$r\left(\pi,\delta\right):=\int_{\Theta}R\left(\theta,\delta\right)\pi\left(\theta\right)d\theta,$$

and a **Bayes rule** minimises the Bayes risk. The decision rule that takes the Bayes action for every data set is a Bayes rule, so acting optimally conditional on the observed data is also optimal on average over data sets. Estimating $$\theta$$ is the decision problem with $$\mathcal{A}=\Theta,$$ and a Bayes action for it is a **Bayes estimator**.

The Bayes estimator depends on the loss function. The **squared error loss** $$L\left(\theta,a\right)=\left(\theta-a\right)^2$$ gives the **posterior mean**,

$$\hat{\theta}=\mathbb{E}\left[\theta\mid\underline{x}\right]=\int_{\Theta}\theta\,\pi\left(\theta\mid\underline{x}\right)d\theta,$$

whose posterior expected loss is the **posterior variance** $$\mathrm{var}\left[\theta\mid\underline{x}\right].$$ The **absolute error loss** $$L\left(\theta,a\right)=\lvert\theta-a\rvert$$ gives the **posterior median**, the median of the posterior distribution. The **zero-one loss** $$L\left(\theta,a\right)=\mathbf{1}_{\{\lvert\theta-a\rvert>\varepsilon\}}$$ for small $$\varepsilon$$ gives, in the limit $$\varepsilon\rightarrow 0,$$ the **posterior mode** or **maximum a posteriori** (MAP) estimate,

$$\hat{\theta}_{\mathrm{MAP}}=\operatorname*{arg\,max}_{\theta\in\Theta}\pi\left(\theta\mid\underline{x}\right)=\operatorname*{arg\,max}_{\theta\in\Theta}\left(\ell\left(\theta\mid\underline{x}\right)+\log_e\pi\left(\theta\right)\right).$$

The MAP estimate is the maximum likelihood estimate under a flat prior and in general is a **penalised maximum likelihood** estimate with penalty $$-\log_e\pi\left(\theta\right):$$ a normal prior centred at zero penalises $$\theta^2$$ and a Laplace prior penalises $$\lvert\theta\rvert,$$ which are the penalties of ridge and lasso regularisation. The posterior mean and median are invariant to affine reparametrisation only, and the posterior mode is not invariant to reparametrisation at all, since the change of variables factor moves the maximum of the density. The **posterior standard deviation** $$\sqrt{\mathrm{var}\left[\theta\mid\underline{x}\right]}$$ is the Bayesian analogue of the standard error.

Let $$\alpha\in\left(0,1\right).$$ A **credible set** of **credible level** $$1-\alpha$$ is a set $$C\subseteq\Theta$$ that has posterior probability $$1-\alpha,$$

$$\mathbb{P}\left(\theta\in C\mid\underline{x}\right)=\int_C\pi\left(\theta\mid\underline{x}\right)d\theta=1-\alpha,$$

and a **credible interval** is a credible set that is an interval. Unlike a confidence interval, which has probability $$1-\alpha$$ of containing $$\theta$$ over repeated samples before the data are observed, a credible interval contains $$\theta$$ with posterior probability $$1-\alpha$$ given the observed data, which is the statement that a confidence interval is often mistakenly taken to make. Credible sets of a given level are not unique, and two choices are standard. The **equal-tailed credible interval** places probability $$\frac{\alpha}{2}$$ in each tail of the posterior distribution,

$$\left[F^{-1}_{\theta\mid\underline{x}}\left(\tfrac{\alpha}{2}\right),F^{-1}_{\theta\mid\underline{x}}\left(1-\tfrac{\alpha}{2}\right)\right],$$

where $$F^{-1}_{\theta\mid\underline{x}}$$ is the posterior quantile function, and transforms correctly under monotonic reparametrisation. The **highest posterior density** (HPD) region is the set of parameter values with posterior density above a threshold chosen to give the required level,

$$C_{\mathrm{HPD}}=\left\{\theta\in\Theta:\pi\left(\theta\mid\underline{x}\right)\geq k\right\},\qquad\mathbb{P}\left(\theta\in C_{\mathrm{HPD}}\mid\underline{x}\right)=1-\alpha,$$

which is the smallest set of that level, is an interval when the posterior is unimodal, may be a union of intervals when it is multimodal and is not invariant under reparametrisation. The two coincide for a symmetric unimodal posterior. By the Bernstein–von Mises theorem both are approximately $$\hat{\theta}\pm z_{1-\frac{\alpha}{2}}\left(n\,I\left(\hat{\theta}\right)\right)^{-\frac{1}{2}}$$ for large $$n,$$ where $$z_{1-\frac{\alpha}{2}}$$ is the $$\left(1-\frac{\alpha}{2}\right)$$-quantile of the standard normal distribution.

Let $$H_0:\theta\in\Theta_0$$ and $$H_1:\theta\in\Theta_1$$ be hypotheses with $$\Theta_0\cup\Theta_1=\Theta.$$ The **posterior probability of a hypothesis** is the posterior probability of its parameter set,

$$\mathbb{P}\left(H_0\mid\underline{x}\right)=\int_{\Theta_0}\pi\left(\theta\mid\underline{x}\right)d\theta,\qquad\mathbb{P}\left(H_1\mid\underline{x}\right)=1-\mathbb{P}\left(H_0\mid\underline{x}\right),$$

and the Bayes action under the loss that charges $$L_0$$ for wrongly rejecting $$H_0$$ and $$L_1$$ for wrongly accepting it is to reject $$H_0$$ if and only if $$\frac{\mathbb{P}\left(H_1\mid\underline{x}\right)}{\mathbb{P}\left(H_0\mid\underline{x}\right)}>\frac{L_0}{L_1}.$$ The hypotheses are treated symmetrically and $$H_0$$ can be accepted, in contrast to a frequentist test, and the posterior probability of a composite hypothesis is a direct measure of its plausibility rather than a $$p$$-value. A simple hypothesis $$H_0:\theta=\theta_0$$ has posterior probability zero under a continuous prior, so testing it requires a prior that places positive probability on $$\theta_0,$$ which is treated as a comparison of two models.

The posterior predictive distribution is summarised in the same way. The Bayes prediction of a future observation $$\tilde{X}$$ under squared error loss is the **posterior predictive mean** $$\mathbb{E}\left[\tilde{X}\mid\underline{x}\right]=\mathbb{E}\left[\mathbb{E}\left[\tilde{X}\mid\theta\right]\mid\underline{x}\right],$$ and a **predictive interval** of level $$1-\alpha$$ is an interval with posterior predictive probability $$1-\alpha,$$ which is wider than a credible interval for $$\mathbb{E}\left[\tilde{X}\mid\theta\right]$$ because by the law of total variance

$$\mathrm{var}\left[\tilde{X}\mid\underline{x}\right]=\mathbb{E}\left[\mathrm{var}\left[\tilde{X}\mid\theta\right]\mid\underline{x}\right]+\mathrm{var}\left[\mathbb{E}\left[\tilde{X}\mid\theta\right]\mid\underline{x}\right]$$

adds the variability of the observation to the uncertainty about the parameter.
