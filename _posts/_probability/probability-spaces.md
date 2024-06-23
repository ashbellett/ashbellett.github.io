---
layout: post
category: "probability"
title:  "Probability Spaces"
tags: ["probability", "probability space"]
description: "Model for assigning probabilities to events"
---

Given an experiment described by the measurable space $$\left(\Omega, \mathcal{F}\right)$$ where $$\Omega$$ is the sample space and $$\mathcal{F}$$ is a $$\sigma$$-algebra on $$\Omega,$$ the **marginal probability** that an event $$A\in\mathcal{F}$$ will occur is $$\mathbb{P}(A).$$ The **probability measure** $$\mathbb{P}$$ is a function $$\mathbb{P}: \mathcal{F} \rightarrow \mathbb{R}$$ that maps events from $$\mathcal{F}$$ to real numbers and satisfies the following properties:
- For an event $$A,$$ $$\mathbb{P}\left(A\right)\geq 0 \,\, \forall \, A\in\mathcal{F}$$
- $$\mathbb{P}\left(\varnothing\right)=0,$$ $$\mathbb{P}\left(\Omega\right)=1$$
- if $$E_1, E_2, \ldots$$ are disjoint events in $$\mathcal{F}$$ then

$$\mathbb{P}\left(\bigcup_{i=1}^\infty E_i\right)=\sum_{i=1}^\infty \mathbb{P}\left(E_i\right).$$

The triple $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ containing a sample space $$\Omega,$$ a $$\sigma$$-algebra $$\mathcal{F}$$ on $$\Omega$$ and a probability measure $$\mathbb{P}$$ on $$\left(\Omega,\mathcal{F}\right)$$ is a **probability space** and has the following properties for events $$A,B\subseteq\Omega$$:

$$\mathbb{P}(\overline{A})=1-\mathbb{P}\left(A\right)$$

$$\mathrm{if}\,\,A\subseteq B\subseteq\Omega\,\,\mathrm{then}\,\,\mathbb{P}\left(A\right)\leq\mathbb{P}\left(B\right)$$

$$\mathbb{P}\left(A\cup B\right)=\mathbb{P}\left(A\right)+\mathbb{P}\left(B\right)-\mathbb{P}\left(A\cap B\right)$$

$$\mathbb{P}\left(A\cap\overline{B}\right)=\mathbb{P}\left(A\right)-\mathbb{P}\left(A\cap B\right)$$

$$\mathbb{P}\left(A\cup B\right)\leq\mathbb{P}\left(A\right)+\mathbb{P}\left(B\right)$$

$$\mathbb{P}\left(A\cap B\right)\geq\mathbb{P}\left(A\right)+\mathbb{P}\left(B\right)-1.$$

The **joint probability** of the finite collection of $$k>1$$ events $$E_1,\ldots,E_k\subseteq\Omega$$ is the probability of the intersection of events $$E_1,\ldots,E_k$$:

$$\mathbb{P}\left(\bigcap_{i=1}^k E_i\right).$$

Events $$A,B\subseteq\Omega$$ are **independent events** if and only if their joint probability is the product of their marginal probabilities, $$\mathbb{P}\left(A\cap B\right)=\mathbb{P}\left(A\right)\,\mathbb{P}\left(B\right).$$ Disjoint events with non-zero probability of occurring are not independent events.

Independence implies that the occurrence of one event does not affect the probability of another event occurring.

A finite collection of $$k>2$$ events $$E_1, \ldots, E_k$$ are **pairwise independent** if $$E_i$$ and $$E_j$$ are independent for every pair of events $$E_i, E_j\in \left(E_1,E_2,\ldots,E_k\right)$$:

$$\mathbb{P}\left(E_i\cap E_j\right)=\mathbb{P}\left(E_i\right)\,\mathbb{P}\left(E_j\right)\,\,\forall\,i,j\in \left(1,2,\ldots,k\right),\,i\neq j.$$

A finite collection of $$k>2$$ events $$E_1, \ldots, E_k$$ are **mutually independent** if, for every subset of events in the collection, the probability of their intersection is the product of their probabilities. For $$l\leq k$$ and indices $$1\leq i_1,\ldots,i_l\leq k$$:

$$\mathbb{P}\left(\bigcap_{j=1}^l E_{i_j}\right)=\prod_{j=1}^l\mathbb{P}\left(E_{i_j}\right).$$

Mutual independence implies pairwise independence, but pairwise independence does not imply mutual independence.
