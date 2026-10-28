---
title:  "Limit Theorems"
description: "Behaviour after many outcomes have been observed"
---

Let $$X_1,X_2,\ldots$$ be an iid sequence of random variables with mean $$\mu$$ and $$n\geq 1.$$ The **partial sum** of the first $$n$$ terms is $$S_n$$ and the **sample average** of the first $$n$$ terms is $$\overline{X}_n.$$

$$S_n:=\sum_{i=1}^n X_i,\qquad\overline{X}_n:=\frac{1}{n}\sum_{i=1}^n X_i$$

If the variance $$\sigma^2$$ is finite then by linearity of expectation and independence

$$\mathbb{E}\left[\overline{X}_n\right]=\mu,\qquad\mathrm{var}\left[\overline{X}_n\right]=\frac{\sigma^2}{n}.$$

The limit theorems describe how $$\overline{X}_n$$ behaves as $$n\rightarrow\infty.$$ The laws of large numbers state that it converges to $$\mu,$$ and the central limit theorem describes the distribution of its fluctuations around $$\mu$$ at the scale $$\frac{1}{\sqrt{n}}.$$

Let $$X_1,X_2,\ldots$$ be an iid sequence of random variables with mean $$\mu.$$ The **weak law of large numbers** states that the sample average converges in probability to the mean.

$$\overline{X}_n\xrightarrow{p}\mu,\qquad\mathrm{that}\,\,\mathrm{is}\,\,\lim_{n\rightarrow\infty}\mathbb{P}\left(\left\lvert\overline{X}_n-\mu\right\rvert>\varepsilon\right)=0\,\,\forall\,\varepsilon>0$$

The weak law of large numbers has the following properties:
- under the assumption of finite variance it follows from Chebyshev's inequality, $$\mathbb{P}\left(\left\lvert\overline{X}_n-\mu\right\rvert>\varepsilon\right)\leq\frac{\sigma^2}{n\varepsilon^2},$$ but it holds whenever the mean exists;
- it also holds for independent random variables with a common mean that are not identically distributed provided their variances are bounded;
- it also holds for uncorrelated rather than independent random variables with bounded variances.

Let $$X_1,X_2,\ldots$$ be an iid sequence of random variables. The **strong law of large numbers** states that the sample average converges almost surely to the mean, and that the existence of the mean is both necessary and sufficient.

$$\overline{X}_n\xrightarrow{a.s.}\mu\Leftrightarrow\mathbb{E}\left[\lvert X_1\rvert\right]<\infty$$

The strong law states that for almost every outcome the sequence of averages eventually stays within any fixed distance of $$\mu,$$ whereas the weak law only states that the probability of a deviation at a given $$n$$ is small. Applied to the indicator random variables $$\mathbf{1}_{\{X_i\in A\}}$$ the strong law gives

$$\frac{1}{n}\sum_{i=1}^n\mathbf{1}_{\{X_i\in A\}}\xrightarrow{a.s.}\mathbb{P}\left(X_1\in A\right),$$

so the long-run relative frequency of an event converges to its probability. This is the justification for the frequentist interpretation of probability and for Monte Carlo estimation of probabilities and expectations by averaging simulated values.

Let $$X_1,\ldots,X_n$$ be random variables. The **empirical distribution function** of $$X_1,\ldots,X_n$$ is the cdf that places probability $$\frac{1}{n}$$ on each observed value.

$$\hat{F}_n\left(x\right):=\frac{1}{n}\sum_{i=1}^n\mathbf{1}_{\{X_i\leq x\}}\,\,\forall\,x\in\mathbb{R}$$

Let $$X_1,X_2,\ldots$$ be an iid sequence of random variables with cdf $$F_X.$$ By the strong law $$\hat{F}_n\left(x\right)\xrightarrow{a.s.}F_X\left(x\right)$$ for each fixed $$x.$$ The **Glivenko–Cantelli theorem** states that the convergence is uniform in $$x.$$

$$\sup_{x\in\mathbb{R}}\left\lvert\hat{F}_n\left(x\right)-F_X\left(x\right)\right\rvert\xrightarrow{a.s.}0$$

Let $$X_1,X_2,\ldots$$ be an iid sequence of random variables with mean $$\mu$$ and finite variance $$\sigma^2>0.$$ The **central limit theorem** states that the standardised sample average converges in distribution to the standard normal distribution, whatever the distribution of the $$X_i.$$

$$\frac{\sqrt{n}\left(\overline{X}_n-\mu\right)}{\sigma}=\frac{S_n-n\mu}{\sigma\sqrt{n}}\xrightarrow{d}\mathrm{N}\left(0,1\right)$$

Equivalently, $$\sqrt{n}\left(\overline{X}_n-\mu\right)\xrightarrow{d}\mathrm{N}\left(0,\sigma^2\right).$$ The central limit theorem has the following properties:
- it is proved by showing that the characteristic function of the standardised average converges to $$e^{-\frac{t^2}{2}}$$ and applying Lévy's continuity theorem;
- for large $$n$$ it justifies the approximations $$\overline{X}_n\approx\mathrm{N}\left(\mu,\frac{\sigma^2}{n}\right),$$ $$S_n\approx\mathrm{N}\left(n\mu,n\sigma^2\right)$$ and $$\mathbb{P}\left(\overline{X}_n\leq x\right)\approx\Phi\left(\frac{\sqrt{n}\left(x-\mu\right)}{\sigma}\right);$$
- the finiteness of the variance is essential: the average of iid Cauchy random variables has the same Cauchy distribution for every $$n$$ and does not concentrate at all.

The **de Moivre–Laplace theorem** is the central limit theorem for Bernoulli random variables, in which $$S_n\sim\mathrm{Binomial}\left(n,p\right)$$ is approximately $$\mathrm{N}\left(np,np\left(1-p\right)\right).$$

Let $$X_1,X_2,\ldots$$ be an iid sequence of random variables with mean $$\mu,$$ finite variance $$\sigma^2>0$$ and finite third absolute central moment $$\rho=\mathbb{E}\left[\lvert X_1-\mu\rvert^3\right].$$ The **Berry–Esseen theorem** states that there is an absolute constant $$C<1$$ such that the error of the normal approximation is bounded by a multiple of $$\frac{1}{\sqrt{n}}.$$

$$\sup_{x\in\mathbb{R}}\left\lvert\mathbb{P}\left(\frac{\sqrt{n}\left(\overline{X}_n-\mu\right)}{\sigma}\leq x\right)-\Phi\left(x\right)\right\rvert\leq\frac{C\rho}{\sigma^3\sqrt{n}}\,\,\forall\,n\in\mathbb{N}$$

The error of the normal approximation therefore decreases like $$\frac{1}{\sqrt{n}}$$ and is larger for skewed or heavy-tailed distributions.

Let $$X_1,X_2,\ldots$$ be independent random variables that are not necessarily identically distributed. The **Lindeberg condition** is the condition that for every $$\varepsilon>0$$ the contribution to the total variance from terms exceeding $$\varepsilon$$ standard deviations of the sum tends to zero, which makes precise the requirement that no single term dominates the sum. The central limit theorem holds for independent random variables that satisfy the Lindeberg condition.

Let $$\underline{X}_1,\underline{X}_2,\ldots$$ be iid random vectors in $$\mathbb{R}^k$$ with mean vector $$\underline{\mu}$$ and covariance matrix $$\Sigma$$ with finite entries. The **multivariate central limit theorem** states that the centred sample average converges in distribution to a multivariate normal distribution.

$$\sqrt{n}\left(\overline{\underline{X}}_n-\underline{\mu}\right)\xrightarrow{d}\mathrm{N}_k\left(\underline{0},\Sigma\right)$$

Combined with the multivariate delta method, the multivariate central limit theorem gives the limiting normal distribution of any smooth function of averages, such as the average of the squares together with the average itself, from which the limiting distribution of a variance estimate follows.

Let $$X_1,\ldots,X_n$$ be random variables. The **order statistics** of $$X_1,\ldots,X_n$$ are the values $$X_{(1)}\leq X_{(2)}\leq\ldots\leq X_{(n)}$$ of $$X_1,\ldots,X_n$$ arranged in increasing order. The **$$k$$-th order statistic** $$X_{(k)}$$ is the $$k$$-th smallest value. The smallest and largest order statistics are the minimum and maximum of $$X_1,\ldots,X_n.$$

$$X_{(1)}=\min_{i}X_i,\qquad X_{(n)}=\max_{i}X_i$$

Let $$X_1,\ldots,X_n$$ be iid continuous random variables with cdf $$F$$ and pdf $$f,$$ so that ties occur with probability zero and the inequalities between the order statistics are strict almost surely. The event $$X_{(k)}\leq x$$ occurs if and only if at least $$k$$ of the $$X_i$$ are at most $$x,$$ and the number of such $$X_i$$ is $$\mathrm{Binomial}\left(n,F\left(x\right)\right),$$ so the $$k$$-th order statistic has cdf and pdf

$$F_{X_{(k)}}\left(x\right)=\sum_{j=k}^n\binom{n}{j}F\left(x\right)^j\left(1-F\left(x\right)\right)^{n-j}$$

$$f_{X_{(k)}}\left(x\right)=\frac{n!}{\left(k-1\right)!\left(n-k\right)!}F\left(x\right)^{k-1}\left(1-F\left(x\right)\right)^{n-k}f\left(x\right).$$

The density follows from requiring $$k-1$$ values below $$x,$$ one value at $$x$$ and $$n-k$$ values above $$x.$$ Order statistics of iid continuous random variables have the following properties:
- the maximum and minimum have $$F_{X_{(n)}}\left(x\right)=F\left(x\right)^n$$ and $$F_{X_{(1)}}\left(x\right)=1-\left(1-F\left(x\right)\right)^n;$$
- the joint pdf of all $$n$$ order statistics is $$n!\prod_{i=1}^n f\left(x_i\right)$$ on the region $$x_1<x_2<\ldots<x_n$$ and zero elsewhere;
- if $$U_1,\ldots,U_n$$ are iid $$\mathrm{U}\left(0,1\right)$$ then $$U_{(k)}\sim\mathrm{Beta}\left(k,n-k+1\right);$$
- since $$F\left(X_i\right)\sim\mathrm{U}\left(0,1\right)$$ by the probability integral transform, $$F\left(X_{(k)}\right)\sim\mathrm{Beta}\left(k,n-k+1\right)$$ in general, so $$\mathbb{E}\left[F\left(X_{(k)}\right)\right]=\frac{k}{n+1}$$ and the $$k$$-th order statistic sits on average at the $$\frac{k}{n+1}$$-quantile.

Let $$X_1,X_2,\ldots$$ be iid continuous random variables with cdf $$F$$ and pdf $$f,$$ $$u\in\left(0,1\right),$$ $$x_u=F^{-1}\left(u\right)$$ be the $$u$$-quantile at which $$f$$ is continuous and positive, and $$k_n$$ be a sequence with $$\frac{k_n}{n}\rightarrow u.$$ The **central order statistic** $$X_{(k_n)}$$ is the order statistic whose rank grows in proportion to $$n.$$ The central order statistic converges in distribution to a normal distribution after centring at the quantile.

$$\sqrt{n}\left(X_{(k_n)}-x_u\right)\xrightarrow{d}\mathrm{N}\left(0,\frac{u\left(1-u\right)}{f\left(x_u\right)^2}\right)$$

For $$u=\frac{1}{2}$$ the middle order statistic converges to the median $$m$$ with limiting variance $$\frac{1}{4f\left(m\right)^2}.$$

Let $$X_1,X_2,\ldots$$ be iid random variables with cdf $$F.$$ The **extreme order statistics** are the maximum $$X_{(n)}$$ and the minimum $$X_{(1)}.$$ The maximum converges in probability to the supremum of the support.

Let $$X_1,X_2,\ldots$$ be iid random variables with cdf $$F,$$ and $$a_n>0$$ and $$b_n$$ be normalising sequences. The **Fisher–Tippett–Gnedenko theorem** states that if $$\frac{X_{(n)}-b_n}{a_n}$$ has a non-degenerate limit in distribution then the limit is one of three **extreme value distributions**, the Gumbel, Fréchet or Weibull distribution, determined by the tail of $$F.$$ For example, if $$X_i\sim\mathrm{Exponential}\left(1\right)$$ then $$X_{(n)}-\log_e n$$ converges in distribution to the Gumbel distribution with cdf $$\exp\left(-e^{-x}\right),$$ and $$n\,X_{(1)}\sim\mathrm{Exponential}\left(1\right)$$ exactly for every $$n.$$
