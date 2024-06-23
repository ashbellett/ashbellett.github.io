---
layout: post
category: "linear-algebra"
title:  "Inner Product Spaces"
tags: ["linear", "algebra", "inner product space"]
description: "Vector spaces with additional structure"
---

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}.$$ A **bilinear form** on $$\mathcal{V}$$ is a function from pairs of vectors in $$\mathcal{V}$$ to $$\mathbb{F}$$ written $$\langle \cdot, \cdot \rangle : \mathcal{V}\times\mathcal{V} \rightarrow \mathbb{F}$$ and satisfies the bilinear form axioms:

$$\langle \lambda\underline{v}_1+\mu\underline{v}_2, \underline{v}_3 \rangle = \lambda\langle \underline{v}_1, \underline{v}_3 \rangle + \mu\langle \underline{v}_2, \underline{v}_3 \rangle \,\, \forall \, \underline{v}_1, \underline{v}_2, \underline{v}_3 \in \mathcal{V},\,\,\forall \, \lambda, \mu \in \mathbb{F}$$

$$\langle \underline{v}_1, \lambda\underline{v}_2+\mu\underline{v}_3 \rangle = \lambda\langle \underline{v}_1, \underline{v}_2 \rangle + \mu\langle \underline{v}_1, \underline{v}_3 \rangle \,\, \forall \, \underline{v}_1, \underline{v}_2, \underline{v}_3 \in \mathcal{V},\,\,\forall \, \lambda, \mu \in \mathbb{F}.$$

A bilinear form is **conjugate symmetric** if $$\langle \underline{v}_1, \underline{v}_2 \rangle = \overline{\langle \underline{v}_2, \underline{v}_1 \rangle} \,\, \forall \, \underline{v}_1, \underline{v}_2 \in \mathcal{V}$$ where for a complex number $$z=a+ib\in\mathbb{C}$$ the complex conjugate is $$\overline{z}=a-ib\in\mathbb{C}.$$ If $$\mathbb{F}=\mathbb{R}$$ conjugate symmetry is simply symmetry: $$\langle \underline{v}_1, \underline{v}_2 \rangle = \langle \underline{v}_2, \underline{v}_1 \rangle.$$

A bilinear form is **positive definite** if $$\langle \underline{v}, \underline{v} \rangle > 0 \,\, \forall \, \underline{v} \in \mathcal{V} \setminus \{\underline{0}\},$$ **negative definite** if $$\langle \underline{v}, \underline{v} \rangle < 0 \,\, \forall \, \underline{v} \in \mathcal{V} \setminus \{\underline{0}\},$$ **positive semi-definite** if $$\langle \underline{v}, \underline{v} \rangle \geq 0 \,\, \forall \, \underline{v} \in \mathcal{V} \setminus \{\underline{0}\}$$ and **negative semi-definite** if $$\langle \underline{v}, \underline{v} \rangle \leq 0 \,\, \forall \, \underline{v} \in \mathcal{V} \setminus \{\underline{0}\}.$$

An **inner product** is a positive definite, conjugate symmetric bilinear form on $$\mathcal{V}.$$ A vector space is an **inner product space** if it is equipped with the inner product.

Let $$\mathcal{V}$$ be an inner product space over the field $$\mathbb{F}$$ and $$\underline{v} \in \mathcal{V}.$$ The **norm** or **length** $$\|\underline{v}\|$$ of $$\underline{v}$$ is the square root of the inner product with itself:

$$\|\underline{v}\|:=\sqrt{\langle \underline{v},\underline{v} \rangle} \in \mathbb{R}$$

The **angle** $$\theta$$ between two vectors $$\underline{u},\underline{v} \in \mathcal{V}$$ is defined as the inverse cosine of the quotient of the inner product of the two vectors and the product of their norms:

$$\theta:=\cos^{-1}\left(\frac{\langle \underline{u},\underline{v} \rangle}{\|\underline{u}\|\|\underline{v}\|}\right) \in [0, \pi]$$

Two vectors $$\underline{u}, \underline{v} \in \mathcal{V}$$ are **orthogonal** to each other $$\underline{u} \perp \underline{v}$$ if $$\langle \underline{u},\underline{v} \rangle=0.$$ If $$\underline{u}$$ and  $$\underline{v}$$ are unit vectors $$\|\underline{u}\|=\|\underline{v}\|=1$$ then they are **orthonormal**.

For a subset of vectors $$U \subseteq \mathcal{V},$$ they are said to be an **orthogonal set** or **orthonormal set** if all vectors contained within the sets are pairwise orthogonal or orthonormal respectively. Orthonormal sets are linearly independent and a set of $$n$$ orthonormal vectors in an $$n$$-dimensional vector space is a basis.

The **Gram-Schmidt orthonormalisation** procedure is a method to orthonormalise a set of linearly independent vectors $$\underline{u}_1,\ldots\underline{u}_n \in \mathcal{U}$$ in an inner product space $$\mathcal{U}.$$ The resultant orthonormalised vectors $$\underline{v}_1,\ldots\underline{v}_n$$ will span $$\mathcal{U}.$$

$$
\begin{matrix}
w_1 & := & u_1 & v_1 & := & \frac{w_1}{\|w_1\|} \\
w_2 & := & u_2-\left(u_2 \cdot v_1\right)v_1 & v_2 & := & \frac{w_2}{\|w_2\|} \\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots\\
w_n & := & u_n-\sum_{i=1}^{n-1}\left(u_n \cdot v_i\right)v_i & v_n & := & \frac{w_n}{\|w_n\|} \\
\end{matrix}
$$

The **Cauchy-Schwarz inequality** states that for an inner product space $$\mathcal{V}$$ and $$\underline{v}_1,\underline{v}_2\in\mathcal{V}$$:

$$|\langle\underline{v}_1,\underline{v}_2\rangle|\leq\|\underline{v}_1\|\|\underline{v}_2\|$$

with equality if and only if $$\underline{v}_1$$ and $$\underline{v}_2$$ are linearly dependent.