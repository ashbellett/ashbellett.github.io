---
layout: post
category: "real-analysis"
title:  "Integrals"
tags: ["real", "analysis", "integral"]
description: "The space under a function"
---

Let $$I=\left[a,b\right]\subset \mathbb{R}$$ be a closed interval. A **partition** of $$I$$ is a finite set of bounded intervals contained in $$I$$ such that every $$x \in I$$ lies in exactly one of the intervals. The intervals may be open, closed or half-open, and may be single points $$[x,x]=\{x\}.$$ For example, $$\{[0,\tfrac{1}{2}),[\tfrac{1}{2},1]\}$$ is a partition of $$[0,1]$$ whereas $$\{[0,\tfrac{1}{2}],[\tfrac{1}{2},1]\}$$ is not, because $$\tfrac{1}{2}$$ lies in both intervals.

Let $$P$$ and $$P'$$ be partitions of $$I.$$ $$P'$$ is a **refinement** of $$P$$ if and only if every interval in $$P'$$ is contained in some interval in $$P.$$ Any two partitions have a **common refinement**, the partition formed from the non-empty intersections $$J\cap J'$$ of intervals $$J\in P$$ and $$J'\in P'.$$ The length of an interval $$J$$ is written $$\lvert J\rvert,$$ and the lengths of the intervals in a partition of $$[a,b]$$ sum to $$b-a.$$

Let $$f:I\rightarrow\mathbb{R}$$ be bounded and $$P$$ be a partition of $$I.$$ The **upper sum** and **lower sum** of $$f$$ with respect to $$P$$ are the sums over the non-empty intervals of $$P$$ of the largest and smallest values of $$f$$ on each interval weighted by its length.

$$U(f,P):=\sum_{J\in P,\,J\neq\varnothing}\left(\sup_{x\in J}f(x)\right)\lvert J\rvert$$

$$L(f,P):=\sum_{J\in P,\,J\neq\varnothing}\left(\inf_{x\in J}f(x)\right)\lvert J\rvert$$

$$L(f,P)\leq U(f,P)$$ for every partition $$P,$$ refining $$P$$ cannot increase the upper sum or decrease the lower sum and, by passing to a common refinement, $$L(f,P)\leq U(f,P')$$ for any two partitions $$P$$ and $$P'.$$

The **upper integral** and **lower integral** of $$f$$ on $$I$$ are the infimum of the upper sums and the supremum of the lower sums over all partitions $$P$$ of $$I.$$

$$\overline{\int_a^b}f(x)\,dx:=\inf_P U(f,P),\qquad\underline{\int_a^b}f(x)\,dx:=\sup_P L(f,P)$$

The function $$f$$ is **Riemann integrable** on $$I$$ if and only if its upper and lower integrals are equal, and their common value is the **Riemann integral** of $$f$$ over $$I.$$

$$\int_a^b f(x)\,dx:=\overline{\int_a^b}f(x)\,dx=\underline{\int_a^b}f(x)\,dx$$

The function $$f$$ is the **integrand**, $$a$$ and $$b$$ are the **limits of integration** and $$x$$ is a dummy variable. The set of Riemann integrable functions on $$[a,b]$$ is written $$\mathcal{R}[a,b].$$ Equivalently, $$f\in\mathcal{R}[a,b]$$ if and only if for every $$\varepsilon>0$$ there exists a partition $$P$$ with $$U(f,P)-L(f,P)\leq\varepsilon.$$

A **tagged partition** is a partition $$P$$ together with a point $$\xi_J\in J$$ for each non-empty $$J\in P,$$ and the corresponding **Riemann sum** is

$$\sum_{J\in P,\,J\neq\varnothing}f\left(\xi_J\right)\lvert J\rvert.$$

Every Riemann sum lies between $$L(f,P)$$ and $$U(f,P),$$ so if $$f\in\mathcal{R}[a,b]$$ then the Riemann sums converge to $$\int_a^b f(x)\,dx$$ as the length of the longest interval in $$P$$ tends to $$0.$$

If $$f:[a,b]\rightarrow\mathbb{R}$$ is continuous, or bounded and monotonic, or bounded with finitely many discontinuities, then $$f\in\mathcal{R}[a,b].$$ Not every bounded function is Riemann integrable: the function on $$[0,1]$$ equal to $$1$$ at rational numbers and $$0$$ at irrational numbers has lower integral $$0$$ and upper integral $$1.$$

Let $$f,g\in\mathcal{R}[a,b],$$ $$c\in\mathbb{R}$$ and $$a<d<b.$$ The Riemann integral has the following properties:

$$\int_a^b\left(f(x)+g(x)\right)dx=\int_a^b f(x)\,dx+\int_a^b g(x)\,dx,\qquad\int_a^b c\,f(x)\,dx=c\int_a^b f(x)\,dx$$

$$\mathrm{if}\,\,f(x)\leq g(x)\,\,\forall\,x\in[a,b]\,\,\mathrm{then}\,\,\int_a^b f(x)\,dx\leq\int_a^b g(x)\,dx$$

$$\left\lvert\int_a^b f(x)\,dx\right\rvert\leq\int_a^b\lvert f(x)\rvert\,dx$$

$$\int_a^b f(x)\,dx=\int_a^d f(x)\,dx+\int_d^b f(x)\,dx$$

$$\left(b-a\right)\inf_{x\in[a,b]}f(x)\leq\int_a^b f(x)\,dx\leq\left(b-a\right)\sup_{x\in[a,b]}f(x)$$

The functions $$f\,g,$$ $$\lvert f\rvert$$ and $$\max\{f,g\}$$ are also in $$\mathcal{R}[a,b].$$ By convention $$\int_a^a f(x)\,dx=0$$ and $$\int_b^a f(x)\,dx=-\int_a^b f(x)\,dx,$$ so that the additivity property holds for any ordering of $$a,$$ $$b$$ and $$d.$$ The **mean value theorem for integrals** states that if $$f$$ is continuous on $$[a,b]$$ then there exists $$c\in[a,b]$$ at which $$f$$ equals its average value.

$$f(c)=\frac{1}{b-a}\int_a^b f(x)\,dx$$

Let $$f\in\mathcal{R}[a,b]$$ and define $$F:[a,b]\rightarrow\mathbb{R}$$ by integrating $$f$$ up to a variable upper limit.

$$F(x):=\int_a^x f(t)\,dt$$

The **first fundamental theorem of calculus** states that $$F$$ is Lipschitz continuous on $$[a,b]$$ and, at every $$x_0\in[a,b]$$ at which $$f$$ is continuous, $$F$$ is differentiable with

$$F'(x_0)=f(x_0).$$

Let $$f:[a,b]\rightarrow\mathbb{R}$$ be a function. An **antiderivative** or **primitive** of $$f$$ on $$[a,b]$$ is a function $$F:[a,b]\rightarrow\mathbb{R}$$ that is differentiable on $$[a,b]$$ with $$F'=f.$$ By the mean value theorem any two antiderivatives of $$f$$ on $$[a,b]$$ differ by a constant, and the **indefinite integral** $$\int f(x)\,dx=F(x)+C$$ denotes the family of all antiderivatives, where $$C\in\mathbb{R}$$ is the **constant of integration**. The first fundamental theorem shows that every continuous function on $$[a,b]$$ has an antiderivative.

The **second fundamental theorem of calculus** states that if $$f\in\mathcal{R}[a,b]$$ and $$F$$ is an antiderivative of $$f$$ on $$[a,b]$$ then the integral of $$f$$ is the net change in $$F.$$

$$\int_a^b f(x)\,dx=F(b)-F(a)=:\Big[F(x)\Big]_a^b$$

Together the two theorems state that differentiation and integration are inverse operations, up to a constant. Some common antiderivatives, valid on any interval where the integrand is defined, are:

$$\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\,\,\left(n\neq -1\right),\qquad\int\frac{1}{x}\,dx=\log_e\lvert x\rvert+C,\qquad\int e^x\,dx=e^x+C$$

$$\int\sin x\,dx=-\cos x+C,\qquad\int\cos x\,dx=\sin x+C.$$

Let $$f,g\in C^1[a,b].$$ **Integration by parts** is the product rule in integral form.

$$\int_a^b f(x)\,g'(x)\,dx=\Big[f(x)\,g(x)\Big]_a^b-\int_a^b f'(x)\,g(x)\,dx$$

Let $$\varphi\in C^1[\alpha,\beta]$$ have image $$\varphi([\alpha,\beta])\subseteq[a,b]$$ and $$f$$ be continuous on $$[a,b].$$ **Integration by substitution** is the chain rule in integral form.

$$\int_{\alpha}^{\beta}f\left(\varphi(t)\right)\varphi'(t)\,dt=\int_{\varphi(\alpha)}^{\varphi(\beta)}f(x)\,dx$$

Let $$f:[a,\infty)\rightarrow\mathbb{R}$$ be a function with $$f\in\mathcal{R}[a,c]$$ for every $$c>a.$$ The **improper integral** of $$f$$ over $$[a,\infty)$$ is the limit of the integrals over $$[a,c]$$ as $$c$$ grows without bound,

$$\int_a^{\infty}f(x)\,dx:=\lim_{c\rightarrow\infty}\int_a^c f(x)\,dx,$$

where $$\lim_{c\rightarrow\infty}g(c)=L$$ means that for every $$\varepsilon>0$$ there exists $$M$$ such that $$\lvert g(c)-L\rvert\leq\varepsilon\,\,\forall\,c>M.$$ The improper integral **converges** if this limit exists and **diverges** otherwise. The improper integral $$\int_{-\infty}^b f(x)\,dx$$ is defined in the same way, and $$\int_{-\infty}^{\infty}f(x)\,dx=\int_{-\infty}^d f(x)\,dx+\int_d^{\infty}f(x)\,dx$$ converges if and only if both integrals on the right converge for some, and hence every, $$d\in\mathbb{R}.$$

Let $$f:(a,b]\rightarrow\mathbb{R}$$ be a function with $$f\in\mathcal{R}[c,b]$$ for every $$c\in(a,b),$$ which allows $$f$$ to be unbounded near $$a.$$ The improper integral of $$f$$ over $$(a,b]$$ is

$$\int_a^b f(x)\,dx:=\lim_{c\rightarrow a,\,c>a}\int_c^b f(x)\,dx$$

and the improper integral of a function unbounded near $$b$$ is defined in the same way. For example,

$$\int_1^{\infty}\frac{1}{x^p}\,dx=\frac{1}{p-1}\,\,\mathrm{converges}\,\,\mathrm{if}\,\mathrm{and}\,\mathrm{only}\,\mathrm{if}\,\,p>1,\qquad\int_0^1\frac{1}{x^p}\,dx=\frac{1}{1-p}\,\,\mathrm{converges}\,\,\mathrm{if}\,\mathrm{and}\,\mathrm{only}\,\mathrm{if}\,\,p<1.$$

An improper integral $$\int f(x)\,dx$$ is **absolutely convergent** if $$\int\lvert f(x)\rvert\,dx$$ converges, which implies that $$\int f(x)\,dx$$ converges. The **comparison test for integrals** states that if $$\lvert f(x)\rvert\leq g(x)$$ on the range of integration and $$\int g(x)\,dx$$ converges then $$\int f(x)\,dx$$ is absolutely convergent. The **Gaussian integral** is a frequently used improper integral.

$$\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt{\pi}$$

Let $$R=\left[a_1,b_1\right]\times\cdots\times\left[a_n,b_n\right]\subset\mathbb{R}^n$$ be a **rectangle**, the Cartesian product of $$n$$ closed bounded intervals, with **volume** $$\lvert R\rvert:=\prod_{i=1}^{n}\left(b_i-a_i\right).$$ A **grid partition** of $$R$$ is a set of rectangles of the form $$J_1\times\cdots\times J_n$$ where $$J_i$$ ranges over the intervals of a partition of $$\left[a_i,b_i\right]$$ for each $$i.$$ Let $$f:R\rightarrow\mathbb{R}$$ be bounded. The upper and lower sums of $$f$$ with respect to a grid partition, the upper and lower integrals and the **multiple integral** of $$f$$ over $$R,$$ written $$\int_R f(\underline{x})\,d\underline{x},$$ are defined exactly as in the univariate case with lengths of intervals replaced by volumes of rectangles. Continuous functions on $$R$$ are integrable and the multiple integral is linear, monotonic and additive over rectangles that overlap only on their boundaries.

Let $$D\subseteq\mathbb{R}^n$$ be a bounded set, $$R$$ be a rectangle containing $$D$$ and $$\mathbf{1}_D:\mathbb{R}^n\rightarrow\{0,1\}$$ be the **indicator function** of $$D,$$ which is $$1$$ on $$D$$ and $$0$$ elsewhere. The integral of $$f$$ over $$D$$ is the integral over $$R$$ of $$f$$ restricted to $$D,$$ whenever this integral exists.

$$\int_D f(\underline{x})\,d\underline{x}:=\int_R f(\underline{x})\,\mathbf{1}_D(\underline{x})\,d\underline{x}$$

The volume of $$D$$ is $$\int_D 1\,d\underline{x}.$$

**Fubini's theorem** states that if $$f$$ is continuous on $$R=[a,b]\times[c,d]$$ then its multiple integral equals the **iterated integrals** taken in either order.

$$\int_R f(x,y)\,d(x,y)=\int_a^b\left(\int_c^d f(x,y)\,dy\right)dx=\int_c^d\left(\int_a^b f(x,y)\,dx\right)dy$$

The theorem extends to continuous functions on rectangles in $$\mathbb{R}^n,$$ which can be integrated one coordinate at a time in any order, and to integrable functions whose iterated integrals exist. On a non-rectangular region the limits of the inner integral depend on the outer variable; for example, if $$D=\{(x,y):a\leq x\leq b,\,g_1(x)\leq y\leq g_2(x)\}$$ for continuous $$g_1\leq g_2$$ then $$\int_D f(x,y)\,d(x,y)=\int_a^b\int_{g_1(x)}^{g_2(x)}f(x,y)\,dy\,dx.$$

Let $$U,V\subseteq\mathbb{R}^n$$ be open sets and $$\underline{\varphi}:U\rightarrow V$$ be a bijection such that $$\underline{\varphi}$$ and $$\underline{\varphi}^{-1}$$ are both continuously differentiable. The **change of variables theorem** states that for integrable $$f:V\rightarrow\mathbb{R}$$

$$\int_V f(\underline{y})\,d\underline{y}=\int_U f\left(\underline{\varphi}(\underline{x})\right)\left\lvert\det J_{\underline{\varphi}}(\underline{x})\right\rvert\,d\underline{x}$$

where $$\left\lvert\det J_{\underline{\varphi}}(\underline{x})\right\rvert,$$ the absolute value of the determinant of the Jacobian matrix of $$\underline{\varphi}$$ that is formalised in the linear algebra notes, is the factor by which $$\underline{\varphi}$$ scales volume near $$\underline{x}.$$ In two dimensions this factor is

$$\left\lvert\det J_{\underline{\varphi}}(\underline{x})\right\rvert=\left\lvert\frac{\partial\varphi_1}{\partial x_1}\frac{\partial\varphi_2}{\partial x_2}-\frac{\partial\varphi_1}{\partial x_2}\frac{\partial\varphi_2}{\partial x_1}\right\rvert.$$

For example, the **polar coordinates** $$\underline{\varphi}(r,\theta)=\left(r\cos\theta,r\sin\theta\right)$$ have $$\left\lvert\det J_{\underline{\varphi}}(r,\theta)\right\rvert=r,$$ so $$\int_{\mathbb{R}^2}f(x,y)\,d(x,y)=\int_0^{2\pi}\int_0^{\infty}f\left(r\cos\theta,r\sin\theta\right)r\,dr\,d\theta,$$ which applied to $$f(x,y)=e^{-x^2-y^2}$$ evaluates the Gaussian integral.
