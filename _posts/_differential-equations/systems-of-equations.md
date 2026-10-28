---
title:  "Systems of Equations"
description: "Several unknowns that evolve together"
---

Let $$I$$ be an interval, $$A:I\rightarrow\mathbb{R}^{\,n\times n}$$ be a matrix-valued function with continuous entries and $$\underline{g}:I\rightarrow\mathbb{R}^n$$ be continuous. A **linear system** of first-order equations is a system of the form

$$\underline{y}'=A(t)\,\underline{y}+\underline{g}(t),$$

where the independent variable is written $$t$$ and derivatives of vector- and matrix-valued functions are taken entrywise. The **associated homogeneous system** is the system with $$\underline{g}=\underline{0}.$$

$$\underline{y}'=A(t)\,\underline{y}$$

Linear systems have the following properties:
- every initial value problem $$\underline{y}\left(t_0\right)=\underline{y}_0$$ has exactly one solution on all of $$I;$$
- the superposition principle holds: the solutions of the homogeneous system form a vector space, and the general solution of the inhomogeneous system is the sum of a particular solution and the general solution of the homogeneous system;
- the solution space of the homogeneous system has dimension $$n,$$ since $$\underline{y}\mapsto\underline{y}\left(t_0\right)$$ is an isomorphism onto $$\mathbb{R}^n.$$

Let $$y^{(n)}+a_{n-1}y^{(n-1)}+\cdots+a_0y=g$$ be a linear equation of order $$n.$$ The **companion matrix** of the equation is the matrix with ones on its superdiagonal, $$-a_0,\ldots,-a_{n-1}$$ in its last row and zeros elsewhere. A linear equation of order $$n$$ is the linear system whose matrix is its companion matrix.

Let $$\underline{y}'=A(t)\,\underline{y}$$ be a homogeneous linear system on $$I.$$ A **fundamental matrix** of the system is a matrix-valued function $$\Phi:I\rightarrow\mathbb{R}^{\,n\times n}$$ whose columns are a basis of the solution space. A fundamental matrix satisfies $$\Phi'=A\,\Phi$$ and $$\Phi(t)$$ is invertible for every $$t.$$

Let $$\underline{y}'=A(t)\,\underline{y}$$ be a homogeneous linear system with fundamental matrix $$\Phi.$$ The **Wronskian** of the system is the determinant $$W=\det\Phi.$$ **Liouville's formula** states that the Wronskian satisfies

$$W(t)=W\left(t_0\right)\exp\left(\int_{t_0}^{t}\mathrm{tr}\,A(s)\,ds\right),$$

so $$n$$ solutions form a basis if and only if their Wronskian is non-zero at one, and hence every, point.

Let $$\underline{y}'=A(t)\,\underline{y}+\underline{g}(t)$$ be a linear system with fundamental matrix $$\Phi$$ of the homogeneous system. Solutions of linear systems have the following properties:
- the general solution of the homogeneous system is $$\Phi(t)\,\underline{c}$$ for $$\underline{c}\in\mathbb{R}^n;$$
- the solution of the homogeneous initial value problem is $$\Phi(t)\,\Phi\left(t_0\right)^{-1}\underline{y}_0;$$
- variation of parameters gives the solution of the inhomogeneous initial value problem.

$$\underline{y}(t)=\Phi(t)\,\Phi\left(t_0\right)^{-1}\underline{y}_0+\Phi(t)\int_{t_0}^{t}\Phi(s)^{-1}\underline{g}(s)\,ds$$

Let $$A\in\mathbb{R}^{\,n\times n}$$ be a constant matrix. The **matrix exponential** of $$A$$ is the sum of the exponential series with $$A$$ in place of the scalar.

$$e^{A}:=\sum_{k=0}^{\infty}\frac{A^k}{k!}$$

The series converges absolutely in the Frobenius norm, since $$\lVert A^k\rVert_F\leq\lVert A\rVert_F^k$$ and $$\sum_{k=0}^{\infty}\frac{\lVert A\rVert_F^k}{k!}=e^{\lVert A\rVert_F},$$ and $$\mathbb{R}^{\,n\times n}$$ with this norm is complete. The matrix exponential has the following properties for $$A,B\in\mathbb{R}^{\,n\times n},$$ invertible $$P$$ and $$s,t\in\mathbb{R}:$$

$$e^{0}=I_n,\qquad e^{\left(s+t\right)A}=e^{sA}e^{tA},\qquad\left(e^{tA}\right)^{-1}=e^{-tA},\qquad\frac{d}{dt}e^{tA}=A\,e^{tA}=e^{tA}A$$

$$e^{A+B}=e^{A}e^{B}\,\,\mathrm{if}\,\,AB=BA,\qquad e^{PAP^{-1}}=P\,e^{A}P^{-1},\qquad\det e^{A}=e^{\mathrm{tr}\,A}$$

The exponential law can fail for non-commuting matrices.

Let $$A\in\mathbb{R}^{\,n\times n}$$ be a constant matrix. A **linear system with constant coefficients** is the system $$\underline{y}'=A\,\underline{y}.$$ Since $$\frac{d}{dt}e^{tA}=A\,e^{tA},$$ the matrix $$e^{tA}$$ is a fundamental matrix of the system and the solution of its initial value problem is

$$\underline{y}(t)=e^{\left(t-t_0\right)A}\,\underline{y}_0.$$

Linear systems with constant coefficients have the following properties:
- if $$A$$ is diagonalisable as $$A=P\Lambda P^{-1}$$ then $$e^{tA}=P\,e^{t\Lambda}P^{-1}$$ where $$e^{t\Lambda}$$ is diagonal with entries $$e^{\lambda_it};$$
- if $$\underline{v}$$ is an eigenvector of $$A$$ with eigenvalue $$\lambda$$ then $$\underline{y}=e^{\lambda t}\underline{v}$$ is a solution, and an eigen-basis gives a fundamental set of solutions;
- a pair of complex conjugate eigenvalues $$\alpha\pm i\beta$$ with eigenvectors $$\underline{u}\pm i\underline{w}$$ gives, by Euler's formula, the real solutions $$e^{\alpha t}\left(\underline{u}\cos\beta t-\underline{w}\sin\beta t\right)$$ and $$e^{\alpha t}\left(\underline{u}\sin\beta t+\underline{w}\cos\beta t\right).$$

Let $$A\in\mathbb{R}^{\,n\times n}$$ be a square matrix, $$\lambda$$ be an eigenvalue of $$A$$ and $$k\geq 1.$$ A **generalised eigenvector** of rank $$k$$ for $$\lambda$$ is a vector $$\underline{w}$$ with $$\left(A-\lambda I_n\right)^k\underline{w}=\underline{0}$$ and $$\left(A-\lambda I_n\right)^{k-1}\underline{w}\neq\underline{0}.$$ Generalised eigenvectors have the following properties:
- every matrix has a basis of generalised eigenvectors;
- since $$\lambda I_n$$ and $$A-\lambda I_n$$ commute, $$e^{tA}\underline{w}=e^{\lambda t}e^{t\left(A-\lambda I_n\right)}\underline{w}$$ and the second series terminates, which gives the solution

$$\underline{y}(t)=e^{\lambda t}\sum_{j=0}^{k-1}\frac{t^j}{j!}\left(A-\lambda I_n\right)^j\underline{w};$$

- these solutions, with polynomial factors of degree less than the algebraic multiplicity, always give a fundamental set, including when $$A$$ is defective.

For example, the companion matrix of $$y''-2y'+y=0$$ has the repeated eigenvalue $$1$$ with a single eigenvector, and the generalised eigenvector recovers the solution $$t\,e^t.$$

Let $$U\subseteq\mathbb{R}^n$$ be open and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be $$C^1.$$ An **autonomous system** is a system of the form $$\underline{y}'=\underline{F}\left(\underline{y}\right),$$ whose right-hand side is a vector field on $$U.$$ The set $$U$$ is the **phase space** of the system.

Let $$\underline{y}'=\underline{F}\left(\underline{y}\right)$$ be an autonomous system on $$U.$$ A **trajectory** or **orbit** of the system is the image in $$U$$ of a solution. The **phase portrait** of the system is the collection of its trajectories. An **equilibrium point** of the system is a zero $$\underline{y}^*$$ of $$\underline{F},$$ whose trajectory is the single point. Trajectories have the following properties:
- a trajectory is tangent to the vector field at every point;
- by uniqueness, distinct trajectories do not intersect;
- a trajectory that returns to a point is a closed curve corresponding to a periodic solution.

Let $$A\in\mathbb{R}^{\,2\times 2}$$ be invertible with eigenvalues $$\lambda_1,\lambda_2,$$ so that $$\underline{0}$$ is the only equilibrium point of $$\underline{y}'=A\,\underline{y}.$$ The eigenvalues are determined by the trace $$\tau=\lambda_1+\lambda_2$$ and the determinant $$\Delta=\lambda_1\lambda_2$$ through $$\lambda^2-\tau\lambda+\Delta=0,$$ and the phase portrait is classified as follows:
- if $$\Delta<0$$ the eigenvalues are real with opposite signs and the equilibrium point is a **saddle**: trajectories approach along the eigenvector of the negative eigenvalue and leave along the eigenvector of the positive one;
- if $$\Delta>0$$ and $$\tau^2\geq 4\Delta$$ the eigenvalues are real with the same sign and the equilibrium point is a **node**, towards which every trajectory moves if $$\tau<0$$ and away from which every trajectory moves if $$\tau>0;$$
- if $$\Delta>0$$ and $$\tau^2<4\Delta$$ the eigenvalues are complex with real part $$\frac{\tau}{2}$$ and the equilibrium point is a **spiral**, inwards if $$\tau<0$$ and outwards if $$\tau>0,$$ or a **centre** surrounded by closed trajectories if $$\tau=0.$$

Let $$\underline{y}'=\underline{F}\left(\underline{y}\right)$$ be an autonomous system and $$\underline{y}^*$$ be an equilibrium point. The equilibrium point $$\underline{y}^*$$ is **stable** if and only if for every $$\varepsilon>0$$ there exists $$\delta>0$$ such that every solution with $$\left\lVert\underline{y}\left(t_0\right)-\underline{y}^*\right\rVert<\delta$$ exists for all $$t\geq t_0$$ and satisfies $$\left\lVert\underline{y}(t)-\underline{y}^*\right\rVert<\varepsilon.$$ The equilibrium point $$\underline{y}^*$$ is **asymptotically stable** if and only if it is stable and every solution that starts sufficiently close to it converges to it as $$t\rightarrow\infty.$$ The equilibrium point $$\underline{y}^*$$ is **unstable** if and only if it is not stable.

Let $$\underline{y}'=A\,\underline{y}$$ be a linear system with constant coefficients. Stability of the origin has the following properties:
- the origin is asymptotically stable if and only if every eigenvalue of $$A$$ has negative real part, in which case $$\left\lVert e^{tA}\right\rVert_F\rightarrow 0$$ exponentially;
- the origin is unstable if some eigenvalue of $$A$$ has positive real part;
- a centre is stable but not asymptotically stable.

Let $$\underline{y}'=\underline{F}\left(\underline{y}\right)$$ be an autonomous system and $$\underline{y}^*$$ be an equilibrium point. The **linearisation** of the system at $$\underline{y}^*$$ is the linear system $$\underline{u}'=J_{\underline{F}}\left(\underline{y}^*\right)\underline{u}$$ for the deviation $$\underline{u}=\underline{y}-\underline{y}^*,$$ obtained by discarding the remainder of the first-order Taylor expansion of $$\underline{F}.$$

Let $$\underline{y}'=\underline{F}\left(\underline{y}\right)$$ be an autonomous system and $$\underline{y}^*$$ be an equilibrium point. The equilibrium point $$\underline{y}^*$$ is a **hyperbolic equilibrium point** if and only if no eigenvalue of $$J_{\underline{F}}\left(\underline{y}^*\right)$$ has zero real part.

Let $$\underline{y}'=\underline{F}\left(\underline{y}\right)$$ be an autonomous system and $$\underline{y}^*$$ be a hyperbolic equilibrium point. The **linearisation theorem** states that $$\underline{y}^*$$ is asymptotically stable if every eigenvalue of $$J_{\underline{F}}\left(\underline{y}^*\right)$$ has negative real part and unstable if some eigenvalue has positive real part. The **Hartman–Grobman theorem** states that near $$\underline{y}^*$$ the phase portrait of the system is the image of the phase portrait of the linearisation under a homeomorphism.

Linearisation is inconclusive at non-hyperbolic equilibrium points. The pendulum equation $$\theta''+\sin\theta=0,$$ written as the system $$\theta'=v,$$ $$v'=-\sin\theta,$$ has a centre of the linearisation at $$\left(0,0\right),$$ which is stable since the energy $$\frac{1}{2}v^2-\cos\theta$$ is constant along trajectories, and a saddle at $$\left(\pi,0\right).$$

Let $$\underline{y}'=\underline{F}\left(\underline{y}\right)$$ be an autonomous system on $$U,$$ $$\underline{y}^*$$ be an equilibrium point and $$V:U\rightarrow\mathbb{R}$$ be $$C^1$$ with $$V\left(\underline{y}^*\right)=0$$ and $$V>0$$ elsewhere near $$\underline{y}^*.$$ Along a solution the chain rule gives $$\frac{d}{dt}V\left(\underline{y}(t)\right)=\nabla V\left(\underline{y}\right)\cdot\underline{F}\left(\underline{y}\right).$$ The function $$V$$ is a **Lyapunov function** for $$\underline{y}^*$$ if and only if $$\nabla V\cdot\underline{F}\leq 0$$ near $$\underline{y}^*.$$

Let $$\underline{y}'=\underline{F}\left(\underline{y}\right)$$ be an autonomous system and $$\underline{y}^*$$ be an equilibrium point with a Lyapunov function $$V.$$ **Lyapunov's stability theorem** states that $$\underline{y}^*$$ is stable, and asymptotically stable if $$\nabla V\cdot\underline{F}<0$$ away from $$\underline{y}^*.$$ The energy of the pendulum, shifted by its minimum, is a Lyapunov function at $$\left(0,0\right).$$
