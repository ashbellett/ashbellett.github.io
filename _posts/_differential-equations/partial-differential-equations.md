---
layout: post
category: "differential-equations"
title:  "Partial Differential Equations"
tags: ["differential equations", "partial differential equation"]
description: "Equations in several variables"
---

Let $$U\subseteq\mathbb{R}^n$$ be open and $$u:U\rightarrow\mathbb{R}$$ be the unknown function of a partial differential equation. Partial derivatives of $$u$$ are written as subscripts, so that $$u_t=\frac{\partial u}{\partial t}$$ and $$u_{xx}=\frac{\partial^2u}{\partial x^2}.$$

Let $$E$$ be a partial differential equation with unknown $$u.$$ The equation $$E$$ is **linear** if and only if it is linear in $$u$$ and its derivatives with coefficients depending only on the independent variables. The equation $$E$$ is **homogeneous** if and only if the function $$u=0$$ solves it.

Let $$E$$ be a linear homogeneous partial differential equation. The **superposition principle** states that linear combinations of solutions of $$E$$ are solutions, and so are convergent series and integrals of solutions when differentiation under the sum or integral is justified.

Let $$A,B,C,D,E,F,G\in\mathbb{R}$$ with $$A,B,C$$ not all zero. A **second-order linear equation in two variables with constant leading coefficients** is an equation of the form

$$A\,u_{xx}+2B\,u_{xy}+C\,u_{yy}+D\,u_x+E\,u_y+F\,u=G.$$

Let $$A\,u_{xx}+2B\,u_{xy}+C\,u_{yy}+D\,u_x+E\,u_y+F\,u=G$$ be a second-order linear equation in two variables. The **discriminant** of the equation is $$B^2-AC,$$ the same quantity that classifies the conic $$Ax^2+2Bxy+Cy^2=1.$$ The equation is **elliptic** if and only if $$B^2-AC<0,$$ **parabolic** if and only if $$B^2-AC=0$$ and **hyperbolic** if and only if $$B^2-AC>0.$$ With variable coefficients the type can vary from point to point. The three types have different qualitative behaviour and each is represented by one of the three equations below, which are stated with the Laplacian $$\Delta u=\sum_{i=1}^{n}u_{x_ix_i}$$ in $$n$$ space variables.

Let $$V\subseteq\mathbb{R}^n$$ be a region with boundary $$\partial V$$ and outward normal $$\underline{n},$$ and $$h$$ be a function on $$\partial V.$$ A **boundary condition** is a condition that prescribes the solution on $$\partial V.$$ A **Dirichlet condition** prescribes the values $$u=h$$ on $$\partial V.$$ The **normal derivative** of $$u$$ is $$\frac{\partial u}{\partial n}:=\nabla u\cdot\underline{n},$$ and a **Neumann condition** prescribes $$\frac{\partial u}{\partial n}=h$$ on $$\partial V.$$ A **Robin condition** prescribes a combination $$\alpha\,u+\beta\,\frac{\partial u}{\partial n}=h$$ on $$\partial V.$$ A boundary condition is **homogeneous** if and only if $$h=0.$$

Let $$E$$ be a partial differential equation in time $$t$$ and space. An **initial condition** for $$E$$ prescribes $$u$$ at $$t=0,$$ and for an equation of second order in time also prescribes $$u_t$$ at $$t=0.$$ An **initial-boundary value problem** is the equation $$E$$ together with initial and boundary conditions. As for ordinary differential equations, a problem is **well-posed** if and only if it has exactly one solution that depends continuously on the data. Which conditions make a problem well-posed depends on the type of the equation.

Let $$k>0.$$ The **heat equation** for a function $$u\left(\underline{x},t\right)$$ of position and time is the parabolic equation

$$u_t=k\,\Delta u.$$

The number $$k$$ is the **diffusivity**. The heat equation governs the temperature of a body, and any quantity that spreads by diffusion, since conservation of the quantity in every region $$V$$ with flux $$-k\,\nabla u$$ through $$\partial V$$ gives $$\frac{d}{dt}\int_Vu\,d\underline{x}=k\oint_{\partial V}\nabla u\cdot\underline{n}\,dS=k\int_V\Delta u\,d\underline{x}$$ by the divergence theorem.

Let $$k>0.$$ The **heat kernel** is the solution of the heat equation on $$\mathbb{R}^n$$ with initial condition $$\delta$$ at the origin.

$$\Phi\left(\underline{x},t\right):=\frac{1}{\left(4\pi kt\right)^{\frac{n}{2}}}\exp\left(-\frac{\lVert\underline{x}\rVert^2}{4kt}\right),\qquad t>0$$

The heat kernel is a Gaussian function of width proportional to $$\sqrt{kt}$$ that integrates to $$1$$ by the Gaussian integral. The solution of the initial value problem on $$\mathbb{R}^n$$ with bounded continuous initial condition $$u\left(\underline{x},0\right)=f\left(\underline{x}\right)$$ is the convolution of the heat kernel with $$f.$$

$$u\left(\underline{x},t\right)=\int_{\mathbb{R}^n}\Phi\left(\underline{x}-\underline{y},t\right)f\left(\underline{y}\right)d\underline{y}$$

The heat equation has the following properties:
- the solution is smooth for $$t>0$$ however rough $$f$$ is;
- the solution is positive everywhere for $$t>0$$ if $$f\geq 0$$ is not identically zero, so disturbances propagate with infinite speed;
- the equation cannot be solved backwards in time;
- with homogeneous Dirichlet or Neumann conditions on a bounded region the solution converges to a steady state as $$t\rightarrow\infty,$$ which is $$0$$ for Dirichlet and the average of $$f$$ for Neumann.

Let $$V$$ be a bounded region and $$T>0.$$ The **maximum principle** for the heat equation states that a solution on $$V\times\left[0,T\right]$$ attains its maximum and minimum either at $$t=0$$ or on $$\partial V.$$ The maximum principle gives uniqueness and continuous dependence for the initial-boundary value problem with Dirichlet conditions.

Let $$c>0.$$ The **wave equation** for a function $$u\left(\underline{x},t\right)$$ is the hyperbolic equation

$$u_{tt}=c^2\Delta u.$$

The number $$c$$ is the **wave speed**. The wave equation governs the small transverse displacement of a string or membrane and the propagation of sound and light.

Let $$u_{tt}=c^2u_{xx}$$ be the wave equation in one space variable. The change of variables $$\xi=x-ct,$$ $$\eta=x+ct$$ reduces it to $$u_{\xi\eta}=0,$$ so every $$C^2$$ solution is a sum of a wave travelling to the right and a wave travelling to the left, $$u=\phi\left(x-ct\right)+\psi\left(x+ct\right).$$ **D'Alembert's formula** states that the initial value problem on $$\mathbb{R}$$ with $$u(x,0)=f(x)$$ and $$u_t(x,0)=g(x)$$ has the unique solution

$$u(x,t)=\frac{1}{2}\left(f\left(x-ct\right)+f\left(x+ct\right)\right)+\frac{1}{2c}\int_{x-ct}^{x+ct}g(s)\,ds.$$

Let $$u_{tt}=c^2u_{xx}$$ be the wave equation in one space variable. The **characteristics** of the equation are the lines $$x\pm ct=\mathrm{const}.$$ The **domain of dependence** of the point $$(x,t)$$ is the interval $$\left[x-ct,x+ct\right],$$ on whose data alone the value $$u(x,t)$$ depends. The wave equation has the following properties:
- disturbances propagate with finite speed $$c;$$
- the solution is no smoother than its data.

Let $$V$$ be a bounded region and $$u$$ be a solution of the wave equation on $$V$$ with homogeneous Dirichlet or Neumann conditions. The **energy** of the solution is

$$E(t):=\frac{1}{2}\int_V\left(u_t^2+c^2\lVert\nabla u\rVert^2\right)d\underline{x}.$$

The energy is constant in time by Green's first identity, which gives uniqueness for the initial-boundary value problem.

Let $$L>0.$$ The **standing waves** or **normal modes** of the string on $$\left[0,L\right]$$ with $$u=0$$ at both ends are the solutions $$\sin\frac{n\pi x}{L}\cos\frac{n\pi ct}{L}$$ and $$\sin\frac{n\pi x}{L}\sin\frac{n\pi ct}{L}$$ for $$n\geq 1,$$ with frequencies $$\frac{nc}{2L}.$$ The **fundamental frequency** of the string is $$\frac{c}{2L},$$ of which every mode frequency is an integer multiple.

**Laplace's equation** for a function $$u\left(\underline{x}\right)$$ of position alone is the elliptic equation $$\Delta u=0.$$ Let $$f$$ be a function of position. **Poisson's equation** is the elliptic equation $$\Delta u=f.$$ The solutions of Laplace's and Poisson's equations are the steady states of the heat and wave equations. The solutions of Laplace's equation are the harmonic functions, which describe electrostatic and gravitational potentials in empty space and steady temperatures.

Let $$u$$ be a harmonic function on an open set $$U\subseteq\mathbb{R}^n$$ and $$B_\rho$$ be a ball centred at $$\underline{x}$$ and contained in $$U.$$ The **mean value property** states that $$u\left(\underline{x}\right)$$ equals the average of $$u$$ over the sphere $$\partial B_\rho$$ and over the ball $$B_\rho.$$

$$u\left(\underline{x}\right)=\frac{1}{A\left(\partial B_\rho\right)}\oint_{\partial B_\rho}u\,dS=\frac{1}{\lvert B_\rho\rvert}\int_{B_\rho}u\,d\underline{y}$$

Conversely, a continuous function with the mean value property is harmonic. Harmonic functions have the following properties:
- harmonic functions are smooth, indeed analytic;
- the **strong maximum principle**: a harmonic function on a connected open set that attains its maximum or minimum in the set is constant;
- on a bounded region the maximum and minimum of a harmonic function continuous up to the boundary are attained on $$\partial V;$$
- **Liouville's theorem**: a harmonic function on all of $$\mathbb{R}^n$$ that is bounded above or below is constant.

Let $$V$$ be a bounded region, $$f$$ be a function on $$V$$ and $$h$$ be a function on $$\partial V.$$ The **Dirichlet problem** is Poisson's equation $$\Delta u=f$$ in $$V$$ with the Dirichlet condition $$u=h$$ on $$\partial V.$$ The maximum principle gives uniqueness and continuous dependence for the Dirichlet problem.

Let $$V$$ be a bounded region, $$f$$ be a function on $$V$$ and $$h$$ be a function on $$\partial V.$$ The **Neumann problem** is Poisson's equation $$\Delta u=f$$ in $$V$$ with the Neumann condition $$\frac{\partial u}{\partial n}=h$$ on $$\partial V.$$ The Neumann problem is solvable only if $$\int_Vf\,d\underline{x}=\oint_{\partial V}h\,dS,$$ by the divergence theorem, and its solution is then unique up to an additive constant, by Green's first identity with $$f=g=u.$$

The **fundamental solution** of Laplace's equation is the radial function that is harmonic away from the origin and satisfies $$\Delta\Phi=\delta$$ in the sense of the divergence theorem.

$$\Phi\left(\underline{x}\right):=\begin{cases}\dfrac{1}{2\pi}\log_e\lVert\underline{x}\rVert & n=2 \\[1.2em] -\dfrac{1}{\left(n-2\right)A\left(\partial B_1\right)}\lVert\underline{x}\rVert^{2-n} & n\geq 3\end{cases}$$

When $$n=3,$$ $$\Phi\left(\underline{x}\right)=-\frac{1}{4\pi\lVert\underline{x}\rVert}.$$ The solution of Poisson's equation on $$\mathbb{R}^n$$ that decays at infinity is the convolution $$u=\Phi*f.$$

Let $$E$$ be a linear homogeneous partial differential equation. A **product solution** of $$E$$ is a solution that is a product of functions of one variable each. **Separation of variables** is the method that seeks product solutions of $$E$$ and builds the general solution from them by superposition.

Let $$u_t=k\,u_{xx}$$ be the heat equation on $$\left[0,L\right]$$ with $$u(0,t)=u(L,t)=0$$ and $$u(x,0)=f(x).$$ Substituting $$u=X(x)\,T(t)$$ and dividing by $$k\,X\,T$$ gives

$$\frac{T'(t)}{k\,T(t)}=\frac{X''(x)}{X(x)}=-\lambda.$$

The **separation constant** is the common value $$-\lambda$$ of the two sides, which must be constant because one side depends on $$t$$ alone and the other on $$x$$ alone. The boundary conditions give the boundary value problem $$X''+\lambda X=0,$$ $$X(0)=X(L)=0,$$ which has non-zero solutions only for $$\lambda_n=\left(\frac{n\pi}{L}\right)^2$$ with $$X_n=\sin\frac{n\pi x}{L},$$ and then $$T_n=e^{-k\lambda_nt}.$$ Superposing the product solutions and matching the initial condition with the sine series of $$f$$ on $$\left[0,L\right]$$ gives the solution

$$u(x,t)=\sum_{n=1}^{\infty}b_ne^{-k\left(\frac{n\pi}{L}\right)^2t}\sin\frac{n\pi x}{L},\qquad b_n=\frac{2}{L}\int_0^Lf(x)\sin\frac{n\pi x}{L}\,dx,$$

in which higher modes decay faster, so the solution is dominated by its first mode for large $$t.$$

Separation of variables has the following properties:
- the same steps solve the wave equation on $$\left[0,L\right],$$ where $$T_n$$ is a combination of $$\cos\frac{n\pi ct}{L}$$ and $$\sin\frac{n\pi ct}{L}$$ and the initial displacement and velocity give the coefficients;
- the same steps solve Laplace's equation on a rectangle, where the separated equation in the variable with homogeneous conditions is the eigenvalue problem and the other factor is a combination of exponentials;
- on a disc, Laplace's equation in polar coordinates $$u_{rr}+\frac{1}{r}u_r+\frac{1}{r^2}u_{\theta\theta}=0$$ separates into $$\Theta''+\lambda\Theta=0$$ with periodic conditions, giving $$\lambda_n=n^2,$$ and an Euler–Cauchy equation in $$r$$ whose bounded solutions are $$r^n,$$ so a harmonic function on the unit disc is $$u(r,\theta)=\frac{a_0}{2}+\sum_{n=1}^{\infty}r^n\left(a_n\cos n\theta+b_n\sin n\theta\right)$$ with the Fourier coefficients of its boundary values;
- the method requires the boundary conditions to be homogeneous on the separated coordinate and the region to be a product of intervals in some coordinate system;
- the boundary value problem it produces for each factor is a Sturm–Liouville problem, whose eigenfunctions always allow the data to be expanded.
