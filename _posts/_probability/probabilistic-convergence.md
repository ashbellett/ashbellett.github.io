---
layout: post
category: "probability"
title:  "Probabilistic Convergence"
tags: ["probability", "probabilistic convergence"]
description: "Behaviour after randomness is observed for a while"
---

Let $$X\subseteq\mathbb{R}$$ and $$f_n:X\rightarrow\mathbb{R}$$ be a sequence of functions indexed by $$n\in\mathbb{N}.$$ The sequence **converges pointwise** to $$f:X\rightarrow\mathbb{R}$$ if and only if $$f_n(x)\rightarrow f(x)$$ for every $$x\in X,$$ and **converges uniformly** to $$f$$ if and only if the largest difference between $$f_n$$ and $$f$$ tends to zero.

$$\sup_{x\in X}\lvert f_n(x)-f(x)\rvert\rightarrow 0\,\,\mathrm{as}\,\,n\rightarrow\infty$$

Uniform convergence implies pointwise convergence but not conversely: $$f_n(x)=x^n$$ converges pointwise on $$\left[0,1\right]$$ to the function that is $$0$$ on $$\left[0,1\right)$$ and $$1$$ at $$1,$$ but not uniformly, since $$\sup_x\lvert f_n(x)-f(x)\rvert=1$$ for every $$n.$$ A uniform limit of continuous functions is continuous, which the example shows can fail for pointwise limits. Random variables are functions on a sample space, so a sequence of random variables $$X_n$$ **converges surely** to $$X$$ if $$X_n(\omega)\rightarrow X(\omega)$$ for every outcome $$\omega\in\Omega.$$ This is too strong to be useful, since it is sensitive to outcomes of probability zero, and the modes of convergence below weaken it in different ways.

Let $$X_1,X_2,\ldots$$ and $$X$$ be random variables defined on a common probability space. The sequence **converges almost surely** to $$X,$$ written $$X_n\xrightarrow{a.s.}X,$$ if and only if the set of outcomes on which $$X_n(\omega)\rightarrow X(\omega)$$ has probability one.

$$\mathbb{P}\left(\left\{\omega\in\Omega:\lim_{n\rightarrow\infty}X_n(\omega)=X(\omega)\right\}\right)=1$$

The sequence **converges in probability** to $$X,$$ written $$X_n\xrightarrow{p}X,$$ if and only if the probability of a deviation of any fixed size tends to zero.

$$\lim_{n\rightarrow\infty}\mathbb{P}\left(\lvert X_n-X\rvert>\varepsilon\right)=0\,\,\forall\,\varepsilon>0$$

Let $$r\geq 1.$$ The sequence **converges in $$r$$-th mean** to $$X,$$ written $$X_n\xrightarrow{L^r}X,$$ if and only if $$\mathbb{E}\left[\lvert X_n\rvert^r\right]<\infty$$ for all $$n$$ and the $$r$$-th moment of the difference tends to zero.

$$\lim_{n\rightarrow\infty}\mathbb{E}\left[\lvert X_n-X\rvert^r\right]=0$$

The case $$r=2$$ is **convergence in mean square** and the case $$r=1$$ is **convergence in mean**.

Let $$X_1,X_2,\ldots$$ and $$X$$ be random variables with cdfs $$F_{X_n}$$ and $$F_X,$$ not necessarily defined on a common probability space. The sequence **converges in distribution** or **converges weakly** to $$X,$$ written $$X_n\xrightarrow{d}X,$$ if and only if the cdfs converge at every point where the limiting cdf is continuous.

$$\lim_{n\rightarrow\infty}F_{X_n}\left(x\right)=F_X\left(x\right)\,\,\forall\,x\,\,\mathrm{at}\,\,\mathrm{which}\,\,F_X\,\,\mathrm{is}\,\,\mathrm{continuous}$$

Convergence in distribution is a statement about the distributions of $$X_n$$ alone, so $$X_n\xrightarrow{d}X$$ is also written $$X_n\xrightarrow{d}\mathbb{P}_X.$$ The exclusion of discontinuity points is needed so that, for example, the constants $$\frac{1}{n}$$ converge in distribution to $$0$$ even though $$F_{X_n}\left(0\right)=0$$ does not converge to $$F_X\left(0\right)=1.$$ The **portmanteau theorem** gives the equivalent condition that expectations of bounded continuous functions converge,

$$X_n\xrightarrow{d}X\Leftrightarrow\lim_{n\rightarrow\infty}\mathbb{E}\left[g\left(X_n\right)\right]=\mathbb{E}\left[g\left(X\right)\right]\,\,\forall\,\mathrm{bounded}\,\,\mathrm{continuous}\,\,g:\mathbb{R}\rightarrow\mathbb{R},$$

which is the definition used for random vectors. **Lévy's continuity theorem** states that $$X_n\xrightarrow{d}X$$ if and only if the characteristic functions converge pointwise, $$\varphi_{X_n}\left(t\right)\rightarrow\varphi_X\left(t\right)\,\,\forall\,t\in\mathbb{R},$$ and that if $$\varphi_{X_n}$$ converges pointwise to a function that is continuous at $$0$$ then that function is the characteristic function of some random variable $$X$$ and $$X_n\xrightarrow{d}X.$$ The same holds for mgfs when they exist on a common open interval containing $$0.$$

The modes of convergence are related as follows:
- almost sure convergence implies convergence in probability;
- convergence in $$r$$-th mean implies convergence in probability, by Markov's inequality applied to $$\lvert X_n-X\rvert^r;$$
- convergence in $$s$$-th mean implies convergence in $$r$$-th mean for $$1\leq r<s,$$ by Lyapunov's inequality;
- convergence in probability implies convergence in distribution;
- convergence in distribution to a constant $$c$$ implies convergence in probability to $$c;$$
- convergence in probability implies almost sure convergence along some subsequence.

Neither almost sure convergence nor convergence in $$r$$-th mean implies the other, and no other implications hold in general. For example, if $$X_n=n\,\mathbf{1}_{A_n}$$ with $$\mathbb{P}\left(A_n\right)=\frac{1}{n}$$ then $$X_n\xrightarrow{p}0$$ but $$\mathbb{E}\left[X_n\right]=1$$ for every $$n,$$ so $$X_n$$ does not converge in mean.

The **Borel–Cantelli lemma** states that if $$A_1,A_2,\ldots$$ are events with $$\sum_{n=1}^{\infty}\mathbb{P}\left(A_n\right)<\infty$$ then with probability one only finitely many of them occur. Applied to $$A_n=\left\{\lvert X_n-X\rvert>\varepsilon\right\},$$ it gives the standard route to almost sure convergence: if $$\sum_{n=1}^{\infty}\mathbb{P}\left(\lvert X_n-X\rvert>\varepsilon\right)<\infty$$ for every $$\varepsilon>0$$ then $$X_n\xrightarrow{a.s.}X.$$ Concentration inequalities that give summable tail bounds therefore yield almost sure convergence.

The **continuous mapping theorem** states that if $$g:\mathbb{R}\rightarrow\mathbb{R}$$ is continuous at every point of a set that $$X$$ lies in with probability one then convergence of $$X_n$$ to $$X$$ is preserved by $$g$$ in each mode.

$$X_n\xrightarrow{a.s.}X\Rightarrow g\left(X_n\right)\xrightarrow{a.s.}g\left(X\right),\qquad X_n\xrightarrow{p}X\Rightarrow g\left(X_n\right)\xrightarrow{p}g\left(X\right),\qquad X_n\xrightarrow{d}X\Rightarrow g\left(X_n\right)\xrightarrow{d}g\left(X\right)$$

The theorem also holds for random vectors and continuous $$g:\mathbb{R}^k\rightarrow\mathbb{R}^m.$$ In particular sums, products, powers and ratios with non-zero denominators of sequences that converge jointly also converge.

Convergence in distribution of $$X_n$$ to $$X$$ and of $$Y_n$$ to $$Y$$ separately does not imply convergence in distribution of $$\left(X_n,Y_n\right)$$ or of $$X_n+Y_n,$$ since the joint distribution is not determined by the marginals. **Slutsky's theorem** gives the case that is needed most often: if $$X_n\xrightarrow{d}X$$ and $$Y_n\xrightarrow{p}c$$ for a constant $$c$$ then

$$X_n+Y_n\xrightarrow{d}X+c,\qquad X_nY_n\xrightarrow{d}cX,\qquad\frac{X_n}{Y_n}\xrightarrow{d}\frac{X}{c}\,\,\left(c\neq 0\right).$$

Slutsky's theorem allows unknown constants in a limit, such as a standard deviation, to be replaced by consistent estimates of them without changing the limiting distribution.

Let $$\theta\in\mathbb{R}$$ and $$X_1,X_2,\ldots$$ be random variables with $$\sqrt{n}\left(X_n-\theta\right)\xrightarrow{d}\mathrm{N}\left(0,\sigma^2\right).$$ The **delta method** states that if $$g:\mathbb{R}\rightarrow\mathbb{R}$$ is differentiable at $$\theta$$ with $$g'\left(\theta\right)\neq 0$$ then

$$\sqrt{n}\left(g\left(X_n\right)-g\left(\theta\right)\right)\xrightarrow{d}\mathrm{N}\left(0,g'\left(\theta\right)^2\sigma^2\right).$$

The result follows from the first-order Taylor expansion $$g\left(X_n\right)\approx g\left(\theta\right)+g'\left(\theta\right)\left(X_n-\theta\right),$$ since $$X_n\xrightarrow{p}\theta$$ makes the remainder negligible, together with Slutsky's theorem. If $$g'\left(\theta\right)=0$$ and $$g''\left(\theta\right)\neq 0$$ the **second-order delta method** uses the next term of the expansion,

$$n\left(g\left(X_n\right)-g\left(\theta\right)\right)\xrightarrow{d}\frac{\sigma^2g''\left(\theta\right)}{2}\chi^2_1.$$

The **multivariate delta method** states that if $$\sqrt{n}\left(\underline{X}_n-\underline{\theta}\right)\xrightarrow{d}\mathrm{N}_k\left(\underline{0},\Sigma\right)$$ and $$g:\mathbb{R}^k\rightarrow\mathbb{R}$$ is differentiable at $$\underline{\theta}$$ with $$\nabla g\left(\underline{\theta}\right)\neq\underline{0}$$ then

$$\sqrt{n}\left(g\left(\underline{X}_n\right)-g\left(\underline{\theta}\right)\right)\xrightarrow{d}\mathrm{N}\left(0,\nabla g\left(\underline{\theta}\right)^\intercal\Sigma\nabla g\left(\underline{\theta}\right)\right),$$

and for vector-valued $$\underline{g}$$ the limiting covariance matrix is $$J_{\underline{g}}\left(\underline{\theta}\right)\Sigma J_{\underline{g}}\left(\underline{\theta}\right)^\intercal.$$ The delta method is the standard tool for finding the limiting distribution of a smooth function of an average, such as a ratio, a logarithm or a variance.
