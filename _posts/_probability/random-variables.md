---
layout: post
category: "probability"
title:  "Random Variables"
tags: ["probability", "random variable"]
description: "Mapping from outcomes to a measurable space"
---

Given a probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ and a measurable space $$\left(S,\mathcal{S}\right)$$, a **random variable** is a function $$X:\Omega\rightarrow S$$ such that:

$$\left\{\omega\in\Omega:X\left(\omega\right)\in A\right\}\in\mathcal{F}\,\,\forall\,A\in\mathcal{S}.$$

$$S$$ is called the **state space** of $$X$$ and $$\mathcal{S}$$ is its corresponding $$\sigma$$-algebra.

A second probability measure is often constructed when referring to the random variable $$X$$ and the values in the state space $$S$$ so that the underlying probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ and the original probability measure $$\mathbb{P}$$ do not need to be continually referenced.

Given a random variable $$X$$ defined with respect to an underlying probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ and measurable space $$\left(S,\mathcal{S}\right)$$, the **pushforward probability measure** is a probability measure $$\mathbb{P}_X$$ on $$\left(S,\mathcal{S}\right)$$ such that:

$$\mathbb{P}_X\left(X\in A\right) = \mathbb{P}\left(\left\{\omega\in\Omega:X\left(\omega\right)\in A\right\}\right)\,\,\forall\,A\in\mathcal{S}.$$

The pushforward probability measure $$\mathbb{P}_X$$ assigns probabilities to measureable subsets of the state space, $$A\in\mathcal{S},$$ and defines the **probability distribution** of $$X$$ over the state space $$S$$. The complete probability space is $$\left(S,\mathcal{S},\mathbb{P}_X\right).$$

The **support** of the probability distribution $$\mathbb{P}_X$$ is the subset of the state space $$\mathcal{X}\subseteq S$$ such that the following properties are satisfied:

$$\mathbb{P}_X\left(X\in A\right)>0\,\,\forall\,A\subseteq\mathcal{X},A\neq\varnothing$$

$$\mathbb{P}_X\left(\mathcal{X}\right)=1$$
