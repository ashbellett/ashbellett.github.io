---
title:  "Interval Estimation"
description: "Finding plausible ranges of parameter values from data"
---

Let $$\underline{X}$$ be a random sample of size $$n$$ from the population $$\mathbb{P}_{X;\,\theta}$$ with state space $$S,$$ and $$g_L,g_U:S^n\rightarrow\mathbb{R}$$ be statistics with $$g_L\left(\underline{x}\right)\leq g_U\left(\underline{x}\right)$$ for all $$\underline{x}\in S^n.$$ An **interval estimator** of $$\theta$$ is the random interval $$\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right],$$ which is intended to contain the true parameter $$\theta.$$

Let $$\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]$$ be an interval estimator of $$\theta$$ and $$\underline{x}$$ be an observed random sample. An **interval estimate** of $$\theta$$ is the realised interval $$\left[g_L\left(\underline{x}\right),g_U\left(\underline{x}\right)\right],$$ which is equivalent to the statement $$g_L\left(\underline{x}\right)\leq\theta\leq g_U\left(\underline{x}\right).$$

Let $$g_L$$ and $$g_U$$ be statistics. A **one-sided interval estimate** of $$\theta$$ is an interval estimate of the form $$\left(-\infty,g_U\left(\underline{x}\right)\right]$$ or $$\left[g_L\left(\underline{x}\right),\infty\right),$$ which is equivalent to the statement $$\theta\leq g_U\left(\underline{x}\right)$$ or $$\theta\geq g_L\left(\underline{x}\right)$$ respectively.

Let $$\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]$$ be an interval estimator of $$\theta.$$ The **coverage probability** of the interval estimator is the probability that $$\theta$$ lies within the random interval, which is the joint probability that the lower statistic is at most $$\theta$$ and the upper statistic is at least $$\theta.$$

$$
\begin{align*}
\mathbb{P}\left(\theta\in\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]\right)=\mathbb{P}\left(g_L\left(\underline{X}\right)\leq\theta,g_U\left(\underline{X}\right)\geq\theta\right)
\end{align*}
$$

The coverage probability is a function of $$\theta.$$

Let $$\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]$$ be an interval estimator of $$\theta.$$ The **confidence coefficient** of the interval estimator is the infimum of the coverage probability over all possible values of the true parameter.

$$\inf_{\theta\in\Theta}\mathbb{P}\left(\theta\in\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]\right)$$

The coverage probability is often constant as a function of $$\theta,$$ in which case the coverage probability and the confidence coefficient are equal.

Let $$\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]$$ be an interval estimator of $$\theta$$ and $$\alpha\in\left(0,1\right).$$ The interval estimator is a $$100\left(1-\alpha\right)\%$$ **confidence interval** for $$\theta$$ if and only if its confidence coefficient is at least $$1-\alpha.$$

$$\mathbb{P}\left(\theta\in\left[g_L\left(\underline{X}\right),g_U\left(\underline{X}\right)\right]\right)\geq 1-\alpha\,\,\forall\,\theta\in\Theta$$

A confidence interval has probability at least $$1-\alpha$$ of containing $$\theta$$ over repeated samples before the data are observed. A realised confidence interval either contains $$\theta$$ or does not, and the confidence coefficient is not a probability statement about $$\theta$$ given the observed data.
