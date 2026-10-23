---
layout: post
category: "linear-algebra"
title:  "Matrix Decompositions"
tags: ["linear", "algebra", "matrix decomposition"]
description: "Decompositions of square and non-square matrices"
---

A **matrix decomposition** or **matrix factorisation** expresses a matrix $$A$$ as a product of matrices with special structure, such as triangular, diagonal or orthogonal matrices, so that properties of $$A$$ can be read off the factors and systems of linear equations involving $$A$$ can be solved by simpler steps. The diagonalisation $$A=P\Lambda P^{-1}$$ of a non-defective square matrix is one such decomposition.

The **spectral theorem** states that a real symmetric matrix $$A\in\mathbb{R}^{\,n\times n}$$ has $$n$$ real eigenvalues $$\lambda_1,\ldots,\lambda_n,$$ repeated according to algebraic multiplicity, and an eigen-basis of $$\mathbb{R}^n$$ that is an orthonormal set. Collecting the orthonormal eigenvectors as the columns of $$Q$$ gives an orthogonal matrix and the **spectral decomposition**

$$A=Q\Lambda Q^\intercal=\sum_{i=1}^n\lambda_i\,\underline{q}_i\underline{q}_i^\intercal$$

where $$\Lambda$$ is the diagonal matrix of eigenvalues. A real symmetric matrix is therefore positive definite if and only if all of its eigenvalues are positive, and positive semi-definite if and only if all of its eigenvalues are non-negative. The complex analogue states that a Hermitian matrix has real eigenvalues and a decomposition $$A=U\Lambda U^*$$ with $$U$$ unitary.

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix. The **leading principal sub-matrix** $$A_k\in\mathbb{F}^{\,k\times k}$$ of $$A$$ is formed from its first $$k$$ rows and columns, and the **leading principal minor** of order $$k$$ is $$\lvert A_k\rvert.$$ An **LU decomposition** of $$A$$ is a factorisation

$$A=LU$$

where $$L\in\mathbb{F}^{\,n\times n}$$ is a lower triangular matrix with diagonal elements equal to one and $$U\in\mathbb{F}^{\,n\times n}$$ is an upper triangular matrix. If $$A$$ is invertible then an LU decomposition exists if and only if every leading principal minor $$\lvert A_k\rvert,$$ $$k=1,\ldots,n-1,$$ is non-zero, and it is then unique. The factors are produced by Gaussian elimination: $$U$$ is the result of eliminating the elements below the diagonal column by column using row operations and $$L$$ records the multipliers used.

A **permutation matrix** $$P\in\mathbb{F}^{\,n\times n}$$ is a matrix obtained by reordering the rows of the identity matrix $$I_n,$$ so that $$PA$$ reorders the rows of $$A$$ in the same way. Permutation matrices are orthogonal, so $$P^{-1}=P^\intercal.$$ Every square matrix $$A$$ has a **PLU decomposition**

$$PA=LU$$

for some permutation matrix $$P,$$ obtained by swapping rows during Gaussian elimination so that each diagonal element used for elimination is non-zero. The determinant follows from the factors, $$\lvert A\rvert=\lvert P\rvert\prod_{i=1}^n u_{ii}$$ where $$\lvert P\rvert=\pm 1,$$ and the system $$A\underline{x}=\underline{b}$$ is solved by the two triangular systems $$L\underline{y}=P\underline{b}$$ and $$U\underline{x}=\underline{y}$$ by forward and back substitution.

Let $$A\in\mathbb{F}^{\,n\times p}$$ be a matrix with rank $$r\geq 1.$$ A **rank factorisation** of $$A$$ is a factorisation

$$A=CF$$

where $$C\in\mathbb{F}^{\,n\times r}$$ and $$F\in\mathbb{F}^{\,r\times p}$$ both have rank $$r.$$ Every matrix of rank $$r\geq 1$$ has a rank factorisation: the columns of $$C$$ can be taken to be any basis of the column space of $$A$$ and the columns of $$F$$ are then the coordinates of the columns of $$A$$ in that basis. The factorisation is not unique, since $$A=\left(CM\right)\left(M^{-1}F\right)$$ for any invertible $$M\in\mathbb{F}^{\,r\times r},$$ and $$r$$ is the smallest inner dimension for which $$A$$ factorises as a product of two matrices.

Let $$A\in\mathbb{R}^{\,n\times n}$$ be a real symmetric positive definite matrix. The **Cholesky decomposition** of $$A$$ is the factorisation

$$A=LL^\intercal$$

where $$L\in\mathbb{R}^{\,n\times n}$$ is a lower triangular matrix with positive diagonal elements. The Cholesky decomposition exists and is unique if and only if $$A$$ is symmetric positive definite, so attempting to compute it is a test for positive definiteness. For a Hermitian positive definite matrix the decomposition is $$A=LL^*.$$ The elements of $$L$$ are computed column by column from

$$l_{jj}=\sqrt{a_{jj}-\sum_{k=1}^{j-1}l_{jk}^2},\qquad l_{ij}=\frac{1}{l_{jj}}\left(a_{ij}-\sum_{k=1}^{j-1}l_{ik}l_{jk}\right)\,\,\forall\,i>j,$$

the determinant is $$\lvert A\rvert=\prod_{i=1}^n l_{ii}^2$$ and $$L$$ acts as a matrix square root of $$A.$$ A symmetric positive semi-definite matrix also factorises as $$LL^\intercal$$ with non-negative diagonal elements, but then not necessarily uniquely.

Let $$A\in\mathbb{R}^{\,n\times p}$$ be a real matrix with $$n\geq p.$$ A **QR decomposition** of $$A$$ is a factorisation

$$A=QR$$

where $$Q\in\mathbb{R}^{\,n\times p}$$ has orthonormal columns, so is orthogonal when $$n=p$$ and semi-orthogonal when $$n>p,$$ and $$R\in\mathbb{R}^{\,p\times p}$$ is an upper triangular matrix. This is the **thin QR decomposition**. The **full QR decomposition** extends $$Q$$ to an orthogonal matrix in $$\mathbb{R}^{\,n\times n}$$ by appending $$n-p$$ further orthonormal columns and $$R$$ to a matrix in $$\mathbb{R}^{\,n\times p}$$ by appending $$n-p$$ rows of zeros. Every real matrix has a QR decomposition. If $$A$$ has rank $$p$$ then the thin QR decomposition with positive diagonal elements of $$R$$ is unique and is given by Gram-Schmidt orthonormalisation of the columns $$\underline{a}_1,\ldots,\underline{a}_p$$ of $$A:$$ the columns $$\underline{q}_1,\ldots,\underline{q}_p$$ of $$Q$$ are the orthonormalised vectors and

$$r_{ij}=\langle\underline{a}_j,\underline{q}_i\rangle\,\,\forall\,i\leq j$$

so that $$\underline{a}_j=\sum_{i=1}^j r_{ij}\underline{q}_i.$$ The columns of $$Q$$ are an orthonormal basis of the column space of $$A.$$ The QR decomposition solves the **least squares problem** of minimising $$\lVert A\underline{x}-\underline{b}\rVert$$ over $$\underline{x}\in\mathbb{R}^p$$ through the triangular system $$R\underline{x}=Q^\intercal\underline{b}.$$ The complex analogue has unitary $$Q$$ and uses the conjugate transpose.

Let $$A\in\mathbb{R}^{\,n\times p}$$ be a real matrix. The matrix $$A^\intercal A\in\mathbb{R}^{\,p\times p}$$ is symmetric positive semi-definite, since $$\underline{v}^\intercal A^\intercal A\underline{v}=\lVert A\underline{v}\rVert^2\geq 0,$$ so by the spectral theorem its eigenvalues $$\lambda_1\geq\ldots\geq\lambda_p\geq 0$$ are real and non-negative. The **singular values** of $$A$$ are the square roots of these eigenvalues in decreasing order.

$$\sigma_i:=\sqrt{\lambda_i},\qquad\sigma_1\geq\sigma_2\geq\ldots\geq\sigma_{\min\{n,p\}}\geq 0$$

The matrices $$A^\intercal A$$ and $$AA^\intercal$$ share their non-zero eigenvalues, so $$A$$ has $$\min\{n,p\}$$ singular values and the number of non-zero singular values is the rank of $$A.$$

The **singular value decomposition** (SVD) of $$A$$ is the factorisation

$$A=U\Sigma V^\intercal$$

where $$U\in\mathbb{R}^{\,n\times n}$$ and $$V\in\mathbb{R}^{\,p\times p}$$ are orthogonal matrices and $$\Sigma\in\mathbb{R}^{\,n\times p}$$ has the singular values $$\sigma_1,\ldots,\sigma_{\min\{n,p\}}$$ along its diagonal and zeros elsewhere. The columns $$\underline{u}_1,\ldots,\underline{u}_n$$ of $$U$$ are the **left singular vectors** and the columns $$\underline{v}_1,\ldots,\underline{v}_p$$ of $$V$$ are the **right singular vectors** of $$A.$$ Every real matrix has a singular value decomposition, and the singular values are unique although $$U$$ and $$V$$ are not. Multiplying out gives

$$A^\intercal A=V\Sigma^\intercal\Sigma V^\intercal,\qquad AA^\intercal=U\Sigma\Sigma^\intercal U^\intercal$$

so the right singular vectors are orthonormal eigenvectors of $$A^\intercal A,$$ the left singular vectors are orthonormal eigenvectors of $$AA^\intercal$$ and the two are linked by

$$A\underline{v}_i=\sigma_i\underline{u}_i,\qquad A^\intercal\underline{u}_i=\sigma_i\underline{v}_i\,\,\forall\,i\leq\min\{n,p\}.$$

If $$A$$ is symmetric positive semi-definite then its singular value decomposition coincides with its spectral decomposition. The complex analogue has unitary $$U$$ and $$V$$ and uses the conjugate transpose.

Let $$A$$ have rank $$r.$$ The **thin singular value decomposition** keeps only the $$r$$ non-zero singular values and the corresponding singular vectors, $$U_r\in\mathbb{R}^{\,n\times r},$$ $$\Sigma_r\in\mathbb{R}^{\,r\times r}$$ and $$V_r\in\mathbb{R}^{\,p\times r},$$ and expresses $$A$$ as a sum of $$r$$ rank-one matrices.

$$A=U_r\Sigma_rV_r^\intercal=\sum_{i=1}^r\sigma_i\,\underline{u}_i\underline{v}_i^\intercal$$

The left singular vectors $$\underline{u}_1,\ldots,\underline{u}_r$$ are an orthonormal basis of the column space of $$A$$ and the right singular vectors $$\underline{v}_{r+1},\ldots,\underline{v}_p$$ are an orthonormal basis of the kernel of $$A,$$ the set of $$\underline{x}$$ with $$A\underline{x}=\underline{0}.$$

The **Frobenius norm** of a matrix $$A\in\mathbb{R}^{\,n\times p}$$ is the Euclidean length of its elements, which equals the Euclidean length of its singular values.

$$\lVert A\rVert_F:=\sqrt{\sum_{i=1}^n\sum_{j=1}^p a_{ij}^2}=\sqrt{\mathrm{tr}\left(A^\intercal A\right)}=\sqrt{\sum_{i=1}^{\min\{n,p\}}\sigma_i^2}$$

The **Eckart–Young theorem** states that for $$k<r$$ the matrix of rank at most $$k$$ that is closest to $$A$$ in Frobenius norm is the **truncated singular value decomposition** that keeps the $$k$$ largest singular values.

$$A_k:=\sum_{i=1}^k\sigma_i\,\underline{u}_i\underline{v}_i^\intercal$$

$$\lVert A-A_k\rVert_F=\sqrt{\sum_{i=k+1}^r\sigma_i^2}=\min_{\mathrm{rank}\,B\leq k}\lVert A-B\rVert_F$$

This **low-rank approximation** underlies principal components analysis and data compression.

Let $$A\in\mathbb{R}^{\,n\times p}$$ have singular value decomposition $$A=U\Sigma V^\intercal$$ and let $$\Sigma^+\in\mathbb{R}^{\,p\times n}$$ be the matrix with $$\frac{1}{\sigma_i}$$ in the diagonal positions where $$\Sigma$$ has non-zero $$\sigma_i$$ and zeros elsewhere. The **Moore–Penrose pseudo-inverse** of $$A$$ is

$$A^+:=V\Sigma^+U^\intercal\in\mathbb{R}^{\,p\times n}.$$

The pseudo-inverse is the unique matrix satisfying the four conditions

$$AA^+A=A,\qquad A^+AA^+=A^+,\qquad\left(AA^+\right)^\intercal=AA^+,\qquad\left(A^+A\right)^\intercal=A^+A$$

and generalises the matrix inverse to singular and non-square matrices: if $$A$$ is invertible then $$A^+=A^{-1},$$ if $$A$$ has rank $$p$$ then $$A^+=\left(A^\intercal A\right)^{-1}A^\intercal$$ and if $$A$$ has rank $$n$$ then $$A^+=A^\intercal\left(AA^\intercal\right)^{-1}.$$ The vector $$\underline{x}=A^+\underline{b}$$ is the solution of the least squares problem of minimising $$\lVert A\underline{x}-\underline{b}\rVert$$ that has the smallest Euclidean length $$\lVert\underline{x}\rVert,$$ and $$AA^+$$ is the matrix that projects $$\mathbb{R}^n$$ orthogonally onto the column space of $$A.$$
