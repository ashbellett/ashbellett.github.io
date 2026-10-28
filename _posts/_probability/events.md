---
title:  "Events"
description: "Sets of experiment outcomes"
---

An **experiment** is a procedure that can be repeated and whose observed output is uncertain.

Let $$E$$ be an experiment. An **outcome** of $$E$$ is an observed output of $$E.$$

Let $$E$$ be an experiment. The **sample space** of $$E,$$ written $$\Omega,$$ is the set of all possible outcomes of $$E.$$

Let $$\Omega$$ be a sample space. An **event** is a subset $$A\subseteq\Omega$$ of outcomes. The event $$A$$ **occurs** if and only if the outcome $$\omega\in\Omega$$ of the experiment satisfies $$\omega\in A.$$

Let $$\Omega$$ be a sample space. The **null event** is the empty set $$\varnothing,$$ which never occurs. The sample space $$\Omega$$ is itself an event, which always occurs.

Let $$\Omega$$ be a sample space. An **elementary event** of $$\Omega$$ is a singleton subset $$\{\omega\}$$ of $$\Omega$$ that contains exactly one outcome.

Let $$\Omega$$ be a sample space and $$A\subseteq\Omega$$ be an event. The **complement** of $$A$$ is the event that $$A$$ does not occur.

$$\overline{A} := \Omega \setminus A$$

Let $$\Omega$$ be a sample space and $$A,B\subseteq\Omega$$ be events. The events $$A$$ and $$B$$ are **disjoint events** if and only if $$A \cap B = \varnothing.$$

Let $$\Omega$$ be a sample space and $$E_1, E_2, \ldots$$ be a collection of events. The collection is **pairwise disjoint** if and only if $$E_i \cap E_j = \varnothing$$ for all $$i \neq j.$$

Let $$\Omega$$ be a sample space. The set of all subsets of $$\Omega$$ is the power set $$\mathcal{P}(\Omega).$$ Every event is a subset of $$\Omega,$$ but not every subset of $$\Omega$$ is necessarily an event. The **set of events** $$\mathcal{F}$$ is the set of all subsets of $$\Omega$$ that are events, so that $$\mathcal{F}\subseteq\mathcal{P}(\Omega).$$

Let $$\Omega$$ be a sample space and $$\mathcal{F}\subseteq\mathcal{P}(\Omega).$$ The set $$\mathcal{F}$$ is an **algebra** of sets on $$\Omega$$ if and only if it satisfies the following properties:
- the null event is in $$\mathcal{F},$$ $$\varnothing\in\mathcal{F};$$
- if $$A\in\mathcal{F}$$ then $$\overline{A}\in\mathcal{F};$$
- if $$A,B\in\mathcal{F}$$ then $$A\cup B\in\mathcal{F}.$$

An algebra is closed under finite unions and finite intersections.

Let $$\Omega$$ be a sample space and $$\mathcal{F}\subseteq\mathcal{P}(\Omega).$$ The set $$\mathcal{F}$$ is a **$$\sigma$$-algebra** on $$\Omega$$ if and only if it satisfies the following properties:
- the null event is in $$\mathcal{F},$$ $$\varnothing\in\mathcal{F};$$
- if $$A\in\mathcal{F}$$ then $$\overline{A}\in\mathcal{F};$$
- if $$E_1,E_2,\ldots\in\mathcal{F}$$ then

$$\bigcup_{i=1}^\infty E_i\in\mathcal{F}.$$

A $$\sigma$$-algebra is an algebra that is also closed under countable unions and countable intersections.

Let $$\Omega$$ be a set and $$\mathcal{F}$$ be a $$\sigma$$-algebra on $$\Omega.$$ The elements of $$\mathcal{F}$$ are the **measurable subsets** of $$\Omega.$$

Let $$\Omega$$ be a set and $$\mathcal{F}$$ be a $$\sigma$$-algebra on $$\Omega.$$ The ordered pair $$\left(\Omega,\mathcal{F}\right)$$ is a **measurable space**.

Every experiment has an associated measurable space $$\left(\Omega,\mathcal{F}\right)$$ where $$\Omega$$ is its sample space and $$\mathcal{F}$$ is a $$\sigma$$-algebra on $$\Omega$$ that contains every event of the experiment.
