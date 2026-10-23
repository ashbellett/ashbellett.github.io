---
layout: post
category: "probability"
title:  "Limit Theorems"
tags: ["probability", "limit theorem"]
description: "Behaviour after many outcomes have been observed"
---

Let $$X_1,X_2,\ldots$$ be an iid sequence of random variables with mean $$\mu$$ and, where needed, finite variance $$\sigma^2>0.$$ The partial sum and the average of the first $$n$$ terms are

$$S_n:=\sum_{i=1}^n X_i,\qquad\overline{X}_n:=\frac{1}{n}\sum_{i=1}^n X_i,$$

which by linearity of expectation and independence have

$$\mathbb{E}\left[\overline{X}_n\right]=\mu,\qquad\mathrm{var}\left[\overline{X}_n\right]=\frac{\sigma^2}{n}.$$

The limit theorems describe how $$\overline{X}_n$$ behaves as $$n\rightarrow\infty:$$ the laws of large numbers state that it converges to $$\mu$$ and the central limit theorem describes the distribution of its fluctuations around $$\mu$$ at the scale $$\frac{1}{\sqrt{n}}.$$

The **weak law of large numbers** states that the average converges in probability to the mean.

$$\overline{X}_n\xrightarrow{p}\mu$$

$$\mathrm{that}\,\,\mathrm{is}\,\,\lim_{n\rightarrow\infty}\mathbb{P}\left(\left\lvert\overline{X}_n-\mu\right\rvert>\varepsilon\right)=0\,\,\forall\,\varepsilon>0$$

Under the assumption of finite variance it follows from Chebyshev's inequality, $$\mathbb{P}\left(\left\lvert\overline{X}_n-\mu\right\rvert>\varepsilon\right)\leq\frac{\sigma^2}{n\varepsilon^2},$$ but it holds whenever the mean exists. The law also holds for independent random variables with a common mean that are not identically distributed provided their variances are bounded, and for uncorrelated rather than independent random variables with bounded variances.

The **strong law of large numbers** states that the average converges almost surely to the mean, and that the existence of the mean is both necessary and sufficient.

$$\overline{X}_n\xrightarrow{a.s.}\mu\Leftrightarrow\mathbb{E}\left[\lvert X_1\rvert\right]<\infty$$

The strong law states that for almost every outcome the sequence of averages eventually stays within any fixed distance of $$\mu,$$ whereas the weak law only states that the probability of a deviation at a given $$n$$ is small. Applied to the indicator random variables $$\mathbf{1}_{\{X_i\in A\}}$$ the strong law gives

$$\frac{1}{n}\sum_{i=1}^n\mathbf{1}_{\{X_i\in A\}}\xrightarrow{a.s.}\mathbb{P}\left(X_1\in A\right),$$

so the long-run relative frequency of an event converges to its probability, which is the justification for the frequentist interpretation of probability and for Monte Carlo estimation of probabilities and expectations by averaging simulated values.

The **empirical distribution function** of $$X_1,\ldots,X_n$$ is the cdf that places probability $$\frac{1}{n}$$ on each observed value.

$$\hat{F}_n\left(x\right):=\frac{1}{n}\sum_{i=1}^n\mathbf{1}_{\{X_i\leq x\}}\,\,\forall\,x\in\mathbb{R}$$

By the strong law $$\hat{F}_n\left(x\right)\xrightarrow{a.s.}F_X\left(x\right)$$ for each fixed $$x,$$ and the **Glivenko–Cantelli theorem** strengthens this to uniform convergence.

$$\sup_{x\in\mathbb{R}}\left\lvert\hat{F}_n\left(x\right)-F_X\left(x\right)\right\rvert\xrightarrow{a.s.}0$$

The **central limit theorem** states that if $$\sigma^2$$ is finite then the standardised average converges in distribution to the standard normal distribution, whatever the distribution of the $$X_i.$$

$$\frac{\sqrt{n}\left(\overline{X}_n-\mu\right)}{\sigma}=\frac{S_n-n\mu}{\sigma\sqrt{n}}\xrightarrow{d}\mathrm{N}\left(0,1\right)$$

Equivalently, $$\sqrt{n}\left(\overline{X}_n-\mu\right)\xrightarrow{d}\mathrm{N}\left(0,\sigma^2\right).$$ The theorem is proved by showing that the characteristic function of the standardised average converges to $$e^{-\frac{t^2}{2}}$$ and applying Lévy's continuity theorem. For large $$n$$ it justifies the approximations

$$\overline{X}_n\approx\mathrm{N}\left(\mu,\frac{\sigma^2}{n}\right),\qquadS_n\approx\mathrm{N}\left(n\mu,n\sigma^2\right)$$

$$\mathbb{P}\left(\overline{X}_n\leq x\right)\approx\Phi\left(\frac{\sqrt{n}\left(x-\mu\right)}{\sigma}\right).$$

The case of Bernoulli random variables, in which $$S_n\sim\mathrm{Binomial}\left(n,p\right)$$ is approximately $$\mathrm{N}\left(np,np\left(1-p\right)\right),$$ is the **de Moivre–Laplace theorem**. The finiteness of the variance is essential: the average of iid Cauchy random variables has the same Cauchy distribution for every $$n$$ and does not concentrate at all.

The **Berry–Esseen theorem** quantifies the rate of convergence in the central limit theorem. If $$\rho=\mathbb{E}\left[\lvert X_1-\mu\rvert^3\right]<\infty$$ then there is an absolute constant $$C<1$$ with

$$\sup_{x\in\mathbb{R}}\left\lvert\mathbb{P}\left(\frac{\sqrt{n}\left(\overline{X}_n-\mu\right)}{\sigma}\leq x\right)-\Phi\left(x\right)\right\rvert\leq\frac{C\rho}{\sigma^3\sqrt{n}}\,\,\forall\,n\in\mathbb{N},$$

so the error of the normal approximation decreases like $$\frac{1}{\sqrt{n}}$$ and is larger for skewed or heavy-tailed distributions. The central limit theorem also holds for independent random variables that are not identically distributed when no single term dominates the sum, which is made precise by the **Lindeberg condition** that for every $$\varepsilon>0$$ the contribution to the total variance from terms exceeding $$\varepsilon$$ standard deviations of the sum tends to zero.

Let $$\underline{X}_1,\underline{X}_2,\ldots$$ be iid random vectors in $$\mathbb{R}^k$$ with mean vector $$\underline{\mu}$$ and covariance matrix $$\Sigma$$ with finite entries. The **multivariate central limit theorem** states that

$$\sqrt{n}\left(\overline{\underline{X}}_n-\underline{\mu}\right)\xrightarrow{d}\mathrm{N}_k\left(\underline{0},\Sigma\right).$$

Combined with the multivariate delta method it gives the limiting normal distribution of any smooth function of averages, such as the average of the squares together with the average itself, from which the limiting distribution of a variance estimate follows.

Let $$X_1,\ldots,X_n$$ be random variables. The **order statistics** $$X_{(1)}\leq X_{(2)}\leq\ldots\leq X_{(n)}$$ are the values of $$X_1,\ldots,X_n$$ arranged in increasing order, so that $$X_{(k)}$$ is the **$$k$$-th order statistic**, the $$k$$-th smallest value. The smallest and largest are the minimum and maximum of $$X_1,\ldots,X_n,$$

$$X_{(1)}=\min_{i}X_i,\qquad X_{(n)}=\max_{i}X_i.$$

Let $$X_1,\ldots,X_n$$ be iid continuous random variables with cdf $$F$$ and pdf $$f,$$ so that ties occur with probability zero and the inequalities between the order statistics are strict almost surely. The event $$X_{(k)}\leq x$$ occurs if and only if at least $$k$$ of the $$X_i$$ are at most $$x,$$ and the number of such $$X_i$$ is $$\mathrm{Binomial}\left(n,F\left(x\right)\right),$$ so

$$F_{X_{(k)}}\left(x\right)=\sum_{j=k}^n\binom{n}{j}F\left(x\right)^j\left(1-F\left(x\right)\right)^{n-j}$$

$$f_{X_{(k)}}\left(x\right)=\frac{n!}{\left(k-1\right)!\left(n-k\right)!}F\left(x\right)^{k-1}\left(1-F\left(x\right)\right)^{n-k}f\left(x\right).$$

The density follows from requiring $$k-1$$ values below $$x,$$ one value at $$x$$ and $$n-k$$ values above $$x.$$ In particular the maximum and minimum have

$$F_{X_{(n)}}\left(x\right)=F\left(x\right)^n,\qquad F_{X_{(1)}}\left(x\right)=1-\left(1-F\left(x\right)\right)^n,$$

and the joint pdf of all $$n$$ order statistics is $$n!\prod_{i=1}^n f\left(x_i\right)$$ on the region $$x_1<x_2<\ldots<x_n$$ and zero elsewhere. If $$U_1,\ldots,U_n$$ are iid $$\mathrm{U}\left(0,1\right)$$ then $$U_{(k)}\sim\mathrm{Beta}\left(k,n-k+1\right),$$ and since $$F\left(X_i\right)\sim\mathrm{U}\left(0,1\right)$$ by the probability integral transform, $$F\left(X_{(k)}\right)\sim\mathrm{Beta}\left(k,n-k+1\right)$$ in general. Hence $$\mathbb{E}\left[F\left(X_{(k)}\right)\right]=\frac{k}{n+1},$$ so the $$k$$-th order statistic sits on average at the $$\frac{k}{n+1}$$-quantile.

The order statistics have their own limit theorems. Let $$u\in\left(0,1\right)$$ and $$k_n$$ be a sequence with $$\frac{k_n}{n}\rightarrow u,$$ and suppose $$f$$ is continuous and positive at the $$u$$-quantile $$x_u=F^{-1}\left(u\right).$$ The **central order statistic** $$X_{(k_n)}$$ converges in distribution to a normal distribution after centring at the quantile,

$$\sqrt{n}\left(X_{(k_n)}-x_u\right)\xrightarrow{d}\mathrm{N}\left(0,\frac{u\left(1-u\right)}{f\left(x_u\right)^2}\right),$$

so for $$u=\frac{1}{2}$$ the middle order statistic converges to the median $$m$$ with limiting variance $$\frac{1}{4f\left(m\right)^2}.$$ The **extreme order statistics** behave differently: the maximum $$X_{(n)}$$ converges in probability to the supremum of the support, and the **Fisher–Tippett–Gnedenko theorem** states that if some normalisation $$\frac{X_{(n)}-b_n}{a_n}$$ has a non-degenerate limit in distribution then the limit is one of three **extreme value distributions**, the Gumbel, Fréchet or Weibull distribution, determined by the tail of $$F.$$ For example, if $$X_i\sim\mathrm{Exponential}\left(1\right)$$ then $$X_{(n)}-\log_e n$$ converges in distribution to the Gumbel distribution with cdf $$\exp\left(-e^{-x}\right),$$ and $$n\,X_{(1)}\sim\mathrm{Exponential}\left(1\right)$$ exactly for every $$n.$$
