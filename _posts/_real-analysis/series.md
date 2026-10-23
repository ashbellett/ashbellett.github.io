---
layout: post
category: "real-analysis"
title:  "Series"
tags: ["real", "analysis", "series"]
description: "Sums of numbers"
---

Let $$(a_n)$$ be a sequence and $$m,n\in\mathbb{N}.$$ The **finite series** $$\sum_{i=m}^n a_i$$ is the sum of the terms $$a_m,a_{m+1},\ldots,a_n$$ and is defined recursively, with the empty sum equal to zero.

$$\sum_{i=m}^{n} a_i := \begin{cases}
    0 & n<m \\
    \left(\sum_{i=m}^{n-1} a_i\right)+a_n & n\geq m
 \end{cases}
$$

The index $$i$$ is a **dummy variable** and renaming it does not change the sum.

Finite series have the following properties for sequences $$(a_n),(b_n),$$ $$c\in\mathbb{R}$$ and $$m\leq n<p$$ and $$k\in\mathbb{N}:$$

$$\sum_{i=m}^{n} a_i+\sum_{i=n+1}^{p} a_i=\sum_{i=m}^{p} a_i$$

$$\sum_{i=m}^{n} a_i=\sum_{j=m+k}^{n+k} a_{j-k}$$

$$\sum_{i=m}^{n} \left(a_i+b_i\right)=\sum_{i=m}^{n} a_i+\sum_{i=m}^{n} b_i$$

$$\sum_{i=m}^{n} c\,a_i=c\sum_{i=m}^{n} a_i$$

$$\left\lvert\sum_{i=m}^{n} a_i\right\rvert\leq\sum_{i=m}^{n} \lvert a_i\rvert$$

$$\mathrm{if}\,\,a_i\leq b_i\,\,\forall\,m\leq i\leq n\,\,\mathrm{then}\,\,\sum_{i=m}^{n} a_i\leq\sum_{i=m}^{n} b_i$$

The fifth property is the **triangle inequality**, and the special case $$\lvert x+y\rvert\leq\lvert x\rvert+\lvert y\rvert$$ for $$x,y\in\mathbb{R}$$ is used throughout real analysis.

Let $$X$$ be a finite set with cardinality $$n$$ and $$f:X\rightarrow\mathbb{R}$$ be a function. The **series over the finite set** $$X$$ is defined through any bijection $$g:\{1,\ldots,n\}\rightarrow X.$$

$$\sum_{x\in X} f(x):=\sum_{i=1}^{n} f\left(g(i)\right)$$

The value does not depend on the choice of bijection $$g,$$ so the order in which the elements of a finite set are summed is irrelevant. Series over finite sets have the following properties for finite sets $$X,Y,$$ functions $$f,h:X\rightarrow\mathbb{R}$$ and $$c\in\mathbb{R}:$$

$$\sum_{x\in\varnothing} f(x)=0,\qquad\sum_{x\in\{x_0\}} f(x)=f(x_0)$$

$$\mathrm{if}\,\,X\cap Y=\varnothing\,\,\mathrm{then}\,\,\sum_{x\in X\cup Y} f(x)=\sum_{x\in X} f(x)+\sum_{x\in Y} f(x)$$

$$\sum_{x\in X} \left(f(x)+h(x)\right)=\sum_{x\in X} f(x)+\sum_{x\in X} h(x),\qquad\sum_{x\in X} c\,f(x)=c\sum_{x\in X} f(x)$$

$$\sum_{y\in Y} f\left(g(y)\right)=\sum_{x\in X} f(x)\,\,\mathrm{for}\,\mathrm{any}\,\mathrm{bijection}\,\,g:Y\rightarrow X$$

**Fubini's theorem for finite series** states that a series over the Cartesian product of finite sets $$X$$ and $$Y$$ may be computed as an iterated series in either order. Let $$f:X\times Y\rightarrow\mathbb{R}$$ be a function.

$$\sum_{(x,y)\in X\times Y} f(x,y)=\sum_{x\in X}\left(\sum_{y\in Y} f(x,y)\right)=\sum_{y\in Y}\left(\sum_{x\in X} f(x,y)\right)$$

Let $$(a_n)$$ be a sequence indexed from $$m\in\mathbb{N}.$$ The **partial sum** $$S_N$$ is the finite series of the terms up to index $$N\geq m.$$

$$S_N:=\sum_{n=m}^{N} a_n$$

The **infinite series** $$\sum_{n=m}^{\infty} a_n$$ is the sequence of partial sums $$(S_N).$$ The series **converges** to $$S\in\mathbb{R}$$ if and only if the sequence of partial sums converges to $$S,$$ in which case $$S$$ is the **sum** of the series. Otherwise the series **diverges**.

$$\sum_{n=m}^{\infty} a_n:=\lim_{N\rightarrow\infty} S_N=\lim_{N\rightarrow\infty}\sum_{n=m}^{N} a_n$$

Changing or removing finitely many terms of a series does not affect whether it converges, although it changes the sum. The starting index is taken to be $$m=1$$ below unless written otherwise.

The **Cauchy criterion** states that a series $$\sum_{n=1}^{\infty} a_n$$ converges if and only if its partial sums form a Cauchy sequence.

$$\forall\varepsilon>0\,\exists N\in\mathbb{N}:\left\lvert\sum_{n=p}^{q} a_n\right\rvert\leq\varepsilon\,\,\forall\,q\geq p\geq N$$

The **zero test** states that if $$\sum_{n=1}^{\infty} a_n$$ converges then $$a_n\rightarrow 0$$ as $$n\rightarrow\infty.$$ Equivalently, if $$(a_n)$$ does not converge to $$0$$ then the series diverges. The converse is false: the **harmonic series** $$\sum_{n=1}^{\infty}\frac{1}{n}$$ diverges even though $$\frac{1}{n}\rightarrow 0.$$

A series $$\sum_{n=1}^{\infty} a_n$$ is **absolutely convergent** if and only if the series of absolute values $$\sum_{n=1}^{\infty}\lvert a_n\rvert$$ converges. A series that converges but is not absolutely convergent is **conditionally convergent**.

The **absolute convergence test** states that an absolutely convergent series is convergent, and its sum satisfies the triangle inequality.

$$\left\lvert\sum_{n=1}^{\infty} a_n\right\rvert\leq\sum_{n=1}^{\infty}\lvert a_n\rvert$$

An **alternating series** is a series $$\sum_{n=1}^{\infty}\left(-1\right)^n b_n$$ with $$b_n\geq 0\,\,\forall\,n,$$ whose terms alternate in sign. The **alternating series test** states that if $$(b_n)$$ is monotonically decreasing and $$b_n\rightarrow 0$$ then the alternating series converges, and its partial sums satisfy

$$\left\lvert\sum_{n=1}^{\infty}\left(-1\right)^n b_n-\sum_{n=1}^{N}\left(-1\right)^n b_n\right\rvert\leq b_{N+1}\,\,\forall\,N\in\mathbb{N}.$$

The alternating harmonic series $$\sum_{n=1}^{\infty}\frac{\left(-1\right)^{n+1}}{n}$$ is therefore convergent but, since the harmonic series diverges, only conditionally convergent.

The **series laws** state that if $$\sum_{n=1}^{\infty} a_n=S$$ and $$\sum_{n=1}^{\infty} b_n=T$$ are convergent series and $$c\in\mathbb{R}$$ then:

$$\sum_{n=1}^{\infty}\left(a_n\pm b_n\right)=S\pm T$$

$$\sum_{n=1}^{\infty} c\,a_n=c\,S$$

$$\sum_{n=1}^{\infty} a_n=\sum_{n=1}^{k} a_n+\sum_{n=k+1}^{\infty} a_n\,\,\forall\,k\in\mathbb{N}$$

The series $$\sum_{n=1}^{\infty} a_{n+k}$$ converges if and only if $$\sum_{n=1}^{\infty} a_n$$ converges. The sum of a convergent series does not depend on how its terms are grouped, but it can depend on their order unless the series is absolutely convergent, in which case every rearrangement of the terms converges to the same sum.

A **telescoping series** is a series whose terms are differences of consecutive terms of another sequence. If $$(b_n)$$ converges to $$L$$ then its partial sums collapse and

$$\sum_{n=1}^{\infty}\left(b_n-b_{n+1}\right)=\lim_{N\rightarrow\infty}\left(b_1-b_{N+1}\right)=b_1-L.$$

For example, $$\frac{1}{n(n+1)}=\frac{1}{n}-\frac{1}{n+1}$$ gives $$\sum_{n=1}^{\infty}\frac{1}{n(n+1)}=1.$$

The **comparison test** states that if $$\lvert a_n\rvert\leq b_n\,\,\forall\,n$$ and $$\sum_{n=1}^{\infty} b_n$$ converges then $$\sum_{n=1}^{\infty} a_n$$ is absolutely convergent and

$$\left\lvert\sum_{n=1}^{\infty} a_n\right\rvert\leq\sum_{n=1}^{\infty}\lvert a_n\rvert\leq\sum_{n=1}^{\infty} b_n.$$

Conversely, if $$0\leq b_n\leq a_n\,\,\forall\,n$$ and $$\sum_{n=1}^{\infty} b_n$$ diverges then $$\sum_{n=1}^{\infty} a_n$$ diverges. A common comparison is the **$$p$$-series** $$\sum_{n=1}^{\infty}\frac{1}{n^p},$$ which converges if and only if $$p>1.$$

Let $$x\in\mathbb{R}.$$ The **geometric series** with ratio $$x$$ is $$\sum_{n=0}^{\infty} x^n$$ and has partial sums

$$\sum_{n=0}^{N} x^n=\begin{cases}
    \frac{1-x^{N+1}}{1-x} & x\neq 1 \\
    N+1 & x=1.
 \end{cases}
$$

Since $$x^{N+1}\rightarrow 0$$ if and only if $$\lvert x\rvert<1,$$ the geometric series converges if and only if $$\lvert x\rvert<1,$$ and then

$$\sum_{n=0}^{\infty} x^n=\frac{1}{1-x}.$$

The **root test** states that if the limit $$\alpha=\lim_{n\rightarrow\infty}\lvert a_n\rvert^{\frac{1}{n}}$$ exists then $$\sum_{n=1}^{\infty} a_n$$ is absolutely convergent if $$\alpha<1$$ and divergent if $$\alpha>1.$$ If $$\alpha=1$$ the test is inconclusive.

The **ratio test** states that if $$a_n\neq 0\,\,\forall\,n$$ and the limit $$\alpha=\lim_{n\rightarrow\infty}\left\lvert\frac{a_{n+1}}{a_n}\right\rvert$$ exists then $$\sum_{n=1}^{\infty} a_n$$ is absolutely convergent if $$\alpha<1$$ and divergent if $$\alpha>1.$$ If $$\alpha=1$$ the test is inconclusive. Both tests compare the series with a geometric series, and the $$p$$-series shows that $$\alpha=1$$ is compatible with either convergence or divergence.

Let $$c\in\mathbb{R}$$ and $$(a_n)$$ be a sequence indexed from $$0.$$ The **power series** centred at $$c$$ with coefficients $$(a_n)$$ is the function of $$x\in\mathbb{R}$$ given by

$$\sum_{n=0}^{\infty} a_n\left(x-c\right)^n$$

wherever this series converges. There is a unique $$R\in\left[0,\infty\right]$$ called the **radius of convergence** such that the power series converges absolutely for all $$x$$ with $$\lvert x-c\rvert<R$$ and diverges for all $$x$$ with $$\lvert x-c\rvert>R.$$ When the limits exist, the root and ratio tests give

$$\frac{1}{R}=\lim_{n\rightarrow\infty}\lvert a_n\rvert^{\frac{1}{n}}=\lim_{n\rightarrow\infty}\left\lvert\frac{a_{n+1}}{a_n}\right\rvert$$

with the conventions $$\frac{1}{0}=\infty$$ and $$\frac{1}{\infty}=0.$$ The set of $$x$$ for which the power series converges is its **interval of convergence**, which contains $$\left(c-R,c+R\right)$$ and may or may not contain the endpoints $$c\pm R.$$ For example, the geometric series is the power series centred at $$0$$ with $$a_n=1$$ and $$R=1,$$ whereas the **exponential series**

$$\exp\left(x\right):=\sum_{n=0}^{\infty}\frac{x^n}{n!}$$

has $$R=\infty$$ and converges for every $$x\in\mathbb{R}.$$
