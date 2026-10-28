---
title:  "Computational Inference"
description: "Approximating posteriors that cannot be found in closed form"
---

Let $$f\left(\underline{x}\mid\theta\right)\pi\left(\theta\right)$$ be a Bayesian model. The **unnormalised posterior** is the product of the likelihood and the prior, which can be evaluated without the marginal likelihood.

$$\tilde{\pi}\left(\theta\right):=f\left(\underline{x}\mid\theta\right)\pi\left(\theta\right)$$

The posterior distribution is $$\pi\left(\theta\mid\underline{x}\right)=\frac{\tilde{\pi}\left(\theta\right)}{f\left(\underline{x}\right)},$$ and is the **target** of the methods below.

Let $$g:\Theta\rightarrow\mathbb{R}$$ be a function. An **intractable integral** is a posterior summary such as the marginal likelihood $$f\left(\underline{x}\right)=\int_{\Theta}\tilde{\pi}\left(\theta\right)d\theta$$ or a posterior expectation $$\mathbb{E}\left[g\left(\theta\right)\mid\underline{x}\right]=\int_{\Theta}g\left(\theta\right)\pi\left(\theta\mid\underline{x}\right)d\theta$$ that has no closed form. Outside conjugate models the posterior distribution is known only up to its normalising constant and its summaries are intractable integrals over a parameter space whose dimension is often large. Numerical integration on a grid is only feasible in one or two dimensions, since the number of grid points grows exponentially with the dimension. **Computational inference** approximates intractable integrals either by simulation from the posterior or by approximating the posterior with a tractable distribution.

Let $$\theta^{(1)},\ldots,\theta^{(S)}$$ be iid draws from the posterior distribution and $$g:\Theta\rightarrow\mathbb{R}$$ be a function. The **Monte Carlo estimate** of the posterior expectation of $$g$$ is the average of $$g$$ over the draws.

$$\hat{g}_S:=\frac{1}{S}\sum_{s=1}^S g\left(\theta^{(s)}\right)\approx\mathbb{E}\left[g\left(\theta\right)\mid\underline{x}\right]$$

Let $$\hat{g}_S$$ be a Monte Carlo estimate from iid draws and $$\sigma_g^2$$ be the posterior variance of $$g\left(\theta\right).$$ The **Monte Carlo standard error** of $$\hat{g}_S$$ is $$\frac{\sigma_g}{\sqrt{S}},$$ estimated by replacing $$\sigma_g$$ with the sample standard deviation of the $$g\left(\theta^{(s)}\right).$$ The Monte Carlo estimate has the following properties:
- it is unbiased;
- it converges almost surely to the posterior expectation by the strong law of large numbers;
- if $$\sigma_g^2$$ is finite it is asymptotically normal by the central limit theorem, so its error decreases as $$S^{-\frac{1}{2}}$$ regardless of the dimension of $$\Theta;$$
- posterior probabilities are estimated by averaging indicators, quantiles by sample quantiles of the draws and the posterior predictive distribution by drawing $$\tilde{x}^{(s)}\sim f\left(\tilde{x}\mid\theta^{(s)}\right)$$ for each $$s.$$

The difficulty of Monte Carlo estimation is generating the draws.

Let $$\tilde{\pi}$$ be an unnormalised posterior. A **proposal distribution** is a probability distribution $$q$$ on $$\Theta$$ that is easy to sample from.

Let $$\tilde{\pi}$$ be an unnormalised posterior, $$q$$ be a proposal distribution and $$M$$ be a constant with $$\tilde{\pi}\left(\theta\right)\leq Mq\left(\theta\right)$$ for all $$\theta.$$ **Rejection sampling** is the method that draws $$\theta\sim q,$$ accepts it with probability $$\frac{\tilde{\pi}\left(\theta\right)}{Mq\left(\theta\right)}$$ and otherwise discards it. Rejection sampling has the following properties:
- the accepted draws are iid from the posterior;
- the probability that a draw is accepted is $$\frac{f\left(\underline{x}\right)}{M},$$ which is typically tiny in more than a few dimensions because no simple $$q$$ matches the posterior closely enough for $$M$$ to be small.

Let $$\tilde{\pi}$$ be an unnormalised posterior and $$q$$ be a proposal distribution with $$q\left(\theta\right)>0$$ wherever $$\tilde{\pi}\left(\theta\right)>0.$$ The **importance weight** of $$\theta$$ is the ratio of the unnormalised posterior to the proposal density.

$$w\left(\theta\right):=\frac{\tilde{\pi}\left(\theta\right)}{q\left(\theta\right)}$$

The posterior expectation of $$g$$ is a ratio of expectations under $$q.$$

$$\mathbb{E}\left[g\left(\theta\right)\mid\underline{x}\right]=\frac{\int g\left(\theta\right)w\left(\theta\right)q\left(\theta\right)d\theta}{\int w\left(\theta\right)q\left(\theta\right)d\theta}$$

Let $$\theta^{(1)},\ldots,\theta^{(S)}$$ be iid draws from a proposal distribution $$q$$ with importance weights $$w_s=w\left(\theta^{(s)}\right).$$ **Importance sampling** is the method that reweights the draws by their importance weights rather than discarding them. The **self-normalised importance sampling estimate** of the posterior expectation of $$g$$ is the weighted average of $$g$$ over the draws.

$$\hat{g}_S:=\frac{\sum_{s=1}^S w_sg\left(\theta^{(s)}\right)}{\sum_{s=1}^S w_s}$$

Let $$w_1,\ldots,w_S$$ be importance weights. The **effective sample size** of the weighted draws is the number of iid posterior draws that would give the same precision.

$$\frac{\left(\sum_s w_s\right)^2}{\sum_s w_s^2}\in\left[1,S\right]$$

Importance sampling has the following properties:
- the self-normalised estimate is consistent and needs only the unnormalised posterior;
- $$\frac{1}{S}\sum_{s=1}^S w_s$$ is an unbiased estimate of the marginal likelihood;
- the variance of the estimate is governed by the variability of the weights and is summarised by the effective sample size;
- the variance is infinite if $$q$$ has lighter tails than the posterior;
- the effective sample size collapses in high dimensions, so importance sampling is used for low-dimensional problems or to correct draws from an approximate posterior.

**Markov chain Monte Carlo** (MCMC) is the method that constructs an irreducible, aperiodic Markov chain on $$\Theta$$ whose stationary distribution is the posterior and runs it to obtain dependent draws $$\theta^{(1)},\theta^{(2)},\ldots$$ MCMC has the following properties:
- by the ergodic theorem for Markov chains the sample path average $$\frac{1}{S}\sum_{s=1}^S g\left(\theta^{(s)}\right)$$ converges almost surely to the posterior expectation from any starting point, and the distribution of $$\theta^{(s)}$$ converges to the posterior;
- the chain is constructed to satisfy the detailed balance equations with respect to $$\pi\left(\theta\mid\underline{x}\right),$$ which only requires ratios of the target and so needs only $$\tilde{\pi}.$$

Let $$\theta^{(1)},\theta^{(2)},\ldots$$ be the draws of an MCMC chain. The **burn-in** is the initial draws before the chain has approached its stationary distribution, which are discarded.

Let $$\theta^{(1)},\theta^{(2)},\ldots$$ be the draws of an MCMC chain and $$\rho_k$$ be the autocorrelation at lag $$k$$ of the sequence $$g\left(\theta^{(s)}\right).$$ The **effective sample size** of the chain is the number of iid draws that would give the same precision as the $$S$$ correlated draws.

$$\frac{S}{1+2\sum_{k=1}^{\infty}\rho_k}$$

Because successive draws are correlated, the Monte Carlo standard error of an MCMC estimate is larger than for iid draws.

Let several MCMC chains be run from dispersed starting points. The **potential scale reduction factor** $$\hat{R}$$ is the ratio that compares the variance between chains with the variance within chains, which approaches one when the chains have mixed. Convergence of MCMC is assessed by running several chains and computing $$\hat{R}.$$

Let $$\tilde{\pi}$$ be an unnormalised posterior and $$q\left(\theta'\mid\theta\right)$$ be a proposal distribution that depends on the current state $$\theta.$$ The **acceptance probability** of a candidate $$\theta'$$ is the quantity

$$\alpha\left(\theta,\theta'\right):=\min\left\{1,\frac{\tilde{\pi}\left(\theta'\right)q\left(\theta\mid\theta'\right)}{\tilde{\pi}\left(\theta\right)q\left(\theta'\mid\theta\right)}\right\}.$$

Let $$\tilde{\pi}$$ be an unnormalised posterior and $$q\left(\theta'\mid\theta\right)$$ be a proposal distribution. The **Metropolis–Hastings algorithm** is the MCMC method that generates the next state from the current state $$\theta$$ by drawing a candidate $$\theta'\sim q\left(\theta'\mid\theta\right),$$ setting $$\theta^{(s+1)}=\theta'$$ with probability $$\alpha\left(\theta,\theta'\right)$$ and setting $$\theta^{(s+1)}=\theta$$ otherwise. The resulting chain satisfies detailed balance with respect to the posterior for any proposal that makes it irreducible.

Let $$q\left(\theta'\mid\theta\right)$$ be a symmetric proposal distribution such as $$\theta'\sim\mathrm{N}\left(\theta,\tau^2I\right).$$ **Random walk Metropolis** is the Metropolis–Hastings algorithm with a symmetric proposal, for which the acceptance probability reduces to $$\min\left\{1,\frac{\tilde{\pi}\left(\theta'\right)}{\tilde{\pi}\left(\theta\right)}\right\}.$$ Random walk Metropolis has the following properties:
- moves to higher posterior density are always accepted and moves to lower density are accepted with probability equal to the density ratio;
- the proposal scale $$\tau$$ trades off the size of moves against the acceptance rate: too small and the chain moves slowly, too large and almost every candidate is rejected, with an acceptance rate near $$0.23$$ optimal in high dimensions;
- it explores a $$d$$-dimensional posterior in a number of steps that grows like $$d,$$ which is slow for large $$d.$$

The **independence sampler** is the Metropolis–Hastings algorithm with a proposal $$q\left(\theta'\right)$$ that does not depend on the current state and approximates the posterior.

Let $$\theta=\left(\theta_1,\ldots,\theta_d\right)$$ and $$\theta_{-j}$$ denote all components except $$\theta_j.$$ The **full conditional distribution** of $$\theta_j$$ is the posterior distribution of $$\theta_j$$ given the other components, which is $$\pi\left(\theta_j\mid\theta_{-j},\underline{x}\right)\propto\tilde{\pi}\left(\theta\right)$$ viewed as a function of $$\theta_j$$ alone.

Let $$\theta=\left(\theta_1,\ldots,\theta_d\right)$$ with full conditional distributions $$\pi\left(\theta_j\mid\theta_{-j},\underline{x}\right).$$ The **Gibbs sampler** is the MCMC method that updates one component at a time by drawing it from its full conditional distribution with the other components fixed at their current values, cycling through $$j=1,\ldots,d$$ to produce each new state. The Gibbs sampler has the following properties:
- it is the Metropolis–Hastings algorithm with the full conditional as proposal, for which every candidate is accepted;
- it requires no tuning but requires the full conditionals to be standard distributions, which is the case when each parameter has a conjugate prior given the others;
- strongly correlated components make the sampler move slowly, since each update is restricted to a coordinate direction;
- components that are not conjugate can be updated with a Metropolis–Hastings step inside the cycle.

Let $$\theta$$ be the parameter of a Bayesian model. **Latent variables** are additional unobserved random variables introduced into the model. **Data augmentation** is the method that introduces latent variables whose full conditionals, together with those of $$\theta,$$ are tractable, which is how mixture and censored models are sampled.

Let $$\tilde{\pi}$$ be an unnormalised posterior on $$\Theta\subseteq\mathbb{R}^d$$ and $$M$$ be a positive definite matrix. The **momentum** is an auxiliary vector $$\underline{p}\in\mathbb{R}^d$$ with distribution $$\mathrm{N}_d\left(\underline{0},M\right),$$ and $$M$$ is the **mass matrix**. The **Hamiltonian** is the negative log joint density of $$\left(\theta,\underline{p}\right),$$ which is the sum of a potential energy and a kinetic energy.

$$H\left(\theta,\underline{p}\right):=-\log_e\tilde{\pi}\left(\theta\right)+\frac{1}{2}\underline{p}^\intercal M^{-1}\underline{p}$$

Let $$H$$ be a Hamiltonian. **Hamilton's equations** are the differential equations $$\frac{d\theta}{dt}=M^{-1}\underline{p}$$ and $$\frac{d\underline{p}}{dt}=\nabla_{\theta}\log_e\tilde{\pi}\left(\theta\right).$$ Exact Hamiltonian dynamics conserve $$H.$$

Let $$\varepsilon>0$$ and $$L\geq 1.$$ The **leapfrog integrator** with step size $$\varepsilon$$ and $$L$$ steps is the numerical method for Hamilton's equations that alternates half-step momentum updates with full-step position updates. The leapfrog integrator is reversible and volume preserving.

Let $$\tilde{\pi}$$ be a differentiable unnormalised posterior with Hamiltonian $$H.$$ **Hamiltonian Monte Carlo** (HMC) is the MCMC method in which each iteration draws a fresh momentum, simulates Hamilton's equations for a fixed time using the leapfrog integrator and accepts the end point $$\left(\theta',\underline{p}'\right)$$ with probability $$\min\left\{1,\exp\left(H\left(\theta,\underline{p}\right)-H\left(\theta',\underline{p}'\right)\right)\right\}.$$ HMC has the following properties:
- exact Hamiltonian dynamics would always be accepted, and the Metropolis correction exactly removes the discretisation error of the leapfrog integrator;
- the trajectory follows the geometry of the posterior rather than diffusing, so HMC explores a $$d$$-dimensional posterior in a number of steps that grows like $$d^{\frac{1}{4}}$$ and far outperforms random walk methods for large $$d;$$
- it requires a differentiable log posterior and tuning of $$\varepsilon$$ and $$L.$$

The **No-U-Turn sampler** (NUTS) is the variant of HMC that chooses $$L$$ adaptively by extending the trajectory until it starts to double back. NUTS is the default sampler in probabilistic programming software.

An **analytic approximation** is a method that replaces the posterior by a tractable distribution rather than sampling from it.

Let $$\tilde{\pi}$$ be an unnormalised posterior on $$\mathbb{R}^d$$ with mode $$\hat{\theta}_{\mathrm{MAP}}$$ and $$H:=-\nabla^2_{\theta}\log_e\tilde{\pi}\left(\hat{\theta}_{\mathrm{MAP}}\right)$$ be the negative Hessian matrix of the log posterior at the mode. The **Laplace approximation** is the normal distribution fitted at the posterior mode using the second-order Taylor expansion of the log posterior.

$$\pi\left(\theta\mid\underline{x}\right)\approx\mathrm{N}_d\left(\hat{\theta}_{\mathrm{MAP}},H^{-1}\right)$$

The Laplace approximation has the following properties:
- integrating the normal density gives the approximation of the marginal likelihood $$f\left(\underline{x}\right)\approx\tilde{\pi}\left(\hat{\theta}_{\mathrm{MAP}}\right)\left(2\pi\right)^{\frac{d}{2}}\lvert H\rvert^{-\frac{1}{2}};$$
- it is accurate when the posterior is close to normal, which by the Bernstein–von Mises theorem holds for large $$n$$ in regular models;
- it is poor for skewed, multimodal or bounded posteriors.

Let $$\mathcal{Q}$$ be a family of tractable distributions on $$\Theta.$$ **Variational inference** is the method that finds the member of $$\mathcal{Q}$$ closest to the posterior in Kullback–Leibler divergence, which turns integration into optimisation.

$$q^*:=\operatorname*{arg\,min}_{q\in\mathcal{Q}}\mathrm{KL}\left(q\,\|\,\pi\left(\cdot\mid\underline{x}\right)\right)$$

Let $$q$$ be a distribution on $$\Theta$$ and $$\tilde{\pi}$$ be an unnormalised posterior. The **evidence lower bound** (ELBO) of $$q$$ is the expected log unnormalised posterior under $$q$$ minus the expected log density of $$q$$ under $$q.$$

$$\mathrm{ELBO}\left(q\right):=\mathbb{E}_q\left[\log_e\tilde{\pi}\left(\theta\right)\right]-\mathbb{E}_q\left[\log_e q\left(\theta\right)\right]$$

The ELBO has the following properties:
- the log marginal likelihood decomposes as $$\log_e f\left(\underline{x}\right)=\mathrm{ELBO}\left(q\right)+\mathrm{KL}\left(q\,\|\,\pi\left(\cdot\mid\underline{x}\right)\right);$$
- since the divergence is non-negative, the ELBO is a lower bound on the log marginal likelihood that is tight when $$q$$ equals the posterior;
- minimising the divergence is therefore equivalent to maximising the ELBO over $$\mathcal{Q},$$ which depends only on the unnormalised posterior.

Let $$\theta=\left(\theta_1,\ldots,\theta_d\right).$$ The **mean-field family** is the family of distributions that factorise over components.

$$q\left(\theta\right)=\prod_{j=1}^d q_j\left(\theta_j\right)$$

Let $$\mathcal{Q}$$ be the mean-field family and $$q_{-j}$$ denote the factors other than $$q_j.$$ **Coordinate ascent variational inference** is the method that maximises the ELBO one factor at a time with the closed-form update

$$\log_e q_j^*\left(\theta_j\right)=\mathbb{E}_{q_{-j}}\left[\log_e\tilde{\pi}\left(\theta\right)\right]+\mathrm{constant},$$

the expectation of the log joint density over the other factors, which mirrors the Gibbs sampler with expectations in place of draws. Alternatively, $$\mathcal{Q}$$ is a parametric family such as the multivariate normal distributions and the ELBO is maximised by gradient methods using Monte Carlo estimates of its gradient. Variational inference has the following properties:
- it is much faster than MCMC and scales to large data sets;
- the fitted $$q^*$$ underestimates the posterior variance, because minimising $$\mathrm{KL}\left(q\,\|\,\pi\right)$$ penalises placing mass of $$q$$ where the posterior is small more than it penalises missing mass of the posterior;
- the mean-field family cannot represent posterior correlations.
