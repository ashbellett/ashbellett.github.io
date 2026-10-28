---
layout: post
category: "differential-equations"
title:  "First-Order Equations"
tags: ["differential equations", "first-order equation"]
description: "Equations in a first derivative"
---

A first-order ordinary differential equation in normal form is an equation $$y'=F(x,y).$$

Let $$y'=F(x,y)$$ be a first-order equation. The equation is **separable** if and only if $$F$$ is a product of a function of $$x$$ and a function of $$y.$$

$$y'=f(x)\,g(y)$$

Let $$y'=f(x)\,g(y)$$ be a separable equation. Where $$g(y)\neq 0$$ the equation is $$\frac{y'}{g(y)}=f(x),$$ and by the chain rule and the second fundamental theorem of calculus a differentiable $$y$$ solves it if and only if

$$\int\frac{dy}{g(y)}=\int f(x)\,dx,$$

where the left-hand side is an antiderivative of $$\frac{1}{g}$$ evaluated at $$y(x).$$ This defines $$y$$ implicitly up to a constant of integration. Separable equations have the following properties:
- each zero $$y_0$$ of $$g$$ gives the constant solution $$y=y_0;$$
- if $$f$$ and $$g$$ are continuous and $$g$$ is $$C^1$$ then solutions through points with $$g(y)\neq 0$$ are unique and never reach a zero of $$g.$$

Let $$k\in\mathbb{R}.$$ The equation $$y'=ky$$ is separable with solutions $$y=C\,e^{kx}.$$ The solutions **grow exponentially** when $$k>0$$ and **decay exponentially** when $$k<0.$$

Let $$I$$ be an interval and $$p,q:I\rightarrow\mathbb{R}$$ be continuous. A **first-order linear equation** is an equation of the form

$$y'+p(x)\,y=q(x).$$

Let $$y'+p(x)\,y=q(x)$$ be a first-order linear equation on $$I$$ and $$P$$ be an antiderivative of $$p$$ on $$I.$$ The **integrating factor** of the equation is the function $$\mu(x):=e^{P(x)},$$ which satisfies $$\mu'=p\,\mu.$$ By the product rule the equation multiplied by $$\mu$$ is $$\left(\mu\,y\right)'=\mu\,q,$$ and integrating gives the general solution on $$I.$$

$$y(x)=\frac{1}{\mu(x)}\left(\int\mu(x)\,q(x)\,dx+C\right)=e^{-P(x)}\int e^{P(x)}q(x)\,dx+C\,e^{-P(x)}$$

First-order linear equations have the following properties:
- the general solution is the sum of a particular solution and the general solution $$C\,e^{-P(x)}$$ of the homogeneous equation $$y'+p\,y=0;$$
- every initial value problem $$y\left(x_0\right)=y_0$$ with $$x_0\in I$$ has exactly one solution, which exists on all of $$I.$$

For example, $$y'+\frac{1}{x}y=1$$ on $$\left(0,\infty\right)$$ has $$\mu=x$$ and general solution $$y=\frac{x}{2}+\frac{C}{x}.$$

Let $$p,q$$ be continuous on an interval and $$n\neq 0,1.$$ The **Bernoulli equation** is the non-linear equation $$y'+p(x)\,y=q(x)\,y^n.$$ The substitution $$v=y^{1-n}$$ turns the Bernoulli equation into the linear equation $$v'+\left(1-n\right)p(x)\,v=\left(1-n\right)q(x).$$

Let $$F$$ be a function of one variable. A **homogeneous equation of degree zero** is an equation of the form $$y'=F\left(\frac{y}{x}\right).$$ The substitution $$v=\frac{y}{x}$$ turns it into the separable equation $$x\,v'=F(v)-v.$$

Let $$U\subseteq\mathbb{R}^2$$ be open and $$M,N:U\rightarrow\mathbb{R}$$ be $$C^1$$ with $$N\neq 0.$$ The **differential form** of the equation $$y'=-\frac{M(x,y)}{N(x,y)}$$ is

$$M(x,y)\,dx+N(x,y)\,dy=0.$$

Let $$M(x,y)\,dx+N(x,y)\,dy=0$$ be an equation in differential form on $$U.$$ The equation is **exact** on $$U$$ if and only if the vector field $$\left(M,N\right)$$ is conservative on $$U,$$ that is, if and only if there exists a potential $$\psi:U\rightarrow\mathbb{R}$$ with $$\psi_x=M$$ and $$\psi_y=N,$$ where subscripts denote partial derivatives. By the chain rule the solutions of an exact equation are the level sets of the potential,

$$\psi\left(x,y\right)=C,$$

and each level set defines a solution $$y(x)$$ implicitly wherever $$\psi_y\neq 0.$$

Let $$M(x,y)\,dx+N(x,y)\,dy=0$$ be an equation in differential form on $$U.$$ The **exactness condition** is the equation $$M_y=N_x$$ on $$U.$$ Exact equations have the following properties:
- an exact equation satisfies the exactness condition, by Schwarz's theorem;
- if $$U$$ is simply connected then an equation satisfying the exactness condition is exact, since every irrotational field on a simply connected set is conservative;
- the potential is found by integrating $$M$$ with respect to $$x,$$ with a constant of integration that is a function of $$y,$$ and fixing that function from $$\psi_y=N.$$

For example, $$\left(2xy+1\right)dx+\left(x^2+2y\right)dy=0$$ is exact with $$\psi=x^2y+x+y^2.$$

Let $$M(x,y)\,dx+N(x,y)\,dy=0$$ be an equation in differential form that is not exact. An **integrating factor** of the equation is a function $$\mu(x,y)\neq 0$$ such that the equation multiplied by $$\mu$$ is exact, which requires $$\left(\mu M\right)_y=\left(\mu N\right)_x.$$ Integrating factors have the following properties:
- if $$\frac{M_y-N_x}{N}$$ depends on $$x$$ alone then $$\mu(x)=\exp\int\frac{M_y-N_x}{N}\,dx$$ is an integrating factor;
- if $$\frac{N_x-M_y}{M}$$ depends on $$y$$ alone then $$\mu(y)=\exp\int\frac{N_x-M_y}{M}\,dy$$ is an integrating factor;
- a linear equation written as $$\left(p\,y-q\right)dx+dy=0$$ has $$\frac{M_y-N_x}{N}=p(x),$$ which recovers its integrating factor $$e^{P(x)}.$$

Let $$f$$ be a $$C^1$$ function on an interval. A **first-order autonomous equation** is an equation whose right-hand side does not depend on $$x.$$

$$y'=f(y)$$

A first-order autonomous equation is separable.

Let $$y'=f(y)$$ be a first-order autonomous equation. An **equilibrium point** or **critical point** of the equation is a zero $$y^*$$ of $$f.$$ The constant function $$y=y^*$$ is an **equilibrium solution**. Autonomous equations have the following properties:
- by uniqueness, no other solution reaches an equilibrium point;
- between consecutive equilibrium points every solution is strictly monotonic, increasing where $$f>0$$ and decreasing where $$f<0;$$
- every solution converges to an equilibrium point or diverges as $$x\rightarrow\infty.$$

Let $$y'=f(y)$$ be a first-order autonomous equation. The **phase line** of the equation is the record of its equilibrium points and the sign of $$f$$ between them, which determines the direction of every solution.

Let $$y'=f(y)$$ be a first-order autonomous equation and $$y^*$$ be an equilibrium point. The equilibrium point $$y^*$$ is **stable** if and only if every solution that starts sufficiently close to $$y^*$$ stays close to it for all $$x\geq x_0.$$

$$\forall\varepsilon>0\,\exists\delta>0:\lvert y\left(x_0\right)-y^*\rvert<\delta\Rightarrow\lvert y(x)-y^*\rvert<\varepsilon\,\,\forall\,x\geq x_0$$

The equilibrium point $$y^*$$ is **asymptotically stable** if and only if it is stable and every solution that starts sufficiently close to $$y^*$$ converges to it as $$x\rightarrow\infty.$$ The equilibrium point $$y^*$$ is **unstable** if and only if it is not stable. On the phase line, an equilibrium point is asymptotically stable if $$f$$ changes sign from positive to negative at it and unstable if $$f$$ changes sign from negative to positive.

Let $$y'=f(y)$$ be a first-order autonomous equation and $$y^*$$ be an equilibrium point. The **linearisation** of the equation at $$y^*$$ is the linear equation $$u'=f'\left(y^*\right)u$$ for the deviation $$u=y-y^*,$$ whose solutions are $$u=C\,e^{f'\left(y^*\right)x}.$$

Let $$y'=f(y)$$ be a first-order autonomous equation and $$y^*$$ be an equilibrium point. The **linearisation criterion** states that $$y^*$$ is asymptotically stable if $$f'\left(y^*\right)<0$$ and unstable if $$f'\left(y^*\right)>0.$$ If $$f'\left(y^*\right)=0$$ the criterion is inconclusive: $$y'=-y^3$$ has an asymptotically stable equilibrium at $$0$$ and $$y'=y^3$$ has an unstable one.

Let $$y'=f(y)$$ be a first-order autonomous equation and $$y^*$$ be an equilibrium point. The equilibrium point $$y^*$$ is **semi-stable** if and only if it attracts solutions from one side and repels them from the other, such as $$0$$ for $$y'=y^2.$$

Let $$r>0$$ and $$K>0.$$ The **logistic equation** is the autonomous equation

$$y'=r\,y\left(1-\frac{y}{K}\right)$$

with solution $$y(x)=\frac{K}{1+\left(\frac{K}{y_0}-1\right)e^{-rx}}$$ for the initial value $$y(0)=y_0.$$ The number $$r$$ is the **growth rate** and $$K$$ is the **carrying capacity**. The logistic equation has the following properties:
- its equilibrium points are $$0,$$ which is unstable since $$f'(0)=r>0,$$ and $$K,$$ which is asymptotically stable since $$f'(K)=-r<0;$$
- every solution with $$y_0>0$$ converges to $$K.$$
