---
title:  "Probability Spaces"
description: "Model for assigning probabilities to events"
---

Let $$\left(\Omega, \mathcal{F}\right)$$ be a measurable space. A **probability measure** on $$\left(\Omega, \mathcal{F}\right)$$ is a function $$\mathbb{P}: \mathcal{F} \rightarrow \mathbb{R}$$ that satisfies the probability axioms:
- non-negativity: $$\mathbb{P}\left(A\right)\geq 0$$ for all $$A\in\mathcal{F};$$
- normalisation: $$\mathbb{P}\left(\varnothing\right)=0$$ and $$\mathbb{P}\left(\Omega\right)=1;$$
- countable additivity: if $$E_1, E_2, \ldots$$ are pairwise disjoint events in $$\mathcal{F}$$ then

$$\mathbb{P}\left(\bigcup_{i=1}^\infty E_i\right)=\sum_{i=1}^\infty \mathbb{P}\left(E_i\right).$$

Let $$\left(\Omega, \mathcal{F}\right)$$ be a measurable space and $$\mathbb{P}$$ be a probability measure on it. The triple $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ is a **probability space**.

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space and $$A\in\mathcal{F}$$ be an event. The **marginal probability** of $$A$$ is the value $$\mathbb{P}(A),$$ the probability that $$A$$ occurs.

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space and $$A,B\in\mathcal{F}$$ be events. The probability measure has the following properties:

$$\mathbb{P}(\overline{A})=1-\mathbb{P}\left(A\right)$$

$$\mathrm{if}\,\,A\subseteq B\,\,\mathrm{then}\,\,\mathbb{P}\left(A\right)\leq\mathbb{P}\left(B\right)$$

$$\mathbb{P}\left(A\cup B\right)=\mathbb{P}\left(A\right)+\mathbb{P}\left(B\right)-\mathbb{P}\left(A\cap B\right)$$

$$\mathbb{P}\left(A\cap\overline{B}\right)=\mathbb{P}\left(A\right)-\mathbb{P}\left(A\cap B\right)$$

$$\mathbb{P}\left(A\cup B\right)\leq\mathbb{P}\left(A\right)+\mathbb{P}\left(B\right)$$

$$\mathbb{P}\left(A\cap B\right)\geq\mathbb{P}\left(A\right)+\mathbb{P}\left(B\right)-1$$

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space and $$E_1,\ldots,E_k\in\mathcal{F}$$ be a finite collection of $$k>1$$ events. The **joint probability** of $$E_1,\ldots,E_k$$ is the probability of their intersection.

$$\mathbb{P}\left(\bigcap_{i=1}^k E_i\right)$$

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space and $$A,B\in\mathcal{F}$$ be events. The events $$A$$ and $$B$$ are **independent events** if and only if their joint probability is the product of their marginal probabilities.

$$\mathbb{P}\left(A\cap B\right)=\mathbb{P}\left(A\right)\,\mathbb{P}\left(B\right)$$

Independence has the following properties:
- if $$A$$ and $$B$$ are independent then the occurrence of one event does not affect the probability of the other event occurring;
- disjoint events with non-zero probability are not independent.

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space and $$E_1, \ldots, E_k\in\mathcal{F}$$ be a finite collection of $$k>2$$ events. The events are **pairwise independent** if and only if every pair of distinct events in the collection is independent.

$$\mathbb{P}\left(E_i\cap E_j\right)=\mathbb{P}\left(E_i\right)\,\mathbb{P}\left(E_j\right)\,\,\forall\,i,j\in \left\{1,2,\ldots,k\right\},\,i\neq j$$

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space and $$E_1, \ldots, E_k\in\mathcal{F}$$ be a finite collection of $$k>2$$ events. The events are **mutually independent** if and only if for every subcollection of the events the probability of their intersection is the product of their probabilities, that is, for $$2\leq l\leq k$$ and distinct indices $$1\leq i_1<i_2<\ldots<i_l\leq k$$

$$\mathbb{P}\left(\bigcap_{j=1}^l E_{i_j}\right)=\prod_{j=1}^l\mathbb{P}\left(E_{i_j}\right).$$

Mutual independence implies pairwise independence. Pairwise independence does not imply mutual independence.
