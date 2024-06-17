---
layout: post
category: "Probability"
title:  "Probability Spaces"
tags: ["probability", "probability space"]
description: "Model for assigning probabilities"
---

For an event $$A\subseteq\Omega$$ the **probability** that $$A$$ occurs is $$\mathbb{P}(A)$$. The **probability measure** $$\mathbb{P}$$ is a function $$\mathbb{P}: \mathcal{F} \rightarrow \left[ 0,1\right]$$ that maps events to real numbers and satisfies the following properties:
- $$\mathbb{P}\left(\varnothing\right)=0$$, $$\mathbb{P}\left(\Omega\right)=1$$
- For an event $$A$$, $$\mathbb{P}\left(A\right)\geq 0 \,\, \forall \, A\in\mathcal{F}$$
- if $$E_1, E_2, \dots$$ are disjoint events in $$\mathcal{F}$$ then

$$\mathbb{P}\left(\bigcup_{i=1}^\infty E_i\right)=\sum_{i=1}^\infty \mathbb{P}\left(E_i\right)$$

The triple $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ containing a sample space $$\Omega$$, a $$\sigma$$-algebra $$\mathcal{F}$$ on $$\Omega$$ and a probability measure $$\mathbb{P}$$ on $$\left(\Omega,\mathcal{F}\right)$$ is a **probability space** and has the following properties for events $$A,B\subseteq\Omega$$:

$$\mathbb{P}(\overline{A})=1-\mathbb{P}\left(A\right)$$

$$\mathrm{if}\,\,A\subseteq B\subseteq\Omega\,\,\mathrm{then}\,\,\mathbb{P}\left(A\right)\leq\mathbb{P}\left(B\right)$$

$$\mathbb{P}\left(A\cup B\right)=\mathbb{P}\left(A\right)+\mathbb{P}\left(B\right)-\mathbb{P}\left(A\cap B\right)$$

$$\mathbb{P}\left(A\cap\overline{B}\right)=\mathbb{P}\left(A\right)-\mathbb{P}\left(A\cap B\right)$$

$$\mathbb{P}\left(A\cup B\right)\leq\mathbb{P}\left(A\right)+\mathbb{P}\left(B\right)$$

$$\mathbb{P}\left(A\cap B\right)\geq\mathbb{P}\left(A\right)+\mathbb{P}\left(B\right)-1$$

Events $$A$$ and $$B$$ are **independent events** if and only if $$\mathbb{P}\left(A\cap B\right)=\mathbb{P}\left(A\right)\,\mathbb{P}\left(B\right)$$. Disjoint events with non-zero probability of occurring are not independent events.

A finite collection of $$k>2$$ events $$E_1, \dots, E_k$$ are **pairwise independent** if $$E_i$$ and $$E_j$$ are independent for every pair of events $$E_i, E_j\in \left(E_,1,\dots,E_k\right)$$:

$$\mathbb{P}\left(E_i\cap E_j\right)=\mathbb{P}\left(E_i\right)\,\mathbb{P}\left(E_j\right)\,\,\forall\,i,j\in \left(1,\dots,k\right),\,i\neq j$$
