---
layout: post
category: "Linear Algebra"
title:  "Vector Spaces"
tags: ["linear algebra", "vector space"]
description: "A fundamental space supporting addition and multiplication of elements"
---

A **binary operation** is a function $$\mathbb{X} \times \mathbb{X} \rightarrow \mathbb{X}$$ which maps ordered pairs of elements from $$\mathbb{X}$$ to other elements of $$\mathbb{X}$$.

A **field** $$\mathbb{F}$$ is a set with two binary operations called addition and scalar multiplication. Addition $$a+b$$ and scalar multiplication $$a \cdot b$$, $$a,b \in \mathbb{F}$$ satisfy the field axioms:
- Associativity of addition and scalar multiplication: $$a + (b + c) = (a + b) + c$$ and $$a \cdot (b \cdot c) = (a \cdot b) \cdot c$$.
- Commutativity of addition and scalar multiplication: $$a + b = b + a$$ and $$a \cdot b = b \cdot a$$.
- Distributivity of scalar multiplication over addition: $$a \cdot (b + c) = (a \cdot b) + (a \cdot c)$$.
- Additive and scalar multiplicative identity: $$\exists \, 0, 1 \in \mathbb{F} : a + 0 = a$$ and $$a \cdot 1 = a$$.
- Additive and scalar multiplicative inverse: $$\exists \, {-}a \in \mathbb{F} : a+(-a)=0 \,\, \forall \, a \in \mathbb{F}$$ and $$\exists \, a^{-1} \in \mathbb{F} \setminus \{0\} : a \cdot a^{-1} = 1 \,\, \forall \, a \in \mathbb{F}\setminus \{0\}$$.

Generally $$\mathbb{F}=\mathbb{R}$$ (real numbers) or $$\mathbb{F}=\mathbb{C}$$ (complex numbers). Any element $$\lambda \in \mathbb{F}$$ is a **scalar**.

The set $$\mathcal{V}$$ over the field $$\mathbb{F}$$ is a **vector space** if $$\mathcal{V}$$ is closed under addition $$\underline{u} + \underline{v} \in \mathcal{V} \,\, \forall \, \underline{u}, \underline{v} \in \mathcal{V}$$ and scalar multiplication $$\lambda\cdot \underline{u} \in \mathcal{V} \,\, \forall \, \lambda \in \mathbb{F}$$ and the elements of $$\mathcal{V}$$ satisfy the vector space axioms $$\forall \, \underline{u}, \underline{v}, \underline{w} \in \mathcal{V}$$ and $$\forall \, \lambda, \mu \in \mathbb{F}$$:
- Associativity of addition and scalar multiplication: $$\underline{u}+(\underline{v}+\underline{w})=(\underline{u}+\underline{v})+\underline{w}$$ and $$\lambda\cdot(\mu\cdot\underline{u})=(\lambda\mu)\cdot\underline{u}$$.
- Commutativity of addition: $$\underline{u}+\underline{v}=\underline{v}+\underline{u}$$.
- Distributivity of scalar multiplication over addition: $$(\lambda+\mu)\cdot\underline{u}=\lambda\cdot\underline{u}+\mu\cdot\underline{u}$$ and $$\lambda\cdot(\underline{u}+\underline{v})=\lambda\cdot\underline{u}+\lambda\cdot\underline{v}$$.
- Additive identity: $$\exists \, \underline{0} \in \mathcal{V} : \underline{u}+\underline{0}=\underline{u}$$
- Scalar multiplicative identity: $$\exists \, 1 \in \mathbb{F} : 1\cdot\underline{u}=\underline{u}$$
- Additive inverse: $$\exists \, {-}\underline{u} \in \mathcal{V} : \underline{u}+({-}\underline{u})=\underline{0}$$.

Generally $$\mathcal{V}=\mathbb{R}^n$$ where $$v_1,\ldots v_n \in \mathbb{R}$$ or $$\mathcal{V}=\mathbb{C}^n$$ where $$v_1,\ldots v_n \in \mathbb{C}$$ for the set of $$n$$-tuples $$\underline{v}=(v_1,\ldots,v_n)$$. Any element $$\underline{v} \in \mathcal{V}$$ is a **vector**.

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}$$. A **subspace** $$\mathcal{U}$$ of $$\mathcal{V}$$ is a subset $$\mathcal{U} \subseteq \mathcal{V}$$ that is itself a vector space. $$\mathcal{U}$$ can be a subset of $$\mathcal{V}$$ and not a subspace if it does not satisfy all vector space axioms.

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}$$ and $$U$$ be a subset of $$\mathcal{V}$$. The vectors $$\underline{u} \in U$$ are **linearly dependent** if at least one vector $$\underline{u}_k$$ can be written as a linear combination of the other vectors. In other words, for some $$k, 1 \leq k \leq n$$ there exists a set of scalars $$\alpha_1,\ldots,\alpha_{k-1}, \alpha_{k+1},\ldots,\alpha_n$$ such that

$$\underline{u}_k = \sum_{i=1, i\neq k}^n \alpha_i\underline{u}_i$$

If there are no linearly dependent vectors in $$U$$ then its vectors are **linearly independent**. Equivalently, the vectors in $$U$$ are linearly independent if and only if the solution to $$\alpha_1\underline{u}_1+\ldots+\alpha_n\underline{u}_n=\underline{0}$$ is the trivial solution $$\alpha_1=\ldots=\alpha_n=0$$. $$U$$ is said to be linearly dependent if every finite subset of $$U$$ is linearly independent.

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}$$ and $$U$$ be a subset of $$\mathcal{V}$$. $$U$$ is said to **span** $$\mathcal{V}$$ if all vectors in $$\mathcal{V}$$ can be expressed as a linear combination of vectors in $$U$$. $$U$$ is said to be a **basis** of $$\mathcal{V}$$ if $$U$$ spans $$\mathcal{V}$$ and the vectors in $$U$$ are linearly independent. The **dimension** of $$\mathcal{V}$$ is the number of vectors in its basis. Every vector space that can be spanned has a basis and all bases for a given vector space have the same number of vectors. Hence, the dimension of a vector space is uniquely defined.
