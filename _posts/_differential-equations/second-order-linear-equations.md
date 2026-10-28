---
title:  "Second-Order Linear Equations"
description: "Equations in a second derivative"
---

Let $$I$$ be an interval and $$p,q,g:I\rightarrow\mathbb{R}$$ be continuous. A **second-order linear equation** in normal form is an equation of the form

$$y''+p(x)\,y'+q(x)\,y=g(x).$$

The **associated homogeneous equation** is the equation with the forcing function set to zero.

$$y''+p(x)\,y'+q(x)\,y=0$$

Every initial value problem $$y\left(x_0\right)=y_0,$$ $$y'\left(x_0\right)=y_1$$ with $$x_0\in I$$ has exactly one solution, which exists on all of $$I.$$

Let $$I$$ be an interval and $$p,q:I\rightarrow\mathbb{R}$$ be continuous. The **differential operator** of the equation is the linear transformation $$L$$ on the vector space $$C^2(I)$$ that maps a function to the left-hand side of the equation.

$$L[y]:=y''+p\,y'+q\,y$$

Let $$L[y]=g$$ be a second-order linear equation on $$I.$$ The **superposition principle** states that linear combinations of solutions of the homogeneous equation are solutions of the homogeneous equation, and that the difference of two solutions of the inhomogeneous equation solves the homogeneous equation. The solutions of the homogeneous equation therefore form the kernel of $$L,$$ which is a vector space, and the general solution of the inhomogeneous equation is the sum of any particular solution $$y_p$$ and the general solution $$y_h$$ of the homogeneous equation.

$$y=y_h+y_p$$

Let $$I$$ be an interval and $$y_1,y_2:I\rightarrow\mathbb{R}$$ be differentiable. The **Wronskian** of $$y_1$$ and $$y_2$$ is the determinant of the matrix whose rows are the functions and their derivatives.

$$W\left(y_1,y_2\right)(x):=\det\begin{bmatrix}y_1(x) & y_2(x) \\ y_1'(x) & y_2'(x)\end{bmatrix}=y_1(x)\,y_2'(x)-y_1'(x)\,y_2(x)$$

Let $$y_1,y_2$$ be solutions of the homogeneous equation $$y''+p\,y'+q\,y=0$$ on $$I$$ with Wronskian $$W.$$ **Abel's identity** states that the Wronskian satisfies $$W'=-p\,W,$$ so that

$$W(x)=W\left(x_0\right)\exp\left(-\int_{x_0}^{x}p(s)\,ds\right).$$

The Wronskian of two solutions is therefore either identically zero or never zero on $$I.$$

Let $$y''+p\,y'+q\,y=0$$ be a homogeneous second-order linear equation on $$I.$$ The solution space of the equation has the following properties:
- two solutions are linearly independent if and only if their Wronskian is non-zero;
- the solution space has dimension two, since the map $$y\mapsto\left(y\left(x_0\right),y'\left(x_0\right)\right)$$ is an isomorphism onto $$\mathbb{R}^2$$ by existence and uniqueness.

Let $$y''+p\,y'+q\,y=0$$ be a homogeneous second-order linear equation on $$I.$$ A **fundamental set of solutions** of the equation is a basis $$y_1,y_2$$ of its solution space. The general solution of the homogeneous equation is $$y_h=c_1y_1+c_2y_2$$ for $$c_1,c_2\in\mathbb{R}.$$

Let $$y''+p\,y'+q\,y=0$$ be a homogeneous second-order linear equation on $$I$$ and $$y_1$$ be a solution with no zeros on $$I.$$ **Reduction of order** is the method that finds a second solution by the substitution $$y_2=v\,y_1,$$ which gives a first-order linear equation for $$v'$$ with solution

$$y_2(x)=y_1(x)\int\frac{1}{y_1(x)^2}\exp\left(-\int p(x)\,dx\right)dx.$$

These statements extend to a linear equation of order $$n$$ with continuous coefficients: the solution space of the homogeneous equation has dimension $$n,$$ the Wronskian of $$n$$ solutions is the determinant of the matrix whose rows are the solutions and their first $$n-1$$ derivatives, it satisfies $$W'=-a_{n-1}W,$$ and $$n$$ solutions form a fundamental set if and only if their Wronskian is non-zero.

Let $$a,b,c\in\mathbb{R}$$ with $$a\neq 0.$$ A **homogeneous equation with constant coefficients** is an equation of the form

$$a\,y''+b\,y'+c\,y=0.$$

Let $$a\,y''+b\,y'+c\,y=0$$ be a homogeneous equation with constant coefficients. The **characteristic equation** of the equation is the quadratic equation obtained by substituting $$y=e^{rx}$$ and dividing by $$e^{rx}.$$

$$a\,r^2+b\,r+c=0$$

The function $$y=e^{rx}$$ is a solution if and only if $$r$$ is a root of the characteristic equation. The roots are $$r=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.$$

Let $$a\,y''+b\,y'+c\,y=0$$ be a homogeneous equation with constant coefficients. The **discriminant** of its characteristic equation is $$b^2-4ac.$$ The fundamental set depends on the sign of the discriminant:
- if $$b^2-4ac>0$$ the roots $$r_1\neq r_2$$ are real and $$y_h=c_1e^{r_1x}+c_2e^{r_2x};$$
- if $$b^2-4ac=0$$ the root $$r=-\frac{b}{2a}$$ is repeated and, by reduction of order, $$y_h=\left(c_1+c_2x\right)e^{rx};$$
- if $$b^2-4ac<0$$ the roots are the complex conjugates $$\alpha\pm i\beta$$ with $$\beta>0,$$ the complex solutions $$e^{\left(\alpha\pm i\beta\right)x}=e^{\alpha x}\left(\cos\beta x\pm i\sin\beta x\right)$$ have real and imaginary parts that are real solutions by Euler's formula, and $$y_h=e^{\alpha x}\left(c_1\cos\beta x+c_2\sin\beta x\right).$$

For an equation of order $$n$$ with constant coefficients $$a_ny^{(n)}+\cdots+a_1y'+a_0y=0,$$ the characteristic equation is the polynomial equation $$a_nr^n+\cdots+a_1r+a_0=0.$$ A real root $$r$$ of multiplicity $$m$$ contributes $$e^{rx},x\,e^{rx},\ldots,x^{m-1}e^{rx}$$ to the fundamental set, and a pair of complex roots $$\alpha\pm i\beta$$ of multiplicity $$m$$ contributes $$x^ke^{\alpha x}\cos\beta x$$ and $$x^ke^{\alpha x}\sin\beta x$$ for $$k=0,\ldots,m-1.$$

Let $$b,c\in\mathbb{R}.$$ The **Euler–Cauchy equation** is the equation $$x^2y''+b\,x\,y'+c\,y=0$$ on $$\left(0,\infty\right).$$ The function $$y=x^r$$ is a solution if and only if $$r\left(r-1\right)+b\,r+c=0,$$ and the substitution $$x=e^t$$ turns the Euler–Cauchy equation into an equation with constant coefficients.

Let $$L[y]=g$$ have constant coefficients and a forcing function that is a sum of terms of the form $$P(x)\,e^{\alpha x}\cos\beta x$$ or $$P(x)\,e^{\alpha x}\sin\beta x$$ with $$P$$ a polynomial of degree $$k.$$ The **method of undetermined coefficients** is the method that finds a particular solution by substituting a **trial solution** of the same form with unknown coefficients and matching terms. For a term $$P(x)\,e^{\alpha x}\cos\beta x$$ or $$P(x)\,e^{\alpha x}\sin\beta x$$ the trial solution is

$$x^s\,e^{\alpha x}\left(Q_1(x)\cos\beta x+Q_2(x)\sin\beta x\right)$$

with $$Q_1,Q_2$$ polynomials of degree $$k$$ and $$s$$ the multiplicity of $$\alpha+i\beta$$ as a root of the characteristic equation, with $$s=0$$ if it is not a root. By superposition the particular solutions for each term of $$g$$ are added.

Let $$L[y]=g$$ have constant coefficients. **Resonance** is the situation in which a term of the forcing function solves the homogeneous equation, so that $$s>0$$ in the trial solution. For example, $$y''+y=\cos x$$ has $$s=1$$ and particular solution $$y_p=\frac{x}{2}\sin x,$$ whose amplitude grows without bound.

Let $$L[y]=g$$ be a second-order linear equation with continuous forcing function $$g$$ and $$y_1,y_2$$ be a fundamental set of solutions of the homogeneous equation with Wronskian $$W.$$ **Variation of parameters** is the method that finds a particular solution by replacing the constants in $$y_h$$ with functions, $$y_p=u_1y_1+u_2y_2,$$ subject to $$u_1'y_1+u_2'y_2=0.$$ This leads to the linear system $$u_1'y_1'+u_2'y_2'=g$$ and the formula

$$y_p(x)=-y_1(x)\int\frac{y_2(x)\,g(x)}{W(x)}\,dx+y_2(x)\int\frac{y_1(x)\,g(x)}{W(x)}\,dx.$$

Written as a single integral,

$$y_p(x)=\int_{x_0}^{x}\frac{y_1(s)\,y_2(x)-y_1(x)\,y_2(s)}{W(s)}\,g(s)\,ds,$$

which is the particular solution with $$y_p\left(x_0\right)=y_p'\left(x_0\right)=0.$$ Variation of parameters applies to variable coefficients and to any continuous $$g,$$ whereas the method of undetermined coefficients requires constant coefficients and a forcing function of the special form but is simpler when it applies.

Let $$\omega_0>0,$$ $$\zeta\geq 0,$$ $$F\in\mathbb{R}$$ and $$\omega>0.$$ The **harmonic oscillator** is the constant-coefficient equation for a displacement $$y(t)$$

$$y''+2\zeta\omega_0\,y'+\omega_0^2\,y=F\cos\omega t.$$

The number $$\omega_0$$ is the **natural frequency**, $$\zeta$$ is the **damping ratio** and $$F$$ and $$\omega$$ are the **forcing amplitude** and **forcing frequency**. The characteristic roots are $$\omega_0\left(-\zeta\pm\sqrt{\zeta^2-1}\right).$$

Let $$y''+2\zeta\omega_0\,y'+\omega_0^2\,y=0$$ be an unforced harmonic oscillator. The oscillator is **undamped** if and only if $$\zeta=0,$$ **underdamped** if and only if $$0<\zeta<1,$$ **critically damped** if and only if $$\zeta=1$$ and **overdamped** if and only if $$\zeta>1.$$ The harmonic oscillator has the following properties:
- an undamped oscillator has solutions $$c_1\cos\omega_0t+c_2\sin\omega_0t$$ of period $$\frac{2\pi}{\omega_0};$$
- an underdamped oscillator has oscillations of frequency $$\omega_0\sqrt{1-\zeta^2}$$ whose amplitude decays like $$e^{-\zeta\omega_0t};$$
- a critically damped or overdamped oscillator returns to rest without oscillating.

Let $$y''+2\zeta\omega_0\,y'+\omega_0^2\,y=F\cos\omega t$$ be a forced harmonic oscillator with $$\zeta>0.$$ The **transient** is the homogeneous solution, which decays to zero. The **steady-state** solution is the particular solution $$y_p=A\cos\left(\omega t-\phi\right),$$ to which every solution converges, with amplitude

$$A=\frac{F}{\sqrt{\left(\omega_0^2-\omega^2\right)^2+\left(2\zeta\omega_0\omega\right)^2}}.$$

For small $$\zeta$$ the amplitude is largest when the forcing frequency is near the natural frequency. When $$\zeta=0$$ and $$\omega=\omega_0$$ the forcing is in resonance with the oscillator and the particular solution $$\frac{F}{2\omega_0}t\sin\omega_0t$$ grows without bound.
