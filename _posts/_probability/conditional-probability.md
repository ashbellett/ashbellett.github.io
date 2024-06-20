---
layout: post
category: "Probability"
title:  "Conditional Probability"
tags: ["probability", "conditional"]
description: "Using events that have occurred"
---

Given a probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ where $$\Omega$$ is a sample space, $$\mathcal{F}$$ is a $$\sigma$$-algebra on $$\Omega$$ and $$\mathbb{P}$$ is a probability measure, events $$A,B\in\mathcal{F}$$ and $$\mathbb{P}\left(B\right)>0,$$ the **conditional probability** of event $$A$$ given that event $$B$$ has occurred is:

$$\mathbb{P}\left(A\mid B\right)=\frac{\mathbb{P}\left(A\cap B\right)}{\mathbb{P}\left(B\right)}.$$

In general, $$\mathbb{P}\left(A\mid B\right)\neq\mathbb{P}\left(B\mid A\right).$$

Events $$A$$ and $$B$$ are independent events if and only if:

$$\mathbb{P}\left(A\mid B\right)=\frac{\mathbb{P}\left(A\right)\,\mathbb{P}\left(B\right)}{\mathbb{P}\left(B\right)}=\mathbb{P}\left(A\right).$$

Conditional probability is equivalent to reducing the sample space by replacing events with intersections between themselves and the event that has occurred and rescaling probabilities.

Given events $$A,B,C\in\mathcal{F}$$, events $$A$$ and $$B$$ are **conditionally independent** given $$C$$ if and only if:

$$\mathbb{P}\left(A\cap B\mid C\right)=\mathbb{P}\left(A\mid C\right)\,\mathbb{P}\left(B\mid C\right)$$

or, equivalently:

$$\mathbb{P}\left(A\mid B,C\right)=\mathbb{P}\left(A\mid C\right).$$

Conditional independence relationships can be written as $$A\perp\!\!\!\perp B\mid C.$$

The **theorem of total probability** states that, given a partition on $$\Omega$$ containing $$k$$ events $$E_1,\ldots,E_k,$$ any event $$A\subseteq\Omega$$ is given by:

$$\mathbb{P}\left(A\right)=\sum_{i=1}^k \mathbb{P}\left(A\mid E_i\right)\,\mathbb{P}\left(E_i\right).$$

**Bayes' theorem** states that, given a partition on $$\Omega$$ containing $$k$$ events $$E_1,\ldots,E_k,$$ $$\mathbb{P}\left(E_i\right)>0$$ and $$\mathbb{P}\left(A\right)>0,$$ then:

$$\mathbb{P}\left(E_i\mid A\right)=\frac{\mathbb{P}\left(A\mid E_i\right)\,\mathbb{P}\left(E_i\right)}{\mathbb{P}\left(A\right)}=\frac{\mathbb{P}\left(A\mid E_i\right)\,\mathbb{P}\left(E_i\right)}{\sum_{j=1}^k \mathbb{P}\left(A\mid E_j\right)\,\mathbb{P}\left(E_j\right)}$$