---
title:  "Inner Product Spaces"
description: "Vector spaces with additional structure"
---

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}.$$ A **bilinear form** on $$\mathcal{V}$$ is a function $$\langle \cdot, \cdot \rangle : \mathcal{V}\times\mathcal{V} \rightarrow \mathbb{F}$$ that is linear in each argument.

$$\langle \lambda\underline{v}_1+\mu\underline{v}_2, \underline{v}_3 \rangle = \lambda\langle \underline{v}_1, \underline{v}_3 \rangle + \mu\langle \underline{v}_2, \underline{v}_3 \rangle \,\, \forall \, \underline{v}_1, \underline{v}_2, \underline{v}_3 \in \mathcal{V},\,\,\forall \, \lambda, \mu \in \mathbb{F}$$

$$\langle \underline{v}_1, \lambda\underline{v}_2+\mu\underline{v}_3 \rangle = \lambda\langle \underline{v}_1, \underline{v}_2 \rangle + \mu\langle \underline{v}_1, \underline{v}_3 \rangle \,\, \forall \, \underline{v}_1, \underline{v}_2, \underline{v}_3 \in \mathcal{V},\,\,\forall \, \lambda, \mu \in \mathbb{F}$$

Let $$z=a+ib\in\mathbb{C}$$ be a complex number. The **complex conjugate** of $$z$$ is $$\overline{z}:=a-ib\in\mathbb{C}.$$ If $$z\in\mathbb{R}$$ then $$\overline{z}=z.$$

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}.$$ A **sesquilinear form** on $$\mathcal{V}$$ is a function $$\langle \cdot, \cdot \rangle : \mathcal{V}\times\mathcal{V} \rightarrow \mathbb{F}$$ that is linear in its first argument and conjugate linear in its second argument.

$$\langle \lambda\underline{v}_1+\mu\underline{v}_2, \underline{v}_3 \rangle = \lambda\langle \underline{v}_1, \underline{v}_3 \rangle + \mu\langle \underline{v}_2, \underline{v}_3 \rangle \,\, \forall \, \underline{v}_1, \underline{v}_2, \underline{v}_3 \in \mathcal{V},\,\,\forall \, \lambda, \mu \in \mathbb{F}$$

$$\langle \underline{v}_1, \lambda\underline{v}_2+\mu\underline{v}_3 \rangle = \overline{\lambda}\langle \underline{v}_1, \underline{v}_2 \rangle + \overline{\mu}\langle \underline{v}_1, \underline{v}_3 \rangle \,\, \forall \, \underline{v}_1, \underline{v}_2, \underline{v}_3 \in \mathcal{V},\,\,\forall \, \lambda, \mu \in \mathbb{F}$$

If $$\mathbb{F}=\mathbb{R}$$ then conjugation has no effect, so sesquilinear forms and bilinear forms are the same.

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}$$ and $$\langle \cdot, \cdot \rangle$$ be a sesquilinear form on $$\mathcal{V}.$$ The form is **conjugate symmetric** if and only if swapping its arguments conjugates its value.

$$\langle \underline{v}_1, \underline{v}_2 \rangle = \overline{\langle \underline{v}_2, \underline{v}_1 \rangle} \,\, \forall \, \underline{v}_1, \underline{v}_2 \in \mathcal{V}$$

If $$\mathbb{F}=\mathbb{R}$$ then a conjugate symmetric form is **symmetric**: $$\langle \underline{v}_1, \underline{v}_2 \rangle = \langle \underline{v}_2, \underline{v}_1 \rangle.$$ A conjugate symmetric form satisfies $$\langle \underline{v}, \underline{v} \rangle \in \mathbb{R}$$ for every $$\underline{v} \in \mathcal{V}.$$

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}$$ and $$\langle \cdot, \cdot \rangle$$ be a conjugate symmetric form on $$\mathcal{V}.$$ The form is **positive definite** if and only if $$\langle \underline{v}, \underline{v} \rangle > 0 \,\, \forall \, \underline{v} \in \mathcal{V} \setminus \{\underline{0}\}.$$ The form is **negative definite** if and only if $$\langle \underline{v}, \underline{v} \rangle < 0 \,\, \forall \, \underline{v} \in \mathcal{V} \setminus \{\underline{0}\}.$$ The form is **positive semi-definite** if and only if $$\langle \underline{v}, \underline{v} \rangle \geq 0 \,\, \forall \, \underline{v} \in \mathcal{V}.$$ The form is **negative semi-definite** if and only if $$\langle \underline{v}, \underline{v} \rangle \leq 0 \,\, \forall \, \underline{v} \in \mathcal{V}.$$

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}.$$ An **inner product** on $$\mathcal{V}$$ is a positive definite, conjugate symmetric sesquilinear form on $$\mathcal{V}.$$ If $$\mathbb{F}=\mathbb{R}$$ then an inner product is a positive definite, symmetric bilinear form. If $$\mathbb{F}=\mathbb{C}$$ then an inner product cannot be bilinear, since a conjugate symmetric bilinear form would give $$\langle i\underline{v}, i\underline{v} \rangle = -\langle \underline{v}, \underline{v} \rangle,$$ contradicting positive definiteness.

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}.$$ The vector space $$\mathcal{V}$$ is an **inner product space** if and only if it is equipped with an inner product.

Let $$\mathcal{V}$$ be an inner product space over the field $$\mathbb{F}$$ and $$\underline{v} \in \mathcal{V}.$$ The **norm** or **length** of $$\underline{v},$$ written $$\|\underline{v}\|,$$ is the square root of the inner product of $$\underline{v}$$ with itself.

$$\|\underline{v}\|:=\sqrt{\langle \underline{v},\underline{v} \rangle} \in \mathbb{R}$$

Let $$\mathcal{V}$$ be an inner product space over the field $$\mathbb{F}.$$ A vector $$\underline{v} \in \mathcal{V}$$ is a **unit vector** if and only if $$\|\underline{v}\|=1.$$

Let $$\mathcal{V}$$ be an inner product space over the field $$\mathbb{F}.$$ The **Cauchy-Schwarz inequality** states that for all $$\underline{v}_1,\underline{v}_2\in\mathcal{V}$$

$$|\langle\underline{v}_1,\underline{v}_2\rangle|\leq\|\underline{v}_1\|\|\underline{v}_2\|$$

with equality if and only if $$\underline{v}_1$$ and $$\underline{v}_2$$ are linearly dependent.

Let $$\mathcal{V}$$ be an inner product space over $$\mathbb{R}$$ and $$\underline{u},\underline{v} \in \mathcal{V}$$ be non-zero vectors. The **angle** $$\theta$$ between $$\underline{u}$$ and $$\underline{v}$$ is the inverse cosine of the inner product of the two vectors divided by the product of their norms.

$$\theta:=\cos^{-1}\left(\frac{\langle \underline{u},\underline{v} \rangle}{\|\underline{u}\|\|\underline{v}\|}\right) \in [0, \pi]$$

The Cauchy-Schwarz inequality guarantees that the quotient lies in $$[-1, 1].$$

Let $$\mathcal{V}$$ be an inner product space over the field $$\mathbb{F}$$ and $$\underline{u}, \underline{v} \in \mathcal{V}.$$ The vectors $$\underline{u}$$ and $$\underline{v}$$ are **orthogonal**, written $$\underline{u} \perp \underline{v},$$ if and only if $$\langle \underline{u},\underline{v} \rangle=0.$$ The vectors $$\underline{u}$$ and $$\underline{v}$$ are **orthonormal** if and only if they are orthogonal unit vectors.

Let $$\mathcal{V}$$ be an inner product space over the field $$\mathbb{F}$$ and $$U \subseteq \mathcal{V}.$$ The set $$U$$ is an **orthogonal set** if and only if every pair of distinct vectors in $$U$$ is orthogonal. The set $$U$$ is an **orthonormal set** if and only if every pair of distinct vectors in $$U$$ is orthonormal. An orthonormal set is linearly independent, and an orthonormal set of $$n$$ vectors in an $$n$$-dimensional inner product space is a basis.

Let $$\mathcal{V}$$ be an inner product space over the field $$\mathbb{F}$$ and $$U$$ be a basis of $$\mathcal{V}.$$ The basis $$U$$ is an **orthonormal basis** if and only if $$U$$ is an orthonormal set.

Let $$\mathcal{V}$$ be an inner product space over the field $$\mathbb{F}$$ and $$\underline{u}_1,\ldots,\underline{u}_n \in \mathcal{V}$$ be linearly independent vectors. **Gram-Schmidt orthonormalisation** is the procedure that constructs orthonormal vectors $$\underline{v}_1,\ldots,\underline{v}_n$$ from $$\underline{u}_1,\ldots,\underline{u}_n$$ by subtracting from each $$\underline{u}_k$$ its components along the previously constructed vectors and normalising the result.

$$
\begin{matrix}
\underline{w}_1 & := & \underline{u}_1 & \underline{v}_1 & := & \frac{\underline{w}_1}{\|\underline{w}_1\|} \\
\underline{w}_2 & := & \underline{u}_2-\langle \underline{u}_2, \underline{v}_1 \rangle\underline{v}_1 & \underline{v}_2 & := & \frac{\underline{w}_2}{\|\underline{w}_2\|} \\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots\\
\underline{w}_n & := & \underline{u}_n-\sum_{i=1}^{n-1}\langle \underline{u}_n, \underline{v}_i \rangle\underline{v}_i & \underline{v}_n & := & \frac{\underline{w}_n}{\|\underline{w}_n\|} \\
\end{matrix}
$$

Gram-Schmidt orthonormalisation has the following properties:
- the vectors $$\underline{v}_1,\ldots,\underline{v}_k$$ span the same subspace as $$\underline{u}_1,\ldots,\underline{u}_k$$ for each $$k;$$
- if $$\underline{u}_1,\ldots,\underline{u}_n$$ is a basis of $$\mathcal{V}$$ then $$\underline{v}_1,\ldots,\underline{v}_n$$ is an orthonormal basis of $$\mathcal{V}.$$
