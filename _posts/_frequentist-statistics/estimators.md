---
layout: post
category: "frequentist-statistics"
title:  "Estimators"
tags: ["statistics", "estimators"]
description: "Calculating parameters from data"
---

Let $$\underline{X}$$ be a random sample distributed according to the population $$\mathbb{P}_{X;\,\theta}.$$ An **estimator** for the parameter $$\theta$$ is a statistic whose value $$\hat{\theta}$$ is intended to approximate $$\theta:$$

$$\hat{\theta}=t\left(\underline{X}\right).$$

A realised value of an estimator is called an **estimate** and is evaluated for an observed random sample $$\underline{x}:$$

$$\hat{\theta}=t\left(\underline{x}\right).$$

The **bias** $$b\left(\hat{\theta}\right)$$ of an estimator $$\hat{\theta}$$ is the difference between the expected value of its sampling distribution and the true value of the parameter $$\theta:$$

$$b\left(\hat{\theta}\right)=\mathbb{E}\left[\hat{\theta}\right]-\theta.$$

An estimator is **unbiased** if the expected value of its sampling distribution is equal to the parameter being estimated:

$$\mathbb{E}\left[\hat{\theta}\right]=\theta\Leftrightarrow b\left(\hat{\theta}\right)=0.$$

The **standard error** $$se\left(\hat{\theta}\right)$$ of an estimator $$\hat{\theta}$$ is the standard deviation of its sampling distribution:

$$se\left(\hat{\theta}\right)=\sqrt{\mathrm{var}\left[\hat{\theta}\right]}.$$

The **mean squared error** $$MSE\left(\hat{\theta}\right)$$ of an estimator $$\hat{\theta}$$ is defined as a function of the parameter $$\theta:$$

$$MSE\left(\hat{\theta}\right)=\mathbb{E}\left[\left(\hat{\theta}-\theta\right)^2\right]=b^2\left(\hat{\theta}\right)+\mathrm{var}\left[\hat{\theta}\right]$$

and captures the trade-off between the bias and variance of an estimator.

The bias, standard error and mean squared error are all defined in terms of the moments of the estimator's sampling distribution. However, since the random samples are drawn from the population $$\mathbb{P}_{X;\,\theta}$$ then these quantities can usually be calculated as functions of the moments of $$\mathbb{P}_{X;\,\theta}$$ too.

Consistency

Efficiency
