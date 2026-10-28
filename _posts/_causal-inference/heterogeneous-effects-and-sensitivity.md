---
layout: post
category: "causal-inference"
title:  "Heterogeneous Effects and Sensitivity"
tags: ["causal", "inference", "heterogeneous treatment effect", "sensitivity analysis"]
description: "Effects that vary across units and robustness to unmeasured confounding"
---

Let $$A$$ be a binary treatment, $$\underline{X}$$ be covariates and $$Y$$ be an outcome with potential outcomes $$Y(1),Y(0).$$ The conditional average treatment effect $$\tau\left(\underline{x}\right)=\mathbb{E}\left[Y(1)-Y(0)\mid\underline{X}=\underline{x}\right]$$ is the **heterogeneous treatment effect** function, which describes how the effect of the treatment varies with the covariates. Under consistency, ignorability and positivity it is identified by the difference of the outcome regression functions.

$$\tau\left(\underline{x}\right)=\mu_1\left(\underline{x}\right)-\mu_0\left(\underline{x}\right)$$

Let $$\underline{X}$$ be covariates and $$X_j$$ be a component of $$\underline{X}.$$ The covariate $$X_j$$ is an **effect modifier** if and only if $$\tau\left(\underline{x}\right)$$ depends on $$x_j.$$ Effect modification is a property of the causal effect and is distinct from confounding, which is a property of the treatment assignment.

Let $$\hat{\mu}$$ be a regression method that can be applied to any subset of the data. A **meta-learner** is a method that estimates the conditional average treatment effect by combining fits of the regression method, and the following are standard meta-learners:
- the **S-learner** fits a single regression $$\hat{\mu}\left(a,\underline{x}\right)$$ of $$Y$$ on $$\left(A,\underline{X}\right)$$ and estimates $$\hat{\tau}\left(\underline{x}\right)=\hat{\mu}\left(1,\underline{x}\right)-\hat{\mu}\left(0,\underline{x}\right);$$
- the **T-learner** fits separate regressions $$\hat{\mu}_1$$ and $$\hat{\mu}_0$$ on the treated and control units and estimates $$\hat{\tau}\left(\underline{x}\right)=\hat{\mu}_1\left(\underline{x}\right)-\hat{\mu}_0\left(\underline{x}\right);$$
- the **X-learner** fits $$\hat{\mu}_1$$ and $$\hat{\mu}_0,$$ imputes the individual effects $$Y_i-\hat{\mu}_0\left(\underline{X}_i\right)$$ for treated units and $$\hat{\mu}_1\left(\underline{X}_i\right)-Y_i$$ for control units, regresses the imputed effects on the covariates within each group and combines the two estimates with weights given by the propensity score.

Meta-learners have the following properties:
- the S-learner can shrink the treatment effect towards zero when the regression method regularises the coefficient of $$A;$$
- the T-learner can have high variance when the treated and control groups differ in size or covariate distribution, since the two regressions are fitted independently;
- the X-learner is designed for unbalanced designs and adapts to the smoothness of the effect function rather than of the outcome functions.

Let $$m\left(\underline{x}\right):=\mathbb{E}\left[Y\mid\underline{X}=\underline{x}\right]$$ be the marginal outcome regression and $$e$$ be the propensity score. The **Robinson decomposition** states that the outcome residualised on the covariates is the treatment residualised on the covariates times the conditional average treatment effect plus noise.

$$Y-m\left(\underline{X}\right)=\left(A-e\left(\underline{X}\right)\right)\tau\left(\underline{X}\right)+\varepsilon,\qquad\mathbb{E}\left[\varepsilon\mid A,\underline{X}\right]=0$$

Let $$\hat{m}$$ and $$\hat{e}$$ be cross-fitted estimates of the marginal outcome regression and the propensity score. The **R-learner** is the method that estimates the conditional average treatment effect by minimising the squared residual of the Robinson decomposition over a class of functions, with an optional penalty.

$$\hat{\tau}:=\operatorname*{arg\,min}_{\tau}\frac{1}{n}\sum_{i=1}^n\left(Y_i-\hat{m}\left(\underline{X}_i\right)-\left(A_i-\hat{e}\left(\underline{X}_i\right)\right)\tau\left(\underline{X}_i\right)\right)^2$$

The R-learner loss is Neyman orthogonal in $$\left(m,e\right),$$ so the estimate of $$\tau$$ is insensitive to first-order errors in the nuisance functions.

Let a tree be a recursive partition of the covariate space into leaves. A **causal tree** is a tree whose splits are chosen to maximise the heterogeneity of the treatment effect across leaves, and whose leaf estimates are the within-leaf associational differences. The tree is **honest** if and only if the units used to choose the splits are disjoint from the units used to estimate the leaf effects.

A **causal forest** is an average of honest causal trees grown on random subsamples of the data, with the units falling in the same leaf as $$\underline{x}$$ used as weights for a local estimate at $$\underline{x}.$$ Causal forests have the following properties:
- honesty makes the leaf estimates unbiased given the partition, and the forest estimate is consistent and asymptotically normal at a rate slower than $$\sqrt{n},$$ which gives pointwise confidence intervals for $$\tau\left(\underline{x}\right);$$
- **local centring** replaces $$Y$$ and $$A$$ by their residuals $$Y-\hat{m}\left(\underline{X}\right)$$ and $$A-\hat{e}\left(\underline{X}\right)$$ before growing the forest, which makes the forest a weighted R-learner and removes confounding bias in the splits;
- averaging the forest estimates over the covariate distribution gives an estimate of the average treatment effect, and averaging the AIPW scores with forest-estimated nuisance functions gives a doubly robust one.

Let $$\underline{X}$$ be covariates. A **treatment policy** or **treatment rule** is a function $$\pi$$ from the covariate space to the treatment set that assigns a treatment to each unit on the basis of its covariates.

$$\pi:\mathcal{X}\rightarrow\{0,1\}$$

Let $$\pi$$ be a treatment policy. The **value** of $$\pi$$ is the mean potential outcome when every unit receives the treatment assigned by the policy.

$$V\left(\pi\right):=\mathbb{E}\left[Y\left(\pi\left(\underline{X}\right)\right)\right]=\mathbb{E}\left[\pi\left(\underline{X}\right)Y(1)+\left(1-\pi\left(\underline{X}\right)\right)Y(0)\right]$$

Under ignorability the value is identified by $$V\left(\pi\right)=\mathbb{E}\left[\mu_0\left(\underline{X}\right)+\pi\left(\underline{X}\right)\tau\left(\underline{X}\right)\right],$$ and the difference in value between two policies is $$V\left(\pi\right)-V\left(\pi'\right)=\mathbb{E}\left[\left(\pi\left(\underline{X}\right)-\pi'\left(\underline{X}\right)\right)\tau\left(\underline{X}\right)\right].$$

Let $$\Pi$$ be a class of treatment policies. The **optimal policy** in $$\Pi$$ is the policy with the largest value, and the **unrestricted optimal policy** treats a unit if and only if its conditional average treatment effect is positive.

$$\pi^*:=\operatorname*{arg\,max}_{\pi\in\Pi}V\left(\pi\right),\qquad\pi^*\left(\underline{x}\right)=\mathbf{1}_{\{\tau\left(\underline{x}\right)>0\}}\,\,\mathrm{when}\,\,\Pi\,\,\mathrm{is}\,\,\mathrm{unrestricted}$$

Let $$\pi$$ be a treatment policy and $$\pi^*$$ be the optimal policy. The **regret** of $$\pi$$ is the loss in value from using $$\pi$$ instead of the optimal policy.

$$R\left(\pi\right):=V\left(\pi^*\right)-V\left(\pi\right)\geq 0$$

Let $$\hat{\psi}_i$$ be the estimated AIPW score of unit $$i$$ and $$\Pi$$ be a class of policies. **Policy learning** is the method that estimates the optimal policy by maximising the estimated value over the class.

$$\hat{\pi}:=\operatorname*{arg\,max}_{\pi\in\Pi}\frac{1}{n}\sum_{i=1}^n\left(2\pi\left(\underline{X}_i\right)-1\right)\hat{\psi}_i$$

Policy learning has the following properties:
- the objective is the doubly robust estimate of $$V\left(\pi\right)-V\left(1-\pi\right),$$ so the estimated policy inherits double robustness;
- the regret of the learned policy converges to zero at the rate $$n^{-\frac{1}{2}}$$ times the complexity of $$\Pi,$$ measured by its Vapnik–Chervonenkis dimension, when the nuisance functions are estimated well enough for the AIPW scores to be accurate;
- restricting $$\Pi$$ to simple policies such as decision trees trades value for interpretability and enforceable constraints such as budgets or fairness.

Let $$A$$ be a treatment, $$Y$$ be an outcome, $$\underline{X}$$ be observed covariates and $$U$$ be an unobserved variable. **Unmeasured confounding** is the failure of ignorability given $$\underline{X}$$ that would be repaired by also conditioning on $$U.$$

$$Y(a)\perp\!\!\!\perp A\mid\underline{X},U\,\,\mathrm{but}\,\,Y(a)\not\perp\!\!\!\perp A\mid\underline{X}$$

A **sensitivity analysis** is a method that quantifies how strong unmeasured confounding would have to be to change the conclusion of an analysis that assumes ignorability. Sensitivity analysis does not test ignorability, which is untestable, but reports the robustness of the conclusion to its failure.

Let $$e\left(\underline{x},u\right):=\mathbb{P}\left(A=1\mid\underline{X}=\underline{x},U=u\right)$$ be the propensity score given the unmeasured confounder and $$\Gamma\geq 1.$$ The **Rosenbaum sensitivity model** is the assumption that two units with the same observed covariates differ in their odds of treatment by at most a factor $$\Gamma.$$

$$\frac{1}{\Gamma}\leq\frac{e\left(\underline{x},u\right)/\left(1-e\left(\underline{x},u\right)\right)}{e\left(\underline{x},u'\right)/\left(1-e\left(\underline{x},u'\right)\right)}\leq\Gamma\,\,\forall\,\underline{x},u,u'$$

The value $$\Gamma=1$$ is ignorability. For a matched design, the Rosenbaum sensitivity model gives bounds on the $$p$$-value of a randomisation test for each $$\Gamma,$$ and the sensitivity analysis reports the smallest $$\Gamma$$ at which the test ceases to reject.

Let $$e\left(\underline{x}\right)$$ be the propensity score given the observed covariates, $$e\left(\underline{x},u\right)$$ be the propensity score given the observed and unobserved covariates and $$\Lambda\geq 1.$$ The **marginal sensitivity model** is the assumption that the odds of treatment given the observed covariates and the odds given all covariates differ by at most a factor $$\Lambda.$$

$$\frac{1}{\Lambda}\leq\frac{e\left(\underline{x},u\right)/\left(1-e\left(\underline{x},u\right)\right)}{e\left(\underline{x}\right)/\left(1-e\left(\underline{x}\right)\right)}\leq\Lambda\,\,\forall\,\underline{x},u$$

Under the marginal sensitivity model the inverse probability weights lie in a known interval, and the identified set of the average treatment effect is obtained by optimising the weighted estimator over all weights in the interval.

Let $$Y$$ be a binary outcome, $$\mathrm{RR}_{AY}$$ be the observed risk ratio of the treatment on the outcome after adjusting for $$\underline{X},$$ $$\mathrm{RR}_{AU}$$ be the maximum risk ratio of the treatment on the unmeasured confounder and $$\mathrm{RR}_{UY}$$ be the maximum risk ratio of the unmeasured confounder on the outcome. The **bias factor** is the largest factor by which unmeasured confounding of the given strength can inflate the observed risk ratio.

$$B:=\frac{\mathrm{RR}_{AU}\,\mathrm{RR}_{UY}}{\mathrm{RR}_{AU}+\mathrm{RR}_{UY}-1}$$

The true causal risk ratio is at least $$\frac{\mathrm{RR}_{AY}}{B}.$$ The **Cornfield conditions** are the consequence that to explain away an observed risk ratio $$\mathrm{RR}_{AY}>1$$ entirely, both $$\mathrm{RR}_{AU}$$ and $$\mathrm{RR}_{UY}$$ must exceed $$\mathrm{RR}_{AY}.$$

Let $$\mathrm{RR}_{AY}\geq 1$$ be an observed risk ratio. The **E-value** is the minimum strength of association, on the risk ratio scale, that an unmeasured confounder would need to have with both the treatment and the outcome to explain away the observed association.

$$E:=\mathrm{RR}_{AY}+\sqrt{\mathrm{RR}_{AY}\left(\mathrm{RR}_{AY}-1\right)}$$

The E-value has the following properties:
- it is the value of $$\mathrm{RR}_{AU}=\mathrm{RR}_{UY}$$ at which the bias factor equals $$\mathrm{RR}_{AY};$$
- an observed risk ratio below $$1$$ is first inverted;
- the E-value for the confidence limit closest to $$1$$ gives the confounding strength needed to move the interval to include $$1;$$
- a large E-value indicates a conclusion that is robust to unmeasured confounding, but the plausibility of the required confounding must be judged against the observed covariates.

Without any assumption on the unmeasured confounding the average treatment effect is only partially identified, with the bounds given in the Identification note. The sensitivity models above interpolate between those bounds at $$\Gamma,\Lambda\rightarrow\infty$$ and point identification at $$\Gamma=\Lambda=1.$$
