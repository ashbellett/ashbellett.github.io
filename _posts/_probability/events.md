---
layout: post
category: "Probability"
title:  "Events"
tags: ["probability", "event"]
description: "Sets of experiment outcomes"
---

An **experiment** is a procedure that can be repeated and whose observed outputs are uncertain.

The observed outputs of experiments are **outcomes**.

The set of possible outcomes is the **sample space** $$\Omega.$$

A subset of outcomes $$A\subseteq\Omega$$ is called an **event**, and an event occurs if, when an experiment is performed, the outcome $$\omega\in\Omega$$ satisfies $$\omega\in A.$$

The **null event** $$\varnothing$$ and sample space $$\Omega$$ are both events. The null event will never occur and the sample space event will always occur.

The singleton subsets of $$\Omega$$ which are subsets that contain exactly one outcome from $$\Omega$$ are called the **elementary events** of $$\Omega.$$

Events $$A$$ and $$B$$ are **disjoint events** if and only if $$A \cap B = \varnothing \,\, \forall \, A \neq B.$$

The set of all subsets of $$\Omega$$ is the power set $$\mathcal{P}(\Omega).$$ All events are subsets of $$\Omega$$ however not all subsets of $$\mathcal{P}(\Omega)$$ are necessarily events. Hence, the set of all possible events $$\mathcal{F}$$ is a subset of $$\mathcal{P}(\Omega),$$ $$\mathcal{F}\subseteq\mathcal{P}(\Omega).$$

If the set of events $$\mathcal{F}$$ has the following properties:
- if events $$A,B\in\mathcal{F}$$ then $$A\cup B\in\mathcal{F}$$
- if event $$A\in\mathcal{F}$$ then $$\overline{A}\in\mathcal{F}$$
- the null event is in $$\mathcal{F},$$ $$\varnothing\in\mathcal{F}$$

then $$\mathcal{F}$$ is an **algebra** of sets. An algebra is closed under finite unions and finite intersections.

An algebra $$\mathcal{F}$$ is a **$$\sigma$$-algebra** if it satisfies the following properies:
- if events $$E_1,E_2,\ldots\in\mathcal{F}$$ then

$$\bigcup_{i=1}^\infty E_i\in\mathcal{F}$$

- if event $$A\in\mathcal{F}$$ then $$\overline{A}\in\mathcal{F}$$
- the null event is in $$\mathcal{F},$$ $$\varnothing\in\mathcal{F}.$$

The elements in a $$\sigma$$-algebra are **measurable subsets** of the set it is defined on. A pair set containing a set and a $$\sigma$$-algebra of its measurable subsets is called a **measurable space**.

Any experiment has an associated measurable space $$\left(\Omega,\mathcal{F}\right)$$ where $$\Omega$$ is the set of all possible outcomes and $$\mathcal{F}$$ is a $$\sigma$$-algebra of subsets of $$\Omega$$ which contains all possible events.
