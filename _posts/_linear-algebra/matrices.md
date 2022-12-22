---
layout: post
category: "Linear Algebra"
title:  "Matrices"
tags: ["linear algebra", "matrix"]
description: "Multi-dimensional data structures"
---

A **matrix** $$A \in \mathbb{F}^{\,n\times p} \,\,\forall\, n,p \geq 1$$ over the field $$\mathbb{F}$$ with **order** $$n \times p$$ is a collection of $$np$$ scalar elements $$a_{ij} \in \mathbb{F}$$ where $$n$$ is the number of rows, $$p$$ is the number of columns, $$i=1,...,n$$ and $$j=1,...,p$$. The positional indices $$i,j$$ allow the matrix to be expressed in a rectangular format:

$$A=\begin{bmatrix}
  a_{11} & a_{12} & \ldots & a_{1p} \\
  a_{21} & a_{22} & \ldots & a_{2p} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{n1} & a_{n2} & \ldots & a_{np}
\end{bmatrix}$$

A **column vector** is a collection of $$n$$ scalar elements $$a_i \in \mathbb{F}$$ equivalent to a matrix with column-order one $$\underline{a}\in \mathbb{F}^n$$ and expressed in a columnar form:

$$\underline{a} = \begin{bmatrix}
  a_1 \\
  a_2 \\
  \vdots \\
  a_n
\end{bmatrix}$$

A **row vector** is a collection of $$p$$ scalar elements $$a_i \in \mathbb{F}$$ equivalent to a matrix with row-order one $$\underline{a}\in \mathbb{F}^{1\times p}$$ and expressed in a row form:

$$\underline{a} = \begin{bmatrix}
  a_1 & a_2 & \ldots & a_p
\end{bmatrix}$$

The **column space** and **row space** of a matrix $$A$$ is the vector space spanned by the column vectors or row vectors of $$A$$ respectively. The column and row space of any matrix have equal dimension.

The **rank** of a matrix $$A\in \mathbb{F}^{\,n\times p}$$ is the dimension of the vector space spanned by the $$p$$ column vectors or $$n$$ row vectors of $$A$$. The rank of a matrix is not necessarily equal to the number of columns or rows; it is equal to the number of linearly independent columns or rows.

Let $$A\in \mathbb{F}^{\,n\times p}$$ be a matrix with rank $$r$$. If $$r=\min\{n,p\}$$ then $$A$$ is **full rank**. If $$r<\min\{n,p\}$$ then $$A$$ is **rank deficient** and its **rank deficiency** is $$\min\{n,p\}-r$$.

The **transpose** of a matrix $$A\in \mathbb{R}^{\,n\times p}$$ is the matrix $$A\in \mathbb{R}^{\,p\times n}$$ whose rows and columns have been interchanged from $$A$$:

$$A^\intercal=\begin{bmatrix}
  a_{11} & a_{21} & \ldots & a_{n1} \\
  a_{12} & a_{22} & \ldots & a_{n2} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{1p} & a_{2p} & \ldots & a_{np}
\end{bmatrix}$$

The transpose operator satisfies the following properties:

$$\left(A^\intercal\right)^\intercal=A$$

$$\left(A+B\right)^\intercal = A^\intercal+B^\intercal$$

$$\left(AB\right)^\intercal=B^\intercal A^\intercal$$

The **trace** of a square matrix $$A\in \mathbb{F}^{\,n\times n}$$ is the sum of the diagonal elements of $$A$$.

$$\mathrm{tr}(A)=\sum_{i=1}^n a_{ii} \in \mathbb{F}$$

The trace function satisfies the following properties:

$$\mathrm{tr}(\alpha) = \alpha \,\,\forall\, \alpha \in \mathbb{F}$$

$$\mathrm{tr}(A\pm B) = \mathrm{tr}(A)\pm\mathrm{tr}(B) \,\,\forall\, A,B \in \mathbb{F}^{\,n\times n}$$

$$\mathrm{tr}(\alpha A) = \alpha\,\mathrm{tr}(A) \,\,\forall\, \alpha \in \mathbb{F}, A \in \mathbb{F}^{\,n\times n}$$

$$\mathrm{tr}(AB) = \mathrm{tr}(BA) \,\,\forall\, A \in \mathbb{F}^{\,n\times p}, B \in \mathbb{F}^{\,p\times n}$$

$$\sum_i \underline{u}_{i}^\intercal A \underline{u}_i = \mathrm{tr}(AT) \,\,\forall\, \underline{u}_i \in \mathbb{F}^n, A \in \mathbb{F}^{\,n\times n} \,\,\mathrm{where} \,\, T=\sum_i \underline{u}_i \underline{u}_i^\intercal$$

Addition, scalar multiplication, matrix multiplication, power matrices

Identity matrix, diagonal matrices, square matrices, symmetric matrices, triangular matrices

Invertibility, conditions for invertibility

Let $$A \in \mathbb{F}^{\,n\times n}$$ be a square matrix. $$A$$ is an **orthogonal** matrix if its rows and columns form orthonormal sets of vectors. This is true if and only if the product of $$A$$ and its transpose $$A^\intercal$$ is equal to the identity matrix.

$$AA^\intercal=AA^\intercal=I_n$$

Orthogonal matrices satify the following properties:

$$A^{-1}=A^\intercal$$

$$|A|=\pm1$$

$$AB \mathrm{\,\,is\,\,orthogonal\,\,if\,\,} A \mathrm{\,\,and\,\,} B \mathrm{\,\,are\,\,orthogonal}$$

Let $$A \in \mathbb{F}^{\,n\times p}\,\,\forall\, n\neq p$$ be a non-square matrix. $$A$$ is a **semi-orthogonal** matrix if:
- the columns of $$A$$ form orthonormal sets and $$n>p$$; or
- the rows of $$A$$ form orthonormal sets and $$n<p$$.

Let $$A \in \mathbb{C}^{\,n\times p}$$. The **conjugate transpose** is the matrix $$A^*\in \mathbb{C}^{\,p\times n}$$ whose rows and columns have been interchanged from $$A$$ and whose elements are the complex conjugate of the elements in $$A$$:

$$A^*=\begin{bmatrix}
  \overline{a_{11}} & \overline{a_{21}} & \ldots & \overline{a_{n1}} \\
  \overline{a_{12}} & \overline{a_{22}} & \ldots & \overline{a_{n2}} \\
  \vdots & \vdots & \ddots & \vdots \\
  \overline{a_{1p}} & \overline{a_{2p}} & \ldots & \overline{a_{np}}
\end{bmatrix}$$

Let $$A \in \mathbb{C}^{\,n\times n}$$ be a complex, square matrix. $$A$$ is a **Hermitian** matrix if it is equal to its own conjugate transpose. The diagonal elements of a Hermitian matrix must be real.

$$a_{ij}=\overline{a_{ji}}$$

Let $$A \in \mathbb{C}^{\,n\times n}$$ be a complex, square matrix. $$A$$ is a **unitary** matrix if its conjugate transpose is equal to its inverse.

$$AA^*=A^*A=I_n$$

Positive definiteness
