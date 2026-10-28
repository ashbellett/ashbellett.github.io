---
layout: post
category: "causal-inference"
title:  "Identification"
tags: ["causal", "inference", "identification"]
description: "When causal effects can be computed from observed data"
---

Let $$\mathbb{P}$$ be the observational distribution of the observed variables and $$\psi$$ be a causal estimand. The estimand $$\psi$$ is **identified** under a set of assumptions if and only if it is a function of $$\mathbb{P}$$ alone, so that two models satisfying the assumptions with the same observational distribution have the same value of $$\psi.$$ An **identification formula** for $$\psi$$ is an expression for $$\psi$$ in terms of $$\mathbb{P}.$$ Identification is the step between the causal estimand and its estimation from data.

Let $$A$$ be a treatment and $$Y(a)$$ be the potential outcomes. A **randomised experiment** is a study in which the treatment is assigned by a random mechanism that does not depend on the units, such as a coin flip. In a randomised experiment the treatment is exchangeable, $$Y(a)\perp\!\!\!\perp A$$ for all $$a,$$ so under consistency the mean potential outcomes are identified.

$$\mathbb{E}\left[Y(a)\right]=\mathbb{E}\left[Y\mid A=a\right]$$

Let $$A$$ be a treatment, $$\underline{X}$$ be covariates and $$Y(a)$$ be the potential outcomes. A **conditionally randomised experiment** is a study in which the treatment is assigned at random with a probability that depends on the covariates. In a conditionally randomised experiment the treatment is exchangeable within each level of the covariates.

Let $$A$$ be a treatment, $$\underline{X}$$ be covariates and $$Y(a)$$ be the potential outcomes. **Ignorability**, also called **conditional exchangeability** or **unconfoundedness**, is the assumption that the potential outcomes are independent of the treatment given the covariates.

$$Y(a)\perp\!\!\!\perp A\mid\underline{X}\,\,\forall\,a\in\mathcal{A}$$

Let $$A$$ be a treatment and $$\underline{X}$$ be covariates. **Positivity** or **overlap** is the assumption that every treatment has positive probability at every covariate value that occurs.

$$0<\mathbb{P}\left(A=a\mid\underline{X}=\underline{x}\right)<1\,\,\forall\,a\in\mathcal{A},\,\underline{x}\,\,\mathrm{with}\,\,p\left(\underline{x}\right)>0$$

Let $$A$$ be a treatment, $$\underline{X}$$ be covariates and $$Y$$ be an outcome with potential outcomes $$Y(a).$$ Under consistency, ignorability and positivity the mean potential outcome is identified by the **adjustment formula** or **g-formula**, which averages the conditional mean outcome among the units treated with $$a$$ over the marginal covariate distribution.

$$\mathbb{E}\left[Y(a)\right]=\mathbb{E}\left[\mathbb{E}\left[Y\mid A=a,\underline{X}\right]\right]=\int\mathbb{E}\left[Y\mid A=a,\underline{X}=\underline{x}\right]p\left(\underline{x}\right)d\underline{x}$$

The adjustment formula follows from $$\mathbb{E}\left[Y(a)\mid\underline{X}\right]=\mathbb{E}\left[Y(a)\mid A=a,\underline{X}\right]=\mathbb{E}\left[Y\mid A=a,\underline{X}\right],$$ where the first equality is ignorability and the second is consistency, and positivity makes the conditional mean well defined. The average treatment effect is then identified.

$$\tau=\mathbb{E}\left[\mathbb{E}\left[Y\mid A=1,\underline{X}\right]-\mathbb{E}\left[Y\mid A=0,\underline{X}\right]\right]$$

Let $$G$$ be a causal graph with treatment $$A$$ and outcome $$Y,$$ and $$Z$$ be a set of observed vertices. The set $$Z$$ satisfies the **backdoor criterion** relative to $$\left(A,Y\right)$$ if and only if:
- no vertex in $$Z$$ is a descendant of $$A;$$
- $$Z$$ blocks every backdoor path from $$A$$ to $$Y.$$

Let $$G$$ be a causal graph with treatment $$A$$ and outcome $$Y,$$ and $$Z$$ satisfy the backdoor criterion relative to $$\left(A,Y\right).$$ **Backdoor adjustment** states that the interventional distribution of $$Y$$ is identified by adjusting for $$Z.$$

$$p\left(y\mid\mathrm{do}\left(a\right)\right)=\sum_{z}p\left(y\mid a,z\right)p\left(z\right)$$

Backdoor adjustment has the following properties:
- a set satisfying the backdoor criterion makes the treatment ignorable given $$Z,$$ so the adjustment formula with $$\underline{X}=Z$$ applies;
- the set of all non-descendants of $$A$$ that are parents of $$A$$ satisfies the backdoor criterion when all parents of $$A$$ are observed;
- adjusting for a descendant of $$A,$$ such as a mediator or a collider, can introduce bias even when adjusting for a confounder removes it.

Let $$G$$ be a causal graph with treatment $$A$$ and outcome $$Y,$$ and $$M$$ be a set of observed vertices. The set $$M$$ satisfies the **front-door criterion** relative to $$\left(A,Y\right)$$ if and only if:
- $$M$$ intercepts every directed path from $$A$$ to $$Y;$$
- there is no open backdoor path from $$A$$ to $$M;$$
- every backdoor path from $$M$$ to $$Y$$ is blocked by $$A.$$

Let $$G$$ be a causal graph with treatment $$A$$ and outcome $$Y,$$ and $$M$$ satisfy the front-door criterion relative to $$\left(A,Y\right)$$ with $$p\left(a,m\right)>0.$$ **Front-door adjustment** states that the interventional distribution of $$Y$$ is identified through the mediator even when $$A$$ and $$Y$$ share an unobserved confounder.

$$p\left(y\mid\mathrm{do}\left(a\right)\right)=\sum_{m}p\left(m\mid a\right)\sum_{a'}p\left(y\mid a',m\right)p\left(a'\right)$$

The front-door formula composes the effect of $$A$$ on $$M,$$ which is identified because there is no confounding of $$A$$ and $$M,$$ with the effect of $$M$$ on $$Y,$$ which is identified by backdoor adjustment for $$A.$$

Let $$G$$ be a causal graph and $$X,Y,Z,W$$ be disjoint sets of vertices. Let $$G_{\overline{X}}$$ be $$G$$ with all edges into $$X$$ removed, $$G_{\underline{X}}$$ be $$G$$ with all edges out of $$X$$ removed and $$Z(W)$$ be the vertices of $$Z$$ that are not ancestors of $$W$$ in $$G_{\overline{X}}.$$ The **do-calculus** is the following three rules for transforming interventional distributions:
- **insertion and deletion of observations**: $$p\left(y\mid\mathrm{do}\left(x\right),z,w\right)=p\left(y\mid\mathrm{do}\left(x\right),w\right)$$ if $$Y\perp_{G_{\overline{X}}}Z\mid X,W;$$
- **exchange of actions and observations**: $$p\left(y\mid\mathrm{do}\left(x\right),\mathrm{do}\left(z\right),w\right)=p\left(y\mid\mathrm{do}\left(x\right),z,w\right)$$ if $$Y\perp_{G_{\overline{X}\underline{Z}}}Z\mid X,W;$$
- **insertion and deletion of actions**: $$p\left(y\mid\mathrm{do}\left(x\right),\mathrm{do}\left(z\right),w\right)=p\left(y\mid\mathrm{do}\left(x\right),w\right)$$ if $$Y\perp_{G_{\overline{X}\,\overline{Z(W)}}}Z\mid X,W.$$

The do-calculus has the following properties:
- each rule is sound: it holds for every structural causal model with causal graph $$G;$$
- the rules are complete: an interventional distribution is identified from the observational distribution and $$G$$ if and only if it can be reduced to an expression without the do-operator by repeated application of the rules and the rules of probability;
- backdoor and front-door adjustment are consequences of the do-calculus.

Let $$A$$ be a binary treatment and $$Y$$ be an outcome bounded in $$\left[0,1\right].$$ Without ignorability the mean potential outcome is not identified, since the data carry no information about $$Y(1)$$ for the control units. Under consistency alone the mean potential outcome is bounded by replacing the unobserved potential outcomes with the extremes of the outcome range.

$$\mathbb{E}\left[YA\right]\leq\mathbb{E}\left[Y(1)\right]\leq\mathbb{E}\left[YA\right]+\mathbb{P}\left(A=0\right)$$

The corresponding bounds for $$\mathbb{E}\left[Y(0)\right]$$ give bounds on the average treatment effect of width one, which always contain zero.

Let $$\psi$$ be a causal estimand that is not identified under a set of assumptions. The **identified set** of $$\psi$$ is the set of values of $$\psi$$ that are consistent with the observational distribution and the assumptions. **Partial identification** is the derivation of the identified set, or of bounds that contain it. The bounds above are the identified set of the mean potential outcome under consistency alone, and stronger assumptions, such as monotonicity of the treatment effect or restrictions on selection, shrink the identified set.
