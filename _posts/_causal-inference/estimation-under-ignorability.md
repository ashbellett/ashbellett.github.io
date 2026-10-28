---
title:  "Estimation under Ignorability"
description: "Estimating effects by adjusting for observed covariates"
---

Let $$\left(A_i,\underline{X}_i,Y_i\right),$$ $$i=1,\ldots,n,$$ be a random sample of treatments, covariates and outcomes satisfying consistency, ignorability and positivity, with binary treatment. The estimators below are estimators of the average treatment effect $$\tau=\mathbb{E}\left[Y(1)\right]-\mathbb{E}\left[Y(0)\right]$$ built on the adjustment formula.

Let $$A$$ be a treatment, $$\underline{X}$$ be covariates and $$Y$$ be an outcome. The **outcome regression function** for treatment $$a$$ is the conditional mean of the outcome given the treatment and the covariates.

$$\mu_a\left(\underline{x}\right):=\mathbb{E}\left[Y\mid A=a,\underline{X}=\underline{x}\right]$$

Under ignorability and consistency $$\mu_a\left(\underline{x}\right)=\mathbb{E}\left[Y(a)\mid\underline{X}=\underline{x}\right],$$ so the conditional average treatment effect is $$\tau\left(\underline{x}\right)=\mu_1\left(\underline{x}\right)-\mu_0\left(\underline{x}\right).$$

Let $$\hat{\mu}_1$$ and $$\hat{\mu}_0$$ be estimates of the outcome regression functions fitted to the treated and control units. The **outcome regression estimator** or **standardisation estimator** of the average treatment effect is the sample average of the difference of the fitted regression functions over all units.

$$\hat{\tau}_{\mathrm{OR}}:=\frac{1}{n}\sum_{i=1}^n\left(\hat{\mu}_1\left(\underline{X}_i\right)-\hat{\mu}_0\left(\underline{X}_i\right)\right)$$

The outcome regression estimator has the following properties:
- it is the plug-in estimator of the adjustment formula;
- it is consistent if the outcome regression functions are estimated consistently, and biased if they are misspecified;
- if $$\mu_a\left(\underline{x}\right)=\alpha+\tau a+\underline{\beta}^\intercal\underline{x}$$ is linear with a common slope then $$\hat{\tau}_{\mathrm{OR}}$$ is the least squares coefficient of $$A$$ in the regression of $$Y$$ on $$A$$ and $$\underline{X};$$
- averaging over the treated units only, $$\frac{1}{n_1}\sum_{i:\,A_i=1}\left(Y_i-\hat{\mu}_0\left(\underline{X}_i\right)\right),$$ estimates the average treatment effect on the treated.

Let $$A$$ be a binary treatment and $$\underline{X}$$ be covariates. The **propensity score** is the conditional probability of treatment given the covariates.

$$e\left(\underline{x}\right):=\mathbb{P}\left(A=1\mid\underline{X}=\underline{x}\right)$$

Positivity states that $$0<e\left(\underline{x}\right)<1$$ for every $$\underline{x}$$ in the support of $$\underline{X}.$$ The propensity score is known in a randomised experiment and must be estimated otherwise, usually by logistic regression or a classifier.

Let $$e$$ be the propensity score. The **balancing property** states that the covariates are independent of the treatment given the propensity score.

$$\underline{X}\perp\!\!\!\perp A\mid e\left(\underline{X}\right)$$

Let $$e$$ be the propensity score. The **propensity score theorem** states that if the treatment is ignorable given $$\underline{X}$$ then it is ignorable given the scalar $$e\left(\underline{X}\right)$$ alone.

$$Y(a)\perp\!\!\!\perp A\mid\underline{X}\Rightarrow Y(a)\perp\!\!\!\perp A\mid e\left(\underline{X}\right)$$

The propensity score theorem reduces adjustment for a high-dimensional covariate vector to adjustment for a single scalar, so the adjustment formula holds with $$e\left(\underline{X}\right)$$ in place of $$\underline{X}.$$

Let $$\hat{e}$$ be an estimated propensity score and $$S_1,\ldots,S_K$$ be a partition of $$\left[0,1\right]$$ into intervals. **Stratification** or **subclassification** on the propensity score is the method that groups units by the interval containing $$\hat{e}\left(\underline{X}_i\right),$$ computes the associational difference within each stratum and averages the within-stratum differences weighted by the stratum sizes.

$$\hat{\tau}_{\mathrm{S}}:=\sum_{k=1}^K\frac{n_k}{n}\left(\overline{Y}_{1k}-\overline{Y}_{0k}\right)$$

Here $$n_k$$ is the number of units in stratum $$k$$ and $$\overline{Y}_{ak}$$ is the mean outcome of the units in stratum $$k$$ with treatment $$a.$$ Five strata remove most of the bias due to a continuous confounder when the propensity score model is correct.

Let $$d$$ be a distance on the covariate space, such as the Mahalanobis distance or the absolute difference of propensity scores. **Matching** is the method that pairs each treated unit with the control unit, or the $$M$$ control units, nearest to it in $$d.$$ The **matching estimator** of the average treatment effect on the treated is the average over the treated units of the difference between the unit's outcome and the mean outcome of its matches.

$$\hat{\tau}_{\mathrm{M}}:=\frac{1}{n_1}\sum_{i:\,A_i=1}\left(Y_i-\frac{1}{M}\sum_{j\in\mathcal{J}\left(i\right)}Y_j\right)$$

Here $$\mathcal{J}\left(i\right)$$ is the set of matches of unit $$i.$$ Matching has the following properties:
- a **caliper** is a maximum distance beyond which a unit is left unmatched, which improves balance at the cost of changing the population;
- matching with replacement reuses control units and reduces bias at the cost of variance;
- the matching estimator has a bias of order $$n^{-\frac{1}{k}}$$ for $$k$$ continuous covariates, which does not vanish at the $$\sqrt{n}$$ rate for $$k\geq 2$$ unless it is corrected by a regression adjustment of the matched differences;
- **covariate balance** after matching is assessed by the standardised mean differences of the covariates between the treated and matched control units.

Let $$e$$ be the propensity score. **Inverse probability weighting** (IPW) is the method that weights each unit by the reciprocal of the probability of the treatment it received, so that the weighted treated and control groups each resemble the whole population. Under ignorability, positivity and consistency the mean potential outcomes are identified by the weighted means.

$$\mathbb{E}\left[Y(1)\right]=\mathbb{E}\left[\frac{AY}{e\left(\underline{X}\right)}\right],\qquad\mathbb{E}\left[Y(0)\right]=\mathbb{E}\left[\frac{\left(1-A\right)Y}{1-e\left(\underline{X}\right)}\right]$$

The identity follows from $$\mathbb{E}\left[\frac{AY}{e\left(\underline{X}\right)}\mid\underline{X}\right]=\frac{\mathbb{E}\left[A\mid\underline{X}\right]\mathbb{E}\left[Y(1)\mid\underline{X}\right]}{e\left(\underline{X}\right)}=\mathbb{E}\left[Y(1)\mid\underline{X}\right]$$ by ignorability and consistency.

Let $$\hat{e}$$ be an estimated propensity score. The **Horvitz–Thompson estimator** of the average treatment effect is the difference of the inverse probability weighted sample means.

$$\hat{\tau}_{\mathrm{IPW}}:=\frac{1}{n}\sum_{i=1}^n\left(\frac{A_iY_i}{\hat{e}\left(\underline{X}_i\right)}-\frac{\left(1-A_i\right)Y_i}{1-\hat{e}\left(\underline{X}_i\right)}\right)$$

The **Hájek estimator** normalises the weights within each treatment group to sum to one, which is equivalent to a weighted least squares regression of $$Y$$ on $$A$$ with weights $$\frac{A}{\hat{e}\left(\underline{X}\right)}+\frac{1-A}{1-\hat{e}\left(\underline{X}\right)}.$$ Inverse probability weighting has the following properties:
- it is consistent if the propensity score is estimated consistently, and biased if the propensity score model is misspecified;
- its variance is large when some propensity scores are close to $$0$$ or $$1,$$ since the corresponding weights are large, which is the sample manifestation of near-violation of positivity;
- **stabilised weights** $$\frac{\mathbb{P}\left(A=a\right)}{\mathbb{P}\left(A=a\mid\underline{X}\right)}$$ have mean one and reduce the variance when used in a weighted regression;
- **trimming** discards units with extreme estimated propensity scores, which reduces variance at the cost of changing the target population;
- the weights $$\frac{A}{1}$$ for treated units and $$\frac{\left(1-A\right)e\left(\underline{X}\right)}{1-e\left(\underline{X}\right)}$$ for control units estimate the average treatment effect on the treated.

Let $$\mu_1,\mu_0$$ be the outcome regression functions and $$e$$ be the propensity score. The **augmented inverse probability weighting** (AIPW) **score** of a unit is the outcome regression prediction corrected by the inverse probability weighted residual.

$$\psi\left(A,\underline{X},Y\right):=\mu_1\left(\underline{X}\right)-\mu_0\left(\underline{X}\right)+\frac{A\left(Y-\mu_1\left(\underline{X}\right)\right)}{e\left(\underline{X}\right)}-\frac{\left(1-A\right)\left(Y-\mu_0\left(\underline{X}\right)\right)}{1-e\left(\underline{X}\right)}$$

Let $$\hat{\mu}_1,\hat{\mu}_0$$ and $$\hat{e}$$ be estimates of the outcome regression functions and the propensity score. The **augmented inverse probability weighting estimator** or **doubly robust estimator** of the average treatment effect is the sample average of the estimated AIPW scores.

$$\hat{\tau}_{\mathrm{AIPW}}:=\frac{1}{n}\sum_{i=1}^n\hat{\psi}\left(A_i,\underline{X}_i,Y_i\right)$$

The doubly robust estimator has the following properties:
- **double robustness**: it is consistent if either the outcome regression functions or the propensity score are estimated consistently, since $$\mathbb{E}\left[\psi\right]=\tau$$ whenever either pair of nuisance functions is correct;
- if both are consistent then it attains the smallest asymptotic variance among regular estimators, given below;
- its bias is the product of the errors of the two nuisance estimates, so it converges at the $$\sqrt{n}$$ rate when each nuisance function is estimated at a rate faster than $$n^{-\frac{1}{4}}.$$

Let $$\hat{\psi}_n$$ be an estimator of a parameter $$\psi$$ computed from an iid sample of random variables $$O_1,\ldots,O_n.$$ The estimator is **asymptotically linear** if and only if there exists a function $$\varphi$$ with $$\mathbb{E}\left[\varphi\left(O\right)\right]=0$$ and finite variance such that

$$\sqrt{n}\left(\hat{\psi}_n-\psi\right)=\frac{1}{\sqrt{n}}\sum_{i=1}^n\varphi\left(O_i\right)+o_p\left(1\right).$$

The function $$\varphi$$ is the **influence function** of the estimator. By the central limit theorem an asymptotically linear estimator is asymptotically normal with asymptotic variance $$\mathbb{E}\left[\varphi\left(O\right)^2\right].$$

Let $$\psi$$ be a parameter of a model that places no restriction on the observational distribution beyond ignorability and positivity. The **efficient influence function** of $$\psi$$ is the influence function with the smallest variance among those of regular asymptotically linear estimators, and the **semiparametric efficiency bound** is its variance. For the average treatment effect the efficient influence function is $$\psi\left(A,\underline{X},Y\right)-\tau$$ and the efficiency bound is

$$V_{\mathrm{eff}}=\mathbb{E}\left[\frac{\sigma_1^2\left(\underline{X}\right)}{e\left(\underline{X}\right)}+\frac{\sigma_0^2\left(\underline{X}\right)}{1-e\left(\underline{X}\right)}+\left(\tau\left(\underline{X}\right)-\tau\right)^2\right],$$

where $$\sigma_a^2\left(\underline{x}\right)=\mathrm{var}\left[Y\mid A=a,\underline{X}=\underline{x}\right].$$ The doubly robust estimator with consistently estimated nuisance functions attains the efficiency bound, whereas the outcome regression and inverse probability weighting estimators do so only under additional conditions.

Let $$\psi$$ be a parameter identified by a moment condition $$\mathbb{E}\left[m\left(O;\,\psi,\eta\right)\right]=0$$ that depends on a nuisance function $$\eta.$$ The moment condition is **Neyman orthogonal** if and only if its derivative with respect to the nuisance function at the true value is zero, so that small errors in $$\hat{\eta}$$ have no first-order effect on $$\hat{\psi}.$$ The AIPW score is Neyman orthogonal in $$\left(\mu_1,\mu_0,e\right).$$

Let $$\eta$$ be a nuisance function estimated by a machine learning method and the sample be split into $$K$$ folds. **Cross-fitting** is the method that estimates $$\eta$$ on all folds but the $$k$$-th and evaluates the score on the $$k$$-th fold, for each $$k,$$ so that no unit's own outcome is used to fit the nuisance function evaluated at it.

**Double machine learning** is the method that estimates $$\psi$$ by solving a Neyman orthogonal moment condition with cross-fitted machine learning estimates of the nuisance functions. Double machine learning has the following properties:
- the estimator is $$\sqrt{n}$$-consistent and asymptotically normal when the nuisance functions are estimated at rates whose product is faster than $$n^{-\frac{1}{2}},$$ which allows flexible estimators that converge slower than $$\sqrt{n};$$
- cross-fitting removes the bias from overfitting the nuisance functions without restricting the complexity of the machine learning method;
- the AIPW estimator with cross-fitting is the double machine learning estimator of the average treatment effect.
