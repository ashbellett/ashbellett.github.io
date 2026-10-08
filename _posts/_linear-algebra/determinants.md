---
layout: post
category: "linear-algebra"
title:  "Determinants"
tags: ["linear", "algebra", "determinant"]
description: "Fundamental property of square matrices"
---

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix. If the $$i^{\mathrm{th}}$$ row and $$j^{\mathrm{th}}$$ column is removed from $$A$$ the resulting matrix $$B_{ij} \in \mathbb{F}^{\,(n-1)\times (n-1)}$$ is called the $$(i,j)$$-**sub-matrix** of $$A.$$ The $$(i,j)$$-**minor** of $$A$$ is the determinant $$M_{ij}\in\mathbb{F}$$ of the $$(i,j)$$-sub-matrix $$B_{ij}.$$ The $$(i,j)$$-**co-factor** of $$A,$$ $$C_{ij}\in\mathbb{F},$$ is the $$(i,j)$$-minor $$M_{ij}$$ scaled by $$(-1)^{i+j}.$$

$$M_{ij} = \lvert B_{ij}\rvert$$

$$C_{ij} = (-1)^{i+j}M_{ij}$$

The **determinant**, $$\mathrm{det}(A)$$ or $$\lvert A\rvert,$$ of $$A$$ is defined recursively. For $$n=1,$$ $$\lvert A \rvert = a_{11}.$$ For $$n \geq 2$$ it is defined with the **Laplace expansion** of $$A$$ along any fixed row $$i \in \{1,\ldots,n\}:$$

$$\lvert A \rvert = \sum_{j=1}^{n} a_{ij}C_{ij}$$

Every choice of row $$i$$ gives the same value.

For the simple case $$n=2,$$ $$\lvert A \rvert = a_{11}a_{22}-a_{12}a_{21}.$$

The determinant of a real, square matrix $$A\in\mathbb{R}^{\,n\times n}$$ is the signed volume of the parallelepiped formed by taking each row of $$A$$ as a vector in $$\mathbb{R}^n.$$ The volume itself is $$\lvert \mathrm{det}(A) \rvert$$ and the sign records whether the rows have the same orientation as the standard basis.

The determinant of square matrices $$A,B\in\mathbb{F}^{\,n\times n}$$ satisfies the following properties:
- Determinant of transpose: $$\lvert A \rvert\,= \lvert A^\intercal \rvert$$
- Determinant of scalar multiplication: $$\lvert \lambda A \rvert\,= \lambda^n\lvert A \rvert\,\,\forall\,\lambda\in\mathbb{F}$$
- Determinant of matrix multiplication: $$\lvert AB \rvert\,= \lvert A \rvert \lvert B \rvert$$
- Determinant of matrix inverse: $$\lvert A^{-1} \rvert\,=\frac{1}{\lvert A \rvert}$$ if $$A$$ is invertible
- Invertibility: $$\lvert A \rvert \,\neq 0 \Leftrightarrow A$$ is invertible
- Full rank: $$\lvert A \rvert \,\neq 0 \Leftrightarrow A$$ has rank $$n$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be an invertible square matrix, so that $$\lvert A\rvert \neq 0,$$ and let $$C\in\mathbb{F}^{\,n\times n}$$ be its **co-factor matrix** whose $$(i,j)^{\mathrm{th}}$$ element is $$C_{ij}.$$ The matrix inverse $$A^{-1}$$ can be calculated from the determinant and co-factors of $$A:$$

$$A^{-1}=\frac{C^\intercal}{\lvert A\rvert}$$

where the $$(i,j)^{\mathrm{th}}$$ element of $$A^{-1}$$ is $$\frac{C_{ji}}{\lvert A\rvert}.$$
