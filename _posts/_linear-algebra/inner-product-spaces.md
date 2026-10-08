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

A **sesquilinear form** on $$\mathcal{V}$$ satisfies the first bilinear form axiom but is conjugate linear in its second argument:

$$\langle \underline{v}_1, \lambda\underline{v}_2+\mu\underline{v}_3 \rangle = \overline{\lambda}\langle \underline{v}_1, \underline{v}_2 \rangle + \overline{\mu}\langle \underline{v}_1, \underline{v}_3 \rangle \,\, \forall \, \underline{v}_1, \underline{v}_2, \underline{v}_3 \in \mathcal{V},\,\,\forall \, \lambda, \mu \in \mathbb{F}$$

where for a complex number $$z=a+ib\in\mathbb{C}$$ the complex conjugate is $$\overline{z}=a-ib\in\mathbb{C}.$$ If $$\mathbb{F}=\mathbb{R}$$ then conjugation has no effect and sesquilinear and bilinear forms are the same.

A sesquilinear form is **conjugate symmetric** if $$\langle \underline{v}_1, \underline{v}_2 \rangle = \overline{\langle \underline{v}_2, \underline{v}_1 \rangle} \,\, \forall \, \underline{v}_1, \underline{v}_2 \in \mathcal{V}.$$ If $$\mathbb{F}=\mathbb{R}$$ conjugate symmetry is simply symmetry: $$\langle \underline{v}_1, \underline{v}_2 \rangle = \langle \underline{v}_2, \underline{v}_1 \rangle.$$ Conjugate symmetry implies that $$\langle \underline{v}, \underline{v} \rangle$$ is real for every $$\underline{v} \in \mathcal{V}.$$

A conjugate symmetric form is **positive definite** if $$\langle \underline{v}, \underline{v} \rangle > 0 \,\, \forall \, \underline{v} \in \mathcal{V} \setminus \{\underline{0}\},$$ **negative definite** if $$\langle \underline{v}, \underline{v} \rangle < 0 \,\, \forall \, \underline{v} \in \mathcal{V} \setminus \{\underline{0}\},$$ **positive semi-definite** if $$\langle \underline{v}, \underline{v} \rangle \geq 0 \,\, \forall \, \underline{v} \in \mathcal{V} \setminus \{\underline{0}\}$$ and **negative semi-definite** if $$\langle \underline{v}, \underline{v} \rangle \leq 0 \,\, \forall \, \underline{v} \in \mathcal{V} \setminus \{\underline{0}\}.$$

An **inner product** is a positive definite, conjugate symmetric sesquilinear form on $$\mathcal{V}.$$ When $$\mathbb{F}=\mathbb{R}$$ this is a positive definite, symmetric bilinear form. When $$\mathbb{F}=\mathbb{C}$$ the form cannot be bilinear: a conjugate symmetric bilinear form would give $$\langle i\underline{v}, i\underline{v} \rangle = -\langle \underline{v}, \underline{v} \rangle,$$ contradicting positive definiteness. A vector space is an **inner product space** if it is equipped with the inner product.

Let $$\mathcal{V}$$ be an inner product space over the field $$\mathbb{F}$$ and $$\underline{v} \in \mathcal{V}.$$ The **norm** or **length** $$\|\underline{v}\|$$ of $$\underline{v}$$ is the square root of the inner product with itself:

$$\|\underline{v}\|:=\sqrt{\langle \underline{v},\underline{v} \rangle} \in \mathbb{R}$$

Let $$\mathcal{V}$$ be an inner product space over $$\mathbb{R}.$$ The **angle** $$\theta$$ between two non-zero vectors $$\underline{u},\underline{v} \in \mathcal{V}$$ is defined as the inverse cosine of the quotient of the inner product of the two vectors and the product of their norms:

$$\theta:=\cos^{-1}\left(\frac{\langle \underline{u},\underline{v} \rangle}{\|\underline{u}\|\|\underline{v}\|}\right) \in [0, \pi]$$

The Cauchy-Schwarz inequality below guarantees that the quotient lies in $$[-1, 1].$$

Two vectors $$\underline{u}, \underline{v} \in \mathcal{V}$$ are **orthogonal** to each other $$\underline{u} \perp \underline{v}$$ if $$\langle \underline{u},\underline{v} \rangle=0.$$ If $$\underline{u}$$ and $$\underline{v}$$ are orthogonal unit vectors $$\|\underline{u}\|=\|\underline{v}\|=1$$ then they are **orthonormal**.

For a subset of vectors $$U \subseteq \mathcal{V},$$ they are said to be an **orthogonal set** or **orthonormal set** if all vectors contained within the sets are pairwise orthogonal or orthonormal respectively. Orthonormal sets are linearly independent and a set of $$n$$ orthonormal vectors in an $$n$$-dimensional vector space is a basis.

The **Gram-Schmidt orthonormalisation** procedure is a method to orthonormalise a set of linearly independent vectors $$\underline{u}_1,\ldots\underline{u}_n \in \mathcal{U}$$ in an inner product space $$\mathcal{U}.$$ The resultant orthonormalised vectors $$\underline{v}_1,\ldots\underline{v}_n$$ span the same subspace as $$\underline{u}_1,\ldots\underline{u}_n;$$ more precisely, $$\underline{v}_1,\ldots\underline{v}_k$$ span the same subspace as $$\underline{u}_1,\ldots\underline{u}_k$$ for each $$k.$$ If $$\underline{u}_1,\ldots\underline{u}_n$$ is a basis of $$\mathcal{U}$$ then $$\underline{v}_1,\ldots\underline{v}_n$$ is an orthonormal basis of $$\mathcal{U}.$$

$$
\begin{matrix}
\underline{w}_1 & := & \underline{u}_1 & \underline{v}_1 & := & \frac{\underline{w}_1}{\|\underline{w}_1\|} \\
\underline{w}_2 & := & \underline{u}_2-\langle \underline{u}_2, \underline{v}_1 \rangle\underline{v}_1 & \underline{v}_2 & := & \frac{\underline{w}_2}{\|\underline{w}_2\|} \\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots\\
\underline{w}_n & := & \underline{u}_n-\sum_{i=1}^{n-1}\langle \underline{u}_n, \underline{v}_i \rangle\underline{v}_i & \underline{v}_n & := & \frac{\underline{w}_n}{\|\underline{w}_n\|} \\
\end{matrix}
$$

The **Cauchy-Schwarz inequality** states that for an inner product space $$\mathcal{V}$$ and $$\underline{v}_1,\underline{v}_2\in\mathcal{V}:$$

$$|\langle\underline{v}_1,\underline{v}_2\rangle|\leq\|\underline{v}_1\|\|\underline{v}_2\|$$

with equality if and only if $$\underline{v}_1$$ and $$\underline{v}_2$$ are linearly dependent.