---
layout: post
category: "differential-equations"
title:  "Partial Differential Equations"
tags: ["differential equations", "partial differential equation"]
description: "Equations in several variables"
---

Let $$U\subseteq\mathbb{R}^n$$ be open and $$u:U\rightarrow\mathbb{R}$$ be the unknown function, with partial derivatives written as subscripts, so that $$u_t=\frac{\partial u}{\partial t}$$ and $$u_{xx}=\frac{\partial^2u}{\partial x^2}.$$ A partial differential equation is linear if it is linear in $$u$$ and its derivatives with coefficients depending only on the independent variables, and it is homogeneous if the function $$u=0$$ solves it. The superposition principle holds for linear homogeneous equations: linear combinations of solutions are solutions, and so are convergent series and integrals of solutions when differentiation under the sum or integral is justified. A second-order linear equation in two variables with constant leading coefficients has the form

$$A\,u_{xx}+2B\,u_{xy}+C\,u_{yy}+D\,u_x+E\,u_y+F\,u=G$$

and is classified by the sign of the discriminant $$B^2-AC,$$ the same quantity that classifies the conic $$Ax^2+2Bxy+Cy^2=1:$$ the equation is **elliptic** if $$B^2-AC<0,$$ **parabolic** if $$B^2-AC=0$$ and **hyperbolic** if $$B^2-AC>0.$$ With variable coefficients the type can vary from point to point. The three types have different qualitative behaviour and each is represented by one of the three equations below, which are studied with the Laplacian $$\Delta u=\sum_{i=1}^{n}u_{x_ix_i}$$ in $$n$$ space variables.

A **boundary condition** prescribes the solution on the boundary $$\partial V$$ of the region $$V$$ on which the equation is posed. A **Dirichlet condition** prescribes the values $$u=h$$ on $$\partial V,$$ a **Neumann condition** prescribes the **normal derivative** $$\frac{\partial u}{\partial n}:=\nabla u\cdot\underline{n}=h$$ along the outward normal, and a **Robin condition** prescribes a combination $$\alpha\,u+\beta\,\frac{\partial u}{\partial n}=h.$$ A condition is homogeneous if $$h=0.$$ For an equation in time and space an initial condition prescribes $$u,$$ and for second order in time also $$u_t,$$ at $$t=0,$$ and an **initial-boundary value problem** combines initial and boundary conditions. As for ordinary differential equations, a problem is well-posed if it has exactly one solution that depends continuously on the data, and which conditions make a problem well-posed depends on its type.

The **heat equation** for a function $$u\left(\underline{x},t\right)$$ of position and time with **diffusivity** $$k>0$$ is the parabolic equation

$$u_t=k\,\Delta u.$$

It governs the temperature of a body, and more generally any quantity that spreads by diffusion, since conservation of the quantity in every region $$V$$ with flux $$-k\,\nabla u$$ through $$\partial V$$ gives $$\frac{d}{dt}\int_Vu\,d\underline{x}=k\oint_{\partial V}\nabla u\cdot\underline{n}\,dS=k\int_V\Delta u\,d\underline{x}$$ by the divergence theorem. The **heat kernel** is the solution with initial condition $$\delta$$ at the origin,

$$\Phi\left(\underline{x},t\right):=\frac{1}{\left(4\pi kt\right)^{\frac{n}{2}}}\exp\left(-\frac{\lVert\underline{x}\rVert^2}{4kt}\right),\qquad t>0,$$

a Gaussian function of width proportional to $$\sqrt{kt}$$ that integrates to $$1$$ by the Gaussian integral, and the solution of the initial value problem on $$\mathbb{R}^n$$ with bounded continuous initial condition $$u\left(\underline{x},0\right)=f\left(\underline{x}\right)$$ is the convolution $$u\left(\underline{x},t\right)=\int_{\mathbb{R}^n}\Phi\left(\underline{x}-\underline{y},t\right)f\left(\underline{y}\right)d\underline{y}.$$ The solution is smooth for $$t>0$$ however rough $$f$$ is, it is positive everywhere for $$t>0$$ if $$f\geq 0$$ is not identically zero, so disturbances propagate with infinite speed, and the equation cannot be solved backwards in time. The **maximum principle** states that on a bounded region $$V$$ and time interval $$\left[0,T\right]$$ a solution attains its maximum and minimum either at $$t=0$$ or on $$\partial V,$$ which gives uniqueness and continuous dependence for the initial-boundary value problem with Dirichlet conditions. With homogeneous Dirichlet or Neumann conditions on a bounded region the solution converges to a steady state as $$t\rightarrow\infty,$$ which is $$0$$ for Dirichlet and the average of $$f$$ for Neumann.

The **wave equation** for a function $$u\left(\underline{x},t\right)$$ with **wave speed** $$c>0$$ is the hyperbolic equation

$$u_{tt}=c^2\Delta u.$$

It governs the small transverse displacement of a string or membrane and the propagation of sound and light. In one space variable, the change of variables $$\xi=x-ct,$$ $$\eta=x+ct$$ reduces it to $$u_{\xi\eta}=0,$$ so every $$C^2$$ solution is a sum of a wave travelling to the right and a wave travelling to the left, $$u=\phi\left(x-ct\right)+\psi\left(x+ct\right),$$ and the initial value problem on $$\mathbb{R}$$ with $$u(x,0)=f(x)$$ and $$u_t(x,0)=g(x)$$ has the unique solution given by **d'Alembert's formula**.

$$u(x,t)=\frac{1}{2}\left(f\left(x-ct\right)+f\left(x+ct\right)\right)+\frac{1}{2c}\int_{x-ct}^{x+ct}g(s)\,ds$$

The lines $$x\pm ct=\mathrm{const}$$ are the **characteristics** of the equation, the value $$u(x,t)$$ depends only on the data in the **domain of dependence** $$\left[x-ct,x+ct\right],$$ so disturbances propagate with finite speed $$c,$$ and the solution is no smoother than its data. The **energy**

$$E(t):=\frac{1}{2}\int_V\left(u_t^2+c^2\lVert\nabla u\rVert^2\right)d\underline{x}$$

is constant in time for solutions on a bounded region with homogeneous Dirichlet or Neumann conditions, by Green's first identity, which gives uniqueness for the initial-boundary value problem. On the interval $$\left[0,L\right]$$ with $$u=0$$ at both ends, the solutions $$\sin\frac{n\pi x}{L}\cos\frac{n\pi ct}{L}$$ and $$\sin\frac{n\pi x}{L}\sin\frac{n\pi ct}{L}$$ are the **standing waves** or **normal modes** of the string, with frequencies $$\frac{nc}{2L}$$ that are integer multiples of the **fundamental frequency** $$\frac{c}{2L}.$$

**Laplace's equation** and **Poisson's equation** for a function $$u\left(\underline{x}\right)$$ of position alone are the elliptic equations

$$\Delta u=0,\qquad\Delta u=f,$$

whose solutions are the steady states of the heat and wave equations. The solutions of Laplace's equation are the harmonic functions, which describe electrostatic and gravitational potentials in empty space and steady temperatures. The **mean value property** states that a harmonic function on $$U$$ equals its average over every sphere, and over every ball, contained in $$U$$ and centred at the point,

$$u\left(\underline{x}\right)=\frac{1}{A\left(\partial B_\rho\right)}\oint_{\partial B_\rho}u\,dS=\frac{1}{\lvert B_\rho\rvert}\int_{B_\rho}u\,d\underline{y},$$

and conversely a continuous function with the mean value property is harmonic. Consequently harmonic functions are smooth, indeed analytic, and satisfy the **strong maximum principle**: a harmonic function on a connected open set that attains its maximum or minimum in the set is constant. On a bounded region the maximum and minimum of a harmonic function continuous up to the boundary are attained on $$\partial V,$$ which gives uniqueness and continuous dependence for the **Dirichlet problem** $$\Delta u=f$$ in $$V,$$ $$u=h$$ on $$\partial V.$$ The **Neumann problem** $$\Delta u=f$$ in $$V,$$ $$\frac{\partial u}{\partial n}=h$$ on $$\partial V$$ is solvable only if $$\int_Vf\,d\underline{x}=\oint_{\partial V}h\,dS,$$ by the divergence theorem, and its solution is then unique up to an additive constant, by Green's first identity with $$f=g=u.$$ **Liouville's theorem** states that a harmonic function on all of $$\mathbb{R}^n$$ that is bounded above or below is constant. The **fundamental solution** of Laplace's equation is the radial harmonic function away from the origin with $$\Delta\Phi=\delta$$ in the sense of the divergence theorem,

$$\Phi\left(\underline{x}\right):=\begin{cases}\dfrac{1}{2\pi}\log_e\lVert\underline{x}\rVert & n=2 \\[1.2em] -\dfrac{1}{\left(n-2\right)A\left(\partial B_1\right)}\lVert\underline{x}\rVert^{2-n} & n\geq 3,\end{cases}$$

so that $$\Phi\left(\underline{x}\right)=-\frac{1}{4\pi\lVert\underline{x}\rVert}$$ when $$n=3,$$ and the solution of Poisson's equation on $$\mathbb{R}^n$$ that decays at infinity is the convolution $$u=\Phi*f.$$

**Separation of variables** seeks solutions of a linear homogeneous equation that are products of functions of one variable each, called **product solutions**, and builds the general solution from them by superposition. For the heat equation on $$\left[0,L\right]$$ with $$u(0,t)=u(L,t)=0$$ and $$u(x,0)=f(x),$$ substituting $$u=X(x)\,T(t)$$ and dividing by $$k\,X\,T$$ gives

$$\frac{T'(t)}{k\,T(t)}=\frac{X''(x)}{X(x)}=-\lambda,$$

where both sides equal a **separation constant** $$-\lambda$$ because one depends on $$t$$ alone and the other on $$x$$ alone. The boundary conditions give the boundary value problem $$X''+\lambda X=0,$$ $$X(0)=X(L)=0,$$ which has non-zero solutions only for $$\lambda_n=\left(\frac{n\pi}{L}\right)^2$$ with $$X_n=\sin\frac{n\pi x}{L},$$ and then $$T_n=e^{-k\lambda_nt}.$$ Superposing the product solutions and matching the initial condition with the sine series of $$f$$ on $$\left[0,L\right]$$ gives the solution

$$u(x,t)=\sum_{n=1}^{\infty}b_ne^{-k\left(\frac{n\pi}{L}\right)^2t}\sin\frac{n\pi x}{L},\qquad b_n=\frac{2}{L}\int_0^Lf(x)\sin\frac{n\pi x}{L}\,dx,$$

in which higher modes decay faster, so the solution is dominated by its first mode for large $$t.$$ The same steps solve the wave equation on $$\left[0,L\right],$$ where $$T_n$$ is a combination of $$\cos\frac{n\pi ct}{L}$$ and $$\sin\frac{n\pi ct}{L}$$ and the initial displacement and velocity give the coefficients, and Laplace's equation on a rectangle, where the separated equation in the variable with homogeneous conditions is the eigenvalue problem and the other factor is a combination of exponentials. On a disc, Laplace's equation in polar coordinates $$u_{rr}+\frac{1}{r}u_r+\frac{1}{r^2}u_{\theta\theta}=0$$ separates into $$\Theta''+\lambda\Theta=0$$ with periodic conditions, giving $$\lambda_n=n^2,$$ and an Euler–Cauchy equation in $$r$$ whose bounded solutions are $$r^n,$$ so a harmonic function on the unit disc is

$$u(r,\theta)=\frac{a_0}{2}+\sum_{n=1}^{\infty}r^n\left(a_n\cos n\theta+b_n\sin n\theta\right)$$

with the Fourier coefficients of its boundary values. Separation of variables requires the boundary conditions to be homogeneous on the separated coordinate and the region to be a product of intervals in some coordinate system, and the boundary value problem it produces for each factor is a Sturm–Liouville problem, whose eigenfunctions always allow the data to be expanded.
