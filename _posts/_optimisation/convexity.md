---
layout: post
category: "optimisation"
title:  "Convexity"
tags: ["optimisation", "convexity"]
description: "Fundamental property of a function's shape"
---

Let $$C\subseteq\mathbb{R}^n$$ be a set. $$C$$ is a **convex set** if and only if the line segment between any two of its points lies in $$C.$$

$$t\,\underline{x}+\left(1-t\right)\underline{y}\in C\,\,\forall\,\underline{x},\underline{y}\in C,\,t\in\left[0,1\right]$$

Let $$\underline{x}_1,\ldots,\underline{x}_k\in\mathbb{R}^n$$ and $$\lambda_1,\ldots,\lambda_k\geq 0$$ with $$\sum_{i=1}^k\lambda_i=1.$$ The vector $$\sum_{i=1}^k\lambda_i\underline{x}_i$$ is a **convex combination** of $$\underline{x}_1,\ldots,\underline{x}_k.$$ A set is convex if and only if it contains every convex combination of its points. The **convex hull** $$\mathrm{conv}(X)$$ of a set $$X\subseteq\mathbb{R}^n$$ is the set of all convex combinations of points of $$X,$$ which is the smallest convex set containing $$X.$$

The following sets are convex: $$\mathbb{R}^n;$$ the **hyperplane** $$\{\underline{x}:\underline{a}^\intercal\underline{x}=b\}$$ and **half-space** $$\{\underline{x}:\underline{a}^\intercal\underline{x}\leq b\}$$ for $$\underline{a}\in\mathbb{R}^n\setminus\{\underline{0}\}$$ and $$b\in\mathbb{R};$$ the ball $$\{\underline{x}:\lVert\underline{x}-\underline{x}_0\rVert\leq r\};$$ and any intersection of convex sets. A **polyhedron** is an intersection of finitely many half-spaces and hyperplanes and is therefore convex.

Let $$C\subseteq\mathbb{R}^n$$ be a convex set and $$f:C\rightarrow\mathbb{R}$$ be a function. $$f$$ is a **convex function** if and only if the line segment between any two points on its graph lies on or above the graph.

$$f\left(t\,\underline{x}+\left(1-t\right)\underline{y}\right)\leq t\,f(\underline{x})+\left(1-t\right)f(\underline{y})\,\,\forall\,\underline{x},\underline{y}\in C,\,t\in\left[0,1\right]$$

$$f$$ is **strictly convex** if and only if the inequality is strict for all $$\underline{x}\neq\underline{y}$$ and $$t\in\left(0,1\right).$$ $$f$$ is **concave** if and only if $$-f$$ is convex, and **strictly concave** if and only if $$-f$$ is strictly convex. Let $$\mu>0.$$ $$f$$ is **strongly convex** with parameter $$\mu$$ if and only if $$f(\underline{x})-\frac{\mu}{2}\lVert\underline{x}\rVert^2$$ is convex, which is equivalent to

$$f\left(t\,\underline{x}+\left(1-t\right)\underline{y}\right)\leq t\,f(\underline{x})+\left(1-t\right)f(\underline{y})-\frac{\mu}{2}t\left(1-t\right)\lVert\underline{x}-\underline{y}\rVert^2\,\,\forall\,\underline{x},\underline{y}\in C,\,t\in\left[0,1\right].$$

Strong convexity implies strict convexity, which implies convexity, and neither implication reverses: $$f(x)=x^4$$ is strictly but not strongly convex on $$\mathbb{R}.$$ An **affine function** $$f(\underline{x})=\underline{a}^\intercal\underline{x}+b$$ is both convex and concave, and these are the only functions that are both. Every norm is convex, as are $$x^2,$$ $$\lvert x\rvert,$$ $$e^x$$ on $$\mathbb{R}$$ and $$-\log_e x$$ on $$\left(0,\infty\right).$$

The **epigraph** of $$f$$ is the set of points on or above its graph.

$$\mathrm{epi}\,f:=\left\{\left(\underline{x},s\right)\in C\times\mathbb{R}:s\geq f(\underline{x})\right\}$$

$$f$$ is convex if and only if $$\mathrm{epi}\,f$$ is a convex subset of $$\mathbb{R}^{n+1}.$$ Let $$\alpha\in\mathbb{R}.$$ The **sublevel set** of $$f$$ at level $$\alpha$$ is

$$\left\{\underline{x}\in C:f(\underline{x})\leq\alpha\right\}.$$

Every sublevel set of a convex function is convex. The converse is false, and a function all of whose sublevel sets are convex is **quasi-convex**.

**Jensen's inequality** states that if $$f$$ is convex, $$\underline{x}_1,\ldots,\underline{x}_k\in C$$ and $$\lambda_1,\ldots,\lambda_k\geq 0$$ with $$\sum_{i=1}^k\lambda_i=1$$ then the value of $$f$$ at a convex combination is at most the convex combination of the values of $$f.$$

$$f\left(\sum_{i=1}^k\lambda_i\underline{x}_i\right)\leq\sum_{i=1}^k\lambda_i f\left(\underline{x}_i\right)$$

The inequality reverses for concave functions, and extends from finite weighted averages to expectations of random variables.

Let $$C\subseteq\mathbb{R}^n$$ be an open convex set and $$f:C\rightarrow\mathbb{R}$$ be differentiable. The **first-order condition** states that $$f$$ is convex if and only if its graph lies on or above every one of its tangent planes.

$$f(\underline{y})\geq f(\underline{x})+\nabla f(\underline{x})^\intercal\left(\underline{y}-\underline{x}\right)\,\,\forall\,\underline{x},\underline{y}\in C$$

$$f$$ is strictly convex if and only if the inequality is strict for all $$\underline{y}\neq\underline{x},$$ and strongly convex with parameter $$\mu$$ if and only if

$$f(\underline{y})\geq f(\underline{x})+\nabla f(\underline{x})^\intercal\left(\underline{y}-\underline{x}\right)+\frac{\mu}{2}\lVert\underline{y}-\underline{x}\rVert^2\,\,\forall\,\underline{x},\underline{y}\in C.$$

Let $$f\in C^2(C).$$ The **second-order condition** states that $$f$$ is convex if and only if its Hessian matrix is positive semi-definite at every point of $$C,$$ and strongly convex with parameter $$\mu$$ if and only if every eigenvalue of its Hessian matrix is at least $$\mu$$ at every point of $$C.$$

$$\underline{v}^\intercal H_f(\underline{x})\,\underline{v}\geq 0\,\,\forall\,\underline{x}\in C,\,\underline{v}\in\mathbb{R}^n$$

If the Hessian matrix is positive definite at every point of $$C$$ then $$f$$ is strictly convex, but the converse is false since $$f(x)=x^4$$ has $$f''(0)=0.$$ For $$n=1$$ the condition is $$f''(x)\geq 0\,\,\forall\,x\in C.$$ The quadratic function $$f(\underline{x})=\frac{1}{2}\underline{x}^\intercal A\underline{x}+\underline{b}^\intercal\underline{x}+c$$ with $$A$$ symmetric has $$H_f=A$$ and is convex if and only if $$A$$ is positive semi-definite and strongly convex if and only if $$A$$ is positive definite, with $$\mu$$ equal to the smallest eigenvalue of $$A.$$

Convexity is preserved by the following operations, which allow the convexity of a function to be established from simpler functions:
- the non-negative weighted sum $$\sum_{i=1}^k w_i f_i$$ with $$w_i\geq 0$$ of convex functions $$f_i$$ is convex;
- the composition $$f\left(A\underline{x}+\underline{b}\right)$$ of a convex function $$f$$ with an affine function is convex;
- the pointwise maximum $$\max\left\{f_1(\underline{x}),\ldots,f_k(\underline{x})\right\}$$ of convex functions is convex, as is the pointwise supremum of any family of convex functions;
- the composition $$g\left(h(\underline{x})\right)$$ is convex if $$h$$ is convex and $$g$$ is convex and monotonically increasing, or $$h$$ is concave and $$g$$ is convex and monotonically decreasing;
- $$f$$ is convex if and only if its restriction to every line $$t\mapsto f\left(\underline{x}+t\,\underline{v}\right)$$ is convex on the interval where it is defined, which reduces convexity to the univariate case.

Let $$C\subseteq\mathbb{R}^n$$ be a convex set and $$f:C\rightarrow\mathbb{R}$$ be convex. A point $$\underline{x}^*\in C$$ is a **local minimiser** of $$f$$ on $$C$$ if and only if there exists $$\delta>0$$ with $$f(\underline{x}^*)\leq f(\underline{x})$$ for all $$\underline{x}\in C$$ with $$\lVert\underline{x}-\underline{x}^*\rVert<\delta,$$ and a **global minimiser** if and only if $$f(\underline{x}^*)\leq f(\underline{x})\,\,\forall\,\underline{x}\in C.$$ Convexity has the following implications for minimisation:
- every local minimiser of $$f$$ on $$C$$ is a global minimiser;
- the set of global minimisers is a convex set, since it is a sublevel set;
- if $$f$$ is strictly convex then it has at most one global minimiser;
- if $$f$$ is strongly convex and continuous and $$C$$ is non-empty and **closed**, meaning that its complement $$\mathbb{R}^n\setminus C$$ is open, then $$f$$ has exactly one global minimiser;
- if $$f$$ is differentiable on an open convex set $$C$$ then $$\underline{x}^*$$ is a global minimiser if and only if $$\nabla f(\underline{x}^*)=\underline{0},$$ so every stationary point is a global minimiser;
- if $$f$$ is differentiable on a convex set $$C$$ that need not be open then $$\underline{x}^*$$ is a global minimiser if and only if no direction into $$C$$ is a direction of descent.

$$\nabla f(\underline{x}^*)^\intercal\left(\underline{x}-\underline{x}^*\right)\geq 0\,\,\forall\,\underline{x}\in C$$

A convex function on an open convex set is continuous. Maximisation of a convex function has none of these properties, but maximising a concave function is equivalent to minimising the convex function $$-f.$$ Minimising a convex function over a convex set is a **convex optimisation problem**, and the implications above are why such problems can be solved reliably.
