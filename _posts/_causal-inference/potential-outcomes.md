---
title:  "Potential Outcomes"
description: "Effects as comparisons of outcomes under different treatments"
---

A **unit** is an object, such as a person, a firm or a time period, to which a treatment can be applied and on which an outcome is measured. A **population** is the set of units under study.

Let $$\mathcal{A}$$ be a set. A **treatment** is a random variable $$A$$ with state space $$\mathcal{A}$$ that records which element of $$\mathcal{A}$$ is applied to a unit. The treatment is **binary** if and only if $$\mathcal{A}=\{0,1\},$$ in which case $$A=1$$ is **treated** and $$A=0$$ is **control**. The treatment is taken to be binary below unless stated otherwise.

An **outcome** is a real-valued random variable $$Y$$ measured on a unit after the treatment is applied.

Let $$A$$ be a treatment with state space $$\mathcal{A}$$ and $$a\in\mathcal{A}.$$ The **potential outcome** $$Y(a)$$ of a unit under treatment $$a$$ is the outcome that would be observed if the unit received treatment $$a.$$ For a binary treatment each unit has two potential outcomes, $$Y(1)$$ and $$Y(0).$$

Let $$A$$ be a treatment and $$Y(a)$$ be the potential outcomes of a unit. **Consistency** is the assumption that the observed outcome is the potential outcome under the treatment actually received.

$$Y=Y(A)=\sum_{a\in\mathcal{A}}\mathbf{1}_{\{A=a\}}Y(a)$$

Let $$A$$ be a binary treatment and $$Y(1),Y(0)$$ be the potential outcomes of a unit. The **counterfactual outcome** of the unit is the potential outcome $$Y(1-A)$$ under the treatment not received.

Let $$Y(1)$$ and $$Y(0)$$ be the potential outcomes of unit $$i.$$ The **individual causal effect** of the treatment on unit $$i$$ is the difference between its two potential outcomes.

$$\tau_i:=Y_i(1)-Y_i(0)$$

The **fundamental problem of causal inference** is the property that at most one potential outcome is observed for each unit, since the unit receives exactly one treatment. The individual causal effect is therefore never observed, and causal inference is a missing data problem in which the counterfactual outcome is the missing value.

Let the population consist of units $$i=1,\ldots,N$$ with treatments $$A_i.$$ **Interference** is the dependence of the potential outcomes of one unit on the treatments received by other units. **No interference** is the assumption that the potential outcomes of unit $$i$$ depend only on $$A_i,$$ so that $$Y_i\left(a_1,\ldots,a_N\right)=Y_i\left(a_i\right).$$

Let $$A$$ be a treatment. **No hidden versions of treatment** is the assumption that each value $$a\in\mathcal{A}$$ corresponds to a single well-defined intervention, so that the potential outcome $$Y(a)$$ is unambiguous.

The **stable unit treatment value assumption** (SUTVA) is the conjunction of no interference and no hidden versions of treatment. Under SUTVA the potential outcomes $$Y_i(a)$$ for $$a\in\mathcal{A}$$ are well defined for every unit and consistency holds.

Let $$\left(Y(1),Y(0)\right)$$ be the potential outcomes of a unit drawn at random from a population. A **causal estimand** is a functional of the joint distribution of the potential outcomes, or of the potential outcomes and covariates, that summarises the effect of the treatment.

Let $$\left(Y(1),Y(0)\right)$$ be the potential outcomes of a unit drawn at random from a population with finite means. The **average treatment effect** (ATE) is the expected individual causal effect.

$$\tau:=\mathbb{E}\left[Y(1)-Y(0)\right]=\mathbb{E}\left[Y(1)\right]-\mathbb{E}\left[Y(0)\right]$$

Let $$A$$ be a binary treatment and $$\left(Y(1),Y(0)\right)$$ be potential outcomes with finite means. The **average treatment effect on the treated** (ATT) is the expected individual causal effect among the treated units, and the **average treatment effect on the controls** (ATC) is the expected individual causal effect among the control units.

$$\tau_{\mathrm{ATT}}:=\mathbb{E}\left[Y(1)-Y(0)\mid A=1\right],\qquad\tau_{\mathrm{ATC}}:=\mathbb{E}\left[Y(1)-Y(0)\mid A=0\right]$$

The average treatment effect is the mixture of the two, $$\tau=\mathbb{P}\left(A=1\right)\tau_{\mathrm{ATT}}+\mathbb{P}\left(A=0\right)\tau_{\mathrm{ATC}}.$$

Let $$\underline{X}$$ be a random vector of **covariates**, variables measured on each unit before treatment, and $$\left(Y(1),Y(0)\right)$$ be potential outcomes with finite means. The **conditional average treatment effect** (CATE) at $$\underline{x}$$ is the expected individual causal effect among units with covariates $$\underline{x}.$$

$$\tau\left(\underline{x}\right):=\mathbb{E}\left[Y(1)-Y(0)\mid\underline{X}=\underline{x}\right]$$

The average treatment effect is the average of the conditional average treatment effect over the covariate distribution, $$\tau=\mathbb{E}\left[\tau\left(\underline{X}\right)\right].$$

Let $$Y$$ be a binary outcome with potential outcomes $$Y(1),Y(0)$$ and $$p_a:=\mathbb{P}\left(Y(a)=1\right).$$ The **causal risk difference** is $$p_1-p_0,$$ the **causal risk ratio** is $$\frac{p_1}{p_0}$$ and the **causal odds ratio** is $$\frac{p_1/\left(1-p_1\right)}{p_0/\left(1-p_0\right)}.$$ The causal risk difference is the average treatment effect for a binary outcome.

Let $$Y(1),Y(0)$$ be potential outcomes with quantile functions $$F^{-1}_{Y(1)}$$ and $$F^{-1}_{Y(0)}$$ and $$u\in\left(0,1\right).$$ The **quantile treatment effect** at $$u$$ is the difference of the $$u$$-quantiles of the two potential outcome distributions.

$$\tau_u:=F^{-1}_{Y(1)}\left(u\right)-F^{-1}_{Y(0)}\left(u\right)$$

The quantile treatment effect compares marginal distributions and is not the quantile of the individual causal effects, whose distribution is not identified from the marginals.

Let the population consist of a fixed finite set of units $$i=1,\ldots,N$$ with fixed potential outcomes. The **sample average treatment effect** (SATE) is the average of the individual causal effects over the units.

$$\tau_{\mathrm{S}}:=\frac{1}{N}\sum_{i=1}^N\left(Y_i(1)-Y_i(0)\right)$$

Let the units be a random sample from a superpopulation. The **population average treatment effect** (PATE) is the average treatment effect $$\tau$$ of the superpopulation. The sample average treatment effect has randomness only from the treatment assignment, whereas the population average treatment effect also has randomness from the sampling of units.

Let $$A$$ be a binary treatment and $$Y$$ be an outcome with finite mean. The **associational difference** is the difference of the conditional means of the observed outcome between the treated and control units.

$$\mathbb{E}\left[Y\mid A=1\right]-\mathbb{E}\left[Y\mid A=0\right]$$

Under consistency the associational difference decomposes as

$$\mathbb{E}\left[Y\mid A=1\right]-\mathbb{E}\left[Y\mid A=0\right]=\tau_{\mathrm{ATT}}+\left(\mathbb{E}\left[Y(0)\mid A=1\right]-\mathbb{E}\left[Y(0)\mid A=0\right]\right).$$

Let $$A$$ be a binary treatment and $$Y(1),Y(0)$$ be potential outcomes. **Selection bias** is the term $$\mathbb{E}\left[Y(0)\mid A=1\right]-\mathbb{E}\left[Y(0)\mid A=0\right],$$ the difference in control potential outcomes between the groups that chose or were assigned different treatments. Association equals the causal effect on the treated if and only if the selection bias is zero.

Let $$A$$ be a treatment and $$Y(a)$$ be the potential outcomes. The treatment is **exchangeable** if and only if the potential outcomes are independent of the treatment received.

$$Y(a)\perp\!\!\!\perp A\,\,\forall\,a\in\mathcal{A}$$

Exchangeability has the following properties:
- under exchangeability and consistency, $$\mathbb{E}\left[Y(a)\right]=\mathbb{E}\left[Y(a)\mid A=a\right]=\mathbb{E}\left[Y\mid A=a\right],$$ so the average treatment effect equals the associational difference;
- under exchangeability the selection bias is zero and $$\tau=\tau_{\mathrm{ATT}}=\tau_{\mathrm{ATC}}.$$

**Confounding** is the dependence between the treatment and the potential outcomes, that is, the failure of exchangeability. Confounding arises when a variable affects both the treatment and the outcome. Association is not causation: a non-zero associational difference can arise from a causal effect, from confounding, or from both.
