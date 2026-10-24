---
layout: post
category: "differential-equations"
title:  "First-Order Equations"
tags: ["differential equations", "first-order equation"]
description: "Equations in a first derivative"
---

A first-order ordinary differential equation in normal form is $$y'=F(x,y).$$ It is **separable** if the right-hand side is a product of a function of $$x$$ and a function of $$y.$$

$$y'=f(x)\,g(y)$$

Where $$g(y)\neq 0$$ the equation is $$\frac{y'}{g(y)}=f(x),$$ and by the chain rule and the second fundamental theorem of calculus a differentiable $$y$$ solves it if and only if

$$\int\frac{dy}{g(y)}=\int f(x)\,dx,$$

where the left-hand side is an antiderivative of $$\frac{1}{g}$$ evaluated at $$y(x),$$ which defines $$y$$ implicitly up to a constant of integration. Each zero $$y_0$$ of $$g$$ gives the constant solution $$y=y_0.$$ If $$f$$ and $$g$$ are continuous and $$g$$ is $$C^1$$ then solutions through points with $$g(y)\neq 0$$ are unique and never reach a zero of $$g.$$ For example, $$y'=ky$$ has the solutions $$y=C\,e^{kx},$$ which **grow exponentially** when $$k>0$$ and **decay exponentially** when $$k<0.$$

A first-order equation is linear if it can be written with continuous coefficient functions $$p$$ and $$q$$ on an interval $$I$$ as

$$y'+p(x)\,y=q(x).$$

Let $$P$$ be an antiderivative of $$p$$ on $$I.$$ The **integrating factor** $$\mu(x):=e^{P(x)}$$ satisfies $$\mu'=p\,\mu,$$ so by the product rule the equation multiplied by $$\mu$$ is $$\left(\mu\,y\right)'=\mu\,q,$$ and integrating gives the general solution on $$I.$$

$$y(x)=\frac{1}{\mu(x)}\left(\int\mu(x)\,q(x)\,dx+C\right)=e^{-P(x)}\int e^{P(x)}q(x)\,dx+C\,e^{-P(x)}$$

The solution is the sum of a particular solution and the general solution $$C\,e^{-P(x)}$$ of the homogeneous equation $$y'+p\,y=0.$$ Every initial value problem $$y\left(x_0\right)=y_0$$ with $$x_0\in I$$ has exactly one solution, which exists on all of $$I.$$ For example, $$y'+\frac{1}{x}y=1$$ on $$\left(0,\infty\right)$$ has $$\mu=x$$ and general solution $$y=\frac{x}{2}+\frac{C}{x}.$$

The **Bernoulli equation** $$y'+p(x)\,y=q(x)\,y^n$$ with $$n\neq 0,1$$ is non-linear, but the substitution $$v=y^{1-n}$$ turns it into the linear equation $$v'+\left(1-n\right)p(x)\,v=\left(1-n\right)q(x).$$ Similarly, a **homogeneous equation of degree zero** $$y'=F\left(\frac{y}{x}\right)$$ becomes separable under the substitution $$v=\frac{y}{x},$$ since $$x\,v'=F(v)-v.$$

Let $$U\subseteq\mathbb{R}^2$$ be open and $$M,N:U\rightarrow\mathbb{R}$$ be $$C^1$$ with $$N\neq 0.$$ The equation $$y'=-\frac{M(x,y)}{N(x,y)},$$ written in **differential form** as

$$M(x,y)\,dx+N(x,y)\,dy=0,$$

is **exact** on $$U$$ if the vector field $$\left(M,N\right)$$ is conservative on $$U,$$ that is, if there exists a potential $$\psi:U\rightarrow\mathbb{R}$$ with $$\psi_x=M$$ and $$\psi_y=N,$$ where subscripts denote partial derivatives. By the chain rule the solutions are then the level sets of the potential,

$$\psi\left(x,y\right)=C,$$

and each level set defines a solution $$y(x)$$ implicitly wherever $$\psi_y\neq 0.$$ An exact equation satisfies the **exactness condition** $$M_y=N_x$$ on $$U$$ by Schwarz's theorem, and the converse holds when $$U$$ is simply connected, since then every irrotational field is conservative. The potential is found by integrating $$M$$ with respect to $$x,$$ with a constant of integration that is a function of $$y,$$ and fixing that function from $$\psi_y=N.$$ For example, $$\left(2xy+1\right)dx+\left(x^2+2y\right)dy=0$$ is exact with $$\psi=x^2y+x+y^2.$$

An equation that is not exact can sometimes be made exact by multiplying it by an **integrating factor** $$\mu(x,y)\neq 0,$$ which must satisfy $$\left(\mu M\right)_y=\left(\mu N\right)_x.$$ If $$\frac{M_y-N_x}{N}$$ depends on $$x$$ alone then $$\mu(x)=\exp\int\frac{M_y-N_x}{N}\,dx$$ is an integrating factor, and if $$\frac{N_x-M_y}{M}$$ depends on $$y$$ alone then $$\mu(y)=\exp\int\frac{N_x-M_y}{M}\,dy$$ is one. A linear equation $$\left(p\,y-q\right)dx+dy=0$$ is the case $$\frac{M_y-N_x}{N}=p(x),$$ which recovers its integrating factor $$e^{P(x)}.$$

A first-order autonomous equation has a right-hand side that does not depend on $$x,$$

$$y'=f(y),$$

with $$f$$ a $$C^1$$ function on an interval, and is separable. A zero $$y^*$$ of $$f$$ is an **equilibrium point**, also called a **critical point**, and the constant function $$y=y^*$$ is an **equilibrium solution**. By uniqueness no other solution reaches an equilibrium point, so between consecutive equilibrium points every solution is strictly monotonic, increasing where $$f>0$$ and decreasing where $$f<0,$$ and converges to an equilibrium point or diverges as $$x\rightarrow\infty.$$ The **phase line** records the equilibrium points and the sign of $$f$$ between them, which determines the direction of every solution.

An equilibrium point $$y^*$$ is **stable** if every solution that starts sufficiently close to $$y^*$$ stays close to it for all $$x\geq x_0,$$

$$\forall\varepsilon>0\,\exists\delta>0:\lvert y\left(x_0\right)-y^*\rvert<\delta\Rightarrow\lvert y(x)-y^*\rvert<\varepsilon\,\,\forall\,x\geq x_0,$$

**asymptotically stable** if it is stable and every solution that starts sufficiently close to $$y^*$$ converges to it as $$x\rightarrow\infty,$$ and **unstable** if it is not stable. On the phase line an equilibrium point is asymptotically stable if $$f$$ changes sign from positive to negative at it and unstable if $$f$$ changes sign from negative to positive. The **linearisation** of the equation at $$y^*$$ is $$u'=f'\left(y^*\right)u$$ for the deviation $$u=y-y^*,$$ whose solutions are $$u=C\,e^{f'\left(y^*\right)x},$$ and the **linearisation criterion** states that $$y^*$$ is asymptotically stable if $$f'\left(y^*\right)<0$$ and unstable if $$f'\left(y^*\right)>0.$$ If $$f'\left(y^*\right)=0$$ the criterion is inconclusive: $$y'=-y^3$$ has an asymptotically stable equilibrium at $$0$$ and $$y'=y^3$$ an unstable one. A **semi-stable** equilibrium point, such as $$0$$ for $$y'=y^2,$$ attracts solutions from one side and repels them from the other.

The **logistic equation** models a quantity that grows at rate $$r>0$$ when small and saturates at the **carrying capacity** $$K>0.$$

$$y'=r\,y\left(1-\frac{y}{K}\right),\qquad y(x)=\frac{K}{1+\left(\frac{K}{y_0}-1\right)e^{-rx}}$$

Its equilibrium points are $$0,$$ which is unstable since $$f'(0)=r>0,$$ and $$K,$$ which is asymptotically stable since $$f'(K)=-r<0,$$ and every solution with $$y_0>0$$ converges to $$K.$$
