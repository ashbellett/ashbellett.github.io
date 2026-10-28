---
title:  "Samples"
description: "Selecting observations from a population"
---

Let $$X_1,\ldots,X_n$$ be $$n$$ random variables defined on a common probability space $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ with a common state space $$S$$ and $$\mathbb{P}_X$$ be a probability distribution on $$S.$$ The random vector $$\underline{X}=\left(X_1,\ldots,X_n\right)$$ is a **random sample** of size $$n$$ from $$\mathbb{P}_X$$ if and only if $$X_1,\ldots,X_n$$ are iid with distribution $$\mathbb{P}_X.$$

Let $$\underline{X}$$ be a random sample from $$\mathbb{P}_X.$$ The distribution $$\mathbb{P}_X$$ is the **population** of the random sample.

Let $$\underline{X}$$ be a random sample of size $$n.$$ An **observed random sample** is a vector $$\underline{x}=\left(x_1,\ldots,x_n\right)$$ of realised values of $$\underline{X}.$$ A set of data is modelled as an observed random sample.

Let $$\underline{X}$$ be a random sample from the population $$\mathbb{P}_X.$$ The population is **parametric** if and only if $$\mathbb{P}_X$$ is assumed to belong to a parametric family $$\left\{\mathbb{P}_{X;\,\theta}:\theta\in\Theta\right\}$$ indexed by a scalar or vector parameter $$\theta$$ with parameter space $$\Theta.$$ The population is written $$\mathbb{P}_{X;\,\theta}$$ to show that its pmf or pdf depends on $$\theta.$$

Let $$\underline{X}$$ be a random sample of size $$n$$ with state space $$S$$ and $$t:S^n\rightarrow\mathbb{R}^k$$ be a function for some $$k\geq 1$$ that does not depend on any unknown parameter. A **statistic** is the random variable or random vector $$T=t\left(\underline{X}\right).$$

Let $$T$$ be a statistic. The **sampling distribution** of $$T$$ is the probability distribution of $$T.$$

Let $$\underline{X}$$ be a random sample of size $$n.$$ The **sample mean** of $$\underline{X}$$ is the statistic given by the arithmetic mean of the random sample.

$$\overline{X}_n:=\frac{1}{n}\sum_{i=1}^n X_i$$

Let $$\underline{X}$$ be a random sample of size $$n\geq 2.$$ The **sample variance** of $$\underline{X}$$ is the statistic given by the sum of the squared deviations from the sample mean divided by $$n-1.$$

$$S_n^2:=\frac{1}{n-1}\sum_{i=1}^n \left(X_i-\overline{X}_n\right)^2$$

Let $$\underline{X}$$ be a random sample of size $$n.$$ The order statistics $$X_{(1)}\leq X_{(2)}\leq\ldots\leq X_{(n)}$$ of $$X_1,\ldots,X_n$$ are statistics of the random sample, and the $$r^\mathrm{th}$$ order statistic is $$X_{(r)}.$$

Let $$\underline{X}$$ be a random sample of size $$n.$$ The **sample minimum** and **sample maximum** of $$\underline{X}$$ are the smallest and largest order statistics.

$$X_{(1)}=\min_{i\in\left\{1,\ldots,n\right\}} X_i,\qquad X_{(n)}=\max_{i\in\left\{1,\ldots,n\right\}} X_i$$

If the population is continuous then ties occur with probability $$0,$$ so $$X_{(1)}<X_{(2)}<\ldots<X_{(n)}$$ with probability $$1.$$

Let $$\underline{x}$$ be an observed random sample of size $$n$$ with order statistics $$x_{(1)}\leq x_{(2)}\leq\ldots\leq x_{(n)}.$$ The **sample median** of $$\underline{x}$$ is the middle order statistic when $$n$$ is odd and the average of the two middle order statistics when $$n$$ is even.

$$
m:=\begin{cases}
x_{\left(\frac{n+1}{2}\right)} & \mathrm{if}\,n\,\mathrm{is}\,\mathrm{odd}\\
\frac{1}{2}\left(x_{\left(\frac{n}{2}\right)}+x_{\left(\frac{n}{2}+1\right)}\right) & \mathrm{if}\,n\,\mathrm{is}\,\mathrm{even}
\end{cases}
$$
