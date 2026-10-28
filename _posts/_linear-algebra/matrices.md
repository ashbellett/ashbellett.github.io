---
title:  "Matrices"
description: "Multi-dimensional data structures"
---

Let $$\mathbb{F}$$ be a field and $$n,p \geq 1$$ be natural numbers. A **matrix** $$A \in \mathbb{F}^{\,n\times p}$$ over $$\mathbb{F}$$ is a collection of $$np$$ scalars $$a_{ij} \in \mathbb{F}$$ indexed by a **row index** $$i=1,\ldots,n$$ and a **column index** $$j=1,\ldots,p.$$ The **order** of $$A$$ is $$n \times p,$$ where $$n$$ is the number of rows and $$p$$ is the number of columns. A matrix is written in rectangular form.

$$A=\begin{bmatrix}
  a_{11} & a_{12} & \ldots & a_{1p} \\
  a_{21} & a_{22} & \ldots & a_{2p} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{n1} & a_{n2} & \ldots & a_{np}
\end{bmatrix}$$

Let $$A \in \mathbb{F}^{\,n\times p}$$ be a matrix. The matrix $$A$$ is **square** if and only if $$n=p.$$ The scalars $$a_{ii}$$ of a square matrix are its **diagonal elements**.

A **column vector** $$\underline{a}\in \mathbb{F}^n$$ is a matrix of order $$n \times 1$$ and is written in column form.

$$\underline{a} = \begin{bmatrix}
  a_1 \\
  a_2 \\
  \vdots \\
  a_n
\end{bmatrix}$$

A **row vector** $$\underline{a}\in \mathbb{F}^{1\times p}$$ is a matrix of order $$1 \times p$$ and is written in row form.

$$\underline{a} = \begin{bmatrix}
  a_1 & a_2 & \ldots & a_p
\end{bmatrix}$$

Let $$A \in \mathbb{F}^{\,n\times p}$$ be a matrix. The **columns** of $$A$$ are the $$p$$ column vectors $$\underline{a}_1,\ldots,\underline{a}_p \in \mathbb{F}^n$$ formed from each column of $$A,$$ and the **rows** of $$A$$ are the $$n$$ row vectors formed from each row of $$A.$$

Let $$A, B \in \mathbb{F}^{\,n\times p}$$ be matrices of the same order. **Matrix addition** is the matrix $$A+B \in \mathbb{F}^{\,n\times p}$$ whose elements are the element-wise sums.

$$(A+B)_{ij} := a_{ij}+b_{ij}$$

Let $$A \in \mathbb{F}^{\,n\times p}$$ be a matrix and $$\lambda \in \mathbb{F}$$ be a scalar. **Matrix scalar multiplication** is the matrix $$\lambda A \in \mathbb{F}^{\,n\times p}$$ whose elements are the elements of $$A$$ multiplied by $$\lambda.$$

$$(\lambda A)_{ij} := \lambda a_{ij}$$

The set $$\mathbb{F}^{\,n\times p}$$ with matrix addition and matrix scalar multiplication is a vector space over $$\mathbb{F}.$$

Let $$A \in \mathbb{F}^{\,n\times p}$$ and $$B \in \mathbb{F}^{\,p\times m}$$ be matrices such that $$A$$ has as many columns as $$B$$ has rows. **Matrix multiplication** is the matrix $$AB \in \mathbb{F}^{\,n\times m}$$ whose element in row $$i$$ and column $$j$$ is the sum of the products of the elements of row $$i$$ of $$A$$ with the elements of column $$j$$ of $$B.$$

$$(AB)_{ij} := a_{i1}b_{1j}+a_{i2}b_{2j}+\ldots+a_{ip}b_{pj}=\sum_{k=1}^p a_{ik}b_{kj}$$

Matrix multiplication has the following properties:
- Associativity: $$(AB)C=A(BC) \,\,\forall\,A \in \mathbb{F}^{\,n\times p},B \in \mathbb{F}^{\,p\times m},C \in \mathbb{F}^{\,m\times q}.$$
- Distributivity: $$A(B+C)=AB+AC$$ and $$(A+D)B=AB+DB$$ $$\forall\,A \in \mathbb{F}^{\,n\times p},B \in \mathbb{F}^{\,p\times m},C \in \mathbb{F}^{\,p\times m}, D \in \mathbb{F}^{\,n\times p}.$$
- Non-commutativity: in general $$AB \neq BA,$$ even when both products are defined.

Let $$n \geq 1.$$ The **identity matrix** $$I_n \in \mathbb{F}^{\,n\times n}$$ is the square matrix whose diagonal elements are $$1$$ and whose other elements are $$0.$$ The identity matrix has the following property for every $$A\in\mathbb{F}^{\,n\times p}:$$

$$I_n A = AI_p = A$$

Let $$A \in \mathbb{F}^{\,p\times p}$$ be a square matrix and $$n \in \mathbb{N}.$$ The **matrix power** $$A^n \in \mathbb{F}^{\,p\times p}$$ is defined recursively by $$A^0=I_p$$ and, for $$n\geq1,$$

$$A^n:=A^{n-1}A.$$

Let $$A\in \mathbb{F}^{\,n\times p}$$ be a matrix. The **transpose** of $$A$$ is the matrix $$A^\intercal\in \mathbb{F}^{\,p\times n}$$ whose rows are the columns of $$A.$$

$$A^\intercal=\begin{bmatrix}
  a_{11} & a_{21} & \ldots & a_{n1} \\
  a_{12} & a_{22} & \ldots & a_{n2} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{1p} & a_{2p} & \ldots & a_{np}
\end{bmatrix}$$

The transpose has the following properties for $$A,B \in \mathbb{F}^{\,n\times p}$$ and $$C \in \mathbb{F}^{\,p\times m}:$$

$$\left(A^\intercal\right)^\intercal=A$$

$$\left(A+B\right)^\intercal = A^\intercal+B^\intercal$$

$$\left(AC\right)^\intercal=C^\intercal A^\intercal$$

Let $$A\in \mathbb{F}^{\,n\times n}$$ be a square matrix. The **trace** of $$A$$ is the sum of its diagonal elements.

$$\mathrm{tr}(A):=\sum_{i=1}^n a_{ii} \in \mathbb{F}$$

The trace has the following properties:

$$\mathrm{tr}(\alpha) = \alpha \,\,\forall\, \alpha \in \mathbb{F}$$

$$\mathrm{tr}(A\pm B) = \mathrm{tr}(A)\pm\mathrm{tr}(B) \,\,\forall\, A,B \in \mathbb{F}^{\,n\times n}$$

$$\mathrm{tr}(\alpha A) = \alpha\,\mathrm{tr}(A) \,\,\forall\, \alpha \in \mathbb{F}, A \in \mathbb{F}^{\,n\times n}$$

$$\mathrm{tr}(AB) = \mathrm{tr}(BA) \,\,\forall\, A \in \mathbb{F}^{\,n\times p}, B \in \mathbb{F}^{\,p\times n}$$

$$\sum_i \underline{u}_{i}^\intercal A \underline{u}_i = \mathrm{tr}(AT) \,\,\forall\, \underline{u}_i \in \mathbb{F}^n, A \in \mathbb{F}^{\,n\times n} \,\,\mathrm{where} \,\, T=\sum_i \underline{u}_i \underline{u}_i^\intercal$$

Let $$A \in \mathbb{F}^{\,n\times p}$$ be a matrix. The **column space** of $$A$$ is the subspace of $$\mathbb{F}^n$$ spanned by the columns of $$A.$$ The **row space** of $$A$$ is the subspace of $$\mathbb{F}^{1\times p}$$ spanned by the rows of $$A.$$ The column space and the row space of a matrix have equal dimension.

Let $$A\in \mathbb{F}^{\,n\times p}$$ be a matrix. The **rank** of $$A,$$ written $$\mathrm{rank}\,A,$$ is the dimension of the column space of $$A.$$ The rank of $$A$$ equals the maximum number of linearly independent columns of $$A,$$ which equals the maximum number of linearly independent rows of $$A.$$ The rank of $$A$$ is at most $$\min\{n,p\}.$$

Let $$A\in \mathbb{F}^{\,n\times p}$$ be a matrix with rank $$r.$$ The matrix $$A$$ is **full rank** if and only if $$r=\min\{n,p\}.$$ The matrix $$A$$ is **rank deficient** if and only if $$r<\min\{n,p\},$$ in which case its **rank deficiency** is $$\min\{n,p\}-r.$$

Let $$A \in \mathbb{F}^{\,n\times n}$$ be a square matrix. The matrix $$A$$ is a **diagonal matrix** if and only if every element of $$A$$ that is not a diagonal element is $$0.$$

Let $$A \in \mathbb{F}^{\,n\times p}$$ be a matrix. The matrix $$A$$ is a **null matrix** if and only if every element of $$A$$ is $$0.$$

Let $$A \in \mathbb{F}^{\,n\times n}$$ be a square matrix. The matrix $$A$$ is a **symmetric matrix** if and only if $$A^\intercal=A.$$ The matrix $$A$$ is a **skew-symmetric matrix** if and only if $$A^\intercal=-A.$$

Let $$A \in \mathbb{F}^{\,n\times n}$$ be a square matrix. The matrix $$A$$ is an **upper triangular matrix** if and only if every element below the diagonal is $$0,$$ that is $$a_{ij} = 0\,\,\forall\,i>j.$$ The matrix $$A$$ is a **lower triangular matrix** if and only if every element above the diagonal is $$0,$$ that is $$a_{ij} = 0\,\,\forall\,i<j.$$

Let $$A \in \mathbb{F}^{\,n\times n}$$ be a square matrix. The matrix $$A$$ is **invertible** if and only if there exists a matrix $$A^{-1} \in \mathbb{F}^{\,n\times n}$$ such that $$AA^{-1}=A^{-1}A=I_n.$$ The matrix $$A^{-1}$$ is the **inverse** of $$A.$$ If an inverse exists then it is unique.

Let $$A \in \mathbb{F}^{\,n\times n}$$ be a square matrix. The matrix $$A$$ is **singular** if and only if it is not invertible.

Let $$A \in \mathbb{F}^{\,n\times n}$$ be a square matrix. The following conditions are equivalent, and each is equivalent to $$A$$ being invertible:
- $$A$$ has full rank;
- the columns of $$A$$ form a basis of $$\mathbb{F}^n;$$
- the transpose $$A^\intercal$$ is invertible;
- the equation $$A\underline{v}=\underline{0}$$ has only the solution $$\underline{v}=\underline{0}.$$

The matrix inverse has the following properties for invertible matrices $$A,B\in\mathbb{F}^{\,n\times n}$$ and non-zero scalars $$\lambda\in\mathbb{F}:$$

$$\left(\lambda A\right)^{-1}=\lambda^{-1}A^{-1}$$

$$\left(AB\right)^{-1}=B^{-1}A^{-1}$$

$$\left(A^\intercal\right)^{-1}=\left(A^{-1}\right)^\intercal$$

Let $$A \in \mathbb{R}^{\,n\times n}$$ be a real square matrix. The matrix $$A$$ is an **orthogonal matrix** if and only if the product of $$A$$ with its transpose is the identity matrix.

$$AA^\intercal=A^\intercal A=I_n$$

Equivalently, $$A$$ is orthogonal if and only if its columns form an orthonormal set in $$\mathbb{R}^n$$ with respect to the inner product $$\langle\underline{u},\underline{v}\rangle=\underline{u}^\intercal\underline{v},$$ if and only if its rows form an orthonormal set. Orthogonal matrices have the following properties:
- the inverse is the transpose: $$A^{-1}=A^\intercal;$$
- the product $$AB$$ of orthogonal matrices $$A$$ and $$B$$ is orthogonal.

Let $$A \in \mathbb{R}^{\,n\times p}$$ be a real matrix with $$n\neq p.$$ The matrix $$A$$ is a **semi-orthogonal matrix** if and only if either $$n>p$$ and the columns of $$A$$ form an orthonormal set, or $$n<p$$ and the rows of $$A$$ form an orthonormal set.

Let $$A \in \mathbb{C}^{\,n\times p}$$ be a complex matrix. The **conjugate transpose** of $$A$$ is the matrix $$A^*\in \mathbb{C}^{\,p\times n}$$ whose rows are the columns of $$A$$ with each element replaced by its complex conjugate.

$$A^*=\begin{bmatrix}
  \overline{a_{11}} & \overline{a_{21}} & \ldots & \overline{a_{n1}} \\
  \overline{a_{12}} & \overline{a_{22}} & \ldots & \overline{a_{n2}} \\
  \vdots & \vdots & \ddots & \vdots \\
  \overline{a_{1p}} & \overline{a_{2p}} & \ldots & \overline{a_{np}}
\end{bmatrix}$$

Let $$A \in \mathbb{C}^{\,n\times n}$$ be a complex square matrix. The matrix $$A$$ is a **Hermitian matrix** if and only if $$A^*=A,$$ that is $$a_{ij}=\overline{a_{ji}}.$$ The diagonal elements of a Hermitian matrix are real. A real symmetric matrix is Hermitian.

Let $$A \in \mathbb{C}^{\,n\times n}$$ be a complex square matrix. The matrix $$A$$ is a **unitary matrix** if and only if the product of $$A$$ with its conjugate transpose is the identity matrix.

$$AA^*=A^*A=I_n$$

A real orthogonal matrix is unitary.

Let $$A \in \mathbb{C}^{\,n\times n}$$ be a Hermitian matrix, so that $$\underline{v}^*A\underline{v}$$ is real for every $$\underline{v} \in \mathbb{C}^n.$$ The matrix $$A$$ is **positive definite** if and only if $$\underline{v}^*A\underline{v} > 0 \,\, \forall \, \underline{v} \in \mathbb{C}^n \setminus \{\underline{0}\}.$$ The matrix $$A$$ is **negative definite** if and only if $$\underline{v}^*A\underline{v} < 0 \,\, \forall \, \underline{v} \in \mathbb{C}^n \setminus \{\underline{0}\}.$$ The matrix $$A$$ is **positive semi-definite** if and only if $$\underline{v}^*A\underline{v} \geq 0 \,\, \forall \, \underline{v} \in \mathbb{C}^n.$$ The matrix $$A$$ is **negative semi-definite** if and only if $$\underline{v}^*A\underline{v} \leq 0 \,\, \forall \, \underline{v} \in \mathbb{C}^n.$$ For a real symmetric matrix the same definitions apply with $$\underline{v}^\intercal A\underline{v}$$ for $$\underline{v} \in \mathbb{R}^n.$$
