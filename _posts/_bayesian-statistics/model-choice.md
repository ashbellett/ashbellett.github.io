---
layout: post
category: "bayesian-statistics"
title:  "Model Choice"
tags: ["bayesian", "statistics", "model selection", "model averaging"]
description: "Comparing, combining and checking models"
---

Let $$M_1,\ldots,M_K$$ be candidate models for the data $$\underline{x},$$ where model $$M_k$$ has parameter $$\theta_k\in\Theta_k,$$ likelihood $$f\left(\underline{x}\mid\theta_k,M_k\right)$$ and prior $$\pi\left(\theta_k\mid M_k\right).$$ **Model uncertainty** is uncertainty about which model generated the data. Bayesian inference treats model uncertainty like any other uncertainty by placing a **prior model probability** $$\mathbb{P}\left(M_k\right)$$ on each model, with $$\sum_{k=1}^K\mathbb{P}\left(M_k\right)=1.$$

Let $$M_k$$ be a model with parameter $$\theta_k,$$ likelihood $$f\left(\underline{x}\mid\theta_k,M_k\right)$$ and prior $$\pi\left(\theta_k\mid M_k\right).$$ The **marginal likelihood** of $$M_k$$ is the probability it assigns to the observed data after integrating out its parameters.

$$f\left(\underline{x}\mid M_k\right):=\int_{\Theta_k}f\left(\underline{x}\mid\theta_k,M_k\right)\pi\left(\theta_k\mid M_k\right)d\theta_k$$

Let $$M_1,\ldots,M_K$$ be candidate models with prior model probabilities and marginal likelihoods. The **posterior model probability** of $$M_k$$ is the conditional probability of $$M_k$$ given the data, which follows from Bayes' theorem.

$$\mathbb{P}\left(M_k\mid\underline{x}\right)=\frac{f\left(\underline{x}\mid M_k\right)\mathbb{P}\left(M_k\right)}{\sum_{j=1}^K f\left(\underline{x}\mid M_j\right)\mathbb{P}\left(M_j\right)}$$

Let $$M_1$$ and $$M_2$$ be candidate models. The **prior odds** of $$M_1$$ over $$M_2$$ are $$\frac{\mathbb{P}\left(M_1\right)}{\mathbb{P}\left(M_2\right)}$$ and the **posterior odds** of $$M_1$$ over $$M_2$$ are $$\frac{\mathbb{P}\left(M_1\mid\underline{x}\right)}{\mathbb{P}\left(M_2\mid\underline{x}\right)}.$$

Let $$M_1$$ and $$M_2$$ be candidate models. The **Bayes factor** in favour of $$M_1$$ over $$M_2$$ is the ratio of their marginal likelihoods, which is the factor by which the data update the prior odds into the posterior odds.

$$B_{12}:=\frac{f\left(\underline{x}\mid M_1\right)}{f\left(\underline{x}\mid M_2\right)}=\frac{\mathbb{P}\left(M_1\mid\underline{x}\right)/\mathbb{P}\left(M_2\mid\underline{x}\right)}{\mathbb{P}\left(M_1\right)/\mathbb{P}\left(M_2\right)}$$

The Bayes factor has the following properties:
- it measures the evidence the data provide for one model over the other independently of the prior model probabilities;
- a Bayes factor of $$1$$ is no evidence, and by convention values of $$B_{12}$$ above about $$3,$$ $$10$$ and $$100$$ are read as positive, strong and decisive evidence for $$M_1;$$
- for two simple hypotheses the Bayes factor is the likelihood ratio;
- a simple null hypothesis $$H_0:\theta=\theta_0$$ is tested against $$H_1:\theta\neq\theta_0$$ by comparing the model with $$\theta$$ fixed at $$\theta_0$$ to the model with a prior on $$\theta.$$

**Occam's razor** is the property that the Bayes factor automatically penalises complexity. The marginal likelihood is the prior predictive density of the observed data, so it rewards a model for predicting the data well before seeing them. A model with more parameters or a more diffuse prior spreads its prior predictive distribution over more possible data sets and so assigns lower probability to any particular one unless the extra flexibility is needed.

The **Jeffreys–Lindley paradox** is the property that as the prior on $$\theta$$ under $$H_1$$ becomes more diffuse the marginal likelihood of $$H_1$$ tends to zero and the Bayes factor favours $$H_0$$ whatever the data, even when a frequentist test rejects $$H_0$$ decisively. The Bayes factor is therefore sensitive to the prior on the parameters, and improper priors cannot be used for the parameters that differ between models, since the marginal likelihood is then defined only up to an arbitrary constant.

Let $$M_k$$ be a model with $$d_k$$ parameters and maximum likelihood estimate $$\hat{\theta}_k.$$ Marginal likelihoods are rarely available in closed form and are estimated by importance sampling or bridge sampling, or approximated using the Laplace approximation, which as $$n\rightarrow\infty$$ gives

$$\log_e f\left(\underline{x}\mid M_k\right)\approx\ell\left(\hat{\theta}_k\mid\underline{x}\right)-\frac{d_k}{2}\log_e n.$$

Let $$M_k$$ be a model with $$d_k$$ parameters and maximum likelihood estimate $$\hat{\theta}_k.$$ The **Bayesian information criterion** (BIC) of $$M_k$$ is minus twice the Laplace approximation of its log marginal likelihood.

$$\mathrm{BIC}_k:=-2\,\ell\left(\hat{\theta}_k\mid\underline{x}\right)+d_k\log_e n$$

The BIC has the following properties:
- $$\frac{1}{2}\left(\mathrm{BIC}_2-\mathrm{BIC}_1\right)\approx\log_e B_{12},$$ so the model with the smallest BIC has approximately the largest marginal likelihood;
- it depends on the prior only through terms that do not grow with $$n;$$
- it is consistent in the sense of selecting the true model with probability tending to one when it is among the candidates.

Let $$M_1,\ldots,M_K$$ be candidate models with posterior model probabilities, $$\tilde{X}$$ be a future observation and $$\Delta$$ be a quantity that has the same meaning in every model, such as a prediction or an effect size. **Bayesian model averaging** (BMA) is the method that makes inferences and predictions by averaging over the models with their posterior probabilities as weights rather than conditioning on a single chosen model.

$$f\left(\tilde{x}\mid\underline{x}\right)=\sum_{k=1}^K f\left(\tilde{x}\mid\underline{x},M_k\right)\mathbb{P}\left(M_k\mid\underline{x}\right)$$

$$\pi\left(\Delta\mid\underline{x}\right)=\sum_{k=1}^K\pi\left(\Delta\mid\underline{x},M_k\right)\mathbb{P}\left(M_k\mid\underline{x}\right)$$

Bayesian model averaging has the following properties:
- it propagates model uncertainty into the final inference, so its intervals are wider and better calibrated than those from the single best model;
- its predictions have lower expected loss under the logarithmic score than those of any single model when the true model is among the candidates.

**Model selection** is the choice of a single model from the candidates. Model selection is the Bayes action under the zero-one loss that charges one unit for choosing any model other than the true one, which selects the model with the largest posterior probability, or equivalently the largest Bayes factor against each alternative when the prior model probabilities are equal. When no candidate model is believed to be true, models are instead compared by how well they predict new data.

Let $$M_k$$ be a model and $$\tilde{x}$$ be a new observation. The **log predictive density** of $$\tilde{x}$$ under $$M_k$$ is $$\log_e f\left(\tilde{x}\mid\underline{x},M_k\right).$$ The **expected log predictive density** of $$M_k$$ is the expectation of the log predictive density over the true distribution of $$\tilde{X}.$$

Let $$M_k$$ be a model and $$\underline{x}_{-i}$$ be the data with the $$i$$-th observation removed. **Leave-one-out cross-validation** is the method that estimates the expected log predictive density without new data by summing the log predictive densities of each observation given the others.

$$\mathrm{elpd}_{\mathrm{loo}}:=\sum_{i=1}^n\log_e f\left(x_i\mid\underline{x}_{-i},M_k\right)$$

The expected log predictive density can also be approximated by an information criterion.

Let $$M$$ be a model with likelihood $$f\left(\underline{x}\mid\theta\right).$$ The **deviance** of $$M$$ at parameter value $$\theta$$ is minus twice the log-likelihood.

$$D\left(\theta\right):=-2\log_e f\left(\underline{x}\mid\theta\right)$$

Let $$M$$ be a model with deviance $$D$$ and posterior distribution $$\pi\left(\theta\mid\underline{x}\right).$$ The **posterior mean deviance** is $$\overline{D}:=\mathbb{E}\left[D\left(\theta\right)\mid\underline{x}\right].$$ The **effective number of parameters** is the difference between the posterior mean deviance and the deviance at the posterior mean.

$$p_D:=\overline{D}-D\left(\mathbb{E}\left[\theta\mid\underline{x}\right]\right)$$

Let $$M$$ be a model with posterior mean deviance $$\overline{D}$$ and effective number of parameters $$p_D.$$ The **deviance information criterion** (DIC) of $$M$$ is the posterior mean deviance plus the effective number of parameters.

$$\mathrm{DIC}:=\overline{D}+p_D$$

The DIC is computed directly from posterior draws.

Let $$M$$ be a model with likelihood $$f\left(x_i\mid\theta\right)$$ for each observation and posterior distribution $$\pi\left(\theta\mid\underline{x}\right).$$ The **widely applicable information criterion** (WAIC) of $$M$$ is minus twice the log pointwise predictive density minus the effective number of parameters, where the latter is the sum of the posterior variances of the pointwise log-likelihoods.

$$\mathrm{WAIC}:=-2\left(\sum_{i=1}^n\log_e\mathbb{E}\left[f\left(x_i\mid\theta\right)\mid\underline{x}\right]-\sum_{i=1}^n\mathrm{var}\left[\log_e f\left(x_i\mid\theta\right)\mid\underline{x}\right]\right)$$

Information criteria have the following properties:
- the WAIC is a more stable alternative to the DIC and asymptotically equals $$-2\,\mathrm{elpd}_{\mathrm{loo}};$$
- lower values of DIC and WAIC indicate better expected predictive performance;
- unlike the Bayes factor they are insensitive to diffuse priors and do not require the true model to be among the candidates;
- they do not deliver posterior probabilities of the models.

Let $$\underline{x}$$ be the observed data with posterior distribution $$\pi\left(\theta\mid\underline{x}\right).$$ A **replicated data set** is a hypothetical new data set $$\underline{x}^{\mathrm{rep}}$$ of the same size and structure as $$\underline{x}$$ drawn from the posterior predictive distribution.

$$f\left(\underline{x}^{\mathrm{rep}}\mid\underline{x}\right)=\int_{\Theta}f\left(\underline{x}^{\mathrm{rep}}\mid\theta\right)\pi\left(\theta\mid\underline{x}\right)d\theta$$

A replicated data set is simulated by drawing $$\theta^{(s)}$$ from the posterior and then $$\underline{x}^{\mathrm{rep}(s)}$$ from the population distribution at $$\theta^{(s)}.$$

**Posterior predictive checking** is the method that compares the observed data with replicated data sets. If the model is adequate then the observed data should look like a typical draw from the posterior predictive distribution. Model comparison only ranks the candidates, so a model should also be checked against the data on its own.

Let $$\underline{x}$$ be data and $$\theta$$ be a parameter. A **test quantity** is a function $$T\left(\underline{x},\theta\right)$$ of the data, and possibly the parameter, chosen to capture a feature of the data that the model should reproduce, such as the proportion of zeros, the maximum, the autocorrelation or a goodness-of-fit statistic.

Let $$T$$ be a test quantity and $$\underline{x}^{\mathrm{rep}}$$ be a replicated data set. The **posterior predictive $$p$$-value** is the posterior probability that the test quantity of replicated data is at least as extreme as that of the observed data.

$$p_B:=\mathbb{P}\left(T\left(\underline{x}^{\mathrm{rep}},\theta\right)\geq T\left(\underline{x},\theta\right)\mid\underline{x}\right)\approx\frac{1}{S}\sum_{s=1}^S\mathbf{1}_{\left\{T\left(\underline{x}^{\mathrm{rep}(s)},\theta^{(s)}\right)\geq T\left(\underline{x},\theta^{(s)}\right)\right\}}$$

The posterior predictive $$p$$-value has the following properties:
- values near $$0$$ or $$1$$ indicate that the model does not reproduce that feature of the data;
- it is not a frequentist $$p$$-value and is not uniformly distributed under the model, since the data are used both to fit the model and to assess it, which makes it conservative;
- it is a measure of discrepancy rather than a formal test, and graphical comparisons of the observed data with replicated data sets are often more informative than a single number.

A **prior predictive check** is the method that draws replicated data from the prior predictive distribution and assesses whether the prior and likelihood together produce plausible data before any are observed. Prior predictive checks are how prior choices are calibrated.

A **sensitivity analysis** is the method that repeats the analysis under alternative priors and model specifications to assess how much the conclusions depend on choices that the data cannot settle.
