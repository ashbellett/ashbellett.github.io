---
title:  "Unconstrained Optimisation"
description: "Finding maximum and minimum values"
---

Let $$X\subseteq\mathbb{R}^n$$ be a set and $$f:X\rightarrow\mathbb{R}$$ be a function. An **optimisation problem** is the problem of finding the smallest value of $$f$$ over $$X$$ and the points at which it is attained.

$$\min_{\underline{x}\in X}f(\underline{x})$$

The function $$f$$ is the **objective function** and the set $$X$$ is the **feasible set** of the problem. A point of $$X$$ is **feasible**. Maximising $$f$$ is equivalent to minimising $$-f,$$ so only minimisation is considered.

Let $$\min_{\underline{x}\in X}f(\underline{x})$$ be an optimisation problem. The **optimal value** of the problem is the infimum of $$f$$ over $$X.$$

$$p^*:=\inf_{\underline{x}\in X}f(\underline{x})$$

The optimal value is $$-\infty$$ if $$f$$ is unbounded below on $$X$$ and $$\infty$$ if $$X$$ is empty.

Let $$\min_{\underline{x}\in X}f(\underline{x})$$ be an optimisation problem with optimal value $$p^*.$$ A **minimiser** or **optimal solution** of the problem is a point $$\underline{x}^*\in X$$ with $$f(\underline{x}^*)=p^*.$$ The set of minimisers is written

$$\operatorname*{arg\,min}_{\underline{x}\in X}f(\underline{x}):=\left\{\underline{x}^*\in X:f(\underline{x}^*)\leq f(\underline{x})\,\,\forall\,\underline{x}\in X\right\}.$$

Let $$\min_{\underline{x}\in X}f(\underline{x})$$ be an optimisation problem. The problem is **unconstrained** if and only if the feasible set $$X$$ is $$\mathbb{R}^n$$ or an open subset of it, so that every point near a feasible point is feasible. The problem is **constrained** if and only if it is not unconstrained.

Let $$X\subseteq\mathbb{R}^n,$$ $$f:X\rightarrow\mathbb{R}$$ be a function and $$\underline{x}^*\in X.$$ The point $$\underline{x}^*$$ is a **strict local minimiser** of $$f$$ if and only if there exists $$\delta>0$$ such that $$f(\underline{x}^*)<f(\underline{x})$$ for all $$\underline{x}\in X$$ with $$\underline{x}\neq\underline{x}^*$$ and $$\lVert\underline{x}-\underline{x}^*\rVert<\delta.$$ A global minimiser is a local minimiser, but a local minimiser need not be global unless $$f$$ is convex.

Let $$X\subseteq\mathbb{R}^n$$ be a non-empty compact set and $$f:X\rightarrow\mathbb{R}$$ be continuous. By the Heine–Borel theorem $$X$$ is closed and bounded, and $$f$$ attains its minimum and maximum, so a global minimiser exists.

Let $$f:\mathbb{R}^n\rightarrow\mathbb{R}$$ be a function. The function $$f$$ is **coercive** if and only if $$f(\underline{x})$$ grows without bound as $$\lVert\underline{x}\rVert$$ does. If $$f$$ is continuous and coercive then a global minimiser of $$f$$ over $$\mathbb{R}^n$$ exists, since minimising over $$\mathbb{R}^n$$ reduces to minimising over a compact sublevel set.

Let $$X\subseteq\mathbb{R}^n$$ be open and $$f:X\rightarrow\mathbb{R}$$ be differentiable at a local minimiser $$\underline{x}^*.$$ The **first-order necessary condition** states that the gradient vanishes at $$\underline{x}^*.$$

$$\nabla f(\underline{x}^*)=\underline{0}$$

The condition holds since otherwise $$f$$ decreases along $$-\nabla f(\underline{x}^*).$$ A point satisfying the first-order necessary condition is a stationary point of $$f,$$ as in the univariate case.

Let $$X\subseteq\mathbb{R}^n$$ be open and $$f\in C^2(X).$$ The **second-order necessary condition** states that the Hessian matrix of $$f$$ at a local minimiser is positive semi-definite. The **second-order sufficient condition** states that a stationary point at which the Hessian matrix is positive definite is a strict local minimiser. Both conditions follow from the second-order Taylor expansion at a stationary point.

$$f\left(\underline{x}^*+\underline{h}\right)=f(\underline{x}^*)+\frac{1}{2}\underline{h}^\intercal H_f(\underline{x}^*)\,\underline{h}+R_2(\underline{h})$$

Let $$X\subseteq\mathbb{R}^n$$ be open, $$f\in C^2(X)$$ and $$\underline{x}^*$$ be a stationary point of $$f.$$ The point $$\underline{x}^*$$ is a **saddle point** of $$f$$ if and only if the Hessian matrix at $$\underline{x}^*$$ has both positive and negative eigenvalues. A saddle point is neither a local minimiser nor a local maximiser. A stationary point with a positive semi-definite Hessian matrix that is singular may be a minimiser, a maximiser or neither; for example, $$0$$ is a minimiser of $$x^4,$$ a maximiser of $$-x^4$$ and neither for $$x^3.$$

Most optimisation problems cannot be solved by finding stationary points in closed form. An **iterative method** is a method that generates a sequence of **iterates** $$\underline{x}_0,\underline{x}_1,\ldots$$ intended to converge to a minimiser.

Let $$f:\mathbb{R}^n\rightarrow\mathbb{R}$$ be differentiable. A **line search method** is an iterative method that chooses at each iterate a **search direction** $$\underline{d}_k\in\mathbb{R}^n$$ and a **step size** $$\alpha_k>0$$ and updates the iterate by moving along the search direction.

$$\underline{x}_{k+1}=\underline{x}_k+\alpha_k\underline{d}_k$$

A line search method stops when $$\lVert\nabla f(\underline{x}_k)\rVert$$ or the change in $$f$$ falls below a tolerance.

Let $$f:\mathbb{R}^n\rightarrow\mathbb{R}$$ be differentiable at $$\underline{x}$$ and $$\underline{d}\in\mathbb{R}^n.$$ The direction $$\underline{d}$$ is a **descent direction** of $$f$$ at $$\underline{x}$$ if and only if the directional derivative along it is negative.

$$\nabla f(\underline{x})^\intercal\underline{d}<0$$

If $$\underline{d}$$ is a descent direction then $$f\left(\underline{x}+\alpha\underline{d}\right)<f(\underline{x})$$ for all sufficiently small $$\alpha>0.$$

Let $$f$$ be differentiable, $$\underline{x}_k$$ be an iterate and $$\underline{d}_k$$ be a descent direction. **Exact line search** is the choice of step size that minimises $$f$$ along the search direction.

$$\alpha_k=\operatorname*{arg\,min}_{\alpha>0}f\left(\underline{x}_k+\alpha\underline{d}_k\right)$$

Let $$f$$ be differentiable, $$\underline{x}_k$$ be an iterate, $$\underline{d}_k$$ be a descent direction and $$c\in\left(0,1\right).$$ The **Armijo condition** is the condition that the step size $$\alpha_k$$ gives a decrease in $$f$$ proportional to the step size and the directional derivative.

$$f\left(\underline{x}_k+\alpha_k\underline{d}_k\right)\leq f(\underline{x}_k)+c\,\alpha_k\nabla f(\underline{x}_k)^\intercal\underline{d}_k$$

Let $$f$$ be differentiable, $$\underline{x}_k$$ be an iterate, $$\underline{d}_k$$ be a descent direction and $$\rho\in\left(0,1\right).$$ **Backtracking line search** is the choice of step size that starts from an initial step size and repeatedly multiplies it by $$\rho$$ until the Armijo condition holds.

Let $$(\underline{x}_k)$$ be a sequence that converges to $$\underline{x}^*$$ and $$e_k=\lVert\underline{x}_k-\underline{x}^*\rVert.$$ The convergence is **linear** if and only if there exist $$r\in\left(0,1\right)$$ and $$K$$ with $$e_{k+1}\leq r\,e_k$$ for all $$k\geq K.$$ The convergence is **superlinear** if and only if $$\frac{e_{k+1}}{e_k}\rightarrow 0.$$ The convergence is **quadratic** if and only if there exist $$M>0$$ and $$K$$ with $$e_{k+1}\leq M\,e_k^2$$ for all $$k\geq K.$$ The convergence is **sublinear** if and only if $$e_k\rightarrow 0$$ but no such $$r<1$$ exists, for example $$e_k=\frac{1}{k}.$$ Quadratic convergence roughly doubles the number of correct digits at each iteration.

Let $$f:\mathbb{R}^n\rightarrow\mathbb{R}$$ be differentiable. **Gradient descent** or **steepest descent** is the line search method whose search direction is the negative gradient.

$$\underline{x}_{k+1}=\underline{x}_k-\alpha_k\nabla f(\underline{x}_k)$$

In the context of gradient descent the step size is also called the **learning rate**. Gradient descent has the following properties:
- the negative gradient is a descent direction whenever $$\nabla f(\underline{x}_k)\neq\underline{0};$$
- by the Cauchy-Schwarz inequality the negative gradient is the direction $$\underline{d}$$ with $$\lVert\underline{d}\rVert=\lVert\nabla f(\underline{x}_k)\rVert$$ that makes the directional derivative $$\nabla f(\underline{x}_k)^\intercal\underline{d}$$ most negative.

Let $$f:\mathbb{R}^n\rightarrow\mathbb{R}$$ be differentiable and $$L>0.$$ The function $$f$$ is **$$L$$-smooth** if and only if its gradient is Lipschitz continuous with constant $$L.$$

$$\lVert\nabla f(\underline{x})-\nabla f(\underline{y})\rVert\leq L\,\lVert\underline{x}-\underline{y}\rVert\,\,\forall\,\underline{x},\underline{y}$$

Let $$f$$ be convex and $$L$$-smooth with a global minimiser $$\underline{x}^*.$$ Gradient descent with fixed step size $$\alpha_k=\frac{1}{L}$$ has the following convergence properties:
- it converges sublinearly in objective value, $$f(\underline{x}_k)-f(\underline{x}^*)\leq\frac{L\,\lVert\underline{x}_0-\underline{x}^*\rVert^2}{2k};$$
- if $$f$$ is additionally strongly convex with parameter $$\mu$$ then it converges linearly, $$\lVert\underline{x}_k-\underline{x}^*\rVert^2\leq\left(1-\frac{\mu}{L}\right)^k\lVert\underline{x}_0-\underline{x}^*\rVert^2.$$

Let $$f$$ be strongly convex with parameter $$\mu$$ and $$L$$-smooth. The **condition number** of the problem is the ratio $$\kappa=\frac{L}{\mu}\geq 1.$$ For a strongly convex quadratic objective the condition number is the ratio of the largest to the smallest eigenvalue of the Hessian matrix. Gradient descent is slow when $$\kappa$$ is large because the gradient points across the narrow valley of the objective rather than along it. A step size that is too large causes the iterates to diverge, and one that is too small makes progress slow.

Let $$f\in C^2$$ and $$\underline{x}_k$$ be an iterate at which $$H_f(\underline{x}_k)$$ is positive definite. The **Newton direction** at $$\underline{x}_k$$ is the vector $$\underline{d}_k$$ that solves the linear system

$$H_f(\underline{x}_k)\,\underline{d}_k=-\nabla f(\underline{x}_k).$$

The Newton direction minimises the second-order Taylor expansion of $$f$$ at $$\underline{x}_k,$$ which has the unique minimiser $$\underline{x}_k+\underline{d}_k$$ when the Hessian matrix is positive definite.

Let $$f\in C^2.$$ **Newton's method** is the line search method with the Newton direction and step size $$\alpha_k=1.$$

$$\underline{x}_{k+1}=\underline{x}_k-H_f(\underline{x}_k)^{-1}\nabla f(\underline{x}_k)$$

Newton's method is equivalently the method for solving the stationarity equation $$\nabla f(\underline{x})=\underline{0}$$ by repeatedly solving its linear approximation, which for a univariate equation $$g(x)=0$$ is the iteration $$x_{k+1}=x_k-\frac{g(x_k)}{g'(x_k)}.$$ Newton's method has the following properties:
- if $$\underline{x}^*$$ is a stationary point with positive definite $$H_f(\underline{x}^*)$$ and $$H_f$$ is Lipschitz continuous near $$\underline{x}^*$$ then Newton's method converges quadratically to $$\underline{x}^*$$ from any sufficiently close starting point;
- it minimises a strongly convex quadratic function exactly in one step;
- the Newton direction is a descent direction only when the Hessian matrix is positive definite;
- each iteration requires the Hessian matrix and the solution of an $$n\times n$$ linear system, which is prohibitive for large $$n.$$

The **damped Newton method** is Newton's method combined with backtracking line search, which is used far from the minimiser. Alternatively the Hessian matrix is modified to be positive definite.

Let $$f$$ be differentiable. A **quasi-Newton method** is a line search method that replaces the inverse Hessian matrix with a positive definite approximation $$B_k$$ updated at each iteration using only gradient differences, giving the search direction $$\underline{d}_k=-B_k\nabla f(\underline{x}_k)$$ and a cost per iteration comparable to gradient descent.

Let $$B_{k+1}$$ be the approximate inverse Hessian matrix of a quasi-Newton method. The **secant condition** is the condition that $$B_{k+1}$$ maps the change in gradient to the change in iterate.

$$B_{k+1}\left(\nabla f(\underline{x}_{k+1})-\nabla f(\underline{x}_k)\right)=\underline{x}_{k+1}-\underline{x}_k$$

The true inverse Hessian matrix satisfies the secant condition approximately by the mean value theorem. The **Broyden–Fletcher–Goldfarb–Shanno** (BFGS) update is the most widely used update satisfying the secant condition. Quasi-Newton methods with line search converge superlinearly under the conditions that give Newton's method quadratic convergence.
