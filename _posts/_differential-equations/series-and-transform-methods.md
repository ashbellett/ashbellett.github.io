---
layout: post
category: "differential-equations"
title:  "Series and Transform Methods"
tags: ["differential equations", "series method", "transform method"]
description: "Solving equations through series and integrals"
---

Let $$y''+p(x)\,y'+q(x)\,y=0$$ be a second-order linear homogeneous equation. A point $$x_0$$ is an **ordinary point** of the equation if $$p$$ and $$q$$ are analytic at $$x_0$$ and a **singular point** otherwise. Near an ordinary point every solution is analytic and is found as a power series with unknown coefficients,

$$y(x)=\sum_{n=0}^{\infty}a_n\left(x-x_0\right)^n,$$

by differentiating term by term, substituting into the equation and equating the coefficient of each power of $$x-x_0$$ to zero, which gives a **recurrence relation** that determines $$a_2,a_3,\ldots$$ from the free coefficients $$a_0=y\left(x_0\right)$$ and $$a_1=y'\left(x_0\right).$$ The radius of convergence of the series is at least the distance from $$x_0$$ to the nearest singular point of the equation in the complex plane. For example, the **Airy equation** $$y''-x\,y=0$$ has only ordinary points and the recurrence $$\left(n+2\right)\left(n+1\right)a_{n+2}=a_{n-1},$$ whose solutions converge on all of $$\mathbb{R}.$$

A singular point $$x_0$$ is a **regular singular point** if $$\left(x-x_0\right)p(x)$$ and $$\left(x-x_0\right)^2q(x)$$ are analytic at $$x_0,$$ and an **irregular singular point** otherwise. Near a regular singular point the **Frobenius method** seeks solutions of the form

$$y(x)=\left(x-x_0\right)^r\sum_{n=0}^{\infty}a_n\left(x-x_0\right)^n,\qquad a_0\neq 0,$$

where the exponent $$r$$ is a root of the **indicial equation** $$r\left(r-1\right)+p_0r+q_0=0$$ with $$p_0=\lim_{x\rightarrow x_0}\left(x-x_0\right)p(x)$$ and $$q_0=\lim_{x\rightarrow x_0}\left(x-x_0\right)^2q(x).$$ The larger root always gives a solution of this form; if the roots differ by an integer the second solution may contain a term $$\log_e\left(x-x_0\right)$$ times the first. **Bessel's equation** $$x^2y''+x\,y'+\left(x^2-\nu^2\right)y=0$$ has a regular singular point at $$0$$ with indicial roots $$\pm\nu,$$ and **Legendre's equation** $$\left(1-x^2\right)y''-2x\,y'+\ell\left(\ell+1\right)y=0$$ has regular singular points at $$\pm 1$$ and, when $$\ell\in\mathbb{N},$$ a polynomial solution of degree $$\ell,$$ the **Legendre polynomial** $$P_\ell.$$

Let $$f:\left[0,\infty\right)\rightarrow\mathbb{R}$$ be integrable on every bounded interval and of **exponential order**, meaning that there exist $$M,a\geq 0$$ with $$\lvert f(t)\rvert\leq M\,e^{at}$$ for all $$t\geq 0.$$ The **Laplace transform** of $$f$$ is the function of $$s$$ given by the improper integral

$$\mathcal{L}\left\{f\right\}(s)=F(s):=\int_0^{\infty}e^{-st}f(t)\,dt,$$

which converges absolutely for $$s>a$$ by comparison with $$\int_0^{\infty}M\,e^{-\left(s-a\right)t}\,dt.$$ The transform is linear and **Lerch's theorem** states that two continuous functions with the same transform are equal, so $$f$$ is the **inverse Laplace transform** $$\mathcal{L}^{-1}\left\{F\right\}$$ of $$F.$$ Some common transforms, valid for $$s$$ larger than the stated constant, are:

$$\mathcal{L}\left\{1\right\}=\frac{1}{s},\qquad\mathcal{L}\left\{t^n\right\}=\frac{n!}{s^{n+1}},\qquad\mathcal{L}\left\{e^{at}\right\}=\frac{1}{s-a}$$

$$\mathcal{L}\left\{\cos\omega t\right\}=\frac{s}{s^2+\omega^2},\qquad\mathcal{L}\left\{\sin\omega t\right\}=\frac{\omega}{s^2+\omega^2}.$$

Let $$f$$ be $$C^1$$ with $$f$$ and $$f'$$ of exponential order. Integration by parts gives the **derivative rule**, which turns differentiation into multiplication by $$s$$ and builds in the initial values,

$$\mathcal{L}\left\{f'\right\}(s)=s\,F(s)-f(0),\qquad\mathcal{L}\left\{f''\right\}(s)=s^2F(s)-s\,f(0)-f'(0),$$

and in general $$\mathcal{L}\left\{f^{(n)}\right\}(s)=s^nF(s)-\sum_{k=0}^{n-1}s^{n-1-k}f^{(k)}(0).$$ Let $$a\geq 0$$ and $$H$$ be the **Heaviside step function**, which is $$0$$ for $$t<0$$ and $$1$$ for $$t\geq 0.$$ The **shift theorems** state that multiplying $$f$$ by an exponential shifts its transform and that delaying $$f$$ multiplies its transform by an exponential.

$$\mathcal{L}\left\{e^{at}f(t)\right\}(s)=F\left(s-a\right),\qquad\mathcal{L}\left\{H\left(t-a\right)f\left(t-a\right)\right\}(s)=e^{-as}F(s)$$

Also $$\mathcal{L}\left\{t\,f(t)\right\}=-F'(s)$$ and $$\mathcal{L}\left\{\int_0^tf(\tau)\,d\tau\right\}=\frac{F(s)}{s}.$$ The **convolution** of $$f$$ and $$g$$ on $$\left[0,\infty\right)$$ is

$$\left(f*g\right)(t):=\int_0^tf(\tau)\,g\left(t-\tau\right)d\tau,$$

which is commutative, associative and bilinear, and the **convolution theorem** states that the transform of a convolution is the product of the transforms, $$\mathcal{L}\left\{f*g\right\}=F\,G.$$

An initial value problem for a linear equation with constant coefficients is solved by transforming both sides, which by the derivative rule gives an algebraic equation for $$Y=\mathcal{L}\left\{y\right\},$$ solving for $$Y$$ and inverting, usually by partial fractions and the table of transforms. For $$a\,y''+b\,y'+c\,y=g(t)$$ with $$y(0)=y'(0)=0$$ this gives

$$Y(s)=\frac{G(s)}{a\,s^2+b\,s+c},$$

where $$\frac{1}{a\,s^2+b\,s+c}$$ is the **transfer function** of the equation and its inverse transform $$h$$ is the **impulse response**, so that $$y=h*g$$ by the convolution theorem; this is variation of parameters for constant coefficients. The method handles discontinuous forcing through the Heaviside function and impulsive forcing through the **Dirac delta** $$\delta,$$ which is not a function but the limit of unit-area pulses of shrinking width, defined by $$\int_{-\infty}^{\infty}\delta\left(t-a\right)f(t)\,dt=f(a)$$ for continuous $$f,$$ so that $$\mathcal{L}\left\{\delta\left(t-a\right)\right\}=e^{-as}$$ and the response to $$\delta$$ is $$h.$$

Let $$f:\mathbb{R}\rightarrow\mathbb{R}$$ be periodic with period $$2\pi$$ and Riemann integrable on $$\left[-\pi,\pi\right].$$ The functions $$1,\cos nx,\sin nx$$ for $$n\in\mathbb{N}$$ are orthogonal with respect to the inner product $$\langle f,g\rangle:=\int_{-\pi}^{\pi}f(x)\,g(x)\,dx,$$ with $$\langle\cos nx,\cos nx\rangle=\langle\sin nx,\sin nx\rangle=\pi$$ for $$n\geq 1$$ and $$\langle 1,1\rangle=2\pi.$$ The **Fourier coefficients** of $$f$$ are its inner products with these functions, normalised,

$$a_n:=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx\,dx,\qquad b_n:=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin nx\,dx,$$

and the **Fourier series** of $$f$$ is the series of functions with these coefficients, whose partial sums $$S_N$$ are trigonometric polynomials.

$$f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos nx+b_n\sin nx\right)$$

By Euler's formula the series is equally $$\sum_{n=-\infty}^{\infty}c_ne^{inx}$$ with **complex Fourier coefficients** $$c_n:=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(x)\,e^{-inx}\,dx,$$ so that $$c_{\pm n}=\frac{1}{2}\left(a_n\mp ib_n\right).$$ For a function of period $$2L$$ the same formulae hold with $$x$$ replaced by $$\frac{\pi x}{L}$$ and integrals over $$\left[-L,L\right]$$ divided by $$L$$ in place of $$\pi.$$ If $$f$$ is even then $$b_n=0$$ and the series is a **cosine series**; if $$f$$ is odd then $$a_n=0$$ and it is a **sine series**. A function on $$\left[0,L\right]$$ is expanded in a cosine or sine series by extending it to an even or odd function of period $$2L.$$

By orthogonality, the partial sum $$S_N$$ is the trigonometric polynomial of degree $$N$$ closest to $$f$$ in the norm $$\lVert f\rVert_2:=\sqrt{\langle f,f\rangle},$$ since $$\lVert f-T\rVert_2^2=\lVert f-S_N\rVert_2^2+\lVert S_N-T\rVert_2^2$$ for every trigonometric polynomial $$T$$ of degree $$N,$$ and **Bessel's inequality** $$\frac{a_0^2}{2}+\sum_{n=1}^{N}\left(a_n^2+b_n^2\right)\leq\frac{1}{\pi}\lVert f\rVert_2^2$$ follows. The Fourier series **converges in mean square** to $$f,$$ meaning that $$\lVert f-S_N\rVert_2\rightarrow 0,$$ so Bessel's inequality becomes **Parseval's identity**.

$$\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)^2\,dx=\frac{a_0^2}{2}+\sum_{n=1}^{\infty}\left(a_n^2+b_n^2\right)$$

In particular the **Riemann–Lebesgue lemma** holds: $$a_n,b_n\rightarrow 0$$ as $$n\rightarrow\infty.$$ Mean-square convergence is the density of the trigonometric polynomials in the continuous periodic functions, from the Stone–Weierstrass theorem, extended to integrable functions.

Pointwise convergence requires more regularity. The **one-sided limits** of $$f$$ at $$x$$ are the limits $$\lim_{t\rightarrow x^-}f(t)$$ and $$\lim_{t\rightarrow x^+}f(t)$$ of $$f$$ restricted to $$t<x$$ and to $$t>x$$ respectively. A function is piecewise $$C^1$$ on $$\left[-\pi,\pi\right]$$ if it and its derivative are continuous except at finitely many points, at each of which both have one-sided limits. The **Dirichlet convergence theorem** states that if $$f$$ is piecewise $$C^1$$ then its Fourier series converges at every $$x$$ to the average of the one-sided limits of $$f,$$

$$\lim_{N\rightarrow\infty}S_N(x)=\frac{1}{2}\left(\lim_{t\rightarrow x^-}f(t)+\lim_{t\rightarrow x^+}f(t)\right),$$

which is $$f(x)$$ wherever $$f$$ is continuous, and that the convergence is uniform on every closed interval on which $$f$$ is continuous. If $$f$$ is continuous and piecewise $$C^1$$ the convergence is uniform on $$\mathbb{R}$$ and the series may be differentiated term by term wherever $$f'$$ is itself piecewise $$C^1,$$ while the series of any piecewise $$C^1$$ function may be integrated term by term. Near a jump the partial sums overshoot the limit by about $$9\%$$ of the jump however large $$N$$ is, the **Gibbs phenomenon**, which is why convergence is not uniform there. The smoother $$f$$ is, the faster its coefficients decay: if $$f\in C^k$$ is periodic then $$a_n,b_n$$ decay faster than $$n^{-k}.$$ For example, the odd function equal to $$x$$ on $$\left(-\pi,\pi\right)$$ has $$b_n=\frac{2\left(-1\right)^{n+1}}{n},$$ and Parseval's identity gives $$\sum_{n=1}^{\infty}\frac{1}{n^2}=\frac{\pi^2}{6}.$$
