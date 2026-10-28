---
title:  "Function Spaces"
description: "Functions as points of a space"
---

Let $$X$$ be a set. The set of **bounded functions** on $$X,$$ written $$B(X),$$ is the set of functions $$f:X\rightarrow\mathbb{R}$$ with $$\sup_{x\in X}\lvert f(x)\rvert<\infty.$$ The set $$B(X)$$ is a vector space under pointwise addition and scalar multiplication.

Let $$X$$ be a set and $$f\in B(X).$$ The **supremum norm** of $$f$$ is the supremum of its absolute values.

$$\lVert f\rVert_\infty:=\sup_{x\in X}\lvert f(x)\rvert$$

The supremum norm satisfies the norm axioms, so $$B(X)$$ is a normed vector space with the induced metric $$d_\infty(f,g)=\lVert f-g\rVert_\infty.$$ A sequence in $$B(X)$$ converges in this metric if and only if it converges uniformly on $$X,$$ so convergence in the supremum norm is also called **uniform convergence**. The **topology of uniform convergence** is the metric topology induced by the supremum norm. Pointwise convergence is not induced by any metric on $$B(X)$$ when $$X$$ is uncountable.

Let $$X$$ be a topological space. The set of **continuous functions** on $$X,$$ written $$C(X),$$ is the set of continuous functions $$f:X\rightarrow\mathbb{R},$$ which is a vector space. If $$X$$ is compact then every continuous function on $$X$$ is bounded, so $$C(X)\subseteq B(X)$$ is a normed vector space under the supremum norm. For a closed bounded interval this space is written $$C[a,b].$$

Let $$X$$ be a topological space. The set of **bounded continuous functions** on $$X$$ is $$C_b(X):=C(X)\cap B(X),$$ which is used in place of $$C(X)$$ when $$X$$ is not compact.

Function spaces have the following properties:
- $$B(X)$$ is complete, since a Cauchy sequence in the supremum norm is a Cauchy sequence at every point and so converges pointwise to a function, which is bounded and is the uniform limit of the sequence;
- $$C_b(X)$$ is a closed subset of $$B(X),$$ since the uniform limit of continuous functions is continuous, and is therefore complete;
- $$C(X)$$ is a Banach space for every compact space $$X,$$ and in particular $$C[a,b]$$ is a Banach space;
- the supremum norm on $$C[a,b]$$ is not induced by an inner product;
- $$C[a,b]$$ with the norm $$\lVert f\rVert_2:=\left(\int_a^b f(x)^2\,dx\right)^{\frac{1}{2}},$$ which is induced by the inner product $$\langle f,g\rangle:=\int_a^b f(x)\,g(x)\,dx,$$ is not complete.

The Banach space $$C[a,b]$$ is the setting in which the contraction mapping theorem produces solutions of equations whose unknown is a function.

Let $$f:\left[a,b\right]\rightarrow\mathbb{R}$$ be continuous. The **Weierstrass approximation theorem** states that for every $$\varepsilon>0$$ there is a polynomial $$p$$ with $$\lVert f-p\rVert_\infty\leq\varepsilon.$$ Equivalently, the polynomials are dense in $$C[a,b].$$

Let $$f:\left[0,1\right]\rightarrow\mathbb{R}$$ be continuous and $$n\in\mathbb{N}.$$ The **Bernstein polynomial** of degree $$n$$ of $$f$$ is the polynomial

$$B_n f(x):=\sum_{k=0}^{n}f\left(\frac{k}{n}\right)\frac{n!}{k!\left(n-k\right)!}x^k\left(1-x\right)^{n-k}.$$

The Bernstein polynomials of $$f$$ converge uniformly to $$f$$ on $$\left[0,1\right],$$ which proves the Weierstrass approximation theorem constructively. The approximating polynomials are not Taylor polynomials, and $$f$$ need not be differentiable. Since the polynomials with rational coefficients are countable and dense in the polynomials, $$C[a,b]$$ has a countable dense subset.

Let $$X$$ be a compact Hausdorff space and $$\mathcal{A}\subseteq C(X).$$ The set $$\mathcal{A}$$ is a **subalgebra** of $$C(X)$$ if and only if it is a vector subspace that is closed under pointwise multiplication. The set $$\mathcal{A}$$ **separates points** if and only if for any two distinct points $$x,y\in X$$ there exists $$f\in\mathcal{A}$$ with $$f(x)\neq f(y).$$

Let $$X$$ be a compact Hausdorff space and $$\mathcal{A}$$ be a subalgebra of $$C(X)$$ that contains the constant functions and separates points. The **Stone–Weierstrass theorem** states that $$\mathcal{A}$$ is dense in $$C(X).$$ The Stone–Weierstrass theorem has the following consequences:
- the polynomials on $$\left[a,b\right]$$ form such a subalgebra, since $$x\mapsto x$$ separates points, which recovers the Weierstrass approximation theorem;
- the polynomials in $$n$$ variables are dense in $$C(K)$$ for any compact $$K\subseteq\mathbb{R}^n;$$
- the **trigonometric polynomials** $$x\mapsto a_0+\sum_{k=1}^{n}\left(a_k\cos kx+b_k\sin kx\right)$$ are dense in the continuous functions on $$\left[-\pi,\pi\right]$$ with $$f\left(-\pi\right)=f\left(\pi\right),$$ since they separate the points of the unit circle;
- the theorem holds for complex-valued functions provided that the subalgebra is also closed under complex conjugation.
