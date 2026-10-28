---
title:  "Determinants"
description: "Fundamental property of square matrices"
---

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix with $$n \geq 2.$$ The $$(i,j)$$-**sub-matrix** of $$A$$ is the matrix $$B_{ij} \in \mathbb{F}^{\,(n-1)\times (n-1)}$$ obtained by removing the $$i^{\mathrm{th}}$$ row and the $$j^{\mathrm{th}}$$ column from $$A.$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix. The **determinant** of $$A,$$ written $$\mathrm{det}(A)$$ or $$\lvert A\rvert,$$ is the scalar in $$\mathbb{F}$$ defined recursively on $$n.$$ For $$n=1,$$ the determinant is the single element of $$A.$$

$$\lvert A \rvert := a_{11}$$

For $$n \geq 2,$$ the determinant is defined through the minors and co-factors of $$A$$ below, which are determinants of $$(n-1)\times(n-1)$$ matrices.

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix with $$n \geq 2.$$ The $$(i,j)$$-**minor** of $$A$$ is the determinant $$M_{ij}\in\mathbb{F}$$ of the $$(i,j)$$-sub-matrix of $$A.$$

$$M_{ij} := \lvert B_{ij}\rvert$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix with $$n \geq 2.$$ The $$(i,j)$$-**co-factor** of $$A$$ is the $$(i,j)$$-minor of $$A$$ scaled by $$(-1)^{i+j}.$$

$$C_{ij} := (-1)^{i+j}M_{ij}$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix with $$n \geq 2$$ and $$i \in \{1,\ldots,n\}$$ be a fixed row. The **Laplace expansion** of $$A$$ along row $$i$$ is the sum of the elements of row $$i$$ weighted by their co-factors, and the determinant of $$A$$ is defined to be this sum.

$$\lvert A \rvert := \sum_{j=1}^{n} a_{ij}C_{ij}$$

Every choice of row $$i$$ gives the same value, and the expansion along any fixed column $$j,$$ $$\sum_{i=1}^{n} a_{ij}C_{ij},$$ also gives the same value. For $$n=2,$$ $$\lvert A \rvert = a_{11}a_{22}-a_{12}a_{21}.$$

Let $$A\in\mathbb{R}^{\,n\times n}$$ be a real square matrix. The determinant of $$A$$ is the signed volume of the parallelepiped whose edges are the rows of $$A$$ taken as vectors in $$\mathbb{R}^n.$$ The volume is $$\lvert \mathrm{det}(A) \rvert$$ and the sign records whether the rows have the same orientation as the standard basis.

The determinant has the following properties for square matrices $$A,B\in\mathbb{F}^{\,n\times n}:$$
- Determinant of transpose: $$\lvert A \rvert\,= \lvert A^\intercal \rvert.$$
- Determinant of scalar multiplication: $$\lvert \lambda A \rvert\,= \lambda^n\lvert A \rvert\,\,\forall\,\lambda\in\mathbb{F}.$$
- Determinant of matrix multiplication: $$\lvert AB \rvert\,= \lvert A \rvert \lvert B \rvert.$$
- Determinant of matrix inverse: $$\lvert A^{-1} \rvert\,=\frac{1}{\lvert A \rvert}$$ if $$A$$ is invertible.
- Determinant of a triangular matrix: $$\lvert A \rvert\,=\prod_{i=1}^n a_{ii}$$ if $$A$$ is upper or lower triangular.
- Invertibility: $$\lvert A \rvert \,\neq 0$$ if and only if $$A$$ is invertible.
- Full rank: $$\lvert A \rvert \,\neq 0$$ if and only if $$A$$ has rank $$n.$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix with $$n \geq 2.$$ The **co-factor matrix** of $$A$$ is the matrix $$C\in\mathbb{F}^{\,n\times n}$$ whose $$(i,j)^{\mathrm{th}}$$ element is the co-factor $$C_{ij}.$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be an invertible square matrix with $$n \geq 2$$ and co-factor matrix $$C.$$ The inverse of $$A$$ is the transpose of the co-factor matrix divided by the determinant.

$$A^{-1}=\frac{C^\intercal}{\lvert A\rvert}$$

The $$(i,j)^{\mathrm{th}}$$ element of $$A^{-1}$$ is $$\frac{C_{ji}}{\lvert A\rvert}.$$
