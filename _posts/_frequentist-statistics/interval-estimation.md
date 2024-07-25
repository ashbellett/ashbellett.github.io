---
layout: post
category: "frequentist-statistics"
title:  "Interval Estimation"
tags: ["statistics", "interval estimation"]
description: "Finding plausible ranges of parameter values from data"
---

Let $$\underline{X}$$ be a random sample of size $$n$$ distributed according to the population $$\mathbb{P}_{X;\,\theta},$$ which depends on the parameter $$\theta,$$ and common state space $$S.$$ An **interval estimator** for $$\theta$$ is a random interval $$\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]$$ where the statistics $$g_L\left(\underline{X}\right)\leq g_U\left(\underline{X}\right)\,\,\forall\,\underline{X}\in S^n$$ are intended to contain the true parameter $$\theta.$$

An **interval estimate** for the parameter $$\theta$$ is obtained by using the realised values of the statistics $$g_L\left(\underline{x}\right)$$ and $$g_U\left(\underline{x}\right)$$ and is equivalent to stating $$g_L\left(\underline{x}\right)\leq\theta\leq g_U\left(\underline{x}\right).$$

A one-sided interval estimate is of the form $$\left(-\infty,g_U\left(\underline{x}\right)\right]$$ or $$\left[g_L\left(\underline{x}\right),\infty\right)$$ and is equivalent to stating $$\theta\leq g_U\left(\underline{x}\right)$$ or $$\theta\geq g_L\left(\underline{x}\right)$$ respectively.

Let $$\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]$$ be an interval estimator for the parameter $$\theta.$$ The **coverage probability** is the probability that $$\theta$$ lies within $$\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right].$$ The coverage probability is equivalent to the joint probability:

$$
\begin{align}
\mathbb{P}\left(g_L\left(\underline{X}\right)\leq\theta,g_U\left(\underline{X}\right)\geq\theta\right)\\
=\mathbb{P}\left(\theta\in\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]\right)
\end{align}
$$

The **confidence coefficient** of the interval estimator $$\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]$$ is the infimum of the coverage probability over all possible values of the true parameter $$\theta:$$

$$\inf_{\theta\in\Theta}\mathbb{P}\left(\theta\in\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]\right)$$

The coverage probability is often constant as a function of $$\theta$$ and therefore the coverage probability and confidence coefficient are equal.

If the interval estimator $$\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]$$ is designed with confidence coefficient $$1-\alpha$$ for some $$\alpha\in\left(0,1\right):$$

$$\mathbb{P}\left(\theta\in\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]\right)\geq 1-\alpha\,\,\forall\,\theta\in\Theta$$

then $$\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]$$ is a $$100\left(1-\alpha\right)\%$$ **confidence interval**.
