---
title:  "Conditional Probability"
description: "Using events that have occurred"
---

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space and $$A,B\in\mathcal{F}$$ be events with $$\mathbb{P}\left(B\right)>0.$$ The **conditional probability** of $$A$$ given $$B$$ is the probability of the joint event divided by the probability of $$B.$$

$$\mathbb{P}\left(A\mid B\right):=\frac{\mathbb{P}\left(A\cap B\right)}{\mathbb{P}\left(B\right)}$$

The conditional probability of $$A$$ given $$B$$ is the probability that $$A$$ occurs given that $$B$$ has occurred. Conditional probability has the following properties:
- for fixed $$B,$$ the function $$A\mapsto\mathbb{P}\left(A\mid B\right)$$ is a probability measure on $$\left(\Omega,\mathcal{F}\right);$$
- conditioning on $$B$$ is equivalent to reducing the sample space to $$B,$$ replacing each event by its intersection with $$B$$ and rescaling probabilities by $$\mathbb{P}\left(B\right);$$
- in general $$\mathbb{P}\left(A\mid B\right)\neq\mathbb{P}\left(B\mid A\right).$$

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space and $$A,B\in\mathcal{F}$$ be events with $$\mathbb{P}\left(B\right)>0.$$ The events $$A$$ and $$B$$ are independent if and only if conditioning on $$B$$ does not change the probability of $$A.$$

$$\mathbb{P}\left(A\mid B\right)=\mathbb{P}\left(A\right)$$

This holds since, when $$A$$ and $$B$$ are independent, $$\mathbb{P}\left(A\mid B\right)=\frac{\mathbb{P}\left(A\right)\,\mathbb{P}\left(B\right)}{\mathbb{P}\left(B\right)}=\mathbb{P}\left(A\right),$$ and conversely $$\mathbb{P}\left(A\mid B\right)=\mathbb{P}\left(A\right)$$ rearranges to $$\mathbb{P}\left(A\cap B\right)=\mathbb{P}\left(A\right)\,\mathbb{P}\left(B\right).$$

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space and $$A,B,C\in\mathcal{F}$$ be events with $$\mathbb{P}\left(C\right)>0.$$ The notation $$\mathbb{P}\left(A\mid B,C\right)$$ denotes $$\mathbb{P}\left(A\mid B\cap C\right).$$ The events $$A$$ and $$B$$ are **conditionally independent** given $$C,$$ written $$A\perp\!\!\!\perp B\mid C,$$ if and only if their joint conditional probability given $$C$$ is the product of their conditional probabilities given $$C.$$

$$\mathbb{P}\left(A\cap B\mid C\right)=\mathbb{P}\left(A\mid C\right)\,\mathbb{P}\left(B\mid C\right)$$

Equivalently, when $$\mathbb{P}\left(B\cap C\right)>0,$$ the events $$A$$ and $$B$$ are conditionally independent given $$C$$ if and only if

$$\mathbb{P}\left(A\mid B,C\right)=\mathbb{P}\left(A\mid C\right).$$

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space, $$E_1,\ldots,E_k\in\mathcal{F}$$ be a partition of $$\Omega$$ with $$\mathbb{P}\left(E_i\right)>0$$ for all $$i$$ and $$A\in\mathcal{F}$$ be an event. The **theorem of total probability** states that the probability of $$A$$ is the sum of its conditional probabilities given each part, weighted by the probabilities of the parts.

$$\mathbb{P}\left(A\right)=\sum_{i=1}^k \mathbb{P}\left(A\mid E_i\right)\,\mathbb{P}\left(E_i\right)$$

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space, $$E_1,\ldots,E_k\in\mathcal{F}$$ be a partition of $$\Omega$$ with $$\mathbb{P}\left(E_i\right)>0$$ for all $$i$$ and $$A\in\mathcal{F}$$ be an event with $$\mathbb{P}\left(A\right)>0.$$ **Bayes' theorem** states that the conditional probability of a part given $$A$$ is the conditional probability of $$A$$ given the part, multiplied by the probability of the part and divided by the probability of $$A.$$

$$
\begin{align*}
\mathbb{P}\left(E_i\mid A\right)&=\frac{\mathbb{P}\left(A\mid E_i\right)\,\mathbb{P}\left(E_i\right)}{\mathbb{P}\left(A\right)}\\
&=\frac{\mathbb{P}\left(A\mid E_i\right)\,\mathbb{P}\left(E_i\right)}{\sum_{j=1}^k \mathbb{P}\left(A\mid E_j\right)\,\mathbb{P}\left(E_j\right)}
\end{align*}
$$

The second form follows from the theorem of total probability.
