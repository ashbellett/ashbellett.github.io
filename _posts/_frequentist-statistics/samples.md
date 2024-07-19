---
layout: post
category: "frequentist-statistics"
title:  "Samples"
tags: ["statistics", "samples"]
description: "Selecting observations from a population"
---

Let $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ be a set of $$n$$ random variables defined with respect to a common probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ and a common state space $$S.$$ If $$X_1,\ldots,X_n$$ are mutually independent and share a common probability distribution $$\mathbb{P}_X$$ then $$\underline{X}$$ is a **random sample** of size $$n$$ from the **population** $$\mathbb{P}_X.$$ Equivalently, the set contains **independent and identically distributed** (iid) random variables.

A set of data can be represented as a vector $$\underline{x}=\left(x_1,\ldots,x_n\right)$$ and is called an **observed random sample**. An observed random sample is considered realised values of a random sample containing $$n$$ iid random variables.

It is often assumed that the population $$\mathbb{P}_X$$ belongs to a family of distributions indexed by a scalar or vector **parameter** $$\theta$$ where $$\theta$$ belongs to a parameter space $$\theta\in\Theta.$$ The population can be expressed as $$\mathbb{P}_{X;\,\theta}$$ to show that the corresponding pmf or pdf is dependent on the parameter $$\theta.$$

Given a random sample $$\underline{X}$$ of size $$n$$ and a possibly multivariate function $$t:S^n\rightarrow\mathbb{R}^k\,\,\forall\,k\geq 1$$ then $$T=t\left(\underline{X}\right)$$ is a random variable or vector called a **statistic**. The probability distribution of the statistic $$T$$ is the **sampling distribution** of $$T.$$

The **sample mean** $$\overline{X}_n$$ is a statistic where $$t$$ is the arithmetic mean of the random sample:

$$\overline{X}_n=\frac{1}{n}\sum_{i=1}^n X_i.$$

The **sample variance** $$S_n^2$$ is a statistic where $$t$$ is a scaled arithmetic mean of the squared and centred random sample:

$$S_n^2=\frac{1}{n-1}\sum_{i=1}^n \left(X_i-\overline{X}_n\right)^2.$$

Let $$\underline{x}$$ be an observed random sample. The **order statistics** of $$\underline{x}$$ are the values $$\left(x_1,x_2,\ldots,x_n\right)$$ in increasing order denoted by $$x_{(1)}\leq x_{(2)}\leq\ldots\leq x_{(n)}$$.

The **sample median** $$m$$ is defined as:

$$
m=\begin{cases}
x_{\left(\frac{n+1}{2}\right)} & \mathrm{if}\,n\,\mathrm{is}\,\mathrm{odd}\\
\frac{1}{2}\left(x_{\left(\frac{n}{2}\right)}+x_{\left(\frac{n}{2}+1\right)}\right) & \mathrm{if}\,n\,\mathrm{is}\,\mathrm{even}.\\
\end{cases}
$$

Let $$\underline{X}$$ be a random sample. The **$$r^\mathrm{th}$$ order statistic** of $$\underline{X}$$ is the random variable $$X_{(r)}$$ where $$X_{(1)}\leq X_{(2)}\leq\ldots\leq X_{(n)}$$ is the ordered sample.

If $$X_i$$ is continuous so that $$X_{(1)}<X_{(2)}<\ldots<X_{(n)}$$ with probability 1 then:

$$
\begin{align}
X_{(1)}&=\min_{i\in\left(1,\ldots,n\right)} X_i\\
\ldots&\\
X_{(n)}&=\max_{i\in\left(1,\ldots,n\right)} X_i.
\end{align}
$$
