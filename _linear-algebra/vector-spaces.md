---
layout: post
category: "Linear Algebra"
title:  "Vector Spaces"
tags: ["linear algebra", "vector space"]
description: "A fundamental linear algebra structure"
---

A **binary operation** is a function $$\mathbb{X} \times \mathbb{X} \rightarrow \mathbb{X}$$ which maps ordered pairs of elements from $$\mathbb{X}$$ to other elements of $$\mathbb{X}$$.

A **field** $$\mathbb{F}$$ is a set with two binary operations called addition and scalar multiplication. Addition $$a+b$$ and scalar multiplication $$a \cdot b$$, $$a,b \in \mathbb{F}$$ satisfy the field axioms:
- Associativity of addition and scalar multiplication: $$a + (b + c) = (a + b) + c$$ and $$a \cdot (b \cdot c) = (a \cdot b) \cdot c$$.
- Commutativity of addition and scalar multiplication: $$a + b = b + a$$ and $$a \cdot b = b \cdot a$$.
- Distributivity of scalar multiplication over addition: $$a \cdot (b + c) = (a \cdot b) + (a \cdot c)$$.
- Additive and scalar multiplicative identity: $$\exists \, 0, 1 \in \mathbb{F} : a + 0 = a$$ and $$a \cdot 1 = a$$.
- Additive and scalar multiplicative inverse: $$\exists \, {-}a \in \mathbb{F} : a+(-a)=0 \, \forall a \in \mathbb{F}$$ and $$\exists \, a^{-1} \in \mathbb{F} \setminus \{0\} : a \cdot a^{-1} = 1 \, \forall a \in \mathbb{F}\setminus \{0\}$$.

The set $$\mathcal{V}$$ over the field $$\mathbb{F}$$ is a **vector space** if $$\mathcal{V}$$ is closed under addition $$\underline{u} + \underline{v} \in \mathcal{V} \, \forall \underline{u}, \underline{v} \in \mathcal{V}$$ and scalar multiplication $$s\cdot \underline{u} \in \mathcal{V} \, \forall s \in \mathbb{F}$$ and the elements of $$\mathcal{V}$$ satisfy the vector space axioms:
- Associativity of addition and scalar multiplication:
- Commutativity of addition:
- Distributivity of scalar multiplication over addition:
- Additive and scalar multiplicative identity:
- Additive inverse:

If $$\mathcal{V}$$ is a vector space then any element $$\underline{v} \in \mathcal{V}$$ is a **vector**.