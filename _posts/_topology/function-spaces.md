---
layout: post
category: "topology"
title:  "Function Spaces"
tags: ["topology", "function space"]
description: "Functions as points of a space"
---

Let $$X$$ be a set. The set $$B(X)$$ of **bounded functions** $$f:X\rightarrow\mathbb{R},$$ those with $$\sup_{x\in X}\lvert f(x)\rvert<\infty,$$ is a vector space under pointwise addition and scalar multiplication, and the **supremum norm** of $$f\in B(X)$$ is its largest absolute value.

$$\lVert f\rVert_\infty:=\sup_{x\in X}\lvert f(x)\rvert$$

The supremum norm satisfies the norm axioms, so $$B(X)$$ is a normed vector space with the induced metric $$d_\infty(f,g)=\lVert f-g\rVert_\infty,$$ and a sequence in $$B(X)$$ converges in this metric if and only if it converges uniformly on $$X.$$ Convergence in the supremum norm is therefore also called **uniform convergence**, and the metric topology it induces is the **topology of uniform convergence**. Pointwise convergence is not induced by any metric on $$B(X)$$ when $$X$$ is uncountable.

Let $$X$$ be a topological space. The set $$C(X)$$ of continuous functions $$f:X\rightarrow\mathbb{R}$$ is a vector space, and if $$X$$ is compact then every continuous function on $$X$$ is bounded, so $$C(X)\subseteq B(X)$$ is a normed vector space under the supremum norm. For a closed bounded interval this space is written $$C[a,b].$$ When $$X$$ is not compact, the bounded continuous functions $$C_b(X):=C(X)\cap B(X)$$ are used instead.

The space $$B(X)$$ is complete, since a Cauchy sequence in the supremum norm is a Cauchy sequence at every point and so converges pointwise to a function, which is bounded and is the uniform limit of the sequence. The uniform limit of continuous functions is continuous, so $$C_b(X)$$ is a closed subset of $$B(X)$$ and is therefore complete. In particular $$C(X)$$ is a Banach space for every compact space $$X,$$ and $$C[a,b]$$ is a Banach space. This is the setting in which the contraction mapping theorem produces solutions of equations whose unknown is a function. The supremum norm on $$C[a,b]$$ is not induced by an inner product, and $$C[a,b]$$ with the norm $$\lVert f\rVert_2:=\left(\int_a^b f(x)^2\,dx\right)^{\frac{1}{2}},$$ which is induced by the inner product $$\langle f,g\rangle:=\int_a^b f(x)\,g(x)\,dx,$$ is not complete.

The **Weierstrass approximation theorem** states that the polynomials are dense in $$C[a,b]:$$ for every continuous $$f:\left[a,b\right]\rightarrow\mathbb{R}$$ and every $$\varepsilon>0$$ there is a polynomial $$p$$ with $$\lVert f-p\rVert_\infty\leq\varepsilon.$$ On $$\left[0,1\right]$$ the **Bernstein polynomials** of $$f$$ converge uniformly to $$f,$$ which proves the theorem constructively.

$$B_n f(x):=\sum_{k=0}^{n}f\left(\frac{k}{n}\right)\frac{n!}{k!\left(n-k\right)!}x^k\left(1-x\right)^{n-k}$$

The approximating polynomials are not Taylor polynomials, and $$f$$ need not be differentiable. Since the polynomials with rational coefficients are countable and dense in the polynomials, $$C[a,b]$$ has a countable dense subset.

Let $$X$$ be a compact Hausdorff space. A subset $$\mathcal{A}\subseteq C(X)$$ is a **subalgebra** if it is a vector subspace that is closed under pointwise multiplication, and it **separates points** if for any two distinct points $$x,y\in X$$ there exists $$f\in\mathcal{A}$$ with $$f(x)\neq f(y).$$ The **Stone–Weierstrass theorem** states that a subalgebra of $$C(X)$$ that contains the constant functions and separates points is dense in $$C(X).$$ The polynomials on $$\left[a,b\right]$$ form such a subalgebra, since $$x\mapsto x$$ separates points, which recovers the Weierstrass approximation theorem; the polynomials in $$n$$ variables are dense in $$C(K)$$ for any compact $$K\subseteq\mathbb{R}^n;$$ and the **trigonometric polynomials** $$x\mapsto a_0+\sum_{k=1}^{n}\left(a_k\cos kx+b_k\sin kx\right)$$ are dense in the continuous functions on $$\left[-\pi,\pi\right]$$ with $$f\left(-\pi\right)=f\left(\pi\right),$$ since they separate the points of the unit circle. The theorem holds for complex-valued functions provided that the subalgebra is also closed under complex conjugation.
