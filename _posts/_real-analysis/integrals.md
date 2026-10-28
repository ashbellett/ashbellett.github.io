---
title:  "Integrals"
description: "The space under a function"
---

Let $$I=\left[a,b\right]\subset \mathbb{R}$$ be a closed bounded interval. A **partition** of $$I$$ is a finite set of bounded intervals contained in $$I$$ such that every $$x \in I$$ lies in exactly one of the intervals. The intervals may be open, closed or half-open, and may be single points $$[x,x]=\{x\}.$$ For example, $$\{[0,\tfrac{1}{2}),[\tfrac{1}{2},1]\}$$ is a partition of $$[0,1]$$ whereas $$\{[0,\tfrac{1}{2}],[\tfrac{1}{2},1]\}$$ is not, because $$\tfrac{1}{2}$$ lies in both intervals. The lengths of the intervals in a partition of $$[a,b]$$ sum to $$b-a.$$

Let $$I=\left[a,b\right]$$ be a closed bounded interval and $$P$$ and $$P'$$ be partitions of $$I.$$ The partition $$P'$$ is a **refinement** of $$P$$ if and only if every interval in $$P'$$ is contained in some interval in $$P.$$

Let $$I=\left[a,b\right]$$ be a closed bounded interval and $$P$$ and $$P'$$ be partitions of $$I.$$ The **common refinement** of $$P$$ and $$P'$$ is the partition formed from the non-empty intersections $$J\cap J'$$ of intervals $$J\in P$$ and $$J'\in P'.$$ The common refinement is a refinement of both $$P$$ and $$P'.$$

Let $$I=\left[a,b\right]$$ be a closed bounded interval, $$f:I\rightarrow\mathbb{R}$$ be bounded and $$P$$ be a partition of $$I.$$ The **upper sum** of $$f$$ with respect to $$P$$ is the sum over the non-empty intervals of $$P$$ of the supremum of $$f$$ on each interval weighted by the length of the interval. The **lower sum** of $$f$$ with respect to $$P$$ is the corresponding sum with the infimum in place of the supremum.

$$U(f,P):=\sum_{J\in P,\,J\neq\varnothing}\left(\sup_{x\in J}f(x)\right)\lvert J\rvert$$

$$L(f,P):=\sum_{J\in P,\,J\neq\varnothing}\left(\inf_{x\in J}f(x)\right)\lvert J\rvert$$

Upper and lower sums have the following properties:
- $$L(f,P)\leq U(f,P)$$ for every partition $$P;$$
- refining $$P$$ cannot increase the upper sum or decrease the lower sum;
- by passing to a common refinement, $$L(f,P)\leq U(f,P')$$ for any two partitions $$P$$ and $$P'.$$

Let $$I=\left[a,b\right]$$ be a closed bounded interval and $$f:I\rightarrow\mathbb{R}$$ be bounded. The **upper integral** of $$f$$ on $$I$$ is the infimum of the upper sums over all partitions of $$I,$$ and the **lower integral** of $$f$$ on $$I$$ is the supremum of the lower sums over all partitions of $$I.$$

$$\overline{\int_a^b}f(x)\,dx:=\inf_P U(f,P),\qquad\underline{\int_a^b}f(x)\,dx:=\sup_P L(f,P)$$

Let $$I=\left[a,b\right]$$ be a closed bounded interval and $$f:I\rightarrow\mathbb{R}$$ be bounded. The function $$f$$ is **Riemann integrable** on $$I$$ if and only if its upper and lower integrals are equal. Equivalently, $$f$$ is Riemann integrable on $$I$$ if and only if for every $$\varepsilon>0$$ there exists a partition $$P$$ with $$U(f,P)-L(f,P)\leq\varepsilon.$$ The set of Riemann integrable functions on $$[a,b]$$ is written $$\mathcal{R}[a,b].$$

Let $$I=\left[a,b\right]$$ be a closed bounded interval and $$f\in\mathcal{R}[a,b].$$ The **Riemann integral** of $$f$$ over $$I$$ is the common value of the upper and lower integrals.

$$\int_a^b f(x)\,dx:=\overline{\int_a^b}f(x)\,dx=\underline{\int_a^b}f(x)\,dx$$

The function $$f$$ is the **integrand**, the numbers $$a$$ and $$b$$ are the **limits of integration** and $$x$$ is a dummy variable.

Let $$I=\left[a,b\right]$$ be a closed bounded interval and $$P$$ be a partition of $$I.$$ A **tagged partition** is the partition $$P$$ together with a point $$\xi_J\in J$$ for each non-empty $$J\in P.$$

Let $$I=\left[a,b\right]$$ be a closed bounded interval, $$f:I\rightarrow\mathbb{R}$$ be bounded and $$P$$ be a tagged partition of $$I.$$ The **Riemann sum** of $$f$$ with respect to $$P$$ is the sum of the values of $$f$$ at the tags weighted by the lengths of the intervals.

$$\sum_{J\in P,\,J\neq\varnothing}f\left(\xi_J\right)\lvert J\rvert$$

Every Riemann sum lies between $$L(f,P)$$ and $$U(f,P),$$ so if $$f\in\mathcal{R}[a,b]$$ then the Riemann sums converge to $$\int_a^b f(x)\,dx$$ as the length of the longest interval in $$P$$ tends to $$0.$$

Riemann integrable functions have the following properties:
- if $$f:[a,b]\rightarrow\mathbb{R}$$ is continuous, or bounded and monotonic, or bounded with finitely many discontinuities, then $$f\in\mathcal{R}[a,b];$$
- not every bounded function is Riemann integrable: the function on $$[0,1]$$ equal to $$1$$ at rational numbers and $$0$$ at irrational numbers has lower integral $$0$$ and upper integral $$1.$$

Let $$f,g\in\mathcal{R}[a,b],$$ $$c\in\mathbb{R}$$ and $$a<d<b.$$ The Riemann integral has the following properties:

$$\int_a^b\left(f(x)+g(x)\right)dx=\int_a^b f(x)\,dx+\int_a^b g(x)\,dx,\qquad\int_a^b c\,f(x)\,dx=c\int_a^b f(x)\,dx$$

$$\mathrm{if}\,\,f(x)\leq g(x)\,\,\forall\,x\in[a,b]\,\,\mathrm{then}\,\,\int_a^b f(x)\,dx\leq\int_a^b g(x)\,dx$$

$$\left\lvert\int_a^b f(x)\,dx\right\rvert\leq\int_a^b\lvert f(x)\rvert\,dx$$

$$\int_a^b f(x)\,dx=\int_a^d f(x)\,dx+\int_d^b f(x)\,dx$$

$$\left(b-a\right)\inf_{x\in[a,b]}f(x)\leq\int_a^b f(x)\,dx\leq\left(b-a\right)\sup_{x\in[a,b]}f(x)$$

The functions $$f\,g,$$ $$\lvert f\rvert$$ and $$\max\{f,g\}$$ are also in $$\mathcal{R}[a,b].$$ By convention $$\int_a^a f(x)\,dx=0$$ and $$\int_b^a f(x)\,dx=-\int_a^b f(x)\,dx,$$ so that the additivity property holds for any ordering of $$a,$$ $$b$$ and $$d.$$

Let $$f_n\in\mathcal{R}[a,b]$$ be a sequence of functions that converges uniformly to $$f$$ on $$[a,b].$$ Then $$f\in\mathcal{R}[a,b]$$ and the integrals converge.

$$\int_a^b f_n(x)\,dx\rightarrow\int_a^b f(x)\,dx$$

A uniformly convergent series of integrable functions may therefore be integrated term by term. In particular a power series may be integrated term by term over any closed interval inside its interval of convergence.

Let $$f:[a,b]\rightarrow\mathbb{R}$$ be continuous. The **mean value theorem for integrals** states that $$f$$ equals its average value at some point of $$[a,b].$$

$$\exists\,c\in[a,b] : f(c)=\frac{1}{b-a}\int_a^b f(x)\,dx$$

Let $$f\in\mathcal{R}[a,b].$$ The **integral function** of $$f$$ is the function $$F:[a,b]\rightarrow\mathbb{R}$$ obtained by integrating $$f$$ up to a variable upper limit.

$$F(x):=\int_a^x f(t)\,dt$$

Let $$f\in\mathcal{R}[a,b]$$ with integral function $$F.$$ The **first fundamental theorem of calculus** states that $$F$$ is Lipschitz continuous on $$[a,b]$$ and that $$F$$ is differentiable at every $$x_0\in[a,b]$$ at which $$f$$ is continuous, with derivative $$f(x_0).$$

$$F'(x_0)=f(x_0)$$

Let $$f:[a,b]\rightarrow\mathbb{R}$$ be a function. An **antiderivative** or **primitive** of $$f$$ on $$[a,b]$$ is a function $$F:[a,b]\rightarrow\mathbb{R}$$ that is differentiable on $$[a,b]$$ with $$F'=f.$$ Antiderivatives have the following properties:
- by the mean value theorem, any two antiderivatives of $$f$$ on $$[a,b]$$ differ by a constant;
- by the first fundamental theorem of calculus, every continuous function on $$[a,b]$$ has an antiderivative.

Let $$f:[a,b]\rightarrow\mathbb{R}$$ be a function with an antiderivative $$F.$$ The **indefinite integral** of $$f,$$ written $$\int f(x)\,dx=F(x)+C,$$ is the family of all antiderivatives of $$f.$$ The number $$C\in\mathbb{R}$$ is the **constant of integration**.

Let $$f\in\mathcal{R}[a,b]$$ and $$F$$ be an antiderivative of $$f$$ on $$[a,b].$$ The **second fundamental theorem of calculus** states that the integral of $$f$$ is the net change in $$F.$$

$$\int_a^b f(x)\,dx=F(b)-F(a)=:\Big[F(x)\Big]_a^b$$

Together the two fundamental theorems state that differentiation and integration are inverse operations, up to a constant. The following **common antiderivatives** are valid on any interval where the integrand is defined:

$$\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\,\,\left(n\neq -1\right),\qquad\int\frac{1}{x}\,dx=\log_e\lvert x\rvert+C,\qquad\int e^x\,dx=e^x+C$$

$$\int\sin x\,dx=-\cos x+C,\qquad\int\cos x\,dx=\sin x+C$$

Let $$f,g\in C^1[a,b].$$ **Integration by parts** is the product rule in integral form.

$$\int_a^b f(x)\,g'(x)\,dx=\Big[f(x)\,g(x)\Big]_a^b-\int_a^b f'(x)\,g(x)\,dx$$

Let $$\varphi\in C^1[\alpha,\beta]$$ have image $$\varphi([\alpha,\beta])\subseteq[a,b]$$ and $$f$$ be continuous on $$[a,b].$$ **Integration by substitution** is the chain rule in integral form.

$$\int_{\alpha}^{\beta}f\left(\varphi(t)\right)\varphi'(t)\,dt=\int_{\varphi(\alpha)}^{\varphi(\beta)}f(x)\,dx$$

Let $$g:[a,\infty)\rightarrow\mathbb{R}$$ be a function and $$L\in\mathbb{R}.$$ The function $$g$$ has the **limit** $$L$$ as $$c\rightarrow\infty,$$ written $$\lim_{c\rightarrow\infty}g(c)=L,$$ if and only if for every $$\varepsilon>0$$ there exists $$M$$ such that $$\lvert g(c)-L\rvert\leq\varepsilon$$ for all $$c>M.$$

Let $$f:[a,\infty)\rightarrow\mathbb{R}$$ be a function with $$f\in\mathcal{R}[a,c]$$ for every $$c>a.$$ The **improper integral** of $$f$$ over $$[a,\infty)$$ is the limit of the integrals over $$[a,c]$$ as $$c\rightarrow\infty.$$

$$\int_a^{\infty}f(x)\,dx:=\lim_{c\rightarrow\infty}\int_a^c f(x)\,dx$$

The improper integral **converges** if and only if this limit exists, and **diverges** otherwise. The improper integral $$\int_{-\infty}^b f(x)\,dx$$ is defined in the same way. The improper integral $$\int_{-\infty}^{\infty}f(x)\,dx=\int_{-\infty}^d f(x)\,dx+\int_d^{\infty}f(x)\,dx$$ converges if and only if both integrals on the right converge for some, and hence every, $$d\in\mathbb{R}.$$

Let $$f:(a,b]\rightarrow\mathbb{R}$$ be a function with $$f\in\mathcal{R}[c,b]$$ for every $$c\in(a,b),$$ which allows $$f$$ to be unbounded near $$a.$$ The **improper integral** of $$f$$ over $$(a,b]$$ is the limit of the integrals over $$[c,b]$$ as $$c$$ decreases to $$a.$$

$$\int_a^b f(x)\,dx:=\lim_{c\rightarrow a,\,c>a}\int_c^b f(x)\,dx$$

The improper integral of a function unbounded near $$b$$ is defined in the same way. For example,

$$\int_1^{\infty}\frac{1}{x^p}\,dx=\frac{1}{p-1}\,\,\mathrm{converges}\,\,\mathrm{if}\,\mathrm{and}\,\mathrm{only}\,\mathrm{if}\,\,p>1$$

$$\int_0^1\frac{1}{x^p}\,dx=\frac{1}{1-p}\,\,\mathrm{converges}\,\,\mathrm{if}\,\mathrm{and}\,\mathrm{only}\,\mathrm{if}\,\,p<1.$$

Let $$\int f(x)\,dx$$ be an improper integral. The improper integral is **absolutely convergent** if and only if $$\int\lvert f(x)\rvert\,dx$$ converges. An absolutely convergent improper integral converges.

Let $$f$$ and $$g$$ be functions on the same range of integration. The **comparison test for integrals** states that if $$\lvert f(x)\rvert\leq g(x)$$ on the range of integration and $$\int g(x)\,dx$$ converges then $$\int f(x)\,dx$$ is absolutely convergent.

The **Gaussian integral** is the improper integral of $$e^{-x^2}$$ over $$\mathbb{R}.$$

$$\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt{\pi}$$

A **rectangle** in $$\mathbb{R}^n$$ is a Cartesian product $$R=\left[a_1,b_1\right]\times\cdots\times\left[a_n,b_n\right]$$ of $$n$$ closed bounded intervals. The **volume** of $$R$$ is the product of the lengths of its sides.

$$\lvert R\rvert:=\prod_{i=1}^{n}\left(b_i-a_i\right)$$

Let $$R=\left[a_1,b_1\right]\times\cdots\times\left[a_n,b_n\right]$$ be a rectangle. A **grid partition** of $$R$$ is a set of rectangles of the form $$J_1\times\cdots\times J_n$$ where $$J_i$$ ranges over the intervals of a partition of $$\left[a_i,b_i\right]$$ for each $$i.$$

Let $$R\subset\mathbb{R}^n$$ be a rectangle and $$f:R\rightarrow\mathbb{R}$$ be bounded. The upper and lower sums of $$f$$ with respect to a grid partition, the upper and lower integrals of $$f$$ and the **multiple integral** of $$f$$ over $$R,$$ written $$\int_R f(\underline{x})\,d\underline{x},$$ are defined exactly as in the univariate case with lengths of intervals replaced by volumes of rectangles. The multiple integral has the following properties:
- continuous functions on $$R$$ are integrable;
- the multiple integral is linear and monotonic;
- the multiple integral is additive over rectangles that overlap only on their boundaries.

Let $$D\subseteq\mathbb{R}^n.$$ The **indicator function** of $$D$$ is the function $$\mathbf{1}_D:\mathbb{R}^n\rightarrow\{0,1\}$$ that is $$1$$ on $$D$$ and $$0$$ elsewhere.

Let $$D\subseteq\mathbb{R}^n$$ be a bounded set, $$R$$ be a rectangle containing $$D$$ and $$f:D\rightarrow\mathbb{R}$$ be a function. The **integral** of $$f$$ over $$D$$ is the integral over $$R$$ of $$f$$ multiplied by the indicator function of $$D,$$ whenever this integral exists.

$$\int_D f(\underline{x})\,d\underline{x}:=\int_R f(\underline{x})\,\mathbf{1}_D(\underline{x})\,d\underline{x}$$

The **volume** of $$D$$ is $$\int_D 1\,d\underline{x}.$$

Let $$R=[a,b]\times[c,d]$$ be a rectangle in $$\mathbb{R}^2$$ and $$f:R\rightarrow\mathbb{R}$$ be continuous. The **iterated integrals** of $$f$$ over $$R$$ are the integrals obtained by integrating one variable at a time in either order. **Fubini's theorem** states that the multiple integral of $$f$$ equals both iterated integrals.

$$\int_R f(x,y)\,d(x,y)=\int_a^b\left(\int_c^d f(x,y)\,dy\right)dx=\int_c^d\left(\int_a^b f(x,y)\,dx\right)dy$$

Fubini's theorem extends to continuous functions on rectangles in $$\mathbb{R}^n,$$ which can be integrated one coordinate at a time in any order, and to integrable functions whose iterated integrals exist. On a non-rectangular region the limits of the inner integral depend on the outer variable. For example, if $$D=\{(x,y):a\leq x\leq b,\,g_1(x)\leq y\leq g_2(x)\}$$ for continuous $$g_1\leq g_2$$ then $$\int_D f(x,y)\,d(x,y)=\int_a^b\int_{g_1(x)}^{g_2(x)}f(x,y)\,dy\,dx.$$

Let $$U,V\subseteq\mathbb{R}^n$$ be open sets, $$\underline{\varphi}:U\rightarrow V$$ be a bijection such that $$\underline{\varphi}$$ and $$\underline{\varphi}^{-1}$$ are both continuously differentiable and $$f:V\rightarrow\mathbb{R}$$ be integrable. The **change of variables theorem** states that

$$\int_V f(\underline{y})\,d\underline{y}=\int_U f\left(\underline{\varphi}(\underline{x})\right)\left\lvert\det J_{\underline{\varphi}}(\underline{x})\right\rvert\,d\underline{x}.$$

The factor $$\left\lvert\det J_{\underline{\varphi}}(\underline{x})\right\rvert,$$ the absolute value of the determinant of the Jacobian matrix of $$\underline{\varphi},$$ is the factor by which $$\underline{\varphi}$$ scales volume near $$\underline{x}.$$ In two dimensions this factor is

$$\left\lvert\det J_{\underline{\varphi}}(\underline{x})\right\rvert=\left\lvert\frac{\partial\varphi_1}{\partial x_1}\frac{\partial\varphi_2}{\partial x_2}-\frac{\partial\varphi_1}{\partial x_2}\frac{\partial\varphi_2}{\partial x_1}\right\rvert.$$

**Polar coordinates** are the change of variables $$\underline{\varphi}(r,\theta)=\left(r\cos\theta,r\sin\theta\right)$$ on $$\mathbb{R}^2,$$ which has $$\left\lvert\det J_{\underline{\varphi}}(r,\theta)\right\rvert=r,$$ so that

$$\int_{\mathbb{R}^2}f(x,y)\,d(x,y)=\int_0^{2\pi}\int_0^{\infty}f\left(r\cos\theta,r\sin\theta\right)r\,dr\,d\theta.$$

Applied to $$f(x,y)=e^{-x^2-y^2},$$ polar coordinates evaluate the Gaussian integral.
