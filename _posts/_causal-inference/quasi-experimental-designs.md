---
layout: post
category: "causal-inference"
title:  "Quasi-Experimental Designs"
tags: ["causal", "inference", "difference-in-differences", "regression discontinuity"]
description: "Identification from the structure of observational data"
---

A **quasi-experimental design** is a study in which the treatment is not assigned at random but the structure of the data, such as repeated observation over time or assignment by a threshold, supports an identification assumption that replaces ignorability.

Let $$i=1,\ldots,N$$ index units and $$t=1,\ldots,T$$ index time periods. **Panel data** or **longitudinal data** are observations $$\left(A_{it},Y_{it}\right)$$ of the treatment and the outcome of each unit in each period.

Let $$\left(A_{it},Y_{it}\right)$$ be panel data. The **two-way fixed effects model** is the linear model in which the outcome is the sum of a **unit fixed effect** $$\alpha_i,$$ a **time fixed effect** $$\lambda_t,$$ a constant treatment effect and an error.

$$Y_{it}=\alpha_i+\lambda_t+\tau A_{it}+\varepsilon_{it}$$

The unit fixed effects absorb all confounders that are constant over time within a unit, and the time fixed effects absorb all shocks that are common to every unit in a period.

Let $$Y_{it}=\alpha_i+\lambda_t+\tau A_{it}+\varepsilon_{it}$$ be a two-way fixed effects model. **Strict exogeneity** is the assumption that the error in every period is mean independent of the treatments in every period given the fixed effects.

$$\mathbb{E}\left[\varepsilon_{it}\mid A_{i1},\ldots,A_{iT},\alpha_i,\lambda_t\right]=0$$

Let $$Y_{it}=\alpha_i+\lambda_t+\tau A_{it}+\varepsilon_{it}$$ be a two-way fixed effects model. The **within transformation** subtracts from each variable its unit mean and its time mean and adds back the grand mean, which removes the fixed effects. The **fixed effects estimator** is the least squares estimator of $$\tau$$ on the transformed variables, which equals the least squares estimator with indicator variables for every unit and period. Under strict exogeneity the fixed effects estimator is unbiased.

Let there be two groups, a treated group $$G=1$$ that receives the treatment between periods $$t=0$$ and $$t=1$$ and a control group $$G=0$$ that never receives it, with potential outcomes $$Y_t(a).$$ **Parallel trends** is the assumption that, in the absence of treatment, the mean outcome of the treated group would have changed by the same amount as that of the control group.

$$\mathbb{E}\left[Y_1(0)-Y_0(0)\mid G=1\right]=\mathbb{E}\left[Y_1(0)-Y_0(0)\mid G=0\right]$$

Parallel trends allows the groups to differ in level but not in trend, and it is not invariant to non-linear transformations of the outcome.

Let there be two groups and two periods with parallel trends and no anticipation, so that $$Y_0=Y_0(0)$$ for both groups. **Difference-in-differences** (DiD) is the design that identifies the average treatment effect on the treated in the post-treatment period by subtracting the change in the control group from the change in the treated group.

$$\tau_{\mathrm{ATT}}=\left(\mathbb{E}\left[Y_1\mid G=1\right]-\mathbb{E}\left[Y_0\mid G=1\right]\right)-\left(\mathbb{E}\left[Y_1\mid G=0\right]-\mathbb{E}\left[Y_0\mid G=0\right]\right)$$

Let $$\overline{Y}_{gt}$$ be the sample mean outcome in group $$g$$ and period $$t.$$ The **difference-in-differences estimator** is the difference of the sample changes.

$$\hat{\tau}_{\mathrm{DiD}}:=\left(\overline{Y}_{11}-\overline{Y}_{10}\right)-\left(\overline{Y}_{01}-\overline{Y}_{00}\right)$$

The difference-in-differences estimator has the following properties:
- it is the least squares coefficient $$\tau$$ on the interaction in the regression $$Y_{it}=\alpha+\beta G_i+\gamma T_t+\tau\left(G_i\times T_t\right)+\varepsilon_{it}$$ where $$T_t$$ indicates the post-treatment period;
- with two groups and two periods it coincides with the two-way fixed effects estimator;
- standard errors must allow for correlation of the errors within units or groups over time, by clustering at the level at which the treatment varies;
- covariates can be included to make parallel trends plausible conditionally, or to weight the control group so that its covariate distribution matches the treated group.

Let the treated group receive the treatment at period $$t_0$$ and be observed in periods before and after it. An **event study** is the two-way fixed effects regression with a separate coefficient for each period relative to the treatment date.

$$Y_{it}=\alpha_i+\lambda_t+\sum_{k\neq -1}\tau_k\,\mathbf{1}_{\{t-t_0=k\}}G_i+\varepsilon_{it}$$

The coefficients $$\tau_k$$ for $$k<0$$ are the **leads** and those for $$k\geq 0$$ are the **lags**, with $$k=-1$$ as the reference period. The event study has the following properties:
- the lags estimate the **dynamic treatment effects** at each horizon after treatment;
- the leads should be zero under parallel trends and no anticipation, so non-zero leads are evidence against the design, although a **pre-trend test** with low power does not establish parallel trends.

Let units adopt the treatment at different periods $$t_i^*,$$ with some never adopting. **Staggered adoption** is the design in which the treatment is absorbing and its timing varies across units. Staggered adoption has the following properties:
- the two-way fixed effects estimator is a weighted average of all two-group two-period difference-in-differences comparisons in the data, including comparisons that use already-treated units as controls;
- when treatment effects vary across adoption groups or over time since adoption, the comparisons using already-treated controls receive weights that can be negative, so the two-way fixed effects estimator can have the wrong sign even when every group effect is positive.

Let $$g$$ index adoption groups by their adoption period. The **group-time average treatment effect** is the average treatment effect on the units of group $$g$$ in period $$t.$$

$$\tau\left(g,t\right):=\mathbb{E}\left[Y_t(1)-Y_t(0)\mid t_i^*=g\right]$$

Under parallel trends between each group and the never-treated or not-yet-treated units, $$\tau\left(g,t\right)$$ is identified by a two-group two-period difference-in-differences that uses only valid controls, and summaries such as the average effect by time since adoption are weighted averages of the $$\tau\left(g,t\right).$$

Let $$X$$ be a real-valued **running variable**, $$c$$ be a **cutoff** and the treatment be assigned by whether the running variable exceeds the cutoff. A **sharp regression discontinuity design** is the design in which $$A=\mathbf{1}_{\{X\geq c\}},$$ so that the treatment is a deterministic function of the running variable.

Let $$X$$ be a running variable with cutoff $$c$$ and $$Y(a)$$ be the potential outcomes. **Continuity** is the assumption that the conditional mean potential outcomes are continuous in the running variable at the cutoff.

$$\lim_{x\rightarrow c^-}\mathbb{E}\left[Y(a)\mid X=x\right]=\lim_{x\rightarrow c^+}\mathbb{E}\left[Y(a)\mid X=x\right]\,\,\forall\,a\in\{0,1\}$$

Continuity holds when units cannot precisely manipulate their running variable, so that units just below and just above the cutoff are comparable in everything but the treatment.

Let $$X$$ be a running variable with cutoff $$c$$ in a sharp regression discontinuity design under continuity. The average treatment effect at the cutoff is identified by the jump in the conditional mean outcome at the cutoff.

$$\tau_{\mathrm{RD}}:=\mathbb{E}\left[Y(1)-Y(0)\mid X=c\right]=\lim_{x\rightarrow c^+}\mathbb{E}\left[Y\mid X=x\right]-\lim_{x\rightarrow c^-}\mathbb{E}\left[Y\mid X=x\right]$$

Let $$h>0$$ be a **bandwidth** and $$K$$ be a kernel function. The **local linear estimator** of the regression discontinuity effect fits separate weighted linear regressions of $$Y$$ on $$X-c$$ on each side of the cutoff using the units with $$\lvert X-c\rvert\leq h$$ and weights $$K\left(\frac{X-c}{h}\right),$$ and takes the difference of their intercepts. The regression discontinuity design has the following properties:
- the effect is identified only at the cutoff and extrapolates to other values of the running variable only under further assumptions;
- the bandwidth trades off bias from curvature of the conditional mean against variance from using few units, and is chosen to minimise the asymptotic mean squared error;
- a discontinuity in the density of the running variable at the cutoff is evidence of manipulation, and discontinuities in the covariates at the cutoff are evidence against continuity.

Let $$X$$ be a running variable with cutoff $$c.$$ A **fuzzy regression discontinuity design** is the design in which crossing the cutoff changes the probability of treatment without determining it, so that $$\mathbb{P}\left(A=1\mid X=x\right)$$ jumps at $$c$$ but not from $$0$$ to $$1.$$ In a fuzzy design the indicator $$\mathbf{1}_{\{X\geq c\}}$$ is an instrument for the treatment at the cutoff, and the local average treatment effect for the compliers at the cutoff is identified by the ratio of the jumps.

$$\tau_{\mathrm{FRD}}:=\frac{\lim_{x\rightarrow c^+}\mathbb{E}\left[Y\mid X=x\right]-\lim_{x\rightarrow c^-}\mathbb{E}\left[Y\mid X=x\right]}{\lim_{x\rightarrow c^+}\mathbb{E}\left[A\mid X=x\right]-\lim_{x\rightarrow c^-}\mathbb{E}\left[A\mid X=x\right]}$$

Let unit $$1$$ be a single treated unit observed over periods $$t=1,\ldots,T,$$ treated from period $$T_0+1,$$ and units $$2,\ldots,J+1$$ be untreated **donor units**. A **synthetic control** for unit $$1$$ is a weighted average of the donor units with non-negative weights that sum to one.

$$\underline{w}\in\mathbb{R}^J,\qquad w_j\geq 0,\qquad\sum_{j=2}^{J+1}w_j=1$$

Let $$\underline{Y}_j^{\mathrm{pre}}=\left(Y_{j1},\ldots,Y_{jT_0}\right)$$ be the pre-treatment outcomes of unit $$j$$ and $$\underline{Z}_j$$ be its pre-treatment covariates. The **synthetic control weights** are the weights that minimise the distance between the treated unit and its synthetic control in the pre-treatment period.

$$\hat{\underline{w}}:=\operatorname*{arg\,min}_{\underline{w}}\left\lVert\left(\underline{Y}_1^{\mathrm{pre}},\underline{Z}_1\right)-\sum_{j=2}^{J+1}w_j\left(\underline{Y}_j^{\mathrm{pre}},\underline{Z}_j\right)\right\rVert_{V}$$

Here $$\lVert\cdot\rVert_V$$ is a weighted norm whose weights $$V$$ reflect the predictive importance of each pre-treatment variable.

Let $$\hat{\underline{w}}$$ be synthetic control weights. The **synthetic control estimator** of the treatment effect on the treated unit in post-treatment period $$t>T_0$$ is the difference between the treated unit's outcome and that of its synthetic control.

$$\hat{\tau}_{1t}:=Y_{1t}-\sum_{j=2}^{J+1}\hat{w}_jY_{jt}$$

The synthetic control estimator has the following properties:
- the non-negativity and sum constraints restrict the synthetic control to the convex hull of the donors, which prevents extrapolation and makes the weights sparse and interpretable;
- the estimator is unbiased under a linear factor model for the outcomes when the pre-treatment fit is exact and $$T_0$$ is large;
- a poor pre-treatment fit indicates that no convex combination of donors reproduces the treated unit and the estimator should not be used;
- inference is by **placebo tests**, which apply the method to each donor unit in turn and compare the treated unit's post-treatment gap, relative to its pre-treatment gap, with the distribution of placebo gaps.
