---
layout: post
category: "causal-inference"
title:  "Causal Graphs"
tags: ["causal", "inference", "graph", "structural causal model"]
description: "Encoding causal assumptions as directed graphs"
---

Let $$V$$ be a finite set. A **directed graph** on $$V$$ is a pair $$G=\left(V,E\right)$$ where $$E\subseteq V\times V$$ is a set of ordered pairs. The elements of $$V$$ are the **vertices** or **nodes** of $$G$$ and the elements of $$E$$ are its **directed edges**. The edge $$\left(X,Y\right)\in E$$ is written $$X\rightarrow Y.$$

Let $$G=\left(V,E\right)$$ be a directed graph and $$X,Y\in V.$$ The vertex $$X$$ is a **parent** of $$Y,$$ and $$Y$$ is a **child** of $$X,$$ if and only if $$X\rightarrow Y\in E.$$ The set of parents of $$Y$$ is written $$\mathrm{pa}\left(Y\right).$$

Let $$G=\left(V,E\right)$$ be a directed graph. A **path** in $$G$$ is a sequence of distinct vertices $$V_1,\ldots,V_k$$ such that consecutive vertices are joined by an edge in either direction. A **directed path** from $$V_1$$ to $$V_k$$ is a path in which every edge points from $$V_j$$ to $$V_{j+1}.$$ A **directed cycle** is a directed path from a vertex to itself.

Let $$G=\left(V,E\right)$$ be a directed graph and $$X,Y\in V.$$ The vertex $$X$$ is an **ancestor** of $$Y,$$ and $$Y$$ is a **descendant** of $$X,$$ if and only if there is a directed path from $$X$$ to $$Y.$$ The set of descendants of $$X$$ is written $$\mathrm{de}\left(X\right).$$

A **directed acyclic graph** (DAG) is a directed graph with no directed cycles. In a DAG the vertices can be ordered so that every edge points from an earlier vertex to a later one.

Let $$G$$ be a DAG and $$V_{j-1}\rightarrow V_j\rightarrow V_{j+1}$$ or $$V_{j-1}\leftarrow V_j\leftarrow V_{j+1}$$ be consecutive vertices on a path. The vertex $$V_j$$ is a **chain** on the path. Let $$V_{j-1}\leftarrow V_j\rightarrow V_{j+1}$$ be consecutive vertices on a path. The vertex $$V_j$$ is a **fork** on the path. Let $$V_{j-1}\rightarrow V_j\leftarrow V_{j+1}$$ be consecutive vertices on a path. The vertex $$V_j$$ is a **collider** on the path. Every non-endpoint vertex of a path is exactly one of a chain, a fork or a collider on that path.

Let $$V=\left\{V_1,\ldots,V_p\right\}$$ be a set of **endogenous variables**, $$U=\left\{U_1,\ldots,U_p\right\}$$ be a set of **exogenous variables** with a joint probability distribution $$\mathbb{P}_U,$$ and for each $$j$$ let $$\mathrm{pa}_j\subseteq V\setminus\{V_j\}$$ and $$f_j$$ be a function. A **structural causal model** (SCM) is the collection of **structural equations** that determine each endogenous variable from its parents and its exogenous variable, together with $$\mathbb{P}_U.$$

$$V_j:=f_j\left(\mathrm{pa}_j,U_j\right)\,\,\forall\,j=1,\ldots,p$$

The structural equations are assignments rather than algebraic equalities: the left-hand side is determined by the right-hand side and not conversely.

Let $$\mathcal{M}$$ be a structural causal model. The **causal graph** of $$\mathcal{M}$$ is the directed graph on $$V$$ with an edge from each element of $$\mathrm{pa}_j$$ to $$V_j.$$ The model $$\mathcal{M}$$ is **recursive** if and only if its causal graph is a DAG. A recursive structural causal model has the following properties:
- the exogenous variables determine the endogenous variables uniquely, so $$\mathbb{P}_U$$ induces a joint distribution $$\mathbb{P}_V$$ of the endogenous variables, the **observational distribution**;
- if the exogenous variables are mutually independent then the model is **Markovian**, and otherwise it is **semi-Markovian**.

Let $$G$$ be a DAG on $$V=\left\{V_1,\ldots,V_p\right\}$$ and $$\mathbb{P}$$ be a joint distribution of $$V$$ with pmf or pdf $$p.$$ The distribution $$\mathbb{P}$$ is **Markov** with respect to $$G$$ if and only if it factorises into the conditional distributions of each variable given its parents.

$$p\left(v_1,\ldots,v_p\right)=\prod_{j=1}^p p\left(v_j\mid\mathrm{pa}_j\right)$$

The observational distribution of a Markovian structural causal model is Markov with respect to its causal graph.

The **causal Markov condition** is the assumption that every variable is independent of its non-descendants given its parents in the causal graph. The causal Markov condition is equivalent to the Markov factorisation.

Let $$G$$ be a DAG, $$\pi$$ be a path in $$G$$ and $$Z\subseteq V$$ be a set of vertices. The path $$\pi$$ is **blocked** by $$Z$$ if and only if at least one of the following holds:
- $$\pi$$ contains a chain or a fork whose middle vertex is in $$Z;$$
- $$\pi$$ contains a collider such that neither the collider nor any of its descendants is in $$Z.$$

A path that is not blocked by $$Z$$ is **open** given $$Z.$$

Let $$G$$ be a DAG and $$X,Y,Z\subseteq V$$ be disjoint sets of vertices. The sets $$X$$ and $$Y$$ are **d-separated** by $$Z$$ in $$G,$$ written $$X\perp_G Y\mid Z,$$ if and only if every path from a vertex in $$X$$ to a vertex in $$Y$$ is blocked by $$Z.$$

Let $$G$$ be a DAG and $$\mathbb{P}$$ be Markov with respect to $$G.$$ The **global Markov property** states that d-separation implies conditional independence.

$$X\perp_G Y\mid Z\Rightarrow X\perp\!\!\!\perp Y\mid Z$$

The converse need not hold: a distribution can have conditional independences that are not implied by d-separation. Conditioning on a collider, or on a descendant of a collider, opens a path between its parents and can create dependence between variables that are marginally independent.

Let $$\mathcal{M}$$ be a structural causal model, $$X\in V$$ and $$x$$ be a value of $$X.$$ The **intervention** $$\mathrm{do}\left(X=x\right)$$ is the operation that replaces the structural equation of $$X$$ by the constant assignment $$X:=x$$ and leaves every other structural equation and $$\mathbb{P}_U$$ unchanged. The intervened model is written $$\mathcal{M}_{x}$$ and its causal graph is $$G$$ with every edge into $$X$$ removed.

Let $$\mathcal{M}$$ be a structural causal model and $$Y\in V.$$ The **interventional distribution** of $$Y$$ under $$\mathrm{do}\left(X=x\right),$$ written $$\mathbb{P}\left(Y\mid\mathrm{do}\left(X=x\right)\right)$$ or $$p\left(y\mid\mathrm{do}\left(x\right)\right),$$ is the distribution of $$Y$$ in the intervened model $$\mathcal{M}_{x}.$$ Interventional distributions have the following properties:
- conditioning on $$X=x$$ selects the units with $$X=x,$$ whereas intervening with $$\mathrm{do}\left(X=x\right)$$ sets $$X=x$$ for every unit, so $$p\left(y\mid\mathrm{do}\left(x\right)\right)\neq p\left(y\mid x\right)$$ in general;
- the interventional distribution is Markov with respect to the intervened graph;
- the potential outcome $$Y(x)$$ is the value of $$Y$$ in $$\mathcal{M}_x,$$ so $$\mathbb{P}\left(Y(x)=y\right)=p\left(y\mid\mathrm{do}\left(x\right)\right)$$ and $$\mathbb{E}\left[Y(x)\right]=\mathbb{E}\left[Y\mid\mathrm{do}\left(x\right)\right].$$

Let $$\mathcal{M}$$ be a Markovian structural causal model with observational pmf or pdf $$p$$ and $$X=V_k.$$ The **truncated factorisation** states that the interventional distribution of the remaining variables is the Markov factorisation with the factor of $$X$$ removed and $$X$$ fixed at $$x.$$

$$p\left(v\setminus\{v_k\}\mid\mathrm{do}\left(x\right)\right)=\prod_{j\neq k}p\left(v_j\mid\mathrm{pa}_j\right)\Big|_{v_k=x}$$

Let $$\mathcal{M}$$ be a structural causal model, $$X,Y\in V$$ and $$x,x'$$ be values of $$X.$$ The **average causal effect** of changing $$X$$ from $$x'$$ to $$x$$ on $$Y$$ is the difference of the interventional means.

$$\mathbb{E}\left[Y\mid\mathrm{do}\left(X=x\right)\right]-\mathbb{E}\left[Y\mid\mathrm{do}\left(X=x'\right)\right]$$

For a binary treatment $$A$$ this is the average treatment effect $$\mathbb{E}\left[Y(1)\right]-\mathbb{E}\left[Y(0)\right].$$

Let $$\mathcal{M}$$ be a structural causal model with exogenous variables $$U,$$ and $$E$$ be an observed event. The **counterfactual distribution** of $$Y(x)$$ given $$E$$ is the distribution of $$Y$$ in $$\mathcal{M}_x$$ with $$\mathbb{P}_U$$ replaced by the conditional distribution of $$U$$ given $$E.$$ The counterfactual distribution is computed in three steps:
- **abduction**: update the distribution of $$U$$ to its conditional distribution given $$E;$$
- **action**: replace the structural equation of $$X$$ by $$X:=x;$$
- **prediction**: compute the distribution of $$Y$$ in the modified model.

Counterfactual quantities such as $$\mathbb{P}\left(Y(0)=y\mid A=1,Y=y'\right)$$ depend on the structural equations and not only on the interventional distributions.

Let $$G$$ be a causal graph with treatment $$A$$ and outcome $$Y.$$ A **confounder** of $$A$$ and $$Y$$ is a common cause of $$A$$ and $$Y,$$ that is, an ancestor of both. A **mediator** of $$A$$ and $$Y$$ is a vertex on a directed path from $$A$$ to $$Y.$$ A **collider** between $$A$$ and $$Y$$ is a common effect of $$A$$ and $$Y,$$ or of their causes.

Let $$G$$ be a causal graph with treatment $$A$$ and outcome $$Y.$$ A **backdoor path** from $$A$$ to $$Y$$ is a path from $$A$$ to $$Y$$ that starts with an edge into $$A.$$ Backdoor paths carry the association between $$A$$ and $$Y$$ that is not due to the causal effect of $$A$$ on $$Y.$$ Confounding is the presence of an open backdoor path.

**Selection** is conditioning on a variable, by design or by the way the data are collected. **Collider bias** is the spurious association between $$A$$ and $$Y$$ created by selection on a collider or on a descendant of a collider between them. Conditioning on a mediator blocks part of the causal effect, and conditioning on a confounder blocks a backdoor path.
