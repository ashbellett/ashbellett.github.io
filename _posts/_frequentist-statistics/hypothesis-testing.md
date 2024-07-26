---
layout: post
category: "frequentist-statistics"
title:  "Hypothesis Testing"
tags: ["statistics", "hypothesis-testing"]
description: "Deciding whether data supports an idea"
---

Let $$\underline{X}$$ be a random sample of size $$n$$ distributed according to the population $$\mathbb{P}_{X;\,\theta},$$ which depends on the parameter $$\theta,$$ and common state space $$S.$$ A **hypothesis** $$H$$ is a statement about the true value of $$\theta.$$

A **simple hypothesis** assigns a single value to $$\theta$$ whereas a **composite hypothesis** states that $$\theta$$ takes a value in a given set. A simple hypothesis fully specifies the population $$\mathbb{P}_{X;\,\theta}$$ whereas a composite hypothesis does not.

A parameter space $$\Theta$$ where $$\theta\in\Theta$$ can be partitioned into two complementary regions $$\Theta_0$$ and $$\Theta_1$$ where $$\Theta_0\cap\Theta_1=\varnothing$$ and $$\Theta_0\cup\Theta_1\subseteq\Theta.$$ Two competing hypotheses are formed: the **null hypothesis** $$H_0:\theta\in\Theta_0$$ and the **alternative hypothesis** $$H_1:\theta\in\Theta_1.$$

A **hypothesis test** tries to establish whether an observed random sample $$\underline{x}$$ contradicts a hypothesis:

1. The null hypothesis is assumed to be true and a **test statistic** $$T=g\left(\underline{X}\right)$$ is created such that its sampling distribution is known under the conditions of the null hypothesis.

2. If the observed value of the test statistic $$t=g\left(\underline{x}\right)$$ lies sufficiently far into the tails of the sampling distribution of $$T$$ then it is concluded that the observed data is sufficiently unlikely under the null hypothesis and the null hypothesis is rejected.

Rejection of the null hypothesis is not equivalent to finding evidence in favour of the alternative hypothesis and so the only decisions are rejecting or not rejecting the null hypothesis.

The **critical region** $$C_{\alpha}\subset S^n$$ with **size** $$\alpha$$ is the region of the test statistic's state space that corresponds to the tails of the sampling distribution of $$T$$ such that the probability that the test statistic lies in the critical region is equal to the size of the test:

$$\mathbb{P}\left(T\in C_{\alpha}\right)=\alpha$$

The null hypothesis is rejected if and only if $$t\in C_{\alpha}.$$

A **two-sided test** involves a critical region defined over both the upper and lower tails of the sampling distribution of $$T$$ whereas a **one-sided test** involves a critical region defined over one tail which is identified through inspecting the null hypothesis $$H_0.$$

The **$$p$$-value** for an observed random sample $$\underline{x}$$ is the probability under the null hypothesis that the test statistic takes a value that is at least as extreme as the observed test statistic $$t:$$

- $$p=\mathbb{P}\left(T\geq t\mid H_0\right)$$ (one-sided test, upper tail);
- $$p=\mathbb{P}\left(T\leq t\mid H_0\right)$$ (one-sided test, lower tail);
- $$p=\mathbb{P}\left(\lvert T\rvert\geq t\mid H_0\right)$$ (two-sided test).

A small $$p$$-value corresponds to a value of $$t$$ that is unlikely to occur under $$H_0$$ and is an indicator that the data $$\underline{x}$$ and $$H_0$$ are inconsistent.

If the null hypothesis is rejected given that the null hypothesis is true, it is called a **type I error** and the probability of a type I error occurring corresponds to the size $$\alpha$$ of the test:

$$\alpha=\mathbb{P}\left(\mathrm{Type}\,\mathrm{I}\,\mathrm{error}\right)=\mathbb{P}\left(\mathrm{Reject}\,H_0\mid H_0\,\mathrm{is}\,\mathrm{true}\right)$$

If the null hypothesis is not rejected given that the alternative hypothesis is true, it is called a **type II error** and the probability of a type II error occurring is the **power** $$\beta$$ of the test:

$$1-\beta=1-\mathbb{P}\left(\mathrm{Type}\,\mathrm{II}\,\mathrm{error}\right)=\mathbb{P}\left(\mathrm{Reject}\,H_0\mid H_1\,\mathrm{is}\,\mathrm{true}\right)$$

Types of hypothesis tests

Multiple testing
