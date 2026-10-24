---
layout: post
category: "differential-equations"
title:  "Systems of Equations"
tags: ["differential equations", "system of equations"]
description: "Several unknowns that evolve together"
---

Let $$I$$ be an interval, $$A:I\rightarrow\mathbb{R}^{\,n\times n}$$ be a matrix-valued function with continuous entries and $$\underline{g}:I\rightarrow\mathbb{R}^n$$ be continuous. A **linear system** of first-order equations and its associated homogeneous system are

$$\underline{y}'=A(t)\,\underline{y}+\underline{g}(t),\qquad\underline{y}'=A(t)\,\underline{y},$$

where the independent variable is written $$t$$ and derivatives of vector- and matrix-valued functions are taken entrywise. Every initial value problem $$\underline{y}\left(t_0\right)=\underline{y}_0$$ has exactly one solution on all of $$I.$$ The superposition principle holds: the solutions of the homogeneous system form a vector space, which has dimension $$n$$ since $$\underline{y}\mapsto\underline{y}\left(t_0\right)$$ is an isomorphism onto $$\mathbb{R}^n,$$ and the general solution of the inhomogeneous system is the sum of a particular solution and the general solution of the homogeneous system. A linear equation of order $$n$$ is the special case in which $$A$$ is the **companion matrix** with ones on its superdiagonal, $$-a_0,\ldots,-a_{n-1}$$ in its last row and zeros elsewhere.

A **fundamental matrix** of the homogeneous system is a matrix-valued function $$\Phi:I\rightarrow\mathbb{R}^{\,n\times n}$$ whose columns are a basis of the solution space, so that $$\Phi'=A\,\Phi$$ and $$\Phi(t)$$ is invertible for every $$t.$$ The Wronskian $$W=\det\Phi$$ satisfies **Liouville's formula**,

$$W(t)=W\left(t_0\right)\exp\left(\int_{t_0}^{t}\mathrm{tr}\,A(s)\,ds\right),$$

so $$n$$ solutions form a basis if and only if their Wronskian is non-zero at one, and hence every, point. The general solution of the homogeneous system is $$\Phi(t)\,\underline{c}$$ for $$\underline{c}\in\mathbb{R}^n,$$ the solution of the initial value problem is $$\Phi(t)\,\Phi\left(t_0\right)^{-1}\underline{y}_0$$ and variation of parameters gives the solution of the inhomogeneous initial value problem.

$$\underline{y}(t)=\Phi(t)\,\Phi\left(t_0\right)^{-1}\underline{y}_0+\Phi(t)\int_{t_0}^{t}\Phi(s)^{-1}\underline{g}(s)\,ds$$

Let $$A\in\mathbb{R}^{\,n\times n}$$ be a constant matrix. The **matrix exponential** of $$A$$ is the sum of the exponential series with $$A$$ in place of the scalar.

$$e^{A}:=\sum_{k=0}^{\infty}\frac{A^k}{k!}$$

The series converges absolutely in the Frobenius norm, since $$\lVert A^k\rVert_F\leq\lVert A\rVert_F^k$$ and $$\sum_{k=0}^{\infty}\frac{\lVert A\rVert_F^k}{k!}=e^{\lVert A\rVert_F},$$ and $$\mathbb{R}^{\,n\times n}$$ with this norm is complete. For $$A,B\in\mathbb{R}^{\,n\times n},$$ invertible $$P$$ and $$s,t\in\mathbb{R}$$ the matrix exponential has the following properties:

$$e^{0}=I_n,\qquad e^{\left(s+t\right)A}=e^{sA}e^{tA},\qquad\left(e^{tA}\right)^{-1}=e^{-tA},\qquad\frac{d}{dt}e^{tA}=A\,e^{tA}=e^{tA}A$$

$$e^{A+B}=e^{A}e^{B}\,\,\mathrm{if}\,\,AB=BA,\qquad e^{PAP^{-1}}=P\,e^{A}P^{-1},\qquad\det e^{A}=e^{\mathrm{tr}\,A}.$$

The exponential law can fail for non-commuting matrices. Since $$\frac{d}{dt}e^{tA}=A\,e^{tA},$$ the matrix $$e^{tA}$$ is a fundamental matrix of the system with constant coefficients and the solution of its initial value problem is

$$\underline{y}'=A\,\underline{y},\qquad\underline{y}(t)=e^{\left(t-t_0\right)A}\,\underline{y}_0.$$

If $$A$$ is diagonalisable as $$A=P\Lambda P^{-1}$$ then $$e^{tA}=P\,e^{t\Lambda}P^{-1}$$ where $$e^{t\Lambda}$$ is diagonal with entries $$e^{\lambda_it}.$$ Equivalently, if $$\underline{v}$$ is an eigenvector of $$A$$ with eigenvalue $$\lambda$$ then $$\underline{y}=e^{\lambda t}\underline{v}$$ is a solution, and an eigen-basis gives a fundamental set of solutions. A pair of complex conjugate eigenvalues $$\alpha\pm i\beta$$ with eigenvectors $$\underline{u}\pm i\underline{w}$$ gives, by Euler's formula, the real solutions

$$e^{\alpha t}\left(\underline{u}\cos\beta t-\underline{w}\sin\beta t\right),\qquad e^{\alpha t}\left(\underline{u}\sin\beta t+\underline{w}\cos\beta t\right).$$

If $$A$$ is defective then the eigenvectors do not span $$\mathbb{R}^n.$$ A **generalised eigenvector** of rank $$k$$ for the eigenvalue $$\lambda$$ is a vector $$\underline{w}$$ with $$\left(A-\lambda I_n\right)^k\underline{w}=\underline{0}$$ and $$\left(A-\lambda I_n\right)^{k-1}\underline{w}\neq\underline{0}.$$ Since $$\lambda I_n$$ and $$A-\lambda I_n$$ commute, $$e^{tA}\underline{w}=e^{\lambda t}e^{t\left(A-\lambda I_n\right)}\underline{w}$$ and the second series terminates, which gives the solution

$$\underline{y}(t)=e^{\lambda t}\sum_{j=0}^{k-1}\frac{t^j}{j!}\left(A-\lambda I_n\right)^j\underline{w}.$$

Every matrix has a basis of generalised eigenvectors, so these solutions, with polynomial factors of degree less than the algebraic multiplicity, always give a fundamental set. The companion matrix of $$y''-2y'+y=0$$ has the repeated eigenvalue $$1$$ with a single eigenvector, and the generalised eigenvector recovers the solution $$t\,e^t.$$

Let $$U\subseteq\mathbb{R}^n$$ be open and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be $$C^1.$$ An **autonomous system** is $$\underline{y}'=\underline{F}\left(\underline{y}\right),$$ whose right-hand side is a vector field on the **phase space** $$U.$$ The image of a solution in $$U$$ is a **trajectory** or **orbit**, which is tangent to the vector field at every point, and the **phase portrait** of the system is the collection of its trajectories. By uniqueness, distinct trajectories do not intersect and a trajectory that returns to a point is a closed curve corresponding to a periodic solution. A zero $$\underline{y}^*$$ of $$\underline{F}$$ is an equilibrium point, whose trajectory is the single point.

Let $$A\in\mathbb{R}^{\,2\times 2}$$ be invertible with eigenvalues $$\lambda_1,\lambda_2,$$ so that $$\underline{0}$$ is the only equilibrium point of $$\underline{y}'=A\,\underline{y}.$$ Its phase portrait is classified by the eigenvalues, which are determined by the trace $$\tau=\lambda_1+\lambda_2$$ and determinant $$\Delta=\lambda_1\lambda_2$$ through $$\lambda^2-\tau\lambda+\Delta=0:$$
- if $$\Delta<0$$ the eigenvalues are real with opposite signs and the equilibrium point is a **saddle**: trajectories approach along the eigenvector of the negative eigenvalue and leave along the eigenvector of the positive one;
- if $$\Delta>0$$ and $$\tau^2\geq 4\Delta$$ the eigenvalues are real with the same sign and the equilibrium point is a **node**, towards which every trajectory moves if $$\tau<0$$ and away from which every trajectory moves if $$\tau>0;$$
- if $$\Delta>0$$ and $$\tau^2<4\Delta$$ the eigenvalues are complex with real part $$\frac{\tau}{2}$$ and the equilibrium point is a **spiral**, inwards if $$\tau<0$$ and outwards if $$\tau>0,$$ or a **centre** surrounded by closed trajectories if $$\tau=0.$$

Stability of an equilibrium point $$\underline{y}^*$$ of an autonomous system is defined as for a single equation with the norm in place of the absolute value: $$\underline{y}^*$$ is stable if for every $$\varepsilon>0$$ there exists $$\delta>0$$ such that every solution with $$\left\lVert\underline{y}\left(t_0\right)-\underline{y}^*\right\rVert<\delta$$ exists for all $$t\geq t_0$$ and satisfies $$\left\lVert\underline{y}(t)-\underline{y}^*\right\rVert<\varepsilon,$$ asymptotically stable if it is stable and every solution that starts sufficiently close to it converges to it as $$t\rightarrow\infty,$$ and unstable if it is not stable. For the linear system $$\underline{y}'=A\,\underline{y}$$ the origin is asymptotically stable if and only if every eigenvalue of $$A$$ has negative real part, in which case $$\left\lVert e^{tA}\right\rVert_F\rightarrow 0$$ exponentially, and unstable if some eigenvalue has positive real part; a centre is stable but not asymptotically stable.

The linearisation of the autonomous system at an equilibrium point $$\underline{y}^*$$ is the linear system $$\underline{u}'=J_{\underline{F}}\left(\underline{y}^*\right)\underline{u}$$ for the deviation $$\underline{u}=\underline{y}-\underline{y}^*,$$ obtained by discarding the remainder of the first-order Taylor expansion of $$\underline{F}.$$ The equilibrium point is a **hyperbolic equilibrium point** if no eigenvalue of $$J_{\underline{F}}\left(\underline{y}^*\right)$$ has zero real part. The **linearisation theorem** states that a hyperbolic equilibrium point is asymptotically stable if every eigenvalue of the Jacobian matrix has negative real part and unstable if some eigenvalue has positive real part, and the **Hartman–Grobman theorem** states that near a hyperbolic equilibrium point the phase portrait is the image of the phase portrait of the linearisation under a homeomorphism. Linearisation is inconclusive at non-hyperbolic equilibrium points: the pendulum equation $$\theta''+\sin\theta=0,$$ written as the system $$\theta'=v,$$ $$v'=-\sin\theta,$$ has a centre of the linearisation at $$\left(0,0\right),$$ which is stable since the energy $$\frac{1}{2}v^2-\cos\theta$$ is constant along trajectories, and a saddle at $$\left(\pi,0\right).$$

Let $$V:U\rightarrow\mathbb{R}$$ be $$C^1$$ with $$V\left(\underline{y}^*\right)=0$$ and $$V>0$$ elsewhere near $$\underline{y}^*.$$ Along a solution the chain rule gives $$\frac{d}{dt}V\left(\underline{y}(t)\right)=\nabla V\left(\underline{y}\right)\cdot\underline{F}\left(\underline{y}\right).$$ $$V$$ is a **Lyapunov function** for $$\underline{y}^*$$ if $$\nabla V\cdot\underline{F}\leq 0$$ near $$\underline{y}^*,$$ and **Lyapunov's stability theorem** states that an equilibrium point with a Lyapunov function is stable, and asymptotically stable if $$\nabla V\cdot\underline{F}<0$$ away from $$\underline{y}^*.$$ The energy of the pendulum, shifted by its minimum, is a Lyapunov function at $$\left(0,0\right).$$
