---
layout: post
category: "frequentist-statistics"
title:  "Point Estimation"
tags: ["statistics", "point estimation"]
description: "Finding parameter values from data"
---

If a parameter $$\theta\in\Theta$$ can be expressed in terms of the moments of the population $$\mathbb{P}_{X;\,\theta}$$ then $$\theta$$ can be estimated by equating the population moments with their corresponding sample moments using the **method of moments**:

1. Given a random sample $$\underline{X}$$ distributed according to the population $$\mathbb{P}_{X;\,\theta}$$ and assuming $$\theta$$ contains $$k$$ parameters to be estimated, the first $$k$$ sample moments are calculated.
2. The sample moments are equated with their corresponding population moments.
3. The system of equations is solved to find the unknown $$\theta$$.

Given an observed random sample $$\underline{x}$$ of size $$n$$ from a population $$\mathbb{P}_{X;\,\theta}$$ with pdf $$f_{X;\,\theta}\left(x;\,\theta\right)$$, the **likelihood** function $$\mathcal{L}\left(\theta\mid\underline{x}\right)$$ is the joint pmf or pdf of $$\underline{x}$$ expressed in terms of $$\theta:$$

$$\mathcal{L}\left(\theta\mid\underline{x}\right)=f_{\underline{X};\,\theta}\left(\underline{x};\,\theta\right)$$

Given that $$\underline{X}$$ contains iid random variables then the likelihood can be expressed as:

$$\mathcal{L}\left(\theta\mid\underline{x}\right)=\prod_{i=1}^n f_{X;\,\theta}\left(x_i;\,\theta\right)$$

In the case where $$\underline{X}$$ contains independent but not identically distributed random variables, the likelihood is:

$$\mathcal{L}\left(\theta\mid\underline{x}\right)=\prod_{i=1}^n f_{X;\,\theta,i}\left(x_i;\,\theta\right)$$

The **maximum likelihood estimate** (MLE) $$\hat{\theta}\left(\underline{x}\right)$$ is the value of $$\theta$$ that maximises the likelihood for a given $$\underline{x}$$:

$$\hat{\theta}\left(\underline{x}\right)=\operatorname*{arg\,max}_{\theta\in\Theta}\,\mathcal{L}\left(\theta\mid\underline{x}\right)$$

The likelihood function often contains exponential terms. The **log-likelihood** function is defined as:

$$\mathcal{l}\left(\theta\mid\underline{x}\right)=\log_e\mathcal{L}\left(\theta\mid\underline{x}\right)$$

Because logarithms are monotonic functions then $$\hat{\theta}\left(\underline{x}\right)$$ also maximises the log-likelihood $$\mathcal{l}\left(\theta\mid\underline{x}\right)$$ and is often more practical to maximise:

$$\hat{\theta}\left(\underline{x}\right)=\operatorname*{arg\,max}_{\theta\in\Theta}\,\mathcal{l}\left(\theta\mid\underline{x}\right)$$

The **maximum likelihood estimator** (also MLE) is the estimator $$\hat{\theta}\left(\underline{X}\right).$$
