---
layout: post
category: "optimisation"
title:  "Unconstrained Optimisation"
tags: ["optimisation", "unconstrained optimisation"]
description: "Finding maximum and minimum values"
---

Let $$X\subseteq\mathbb{R}^n$$ be a set and $$f:X\rightarrow\mathbb{R}$$ be a function. An **optimisation problem** is the problem of finding the smallest value of the **objective function** $$f$$ over the **feasible set** $$X$$ and the points at which it is attained.

$$\min_{\underline{x}\in X}f(\underline{x})$$

The **optimal value** $$p^*=\inf_{\underline{x}\in X}f(\underline{x})$$ is the infimum of $$f$$ over $$X,$$ which is $$-\infty$$ if $$f$$ is unbounded below and $$\infty$$ if $$X$$ is empty. A **minimiser** or **optimal solution** is a point $$\underline{x}^*\in X$$ with $$f(\underline{x}^*)=p^*,$$ and the set of minimisers is written

$$\operatorname*{arg\,min}_{\underline{x}\in X}f(\underline{x}):=\left\{\underline{x}^*\in X:f(\underline{x}^*)\leq f(\underline{x})\,\,\forall\,\underline{x}\in X\right\}.$$

Maximising $$f$$ is equivalent to minimising $$-f,$$ so only minimisation is considered. The problem is **unconstrained** if the feasible set is $$\mathbb{R}^n$$ or an open subset of it, so that every point near a feasible point is feasible, and **constrained** otherwise.

A point $$\underline{x}^*\in X$$ is a **local minimiser** of $$f$$ if and only if there exists $$\delta>0$$ such that $$f(\underline{x}^*)\leq f(\underline{x})$$ for all $$\underline{x}\in X$$ with $$\lVert\underline{x}-\underline{x}^*\rVert<\delta,$$ a **strict local minimiser** if the inequality is strict for $$\underline{x}\neq\underline{x}^*$$ and a **global minimiser** if and only if $$f(\underline{x}^*)\leq f(\underline{x})\,\,\forall\,\underline{x}\in X.$$ A global minimiser is a local minimiser, but a local minimiser need not be global unless $$f$$ is convex.

A set $$X\subseteq\mathbb{R}^n$$ is **bounded** if it is contained in some ball $$\{\underline{x}:\lVert\underline{x}\rVert\leq r\}$$ and **closed** if its complement is open. A set that is both closed and bounded is **compact**. The **Weierstrass extreme value theorem** states that a continuous function on a non-empty compact set attains its minimum and maximum, so a global minimiser exists. For an unconstrained problem on $$\mathbb{R}^n$$ a global minimiser exists if $$f$$ is continuous and **coercive**, meaning that $$f(\underline{x})$$ grows without bound as $$\lVert\underline{x}\rVert$$ does, since minimising over $$\mathbb{R}^n$$ then reduces to minimising over a compact sublevel set.

Let $$X\subseteq\mathbb{R}^n$$ be open and $$f:X\rightarrow\mathbb{R}$$ be differentiable at a local minimiser $$\underline{x}^*.$$ The **first-order necessary condition** states that the gradient vanishes at $$\underline{x}^*,$$ since otherwise $$f$$ decreases along $$-\nabla f(\underline{x}^*).$$

$$\nabla f(\underline{x}^*)=\underline{0}$$

A point satisfying this condition is a **stationary point** of $$f.$$ If $$f\in C^2(X)$$ the **second-order necessary condition** states that the Hessian matrix at a local minimiser is positive semi-definite, and the **second-order sufficient condition** states that a stationary point at which the Hessian matrix is positive definite is a strict local minimiser. Both follow from the second-order Taylor expansion

$$f\left(\underline{x}^*+\underline{h}\right)=f(\underline{x}^*)+\frac{1}{2}\underline{h}^\intercal H_f(\underline{x}^*)\,\underline{h}+R_2(\underline{h}).$$

A stationary point whose Hessian matrix has both positive and negative eigenvalues, so is neither positive nor negative semi-definite, is a **saddle point** and is neither a local minimiser nor a local maximiser. A stationary point with a positive semi-definite Hessian matrix that is singular may be any of the three; for example, $$0$$ is a minimiser of $$x^4,$$ a maximiser of $$-x^4$$ and neither for $$x^3.$$

Most optimisation problems cannot be solved by finding stationary points in closed form and are solved by an **iterative method** that generates a sequence of **iterates** $$\underline{x}_0,\underline{x}_1,\ldots$$ intended to converge to a minimiser. A **line search method** chooses at each iterate a **search direction** $$\underline{d}_k\in\mathbb{R}^n$$ and a **step size** $$\alpha_k>0$$ and updates

$$\underline{x}_{k+1}=\underline{x}_k+\alpha_k\underline{d}_k.$$

A direction $$\underline{d}$$ is a **descent direction** of $$f$$ at $$\underline{x}$$ if and only if the directional derivative along it is negative, $$\nabla f(\underline{x})^\intercal\underline{d}<0,$$ in which case $$f\left(\underline{x}+\alpha\underline{d}\right)<f(\underline{x})$$ for all sufficiently small $$\alpha>0.$$ The method stops when $$\lVert\nabla f(\underline{x}_k)\rVert$$ or the change in $$f$$ falls below a tolerance.

The step size may be fixed, chosen by **exact line search** as the minimiser of $$f$$ along the search direction,

$$\alpha_k=\operatorname*{arg\,min}_{\alpha>0}f\left(\underline{x}_k+\alpha\underline{d}_k\right),$$

or chosen by **backtracking line search**, which starts from an initial step size and repeatedly multiplies it by a factor $$\rho\in\left(0,1\right)$$ until the **Armijo condition** holds for some $$c\in\left(0,1\right),$$ guaranteeing a decrease in $$f$$ proportional to the step size and directional derivative.

$$f\left(\underline{x}_k+\alpha_k\underline{d}_k\right)\leq f(\underline{x}_k)+c\,\alpha_k\nabla f(\underline{x}_k)^\intercal\underline{d}_k$$

Let $$(\underline{x}_k)$$ converge to $$\underline{x}^*$$ and $$e_k=\lVert\underline{x}_k-\underline{x}^*\rVert.$$ The convergence is **linear** if there exist $$r\in\left(0,1\right)$$ and $$K$$ with $$e_{k+1}\leq r\,e_k\,\,\forall\,k\geq K,$$ **superlinear** if $$\frac{e_{k+1}}{e_k}\rightarrow 0$$ and **quadratic** if there exist $$M>0$$ and $$K$$ with $$e_{k+1}\leq M\,e_k^2\,\,\forall\,k\geq K.$$ Convergence is **sublinear** if $$e_k\rightarrow 0$$ but no such $$r<1$$ exists, for example $$e_k=\frac{1}{k}.$$ Quadratic convergence roughly doubles the number of correct digits at each iteration.

**Gradient descent** or **steepest descent** is the line search method with search direction the negative gradient.

$$\underline{x}_{k+1}=\underline{x}_k-\alpha_k\nabla f(\underline{x}_k)$$

The negative gradient is a descent direction whenever $$\nabla f(\underline{x}_k)\neq\underline{0},$$ and by the Cauchy-Schwarz inequality it is the direction $$\underline{d}$$ with $$\lVert\underline{d}\rVert=\lVert\nabla f(\underline{x}_k)\rVert$$ that makes the directional derivative $$\nabla f(\underline{x}_k)^\intercal\underline{d}$$ most negative. In the context of gradient descent the step size is also called the **learning rate**.

Let $$f$$ be differentiable with a gradient that is Lipschitz continuous with constant $$L>0,$$ in which case $$f$$ is **$$L$$-smooth**.

$$\lVert\nabla f(\underline{x})-\nabla f(\underline{y})\rVert\leq L\,\lVert\underline{x}-\underline{y}\rVert\,\,\forall\,\underline{x},\underline{y}$$

If $$f$$ is convex and $$L$$-smooth with a global minimiser $$\underline{x}^*$$ then gradient descent with fixed step size $$\alpha_k=\frac{1}{L}$$ converges sublinearly in objective value,

$$f(\underline{x}_k)-f(\underline{x}^*)\leq\frac{L\,\lVert\underline{x}_0-\underline{x}^*\rVert^2}{2k},$$

and if $$f$$ is additionally strongly convex with parameter $$\mu$$ then it converges linearly,

$$\lVert\underline{x}_k-\underline{x}^*\rVert^2\leq\left(1-\frac{\mu}{L}\right)^k\lVert\underline{x}_0-\underline{x}^*\rVert^2.$$

The ratio $$\kappa=\frac{L}{\mu}\geq 1$$ is the **condition number** of the problem, and for a strongly convex quadratic objective it is the ratio of the largest to the smallest eigenvalue of the Hessian matrix. Gradient descent is slow when $$\kappa$$ is large because the gradient points across the narrow valley of the objective rather than along it. A step size that is too large causes the iterates to diverge, and one that is too small makes progress slow.

**Newton's method** chooses the search direction by minimising the second-order Taylor expansion of $$f$$ at the current iterate. If $$H_f(\underline{x}_k)$$ is positive definite this quadratic has the unique minimiser $$\underline{x}_k+\underline{d}_k$$ where the **Newton direction** $$\underline{d}_k$$ solves

$$H_f(\underline{x}_k)\,\underline{d}_k=-\nabla f(\underline{x}_k)$$

so that the **Newton step** with step size $$\alpha_k=1$$ is

$$\underline{x}_{k+1}=\underline{x}_k-H_f(\underline{x}_k)^{-1}\nabla f(\underline{x}_k).$$

Newton's method is equivalently the method for solving the stationarity equation $$\nabla f(\underline{x})=\underline{0}$$ by repeatedly solving its linear approximation, which for a univariate equation $$g(x)=0$$ is the iteration $$x_{k+1}=x_k-\frac{g(x_k)}{g'(x_k)}.$$ If $$\underline{x}^*$$ is a stationary point with positive definite $$H_f(\underline{x}^*)$$ and $$H_f$$ is Lipschitz continuous near $$\underline{x}^*,$$ then Newton's method converges quadratically to $$\underline{x}^*$$ from any sufficiently close starting point, and it minimises a strongly convex quadratic function exactly in one step. The Newton direction is a descent direction only when the Hessian matrix is positive definite, so far from the minimiser the method is combined with backtracking line search, giving the **damped Newton method**, or the Hessian matrix is modified to be positive definite. Each iteration requires the Hessian matrix and the solution of an $$n\times n$$ linear system, which is prohibitive for large $$n.$$

**Quasi-Newton methods** replace the inverse Hessian matrix with a positive definite approximation $$B_k$$ that is updated at each iteration using only gradient differences, giving the search direction $$\underline{d}_k=-B_k\nabla f(\underline{x}_k)$$ and a cost per iteration comparable to gradient descent. The update is chosen so that the new approximation satisfies the **secant condition**

$$B_{k+1}\left(\nabla f(\underline{x}_{k+1})-\nabla f(\underline{x}_k)\right)=\underline{x}_{k+1}-\underline{x}_k,$$

which the true inverse Hessian matrix satisfies approximately by the mean value theorem, and the most widely used update is the **Broyden–Fletcher–Goldfarb–Shanno** (BFGS) update. Quasi-Newton methods with line search converge superlinearly under the conditions that give Newton's method quadratic convergence.
