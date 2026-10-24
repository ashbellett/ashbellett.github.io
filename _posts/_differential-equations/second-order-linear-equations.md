---
layout: post
category: "differential-equations"
title:  "Second-Order Linear Equations"
tags: ["differential equations", "second-order linear equation"]
description: "Equations in a second derivative"
---

Let $$I$$ be an interval and $$p,q,g:I\rightarrow\mathbb{R}$$ be continuous. A second-order linear ordinary differential equation in normal form and its associated homogeneous equation are

$$y''+p(x)\,y'+q(x)\,y=g(x),\qquad y''+p(x)\,y'+q(x)\,y=0.$$

Every initial value problem $$y\left(x_0\right)=y_0,$$ $$y'\left(x_0\right)=y_1$$ with $$x_0\in I$$ has exactly one solution, which exists on all of $$I.$$ Let $$L$$ be the **differential operator** $$L[y]:=y''+p\,y'+q\,y,$$ which is a linear transformation on the vector space $$C^2(I).$$ The **superposition principle** states that linear combinations of solutions of the homogeneous equation are solutions, so the solutions of the homogeneous equation form the kernel of $$L,$$ a vector space, and that the difference of two solutions of the inhomogeneous equation solves the homogeneous equation. The general solution of the inhomogeneous equation is therefore the sum of any particular solution $$y_p$$ and the general solution $$y_h$$ of the homogeneous equation.

$$y=y_h+y_p$$

Let $$y_1,y_2$$ be differentiable on $$I.$$ Their **Wronskian** is the determinant

$$W\left(y_1,y_2\right)(x):=\det\begin{bmatrix}y_1(x) & y_2(x) \\ y_1'(x) & y_2'(x)\end{bmatrix}=y_1(x)\,y_2'(x)-y_1'(x)\,y_2(x).$$

If $$y_1,y_2$$ are solutions of the homogeneous equation then **Abel's identity** states that $$W'=-p\,W,$$ so

$$W(x)=W\left(x_0\right)\exp\left(-\int_{x_0}^{x}p(s)\,ds\right)$$

and the Wronskian is either identically zero or never zero on $$I.$$ Two solutions are linearly independent if and only if their Wronskian is non-zero, and the solution space of the homogeneous equation has dimension two, since the map $$y\mapsto\left(y\left(x_0\right),y'\left(x_0\right)\right)$$ is an isomorphism onto $$\mathbb{R}^2$$ by existence and uniqueness. A basis $$y_1,y_2$$ of the solution space is a **fundamental set of solutions** and the general solution of the homogeneous equation is $$y_h=c_1y_1+c_2y_2$$ for $$c_1,c_2\in\mathbb{R}.$$ Given one solution $$y_1$$ with no zeros on $$I,$$ **reduction of order** finds a second by the substitution $$y_2=v\,y_1,$$ which gives a first-order linear equation for $$v'$$ with solution

$$y_2(x)=y_1(x)\int\frac{1}{y_1(x)^2}\exp\left(-\int p(x)\,dx\right)dx.$$

These statements extend to a linear equation of order $$n$$ with continuous coefficients: the solution space of the homogeneous equation has dimension $$n,$$ the Wronskian of $$n$$ solutions is the determinant of the matrix whose rows are the solutions and their first $$n-1$$ derivatives, it satisfies $$W'=-a_{n-1}W,$$ and $$n$$ solutions form a fundamental set if and only if it is non-zero.

Let $$a,b,c\in\mathbb{R}$$ with $$a\neq 0.$$ The homogeneous equation with constant coefficients

$$a\,y''+b\,y'+c\,y=0$$

has the solution $$y=e^{rx}$$ if and only if $$r$$ is a root of its **characteristic equation**, a quadratic obtained by substituting $$e^{rx}$$ and dividing by it.

$$a\,r^2+b\,r+c=0$$

The roots are $$r=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$ and the fundamental set depends on the sign of the **discriminant** $$b^2-4ac:$$
- if $$b^2-4ac>0$$ the roots $$r_1\neq r_2$$ are real and $$y_h=c_1e^{r_1x}+c_2e^{r_2x};$$
- if $$b^2-4ac=0$$ the root $$r=-\frac{b}{2a}$$ is repeated and, by reduction of order, $$y_h=\left(c_1+c_2x\right)e^{rx};$$
- if $$b^2-4ac<0$$ the roots are the complex conjugates $$\alpha\pm i\beta$$ with $$\beta>0,$$ the complex solutions $$e^{\left(\alpha\pm i\beta\right)x}=e^{\alpha x}\left(\cos\beta x\pm i\sin\beta x\right)$$ have real and imaginary parts that are real solutions by Euler's formula, and $$y_h=e^{\alpha x}\left(c_1\cos\beta x+c_2\sin\beta x\right).$$

For an equation of order $$n$$ with constant coefficients the characteristic equation is the polynomial equation $$a_nr^n+\cdots+a_1r+a_0=0,$$ a real root $$r$$ of multiplicity $$m$$ contributes $$e^{rx},x\,e^{rx},\ldots,x^{m-1}e^{rx}$$ to the fundamental set and a pair of complex roots $$\alpha\pm i\beta$$ of multiplicity $$m$$ contributes $$x^ke^{\alpha x}\cos\beta x$$ and $$x^ke^{\alpha x}\sin\beta x$$ for $$k=0,\ldots,m-1.$$ The **Euler–Cauchy equation** $$x^2y''+b\,x\,y'+c\,y=0$$ on $$\left(0,\infty\right)$$ has solutions $$y=x^r$$ where $$r\left(r-1\right)+b\,r+c=0,$$ and the substitution $$x=e^t$$ turns it into an equation with constant coefficients.

Let $$L[y]=g$$ have constant coefficients and a forcing function that is a sum of terms of the form $$P(x)\,e^{\alpha x}\cos\beta x$$ or $$P(x)\,e^{\alpha x}\sin\beta x$$ with $$P$$ a polynomial of degree $$k.$$ The **method of undetermined coefficients** finds a particular solution by substituting a **trial solution** of the same form with unknown coefficients and matching terms. For a term $$P(x)\,e^{\alpha x}\cos\beta x$$ or $$P(x)\,e^{\alpha x}\sin\beta x$$ the trial solution is

$$x^s\,e^{\alpha x}\left(Q_1(x)\cos\beta x+Q_2(x)\sin\beta x\right)$$

with $$Q_1,Q_2$$ polynomials of degree $$k$$ and $$s$$ the multiplicity of $$\alpha+i\beta$$ as a root of the characteristic equation, with $$s=0$$ if it is not a root. The factor $$x^s$$ is needed because the trial solution would otherwise solve the homogeneous equation, a situation called **resonance**. By superposition the particular solutions for each term of $$g$$ are added. For example, $$y''+y=\cos x$$ has $$s=1$$ and particular solution $$y_p=\frac{x}{2}\sin x,$$ whose amplitude grows without bound.

Let $$y_1,y_2$$ be a fundamental set of solutions of the homogeneous equation with Wronskian $$W.$$ **Variation of parameters** finds a particular solution for any continuous forcing function $$g$$ by replacing the constants in $$y_h$$ with functions, $$y_p=u_1y_1+u_2y_2,$$ subject to $$u_1'y_1+u_2'y_2=0,$$ which leads to the linear system $$u_1'y_1'+u_2'y_2'=g$$ and the formula

$$y_p(x)=-y_1(x)\int\frac{y_2(x)\,g(x)}{W(x)}\,dx+y_2(x)\int\frac{y_1(x)\,g(x)}{W(x)}\,dx.$$

The method applies to variable coefficients and to any $$g,$$ whereas undetermined coefficients requires constant coefficients and a forcing function of the special form, but is simpler when it applies. Written as a single integral,

$$y_p(x)=\int_{x_0}^{x}\frac{y_1(s)\,y_2(x)-y_1(x)\,y_2(s)}{W(s)}\,g(s)\,ds,$$

which is the particular solution with $$y_p\left(x_0\right)=y_p'\left(x_0\right)=0.$$

The **harmonic oscillator** is the constant-coefficient equation for a displacement $$y(t)$$ with **natural frequency** $$\omega_0>0,$$ **damping ratio** $$\zeta\geq 0$$ and a periodic forcing of amplitude $$F$$ and frequency $$\omega.$$

$$y''+2\zeta\omega_0\,y'+\omega_0^2\,y=F\cos\omega t$$

The characteristic roots are $$\omega_0\left(-\zeta\pm\sqrt{\zeta^2-1}\right).$$ The unforced oscillator is **undamped** if $$\zeta=0,$$ with solutions $$c_1\cos\omega_0t+c_2\sin\omega_0t$$ of period $$\frac{2\pi}{\omega_0},$$ **underdamped** if $$0<\zeta<1,$$ with oscillations of frequency $$\omega_0\sqrt{1-\zeta^2}$$ whose amplitude decays like $$e^{-\zeta\omega_0t},$$ **critically damped** if $$\zeta=1$$ and **overdamped** if $$\zeta>1,$$ in which cases it returns to rest without oscillating. When $$\zeta>0$$ the homogeneous solution is a **transient** that decays, and every solution converges to the **steady-state** particular solution $$y_p=A\cos\left(\omega t-\phi\right)$$ with amplitude

$$A=\frac{F}{\sqrt{\left(\omega_0^2-\omega^2\right)^2+\left(2\zeta\omega_0\omega\right)^2}},$$

which for small $$\zeta$$ is largest when the forcing frequency is near the natural frequency. When $$\zeta=0$$ and $$\omega=\omega_0$$ the forcing is in resonance with the oscillator and the particular solution $$\frac{F}{2\omega_0}t\sin\omega_0t$$ grows without bound.
