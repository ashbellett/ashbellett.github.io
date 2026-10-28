---
title:  "Matrix Decompositions"
description: "Decompositions of square and non-square matrices"
---

Let $$A\in\mathbb{F}^{\,n\times p}$$ be a matrix. A **matrix decomposition** or **matrix factorisation** of $$A$$ is an expression of $$A$$ as a product of matrices with special structure, such as triangular, diagonal or orthogonal matrices. The diagonalisation $$A=P\Lambda P^{-1}$$ of a non-defective square matrix is a matrix decomposition.

Let $$A\in\mathbb{R}^{\,n\times n}$$ be a real symmetric matrix. The **spectral theorem** states that $$A$$ has $$n$$ real eigenvalues $$\lambda_1,\ldots,\lambda_n,$$ repeated according to algebraic multiplicity, and an eigen-basis of $$\mathbb{R}^n$$ that is an orthonormal set.

Let $$A\in\mathbb{R}^{\,n\times n}$$ be a real symmetric matrix, $$Q\in\mathbb{R}^{\,n\times n}$$ be the orthogonal matrix whose columns $$\underline{q}_1,\ldots,\underline{q}_n$$ are an orthonormal eigen-basis of $$A$$ and $$\Lambda$$ be the diagonal matrix of the corresponding eigenvalues. The **spectral decomposition** of $$A$$ is the diagonalisation of $$A$$ with respect to this eigen-basis.

$$A=Q\Lambda Q^\intercal=\sum_{i=1}^n\lambda_i\,\underline{q}_i\underline{q}_i^\intercal$$

The spectral decomposition has the following properties:
- a real symmetric matrix is positive definite if and only if all of its eigenvalues are positive;
- a real symmetric matrix is positive semi-definite if and only if all of its eigenvalues are non-negative;
- a Hermitian matrix $$A\in\mathbb{C}^{\,n\times n}$$ has real eigenvalues and a spectral decomposition $$A=U\Lambda U^*$$ with $$U$$ unitary.

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix and $$k\in\{1,\ldots,n\}.$$ The **leading principal sub-matrix** of order $$k,$$ written $$A_k\in\mathbb{F}^{\,k\times k},$$ is the matrix formed from the first $$k$$ rows and the first $$k$$ columns of $$A.$$ The **leading principal minor** of order $$k$$ is the determinant $$\lvert A_k\rvert.$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix. An **LU decomposition** of $$A$$ is a factorisation of $$A$$ into a lower triangular matrix $$L\in\mathbb{F}^{\,n\times n}$$ with diagonal elements equal to one and an upper triangular matrix $$U\in\mathbb{F}^{\,n\times n}.$$

$$A=LU$$

The LU decomposition has the following properties:
- if $$A$$ is invertible then an LU decomposition exists if and only if every leading principal minor $$\lvert A_k\rvert,$$ $$k=1,\ldots,n-1,$$ is non-zero, and it is then unique;
- the factors are produced by Gaussian elimination, in which $$U$$ is the result of eliminating the elements below the diagonal column by column using row operations and $$L$$ records the multipliers used.

Let $$n\geq 1.$$ A **permutation matrix** $$P\in\mathbb{F}^{\,n\times n}$$ is a matrix obtained by reordering the rows of the identity matrix $$I_n.$$ The product $$PA$$ reorders the rows of $$A$$ in the same way. A permutation matrix is orthogonal, so $$P^{-1}=P^\intercal,$$ and $$\lvert P\rvert=\pm 1.$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix. A **PLU decomposition** of $$A$$ is a factorisation of a row-reordered copy of $$A$$ into a permutation matrix $$P,$$ a lower triangular matrix $$L$$ with diagonal elements equal to one and an upper triangular matrix $$U.$$

$$PA=LU$$

The PLU decomposition has the following properties:
- every square matrix has a PLU decomposition, obtained by swapping rows during Gaussian elimination so that each diagonal element used for elimination is non-zero;
- the determinant is $$\lvert A\rvert=\lvert P\rvert\prod_{i=1}^n u_{ii};$$
- the system $$A\underline{x}=\underline{b}$$ is solved by the two triangular systems $$L\underline{y}=P\underline{b}$$ and $$U\underline{x}=\underline{y}$$ by forward and back substitution.

Let $$A\in\mathbb{F}^{\,n\times p}$$ be a matrix with rank $$r\geq 1.$$ A **rank factorisation** of $$A$$ is a factorisation of $$A$$ into a matrix $$C\in\mathbb{F}^{\,n\times r}$$ and a matrix $$F\in\mathbb{F}^{\,r\times p}$$ that both have rank $$r.$$

$$A=CF$$

The rank factorisation has the following properties:
- every matrix of rank $$r\geq 1$$ has a rank factorisation, in which the columns of $$C$$ are any basis of the column space of $$A$$ and the columns of $$F$$ are the coordinates of the columns of $$A$$ in that basis;
- the factorisation is not unique, since $$A=\left(CM\right)\left(M^{-1}F\right)$$ for any invertible $$M\in\mathbb{F}^{\,r\times r};$$
- $$r$$ is the smallest inner dimension for which $$A$$ factorises as a product of two matrices.

Let $$A\in\mathbb{R}^{\,n\times n}$$ be a real symmetric positive definite matrix. The **Cholesky decomposition** of $$A$$ is the factorisation of $$A$$ into a lower triangular matrix $$L\in\mathbb{R}^{\,n\times n}$$ with positive diagonal elements and its transpose.

$$A=LL^\intercal$$

The Cholesky decomposition has the following properties:
- it exists and is unique if and only if $$A$$ is symmetric positive definite, so attempting to compute it is a test for positive definiteness;
- for a Hermitian positive definite matrix the decomposition is $$A=LL^*;$$
- the elements of $$L$$ are computed column by column from

$$l_{jj}=\sqrt{a_{jj}-\sum_{k=1}^{j-1}l_{jk}^2},\qquad l_{ij}=\frac{1}{l_{jj}}\left(a_{ij}-\sum_{k=1}^{j-1}l_{ik}l_{jk}\right)\,\,\forall\,i>j;$$

- the determinant is $$\lvert A\rvert=\prod_{i=1}^n l_{ii}^2;$$
- a symmetric positive semi-definite matrix also factorises as $$LL^\intercal$$ with non-negative diagonal elements, but not necessarily uniquely.

Let $$A\in\mathbb{R}^{\,n\times p}$$ be a real matrix with $$n\geq p.$$ A **thin QR decomposition** of $$A$$ is a factorisation of $$A$$ into a matrix $$Q\in\mathbb{R}^{\,n\times p}$$ with orthonormal columns and an upper triangular matrix $$R\in\mathbb{R}^{\,p\times p}.$$

$$A=QR$$

The matrix $$Q$$ is orthogonal when $$n=p$$ and semi-orthogonal when $$n>p.$$ A **full QR decomposition** of $$A$$ extends $$Q$$ to an orthogonal matrix in $$\mathbb{R}^{\,n\times n}$$ by appending $$n-p$$ further orthonormal columns and extends $$R$$ to a matrix in $$\mathbb{R}^{\,n\times p}$$ by appending $$n-p$$ rows of zeros. The QR decomposition has the following properties:
- every real matrix has a QR decomposition;
- if $$A$$ has rank $$p$$ then the thin QR decomposition with positive diagonal elements of $$R$$ is unique, and it is given by Gram-Schmidt orthonormalisation of the columns $$\underline{a}_1,\ldots,\underline{a}_p$$ of $$A:$$ the columns $$\underline{q}_1,\ldots,\underline{q}_p$$ of $$Q$$ are the orthonormalised vectors and $$r_{ij}=\langle\underline{a}_j,\underline{q}_i\rangle$$ for $$i\leq j,$$ so that $$\underline{a}_j=\sum_{i=1}^j r_{ij}\underline{q}_i;$$
- the columns of $$Q$$ are an orthonormal basis of the column space of $$A;$$
- the complex analogue has unitary $$Q$$ and uses the conjugate transpose.

Let $$A\in\mathbb{R}^{\,n\times p}$$ be a real matrix and $$\underline{b}\in\mathbb{R}^n.$$ The **least squares problem** is the problem of minimising $$\lVert A\underline{x}-\underline{b}\rVert$$ over $$\underline{x}\in\mathbb{R}^p.$$ If $$A$$ has rank $$p$$ and thin QR decomposition $$A=QR$$ then the least squares problem is solved by the triangular system $$R\underline{x}=Q^\intercal\underline{b}.$$

Let $$A\in\mathbb{R}^{\,n\times p}$$ be a real matrix. The matrix $$A^\intercal A\in\mathbb{R}^{\,p\times p}$$ is symmetric positive semi-definite, since $$\underline{v}^\intercal A^\intercal A\underline{v}=\lVert A\underline{v}\rVert^2\geq 0,$$ so by the spectral theorem its eigenvalues $$\lambda_1\geq\ldots\geq\lambda_p\geq 0$$ are real and non-negative. The **singular values** of $$A$$ are the square roots of the eigenvalues of $$A^\intercal A$$ in decreasing order.

$$\sigma_i:=\sqrt{\lambda_i},\qquad\sigma_1\geq\sigma_2\geq\ldots\geq\sigma_{\min\{n,p\}}\geq 0$$

The matrices $$A^\intercal A$$ and $$AA^\intercal$$ share their non-zero eigenvalues, so $$A$$ has $$\min\{n,p\}$$ singular values. The number of non-zero singular values of $$A$$ is the rank of $$A.$$

Let $$A\in\mathbb{R}^{\,n\times p}$$ be a real matrix. A **singular value decomposition** (SVD) of $$A$$ is a factorisation of $$A$$ into an orthogonal matrix $$U\in\mathbb{R}^{\,n\times n},$$ a matrix $$\Sigma\in\mathbb{R}^{\,n\times p}$$ with the singular values $$\sigma_1,\ldots,\sigma_{\min\{n,p\}}$$ along its diagonal and zeros elsewhere, and an orthogonal matrix $$V\in\mathbb{R}^{\,p\times p}.$$

$$A=U\Sigma V^\intercal$$

The columns $$\underline{u}_1,\ldots,\underline{u}_n$$ of $$U$$ are the **left singular vectors** of $$A$$ and the columns $$\underline{v}_1,\ldots,\underline{v}_p$$ of $$V$$ are the **right singular vectors** of $$A.$$ The singular value decomposition has the following properties:
- every real matrix has a singular value decomposition, and the singular values are unique although $$U$$ and $$V$$ are not;
- $$A^\intercal A=V\Sigma^\intercal\Sigma V^\intercal$$ and $$AA^\intercal=U\Sigma\Sigma^\intercal U^\intercal,$$ so the right singular vectors are orthonormal eigenvectors of $$A^\intercal A$$ and the left singular vectors are orthonormal eigenvectors of $$AA^\intercal;$$
- $$A\underline{v}_i=\sigma_i\underline{u}_i$$ and $$A^\intercal\underline{u}_i=\sigma_i\underline{v}_i$$ for all $$i\leq\min\{n,p\};$$
- if $$A$$ is symmetric positive semi-definite then its singular value decomposition coincides with its spectral decomposition;
- the complex analogue has unitary $$U$$ and $$V$$ and uses the conjugate transpose.

Let $$A\in\mathbb{R}^{\,n\times p}$$ be a real matrix with rank $$r.$$ The **thin singular value decomposition** of $$A$$ is the factorisation that keeps only the $$r$$ non-zero singular values and the corresponding singular vectors, $$U_r\in\mathbb{R}^{\,n\times r},$$ $$\Sigma_r\in\mathbb{R}^{\,r\times r}$$ and $$V_r\in\mathbb{R}^{\,p\times r}.$$

$$A=U_r\Sigma_rV_r^\intercal=\sum_{i=1}^r\sigma_i\,\underline{u}_i\underline{v}_i^\intercal$$

The thin singular value decomposition expresses $$A$$ as a sum of $$r$$ rank-one matrices. The left singular vectors $$\underline{u}_1,\ldots,\underline{u}_r$$ are an orthonormal basis of the column space of $$A,$$ and the right singular vectors $$\underline{v}_{r+1},\ldots,\underline{v}_p$$ are an orthonormal basis of the kernel of $$A,$$ the set of $$\underline{x}$$ with $$A\underline{x}=\underline{0}.$$

Let $$A\in\mathbb{R}^{\,n\times p}$$ be a real matrix. The **Frobenius norm** of $$A$$ is the square root of the sum of the squares of its elements.

$$\lVert A\rVert_F:=\sqrt{\sum_{i=1}^n\sum_{j=1}^p a_{ij}^2}=\sqrt{\mathrm{tr}\left(A^\intercal A\right)}=\sqrt{\sum_{i=1}^{\min\{n,p\}}\sigma_i^2}$$

Let $$A\in\mathbb{R}^{\,n\times p}$$ be a real matrix with rank $$r$$ and $$k<r.$$ The **truncated singular value decomposition** of $$A$$ of rank $$k$$ is the sum of the first $$k$$ terms of the thin singular value decomposition.

$$A_k:=\sum_{i=1}^k\sigma_i\,\underline{u}_i\underline{v}_i^\intercal$$

Let $$A\in\mathbb{R}^{\,n\times p}$$ be a real matrix with rank $$r$$ and $$k<r.$$ The **Eckart–Young theorem** states that the truncated singular value decomposition $$A_k$$ is the matrix of rank at most $$k$$ that is closest to $$A$$ in Frobenius norm.

$$\lVert A-A_k\rVert_F=\sqrt{\sum_{i=k+1}^r\sigma_i^2}=\min_{\mathrm{rank}\,B\leq k}\lVert A-B\rVert_F$$

A **low-rank approximation** of $$A$$ is a matrix of rank at most $$k$$ that approximates $$A,$$ of which $$A_k$$ is the best in Frobenius norm.

Let $$A\in\mathbb{R}^{\,n\times p}$$ be a real matrix with singular value decomposition $$A=U\Sigma V^\intercal,$$ and let $$\Sigma^+\in\mathbb{R}^{\,p\times n}$$ be the matrix with $$\frac{1}{\sigma_i}$$ in the diagonal positions where $$\Sigma$$ has non-zero $$\sigma_i$$ and zeros elsewhere. The **Moore–Penrose pseudo-inverse** of $$A$$ is the matrix formed by inverting the non-zero singular values and transposing the singular vector matrices.

$$A^+:=V\Sigma^+U^\intercal\in\mathbb{R}^{\,p\times n}$$

The pseudo-inverse has the following properties:
- it is the unique matrix satisfying $$AA^+A=A,$$ $$A^+AA^+=A^+,$$ $$\left(AA^+\right)^\intercal=AA^+$$ and $$\left(A^+A\right)^\intercal=A^+A;$$
- if $$A$$ is invertible then $$A^+=A^{-1};$$
- if $$A$$ has rank $$p$$ then $$A^+=\left(A^\intercal A\right)^{-1}A^\intercal;$$
- if $$A$$ has rank $$n$$ then $$A^+=A^\intercal\left(AA^\intercal\right)^{-1};$$
- the vector $$\underline{x}=A^+\underline{b}$$ is the solution of the least squares problem that has the smallest norm $$\lVert\underline{x}\rVert;$$
- the matrix $$AA^+$$ projects $$\mathbb{R}^n$$ orthogonally onto the column space of $$A.$$
