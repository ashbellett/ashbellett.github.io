---
title:  "Instrumental Variables"
description: "Identifying effects through variation that affects only the treatment"
---

Let $$A$$ be a treatment, $$Y$$ be an outcome with potential outcomes $$Y(a)$$ and $$U$$ be an unobserved confounder of $$A$$ and $$Y.$$ When $$U$$ is unobserved the treatment is not ignorable given the observed covariates, and the adjustment formula does not identify the causal effect.

Let $$A$$ be a treatment and $$Y$$ be an outcome. An **instrument** for the effect of $$A$$ on $$Y$$ is a random variable $$Z$$ that satisfies the following assumptions:
- **relevance**: $$Z$$ is associated with $$A,$$ so that $$\mathrm{cov}\left[Z,A\right]\neq 0;$$
- **exclusion restriction**: $$Z$$ affects $$Y$$ only through $$A,$$ so that the potential outcome $$Y(a,z)$$ under treatment $$a$$ and instrument $$z$$ does not depend on $$z$$ and is written $$Y(a);$$
- **independence** or **instrument exogeneity**: $$Z$$ is independent of the potential outcomes and potential treatments, $$Z\perp\!\!\!\perp\left(Y(a),A(z)\right)$$ for all $$a,z,$$ possibly given covariates.

In the causal graph an instrument is a vertex with an edge into $$A,$$ no other directed path to $$Y$$ and no open backdoor path to $$Y.$$ Relevance is testable from the data, whereas the exclusion restriction and independence are not.

Let $$Z$$ be an instrument for the effect of $$A$$ on $$Y.$$ The **linear structural model** is the structural equation for $$Y$$ with a constant treatment effect and an error term correlated with $$A$$ but uncorrelated with $$Z.$$

$$Y=\alpha+\beta A+U,\qquad\mathrm{cov}\left[Z,U\right]=0,\qquad\mathrm{cov}\left[A,U\right]\neq 0$$

Under the linear structural model the treatment effect is identified by the ratio of covariances, since $$\mathrm{cov}\left[Z,Y\right]=\beta\,\mathrm{cov}\left[Z,A\right].$$

$$\beta=\frac{\mathrm{cov}\left[Z,Y\right]}{\mathrm{cov}\left[Z,A\right]}$$

Least squares regression of $$Y$$ on $$A$$ estimates $$\beta+\frac{\mathrm{cov}\left[A,U\right]}{\mathrm{var}\left[A\right]}$$ rather than $$\beta,$$ and the difference is the **endogeneity bias**.

Let $$Z$$ be a binary instrument for the effect of $$A$$ on $$Y.$$ The **Wald estimator** of the treatment effect is the ratio of the difference in mean outcomes to the difference in mean treatments between the two instrument values.

$$\hat{\beta}_{\mathrm{W}}:=\frac{\overline{Y}_{Z=1}-\overline{Y}_{Z=0}}{\overline{A}_{Z=1}-\overline{A}_{Z=0}}$$

The Wald estimator is the sample analogue of the ratio of covariances for a binary instrument.

Let $$\underline{a}\in\mathbb{R}^n$$ be the vector of treatments, $$\underline{y}\in\mathbb{R}^n$$ be the vector of outcomes, $$Z\in\mathbb{R}^{\,n\times q}$$ be the matrix of $$q\geq 1$$ instruments and exogenous covariates, $$X\in\mathbb{R}^{\,n\times p}$$ be the matrix of the treatment and exogenous covariates with $$p\leq q,$$ and $$P_Z:=Z\left(Z^\intercal Z\right)^{-1}Z^\intercal$$ be the projection onto the column space of $$Z.$$ **Two-stage least squares** (2SLS) is the method that regresses $$X$$ on $$Z$$ in a **first stage**, then regresses $$\underline{y}$$ on the fitted values $$\hat{X}=P_ZX$$ in a **second stage**.

$$\hat{\underline{\beta}}_{\mathrm{2SLS}}:=\left(X^\intercal P_ZX\right)^{-1}X^\intercal P_Z\underline{y}$$

Two-stage least squares has the following properties:
- with one instrument and one treatment it equals the ratio of covariances, and with a binary instrument it equals the Wald estimator;
- it is consistent and asymptotically normal under relevance and exogeneity, but biased in finite samples towards the least squares estimator;
- the standard errors must be computed from the second-stage residuals $$\underline{y}-X\hat{\underline{\beta}},$$ not from $$\underline{y}-\hat{X}\hat{\underline{\beta}};$$
- the model is **just identified** if $$p=q$$ and **overidentified** if $$p<q.$$

Let $$Z$$ be a binary instrument and $$A$$ be a binary treatment with potential treatments $$A(1),A(0)$$ under the two instrument values. The **compliance type** of a unit is the pair $$\left(A(0),A(1)\right),$$ which takes one of four values:
- **always-takers** have $$A(0)=A(1)=1;$$
- **never-takers** have $$A(0)=A(1)=0;$$
- **compliers** have $$A(0)=0$$ and $$A(1)=1;$$
- **defiers** have $$A(0)=1$$ and $$A(1)=0.$$

The compliance type is not observed, since only one potential treatment is observed for each unit.

Let $$Z$$ be a binary instrument and $$A$$ be a binary treatment. **Monotonicity** is the assumption that the instrument does not decrease the treatment for any unit, so that there are no defiers.

$$A(1)\geq A(0)$$

Let $$Z$$ be a binary instrument and $$A$$ be a binary treatment. The **intention-to-treat effect** is the average effect of the instrument on the outcome, $$\mathbb{E}\left[Y\mid Z=1\right]-\mathbb{E}\left[Y\mid Z=0\right],$$ and the **first-stage effect** is the average effect of the instrument on the treatment, $$\mathbb{E}\left[A\mid Z=1\right]-\mathbb{E}\left[A\mid Z=0\right].$$ Under independence the first-stage effect is the proportion of compliers when monotonicity holds.

Let $$Z$$ be a binary instrument and $$A$$ be a binary treatment. The **local average treatment effect** (LATE) or **complier average causal effect** is the average treatment effect among the compliers.

$$\tau_{\mathrm{LATE}}:=\mathbb{E}\left[Y(1)-Y(0)\mid A(1)=1,A(0)=0\right]$$

Let $$Z$$ be a binary instrument satisfying relevance, the exclusion restriction, independence and monotonicity. The **LATE theorem** states that the local average treatment effect is identified by the ratio of the intention-to-treat effect to the first-stage effect.

$$\tau_{\mathrm{LATE}}=\frac{\mathbb{E}\left[Y\mid Z=1\right]-\mathbb{E}\left[Y\mid Z=0\right]}{\mathbb{E}\left[A\mid Z=1\right]-\mathbb{E}\left[A\mid Z=0\right]}$$

The LATE theorem has the following properties:
- the Wald estimator is a consistent estimator of the local average treatment effect without assuming a constant treatment effect;
- the always-takers and never-takers contribute nothing to the numerator, since the instrument does not change their treatment, and monotonicity removes the defiers, whose contribution would enter with the opposite sign;
- the local average treatment effect is specific to the instrument, since different instruments have different compliers, and it equals the average treatment effect only under additional assumptions such as a constant treatment effect;
- the distributions of $$Y(1)$$ and $$Y(0)$$ among the compliers are also identified.

Let $$Z$$ be an instrument for the effect of $$A$$ on $$Y.$$ The instrument is **weak** if and only if its association with the treatment is small relative to the sampling variability of the first stage. The **first-stage $$F$$-statistic** is the $$F$$-statistic for the hypothesis that the instruments have zero coefficients in the first-stage regression. Weak instruments have the following properties:
- the two-stage least squares estimator is biased towards the least squares estimator, with bias approximately $$\frac{1}{F}$$ of the endogeneity bias;
- the normal approximation to its sampling distribution fails and confidence intervals undercover;
- a first-stage $$F$$-statistic below about $$10$$ is the conventional indication of a weak instrument.

Let $$Z$$ be an instrument for the effect of $$A$$ on $$Y$$ under the linear structural model and $$\beta_0$$ be a hypothesised value. The **Anderson–Rubin test** of $$H_0:\beta=\beta_0$$ is the test of whether $$Z$$ has zero coefficient in the regression of $$Y-\beta_0A$$ on $$Z.$$ The Anderson–Rubin test is valid whatever the strength of the instrument, and inverting it gives a confidence set for $$\beta$$ that may be unbounded when the instrument is weak.

Let the linear structural model be overidentified with $$q>p$$ and $$\hat{\underline{u}}$$ be the two-stage least squares residuals. The **Sargan–Hansen test** or **$$J$$-test** of overidentifying restrictions is the test of the hypothesis that all instruments are exogenous, with statistic $$J=n\,R^2$$ from the regression of $$\hat{\underline{u}}$$ on $$Z,$$ which has an approximate $$\chi^2_{q-p}$$ distribution under the null hypothesis. The $$J$$-test can detect that some instruments are invalid but cannot identify which, and it has no power when all instruments are invalid in the same way.
