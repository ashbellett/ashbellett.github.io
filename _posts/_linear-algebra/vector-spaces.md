---
layout: post
category: "linear-algebra"
title:  "Vector Spaces"
tags: ["linear", "algebra", "vector space"]
description: "Spaces supporting addition and scalar multiplication of elements"
---

Let $$\mathbb{X}$$ be a set. A **binary operation** on $$\mathbb{X}$$ is a function $$\mathbb{X} \times \mathbb{X} \rightarrow \mathbb{X}$$ that maps each ordered pair of elements of $$\mathbb{X}$$ to an element of $$\mathbb{X}.$$

A **field** $$\mathbb{F}$$ is a set with two binary operations, called **addition** $$a+b$$ and **multiplication** $$a \cdot b,$$ that satisfy the field axioms for all $$a,b,c \in \mathbb{F}:$$
- Associativity of addition and multiplication: $$a + (b + c) = (a + b) + c$$ and $$a \cdot (b \cdot c) = (a \cdot b) \cdot c.$$
- Commutativity of addition and multiplication: $$a + b = b + a$$ and $$a \cdot b = b \cdot a.$$
- Distributivity of multiplication over addition: $$a \cdot (b + c) = (a \cdot b) + (a \cdot c).$$
- Additive and multiplicative identity: $$\exists \, 0, 1 \in \mathbb{F}$$ with $$0 \neq 1$$ such that $$a + 0 = a$$ and $$a \cdot 1 = a \,\, \forall \, a \in \mathbb{F}.$$
- Additive and multiplicative inverse: $$\forall \, a \in \mathbb{F} \,\, \exists \, {-}a \in \mathbb{F} : a+(-a)=0$$ and $$\forall \, a \in \mathbb{F}\setminus \{0\} \,\, \exists \, a^{-1} \in \mathbb{F} : a \cdot a^{-1} = 1.$$

Let $$\mathbb{F}$$ be a field. An element $$\lambda \in \mathbb{F}$$ is a **scalar**. The real numbers $$\mathbb{R}$$ and the complex numbers $$\mathbb{C}$$ are fields, and usually $$\mathbb{F}=\mathbb{R}$$ or $$\mathbb{F}=\mathbb{C}.$$

Let $$\mathbb{F}$$ be a field and $$\mathcal{V}$$ be a set with a binary operation called **addition** $$\underline{u} + \underline{v}$$ and a function called **scalar multiplication** $$\mathbb{F} \times \mathcal{V} \rightarrow \mathcal{V},$$ written $$\lambda \cdot \underline{u}.$$ The set $$\mathcal{V}$$ is a **vector space** over $$\mathbb{F}$$ if and only if the vector space axioms hold for all $$\underline{u}, \underline{v}, \underline{w} \in \mathcal{V}$$ and all $$\lambda, \mu \in \mathbb{F}:$$
- Associativity of addition and scalar multiplication: $$\underline{u}+(\underline{v}+\underline{w})=(\underline{u}+\underline{v})+\underline{w}$$ and $$\lambda\cdot(\mu\cdot\underline{u})=(\lambda\mu)\cdot\underline{u}.$$
- Commutativity of addition: $$\underline{u}+\underline{v}=\underline{v}+\underline{u}.$$
- Distributivity of scalar multiplication over addition: $$(\lambda+\mu)\cdot\underline{u}=\lambda\cdot\underline{u}+\mu\cdot\underline{u}$$ and $$\lambda\cdot(\underline{u}+\underline{v})=\lambda\cdot\underline{u}+\lambda\cdot\underline{v}.$$
- Additive identity: $$\exists \, \underline{0} \in \mathcal{V} : \underline{u}+\underline{0}=\underline{u}.$$
- Scalar multiplicative identity: $$1\cdot\underline{u}=\underline{u}$$ where $$1$$ is the multiplicative identity of $$\mathbb{F}.$$
- Additive inverse: $$\exists \, {-}\underline{u} \in \mathcal{V} : \underline{u}+({-}\underline{u})=\underline{0}.$$

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}.$$ An element $$\underline{v} \in \mathcal{V}$$ is a **vector**. Usually $$\mathcal{V}=\mathbb{R}^n$$ or $$\mathcal{V}=\mathbb{C}^n,$$ the set of $$n$$-tuples $$\underline{v}=(v_1,\ldots,v_n)$$ with $$v_1,\ldots,v_n \in \mathbb{R}$$ or $$v_1,\ldots,v_n \in \mathbb{C}$$ respectively, with element-wise addition and scalar multiplication.

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}.$$ A **subspace** of $$\mathcal{V}$$ is a subset $$\mathcal{U} \subseteq \mathcal{V}$$ that is itself a vector space over $$\mathbb{F}$$ under the addition and scalar multiplication of $$\mathcal{V}.$$ A subset of $$\mathcal{V}$$ that does not satisfy all of the vector space axioms is not a subspace.

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F},$$ $$\underline{u}_1,\ldots,\underline{u}_n \in \mathcal{V}$$ and $$\alpha_1,\ldots,\alpha_n \in \mathbb{F}.$$ The vector $$\alpha_1\underline{u}_1+\ldots+\alpha_n\underline{u}_n$$ is a **linear combination** of $$\underline{u}_1,\ldots,\underline{u}_n$$ with **coefficients** $$\alpha_1,\ldots,\alpha_n.$$

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}$$ and $$U=\{\underline{u}_1,\ldots,\underline{u}_n\}$$ be a finite subset of $$\mathcal{V}.$$ The vectors in $$U$$ are **linearly dependent** if and only if at least one vector $$\underline{u}_k$$ is a linear combination of the other vectors in $$U.$$

$$\underline{u}_k = \sum_{i=1, i\neq k}^n \alpha_i\underline{u}_i$$

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}$$ and $$U=\{\underline{u}_1,\ldots,\underline{u}_n\}$$ be a finite subset of $$\mathcal{V}.$$ The vectors in $$U$$ are **linearly independent** if and only if they are not linearly dependent. Equivalently, the vectors in $$U$$ are linearly independent if and only if the only solution to $$\alpha_1\underline{u}_1+\ldots+\alpha_n\underline{u}_n=\underline{0}$$ is $$\alpha_1=\ldots=\alpha_n=0.$$ An infinite subset $$U$$ of $$\mathcal{V}$$ is linearly independent if and only if every finite subset of $$U$$ is linearly independent.

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}$$ and $$U$$ be a subset of $$\mathcal{V}.$$ The set $$U$$ **spans** $$\mathcal{V}$$ if and only if every vector in $$\mathcal{V}$$ is a linear combination of vectors in $$U.$$

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}$$ and $$U$$ be a subset of $$\mathcal{V}.$$ The set $$U$$ is a **basis** of $$\mathcal{V}$$ if and only if $$U$$ spans $$\mathcal{V}$$ and the vectors in $$U$$ are linearly independent.

Let $$\mathcal{V}$$ be a vector space over the field $$\mathbb{F}$$ with a basis $$U.$$ The **dimension** of $$\mathcal{V},$$ written $$\mathrm{dim}(\mathcal{V}),$$ is the number of vectors in $$U.$$ Every vector space spanned by a finite set has a basis, and all bases of a vector space have the same number of vectors, so the dimension of a vector space is uniquely defined. A vector space with a finite basis is **finite dimensional**.

Let $$\mathbb{F}$$ be a field, $$n \geq 1$$ and $$i\in\{1,\ldots,n\}.$$ The **standard basis vector** $$\underline{e}_i\in\mathbb{F}^n$$ is the $$n$$-tuple with $$1$$ in position $$i$$ and $$0$$ elsewhere. The **standard basis** of $$\mathbb{F}^n$$ is the set $$\{\underline{e}_1,\ldots,\underline{e}_n\},$$ which is a basis of $$\mathbb{F}^n,$$ so $$\mathrm{dim}(\mathbb{F}^n)=n.$$
