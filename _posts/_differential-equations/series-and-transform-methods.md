---
layout: post
category: "differential-equations"
title:  "Series and Transform Methods"
tags: ["differential equations", "series method", "transform method"]
description: "Solving equations through series and integrals"
---

Let $$y''+p(x)\,y'+q(x)\,y=0$$ be a second-order linear homogeneous equation and $$x_0\in\mathbb{R}.$$ The point $$x_0$$ is an **ordinary point** of the equation if and only if $$p$$ and $$q$$ are analytic at $$x_0.$$ The point $$x_0$$ is a **singular point** of the equation if and only if it is not an ordinary point.

Let $$y''+p(x)\,y'+q(x)\,y=0$$ be a second-order linear homogeneous equation and $$x_0$$ be an ordinary point. The **power series method** is the method that finds solutions as power series centred at $$x_0$$ with unknown coefficients,

$$y(x)=\sum_{n=0}^{\infty}a_n\left(x-x_0\right)^n,$$

by differentiating term by term, substituting into the equation and equating the coefficient of each power of $$x-x_0$$ to zero. The **recurrence relation** of the equation is the resulting relation that determines $$a_2,a_3,\ldots$$ from the free coefficients $$a_0=y\left(x_0\right)$$ and $$a_1=y'\left(x_0\right).$$ The power series method has the following properties:
- near an ordinary point every solution is analytic;
- the radius of convergence of the series is at least the distance from $$x_0$$ to the nearest singular point of the equation in the complex plane.

The **Airy equation** is the equation $$y''-x\,y=0.$$ It has only ordinary points and the recurrence relation $$\left(n+2\right)\left(n+1\right)a_{n+2}=a_{n-1},$$ whose solutions converge on all of $$\mathbb{R}.$$

Let $$y''+p(x)\,y'+q(x)\,y=0$$ be a second-order linear homogeneous equation and $$x_0$$ be a singular point. The point $$x_0$$ is a **regular singular point** if and only if $$\left(x-x_0\right)p(x)$$ and $$\left(x-x_0\right)^2q(x)$$ are analytic at $$x_0.$$ The point $$x_0$$ is an **irregular singular point** if and only if it is a singular point that is not regular.

Let $$y''+p(x)\,y'+q(x)\,y=0$$ be a second-order linear homogeneous equation with a regular singular point $$x_0,$$ and $$p_0=\lim_{x\rightarrow x_0}\left(x-x_0\right)p(x)$$ and $$q_0=\lim_{x\rightarrow x_0}\left(x-x_0\right)^2q(x).$$ The **indicial equation** of the equation at $$x_0$$ is the quadratic equation

$$r\left(r-1\right)+p_0r+q_0=0.$$

Let $$y''+p(x)\,y'+q(x)\,y=0$$ be a second-order linear homogeneous equation with a regular singular point $$x_0.$$ The **Frobenius method** is the method that seeks solutions of the form

$$y(x)=\left(x-x_0\right)^r\sum_{n=0}^{\infty}a_n\left(x-x_0\right)^n,\qquad a_0\neq 0,$$

where the exponent $$r$$ is a root of the indicial equation. The Frobenius method has the following properties:
- the larger root always gives a solution of this form;
- if the roots differ by an integer the second solution may contain a term $$\log_e\left(x-x_0\right)$$ times the first.

Let $$\nu\geq 0.$$ **Bessel's equation** of order $$\nu$$ is the equation $$x^2y''+x\,y'+\left(x^2-\nu^2\right)y=0,$$ which has a regular singular point at $$0$$ with indicial roots $$\pm\nu.$$

Let $$\ell\in\mathbb{R}.$$ **Legendre's equation** is the equation $$\left(1-x^2\right)y''-2x\,y'+\ell\left(\ell+1\right)y=0,$$ which has regular singular points at $$\pm 1.$$ When $$\ell\in\mathbb{N},$$ Legendre's equation has a polynomial solution of degree $$\ell,$$ the **Legendre polynomial** $$P_\ell.$$

Let $$f:\left[0,\infty\right)\rightarrow\mathbb{R}$$ be a function. The function $$f$$ is of **exponential order** if and only if there exist $$M,a\geq 0$$ with $$\lvert f(t)\rvert\leq M\,e^{at}$$ for all $$t\geq 0.$$

Let $$f:\left[0,\infty\right)\rightarrow\mathbb{R}$$ be integrable on every bounded interval and of exponential order with constant $$a.$$ The **Laplace transform** of $$f$$ is the function of $$s$$ given by the improper integral

$$\mathcal{L}\left\{f\right\}(s)=F(s):=\int_0^{\infty}e^{-st}f(t)\,dt,$$

which converges absolutely for $$s>a$$ by comparison with $$\int_0^{\infty}M\,e^{-\left(s-a\right)t}\,dt.$$ The Laplace transform is linear.

Let $$F$$ be the Laplace transform of a continuous function $$f.$$ **Lerch's theorem** states that two continuous functions with the same Laplace transform are equal. The **inverse Laplace transform** of $$F,$$ written $$\mathcal{L}^{-1}\left\{F\right\},$$ is the function $$f.$$ The following **common transforms** are valid for $$s$$ larger than the stated constant:

$$\mathcal{L}\left\{1\right\}=\frac{1}{s},\qquad\mathcal{L}\left\{t^n\right\}=\frac{n!}{s^{n+1}},\qquad\mathcal{L}\left\{e^{at}\right\}=\frac{1}{s-a}$$

$$\mathcal{L}\left\{\cos\omega t\right\}=\frac{s}{s^2+\omega^2},\qquad\mathcal{L}\left\{\sin\omega t\right\}=\frac{\omega}{s^2+\omega^2}$$

Let $$f$$ be $$C^1$$ with $$f$$ and $$f'$$ of exponential order. The **derivative rule** states that the Laplace transform turns differentiation into multiplication by $$s$$ and builds in the initial values.

$$\mathcal{L}\left\{f'\right\}(s)=s\,F(s)-f(0),\qquad\mathcal{L}\left\{f''\right\}(s)=s^2F(s)-s\,f(0)-f'(0)$$

In general $$\mathcal{L}\left\{f^{(n)}\right\}(s)=s^nF(s)-\sum_{k=0}^{n-1}s^{n-1-k}f^{(k)}(0).$$ The derivative rule follows from integration by parts.

The **Heaviside step function** $$H$$ is the function that is $$0$$ for $$t<0$$ and $$1$$ for $$t\geq 0.$$

Let $$f$$ have Laplace transform $$F$$ and $$a\geq 0.$$ The **shift theorems** state that multiplying $$f$$ by an exponential shifts its transform and that delaying $$f$$ multiplies its transform by an exponential.

$$\mathcal{L}\left\{e^{at}f(t)\right\}(s)=F\left(s-a\right),\qquad\mathcal{L}\left\{H\left(t-a\right)f\left(t-a\right)\right\}(s)=e^{-as}F(s)$$

The Laplace transform also satisfies $$\mathcal{L}\left\{t\,f(t)\right\}=-F'(s)$$ and $$\mathcal{L}\left\{\int_0^tf(\tau)\,d\tau\right\}=\frac{F(s)}{s}.$$

Let $$f$$ and $$g$$ be functions on $$\left[0,\infty\right).$$ The **convolution** of $$f$$ and $$g$$ is the function

$$\left(f*g\right)(t):=\int_0^tf(\tau)\,g\left(t-\tau\right)d\tau.$$

The convolution is commutative, associative and bilinear.

Let $$f$$ and $$g$$ have Laplace transforms $$F$$ and $$G.$$ The **convolution theorem** states that the Laplace transform of a convolution is the product of the Laplace transforms.

$$\mathcal{L}\left\{f*g\right\}=F\,G$$

An initial value problem for a linear equation with constant coefficients is solved by transforming both sides, which by the derivative rule gives an algebraic equation for $$Y=\mathcal{L}\left\{y\right\},$$ solving for $$Y$$ and inverting, usually by partial fractions and the table of transforms.

Let $$a\,y''+b\,y'+c\,y=g(t)$$ be a linear equation with constant coefficients and $$y(0)=y'(0)=0.$$ The Laplace transform of the solution is

$$Y(s)=\frac{G(s)}{a\,s^2+b\,s+c}.$$

The **transfer function** of the equation is $$\frac{1}{a\,s^2+b\,s+c}.$$ The **impulse response** of the equation is the inverse Laplace transform $$h$$ of the transfer function. By the convolution theorem the solution is $$y=h*g,$$ which is variation of parameters for constant coefficients.

The **Dirac delta** $$\delta$$ is the limit of unit-area pulses of shrinking width, defined by $$\int_{-\infty}^{\infty}\delta\left(t-a\right)f(t)\,dt=f(a)$$ for continuous $$f.$$ The Dirac delta is not a function. Its Laplace transform is $$\mathcal{L}\left\{\delta\left(t-a\right)\right\}=e^{-as},$$ and the response of the equation to $$\delta$$ is the impulse response $$h.$$ The Laplace transform handles discontinuous forcing through the Heaviside step function and impulsive forcing through the Dirac delta.

Let $$f:\mathbb{R}\rightarrow\mathbb{R}$$ be periodic with period $$2\pi$$ and Riemann integrable on $$\left[-\pi,\pi\right].$$ The functions $$1,\cos nx,\sin nx$$ for $$n\in\mathbb{N}$$ are orthogonal with respect to the inner product $$\langle f,g\rangle:=\int_{-\pi}^{\pi}f(x)\,g(x)\,dx,$$ with $$\langle\cos nx,\cos nx\rangle=\langle\sin nx,\sin nx\rangle=\pi$$ for $$n\geq 1$$ and $$\langle 1,1\rangle=2\pi.$$ The **Fourier coefficients** of $$f$$ are its normalised inner products with these functions.

$$a_n:=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx\,dx,\qquad b_n:=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin nx\,dx$$

Let $$f$$ be periodic with period $$2\pi$$ and Fourier coefficients $$a_n,b_n.$$ The **Fourier series** of $$f$$ is the series of functions with these coefficients, whose partial sums $$S_N$$ are trigonometric polynomials.

$$f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos nx+b_n\sin nx\right)$$

Let $$f$$ be periodic with period $$2\pi.$$ The **complex Fourier coefficients** of $$f$$ are $$c_n:=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(x)\,e^{-inx}\,dx$$ for $$n\in\mathbb{Z}.$$ By Euler's formula the Fourier series is equally $$\sum_{n=-\infty}^{\infty}c_ne^{inx},$$ with $$c_{\pm n}=\frac{1}{2}\left(a_n\mp ib_n\right).$$ Fourier series have the following properties:
- for a function of period $$2L$$ the same formulae hold with $$x$$ replaced by $$\frac{\pi x}{L}$$ and integrals over $$\left[-L,L\right]$$ divided by $$L$$ in place of $$\pi;$$
- if $$f$$ is even then $$b_n=0$$ and the Fourier series is a **cosine series**;
- if $$f$$ is odd then $$a_n=0$$ and the Fourier series is a **sine series**;
- a function on $$\left[0,L\right]$$ is expanded in a cosine or sine series by extending it to an even or odd function of period $$2L.$$

Let $$f$$ be periodic with period $$2\pi$$ and Riemann integrable on $$\left[-\pi,\pi\right],$$ and $$\lVert f\rVert_2:=\sqrt{\langle f,f\rangle}.$$ By orthogonality, the partial sum $$S_N$$ is the trigonometric polynomial of degree $$N$$ closest to $$f$$ in the norm $$\lVert\cdot\rVert_2,$$ since $$\lVert f-T\rVert_2^2=\lVert f-S_N\rVert_2^2+\lVert S_N-T\rVert_2^2$$ for every trigonometric polynomial $$T$$ of degree $$N.$$ **Bessel's inequality** states that the sum of the squared Fourier coefficients is bounded by the squared norm of $$f.$$

$$\frac{a_0^2}{2}+\sum_{n=1}^{N}\left(a_n^2+b_n^2\right)\leq\frac{1}{\pi}\lVert f\rVert_2^2$$

Let $$f$$ be periodic with period $$2\pi$$ and Riemann integrable on $$\left[-\pi,\pi\right]$$ with partial sums $$S_N.$$ The Fourier series **converges in mean square** to $$f$$ if and only if $$\lVert f-S_N\rVert_2\rightarrow 0.$$ The Fourier series of every such $$f$$ converges in mean square, so Bessel's inequality becomes **Parseval's identity**.

$$\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)^2\,dx=\frac{a_0^2}{2}+\sum_{n=1}^{\infty}\left(a_n^2+b_n^2\right)$$

The **Riemann–Lebesgue lemma** states that the Fourier coefficients tend to zero, $$a_n,b_n\rightarrow 0$$ as $$n\rightarrow\infty,$$ which follows from Parseval's identity. Mean-square convergence is the density of the trigonometric polynomials in the continuous periodic functions, from the Stone–Weierstrass theorem, extended to integrable functions.

Let $$f$$ be a function and $$x\in\mathbb{R}.$$ The **one-sided limits** of $$f$$ at $$x$$ are the limits $$\lim_{t\rightarrow x^-}f(t)$$ and $$\lim_{t\rightarrow x^+}f(t)$$ of $$f$$ restricted to $$t<x$$ and to $$t>x$$ respectively.

Let $$f$$ be a function on $$\left[-\pi,\pi\right].$$ The function $$f$$ is **piecewise $$C^1$$** on $$\left[-\pi,\pi\right]$$ if and only if $$f$$ and $$f'$$ are continuous except at finitely many points, at each of which both have one-sided limits.

Let $$f$$ be periodic with period $$2\pi$$ and piecewise $$C^1$$ on $$\left[-\pi,\pi\right]$$ with partial sums $$S_N.$$ The **Dirichlet convergence theorem** states that the Fourier series converges at every $$x$$ to the average of the one-sided limits of $$f,$$

$$\lim_{N\rightarrow\infty}S_N(x)=\frac{1}{2}\left(\lim_{t\rightarrow x^-}f(t)+\lim_{t\rightarrow x^+}f(t)\right),$$

which is $$f(x)$$ wherever $$f$$ is continuous, and that the convergence is uniform on every closed interval on which $$f$$ is continuous. Pointwise convergence of Fourier series has the following properties:
- if $$f$$ is continuous and piecewise $$C^1$$ the convergence is uniform on $$\mathbb{R};$$
- the series may be differentiated term by term wherever $$f'$$ is itself piecewise $$C^1;$$
- the series of any piecewise $$C^1$$ function may be integrated term by term;
- if $$f\in C^k$$ is periodic then $$a_n,b_n$$ decay faster than $$n^{-k}.$$

The **Gibbs phenomenon** is the overshoot of the partial sums near a jump of $$f$$ by about $$9\%$$ of the jump, however large $$N$$ is, which is why the convergence is not uniform at a jump. For example, the odd function equal to $$x$$ on $$\left(-\pi,\pi\right)$$ has $$b_n=\frac{2\left(-1\right)^{n+1}}{n},$$ and Parseval's identity gives $$\sum_{n=1}^{\infty}\frac{1}{n^2}=\frac{\pi^2}{6}.$$
