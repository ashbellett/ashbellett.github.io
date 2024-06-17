---
layout: post
category: "Linear Algebra"
title:  "Matrices"
tags: ["linear", "algebra", "matrix"]
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

Let $$A, B \in \mathbb{F}^{\,n\times p}$$ and $$\lambda \in \mathbb{F}$$. **Matrix addition** is defined to be the matrix $$A+B \in \mathbb{F}^{\,n\times p}$$ where elements have been summed together element-wise. **Matrix scalar multiplication** is defined to be the matrix $$\lambda A \in \mathbb{F}^{\,n\times p}$$ where the scalar $$\lambda$$ has been multiplied with every element of $$A$$.

Let $$A \in \mathbb{F}^{\,n\times p}$$ and $$B \in \mathbb{F}^{\,p\times m}$$. That is, $$A$$ has as many columns as $$B$$ has rows. **Matrix multiplication** is defined to be the matrix $$AB \in \mathbb{F}^{\,n\times m}$$ where elements indexed by the positional indices $$i,j$$ are defined by:

$$ab_{ij} = a_{i1}b_{1j}+a_{i2}b_{2j}+...a_{ip}b_{pj}=\sum_{k=1}^p a_{ik}b_{kj}$$

Matrix multiplication satisfies the following properties:
- Associativity: $$(AB)C=A(BC) \,\,\forall\,A \in \mathbb{F}^{\,n\times p},B \in \mathbb{F}^{\,p\times m},C \in \mathbb{F}^{\,m\times q}$$
- Distributivity: $$A(B+C)=AB+AC$$ and $$(A+D)B=AB+DB$$ $$\forall\,A \in \mathbb{F}^{\,n\times p},B \in \mathbb{F}^{\,p\times m},C \in \mathbb{F}^{\,p\times m}, D \in \mathbb{F}^{\,n\times p}$$
- Non-commutativity: $$AB \neq BA$$, in general, $$\forall\,A \in \mathbb{F}^{\,n\times p},B \in \mathbb{F}^{\,p\times n}$$

For a matrix to be multiplied with itself it must be square. Let $$A \in \mathbb{F}^{\,p\times p}$$. For $$n\geq2$$ the **matrix power** is recursively defined as the matrix

$$A^n=A^{n-1}A\in \mathbb{F}^{\,p\times p}.$$

The **identity matrix** $$I_n$$ of order $$n$$ is a square matrix with diagonal elements equal to one and zero otherwise. For a non-square matrix $$A\in\mathbb{F}^{\,n\times p}$$ there are two matrices that act as identity matrices for matrix multiplication: $$I_n$$ and $$I_p$$ which satisfy $$I_n A = AI_p = A$$. For a square matrix $$B\in\mathbb{F}^{\,p\times p}$$, $$B^0=I_p$$.

A **diagonal matrix** is a square matrix where non-diagonal elements are zero, a **null matrix** is a matrix where all elements are zero, a **symmetric matrix** is a matrix whose transpose equals itself, a **skew-symmetric matrix** is a matrix whose transpose equals minus itself, **upper triangular matrix** is a matrix where elements $$a_{ij}$$ indexed by the positional indices $$i,j$$ satisfy $$a_{ij} = 0\,\,\forall\,i>j$$ and a **lower triangular matrix** is a matrix where elements satisfy $$a_{ij} = 0\,\,\forall\,i<j$$.

Let $$A \in \mathbb{F}^{\,n\times n}$$ be a square matrix. $$A$$ is **invertible** if there exists another matrix $$A^{-1} \in \mathbb{F}^{\,n\times n}$$ such that $$AA^{-1}=A^{-1}A=I_n$$. If an invertible matrix exists, it is unique. If no inverse exists for $$A$$ then $$A$$ is **singular**.

Let $$A \in \mathbb{F}^{\,n\times n}$$ be a square matrix. $$A$$ is invertible if any of the following conditions are true (below is subset of the conditions described in the Invertible Matrix Theorem):
- $$A$$ has full rank
- Columns of $$A$$ form a basis for $$\mathbb{F}^n$$
- Transpose $$A^\intercal$$ is invertible
- $$A\underline{v}=\underline{0}$$ only has the trivial solution $$\underline{v}=\underline{0}$$

The matrix inverse satisfies the following properies for matrices $$A,B\in\mathbb{F}^{\,n\times n}$$ and scalar $$\lambda\in\mathbb{F}$$:

$$\left(\lambda A\right)^{-1}=\lambda^{-1}A^{-1}$$

$$\left(AB\right)^{-1}=B^{-1}A^{-1}$$

Let $$A \in \mathbb{F}^{\,n\times n}$$ be a square matrix. $$A$$ is an **orthogonal** matrix if its rows and columns form orthonormal sets of vectors. This is true if and only if the product of $$A$$ and its transpose $$A^\intercal$$ is equal to the identity matrix: $$AA^\intercal=AA^\intercal=I_n$$.

Orthogonal matrices satify the following properties:
- Matrix inverse is equal to transpose: $$A^{-1}=A^\intercal$$
- Orthogonality of matrix multiplication: $$AB$$ is orthogonal if $$A$$ and $$B$$ are orthogonal

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

Let $$A \in \mathbb{C}^{\,n\times n}$$ be a complex, square matrix. $$A$$ is a **Hermitian** matrix if it is equal to its own conjugate transpose: $$a_{ij}=\overline{a_{ji}}$$. The diagonal elements of a Hermitian matrix must be real.

Let $$A \in \mathbb{C}^{\,n\times n}$$ be a complex, square matrix. $$A$$ is a **unitary** matrix if its conjugate transpose is equal to its inverse: $$AA^*=A^*A=I_n$$.

Let $$A \in \mathbb{C}^{\,n\times n}$$ be a complex, square matrix. $$A$$ is **positive definite** if $$\underline{v}^*A\underline{v} > 0 \,\, \forall \, \underline{v} \in \mathbb{C}^n \setminus \{\underline{0}\}$$, **negative definite** if $$\underline{v}^*A\underline{v} < 0 \,\, \forall \, \underline{v} \in \mathbb{C}^n \setminus \{\underline{0}\}$$, **positive semi-definite** if $$\underline{v}^*A\underline{v} \geq 0 \,\, \forall \, \underline{v} \in \mathbb{C}^n \setminus \{\underline{0}\}$$ and **negative semi-definite** if $$\underline{v}^*A\underline{v} \leq 0 \,\, \forall \, \underline{v} \in \mathbb{C}^n \setminus \{\underline{0}\}$$.
