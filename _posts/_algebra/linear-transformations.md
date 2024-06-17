---
layout: post
category: "Linear Algebra"
title:  "Linear Transformations"
tags: ["linear", "algebra", "linear transformation"]
description: "Mappings between vector spaces"
---

Let $$\mathcal{U}, \mathcal{V}$$ be vector spaces over the field $$\mathbb{F}$$. A map $$T: \mathcal{U} \rightarrow \mathcal{V}$$ is a **linear transformation** $$\forall \, \underline{u},\underline{u}_1,\underline{u}_2 \in \mathcal{U}$$ and $$\forall \, \lambda \in \mathbb{F}$$ if it satisfies:
- $$T(\underline{u}_1+\underline{u}_2)=T(\underline{u}_1)+T(\underline{u}_2)$$;
- $$T(\lambda \underline{u}) = \lambda T(\underline{u})$$.

Let $$\mathcal{U}, \mathcal{V}$$ be vector spaces over the field $$\mathbb{F}$$ and $$T: \mathcal{U} \rightarrow \mathcal{V}$$ be a linear transformation. The **image** of $$T$$ is the set of vectors mapped by $$T$$ from $$\mathcal{U}$$:

$$\mathrm{Im} \, T := \{T(\underline{u}):\underline{u}\in\mathcal{U}\}$$

The **kernel** or **null space** of $$T$$ is the set of vectors in $$\mathcal{U}$$ which are mapped to $$\underline{0}$$ in $$\mathcal{V}$$ by $$T$$

$$\mathrm{ker} \, T := \{\underline{u} \in \mathcal{U} : T(\underline{u}) = \underline{0}\}$$

The **rank** of $$T$$ is the dimension of the image of $$T$$:

$$\mathrm{rank} \, T := \mathrm{dim}(\mathrm{Im} \, T)$$

The **nullity** of $$T$$ is the dimension of the kernel of $$T$$:

$$\mathrm{null} \, T := \mathrm{dim}(\mathrm{ker} \, T)$$

The **rank-nullity theorem** states that the dimension of $$\mathcal{U}$$ is the sum of the rank and nullity of $$T$$ if $$\mathcal{U}$$ is finite dimensional:

$$\mathrm{dim}(\mathcal{U}) = \mathrm{rank}\, T + \mathrm{null} \, T$$
