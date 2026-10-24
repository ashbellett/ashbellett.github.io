---
layout: post
category: "differential-equations"
title:  "Ordinary Differential Equations"
tags: ["differential equations", "ordinary differential equation"]
description: "Equations relating a function to its derivatives"
---

A **differential equation** is an equation relating an unknown function to its derivatives. It is an **ordinary differential equation** if the unknown function has one independent variable and a **partial differential equation** if it has several, so that partial derivatives appear. The **order** of a differential equation is the order of the highest derivative in it. Let $$I\subseteq\mathbb{R}$$ be an interval and $$F$$ be a function of $$n+1$$ real variables. An ordinary differential equation of order $$n$$ in **normal form** expresses the highest derivative of the unknown $$y$$ in terms of $$x$$ and the lower derivatives.

$$y^{(n)}=F\left(x,y,y',\ldots,y^{(n-1)}\right)$$

A **solution** of the equation on $$I$$ is a function $$y:I\rightarrow\mathbb{R}$$ that is $$n$$ times differentiable on $$I$$ and satisfies the equation at every $$x\in I.$$ The graph of a solution is an **integral curve**. A **general solution** is a family of solutions depending on $$n$$ arbitrary constants that contains every solution, or every solution but finitely many **singular solutions**, and a **particular solution** is one member of the family. For example, $$y'=y$$ has general solution $$y=C\,e^x$$ for $$C\in\mathbb{R},$$ since $$\left(y\,e^{-x}\right)'=0$$ for every solution.

The equation is **linear** if $$F$$ is a linear function of $$y,y',\ldots,y^{(n-1)},$$ so that it can be written with coefficient functions $$a_0,\ldots,a_{n-1}$$ and a **forcing function** $$g$$ defined on $$I,$$

$$y^{(n)}+a_{n-1}(x)\,y^{(n-1)}+\cdots+a_1(x)\,y'+a_0(x)\,y=g(x),$$

and **non-linear** otherwise. A linear equation is **homogeneous** if $$g=0$$ and **inhomogeneous** otherwise, and has **constant coefficients** if every $$a_i$$ is constant. The equation is **autonomous** if $$F$$ does not depend on $$x,$$ in which case a translate $$x\mapsto y\left(x-c\right)$$ of a solution is a solution.

Let $$\underline{y}=\left(y,y',\ldots,y^{(n-1)}\right).$$ An equation of order $$n$$ in normal form is equivalent to the **first-order system** of $$n$$ equations

$$\underline{y}'=\underline{F}\left(x,\underline{y}\right),\qquad\underline{F}\left(x,\underline{y}\right)=\left(y_2,\ldots,y_n,F\left(x,y_1,\ldots,y_n\right)\right),$$

so results about first-order systems with $$\underline{y}\in\mathbb{R}^n$$ apply to equations of every order. Let $$x_0\in I$$ and $$\underline{y}_0\in\mathbb{R}^n.$$ An **initial value problem** is a first-order system together with an **initial condition** that fixes the value of the unknown at one point,

$$\underline{y}'=\underline{F}\left(x,\underline{y}\right),\qquad\underline{y}\left(x_0\right)=\underline{y}_0,$$

which for an equation of order $$n$$ prescribes $$y\left(x_0\right),y'\left(x_0\right),\ldots,y^{(n-1)}\left(x_0\right).$$ A **boundary value problem** instead prescribes conditions on the unknown at two or more points, typically the endpoints of $$I,$$ and need not have a unique solution, or any solution: $$y''+y=0$$ with $$y(0)=y(\pi)=0$$ is solved by every $$y=C\sin x,$$ whereas with $$y(0)=0$$ and $$y(\pi)=1$$ it has no solution.

By the fundamental theorems of calculus, a continuous $$\underline{y}$$ solves the initial value problem on an interval $$I$$ containing $$x_0$$ if and only if it satisfies the **integral equation**

$$\underline{y}(x)=\underline{y}_0+\int_{x_0}^{x}\underline{F}\left(s,\underline{y}(s)\right)ds\,\,\forall\,x\in I,$$

where a vector-valued function is integrated componentwise. **Picard iteration** applies the right-hand side repeatedly, starting from the constant function $$\underline{y}_0.$$

$$\underline{y}_{k+1}(x):=\underline{y}_0+\int_{x_0}^{x}\underline{F}\left(s,\underline{y}_k(s)\right)ds$$

Let $$R=\left[x_0-a,x_0+a\right]\times\overline{B}\left(\underline{y}_0,b\right)$$ and $$\underline{F}:R\rightarrow\mathbb{R}^n$$ be continuous with $$\lVert\underline{F}\rVert\leq M$$ on $$R$$ and **Lipschitz continuous in $$\underline{y}$$**, meaning that there exists $$L\geq 0$$ with

$$\left\lVert\underline{F}\left(x,\underline{y}\right)-\underline{F}\left(x,\underline{z}\right)\right\rVert\leq L\left\lVert\underline{y}-\underline{z}\right\rVert\,\,\forall\,\left(x,\underline{y}\right),\left(x,\underline{z}\right)\in R.$$

The **Picard–Lindelöf theorem** states that the initial value problem has exactly one solution on $$\left[x_0-h,x_0+h\right]$$ with $$h=\min\left\{a,\frac{b}{M}\right\},$$ and that the Picard iterates converge uniformly to it. The right-hand side of the integral equation is a map on the complete metric space of continuous functions from $$\left[x_0-h,x_0+h\right]$$ into $$\overline{B}\left(\underline{y}_0,b\right)$$ with the supremum norm, some iterate of which is a contraction, so the contraction mapping theorem gives the unique fixed point. If $$\underline{F}$$ is $$C^1$$ on an open set then it is Lipschitz continuous in $$\underline{y}$$ on every closed bounded rectangle inside that set, by the mean value theorem, so the theorem applies to every initial condition in the set.

The Lipschitz condition cannot be dropped for uniqueness. The **Peano existence theorem** states that continuity of $$\underline{F}$$ alone guarantees a solution on $$\left[x_0-h,x_0+h\right],$$ but $$y'=2\sqrt{\lvert y\rvert}$$ with $$y(0)=0$$ is solved by $$y=0$$ and by $$y=x\lvert x\rvert,$$ since $$\sqrt{\lvert y\rvert}$$ is not Lipschitz continuous near $$0.$$

A solution of an initial value problem on an interval $$I$$ **extends** another if it agrees with it on the smaller interval. Under the Picard–Lindelöf hypotheses on an open set $$U\subseteq\mathbb{R}\times\mathbb{R}^n,$$ every solution extends to a unique **maximal solution** on a **maximal interval of existence** $$\left(\alpha,\omega\right),$$ and as $$x\rightarrow\omega$$ (or $$x\rightarrow\alpha$$) the point $$\left(x,\underline{y}(x)\right)$$ leaves every compact subset of $$U.$$ The maximal interval can be smaller than the interval on which $$\underline{F}$$ is defined, since a solution can **blow up** in finite time: $$y'=y^2$$ with $$y(0)=1$$ has maximal solution $$y=\frac{1}{1-x}$$ on $$\left(-\infty,1\right).$$ If $$\underline{F}$$ is continuous on $$I\times\mathbb{R}^n$$ and Lipschitz continuous in $$\underline{y}$$ on all of it, as it is for a linear system with continuous coefficients, then every maximal solution exists on the whole of $$I.$$

**Grönwall's inequality** states that if $$u:\left[x_0,x_1\right]\rightarrow\mathbb{R}$$ is continuous and satisfies $$u(x)\leq C+L\int_{x_0}^{x}u(s)\,ds$$ for constants $$C,L\geq 0$$ then $$u(x)\leq C\,e^{L\left(x-x_0\right)}.$$ Applied to the difference of two solutions of the integral equation it gives uniqueness and **continuous dependence on initial conditions**: if $$\underline{y}$$ and $$\underline{z}$$ solve the same system with initial values $$\underline{y}_0$$ and $$\underline{z}_0$$ then

$$\left\lVert\underline{y}(x)-\underline{z}(x)\right\rVert\leq\left\lVert\underline{y}_0-\underline{z}_0\right\rVert e^{L\lvert x-x_0\rvert}.$$

An initial value problem with a unique solution that depends continuously on the data is **well-posed**. The bound grows exponentially in $$x,$$ so well-posedness does not prevent nearby solutions from diverging over long intervals.
