---
title:  "Ordinary Differential Equations"
description: "Equations relating a function to its derivatives"
---

A **differential equation** is an equation relating an unknown function to its derivatives.

Let $$E$$ be a differential equation. The equation $$E$$ is an **ordinary differential equation** if and only if the unknown function has one independent variable. The equation $$E$$ is a **partial differential equation** if and only if the unknown function has several independent variables, so that partial derivatives appear.

Let $$E$$ be a differential equation. The **order** of $$E$$ is the order of the highest derivative in it.

Let $$I\subseteq\mathbb{R}$$ be an interval and $$F$$ be a function of $$n+1$$ real variables. An ordinary differential equation of order $$n$$ in **normal form** is an equation that expresses the highest derivative of the unknown $$y$$ in terms of $$x$$ and the lower derivatives.

$$y^{(n)}=F\left(x,y,y',\ldots,y^{(n-1)}\right)$$

Let $$y^{(n)}=F\left(x,y,y',\ldots,y^{(n-1)}\right)$$ be an ordinary differential equation of order $$n$$ on an interval $$I.$$ A **solution** of the equation on $$I$$ is a function $$y:I\rightarrow\mathbb{R}$$ that is $$n$$ times differentiable on $$I$$ and satisfies the equation at every $$x\in I.$$ The graph of a solution is an **integral curve**.

Let $$E$$ be an ordinary differential equation of order $$n.$$ A **general solution** of $$E$$ is a family of solutions depending on $$n$$ arbitrary constants that contains every solution, or every solution but finitely many. A **particular solution** of $$E$$ is one member of the family. A **singular solution** of $$E$$ is a solution that is not a member of the family. For example, $$y'=y$$ has general solution $$y=C\,e^x$$ for $$C\in\mathbb{R},$$ since $$\left(y\,e^{-x}\right)'=0$$ for every solution.

Let $$y^{(n)}=F\left(x,y,y',\ldots,y^{(n-1)}\right)$$ be an ordinary differential equation on an interval $$I.$$ The equation is **linear** if and only if $$F$$ is a linear function of $$y,y',\ldots,y^{(n-1)},$$ so that it can be written with **coefficient functions** $$a_0,\ldots,a_{n-1}$$ and a **forcing function** $$g$$ defined on $$I.$$

$$y^{(n)}+a_{n-1}(x)\,y^{(n-1)}+\cdots+a_1(x)\,y'+a_0(x)\,y=g(x)$$

The equation is **non-linear** if and only if it is not linear.

Let $$E$$ be a linear ordinary differential equation with forcing function $$g$$ and coefficient functions $$a_0,\ldots,a_{n-1}.$$ The equation $$E$$ is **homogeneous** if and only if $$g=0,$$ and **inhomogeneous** otherwise. The equation $$E$$ has **constant coefficients** if and only if every $$a_i$$ is constant.

Let $$y^{(n)}=F\left(x,y,y',\ldots,y^{(n-1)}\right)$$ be an ordinary differential equation. The equation is **autonomous** if and only if $$F$$ does not depend on $$x.$$ If $$y$$ is a solution of an autonomous equation then every translate $$x\mapsto y\left(x-c\right)$$ is a solution.

Let $$y^{(n)}=F\left(x,y,y',\ldots,y^{(n-1)}\right)$$ be an ordinary differential equation of order $$n$$ in normal form and $$\underline{y}=\left(y,y',\ldots,y^{(n-1)}\right).$$ The **first-order system** equivalent to the equation is the system of $$n$$ first-order equations

$$\underline{y}'=\underline{F}\left(x,\underline{y}\right),\qquad\underline{F}\left(x,\underline{y}\right)=\left(y_2,\ldots,y_n,F\left(x,y_1,\ldots,y_n\right)\right).$$

Results about first-order systems with $$\underline{y}\in\mathbb{R}^n$$ therefore apply to equations of every order.

Let $$\underline{y}'=\underline{F}\left(x,\underline{y}\right)$$ be a first-order system, $$x_0\in I$$ and $$\underline{y}_0\in\mathbb{R}^n.$$ An **initial condition** is a condition $$\underline{y}\left(x_0\right)=\underline{y}_0$$ that fixes the value of the unknown at one point. An **initial value problem** is a first-order system together with an initial condition.

$$\underline{y}'=\underline{F}\left(x,\underline{y}\right),\qquad\underline{y}\left(x_0\right)=\underline{y}_0$$

For an equation of order $$n$$ the initial condition prescribes $$y\left(x_0\right),y'\left(x_0\right),\ldots,y^{(n-1)}\left(x_0\right).$$

Let $$E$$ be an ordinary differential equation on an interval $$I.$$ A **boundary value problem** is the equation $$E$$ together with conditions on the unknown at two or more points, typically the endpoints of $$I.$$ A boundary value problem need not have a unique solution, or any solution: $$y''+y=0$$ with $$y(0)=y(\pi)=0$$ is solved by every $$y=C\sin x,$$ whereas with $$y(0)=0$$ and $$y(\pi)=1$$ it has no solution.

Let $$\underline{y}'=\underline{F}\left(x,\underline{y}\right),$$ $$\underline{y}\left(x_0\right)=\underline{y}_0$$ be an initial value problem with $$\underline{F}$$ continuous. The **integral equation** of the initial value problem is the equation obtained by integrating both sides from $$x_0,$$ where a vector-valued function is integrated componentwise.

$$\underline{y}(x)=\underline{y}_0+\int_{x_0}^{x}\underline{F}\left(s,\underline{y}(s)\right)ds\,\,\forall\,x\in I$$

By the fundamental theorems of calculus, a continuous $$\underline{y}$$ solves the initial value problem on an interval $$I$$ containing $$x_0$$ if and only if it satisfies the integral equation.

Let $$\underline{y}'=\underline{F}\left(x,\underline{y}\right),$$ $$\underline{y}\left(x_0\right)=\underline{y}_0$$ be an initial value problem with $$\underline{F}$$ continuous. **Picard iteration** is the sequence of functions obtained by applying the right-hand side of the integral equation repeatedly, starting from the constant function $$\underline{y}_0.$$

$$\underline{y}_{k+1}(x):=\underline{y}_0+\int_{x_0}^{x}\underline{F}\left(s,\underline{y}_k(s)\right)ds$$

Let $$R\subseteq\mathbb{R}\times\mathbb{R}^n$$ and $$\underline{F}:R\rightarrow\mathbb{R}^n$$ be a function. The function $$\underline{F}$$ is **Lipschitz continuous in $$\underline{y}$$** on $$R$$ if and only if there exists $$L\geq 0$$ such that

$$\left\lVert\underline{F}\left(x,\underline{y}\right)-\underline{F}\left(x,\underline{z}\right)\right\rVert\leq L\left\lVert\underline{y}-\underline{z}\right\rVert\,\,\forall\,\left(x,\underline{y}\right),\left(x,\underline{z}\right)\in R.$$

If $$\underline{F}$$ is $$C^1$$ on an open set then by the mean value theorem it is Lipschitz continuous in $$\underline{y}$$ on every closed bounded rectangle inside that set.

Let $$R=\left[x_0-a,x_0+a\right]\times\overline{B}\left(\underline{y}_0,b\right)$$ and $$\underline{F}:R\rightarrow\mathbb{R}^n$$ be continuous with $$\lVert\underline{F}\rVert\leq M$$ on $$R$$ and Lipschitz continuous in $$\underline{y}$$ on $$R.$$ The **Picard–Lindelöf theorem** states that the initial value problem $$\underline{y}'=\underline{F}\left(x,\underline{y}\right),$$ $$\underline{y}\left(x_0\right)=\underline{y}_0$$ has exactly one solution on $$\left[x_0-h,x_0+h\right]$$ with $$h=\min\left\{a,\frac{b}{M}\right\},$$ and that the Picard iterates converge uniformly to it. The right-hand side of the integral equation is a map on the complete metric space of continuous functions from $$\left[x_0-h,x_0+h\right]$$ into $$\overline{B}\left(\underline{y}_0,b\right)$$ with the supremum norm, some iterate of which is a contraction, so the contraction mapping theorem gives the unique fixed point.

Let $$R=\left[x_0-a,x_0+a\right]\times\overline{B}\left(\underline{y}_0,b\right)$$ and $$\underline{F}:R\rightarrow\mathbb{R}^n$$ be continuous with $$\lVert\underline{F}\rVert\leq M$$ on $$R.$$ The **Peano existence theorem** states that the initial value problem has a solution on $$\left[x_0-h,x_0+h\right]$$ with $$h=\min\left\{a,\frac{b}{M}\right\}.$$ The Lipschitz condition cannot be dropped for uniqueness: $$y'=2\sqrt{\lvert y\rvert}$$ with $$y(0)=0$$ is solved by $$y=0$$ and by $$y=x\lvert x\rvert,$$ since $$\sqrt{\lvert y\rvert}$$ is not Lipschitz continuous near $$0.$$

Let $$\underline{y}_1$$ and $$\underline{y}_2$$ be solutions of an initial value problem on intervals $$I_1\subseteq I_2.$$ The solution $$\underline{y}_2$$ **extends** $$\underline{y}_1$$ if and only if $$\underline{y}_2$$ agrees with $$\underline{y}_1$$ on $$I_1.$$

Let $$U\subseteq\mathbb{R}\times\mathbb{R}^n$$ be open and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be continuous and Lipschitz continuous in $$\underline{y}$$ on every closed bounded rectangle inside $$U.$$ A **maximal solution** of an initial value problem is a solution that is not extended by any other solution, and its interval of definition $$\left(\alpha,\omega\right)$$ is the **maximal interval of existence**. Maximal solutions have the following properties:
- every solution extends to a unique maximal solution;
- as $$x\rightarrow\omega$$ or $$x\rightarrow\alpha$$ the point $$\left(x,\underline{y}(x)\right)$$ leaves every compact subset of $$U;$$
- the maximal interval can be smaller than the interval on which $$\underline{F}$$ is defined, since a solution can **blow up** in finite time: $$y'=y^2$$ with $$y(0)=1$$ has maximal solution $$y=\frac{1}{1-x}$$ on $$\left(-\infty,1\right);$$
- if $$\underline{F}$$ is continuous on $$I\times\mathbb{R}^n$$ and Lipschitz continuous in $$\underline{y}$$ on all of it, as it is for a linear system with continuous coefficients, then every maximal solution exists on the whole of $$I.$$

Let $$u:\left[x_0,x_1\right]\rightarrow\mathbb{R}$$ be continuous and $$C,L\geq 0$$ be constants. **Grönwall's inequality** states that if $$u(x)\leq C+L\int_{x_0}^{x}u(s)\,ds$$ for all $$x$$ then $$u(x)\leq C\,e^{L\left(x-x_0\right)}$$ for all $$x.$$

Let $$\underline{F}$$ be Lipschitz continuous in $$\underline{y}$$ with constant $$L,$$ and $$\underline{y}$$ and $$\underline{z}$$ be solutions of $$\underline{y}'=\underline{F}\left(x,\underline{y}\right)$$ with initial values $$\underline{y}_0$$ and $$\underline{z}_0$$ at $$x_0.$$ **Continuous dependence on initial conditions** is the property that the distance between the solutions is bounded by the distance between their initial values, which follows from Grönwall's inequality applied to the difference of the two integral equations.

$$\left\lVert\underline{y}(x)-\underline{z}(x)\right\rVert\leq\left\lVert\underline{y}_0-\underline{z}_0\right\rVert e^{L\lvert x-x_0\rvert}$$

Taking $$\underline{y}_0=\underline{z}_0$$ gives uniqueness.

An initial value problem is **well-posed** if and only if it has a unique solution that depends continuously on the initial condition. The bound above grows exponentially in $$x,$$ so well-posedness does not prevent nearby solutions from diverging over long intervals.
