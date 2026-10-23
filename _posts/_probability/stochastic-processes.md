---
layout: post
category: "probability"
title:  "Stochastic Processes"
tags: ["probability", "stochastic process"]
description: "Models for random systems"
---

Let $$\left(\Omega,\mathcal{F},\mathbb{P}\right)$$ be a probability space, $$\left(S,\mathcal{S}\right)$$ be a measurable space and $$T$$ be a set. A **stochastic process** is a collection $$\left\{X_t:t\in T\right\}$$ of random variables $$X_t:\Omega\rightarrow S$$ indexed by the **index set** $$T,$$ which is usually interpreted as time, and taking values in the common state space $$S.$$ The process is a **discrete-time process** if $$T$$ is countable, typically $$T=\{0,1,2,\ldots\},$$ and a **continuous-time process** if $$T$$ is an interval, typically $$T=\left[0,\infty\right).$$ For a fixed outcome $$\omega\in\Omega$$ the function $$t\mapsto X_t(\omega)$$ is a **sample path** or **realisation** of the process, so a stochastic process is equivalently a random function of time.

Let $$t_1<\ldots<t_k$$ be points of $$T.$$ The joint distributions of the random vectors $$\left(X_{t_1},\ldots,X_{t_k}\right)$$ over all finite sets of times are the **finite-dimensional distributions** of the process. The **Kolmogorov extension theorem** states that any family of finite-dimensional distributions that is consistent, in the sense that the distribution for a subset of times is the marginal of the distribution for the larger set, is the family of finite-dimensional distributions of some stochastic process, which is how the processes below are specified. For $$s<t$$ the random variable $$X_t-X_s$$ is an **increment** of a real-valued process. The process has **independent increments** if increments over disjoint time intervals are mutually independent, and **stationary increments** if the distribution of $$X_{t+h}-X_{s+h}$$ does not depend on $$h.$$

Let $$\left\{X_t\right\}$$ be a real-valued process with finite second moments. The **mean function** and **autocovariance function** of the process are

$$\mu\left(t\right):=\mathbb{E}\left[X_t\right],\qquad C\left(s,t\right):=\mathrm{cov}\left[X_s,X_t\right]\,\,\forall\,s,t\in T,$$

and the **autocorrelation function** is $$\rho\left(s,t\right):=\frac{C\left(s,t\right)}{\sqrt{C\left(s,s\right)C\left(t,t\right)}}.$$ The autocovariance function is symmetric and positive semi-definite, meaning that the matrix with entries $$C\left(t_i,t_j\right)$$ is a positive semi-definite matrix for every finite set of times, since it is the covariance matrix of $$\left(X_{t_1},\ldots,X_{t_k}\right).$$

The process is **strictly stationary** if and only if its finite-dimensional distributions are invariant under shifts in time,

$$\left(X_{t_1+h},\ldots,X_{t_k+h}\right)\,\,\mathrm{has}\,\,\mathrm{the}\,\,\mathrm{same}\,\,\mathrm{distribution}\,\,\mathrm{as}\,\,\left(X_{t_1},\ldots,X_{t_k}\right)\,\,\forall\,t_1,\ldots,t_k,h,$$

and **weakly stationary** or **second-order stationary** if and only if it has finite second moments, a constant mean function and an autocovariance function that depends only on the time difference or **lag** $$h=t-s.$$

$$\mu\left(t\right)=\mu,\qquad C\left(s,t\right)=C\left(t-s\right)\,\,\forall\,s,t\in T$$

A strictly stationary process with finite second moments is weakly stationary, but a weakly stationary process need not be strictly stationary. For a weakly stationary process $$C\left(0\right)=\mathrm{var}\left[X_t\right]$$ and $$\rho\left(h\right)=\frac{C\left(h\right)}{C\left(0\right)}$$ is the autocorrelation at lag $$h.$$ **White noise** is a weakly stationary process of uncorrelated random variables with mean zero and constant variance, so $$C\left(h\right)=0$$ for $$h\neq 0.$$

A **Gaussian process** is a real-valued stochastic process all of whose finite-dimensional distributions are multivariate normal. Since a multivariate normal distribution is determined by its mean vector and covariance matrix, a Gaussian process is determined by its mean function $$m\left(t\right)$$ and its autocovariance function, which in this context is called the **covariance kernel** $$k\left(s,t\right),$$ and is written

$$X_t\sim\mathcal{GP}\left(m,k\right).$$

Any symmetric positive semi-definite function $$k$$ is a valid covariance kernel by the Kolmogorov extension theorem. A common choice is the **squared exponential kernel** $$k\left(s,t\right)=\sigma^2\exp\left(-\frac{\left(s-t\right)^2}{2\ell^2}\right),$$ whose **length scale** $$\ell$$ controls how quickly the correlation between $$X_s$$ and $$X_t$$ decays with $$\lvert s-t\rvert$$ and gives smooth sample paths. For a Gaussian process weak stationarity implies strict stationarity. Given observed values $$\left(X_{t_1},\ldots,X_{t_k}\right)$$ at some times, the values at any other times have a multivariate normal conditional distribution whose mean and covariance follow from the conditioning formulas for the multivariate normal distribution, which makes Gaussian processes a model for regression over functions.

A **Wiener process** or **standard Brownian motion** is a continuous-time real-valued process $$\left\{W_t:t\geq 0\right\}$$ with:
- $$W_0=0;$$
- independent increments;
- normally distributed stationary increments, $$W_t-W_s\sim\mathrm{N}\left(0,t-s\right)\,\,\forall\,0\leq s<t;$$
- continuous sample paths almost surely.

The Wiener process is the Gaussian process with mean function $$m\left(t\right)=0$$ and covariance kernel $$k\left(s,t\right)=\min\{s,t\},$$ so $$W_t\sim\mathrm{N}\left(0,t\right)$$ and $$\mathrm{var}\left[W_t\right]$$ grows linearly in time. Its sample paths are continuous but almost surely nowhere differentiable. It is invariant under the **scaling** $$W_t\mapsto\frac{1}{\sqrt{c}}W_{ct}$$ for $$c>0,$$ and $$\mu t+\sigma W_t$$ is **Brownian motion with drift** $$\mu$$ and **volatility** $$\sigma.$$ Let $$\xi_1,\xi_2,\ldots$$ be iid with mean $$0$$ and variance $$1.$$ The discrete-time process $$S_n=\sum_{i=1}^n\xi_i$$ is a **random walk**, and **Donsker's theorem** states that the rescaled random walk $$\frac{1}{\sqrt{n}}S_{\lfloor nt\rfloor}$$ converges in distribution to $$W_t$$ as a process, so the Wiener process is the continuous-time limit of random walks in the same way that the normal distribution is the limit of averages.

A discrete-time real-valued process $$\left\{X_n:n\geq 0\right\}$$ with $$\mathbb{E}\left[\lvert X_n\rvert\right]<\infty$$ is a **martingale** if and only if its expected next value given its history is its current value.

$$\mathbb{E}\left[X_{n+1}\mid X_0,\ldots,X_n\right]=X_n\,\,\forall\,n\geq 0$$

A martingale models a fair game, since by the law of total expectation $$\mathbb{E}\left[X_n\right]=\mathbb{E}\left[X_0\right]$$ for every $$n.$$ The random walk with mean-zero steps and, in continuous time, the Wiener process are martingales.

A **counting process** is a continuous-time process $$\left\{N_t:t\geq 0\right\}$$ with values in $$\{0,1,2,\ldots\}$$ such that $$N_0=0$$ and $$t\mapsto N_t$$ is non-decreasing and right-continuous, so that $$N_t$$ counts the number of events of some kind that occur in the interval $$\left(0,t\right].$$ The times $$T_n=\inf\left\{t:N_t\geq n\right\}$$ at which the count increases are the **arrival times** and the differences $$T_n-T_{n-1}$$ are the **inter-arrival times**.

A **Poisson process** with rate $$\lambda>0$$ is a counting process with independent increments whose increments are Poisson distributed with mean proportional to the length of the interval.

$$N_t-N_s\sim\mathrm{Poisson}\left(\lambda\left(t-s\right)\right)\,\,\forall\,0\leq s<t$$

Equivalently, a counting process is a Poisson process with rate $$\lambda$$ if and only if its inter-arrival times are iid $$\mathrm{Exponential}\left(\lambda\right)$$ random variables, in which case the arrival times satisfy $$T_n\sim\mathrm{Gamma}\left(n,\lambda\right).$$ The mean function is $$\mathbb{E}\left[N_t\right]=\lambda t,$$ the sum of independent Poisson processes with rates $$\lambda_1$$ and $$\lambda_2$$ is a Poisson process with rate $$\lambda_1+\lambda_2$$ and keeping each event independently with probability $$p$$ gives a Poisson process with rate $$p\lambda.$$ Given $$N_t=n,$$ the $$n$$ arrival times in $$\left(0,t\right]$$ are distributed as the order statistics of $$n$$ iid $$\mathrm{U}\left(0,t\right)$$ random variables. An **inhomogeneous Poisson process** has a time-varying rate $$\lambda\left(t\right)$$ and $$N_t-N_s\sim\mathrm{Poisson}\left(\int_s^t\lambda\left(u\right)du\right).$$

A **renewal process** is a counting process whose inter-arrival times are iid positive random variables with an arbitrary distribution with finite mean $$\mu,$$ so that the process restarts, or renews, at each arrival. The Poisson process is the renewal process with exponential inter-arrival times. The **renewal function** is $$m\left(t\right):=\mathbb{E}\left[N_t\right],$$ and the **elementary renewal theorem** states that events occur in the long run at rate $$\frac{1}{\mu}.$$

$$\frac{N_t}{t}\xrightarrow{a.s.}\frac{1}{\mu},\qquad\lim_{t\rightarrow\infty}\frac{m\left(t\right)}{t}=\frac{1}{\mu}$$

The **renewal reward theorem** extends this to a reward $$R_i$$ earned at each renewal, with iid pairs $$\left(R_i,T_i-T_{i-1}\right)$$ of finite mean: the long-run reward rate is $$\frac{\mathbb{E}\left[R_1\right]}{\mu}.$$

A stochastic process has the **Markov property** if and only if, given the present state, the future is conditionally independent of the past.

$$\mathbb{P}\left(X_{t_{k+1}}\in A\mid X_{t_1},\ldots,X_{t_k}\right)=\mathbb{P}\left(X_{t_{k+1}}\in A\mid X_{t_k}\right)\,\,\forall\,t_1<\ldots<t_{k+1},\,A\in\mathcal{S}$$

A process with the Markov property is a **Markov process**, and the Wiener process and Poisson process are Markov processes. A **Markov chain** is a discrete-time Markov process $$\left\{X_n:n\geq 0\right\}$$ with a countable state space $$S.$$ Its **transition probabilities** are

$$p_{ij}\left(n\right):=\mathbb{P}\left(X_{n+1}=j\mid X_n=i\right)\,\,\forall\,i,j\in S,$$

and the chain is **time-homogeneous** if they do not depend on $$n,$$ in which case they are collected in the **transition matrix** $$P$$ with entries $$p_{ij}.$$ Each row of $$P$$ is a probability distribution over $$S,$$ so $$P$$ has non-negative entries and rows summing to one and is a **stochastic matrix**. Let $$\underline{\pi}_n$$ be the row vector with entries $$\mathbb{P}\left(X_n=i\right),$$ the distribution of the chain at time $$n,$$ and $$\underline{\pi}_0$$ be the **initial distribution**. By the theorem of total probability

$$\underline{\pi}_{n+1}=\underline{\pi}_nP,\qquad\underline{\pi}_n=\underline{\pi}_0P^n,$$

so the finite-dimensional distributions of a time-homogeneous Markov chain are determined by $$\underline{\pi}_0$$ and $$P.$$ The **$$n$$-step transition probabilities** $$p_{ij}^{(n)}=\mathbb{P}\left(X_{m+n}=j\mid X_m=i\right)$$ are the entries of $$P^n,$$ and the **Chapman–Kolmogorov equations** state that a transition over $$m+n$$ steps decomposes over the intermediate state.

$$p_{ij}^{(m+n)}=\sum_{k\in S}p_{ik}^{(m)}p_{kj}^{(n)},\qquad P^{m+n}=P^mP^n$$

A distribution $$\underline{\pi}$$ on $$S$$ is a **stationary distribution** of the chain if and only if it is unchanged by a transition, so that a chain started from $$\underline{\pi}$$ is strictly stationary.

$$\underline{\pi}=\underline{\pi}P,\qquad\pi_j=\sum_{i\in S}\pi_ip_{ij}\,\,\forall\,j\in S$$

A stationary distribution is a left eigenvector of $$P$$ with eigenvalue $$1.$$ The chain is **irreducible** if every state can be reached from every other state in finitely many steps with positive probability, and **aperiodic** if, for every state $$i,$$ the set of $$n\geq 1$$ with $$p_{ii}^{(n)}>0$$ has greatest common divisor $$1.$$ A state is **recurrent** if the chain started there returns to it with probability one and **transient** otherwise, and a recurrent state is **positive recurrent** if the expected return time is finite. The **ergodic theorem for Markov chains** states that an irreducible, aperiodic and positive recurrent chain, which includes every irreducible aperiodic chain on a finite state space, has a unique stationary distribution $$\underline{\pi}$$ to which its distribution converges from any initial distribution, and whose values are the long-run proportions of time spent in each state.

$$\lim_{n\rightarrow\infty}p_{ij}^{(n)}=\pi_j\,\,\forall\,i,j\in S,\qquad\frac{1}{n}\sum_{m=1}^n\mathbf{1}_{\{X_m=j\}}\xrightarrow{a.s.}\pi_j$$

The second statement is a law of large numbers for dependent random variables, and it extends to $$\frac{1}{n}\sum_{m=1}^n g\left(X_m\right)\xrightarrow{a.s.}\sum_{j\in S}\pi_jg\left(j\right)$$ for any $$g$$ with finite expectation under $$\underline{\pi},$$ which is the basis of methods that estimate expectations under $$\underline{\pi}$$ by simulating the chain. A distribution $$\underline{\pi}$$ satisfies the **detailed balance equations** with respect to $$P$$ if and only if the probability flow between every pair of states balances,

$$\pi_ip_{ij}=\pi_jp_{ji}\,\,\forall\,i,j\in S,$$

in which case $$\underline{\pi}$$ is a stationary distribution and the chain started from $$\underline{\pi}$$ is **reversible**, since it has the same finite-dimensional distributions run forwards or backwards in time. Detailed balance is easier to verify than stationarity and is how Markov chain Monte Carlo algorithms are constructed to have a desired stationary distribution.

A **continuous-time Markov chain** is a continuous-time Markov process $$\left\{X_t:t\geq 0\right\}$$ with countable state space whose sample paths are piecewise constant. It stays in each state $$i$$ for a **holding time** that is $$\mathrm{Exponential}\left(q_i\right)$$ and then jumps to state $$j\neq i$$ with probability $$\frac{q_{ij}}{q_i},$$ where the rates $$q_{ij}\geq 0$$ with $$q_i=\sum_{j\neq i}q_{ij}$$ form the **generator matrix** $$Q$$ with off-diagonal entries $$q_{ij}$$ and diagonal entries $$-q_i,$$ so that its rows sum to zero. The transition probabilities $$p_{ij}\left(t\right)=\mathbb{P}\left(X_t=j\mid X_0=i\right)$$ satisfy $$P\left(t\right)=\exp\left(tQ\right)=\sum_{n=0}^{\infty}\frac{t^nQ^n}{n!}$$ and a stationary distribution satisfies $$\underline{\pi}Q=\underline{0}.$$ The Poisson process is the continuous-time Markov chain on $$\{0,1,2,\ldots\}$$ with $$q_{i,i+1}=\lambda$$ and all other rates zero.
