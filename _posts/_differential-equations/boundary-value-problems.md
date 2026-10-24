---
layout: post
category: "differential-equations"
title:  "Boundary Value Problems"
tags: ["differential equations", "boundary value problem"]
description: "Equations with conditions at both ends"
---

Let $$p\in C^1\left[a,b\right]$$ and $$q,w\in C\left[a,b\right]$$ with $$p>0$$ and $$w>0$$ on $$\left[a,b\right].$$ A **Sturm–Liouville equation** is a second-order linear equation of the form

$$-\left(p(x)\,y'\right)'+q(x)\,y=\lambda\,w(x)\,y,$$

where $$\lambda$$ is a parameter and $$w$$ is the **weight function**. Every second-order linear equation $$a_2y''+a_1y'+a_0y=\lambda\,y$$ with $$a_2\neq 0$$ can be put in this form by multiplying it by $$-\frac{1}{a_2}\exp\int\frac{a_1}{a_2}\,dx.$$ A **regular Sturm–Liouville problem** is the equation together with **separated boundary conditions**, one at each endpoint,

$$\alpha_1y(a)+\alpha_2y'(a)=0,\qquad\beta_1y(b)+\beta_2y'(b)=0,$$

with $$\left(\alpha_1,\alpha_2\right)\neq\left(0,0\right)$$ and $$\left(\beta_1,\beta_2\right)\neq\left(0,0\right).$$ Dirichlet conditions are $$y(a)=y(b)=0$$ and Neumann conditions are $$y'(a)=y'(b)=0.$$ A **singular Sturm–Liouville problem** has an unbounded interval or a $$p$$ or $$w$$ that vanishes at an endpoint, in which case the condition there is replaced by boundedness of $$y,$$ and a problem has **periodic boundary conditions** if they are $$y(a)=y(b)$$ and $$y'(a)=y'(b)$$ with $$p(a)=p(b).$$ A value of $$\lambda$$ for which the problem has a non-zero solution is an eigenvalue of the problem and the solution is an **eigenfunction** for $$\lambda.$$ The boundary conditions make the solution set of the equation a subspace, so the eigenfunctions for $$\lambda$$ together with $$0$$ form the eigen-space of $$\lambda.$$

The **Sturm–Liouville operator** $$L[y]:=\frac{1}{w}\left(-\left(p\,y'\right)'+q\,y\right)$$ is a linear transformation on the $$C^2$$ functions satisfying the boundary conditions, and the equation is $$L[y]=\lambda y.$$ Let $$\langle f,g\rangle_w:=\int_a^bf(x)\,g(x)\,w(x)\,dx$$ be the **weighted inner product** on $$C\left[a,b\right].$$ Integration by parts twice gives **Lagrange's identity**,

$$\langle L[f],g\rangle_w-\langle f,L[g]\rangle_w=\Big[p\left(f\,g'-f'\,g\right)\Big]_a^b,$$

and the boundary terms vanish for functions satisfying separated or periodic conditions, so $$L$$ is **self-adjoint**: $$\langle L[f],g\rangle_w=\langle f,L[g]\rangle_w.$$ A regular Sturm–Liouville problem has the following properties:
- the eigenvalues are real, countably infinite and simple, each with a one-dimensional eigen-space, and can be ordered as $$\lambda_1<\lambda_2<\cdots$$ with $$\lambda_n\rightarrow\infty;$$
- eigenfunctions for distinct eigenvalues are orthogonal with respect to the weighted inner product, $$\langle\phi_m,\phi_n\rangle_w=0$$ for $$m\neq n;$$
- the eigenfunction $$\phi_n$$ has exactly $$n-1$$ zeros in $$\left(a,b\right);$$
- if $$q\geq 0$$ and the boundary conditions are Dirichlet, Neumann or a Robin condition with $$\frac{\alpha_1}{\alpha_2}\leq 0\leq\frac{\beta_1}{\beta_2},$$ then every eigenvalue is non-negative.

Reality and orthogonality follow from self-adjointness as for symmetric matrices. The **Rayleigh quotient** of a non-zero function $$y$$ satisfying the boundary conditions is

$$R[y]:=\frac{\langle L[y],y\rangle_w}{\langle y,y\rangle_w}=\frac{\Big[-p\,y\,y'\Big]_a^b+\int_a^b\left(p\,y'^2+q\,y^2\right)dx}{\int_a^by^2w\,dx},$$

and the smallest eigenvalue is its minimum, $$\lambda_1=\min R[y],$$ attained at $$\phi_1;$$ more generally $$\lambda_n$$ is the minimum of $$R$$ over functions orthogonal to $$\phi_1,\ldots,\phi_{n-1}.$$ For example, $$-y''=\lambda y$$ on $$\left[0,L\right]$$ with Dirichlet conditions has $$\lambda_n=\left(\frac{n\pi}{L}\right)^2$$ and $$\phi_n=\sin\frac{n\pi x}{L};$$ with Neumann conditions it has $$\lambda_n=\left(\frac{n\pi}{L}\right)^2$$ for $$n\in\mathbb{N}$$ including $$\lambda_0=0$$ and $$\phi_n=\cos\frac{n\pi x}{L};$$ and on $$\left[-\pi,\pi\right]$$ with periodic conditions it has $$\lambda_n=n^2$$ with the two-dimensional eigen-spaces spanned by $$\cos nx$$ and $$\sin nx,$$ so the periodic case is where simplicity of the eigenvalues can fail. Legendre's equation on $$\left[-1,1\right]$$ with $$p=1-x^2,$$ $$q=0,$$ $$w=1$$ and Bessel's equation on $$\left[0,R\right]$$ with $$p=x,$$ $$q=\frac{\nu^2}{x},$$ $$w=x$$ are singular problems whose eigenfunctions are the Legendre polynomials and the **Bessel functions** respectively.

Let $$\phi_1,\phi_2,\ldots$$ be the eigenfunctions of a regular Sturm–Liouville problem and $$f\in C\left[a,b\right].$$ The **generalised Fourier coefficients** of $$f$$ are its weighted inner products with the normalised eigenfunctions and its **eigenfunction expansion** is the corresponding series.

$$f(x)\sim\sum_{n=1}^{\infty}c_n\phi_n(x),\qquad c_n:=\frac{\langle f,\phi_n\rangle_w}{\langle\phi_n,\phi_n\rangle_w}$$

The eigenfunctions form a **complete orthogonal system**: the expansion converges in the weighted mean square, $$\int_a^b\left(f-\sum_{n=1}^{N}c_n\phi_n\right)^2w\,dx\rightarrow 0,$$ for every $$f$$ that is Riemann integrable on $$\left[a,b\right],$$ and Parseval's identity $$\langle f,f\rangle_w=\sum_{n=1}^{\infty}c_n^2\langle\phi_n,\phi_n\rangle_w$$ holds. If $$f$$ is piecewise $$C^1$$ the expansion converges pointwise to the average of the one-sided limits of $$f,$$ and if $$f\in C^2\left[a,b\right]$$ satisfies the boundary conditions it converges uniformly and absolutely. Fourier, sine and cosine series are the expansions for the periodic, Dirichlet and Neumann problems with $$-y''=\lambda y.$$

Eigenfunction expansions solve inhomogeneous problems by linear algebra. Let $$g\in C\left[a,b\right]$$ have coefficients $$g_n$$ and suppose that $$\mu$$ is not an eigenvalue. Expanding the unknown as $$y=\sum_{n=1}^{\infty}y_n\phi_n$$ in the problem $$L[y]-\mu y=g$$ with the given boundary conditions and comparing coefficients gives

$$y_n=\frac{g_n}{\lambda_n-\mu},$$

and the same step justifies separation of variables for a partial differential equation: expanding the solution in the eigenfunctions of the separated boundary value problem reduces the equation to an uncoupled sequence of ordinary differential equations for the coefficients. If $$\mu=\lambda_m$$ is an eigenvalue then the **Fredholm alternative** holds: the problem has a solution if and only if $$g$$ is orthogonal to $$\phi_m,$$ and the solution is then unique up to multiples of $$\phi_m.$$

Let $$L[y]=\frac{1}{w}\left(-\left(p\,y'\right)'+q\,y\right)$$ with separated boundary conditions for which $$0$$ is not an eigenvalue, and consider the inhomogeneous problem

$$-\left(p(x)\,y'\right)'+q(x)\,y=g(x),\qquad\alpha_1y(a)+\alpha_2y'(a)=0,\qquad\beta_1y(b)+\beta_2y'(b)=0.$$

Let $$y_1$$ be a non-zero solution of the homogeneous equation satisfying the condition at $$a$$ and $$y_2$$ one satisfying the condition at $$b.$$ Since $$0$$ is not an eigenvalue they are linearly independent, and Abel's identity for this equation gives that $$p\,W\left(y_1,y_2\right)$$ is a non-zero constant $$C.$$ The **Green's function** of the problem is

$$G\left(x,\xi\right):=-\frac{1}{C}\begin{cases}y_1(x)\,y_2(\xi) & a\leq x\leq\xi \\ y_1(\xi)\,y_2(x) & \xi\leq x\leq b,\end{cases}$$

and the unique solution of the inhomogeneous problem is the integral of $$g$$ against it, which is the inverse of the differential operator.

$$y(x)=\int_a^bG\left(x,\xi\right)g(\xi)\,d\xi$$

The Green's function is continuous and symmetric, $$G\left(x,\xi\right)=G\left(\xi,x\right),$$ as a function of $$x$$ it satisfies the homogeneous equation for $$x\neq\xi$$ and both boundary conditions, and its derivative jumps by $$-\frac{1}{p(\xi)}$$ at $$x=\xi,$$ which is the statement that $$G\left(\cdot,\xi\right)$$ solves the equation with the Dirac delta $$\delta\left(x-\xi\right)$$ as forcing: it is the response at $$x$$ to a unit impulse at $$\xi.$$ For example, $$-y''=g$$ on $$\left[0,1\right]$$ with $$y(0)=y(1)=0$$ has $$y_1=x,$$ $$y_2=1-x,$$ $$C=-1$$ and

$$G\left(x,\xi\right)=\begin{cases}x\left(1-\xi\right) & x\leq\xi \\ \xi\left(1-x\right) & \xi\leq x,\end{cases}$$

the displacement at $$x$$ of a string fixed at both ends under a unit point load at $$\xi.$$ The Green's function has the eigenfunction expansion

$$G\left(x,\xi\right)=\sum_{n=1}^{\infty}\frac{\phi_n(x)\,\phi_n(\xi)}{\lambda_n\langle\phi_n,\phi_n\rangle_w},$$

which is the series solution $$y_n=\frac{g_n}{\lambda_n}$$ written as an integral, and for the problem $$L[y]-\mu y=\frac{g}{w}$$ the same formula holds with $$\lambda_n-\mu$$ in place of $$\lambda_n.$$ If $$0$$ is an eigenvalue the Green's function does not exist and the Fredholm alternative applies instead. The fundamental solution of Laplace's equation and the heat kernel are the Green's functions of Poisson's equation and the heat equation on $$\mathbb{R}^n,$$ and on a bounded region the Green's function of the Dirichlet problem is the fundamental solution corrected by a harmonic function so that it vanishes on the boundary.
