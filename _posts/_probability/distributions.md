---
title:  "Distributions"
description: "Common functions for probability models"
---

Let $$\Theta$$ be a set. A **parametric family** of distributions is a set $$\left\{\mathbb{P}_{X;\,\theta}:\theta\in\Theta\right\}$$ of probability distributions indexed by a scalar or vector $$\theta.$$ The index $$\theta$$ is the **parameter** of the family and the set $$\Theta$$ is its **parameter space**. The pmf or pdf of a member of the family is written $$p_X\left(x;\,\theta\right)$$ or $$f_X\left(x;\,\theta\right).$$ The notation $$X\sim\mathbb{P}_{X;\,\theta}$$ states that $$X$$ is distributed according to that member. The distributions below are the parametric families most used in probability models, each given with its support, pmf or pdf, mean, variance and, where it exists, mgf.

Let $$X$$ be a real-valued random variable with cdf $$F_X$$ and $$u\in\left(0,1\right).$$ The **quantile function** of $$X$$ is the generalised inverse of its cdf.

$$F_X^{-1}\left(u\right):=\inf\left\{x\in\mathbb{R}:F_X\left(x\right)\geq u\right\}$$

The quantile function equals the ordinary inverse when $$F_X$$ is continuous and strictly increasing. The value $$F_X^{-1}\left(u\right)$$ is the **$$u$$-quantile** of $$X.$$ The **median** of $$X$$ is the $$\frac{1}{2}$$-quantile. The **quartiles** of $$X$$ are the $$\frac{1}{4}$$- and $$\frac{3}{4}$$-quantiles.

Let $$n\geq 1.$$ A random variable $$X$$ has the **discrete uniform distribution** on $$\{1,\ldots,n\},$$ written $$X\sim\mathrm{U}\{1,\ldots,n\},$$ if and only if every value is equally likely.

$$p_X\left(k\right)=\frac{1}{n}\,\,\forall\,k\in\{1,\ldots,n\},\qquad\mathbb{E}\left[X\right]=\frac{n+1}{2}$$

$$\mathrm{var}\left[X\right]=\frac{n^2-1}{12}$$

Let $$p\in\left[0,1\right].$$ A random variable $$X$$ has the **Bernoulli distribution** with parameter $$p,$$ written $$X\sim\mathrm{Bernoulli}\left(p\right),$$ if and only if it is the indicator of an event with probability $$p.$$

$$p_X\left(k\right)=p^k\left(1-p\right)^{1-k}\,\,\forall\,k\in\{0,1\},\qquad\mathbb{E}\left[X\right]=p$$

$$\mathrm{var}\left[X\right]=p\left(1-p\right),\qquad M_X\left(t\right)=1-p+pe^t$$

Let $$p\in\left[0,1\right].$$ A **Bernoulli trial** with success probability $$p$$ is an experiment with two outcomes, **success** with probability $$p$$ and **failure** with probability $$1-p.$$

Let $$n\in\mathbb{N}$$ and $$p\in\left[0,1\right].$$ A random variable $$X$$ has the **binomial distribution** with parameters $$n$$ and $$p,$$ written $$X\sim\mathrm{Binomial}\left(n,p\right),$$ if and only if it is the number of successes in $$n$$ independent Bernoulli trials with success probability $$p.$$

$$p_X\left(k\right)=\binom{n}{k}p^k\left(1-p\right)^{n-k}\,\,\forall\,k\in\{0,\ldots,n\},\qquad\mathbb{E}\left[X\right]=np$$

$$\mathrm{var}\left[X\right]=np\left(1-p\right),\qquad M_X\left(t\right)=\left(1-p+pe^t\right)^n$$

The **binomial coefficient** $$\binom{n}{k}=\frac{n!}{k!\left(n-k\right)!}$$ counts the arrangements of $$k$$ successes among $$n$$ trials. The binomial distribution has the following properties:
- a binomial random variable is a sum of $$n$$ iid Bernoulli random variables;
- the sum of independent $$\mathrm{Binomial}\left(n_1,p\right)$$ and $$\mathrm{Binomial}\left(n_2,p\right)$$ random variables is $$\mathrm{Binomial}\left(n_1+n_2,p\right).$$

Let $$p\in\left(0,1\right].$$ A random variable $$X$$ has the **geometric distribution** with parameter $$p,$$ written $$X\sim\mathrm{Geometric}\left(p\right),$$ if and only if it is the number of independent Bernoulli trials with success probability $$p$$ up to and including the first success.

$$p_X\left(k\right)=\left(1-p\right)^{k-1}p\,\,\forall\,k\in\{1,2,\ldots\},\qquad F_X\left(k\right)=1-\left(1-p\right)^k$$

$$\mathbb{E}\left[X\right]=\frac{1}{p},\qquad\mathrm{var}\left[X\right]=\frac{1-p}{p^2}$$

$$M_X\left(t\right)=\frac{pe^t}{1-\left(1-p\right)e^t}\,\,\forall\,t<-\log_e\left(1-p\right)$$

Let $$X$$ be a random variable with state space $$\{1,2,\ldots\}.$$ The random variable $$X$$ is **memoryless** if and only if $$\mathbb{P}\left(X>m+k\mid X>m\right)=\mathbb{P}\left(X>k\right)$$ for all $$m,k\in\mathbb{N}.$$ The geometric distribution is the only discrete distribution on $$\{1,2,\ldots\}$$ that is memoryless. An alternative convention counts the failures before the first success, which shifts the support to $$\{0,1,\ldots\}$$ and the mean to $$\frac{1-p}{p}.$$

Let $$\lambda>0.$$ A random variable $$X$$ has the **Poisson distribution** with rate $$\lambda,$$ written $$X\sim\mathrm{Poisson}\left(\lambda\right),$$ if and only if

$$p_X\left(k\right)=\frac{\lambda^ke^{-\lambda}}{k!}\,\,\forall\,k\in\{0,1,2,\ldots\},\qquad\mathbb{E}\left[X\right]=\mathrm{var}\left[X\right]=\lambda$$

$$M_X\left(t\right)=\exp\left(\lambda\left(e^t-1\right)\right).$$

The sum of independent $$\mathrm{Poisson}\left(\lambda_1\right)$$ and $$\mathrm{Poisson}\left(\lambda_2\right)$$ random variables is $$\mathrm{Poisson}\left(\lambda_1+\lambda_2\right).$$

Let $$X_n\sim\mathrm{Binomial}\left(n,p_n\right)$$ with $$np_n\rightarrow\lambda$$ as $$n\rightarrow\infty.$$ The **Poisson limit theorem** states that the binomial pmf converges to the Poisson pmf, $$p_{X_n}\left(k\right)\rightarrow\frac{\lambda^ke^{-\lambda}}{k!}$$ for every $$k.$$ The Poisson distribution therefore models counts of rare events among many opportunities.

Let $$a<b.$$ A random variable $$X$$ has the **continuous uniform distribution** on $$\left[a,b\right],$$ written $$X\sim\mathrm{U}\left(a,b\right),$$ if and only if its density is constant on $$\left[a,b\right].$$

$$f_X\left(x\right)=\frac{1}{b-a}\,\,\forall\,x\in\left[a,b\right],\qquad F_X\left(x\right)=\frac{x-a}{b-a},\qquad\mathbb{E}\left[X\right]=\frac{a+b}{2}$$

$$\mathrm{var}\left[X\right]=\frac{\left(b-a\right)^2}{12},\qquad M_X\left(t\right)=\frac{e^{tb}-e^{ta}}{t\left(b-a\right)}$$

Let $$X$$ be a continuous random variable with cdf $$F_X.$$ The **probability integral transform** states that $$F_X\left(X\right)\sim\mathrm{U}\left(0,1\right).$$ Conversely, if $$U\sim\mathrm{U}\left(0,1\right)$$ then $$F_X^{-1}\left(U\right)$$ has cdf $$F_X$$ for any cdf $$F_X.$$

**Inverse transform sampling** is the method that generates a random variable with cdf $$F_X$$ as $$F_X^{-1}\left(U\right)$$ from a uniform random variable $$U\sim\mathrm{U}\left(0,1\right).$$

Let $$\lambda>0.$$ A random variable $$X$$ has the **exponential distribution** with rate $$\lambda,$$ written $$X\sim\mathrm{Exponential}\left(\lambda\right),$$ if and only if

$$f_X\left(x\right)=\lambda e^{-\lambda x}\,\,\forall\,x\geq 0,\qquad F_X\left(x\right)=1-e^{-\lambda x},\qquad\mathbb{E}\left[X\right]=\frac{1}{\lambda}$$

$$\mathrm{var}\left[X\right]=\frac{1}{\lambda^2},\qquad M_X\left(t\right)=\frac{\lambda}{\lambda-t}\,\,\forall\,t<\lambda.$$

Let $$X$$ be a random variable with state space $$\left[0,\infty\right).$$ The random variable $$X$$ is **memoryless** if and only if $$\mathbb{P}\left(X>s+t\mid X>s\right)=\mathbb{P}\left(X>t\right)$$ for all $$s,t\geq 0.$$ The exponential distribution has the following properties:
- it is the continuous analogue of the geometric distribution and the only continuous distribution on $$\left[0,\infty\right)$$ that is memoryless;
- it models waiting times between events that occur at a constant rate;
- the minimum of independent $$\mathrm{Exponential}\left(\lambda_i\right)$$ random variables is $$\mathrm{Exponential}\left(\sum_i\lambda_i\right).$$

Let $$\alpha>0.$$ The **gamma function** at $$\alpha$$ is the improper integral

$$\Gamma\left(\alpha\right):=\int_0^{\infty}x^{\alpha-1}e^{-x}\,dx.$$

The gamma function extends the factorial to real arguments and has the following properties:

$$\Gamma\left(\alpha+1\right)=\alpha\,\Gamma\left(\alpha\right),\qquad\Gamma\left(n\right)=\left(n-1\right)!\,\,\forall\,n\in\mathbb{N},\qquad\Gamma\left(\tfrac{1}{2}\right)=\sqrt{\pi}$$

Let $$\alpha>0$$ and $$\beta>0.$$ A random variable $$X$$ has the **gamma distribution** with shape $$\alpha$$ and rate $$\beta,$$ written $$X\sim\mathrm{Gamma}\left(\alpha,\beta\right),$$ if and only if

$$f_X\left(x\right)=\frac{\beta^{\alpha}}{\Gamma\left(\alpha\right)}x^{\alpha-1}e^{-\beta x}\,\,\forall\,x>0$$

$$\mathbb{E}\left[X\right]=\frac{\alpha}{\beta},\qquad\mathrm{var}\left[X\right]=\frac{\alpha}{\beta^2}$$

$$M_X\left(t\right)=\left(\frac{\beta}{\beta-t}\right)^{\alpha}\,\,\forall\,t<\beta.$$

The gamma distribution has the following properties:
- the exponential distribution is $$\mathrm{Gamma}\left(1,\lambda\right);$$
- the sum of independent $$\mathrm{Gamma}\left(\alpha_i,\beta\right)$$ random variables with a common rate is $$\mathrm{Gamma}\left(\sum_i\alpha_i,\beta\right),$$ so the sum of $$n$$ iid $$\mathrm{Exponential}\left(\lambda\right)$$ random variables is $$\mathrm{Gamma}\left(n,\lambda\right);$$
- the gamma distribution is also parametrised by its **scale** $$\theta=\frac{1}{\beta}.$$

Let $$\alpha>0$$ and $$\beta>0.$$ The **beta function** at $$\left(\alpha,\beta\right)$$ is the integral

$$B\left(\alpha,\beta\right):=\int_0^1 x^{\alpha-1}\left(1-x\right)^{\beta-1}dx=\frac{\Gamma\left(\alpha\right)\Gamma\left(\beta\right)}{\Gamma\left(\alpha+\beta\right)}.$$

Let $$\alpha>0$$ and $$\beta>0.$$ A random variable $$X$$ has the **beta distribution** with shape parameters $$\alpha$$ and $$\beta,$$ written $$X\sim\mathrm{Beta}\left(\alpha,\beta\right),$$ if and only if

$$f_X\left(x\right)=\frac{x^{\alpha-1}\left(1-x\right)^{\beta-1}}{B\left(\alpha,\beta\right)}\,\,\forall\,x\in\left[0,1\right]$$

$$\mathbb{E}\left[X\right]=\frac{\alpha}{\alpha+\beta}$$

$$\mathrm{var}\left[X\right]=\frac{\alpha\beta}{\left(\alpha+\beta\right)^2\left(\alpha+\beta+1\right)}.$$

The beta distribution has the following properties:
- it models random proportions;
- $$\mathrm{Beta}\left(1,1\right)$$ is $$\mathrm{U}\left(0,1\right);$$
- if $$Y_1\sim\mathrm{Gamma}\left(\alpha,\lambda\right)$$ and $$Y_2\sim\mathrm{Gamma}\left(\beta,\lambda\right)$$ are independent then $$\frac{Y_1}{Y_1+Y_2}\sim\mathrm{Beta}\left(\alpha,\beta\right).$$

Let $$k\in\mathbb{N}$$ with $$k\geq 1.$$ A random variable $$X$$ has the **chi-squared distribution** with $$k$$ **degrees of freedom**, written $$X\sim\chi^2_k,$$ if and only if $$X\sim\mathrm{Gamma}\left(\frac{k}{2},\frac{1}{2}\right).$$

$$f_X\left(x\right)=\frac{x^{\frac{k}{2}-1}e^{-\frac{x}{2}}}{2^{\frac{k}{2}}\Gamma\left(\frac{k}{2}\right)}\,\,\forall\,x>0$$

$$\mathbb{E}\left[X\right]=k,\qquad\mathrm{var}\left[X\right]=2k,\qquad M_X\left(t\right)=\left(1-2t\right)^{-\frac{k}{2}}\,\,\forall\,t<\tfrac{1}{2}$$

The chi-squared distribution has the following properties:
- the sum of independent $$\chi^2_{k_1}$$ and $$\chi^2_{k_2}$$ random variables is $$\chi^2_{k_1+k_2};$$
- the chi-squared distribution with $$k$$ degrees of freedom is the distribution of the sum of squares of $$k$$ iid standard normal random variables, defined below.

Let $$\mu\in\mathbb{R}$$ and $$\sigma^2>0.$$ A random variable $$X$$ has the **normal distribution** or **Gaussian distribution** with mean $$\mu$$ and variance $$\sigma^2,$$ written $$X\sim\mathrm{N}\left(\mu,\sigma^2\right),$$ if and only if

$$f_X\left(x\right)=\frac{1}{\sqrt{2\pi\sigma^2}}\exp\left(-\frac{\left(x-\mu\right)^2}{2\sigma^2}\right)\,\,\forall\,x\in\mathbb{R}$$

$$\mathbb{E}\left[X\right]=\mu,\qquad\mathrm{var}\left[X\right]=\sigma^2,\qquad M_X\left(t\right)=\exp\left(\mu t+\tfrac{1}{2}\sigma^2t^2\right).$$

The density integrates to one by the Gaussian integral, and the cdf has no closed form.

The **standard normal distribution** is $$\mathrm{N}\left(0,1\right).$$ Its pdf is written $$\phi\left(z\right)=\frac{1}{\sqrt{2\pi}}e^{-\frac{z^2}{2}}$$ and its cdf is written $$\Phi\left(z\right)=\int_{-\infty}^z\phi\left(t\right)dt.$$ The normal distribution has the following properties:
- it is symmetric about $$\mu,$$ so has skewness $$0,$$ and has excess kurtosis $$0;$$
- if $$X\sim\mathrm{N}\left(\mu,\sigma^2\right)$$ then $$aX+b\sim\mathrm{N}\left(a\mu+b,a^2\sigma^2\right),$$ so its standardisation is $$\frac{X-\mu}{\sigma}\sim\mathrm{N}\left(0,1\right)$$ and $$F_X\left(x\right)=\Phi\left(\frac{x-\mu}{\sigma}\right);$$
- the sum of independent $$\mathrm{N}\left(\mu_1,\sigma_1^2\right)$$ and $$\mathrm{N}\left(\mu_2,\sigma_2^2\right)$$ random variables is $$\mathrm{N}\left(\mu_1+\mu_2,\sigma_1^2+\sigma_2^2\right);$$
- if $$Z\sim\mathrm{N}\left(0,1\right)$$ then $$Z^2\sim\chi^2_1;$$
- approximately $$68\%,$$ $$95\%$$ and $$99.7\%$$ of the probability lies within one, two and three standard deviations of the mean.

Let $$\nu>0,$$ and $$Z\sim\mathrm{N}\left(0,1\right)$$ and $$V\sim\chi^2_{\nu}$$ be independent. A random variable $$T$$ has **Student's $$t$$-distribution** with $$\nu$$ degrees of freedom, written $$T\sim t_{\nu},$$ if and only if it has the distribution of $$\frac{Z}{\sqrt{V/\nu}}.$$

$$f_T\left(t\right)=\frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\sqrt{\nu\pi}\,\Gamma\left(\frac{\nu}{2}\right)}\left(1+\frac{t^2}{\nu}\right)^{-\frac{\nu+1}{2}}\,\,\forall\,t\in\mathbb{R}$$

$$\mathbb{E}\left[T\right]=0\,\,\left(\nu>1\right),\qquad\mathrm{var}\left[T\right]=\frac{\nu}{\nu-2}\,\,\left(\nu>2\right)$$

The $$t$$-distribution has the following properties:
- it is symmetric about $$0$$ with heavier tails than the standard normal distribution;
- its $$k$$-th moment exists only for $$k<\nu,$$ and its mgf does not exist;
- as $$\nu\rightarrow\infty$$ the pdf of $$t_{\nu}$$ converges to $$\phi;$$
- it arises when a normal mean is standardised by an estimated rather than known standard deviation.

The **Cauchy distribution** is $$t_1,$$ with pdf $$\frac{1}{\pi\left(1+t^2\right)}.$$ The Cauchy distribution has no mean.

Let $$d_1,d_2\geq 1,$$ and $$U\sim\chi^2_{d_1}$$ and $$V\sim\chi^2_{d_2}$$ be independent. A random variable $$X$$ has the **$$F$$-distribution** with $$d_1$$ and $$d_2$$ degrees of freedom, written $$X\sim F_{d_1,d_2},$$ if and only if it has the distribution of $$\frac{U/d_1}{V/d_2}.$$

$$f_X\left(x\right)=\frac{1}{B\left(\frac{d_1}{2},\frac{d_2}{2}\right)}\left(\frac{d_1}{d_2}\right)^{\frac{d_1}{2}}x^{\frac{d_1}{2}-1}\left(1+\frac{d_1}{d_2}x\right)^{-\frac{d_1+d_2}{2}}\,\,\forall\,x>0$$

$$\mathbb{E}\left[X\right]=\frac{d_2}{d_2-2}\,\,\left(d_2>2\right)$$

The $$F$$-distribution has the following properties:
- if $$T\sim t_{\nu}$$ then $$T^2\sim F_{1,\nu};$$
- if $$X\sim F_{d_1,d_2}$$ then $$\frac{1}{X}\sim F_{d_2,d_1};$$
- it arises as the distribution of a ratio of independent variance estimates.

Let $$k\geq 2,$$ $$n\in\mathbb{N}$$ and $$\underline{p}=\left(p_1,\ldots,p_k\right)$$ with $$p_i\geq 0$$ and $$\sum_{i=1}^k p_i=1.$$ A random vector $$\underline{X}=\left(X_1,\ldots,X_k\right)$$ has the **multinomial distribution** with parameters $$n$$ and $$\underline{p},$$ written $$\underline{X}\sim\mathrm{Multinomial}\left(n,\underline{p}\right),$$ if and only if it counts how many of $$n$$ independent trials, each with $$k$$ possible outcomes with probabilities $$\underline{p},$$ result in each outcome.

$$p_{\underline{X}}\left(\underline{x}\right)=\frac{n!}{x_1!\cdots x_k!}\prod_{i=1}^k p_i^{x_i}\,\,\forall\,\underline{x}\in\{0,\ldots,n\}^k\,\,\mathrm{with}\,\,\sum_{i=1}^k x_i=n$$

$$\mathbb{E}\left[X_i\right]=np_i,\qquad\mathrm{var}\left[X_i\right]=np_i\left(1-p_i\right)$$

$$\mathrm{cov}\left[X_i,X_j\right]=-np_ip_j\,\,\forall\,i\neq j$$

The multinomial distribution has the following properties:
- each marginal $$X_i$$ is $$\mathrm{Binomial}\left(n,p_i\right);$$
- the binomial distribution is the case $$k=2;$$
- the components are negatively correlated since they sum to $$n.$$

Let $$k\geq 1,$$ $$\underline{\mu}\in\mathbb{R}^k$$ and $$\Sigma\in\mathbb{R}^{\,k\times k}$$ be symmetric positive definite. A random vector $$\underline{X}$$ has the **multivariate normal distribution** with mean vector $$\underline{\mu}$$ and covariance matrix $$\Sigma,$$ written $$\underline{X}\sim\mathrm{N}_k\left(\underline{\mu},\Sigma\right),$$ if and only if

$$f_{\underline{X}}\left(\underline{x}\right)=\frac{1}{\left(2\pi\right)^{\frac{k}{2}}\lvert\Sigma\rvert^{\frac{1}{2}}}\exp\left(-\frac{1}{2}\left(\underline{x}-\underline{\mu}\right)^\intercal\Sigma^{-1}\left(\underline{x}-\underline{\mu}\right)\right)\,\,\forall\,\underline{x}\in\mathbb{R}^k$$

$$M_{\underline{X}}\left(\underline{t}\right)=\mathbb{E}\left[e^{\underline{t}^\intercal\underline{X}}\right]=\exp\left(\underline{t}^\intercal\underline{\mu}+\tfrac{1}{2}\underline{t}^\intercal\Sigma\underline{t}\right).$$

Equivalently, $$\underline{X}$$ is multivariate normal if and only if every linear combination $$\underline{a}^\intercal\underline{X}$$ has a univariate normal distribution. This equivalent definition also applies when $$\Sigma$$ is only positive semi-definite and no density exists.

Let $$\underline{X}\sim\mathrm{N}_k\left(\underline{\mu},\Sigma\right).$$ The **Mahalanobis distance** of $$\underline{X}$$ from $$\underline{\mu}$$ is the square root of the quadratic form $$\left(\underline{X}-\underline{\mu}\right)^\intercal\Sigma^{-1}\left(\underline{X}-\underline{\mu}\right).$$ The multivariate normal distribution has the following properties:
- $$A\underline{X}+\underline{b}\sim\mathrm{N}_m\left(A\underline{\mu}+\underline{b},A\Sigma A^\intercal\right)$$ for $$A\in\mathbb{R}^{\,m\times k}$$ and $$\underline{b}\in\mathbb{R}^m,$$ so every marginal distribution of a subset of components is multivariate normal;
- components are independent if and only if they are uncorrelated, so $$\Sigma$$ diagonal implies independent components;
- partitioning $$\underline{X}=\left(\underline{X}_1,\underline{X}_2\right)$$ with corresponding blocks of $$\underline{\mu}$$ and $$\Sigma,$$ the conditional distribution of $$\underline{X}_1$$ given $$\underline{X}_2=\underline{x}_2$$ is multivariate normal with mean $$\underline{\mu}_1+\Sigma_{12}\Sigma_{22}^{-1}\left(\underline{x}_2-\underline{\mu}_2\right)$$ and covariance matrix $$\Sigma_{11}-\Sigma_{12}\Sigma_{22}^{-1}\Sigma_{21};$$
- if $$\underline{Z}\sim\mathrm{N}_k\left(\underline{0},I_k\right)$$ has iid standard normal components and $$\Sigma=LL^\intercal$$ is the Cholesky decomposition then $$\underline{\mu}+L\underline{Z}\sim\mathrm{N}_k\left(\underline{\mu},\Sigma\right),$$ which is how multivariate normal random vectors are simulated;
- the squared Mahalanobis distance has the $$\chi^2_k$$ distribution.

Let $$k\geq 2.$$ The **simplex** $$\Delta_k$$ is the set of probability vectors with positive components.

$$\Delta_k:=\left\{\underline{x}\in\mathbb{R}^k:x_i>0,\,\sum_{i=1}^k x_i=1\right\}$$

Let $$k\geq 2,$$ $$\underline{\alpha}=\left(\alpha_1,\ldots,\alpha_k\right)$$ with $$\alpha_i>0$$ and $$\alpha_0=\sum_{i=1}^k\alpha_i.$$ A random vector $$\underline{X}$$ has the **Dirichlet distribution** with parameter $$\underline{\alpha},$$ written $$\underline{X}\sim\mathrm{Dirichlet}\left(\underline{\alpha}\right),$$ if and only if it takes values in the simplex with density

$$f_{\underline{X}}\left(\underline{x}\right)=\frac{\Gamma\left(\alpha_0\right)}{\prod_{i=1}^k\Gamma\left(\alpha_i\right)}\prod_{i=1}^k x_i^{\alpha_i-1}\,\,\forall\,\underline{x}\in\Delta_k$$

$$\mathbb{E}\left[X_i\right]=\frac{\alpha_i}{\alpha_0}$$

$$\mathrm{var}\left[X_i\right]=\frac{\alpha_i\left(\alpha_0-\alpha_i\right)}{\alpha_0^2\left(\alpha_0+1\right)}$$

$$\mathrm{cov}\left[X_i,X_j\right]=-\frac{\alpha_i\alpha_j}{\alpha_0^2\left(\alpha_0+1\right)}\,\,\forall\,i\neq j.$$

The Dirichlet distribution has the following properties:
- it is the multivariate generalisation of the beta distribution, which is the case $$k=2,$$ and models random probability vectors;
- each marginal $$X_i$$ is $$\mathrm{Beta}\left(\alpha_i,\alpha_0-\alpha_i\right);$$
- if $$Y_i\sim\mathrm{Gamma}\left(\alpha_i,\lambda\right)$$ are independent then $$\frac{1}{\sum_i Y_i}\left(Y_1,\ldots,Y_k\right)\sim\mathrm{Dirichlet}\left(\underline{\alpha}\right).$$

Let $$\left\{\mathbb{P}_{X;\,\theta}:\theta\in\Theta\right\}$$ be a parametric family. The family is an **exponential family** if and only if its pmf or pdf can be written as

$$f_X\left(x;\,\theta\right)=h\left(x\right)\exp\left(\underline{\eta}\left(\theta\right)^\intercal\underline{T}\left(x\right)-A\left(\theta\right)\right)$$

for some functions $$h$$ and $$\underline{T}$$ of $$x$$ alone and $$\underline{\eta}$$ and $$A$$ of $$\theta$$ alone. The vector $$\underline{\eta}\left(\theta\right)$$ is the **natural parameter**, the vector $$\underline{T}\left(x\right)$$ is the vector of **natural statistics** and the function $$A\left(\theta\right)$$ is the **log-partition function**, which normalises the density. Exponential families have the following properties:
- the Bernoulli distribution has $$\eta=\log_e\frac{p}{1-p},$$ $$T\left(x\right)=x$$ and $$A=\log_e\left(1+e^{\eta}\right);$$
- the normal distribution with known variance has $$\eta=\frac{\mu}{\sigma^2}$$ and $$T\left(x\right)=x;$$
- the Bernoulli, binomial and multinomial (with $$n$$ known), geometric, Poisson, exponential, gamma, beta, chi-squared, normal, multivariate normal and Dirichlet distributions are exponential families, whereas the uniform, $$t$$- and $$F$$-distributions are not;
- the derivatives of the log-partition function with respect to the natural parameter give the moments of the natural statistics, $$\mathbb{E}\left[\underline{T}\left(X\right)\right]=\nabla A$$ and $$\mathrm{cov}\left[\underline{T}\left(X\right)\right]=H_A.$$
