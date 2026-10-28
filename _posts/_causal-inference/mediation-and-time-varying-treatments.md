---
layout: post
category: "causal-inference"
title:  "Mediation and Time-Varying Treatments"
tags: ["causal", "inference", "mediation", "g-methods"]
description: "Effects through intermediate variables and over time"
---

Let $$A$$ be a binary treatment, $$Y$$ be an outcome and $$M$$ be a mediator, a variable on a directed path from $$A$$ to $$Y.$$ The **potential mediator** $$M(a)$$ is the value of the mediator under treatment $$a,$$ and the **nested potential outcome** $$Y(a,m)$$ is the value of the outcome under treatment $$a$$ with the mediator set to $$m.$$ Consistency states that $$M=M(A)$$ and $$Y=Y(A,M(A))=Y(A).$$ The **cross-world potential outcome** $$Y(a,M(a'))$$ is the outcome under treatment $$a$$ with the mediator at the value it would take under treatment $$a'.$$

Let $$A$$ be a treatment, $$M$$ be a mediator and $$Y$$ be an outcome. The **total effect** of $$A$$ on $$Y$$ is the average treatment effect, which decomposes into effects through and not through the mediator.

$$\tau:=\mathbb{E}\left[Y(1,M(1))-Y(0,M(0))\right]$$

Let $$A$$ be a treatment, $$M$$ be a mediator and $$m$$ be a fixed value. The **controlled direct effect** at $$m$$ is the effect of the treatment when the mediator is held fixed at $$m$$ for every unit.

$$\mathrm{CDE}\left(m\right):=\mathbb{E}\left[Y(1,m)-Y(0,m)\right]$$

Let $$A$$ be a treatment and $$M$$ be a mediator. The **natural direct effect** is the effect of changing the treatment while holding the mediator at the value it would take under control for each unit.

$$\mathrm{NDE}:=\mathbb{E}\left[Y(1,M(0))-Y(0,M(0))\right]$$

Let $$A$$ be a treatment and $$M$$ be a mediator. The **natural indirect effect** is the effect of changing the mediator from its control value to its treated value while holding the treatment at treated for each unit.

$$\mathrm{NIE}:=\mathbb{E}\left[Y(1,M(1))-Y(1,M(0))\right]$$

The natural effects have the following properties:
- the total effect is the sum of the natural direct and indirect effects, $$\tau=\mathrm{NDE}+\mathrm{NIE},$$ without any assumption about interaction between $$A$$ and $$M;$$
- the controlled direct effect depends on $$m$$ when the treatment and mediator interact, and equals the natural direct effect when they do not;
- natural effects involve cross-world potential outcomes, which are never observed for any unit, so their identification requires assumptions that cannot be verified even by a randomised experiment.

Let $$A$$ be a treatment, $$M$$ be a mediator, $$Y$$ be an outcome and $$\underline{X}$$ be pre-treatment covariates. **Sequential ignorability** is the conjunction of the following assumptions:
- no unmeasured treatment-outcome confounding: $$Y(a,m)\perp\!\!\!\perp A\mid\underline{X};$$
- no unmeasured mediator-outcome confounding: $$Y(a,m)\perp\!\!\!\perp M\mid A,\underline{X};$$
- no unmeasured treatment-mediator confounding: $$M(a)\perp\!\!\!\perp A\mid\underline{X};$$
- no mediator-outcome confounder affected by treatment: $$Y(a,m)\perp\!\!\!\perp M(a')\mid\underline{X}.$$

Let sequential ignorability, consistency and positivity hold. The **mediation formula** states that the mean cross-world potential outcome is identified by averaging the outcome regression over the mediator distribution under the other treatment.

$$\mathbb{E}\left[Y(a,M(a'))\right]=\int\int\mathbb{E}\left[Y\mid A=a,M=m,\underline{X}=\underline{x}\right]p\left(m\mid A=a',\underline{X}=\underline{x}\right)p\left(\underline{x}\right)dm\,d\underline{x}$$

The natural direct and indirect effects follow by substituting $$\left(a,a'\right)=\left(1,0\right),\left(0,0\right)$$ and $$\left(1,1\right),\left(1,0\right).$$ For linear models $$\mathbb{E}\left[M\mid a,\underline{x}\right]=\alpha_0+\alpha_1a+\underline{\alpha}_2^\intercal\underline{x}$$ and $$\mathbb{E}\left[Y\mid a,m,\underline{x}\right]=\beta_0+\beta_1a+\beta_2m+\underline{\beta}_3^\intercal\underline{x}$$ without interaction, the natural indirect effect is the product $$\alpha_1\beta_2$$ and the natural direct effect is $$\beta_1.$$

Let $$k=0,1,\ldots,K$$ index time points. A **time-varying treatment** is a sequence $$A_0,A_1,\ldots,A_K$$ of treatments, one at each time point. The **treatment history** up to time $$k$$ is $$\bar{A}_k:=\left(A_0,\ldots,A_k\right)$$ and a **treatment regime** or **strategy** is a fixed sequence $$\bar{a}=\left(a_0,\ldots,a_K\right).$$

Let $$\bar{A}_K$$ be a time-varying treatment and $$L_0,L_1,\ldots,L_K$$ be **time-varying covariates** measured at each time point before the treatment at that time point, with history $$\bar{L}_k:=\left(L_0,\ldots,L_k\right).$$ The **potential outcome** $$Y\left(\bar{a}\right)$$ is the outcome at the end of follow-up under the treatment regime $$\bar{a}.$$

Let $$\bar{A}_K$$ be a time-varying treatment with time-varying covariates $$\bar{L}_K.$$ **Treatment-confounder feedback** is the situation in which a covariate $$L_k$$ is affected by earlier treatments $$\bar{A}_{k-1}$$ and also affects later treatments $$A_k$$ and the outcome. Under treatment-confounder feedback the covariate is both a confounder of later treatment and a mediator of earlier treatment, so adjusting for it in a regression blocks part of the effect of earlier treatment and conditions on a collider, whereas not adjusting for it leaves later treatment confounded. Standard regression adjustment is therefore biased, and the **g-methods** below are required.

Let $$\bar{A}_K$$ be a time-varying treatment with time-varying covariates $$\bar{L}_K.$$ **Sequential exchangeability** is the assumption that at each time point the treatment is independent of the potential outcomes given the treatment and covariate histories.

$$Y\left(\bar{a}\right)\perp\!\!\!\perp A_k\mid\bar{A}_{k-1}=\bar{a}_{k-1},\bar{L}_k\,\,\forall\,k,\bar{a}$$

**Sequential positivity** is the assumption that $$\mathbb{P}\left(A_k=a_k\mid\bar{A}_{k-1}=\bar{a}_{k-1},\bar{L}_k=\bar{l}_k\right)>0$$ for every history that occurs, and **sequential consistency** is the assumption that $$Y=Y\left(\bar{A}_K\right).$$

Let sequential exchangeability, positivity and consistency hold. The **g-formula** states that the mean potential outcome under a regime is identified by averaging the outcome regression over the covariate distribution that would arise under the regime, in which each covariate is drawn given the past covariates and the regime's past treatments.

$$\mathbb{E}\left[Y\left(\bar{a}\right)\right]=\int\mathbb{E}\left[Y\mid\bar{A}_K=\bar{a},\bar{L}_K=\bar{l}_K\right]\prod_{k=0}^Kp\left(l_k\mid\bar{A}_{k-1}=\bar{a}_{k-1},\bar{L}_{k-1}=\bar{l}_{k-1}\right)d\bar{l}_K$$

The g-formula reduces to the adjustment formula when $$K=0,$$ and it is the truncated factorisation of the causal graph with the treatment factors removed.

Let the conditional distributions in the g-formula be given parametric models. The **parametric g-formula** is the method that fits these models, simulates covariate histories under the regime of interest from the fitted covariate models and averages the fitted outcome model over the simulated histories. The parametric g-formula has the following properties:
- it estimates the mean outcome under any regime, including dynamic regimes in which $$a_k$$ depends on $$\bar{l}_k;$$
- it requires a correct model for every covariate at every time point, and misspecification accumulates over time;
- under the null hypothesis of no treatment effect the fitted models can still imply a non-zero effect, which is the **g-null paradox**.

Let $$\bar{A}_K$$ be a time-varying treatment and $$g$$ be a function with parameter $$\underline{\beta}.$$ A **marginal structural model** (MSM) is a model for the mean potential outcome as a function of the regime.

$$\mathbb{E}\left[Y\left(\bar{a}\right)\right]=g\left(\bar{a};\,\underline{\beta}\right)$$

For example, $$g\left(\bar{a};\,\underline{\beta}\right)=\beta_0+\beta_1\sum_{k=0}^Ka_k$$ models a linear effect of the cumulative treatment. The model is marginal because it does not condition on the time-varying covariates, and structural because it is a model for potential outcomes.

Let $$\bar{A}_K$$ be a time-varying treatment with time-varying covariates $$\bar{L}_K.$$ The **inverse probability of treatment weight** of a unit is the reciprocal of the probability of its observed treatment history given its covariate history, computed as a product over time points.

$$W:=\prod_{k=0}^K\frac{1}{\mathbb{P}\left(A_k\mid\bar{A}_{k-1},\bar{L}_k\right)}$$

The **stabilised weight** replaces each numerator by $$\mathbb{P}\left(A_k\mid\bar{A}_{k-1}\right),$$ which has mean one and reduces the variance.

Let $$\mathbb{E}\left[Y\left(\bar{a}\right)\right]=g\left(\bar{a};\,\underline{\beta}\right)$$ be a marginal structural model and $$W$$ be the inverse probability of treatment weights. **Inverse probability of treatment weighting** (IPTW) is the method that estimates $$\underline{\beta}$$ by fitting the model $$\mathbb{E}\left[Y\mid\bar{A}_K=\bar{a}\right]=g\left(\bar{a};\,\underline{\beta}\right)$$ to the observed data with each unit weighted by $$W.$$ Inverse probability of treatment weighting has the following properties:
- under sequential exchangeability, positivity and consistency the weighted population is a **pseudo-population** in which the treatment at each time point is independent of the covariate history, so the weighted association is the causal effect;
- it requires a correct model for the treatment at each time point but no model for the covariates or the outcome given the covariates;
- it is unstable when some weights are large, which occurs when some treatment histories are nearly deterministic given the covariates;
- it extends to censoring by multiplying by inverse probability of censoring weights.

Let $$\bar{A}_K$$ be a time-varying treatment, $$\bar{0}$$ denote no treatment after time $$k$$ and $$\gamma$$ be a function with parameter $$\underline{\psi}$$ and $$\gamma\left(\cdot;\,\underline{0}\right)=0.$$ A **structural nested mean model** (SNMM) is a model for the effect of the treatment at time $$k,$$ with no treatment thereafter, given the history up to time $$k.$$

$$\mathbb{E}\left[Y\left(\bar{a}_k,\bar{0}\right)-Y\left(\bar{a}_{k-1},0,\bar{0}\right)\mid\bar{A}_k=\bar{a}_k,\bar{L}_k=\bar{l}_k\right]=\gamma\left(\bar{a}_k,\bar{l}_k;\,\underline{\psi}\right)$$

The model is nested because it specifies the effect of each treatment one time point at a time, and it allows the effect at time $$k$$ to depend on the covariate history.

Let $$\gamma\left(\cdot;\,\underline{\psi}\right)$$ be a structural nested mean model. The **g-estimation** method defines, for each candidate $$\underline{\psi},$$ the transformed outcome that removes the modelled effect of all treatments from time $$k$$ onwards,

$$H_k\left(\underline{\psi}\right):=Y-\sum_{j=k}^K\gamma\left(\bar{A}_j,\bar{L}_j;\,\underline{\psi}\right),$$

and estimates $$\underline{\psi}$$ as the value at which $$H_k\left(\underline{\psi}\right)$$ is independent of $$A_k$$ given $$\left(\bar{A}_{k-1},\bar{L}_k\right)$$ for every $$k,$$ which under sequential exchangeability holds at the true value since $$H_k\left(\underline{\psi}\right)$$ then has the mean of $$Y\left(\bar{A}_{k-1},\bar{0}\right).$$ In practice $$\underline{\psi}$$ solves the estimating equation that sets to zero the sample covariance between $$H_k\left(\underline{\psi}\right)$$ and the residual $$A_k-\mathbb{P}\left(A_k=1\mid\bar{A}_{k-1},\bar{L}_k\right).$$ G-estimation has the following properties:
- it requires a model for the treatment at each time point and the structural nested mean model but no model for the outcome given the covariates;
- it is doubly robust when an outcome model is added to the estimating equation;
- it does not suffer from the g-null paradox and is less sensitive to large weights than inverse probability of treatment weighting;
- it estimates effect modification by the covariate history, which marginal structural models cannot.
