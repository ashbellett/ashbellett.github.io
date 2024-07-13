---
layout: post
category: "frequentist-statistics"
title:  "Samples"
tags: ["statistics", "samples"]
description: "Selecting observations from a population"
---

Let $$\left(X_1,\ldots,X_n\right)$$ be a set of $$n$$ random variables defined with respect to a common probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ and a common state space $$S.$$ If $$X_1,\ldots,X_n$$ are mutually independent and share a common probability distribution $$\mathbb{P}_X$$ then the set $$\left(X_1,\ldots,X_n\right)$$ is a **random sample** of size $$n$$ from the **population** $$\mathbb{P}_X.$$ Equivalently, the set contains **independent and identically distributed** (iid) random variables.

A set of data can be represented as a vector $$\underline{x}=\left(x_1,\ldots,x_n\right)$$ and is called an **observed random sample**. An observed random sample is considered realised values of a random sample containing $$n$$ iid random variables.

It is often assumed that the population $$\mathbb{P}_X$$ belongs to a family of distributions indexed by a scalar or vector **parameter** $$\theta$$ where $$\theta$$ belongs to a parameter space $$\theta\in\Theta.$$ The population can be expressed as $$\mathbb{P}_{X;\,\theta}$$ to show that the corresponding pmf or pdf is dependent on the parameter $$\theta.$$

Given a random sample $$\left(X_1,\ldots,X_n\right)$$ of size $$n$$ and a possibly multivariate function $$t:S^n\rightarrow\mathbb{R}^k\,\,\forall\,k\geq 1$$ then $$T=t\left(X_1,\ldots,X_n\right)$$ is a random variable or vector and is called a **statistic**. The probability distribution of the statistic $$T$$ is the **sampling distribution** of $$T.$$

The **sample mean** $$\overline{X}_n$$ is a statistic where $$t$$ is the arithmetic mean of the random sample:

$$\overline{X}_n=\frac{1}{n}\sum_{i=1}^n X_i.$$

The **sample variance** $$S_n^2$$ is a statistic where $$t$$ is a scaled arithmetic mean of the squared and centred random sample:

$$S_n^2=\frac{1}{n-1}\sum_{i=1}^n \left(X_i-\overline{X}_n\right)^2.$$

A statistic cannot contain more information than the random sample that it summarises. The degree to which a statistic encodes information about the distribution of a random sample is referred to as **sufficiency**.

Given a random sample  $$\left(X_1,\ldots,X_n\right)$$ of size $$n$$ from the population $$\mathbb{P}_{X;\,\theta}$$, a statistic $$T$$ is a **sufficient statistic** for the parameter $$\theta$$ if:

$$\mathbb{P}\left(X_1,\ldots,X_n\mid T,\theta\right)=\mathbb{P}\left(X_1,\ldots,X_n\mid T\right).$$

That is, the conditional distribution of the random sample given the value of the statistic $$T$$ is independent of the parameter $$\theta$$.

If the population $$\mathbb{P}_{X;\,\theta}$$ is continuous with joint pdf of the random sample given by $$f_{X_1,\ldots,X_n}\left(x_1,\dots,x_n\mid\theta\right)$$ and the pdf of a statistic $$T$$ is given by $$f_T\left(t\mid\theta\right)$$ then $$T$$ is a sufficient statistic for $$\theta$$ if and only if the ratio of pdfs

$$\frac{f_{X_1,\ldots,X_n}\left(x_1,\dots,x_n\mid\theta\right)}{f_T\left(t\mid\theta\right)}$$

is a function of only $$\theta\,\,\forall\,\left(X_1,\ldots,X_n\right)\in S^n.$$

A statistic $$T$$ is a sufficient statistic for $$\theta$$ if and only if there exist functions $$u\left(t\mid\theta\right)$$ and $$v\left(x_1,\ldots,x_n\right)$$ such that the joint pdf of the random sample can be factored:

$$f_{X_1,\ldots,X_n}\left(x_1,\dots,x_n\mid\theta\right)=u\left(t\mid\theta\right)v\left(x_1,\ldots,x_n\right)$$

The tests for sufficient statistics are also true for discrete random samples using the corresponding pmfs instead.
