---
title:  "Posterior Summaries"
description: "Estimates, intervals and decisions from the posterior"
---

The posterior distribution is the complete answer to a Bayesian inference problem, but it is usually summarised by a point estimate, an interval or a decision. These summaries are derived from decision theory, in which the consequences of each choice are assessed under the posterior distribution.

Let $$\Theta$$ be a parameter space. A set of **actions** is a set $$\mathcal{A}$$ of choices available to the decision maker.

Let $$\Theta$$ be a parameter space and $$\mathcal{A}$$ be a set of actions. A **loss function** is a function $$L:\Theta\times\mathcal{A}\rightarrow\left[0,\infty\right)$$ where $$L\left(\theta,a\right)$$ is the loss incurred by taking action $$a$$ when the true parameter value is $$\theta.$$ The **utility** of an action is the negative of its loss, so minimising loss and maximising utility are equivalent.

Let $$L$$ be a loss function, $$a\in\mathcal{A}$$ be an action and $$\pi\left(\theta\mid\underline{x}\right)$$ be a posterior distribution. The **posterior expected loss** of $$a$$ is the expected loss of $$a$$ under the posterior distribution.

$$\rho\left(a\mid\underline{x}\right):=\mathbb{E}\left[L\left(\theta,a\right)\mid\underline{x}\right]=\int_{\Theta}L\left(\theta,a\right)\pi\left(\theta\mid\underline{x}\right)d\theta$$

Let $$L$$ be a loss function and $$\pi\left(\theta\mid\underline{x}\right)$$ be a posterior distribution. A **Bayes action** is an action that minimises the posterior expected loss.

$$a^*\left(\underline{x}\right):=\operatorname*{arg\,min}_{a\in\mathcal{A}}\rho\left(a\mid\underline{x}\right)$$

Let $$\mathcal{A}$$ be a set of actions. A **decision rule** is a function $$\delta$$ that maps each possible data set $$\underline{x}$$ to an action $$\delta\left(\underline{x}\right)\in\mathcal{A}.$$

Let $$L$$ be a loss function and $$\delta$$ be a decision rule. The **frequentist risk** of $$\delta$$ at $$\theta$$ is its expected loss over repeated sampling with $$\theta$$ fixed.

$$R\left(\theta,\delta\right):=\mathbb{E}\left[L\left(\theta,\delta\left(\underline{X}\right)\right)\mid\theta\right]$$

Let $$L$$ be a loss function, $$\delta$$ be a decision rule and $$\pi\left(\theta\right)$$ be a prior distribution. The **Bayes risk** of $$\delta$$ is its frequentist risk averaged over the prior.

$$r\left(\pi,\delta\right):=\int_{\Theta}R\left(\theta,\delta\right)\pi\left(\theta\right)d\theta$$

Let $$L$$ be a loss function and $$\pi\left(\theta\right)$$ be a prior distribution. A **Bayes rule** is a decision rule that minimises the Bayes risk. The decision rule that takes the Bayes action for every data set is a Bayes rule, so acting optimally conditional on the observed data is also optimal on average over data sets.

Let $$L$$ be a loss function on $$\Theta\times\Theta.$$ A **Bayes estimator** of $$\theta$$ is a Bayes action for the decision problem with $$\mathcal{A}=\Theta.$$ The Bayes estimator depends on the loss function.

The **squared error loss** is the loss function $$L\left(\theta,a\right)=\left(\theta-a\right)^2.$$ The Bayes estimator under squared error loss is the posterior mean.

$$\hat{\theta}=\mathbb{E}\left[\theta\mid\underline{x}\right]=\int_{\Theta}\theta\,\pi\left(\theta\mid\underline{x}\right)d\theta$$

Let $$\pi\left(\theta\mid\underline{x}\right)$$ be a posterior distribution. The **posterior variance** of $$\theta$$ is the variance of the posterior distribution, $$\mathrm{var}\left[\theta\mid\underline{x}\right].$$ The posterior variance is the posterior expected loss of the posterior mean under squared error loss. The **posterior standard deviation** of $$\theta$$ is $$\sqrt{\mathrm{var}\left[\theta\mid\underline{x}\right]},$$ which is the Bayesian analogue of the standard error.

The **absolute error loss** is the loss function $$L\left(\theta,a\right)=\lvert\theta-a\rvert.$$ The **posterior median** of $$\theta$$ is the median of the posterior distribution. The Bayes estimator under absolute error loss is the posterior median.

Let $$\varepsilon>0.$$ The **zero-one loss** is the loss function $$L\left(\theta,a\right)=\mathbf{1}_{\{\lvert\theta-a\rvert>\varepsilon\}}.$$

Let $$\pi\left(\theta\mid\underline{x}\right)$$ be a posterior distribution with pmf or pdf. The **posterior mode** or **maximum a posteriori** (MAP) estimate of $$\theta$$ is the value that maximises the posterior pmf or pdf.

$$\hat{\theta}_{\mathrm{MAP}}:=\operatorname*{arg\,max}_{\theta\in\Theta}\pi\left(\theta\mid\underline{x}\right)=\operatorname*{arg\,max}_{\theta\in\Theta}\left(\ell\left(\theta\mid\underline{x}\right)+\log_e\pi\left(\theta\right)\right)$$

The Bayes estimator under zero-one loss is the posterior mode in the limit $$\varepsilon\rightarrow 0.$$

Let $$\ell$$ be a log-likelihood function and $$p\left(\theta\right)$$ be a penalty function. A **penalised maximum likelihood estimate** is a value of $$\theta$$ that maximises $$\ell\left(\theta\mid\underline{x}\right)-p\left(\theta\right).$$ The MAP estimate has the following properties:
- it is the maximum likelihood estimate under a flat prior;
- it is a penalised maximum likelihood estimate with penalty $$-\log_e\pi\left(\theta\right):$$ a normal prior centred at zero penalises $$\theta^2$$ and a Laplace prior penalises $$\lvert\theta\rvert,$$ which are the penalties of ridge and lasso regularisation.

Point estimates have the following invariance properties under reparametrisation:
- the posterior median is invariant under monotonic reparametrisation;
- the posterior mean is invariant only under affine reparametrisation;
- the posterior mode is invariant under neither, since the change of variables factor moves the maximum of the density.

Let $$\pi\left(\theta\mid\underline{x}\right)$$ be a posterior distribution and $$\alpha\in\left(0,1\right).$$ A **credible set** of **credible level** $$1-\alpha$$ is a set $$C\subseteq\Theta$$ that has posterior probability $$1-\alpha.$$

$$\mathbb{P}\left(\theta\in C\mid\underline{x}\right)=\int_C\pi\left(\theta\mid\underline{x}\right)d\theta=1-\alpha$$

A **credible interval** is a credible set that is an interval. Credible sets have the following properties:
- a credible interval contains $$\theta$$ with posterior probability $$1-\alpha$$ given the observed data, which is the statement that a confidence interval is often mistakenly taken to make;
- a confidence interval, in contrast, has probability $$1-\alpha$$ of containing $$\theta$$ over repeated samples before the data are observed;
- credible sets of a given level are not unique.

Let $$\pi\left(\theta\mid\underline{x}\right)$$ be a posterior distribution with quantile function $$F^{-1}_{\theta\mid\underline{x}}$$ and $$\alpha\in\left(0,1\right).$$ The **equal-tailed credible interval** of level $$1-\alpha$$ is the credible interval that places probability $$\frac{\alpha}{2}$$ in each tail of the posterior distribution.

$$\left[F^{-1}_{\theta\mid\underline{x}}\left(\tfrac{\alpha}{2}\right),F^{-1}_{\theta\mid\underline{x}}\left(1-\tfrac{\alpha}{2}\right)\right]$$

The equal-tailed credible interval transforms correctly under monotonic reparametrisation.

Let $$\pi\left(\theta\mid\underline{x}\right)$$ be a posterior distribution with pdf and $$\alpha\in\left(0,1\right).$$ The **highest posterior density** (HPD) region of level $$1-\alpha$$ is the set of parameter values with posterior density above a threshold $$k$$ chosen to give the required level.

$$C_{\mathrm{HPD}}:=\left\{\theta\in\Theta:\pi\left(\theta\mid\underline{x}\right)\geq k\right\},\qquad\mathbb{P}\left(\theta\in C_{\mathrm{HPD}}\mid\underline{x}\right)=1-\alpha$$

The HPD region has the following properties:
- it is the smallest set of its level;
- it is an interval when the posterior is unimodal and may be a union of intervals when the posterior is multimodal;
- it is not invariant under reparametrisation;
- it coincides with the equal-tailed credible interval for a symmetric unimodal posterior.

Let $$z_{1-\frac{\alpha}{2}}$$ be the $$\left(1-\frac{\alpha}{2}\right)$$-quantile of the standard normal distribution. By the Bernstein–von Mises theorem both the equal-tailed credible interval and the HPD region are approximately $$\hat{\theta}\pm z_{1-\frac{\alpha}{2}}\left(n\,I\left(\hat{\theta}\right)\right)^{-\frac{1}{2}}$$ for large $$n.$$

Let $$H_0:\theta\in\Theta_0$$ and $$H_1:\theta\in\Theta_1$$ be hypotheses with $$\Theta_0\cup\Theta_1=\Theta$$ and $$\pi\left(\theta\mid\underline{x}\right)$$ be a posterior distribution. The **posterior probability of a hypothesis** is the posterior probability of its parameter set.

$$\mathbb{P}\left(H_0\mid\underline{x}\right)=\int_{\Theta_0}\pi\left(\theta\mid\underline{x}\right)d\theta,\qquad\mathbb{P}\left(H_1\mid\underline{x}\right)=1-\mathbb{P}\left(H_0\mid\underline{x}\right)$$

Let $$L_0$$ be the loss for wrongly rejecting $$H_0$$ and $$L_1$$ be the loss for wrongly accepting $$H_0.$$ The Bayes action is to reject $$H_0$$ if and only if the posterior odds exceed the ratio of the losses.

$$\frac{\mathbb{P}\left(H_1\mid\underline{x}\right)}{\mathbb{P}\left(H_0\mid\underline{x}\right)}>\frac{L_0}{L_1}$$

Bayesian hypothesis testing has the following properties:
- the hypotheses are treated symmetrically and $$H_0$$ can be accepted, in contrast to a frequentist test;
- the posterior probability of a composite hypothesis is a direct measure of its plausibility rather than a $$p$$-value;
- a simple hypothesis $$H_0:\theta=\theta_0$$ has posterior probability zero under a continuous prior, so testing it requires a prior that places positive probability on $$\theta_0,$$ which is treated as a comparison of two models.

Let $$\tilde{X}$$ be a future observation with posterior predictive distribution $$f\left(\tilde{x}\mid\underline{x}\right).$$ The **posterior predictive mean** of $$\tilde{X}$$ is the mean of the posterior predictive distribution.

$$\mathbb{E}\left[\tilde{X}\mid\underline{x}\right]=\mathbb{E}\left[\mathbb{E}\left[\tilde{X}\mid\theta\right]\mid\underline{x}\right]$$

The posterior predictive mean is the Bayes prediction of $$\tilde{X}$$ under squared error loss.

Let $$\tilde{X}$$ be a future observation with posterior predictive distribution and $$\alpha\in\left(0,1\right).$$ A **predictive interval** of level $$1-\alpha$$ is an interval with posterior predictive probability $$1-\alpha.$$ By the law of total variance

$$\mathrm{var}\left[\tilde{X}\mid\underline{x}\right]=\mathbb{E}\left[\mathrm{var}\left[\tilde{X}\mid\theta\right]\mid\underline{x}\right]+\mathrm{var}\left[\mathbb{E}\left[\tilde{X}\mid\theta\right]\mid\underline{x}\right],$$

which adds the variability of the observation to the uncertainty about the parameter, so a predictive interval is wider than a credible interval for $$\mathbb{E}\left[\tilde{X}\mid\theta\right].$$
