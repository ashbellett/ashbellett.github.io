---
title:  "Series"
description: "Sums of numbers"
---

Let $$(a_n)$$ be a sequence and $$m,n\in\mathbb{N}.$$ The **finite series** $$\sum_{i=m}^n a_i$$ is the sum of the terms $$a_m,a_{m+1},\ldots,a_n,$$ defined recursively with the empty sum equal to zero.

$$\sum_{i=m}^{n} a_i := \begin{cases}
    0 & n<m \\
    \left(\sum_{i=m}^{n-1} a_i\right)+a_n & n\geq m
 \end{cases}
$$

The index $$i$$ is a **dummy variable**, and renaming it does not change the sum.

Let $$(a_n)$$ and $$(b_n)$$ be sequences, $$c\in\mathbb{R},$$ $$m\leq n<p$$ and $$k\in\mathbb{N}.$$ Finite series have the following properties:

$$\sum_{i=m}^{n} a_i+\sum_{i=n+1}^{p} a_i=\sum_{i=m}^{p} a_i$$

$$\sum_{i=m}^{n} a_i=\sum_{j=m+k}^{n+k} a_{j-k}$$

$$\sum_{i=m}^{n} \left(a_i+b_i\right)=\sum_{i=m}^{n} a_i+\sum_{i=m}^{n} b_i$$

$$\sum_{i=m}^{n} c\,a_i=c\sum_{i=m}^{n} a_i$$

$$\left\lvert\sum_{i=m}^{n} a_i\right\rvert\leq\sum_{i=m}^{n} \lvert a_i\rvert$$

$$\mathrm{if}\,\,a_i\leq b_i\,\,\forall\,m\leq i\leq n\,\,\mathrm{then}\,\,\sum_{i=m}^{n} a_i\leq\sum_{i=m}^{n} b_i$$

The fifth property is the **triangle inequality**. Its special case $$\lvert x+y\rvert\leq\lvert x\rvert+\lvert y\rvert$$ for $$x,y\in\mathbb{R}$$ is used throughout real analysis.

Let $$X$$ be a finite set with cardinality $$n,$$ $$f:X\rightarrow\mathbb{R}$$ be a function and $$g:\{1,\ldots,n\}\rightarrow X$$ be a bijection. The **series over the finite set** $$X$$ is the finite series of the values of $$f$$ in the order given by $$g.$$

$$\sum_{x\in X} f(x):=\sum_{i=1}^{n} f\left(g(i)\right)$$

The value does not depend on the choice of bijection $$g,$$ so the order in which the elements of a finite set are summed is irrelevant.

Let $$X$$ and $$Y$$ be finite sets, $$f,h:X\rightarrow\mathbb{R}$$ be functions and $$c\in\mathbb{R}.$$ Series over finite sets have the following properties:

$$\sum_{x\in\varnothing} f(x)=0,\qquad\sum_{x\in\{x_0\}} f(x)=f(x_0)$$

$$\mathrm{if}\,\,X\cap Y=\varnothing\,\,\mathrm{then}\,\,\sum_{x\in X\cup Y} f(x)=\sum_{x\in X} f(x)+\sum_{x\in Y} f(x)$$

$$\sum_{x\in X} \left(f(x)+h(x)\right)=\sum_{x\in X} f(x)+\sum_{x\in X} h(x),\qquad\sum_{x\in X} c\,f(x)=c\sum_{x\in X} f(x)$$

$$\sum_{y\in Y} f\left(g(y)\right)=\sum_{x\in X} f(x)\,\,\mathrm{for}\,\mathrm{any}\,\mathrm{bijection}\,\,g:Y\rightarrow X$$

Let $$X$$ and $$Y$$ be finite sets and $$f:X\times Y\rightarrow\mathbb{R}$$ be a function. **Fubini's theorem for finite series** states that a series over the Cartesian product $$X\times Y$$ equals the iterated series taken in either order.

$$\sum_{(x,y)\in X\times Y} f(x,y)=\sum_{x\in X}\left(\sum_{y\in Y} f(x,y)\right)=\sum_{y\in Y}\left(\sum_{x\in X} f(x,y)\right)$$

Let $$(a_n)$$ be a sequence indexed from $$m\in\mathbb{N}$$ and $$N\geq m.$$ The **partial sum** $$S_N$$ is the finite series of the terms up to index $$N.$$

$$S_N:=\sum_{n=m}^{N} a_n$$

Let $$(a_n)$$ be a sequence indexed from $$m\in\mathbb{N}.$$ The **infinite series** $$\sum_{n=m}^{\infty} a_n$$ is the sequence of partial sums $$(S_N).$$

Let $$\sum_{n=m}^{\infty} a_n$$ be an infinite series and $$S\in\mathbb{R}.$$ The series **converges** to $$S$$ if and only if the sequence of partial sums converges to $$S.$$ The number $$S$$ is the **sum** of the series. The series **diverges** if and only if it does not converge.

$$\sum_{n=m}^{\infty} a_n:=\lim_{N\rightarrow\infty} S_N=\lim_{N\rightarrow\infty}\sum_{n=m}^{N} a_n$$

Changing or removing finitely many terms of a series does not affect whether it converges, although it changes the sum. The starting index is taken to be $$m=1$$ below unless written otherwise.

Let $$\sum_{n=1}^{\infty} a_n$$ be an infinite series. The **Cauchy criterion** states that the series converges if and only if its partial sums form a Cauchy sequence.

$$\forall\varepsilon>0\,\exists N\in\mathbb{N}:\left\lvert\sum_{n=p}^{q} a_n\right\rvert\leq\varepsilon\,\,\forall\,q\geq p\geq N$$

Let $$\sum_{n=1}^{\infty} a_n$$ be an infinite series. The **zero test** states that if the series converges then $$a_n\rightarrow 0$$ as $$n\rightarrow\infty.$$ Equivalently, if $$(a_n)$$ does not converge to $$0$$ then the series diverges. The converse is false: the **harmonic series** $$\sum_{n=1}^{\infty}\frac{1}{n}$$ diverges even though $$\frac{1}{n}\rightarrow 0.$$

Let $$\sum_{n=1}^{\infty} a_n$$ be an infinite series. The series is **absolutely convergent** if and only if the series of absolute values $$\sum_{n=1}^{\infty}\lvert a_n\rvert$$ converges. The series is **conditionally convergent** if and only if it converges but is not absolutely convergent.

Let $$\sum_{n=1}^{\infty} a_n$$ be an absolutely convergent series. The **absolute convergence test** states that the series is convergent and its sum satisfies the triangle inequality.

$$\left\lvert\sum_{n=1}^{\infty} a_n\right\rvert\leq\sum_{n=1}^{\infty}\lvert a_n\rvert$$

Let $$(b_n)$$ be a sequence with $$b_n\geq 0$$ for all $$n.$$ The **alternating series** with terms $$(b_n)$$ is the series $$\sum_{n=1}^{\infty}\left(-1\right)^n b_n,$$ whose terms alternate in sign.

Let $$\sum_{n=1}^{\infty}\left(-1\right)^n b_n$$ be an alternating series. The **alternating series test** states that if $$(b_n)$$ is monotonically decreasing and $$b_n\rightarrow 0$$ then the alternating series converges, and its partial sums satisfy

$$\left\lvert\sum_{n=1}^{\infty}\left(-1\right)^n b_n-\sum_{n=1}^{N}\left(-1\right)^n b_n\right\rvert\leq b_{N+1}\,\,\forall\,N\in\mathbb{N}.$$

The **alternating harmonic series** $$\sum_{n=1}^{\infty}\frac{\left(-1\right)^{n+1}}{n}$$ is therefore convergent but, since the harmonic series diverges, only conditionally convergent.

Let $$\sum_{n=1}^{\infty} a_n=S$$ and $$\sum_{n=1}^{\infty} b_n=T$$ be convergent series and $$c\in\mathbb{R}.$$ The **series laws** state that sums, scalar multiples and tails of convergent series converge as follows.

$$\sum_{n=1}^{\infty}\left(a_n\pm b_n\right)=S\pm T$$

$$\sum_{n=1}^{\infty} c\,a_n=c\,S$$

$$\sum_{n=1}^{\infty} a_n=\sum_{n=1}^{k} a_n+\sum_{n=k+1}^{\infty} a_n\,\,\forall\,k\in\mathbb{N}$$

Let $$\sum_{n=1}^{\infty} a_n$$ be an infinite series. Convergent series have the following properties:
- the series $$\sum_{n=1}^{\infty} a_{n+k}$$ converges if and only if $$\sum_{n=1}^{\infty} a_n$$ converges;
- the sum of a convergent series does not depend on how its terms are grouped;
- the sum of a convergent series can depend on the order of its terms, unless the series is absolutely convergent, in which case every rearrangement of the terms converges to the same sum.

Let $$(b_n)$$ be a sequence. The **telescoping series** of $$(b_n)$$ is the series $$\sum_{n=1}^{\infty}\left(b_n-b_{n+1}\right)$$ whose terms are differences of consecutive terms of $$(b_n).$$ If $$(b_n)$$ converges to $$L$$ then the partial sums collapse and

$$\sum_{n=1}^{\infty}\left(b_n-b_{n+1}\right)=\lim_{N\rightarrow\infty}\left(b_1-b_{N+1}\right)=b_1-L.$$

For example, $$\frac{1}{n(n+1)}=\frac{1}{n}-\frac{1}{n+1}$$ gives $$\sum_{n=1}^{\infty}\frac{1}{n(n+1)}=1.$$

Let $$(a_n)$$ and $$(b_n)$$ be sequences. The **comparison test** states that if $$\lvert a_n\rvert\leq b_n$$ for all $$n$$ and $$\sum_{n=1}^{\infty} b_n$$ converges then $$\sum_{n=1}^{\infty} a_n$$ is absolutely convergent and

$$\left\lvert\sum_{n=1}^{\infty} a_n\right\rvert\leq\sum_{n=1}^{\infty}\lvert a_n\rvert\leq\sum_{n=1}^{\infty} b_n.$$

Conversely, if $$0\leq b_n\leq a_n$$ for all $$n$$ and $$\sum_{n=1}^{\infty} b_n$$ diverges then $$\sum_{n=1}^{\infty} a_n$$ diverges.

Let $$p\in\mathbb{R}.$$ The **$$p$$-series** is the series $$\sum_{n=1}^{\infty}\frac{1}{n^p},$$ which converges if and only if $$p>1.$$ The $$p$$-series is a common series for comparison.

Let $$x\in\mathbb{R}.$$ The **geometric series** with ratio $$x$$ is the series $$\sum_{n=0}^{\infty} x^n.$$ Its partial sums are

$$\sum_{n=0}^{N} x^n=\begin{cases}
    \frac{1-x^{N+1}}{1-x} & x\neq 1 \\
    N+1 & x=1.
 \end{cases}
$$

Since $$x^{N+1}\rightarrow 0$$ if and only if $$\lvert x\rvert<1,$$ the geometric series converges if and only if $$\lvert x\rvert<1,$$ and then

$$\sum_{n=0}^{\infty} x^n=\frac{1}{1-x}.$$

Let $$(a_n)$$ be a sequence such that the limit $$\alpha=\lim_{n\rightarrow\infty}\lvert a_n\rvert^{\frac{1}{n}}$$ exists. The **root test** states that $$\sum_{n=1}^{\infty} a_n$$ is absolutely convergent if $$\alpha<1$$ and divergent if $$\alpha>1.$$ If $$\alpha=1$$ the test is inconclusive.

Let $$(a_n)$$ be a sequence with $$a_n\neq 0$$ for all $$n$$ such that the limit $$\alpha=\lim_{n\rightarrow\infty}\left\lvert\frac{a_{n+1}}{a_n}\right\rvert$$ exists. The **ratio test** states that $$\sum_{n=1}^{\infty} a_n$$ is absolutely convergent if $$\alpha<1$$ and divergent if $$\alpha>1.$$ If $$\alpha=1$$ the test is inconclusive. Both the root and ratio tests compare the series with a geometric series, and the $$p$$-series shows that $$\alpha=1$$ is compatible with either convergence or divergence.

Let $$c\in\mathbb{R}$$ and $$(a_n)$$ be a sequence indexed from $$0.$$ The **power series** centred at $$c$$ with coefficients $$(a_n)$$ is the function of $$x\in\mathbb{R}$$ given by the series

$$\sum_{n=0}^{\infty} a_n\left(x-c\right)^n$$

wherever this series converges.

Let $$\sum_{n=0}^{\infty} a_n\left(x-c\right)^n$$ be a power series. The **radius of convergence** of the power series is the unique $$R\in\left[0,\infty\right]$$ such that the series converges absolutely for all $$x$$ with $$\lvert x-c\rvert<R$$ and diverges for all $$x$$ with $$\lvert x-c\rvert>R.$$ When the limits exist, the root and ratio tests give

$$\frac{1}{R}=\lim_{n\rightarrow\infty}\lvert a_n\rvert^{\frac{1}{n}}=\lim_{n\rightarrow\infty}\left\lvert\frac{a_{n+1}}{a_n}\right\rvert$$

with the conventions $$\frac{1}{0}=\infty$$ and $$\frac{1}{\infty}=0.$$

Let $$\sum_{n=0}^{\infty} a_n\left(x-c\right)^n$$ be a power series with radius of convergence $$R.$$ The **interval of convergence** of the power series is the set of $$x$$ for which the series converges. The interval of convergence contains $$\left(c-R,c+R\right)$$ and may or may not contain the endpoints $$c\pm R.$$ For example, the geometric series is the power series centred at $$0$$ with $$a_n=1$$ and $$R=1.$$

The **exponential series** is the power series centred at $$0$$ with coefficients $$\frac{1}{n!}.$$

$$\exp\left(x\right):=\sum_{n=0}^{\infty}\frac{x^n}{n!}$$

The exponential series has $$R=\infty$$ and converges for every $$x\in\mathbb{R}.$$

Let $$X\subseteq\mathbb{R}$$ and $$f_n:X\rightarrow\mathbb{R}$$ be a sequence of functions indexed by $$n\in\mathbb{N}.$$ The sequence **converges pointwise** to $$f:X\rightarrow\mathbb{R}$$ if and only if $$f_n(x)\rightarrow f(x)$$ for every $$x\in X.$$ Equivalently, for every $$\varepsilon>0$$ and every $$x\in X$$ there exists $$N\in\mathbb{N},$$ which may depend on both $$\varepsilon$$ and $$x,$$ such that $$\lvert f_n(x)-f(x)\rvert\leq\varepsilon$$ for all $$n\geq N.$$

Let $$X\subseteq\mathbb{R}$$ and $$f_n:X\rightarrow\mathbb{R}$$ be a sequence of functions indexed by $$n\in\mathbb{N}.$$ The sequence **converges uniformly** to $$f:X\rightarrow\mathbb{R}$$ if and only if the largest difference between $$f_n$$ and $$f$$ tends to zero.

$$\sup_{x\in X}\lvert f_n(x)-f(x)\rvert\rightarrow 0\,\,\mathrm{as}\,\,n\rightarrow\infty$$

Equivalently, for every $$\varepsilon>0$$ there exists $$N\in\mathbb{N},$$ depending on $$\varepsilon$$ alone, such that $$\lvert f_n(x)-f(x)\rvert\leq\varepsilon$$ for all $$n\geq N$$ and all $$x\in X.$$ Uniform convergence implies pointwise convergence. The converse is false: $$f_n(x)=x^n$$ converges pointwise on $$\left[0,1\right]$$ to the function that is $$0$$ on $$\left[0,1\right)$$ and $$1$$ at $$1,$$ but not uniformly, since $$\sup_x\lvert f_n(x)-f(x)\rvert=1$$ for every $$n.$$

Let $$X\subseteq\mathbb{R}$$ and $$f_n:X\rightarrow\mathbb{R}$$ be a sequence of functions. The **uniform Cauchy criterion** states that $$(f_n)$$ converges uniformly to some function on $$X$$ if and only if

$$\forall\varepsilon>0\,\exists N\in\mathbb{N}:\sup_{x\in X}\lvert f_n(x)-f_m(x)\rvert\leq\varepsilon\,\,\forall\,m,n\geq N.$$

Let $$X\subseteq\mathbb{R}$$ and $$f_n:X\rightarrow\mathbb{R}$$ be a sequence of functions. The **series of functions** $$\sum_{n=1}^{\infty} f_n$$ is the sequence of partial sums $$S_N=\sum_{n=1}^{N} f_n.$$ The series of functions converges pointwise or uniformly on $$X$$ if and only if its sequence of partial sums does.

Let $$X\subseteq\mathbb{R}$$ and $$\sum_{n=1}^{\infty} f_n$$ be a series of functions on $$X.$$ The **Weierstrass M-test** states that if there are constants $$M_n\geq 0$$ with $$\lvert f_n(x)\rvert\leq M_n$$ for all $$x\in X$$ and $$\sum_{n=1}^{\infty} M_n$$ converges then $$\sum_{n=1}^{\infty} f_n$$ converges absolutely at every $$x\in X$$ and uniformly on $$X.$$ By comparison with $$\sum_{n=0}^{\infty}\lvert a_n\rvert r^n,$$ a power series with radius of convergence $$R$$ converges uniformly on every closed interval $$\left[c-r,c+r\right]$$ with $$0\leq r<R.$$ A power series need not converge uniformly on $$\left(c-R,c+R\right):$$ the partial sums of the geometric series are bounded on $$\left(-1,1\right)$$ whereas its sum is not.

A **complex number** is an ordered pair $$z=\left(a,b\right)$$ of real numbers, written $$z=a+ib.$$ The **real part** of $$z$$ is $$a=\mathrm{Re}\,z,$$ the **imaginary part** of $$z$$ is $$b=\mathrm{Im}\,z$$ and the **imaginary unit** is $$i=0+1i.$$ The set of complex numbers is $$\mathbb{C}.$$ Addition and multiplication of complex numbers are defined by

$$\left(a+ib\right)+\left(c+id\right):=\left(a+c\right)+i\left(b+d\right),\qquad\left(a+ib\right)\left(c+id\right):=\left(ac-bd\right)+i\left(ad+bc\right),$$

so that $$i^2=-1.$$ With these operations $$\mathbb{C}$$ is a field that contains $$\mathbb{R}$$ as the complex numbers with imaginary part $$0.$$

Let $$z=a+ib\in\mathbb{C}.$$ The **complex conjugate** of $$z$$ is $$\overline{z}:=a-ib.$$ The **modulus** of $$z$$ is $$\lvert z\rvert:=\sqrt{a^2+b^2}=\sqrt{z\,\overline{z}},$$ which agrees with the absolute value when $$z\in\mathbb{R}.$$ The modulus has the following properties for $$z,w\in\mathbb{C}:$$

$$\lvert z\,w\rvert=\lvert z\rvert\lvert w\rvert,\qquad\lvert z+w\rvert\leq\lvert z\rvert+\lvert w\rvert,\qquad\lvert\mathrm{Re}\,z\rvert,\lvert\mathrm{Im}\,z\rvert\leq\lvert z\rvert\leq\lvert\mathrm{Re}\,z\rvert+\lvert\mathrm{Im}\,z\rvert$$

No ordering of $$\mathbb{C}$$ is compatible with its field operations, so inequalities between complex numbers are inequalities between their moduli.

Let $$\left(z_n\right)$$ be a sequence of complex numbers and $$z\in\mathbb{C}.$$ The sequence $$\left(z_n\right)$$ **converges** to $$z$$ if and only if $$\lvert z_n-z\rvert\rightarrow 0.$$ By the last inequality above, $$z_n\rightarrow z$$ if and only if $$\mathrm{Re}\,z_n\rightarrow\mathrm{Re}\,z$$ and $$\mathrm{Im}\,z_n\rightarrow\mathrm{Im}\,z.$$ Applied to real and imaginary parts, the Cauchy criterion, convergence and absolute convergence of series with the modulus in place of the absolute value, the absolute convergence, comparison, root and ratio tests, the series laws and the rearrangement of absolutely convergent series all carry over to complex sequences and series.

Let $$c\in\mathbb{C}$$ and $$(a_n)$$ be a sequence of complex numbers indexed from $$0.$$ The **complex power series** centred at $$c$$ with coefficients $$(a_n)$$ is the function of $$z\in\mathbb{C}$$ given by $$\sum_{n=0}^{\infty} a_n\left(z-c\right)^n$$ wherever this series converges. A complex power series has a radius of convergence $$R$$ given by the same formula as a real power series. The **disc of convergence** is the set $$\left\{z\in\mathbb{C}:\lvert z-c\rvert<R\right\},$$ on which the series converges absolutely, and the series diverges for $$\lvert z-c\rvert>R.$$

The exponential series converges absolutely for every $$z\in\mathbb{C}.$$ The **exponential function** $$\exp:\mathbb{C}\rightarrow\mathbb{C}$$ is the function defined by the exponential series. The exponential function has the following properties, of which the first is the **exponential law**:

$$\exp\left(z+w\right)=\exp\left(z\right)\exp\left(w\right),\qquad\exp\left(0\right)=1,\qquad\exp\left(-z\right)=\frac{1}{\exp\left(z\right)}\neq 0,\qquad\exp\left(\overline{z}\right)=\overline{\exp\left(z\right)}$$

The exponential law follows from multiplying two exponential series and rearranging the absolutely convergent result. For real $$x$$ the exponential function is real with $$\exp\left(x\right)>0,$$ it is injective on $$\mathbb{R}$$ with image $$\left(0,\infty\right)$$ and $$\exp\left(x\right)\geq 1+x.$$

The **natural logarithm** $$\log_e:\left(0,\infty\right)\rightarrow\mathbb{R}$$ is the inverse function of the exponential function on $$\mathbb{R}.$$ The natural logarithm satisfies $$\log_e\left(xy\right)=\log_e x+\log_e y$$ and $$\log_e 1=0.$$

**Euler's number** is the value of the exponential function at $$1.$$

$$e:=\exp\left(1\right)=\sum_{n=0}^{\infty}\frac{1}{n!}\approx 2.71828$$

By the exponential law $$\exp\left(\frac{p}{q}\right)=e^{\frac{p}{q}}$$ for every rational exponent, so $$e^z:=\exp\left(z\right)$$ is written for every $$z\in\mathbb{C}.$$

Let $$a>0$$ and $$x\in\mathbb{R}.$$ The **real power** $$a^x$$ is the exponential of $$x$$ times the natural logarithm of $$a.$$

$$a^x:=\exp\left(x\log_e a\right)$$

The real power extends the rational powers of $$a.$$

Let $$t\in\mathbb{R}.$$ The **cosine** and **sine** of $$t$$ are the sums of the even and odd parts of the exponential series with alternating signs, which converge absolutely for every $$t.$$

$$\cos t:=\sum_{n=0}^{\infty}\frac{\left(-1\right)^n t^{2n}}{\left(2n\right)!},\qquad\sin t:=\sum_{n=0}^{\infty}\frac{\left(-1\right)^n t^{2n+1}}{\left(2n+1\right)!}$$

Let $$t\in\mathbb{R}.$$ **Euler's formula** states that the exponential of $$it$$ is the complex number with real part $$\cos t$$ and imaginary part $$\sin t.$$

$$e^{it}=\cos t+i\sin t$$

Euler's formula follows from splitting $$\exp\left(it\right)$$ into its even and odd terms and using $$i^{2n}=\left(-1\right)^n.$$ Consequently $$\cos t=\mathrm{Re}\,e^{it}=\frac{e^{it}+e^{-it}}{2}$$ and $$\sin t=\mathrm{Im}\,e^{it}=\frac{e^{it}-e^{-it}}{2i},$$ so $$\cos\left(-t\right)=\cos t$$ and $$\sin\left(-t\right)=-\sin t.$$ The exponential law gives the following identities for $$s,t\in\mathbb{R}$$ and $$n\in\mathbb{N}:$$

$$\cos^2 t+\sin^2 t=\left\lvert e^{it}\right\rvert^2=1$$

$$\cos\left(s+t\right)=\cos s\cos t-\sin s\sin t,\qquad\sin\left(s+t\right)=\sin s\cos t+\cos s\sin t$$

$$\left(\cos t+i\sin t\right)^n=\cos nt+i\sin nt$$

The last identity is **de Moivre's formula**.

Let $$t\in\mathbb{R}$$ with $$\cos t\neq 0.$$ The **tangent** of $$t$$ is the quotient of the sine and the cosine.

$$\tan t:=\frac{\sin t}{\cos t}$$

The cosine has a smallest positive zero. The number $$\pi\approx 3.14159$$ is twice that zero, so that $$\cos\frac{\pi}{2}=0$$ and $$\sin\frac{\pi}{2}=1.$$ Euler's formula then gives $$e^{\frac{i\pi}{2}}=i,$$ $$e^{i\pi}=-1$$ and $$e^{2\pi i}=1,$$ so by the exponential law

$$\exp\left(z+2\pi i\right)=\exp\left(z\right)\,\,\forall\,z\in\mathbb{C}.$$

Let $$f:\mathbb{R}\rightarrow\mathbb{R}$$ be a function and $$T>0.$$ The function $$f$$ is **periodic** with **period** $$T$$ if and only if $$f\left(t+T\right)=f\left(t\right)$$ for all $$t\in\mathbb{R}.$$ The cosine and sine are periodic with period $$2\pi.$$

The **unit circle** is the set $$\left\{z\in\mathbb{C}:\lvert z\rvert=1\right\}.$$ The function $$t\mapsto e^{it}$$ is a bijection from $$\left[0,2\pi\right)$$ onto the unit circle.

Let $$z\in\mathbb{C}$$ be non-zero. The **polar form** of $$z$$ is the unique expression of $$z$$ as its modulus times a point of the unit circle.

$$z=\lvert z\rvert e^{i\theta}=\lvert z\rvert\left(\cos\theta+i\sin\theta\right),\qquad\theta\in\left[0,2\pi\right)$$

The number $$\theta$$ is the **argument** of $$z.$$ In polar form, multiplication multiplies moduli and adds arguments.

Let $$n\geq 1.$$ The **roots of unity** of order $$n$$ are the $$n$$ zeros $$e^{\frac{2\pi ik}{n}},$$ $$k=0,\ldots,n-1,$$ of the complex polynomial $$z^n-1.$$
