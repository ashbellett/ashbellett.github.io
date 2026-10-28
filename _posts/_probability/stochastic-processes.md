---
layout: post
category: "probability"
title:  "Stochastic Processes"
tags: ["probability", "stochastic process"]
description: "Models for random systems"
---

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space, $$\left(S,\mathcal{S}\right)$$ be a measurable space and $$T$$ be a set. A **stochastic process** is a collection $$\left\{X_t:t\in T\right\}$$ of random variables $$X_t:\Omega\rightarrow S$$ indexed by $$T.$$ The set $$T$$ is the **index set** of the process, which is usually interpreted as time, and $$S$$ is the common **state space** of the process.

Let $$\left\{X_t:t\in T\right\}$$ be a stochastic process. The process is a **discrete-time process** if and only if $$T$$ is countable, typically $$T=\{0,1,2,\ldots\}.$$ The process is a **continuous-time process** if and only if $$T$$ is an interval, typically $$T=\left[0,\infty\right).$$

Let $$\left\{X_t:t\in T\right\}$$ be a stochastic process and $$\omega\in\Omega$$ be a fixed outcome. The **sample path** or **realisation** of the process at $$\omega$$ is the function $$t\mapsto X_t(\omega).$$ A stochastic process is equivalently a random function of time.

Let $$\left\{X_t:t\in T\right\}$$ be a stochastic process. The **finite-dimensional distributions** of the process are the joint distributions of the random vectors $$\left(X_{t_1},\ldots,X_{t_k}\right)$$ over all finite sets of times $$t_1<\ldots<t_k$$ in $$T.$$

Let $$\left\{\mathbb{P}_{t_1,\ldots,t_k}\right\}$$ be a family of joint distributions indexed by finite sets of times. The family is **consistent** if and only if the distribution for a subset of times is the marginal of the distribution for the larger set. The **Kolmogorov extension theorem** states that any consistent family is the family of finite-dimensional distributions of some stochastic process. The processes below are specified by their finite-dimensional distributions.

Let $$\left\{X_t:t\in T\right\}$$ be a real-valued process and $$s<t$$ be times in $$T.$$ The **increment** of the process over $$\left(s,t\right]$$ is the random variable $$X_t-X_s.$$

Let $$\left\{X_t:t\in T\right\}$$ be a real-valued process. The process has **independent increments** if and only if increments over disjoint time intervals are mutually independent. The process has **stationary increments** if and only if the distribution of $$X_{t+h}-X_{s+h}$$ does not depend on $$h.$$

Let $$\left\{X_t\right\}$$ be a real-valued process with finite second moments. The **mean function** of the process is the function $$\mu\left(t\right):=\mathbb{E}\left[X_t\right].$$ The **autocovariance function** of the process is the function $$C\left(s,t\right):=\mathrm{cov}\left[X_s,X_t\right]$$ for $$s,t\in T.$$ The **autocorrelation function** of the process is the function $$\rho\left(s,t\right):=\frac{C\left(s,t\right)}{\sqrt{C\left(s,s\right)C\left(t,t\right)}}.$$

Let $$C$$ be a function of two times. The function $$C$$ is **positive semi-definite** if and only if the matrix with entries $$C\left(t_i,t_j\right)$$ is a positive semi-definite matrix for every finite set of times. The autocovariance function of a process is symmetric and positive semi-definite, since it is the covariance matrix of $$\left(X_{t_1},\ldots,X_{t_k}\right).$$

Let $$\left\{X_t\right\}$$ be a stochastic process. The process is **strictly stationary** if and only if its finite-dimensional distributions are invariant under shifts in time.

$$\left(X_{t_1+h},\ldots,X_{t_k+h}\right)\,\,\mathrm{has}\,\,\mathrm{the}\,\,\mathrm{same}\,\,\mathrm{distribution}\,\,\mathrm{as}\,\,\left(X_{t_1},\ldots,X_{t_k}\right)\,\,\forall\,t_1,\ldots,t_k,h$$

Let $$\left\{X_t\right\}$$ be a real-valued process and $$s,t\in T.$$ The **lag** between $$s$$ and $$t$$ is the time difference $$h=t-s.$$

Let $$\left\{X_t\right\}$$ be a real-valued process. The process is **weakly stationary** or **second-order stationary** if and only if it has finite second moments, a constant mean function and an autocovariance function that depends only on the lag.

$$\mu\left(t\right)=\mu,\qquad C\left(s,t\right)=C\left(t-s\right)\,\,\forall\,s,t\in T$$

Stationary processes have the following properties:
- a strictly stationary process with finite second moments is weakly stationary;
- a weakly stationary process need not be strictly stationary;
- for a weakly stationary process $$C\left(0\right)=\mathrm{var}\left[X_t\right]$$ and $$\rho\left(h\right)=\frac{C\left(h\right)}{C\left(0\right)}$$ is the autocorrelation at lag $$h.$$

**White noise** is a weakly stationary process of uncorrelated random variables with mean zero and constant variance, so that $$C\left(h\right)=0$$ for $$h\neq 0.$$

A **Gaussian process** is a real-valued stochastic process all of whose finite-dimensional distributions are multivariate normal.

Let $$\left\{X_t\right\}$$ be a Gaussian process. The **covariance kernel** of the process is its autocovariance function, written $$k\left(s,t\right).$$ Since a multivariate normal distribution is determined by its mean vector and covariance matrix, a Gaussian process is determined by its mean function $$m\left(t\right)$$ and its covariance kernel, and is written

$$X_t\sim\mathcal{GP}\left(m,k\right).$$

Gaussian processes have the following properties:
- any symmetric positive semi-definite function $$k$$ is a valid covariance kernel by the Kolmogorov extension theorem;
- for a Gaussian process weak stationarity implies strict stationarity;
- given observed values $$\left(X_{t_1},\ldots,X_{t_k}\right)$$ at some times, the values at any other times have a multivariate normal conditional distribution whose mean and covariance follow from the conditioning formulas for the multivariate normal distribution, which makes Gaussian processes a model for regression over functions.

Let $$\sigma>0$$ and $$\ell>0.$$ The **squared exponential kernel** is the covariance kernel $$k\left(s,t\right)=\sigma^2\exp\left(-\frac{\left(s-t\right)^2}{2\ell^2}\right).$$ The number $$\ell$$ is the **length scale** of the kernel, which controls how quickly the correlation between $$X_s$$ and $$X_t$$ decays with $$\lvert s-t\rvert.$$ The squared exponential kernel gives smooth sample paths.

A **Wiener process** or **standard Brownian motion** is a continuous-time real-valued process $$\left\{W_t:t\geq 0\right\}$$ with the following properties:
- $$W_0=0;$$
- independent increments;
- normally distributed stationary increments, $$W_t-W_s\sim\mathrm{N}\left(0,t-s\right)$$ for all $$0\leq s<t;$$
- continuous sample paths almost surely.

The Wiener process has the following properties:
- it is the Gaussian process with mean function $$m\left(t\right)=0$$ and covariance kernel $$k\left(s,t\right)=\min\{s,t\},$$ so $$W_t\sim\mathrm{N}\left(0,t\right)$$ and $$\mathrm{var}\left[W_t\right]$$ grows linearly in time;
- its sample paths are continuous but almost surely nowhere differentiable;
- it is invariant under the **scaling** $$W_t\mapsto\frac{1}{\sqrt{c}}W_{ct}$$ for $$c>0.$$

Let $$\mu\in\mathbb{R}$$ and $$\sigma>0.$$ **Brownian motion with drift** $$\mu$$ and **volatility** $$\sigma$$ is the process $$\mu t+\sigma W_t.$$

Let $$\xi_1,\xi_2,\ldots$$ be iid random variables with mean $$0$$ and variance $$1.$$ The **random walk** with steps $$\xi_i$$ is the discrete-time process $$S_n=\sum_{i=1}^n\xi_i.$$

Let $$S_n$$ be a random walk with iid steps of mean $$0$$ and variance $$1.$$ **Donsker's theorem** states that the rescaled random walk $$\frac{1}{\sqrt{n}}S_{\lfloor nt\rfloor}$$ converges in distribution to the Wiener process $$W_t$$ as a process. The Wiener process is therefore the continuous-time limit of random walks in the same way that the normal distribution is the limit of averages.

Let $$\left\{X_n:n\geq 0\right\}$$ be a discrete-time real-valued process with $$\mathbb{E}\left[\lvert X_n\rvert\right]<\infty.$$ The process is a **martingale** if and only if its expected next value given its history is its current value.

$$\mathbb{E}\left[X_{n+1}\mid X_0,\ldots,X_n\right]=X_n\,\,\forall\,n\geq 0$$

Martingales have the following properties:
- by the law of total expectation $$\mathbb{E}\left[X_n\right]=\mathbb{E}\left[X_0\right]$$ for every $$n,$$ so a martingale models a fair game;
- the random walk with mean-zero steps is a martingale, and in continuous time the Wiener process is a martingale.

A **counting process** is a continuous-time process $$\left\{N_t:t\geq 0\right\}$$ with values in $$\{0,1,2,\ldots\}$$ such that $$N_0=0$$ and $$t\mapsto N_t$$ is non-decreasing and right-continuous. The value $$N_t$$ counts the number of events of some kind that occur in the interval $$\left(0,t\right].$$

Let $$\left\{N_t:t\geq 0\right\}$$ be a counting process and $$n\geq 1.$$ The **$$n$$-th arrival time** of the process is the time $$T_n=\inf\left\{t:N_t\geq n\right\}$$ at which the count reaches $$n.$$ The **$$n$$-th inter-arrival time** of the process is the difference $$T_n-T_{n-1},$$ with $$T_0=0.$$

Let $$\lambda>0.$$ A **Poisson process** with rate $$\lambda$$ is a counting process with independent increments whose increments are Poisson distributed with mean proportional to the length of the interval.

$$N_t-N_s\sim\mathrm{Poisson}\left(\lambda\left(t-s\right)\right)\,\,\forall\,0\leq s<t$$

The Poisson process has the following properties:
- a counting process is a Poisson process with rate $$\lambda$$ if and only if its inter-arrival times are iid $$\mathrm{Exponential}\left(\lambda\right)$$ random variables, in which case the arrival times satisfy $$T_n\sim\mathrm{Gamma}\left(n,\lambda\right);$$
- the mean function is $$\mathbb{E}\left[N_t\right]=\lambda t;$$
- the sum of independent Poisson processes with rates $$\lambda_1$$ and $$\lambda_2$$ is a Poisson process with rate $$\lambda_1+\lambda_2;$$
- keeping each event independently with probability $$p$$ gives a Poisson process with rate $$p\lambda;$$
- given $$N_t=n,$$ the $$n$$ arrival times in $$\left(0,t\right]$$ are distributed as the order statistics of $$n$$ iid $$\mathrm{U}\left(0,t\right)$$ random variables.

Let $$\lambda:\left[0,\infty\right)\rightarrow\left[0,\infty\right)$$ be a function. An **inhomogeneous Poisson process** with rate function $$\lambda\left(t\right)$$ is a counting process with independent increments whose increments satisfy $$N_t-N_s\sim\mathrm{Poisson}\left(\int_s^t\lambda\left(u\right)du\right).$$

A **renewal process** is a counting process whose inter-arrival times are iid positive random variables with finite mean $$\mu.$$ The process restarts, or renews, at each arrival. The Poisson process is the renewal process with exponential inter-arrival times.

Let $$\left\{N_t:t\geq 0\right\}$$ be a renewal process. The **renewal function** of the process is the function $$m\left(t\right):=\mathbb{E}\left[N_t\right].$$

Let $$\left\{N_t:t\geq 0\right\}$$ be a renewal process with mean inter-arrival time $$\mu.$$ The **elementary renewal theorem** states that events occur in the long run at rate $$\frac{1}{\mu}.$$

$$\frac{N_t}{t}\xrightarrow{a.s.}\frac{1}{\mu},\qquad\lim_{t\rightarrow\infty}\frac{m\left(t\right)}{t}=\frac{1}{\mu}$$

Let $$\left\{N_t:t\geq 0\right\}$$ be a renewal process with mean inter-arrival time $$\mu,$$ and $$R_i$$ be a reward earned at the $$i$$-th renewal such that the pairs $$\left(R_i,T_i-T_{i-1}\right)$$ are iid with finite means. The **renewal reward theorem** states that the long-run reward rate is $$\frac{\mathbb{E}\left[R_1\right]}{\mu}.$$

Let $$\left\{X_t:t\in T\right\}$$ be a stochastic process. The process has the **Markov property** if and only if, given the present state, the future is conditionally independent of the past.

$$\mathbb{P}\left(X_{t_{k+1}}\in A\mid X_{t_1},\ldots,X_{t_k}\right)=\mathbb{P}\left(X_{t_{k+1}}\in A\mid X_{t_k}\right)\,\,\forall\,t_1<\ldots<t_{k+1},\,A\in\mathcal{S}$$

A **Markov process** is a stochastic process with the Markov property. The Wiener process and the Poisson process are Markov processes.

A **Markov chain** is a discrete-time Markov process $$\left\{X_n:n\geq 0\right\}$$ with a countable state space $$S.$$

Let $$\left\{X_n:n\geq 0\right\}$$ be a Markov chain with state space $$S.$$ The **transition probabilities** of the chain are the conditional probabilities of moving from each state to each other state in one step.

$$p_{ij}\left(n\right):=\mathbb{P}\left(X_{n+1}=j\mid X_n=i\right)\,\,\forall\,i,j\in S$$

Let $$\left\{X_n:n\geq 0\right\}$$ be a Markov chain. The chain is **time-homogeneous** if and only if its transition probabilities do not depend on $$n.$$

Let $$\left\{X_n:n\geq 0\right\}$$ be a time-homogeneous Markov chain with state space $$S.$$ The **transition matrix** of the chain is the matrix $$P$$ with entries $$p_{ij}.$$

A **stochastic matrix** is a matrix with non-negative entries whose rows sum to one. Each row of a transition matrix is a probability distribution over $$S,$$ so a transition matrix is a stochastic matrix.

Let $$\left\{X_n:n\geq 0\right\}$$ be a time-homogeneous Markov chain with transition matrix $$P.$$ The **distribution at time $$n$$** of the chain is the row vector $$\underline{\pi}_n$$ with entries $$\mathbb{P}\left(X_n=i\right).$$ The **initial distribution** of the chain is $$\underline{\pi}_0.$$ By the theorem of total probability

$$\underline{\pi}_{n+1}=\underline{\pi}_nP,\qquad\underline{\pi}_n=\underline{\pi}_0P^n,$$

so the finite-dimensional distributions of a time-homogeneous Markov chain are determined by $$\underline{\pi}_0$$ and $$P.$$

Let $$\left\{X_n:n\geq 0\right\}$$ be a time-homogeneous Markov chain with transition matrix $$P$$ and $$n\geq 1.$$ The **$$n$$-step transition probabilities** of the chain are the conditional probabilities of moving from each state to each other state in $$n$$ steps.

$$p_{ij}^{(n)}:=\mathbb{P}\left(X_{m+n}=j\mid X_m=i\right)$$

The $$n$$-step transition probabilities are the entries of $$P^n.$$ The **Chapman–Kolmogorov equations** state that a transition over $$m+n$$ steps decomposes over the intermediate state.

$$p_{ij}^{(m+n)}=\sum_{k\in S}p_{ik}^{(m)}p_{kj}^{(n)},\qquad P^{m+n}=P^mP^n$$

Let $$\left\{X_n:n\geq 0\right\}$$ be a time-homogeneous Markov chain with transition matrix $$P.$$ A **stationary distribution** of the chain is a distribution $$\underline{\pi}$$ on $$S$$ that is unchanged by a transition.

$$\underline{\pi}=\underline{\pi}P,\qquad\pi_j=\sum_{i\in S}\pi_ip_{ij}\,\,\forall\,j\in S$$

A stationary distribution is a left eigenvector of $$P$$ with eigenvalue $$1.$$ A chain started from a stationary distribution is strictly stationary.

Let $$\left\{X_n:n\geq 0\right\}$$ be a time-homogeneous Markov chain with state space $$S.$$ The chain is **irreducible** if and only if every state can be reached from every other state in finitely many steps with positive probability. The chain is **aperiodic** if and only if, for every state $$i,$$ the set of $$n\geq 1$$ with $$p_{ii}^{(n)}>0$$ has greatest common divisor $$1.$$

Let $$\left\{X_n:n\geq 0\right\}$$ be a time-homogeneous Markov chain and $$i\in S$$ be a state. The state $$i$$ is **recurrent** if and only if the chain started at $$i$$ returns to $$i$$ with probability one. The state $$i$$ is **transient** if and only if it is not recurrent. A recurrent state $$i$$ is **positive recurrent** if and only if the expected time to return to $$i$$ is finite.

Let $$\left\{X_n:n\geq 0\right\}$$ be an irreducible, aperiodic and positive recurrent time-homogeneous Markov chain, which includes every irreducible aperiodic chain on a finite state space. The **ergodic theorem for Markov chains** states that the chain has a unique stationary distribution $$\underline{\pi},$$ that its distribution converges to $$\underline{\pi}$$ from any initial distribution and that the values of $$\underline{\pi}$$ are the long-run proportions of time spent in each state.

$$\lim_{n\rightarrow\infty}p_{ij}^{(n)}=\pi_j\,\,\forall\,i,j\in S,\qquad\frac{1}{n}\sum_{m=1}^n\mathbf{1}_{\{X_m=j\}}\xrightarrow{a.s.}\pi_j$$

The second statement is a law of large numbers for dependent random variables. It extends to $$\frac{1}{n}\sum_{m=1}^n g\left(X_m\right)\xrightarrow{a.s.}\sum_{j\in S}\pi_jg\left(j\right)$$ for any $$g$$ with finite expectation under $$\underline{\pi},$$ which is the basis of methods that estimate expectations under $$\underline{\pi}$$ by simulating the chain.

Let $$P$$ be a transition matrix and $$\underline{\pi}$$ be a distribution on $$S.$$ The distribution $$\underline{\pi}$$ satisfies the **detailed balance equations** with respect to $$P$$ if and only if the probability flow between every pair of states balances.

$$\pi_ip_{ij}=\pi_jp_{ji}\,\,\forall\,i,j\in S$$

Let $$\left\{X_n:n\geq 0\right\}$$ be a time-homogeneous Markov chain started from a distribution $$\underline{\pi}$$ that satisfies the detailed balance equations. The chain is **reversible**, meaning that it has the same finite-dimensional distributions run forwards or backwards in time. Detailed balance has the following properties:
- a distribution satisfying the detailed balance equations is a stationary distribution;
- detailed balance is easier to verify than stationarity, and is how Markov chain Monte Carlo algorithms are constructed to have a desired stationary distribution.

A **continuous-time Markov chain** is a continuous-time Markov process $$\left\{X_t:t\geq 0\right\}$$ with countable state space whose sample paths are piecewise constant.

Let $$\left\{X_t:t\geq 0\right\}$$ be a continuous-time Markov chain and $$q_{ij}\geq 0$$ for $$i\neq j$$ be its **transition rates**, with $$q_i=\sum_{j\neq i}q_{ij}.$$ The **holding time** of the chain in state $$i$$ is the time it stays in $$i$$ before jumping, which is $$\mathrm{Exponential}\left(q_i\right).$$ On leaving state $$i$$ the chain jumps to state $$j\neq i$$ with probability $$\frac{q_{ij}}{q_i}.$$

Let $$\left\{X_t:t\geq 0\right\}$$ be a continuous-time Markov chain with transition rates $$q_{ij}.$$ The **generator matrix** of the chain is the matrix $$Q$$ with off-diagonal entries $$q_{ij}$$ and diagonal entries $$-q_i,$$ so that its rows sum to zero. The continuous-time Markov chain has the following properties:
- the transition probabilities $$p_{ij}\left(t\right)=\mathbb{P}\left(X_t=j\mid X_0=i\right)$$ satisfy $$P\left(t\right)=\exp\left(tQ\right)=\sum_{n=0}^{\infty}\frac{t^nQ^n}{n!};$$
- a stationary distribution satisfies $$\underline{\pi}Q=\underline{0};$$
- the Poisson process is the continuous-time Markov chain on $$\{0,1,2,\ldots\}$$ with $$q_{i,i+1}=\lambda$$ and all other rates zero.
