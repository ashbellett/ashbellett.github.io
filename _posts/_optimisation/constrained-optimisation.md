---
title:  "Constrained Optimisation"
description: "Reducing set of valid optimal values"
---

Let $$f,g_1,\ldots,g_m,h_1,\ldots,h_p:\mathbb{R}^n\rightarrow\mathbb{R}$$ be functions. A **constrained optimisation problem** in **standard form** is the problem of minimising the objective function $$f$$ subject to $$m$$ **inequality constraints** $$g_i(\underline{x})\leq 0$$ and $$p$$ **equality constraints** $$h_j(\underline{x})=0.$$

$$
\begin{align*}
\min_{\underline{x}\in\mathbb{R}^n}\,\,&f(\underline{x})\\
\mathrm{subject}\,\mathrm{to}\,\,&g_i(\underline{x})\leq 0\,\,\forall\,i=1,\ldots,m\\
&h_j(\underline{x})=0\,\,\forall\,j=1,\ldots,p
\end{align*}
$$

The feasible set of the problem is $$X=\left\{\underline{x}\in\mathbb{R}^n:g_i(\underline{x})\leq 0\,\,\forall\,i,\,h_j(\underline{x})=0\,\,\forall\,j\right\}.$$ A constraint of the form $$g(\underline{x})\geq 0$$ or $$g(\underline{x})\leq b$$ is written in standard form as $$-g(\underline{x})\leq 0$$ or $$g(\underline{x})-b\leq 0.$$ The problem is a convex optimisation problem if $$f$$ and every $$g_i$$ are convex and every $$h_j$$ is affine, since the feasible set is then an intersection of convex sublevel sets and hyperplanes.

Let $$g_i(\underline{x})\leq 0$$ be an inequality constraint and $$\underline{x}\in X$$ be feasible. The constraint $$g_i$$ is **active** at $$\underline{x}$$ if and only if $$g_i(\underline{x})=0.$$ The constraint $$g_i$$ is **inactive** at $$\underline{x}$$ if and only if $$g_i(\underline{x})<0.$$ Equality constraints are active at every feasible point.

Let $$\underline{x}\in X$$ be feasible. The **active set** at $$\underline{x},$$ written $$\mathcal{A}(\underline{x}),$$ is the set of indices of the constraints that are active at $$\underline{x}.$$

Let the equality constraints $$h_j(\underline{x})=0$$ be equivalent to $$\underline{x}=\underline{\varphi}(\underline{z})$$ for $$\underline{z}\in\mathbb{R}^{n-p}.$$ The **substitution method** is the method that replaces the constrained problem by the equivalent unconstrained problem of minimising $$f\left(\underline{\varphi}(\underline{z})\right)$$ over $$\underline{z}.$$ For example, minimising $$x_1^2+x_2^2$$ subject to $$x_1+x_2=1$$ becomes minimising $$x_1^2+\left(1-x_1\right)^2,$$ whose stationary point gives $$x_1=x_2=\frac{1}{2}.$$ The substitution method fails when the constraints cannot be solved in closed form.

Let $$f,h_1,\ldots,h_p\in C^1$$ and consider the problem with equality constraints only. The **Lagrangian** of the problem is the objective function plus a weighted sum of the constraint functions.

$$\mathcal{L}\left(\underline{x},\underline{\nu}\right):=f(\underline{x})+\sum_{j=1}^p\nu_j h_j(\underline{x})$$

The weights $$\nu_1,\ldots,\nu_p\in\mathbb{R}$$ are the **Lagrange multipliers**.

Let $$f,h_1,\ldots,h_p\in C^1$$ and $$\underline{x}^*$$ be a local minimiser of the problem with equality constraints only at which the constraint gradients $$\nabla h_1(\underline{x}^*),\ldots,\nabla h_p(\underline{x}^*)$$ are linearly independent. The **method of Lagrange multipliers** states that there exist multipliers $$\underline{\nu}^*$$ such that $$\left(\underline{x}^*,\underline{\nu}^*\right)$$ is a stationary point of the Lagrangian.

$$\nabla f(\underline{x}^*)+\sum_{j=1}^p\nu_j^*\nabla h_j(\underline{x}^*)=\underline{0},\qquad h_j(\underline{x}^*)=0\,\,\forall\,j$$

The first condition states that the gradient of $$f$$ lies in the span of the constraint gradients, so that no direction that keeps the constraints satisfied to first order is a descent direction. The two conditions give $$n+p$$ equations in the $$n+p$$ unknowns $$\left(\underline{x},\underline{\nu}\right).$$ For example, minimising $$x_1^2+x_2^2$$ subject to $$x_1+x_2=1$$ gives $$2x_1+\nu=2x_2+\nu=0$$ and $$x_1+x_2=1,$$ so $$x_1=x_2=\frac{1}{2}$$ and $$\nu=-1.$$

Let $$f,g_i,h_j\in C^1$$ and consider the standard form problem. The **Lagrangian** of the standard form problem is the objective function plus weighted sums of the inequality and equality constraint functions.

$$\mathcal{L}\left(\underline{x},\underline{\lambda},\underline{\nu}\right):=f(\underline{x})+\sum_{i=1}^m\lambda_i g_i(\underline{x})+\sum_{j=1}^p\nu_j h_j(\underline{x})$$

The multipliers are $$\lambda_i\geq 0$$ for the inequality constraints and $$\nu_j\in\mathbb{R}$$ for the equality constraints.

Let $$f,g_i,h_j\in C^1,$$ $$\underline{x}^*\in\mathbb{R}^n$$ and $$\left(\underline{\lambda}^*,\underline{\nu}^*\right)$$ be multipliers. The **Karush–Kuhn–Tucker** (KKT) **conditions** at $$\underline{x}^*$$ with multipliers $$\left(\underline{\lambda}^*,\underline{\nu}^*\right)$$ are the following four conditions:
- **stationarity**: $$\nabla f(\underline{x}^*)+\sum_{i=1}^m\lambda_i^*\nabla g_i(\underline{x}^*)+\sum_{j=1}^p\nu_j^*\nabla h_j(\underline{x}^*)=\underline{0};$$
- **primal feasibility**: $$g_i(\underline{x}^*)\leq 0\,\,\forall\,i$$ and $$h_j(\underline{x}^*)=0\,\,\forall\,j;$$
- **dual feasibility**: $$\lambda_i^*\geq 0\,\,\forall\,i;$$
- **complementary slackness**: $$\lambda_i^*g_i(\underline{x}^*)=0\,\,\forall\,i.$$

Complementary slackness states that an inactive constraint has a zero multiplier and a constraint with a positive multiplier is active, so the KKT conditions reduce to the method of Lagrange multipliers applied to the active constraints.

A **constraint qualification** is a regularity condition on the constraints at $$\underline{x}^*,$$ such as linear independence of the gradients of the active constraints. **Slater's condition** is the constraint qualification for convex problems that requires a feasible point at which every inequality constraint is strictly satisfied. The KKT conditions have the following properties:
- if $$\underline{x}^*$$ is a local minimiser at which a constraint qualification holds then there exist multipliers satisfying the KKT conditions, so the conditions are necessary;
- if the problem is convex then any point satisfying the KKT conditions is a global minimiser, so the conditions are sufficient;
- if the problem is convex and Slater's condition holds then the conditions are necessary and sufficient.

Let $$\lambda_i^*$$ be the KKT multiplier of the constraint $$g_i(\underline{x})\leq 0.$$ The **shadow price** of the constraint is $$\lambda_i^*,$$ which measures the rate at which the optimal value would improve if the constraint were relaxed to $$g_i(\underline{x})\leq\varepsilon.$$

Let $$\mathcal{L}$$ be the Lagrangian of the standard form problem. The **Lagrange dual function** is the infimum of the Lagrangian over $$\underline{x}$$ for fixed multipliers.

$$q\left(\underline{\lambda},\underline{\nu}\right):=\inf_{\underline{x}\in\mathbb{R}^n}\mathcal{L}\left(\underline{x},\underline{\lambda},\underline{\nu}\right)$$

The dual function is concave, as a pointwise infimum of affine functions of $$\left(\underline{\lambda},\underline{\nu}\right),$$ whether or not the original problem is convex, and it may take the value $$-\infty.$$

The **primal problem** is the standard form problem, with optimal value $$p^*.$$ **Weak duality** states that the dual function is a lower bound on the optimal value for every $$\underline{\lambda}\geq\underline{0},$$ since for feasible $$\underline{x}$$ the multiplier terms in the Lagrangian are non-positive.

$$q\left(\underline{\lambda},\underline{\nu}\right)\leq p^*\,\,\forall\,\underline{\lambda}\geq\underline{0},\,\underline{\nu}\in\mathbb{R}^p$$

The **dual problem** is the problem of finding the best lower bound given by the dual function.

$$\max_{\underline{\lambda}\geq\underline{0},\,\underline{\nu}}q\left(\underline{\lambda},\underline{\nu}\right)$$

The dual problem is a convex optimisation problem with optimal value $$d^*\leq p^*.$$

Let $$p^*$$ and $$d^*$$ be the optimal values of the primal and dual problems. The **duality gap** is the difference $$p^*-d^*\geq 0.$$ **Strong duality** holds if and only if $$p^*=d^*.$$ Strong duality has the following properties:
- it holds for a convex primal problem satisfying Slater's condition;
- when it holds, the optimal multipliers of the dual problem are the KKT multipliers of the primal problem;
- a feasible dual point certifies that no feasible primal point has objective value below $$q\left(\underline{\lambda},\underline{\nu}\right),$$ which is how iterative methods bound their distance from optimality.

A **linear program** is a constrained optimisation problem whose objective function and constraint functions are all affine.

Let $$\underline{c}\in\mathbb{R}^n,$$ $$A\in\mathbb{R}^{\,m\times n}$$ with rank $$m\leq n$$ and $$\underline{b}\in\mathbb{R}^m.$$ The **standard form linear program** is the linear program

$$
\begin{align*}
\min_{\underline{x}\in\mathbb{R}^n}\,\,&\underline{c}^\intercal\underline{x}\\
\mathrm{subject}\,\mathrm{to}\,\,&A\underline{x}=\underline{b}\\
&\underline{x}\geq\underline{0}
\end{align*}
$$

where the inequality holds element-wise.

Let $$\underline{a}_i^\intercal\underline{x}\leq b_i$$ be an inequality constraint of a linear program. A **slack variable** for the constraint is a non-negative variable $$s_i$$ that converts the inequality constraint into the equality constraint $$\underline{a}_i^\intercal\underline{x}+s_i=b_i.$$ Any linear program can be written in standard form by adding slack variables and by writing each unrestricted variable as a difference of two non-negative variables. Linear programs have the following properties:
- the feasible set of a linear program is a polyhedron;
- a linear program is a convex optimisation problem;
- the dual of the standard form linear program is the linear program $$\max_{\underline{y}\in\mathbb{R}^m}\underline{b}^\intercal\underline{y}$$ subject to $$A^\intercal\underline{y}\leq\underline{c};$$
- strong duality holds whenever either problem has a feasible point.

Let $$X$$ be a polyhedron. A **vertex** or **extreme point** of $$X$$ is a point of $$X$$ that is not a convex combination of two other points of $$X.$$

Let $$A\in\mathbb{R}^{\,m\times n}$$ be the constraint matrix of a standard form linear program. A **basis** of the linear program is a set $$B\subseteq\{1,\ldots,n\}$$ of $$m$$ indices such that the columns $$A_B\in\mathbb{R}^{\,m\times m}$$ of $$A$$ indexed by $$B$$ are linearly independent. The variables indexed by $$B$$ are the **basic variables** and the others are the **non-basic variables**.

Let $$B$$ be a basis of a standard form linear program. The **basic solution** for $$B$$ is the point that sets the non-basic variables to zero and solves for the basic variables.

$$\underline{x}_B=A_B^{-1}\underline{b},\qquad\underline{x}_N=\underline{0}$$

The basic solution is a **basic feasible solution** if and only if $$\underline{x}_B\geq\underline{0}.$$ The vertices of the feasible set are exactly the basic feasible solutions.

The **fundamental theorem of linear programming** states that if a linear program has a feasible point then it has a basic feasible solution, and if it has an optimal solution then some basic feasible solution is optimal. The search for an optimal solution can therefore be restricted to the finitely many vertices.

Let $$P$$ be a linear program. The linear program $$P$$ is **unbounded** if and only if its objective is unbounded below on the feasible set. The linear program $$P$$ is **infeasible** if and only if its feasible set is empty.

Let $$B$$ be a basis of a standard form linear program with basic feasible solution $$\underline{x},$$ $$\underline{c}_B$$ be the objective coefficients of the basic variables and $$j$$ be a non-basic index. The **reduced cost** of the non-basic variable $$j$$ is the rate of change of the objective when $$x_j$$ is increased from zero and the basic variables adjust to keep $$A\underline{x}=\underline{b}.$$

$$\bar{c}_j:=c_j-\underline{c}_B^\intercal A_B^{-1}\underline{a}_j$$

The current basic feasible solution is optimal if $$\bar{c}_j\geq 0$$ for every non-basic $$j.$$

The **simplex method** is the iterative method that moves from one basic feasible solution to an adjacent one, differing in a single basic variable, so that the objective does not increase, until no improving move exists. Each iteration of the simplex method proceeds as follows:
- the **entering variable** is a non-basic variable with negative reduced cost, which is increased until some basic variable reaches zero;
- the **leaving variable** is the basic variable that reaches zero first, identified by the **minimum ratio test** over the components of $$\underline{d}=A_B^{-1}\underline{a}_j$$ with $$d_i>0,$$ $$\alpha=\min_{i:\,d_i>0}\frac{x_{B_i}}{d_i};$$
- the leaving variable is swapped out of the basis and the entering variable is swapped in.

The simplex method has the following properties:
- if no $$d_i>0$$ exists the linear program is unbounded;
- an initial basic feasible solution is found by solving an auxiliary linear program with artificial variables in a first phase;
- with a rule that prevents the same basis from recurring the simplex method terminates in finitely many iterations;
- its worst case visits exponentially many vertices, but in practice it typically takes a number of iterations proportional to $$m.$$

An **interior point method** is an iterative method that approaches a minimiser through the interior of the feasible set rather than along its boundary.

Let the standard form problem be convex with $$f,g_i\in C^2$$ and a feasible point satisfying Slater's condition. The **logarithmic barrier function** of the problem is the function that is finite on the strictly feasible points and grows without bound as any inequality constraint becomes active.

$$\phi(\underline{x}):=-\sum_{i=1}^m\log_e\left(-g_i(\underline{x})\right)$$

Let $$\phi$$ be the logarithmic barrier function of a convex standard form problem and $$t>0.$$ The **barrier problem** with parameter $$t$$ is the problem obtained by replacing the inequality constraints with the barrier function added to the objective.

$$\min_{\underline{x}}\,\,f(\underline{x})+\frac{1}{t}\phi(\underline{x})\,\,\,\,\mathrm{subject}\,\mathrm{to}\,\,h_j(\underline{x})=0\,\,\forall\,j$$

The barrier problem has a unique minimiser $$\underline{x}^*(t)$$ when the objective is strictly convex.

The **central path** of a convex standard form problem is the set of minimisers $$\left\{\underline{x}^*(t):t>0\right\}$$ of its barrier problems. The central path has the following properties:
- $$\underline{x}^*(t)$$ is feasible for the original problem;
- the multipliers $$\lambda_i=-\frac{1}{t\,g_i\left(\underline{x}^*(t)\right)}$$ are dual feasible, so by weak duality $$f\left(\underline{x}^*(t)\right)-p^*\leq\frac{m}{t}.$$

The **barrier method** is the interior point method that solves the barrier problem by Newton's method for an increasing sequence of values of $$t,$$ typically $$t\leftarrow\mu t$$ with $$\mu>1,$$ starting each solve from the previous minimiser, until $$\frac{m}{t}$$ is below the required accuracy.

A **primal-dual interior point method** is the interior point method that applies Newton's method to the KKT conditions with complementary slackness perturbed to $$-\lambda_i g_i(\underline{x})=\frac{1}{t},$$ updating the primal variables and multipliers together. Primal-dual interior point methods are the most widely used variant. For linear programs the number of Newton iterations needed to reach accuracy $$\varepsilon$$ grows as $$\sqrt{m}\log_e\frac{1}{\varepsilon},$$ so interior point methods run in polynomial time where the simplex method does not.
