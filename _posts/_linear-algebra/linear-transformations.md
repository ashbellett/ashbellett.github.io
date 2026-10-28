---
title:  "Linear Transformations"
description: "Mappings between vector spaces"
---

Let $$\mathcal{U}$$ and $$\mathcal{V}$$ be vector spaces over the field $$\mathbb{F}.$$ A function $$T: \mathcal{U} \rightarrow \mathcal{V}$$ is a **linear transformation** if and only if it preserves addition and scalar multiplication.

$$T(\underline{u}_1+\underline{u}_2)=T(\underline{u}_1)+T(\underline{u}_2) \,\, \forall \, \underline{u}_1,\underline{u}_2 \in \mathcal{U}$$

$$T(\lambda \underline{u}) = \lambda T(\underline{u}) \,\, \forall \, \underline{u} \in \mathcal{U}, \, \lambda \in \mathbb{F}$$

Let $$\mathcal{U}$$ and $$\mathcal{V}$$ be vector spaces over the field $$\mathbb{F}$$ and $$T: \mathcal{U} \rightarrow \mathcal{V}$$ be a linear transformation. The **image** of $$T$$ is the set of vectors in $$\mathcal{V}$$ that are mapped from $$\mathcal{U}$$ by $$T.$$

$$\mathrm{Im} \, T := \{T(\underline{u}):\underline{u}\in\mathcal{U}\}$$

Let $$\mathcal{U}$$ and $$\mathcal{V}$$ be vector spaces over the field $$\mathbb{F}$$ and $$T: \mathcal{U} \rightarrow \mathcal{V}$$ be a linear transformation. The **kernel** or **null space** of $$T$$ is the set of vectors in $$\mathcal{U}$$ that are mapped to $$\underline{0}$$ by $$T.$$

$$\mathrm{ker} \, T := \{\underline{u} \in \mathcal{U} : T(\underline{u}) = \underline{0}\}$$

The image of $$T$$ is a subspace of $$\mathcal{V}$$ and the kernel of $$T$$ is a subspace of $$\mathcal{U}.$$

Let $$\mathcal{U}$$ and $$\mathcal{V}$$ be vector spaces over the field $$\mathbb{F}$$ and $$T: \mathcal{U} \rightarrow \mathcal{V}$$ be a linear transformation. The **rank** of $$T$$ is the dimension of the image of $$T.$$

$$\mathrm{rank} \, T := \mathrm{dim}(\mathrm{Im} \, T)$$

Let $$\mathcal{U}$$ and $$\mathcal{V}$$ be vector spaces over the field $$\mathbb{F}$$ and $$T: \mathcal{U} \rightarrow \mathcal{V}$$ be a linear transformation. The **nullity** of $$T$$ is the dimension of the kernel of $$T.$$

$$\mathrm{null} \, T := \mathrm{dim}(\mathrm{ker} \, T)$$

Let $$\mathcal{U}$$ and $$\mathcal{V}$$ be vector spaces over the field $$\mathbb{F}$$ with $$\mathcal{U}$$ finite dimensional and $$T: \mathcal{U} \rightarrow \mathcal{V}$$ be a linear transformation. The **rank-nullity theorem** states that the dimension of $$\mathcal{U}$$ is the sum of the rank and the nullity of $$T.$$

$$\mathrm{dim}(\mathcal{U}) = \mathrm{rank}\, T + \mathrm{null} \, T$$

Let $$\mathcal{U}$$ and $$\mathcal{V}$$ be vector spaces over the field $$\mathbb{F}$$ and $$T: \mathcal{U} \rightarrow \mathcal{V}$$ be a linear transformation. The linear transformation $$T$$ is an **isomorphism** if and only if $$T$$ is a bijection. The vector spaces $$\mathcal{U}$$ and $$\mathcal{V}$$ are **isomorphic** if and only if there exists an isomorphism between them. Two finite dimensional vector spaces over the same field are isomorphic if and only if they have the same dimension.
