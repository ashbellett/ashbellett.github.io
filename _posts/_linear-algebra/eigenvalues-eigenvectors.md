---
title:  "Eigenvalues and Eigenvectors"
description: "Fundamental decomposition of square matrices"
---

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix. A scalar $$\lambda\in\mathbb{F}$$ is an **eigenvalue** of $$A$$ if and only if there exists a non-zero vector $$\underline{v} \in \mathbb{F}^n$$ such that multiplication by $$A$$ scales $$\underline{v}$$ by $$\lambda.$$

$$A\underline{v}=\lambda\underline{v}$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix and $$\lambda$$ be an eigenvalue of $$A.$$ A non-zero vector $$\underline{v} \in \mathbb{F}^n$$ is an **eigenvector** of $$A$$ corresponding to $$\lambda$$ if and only if $$A\underline{v}=\lambda\underline{v}.$$ For an eigenvector $$\underline{v},$$ the linear transformation $$\underline{v}\mapsto A\underline{v}$$ is the scalar transformation $$\underline{v}\mapsto\lambda\underline{v}.$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix. The **characteristic polynomial** of $$A$$ is the polynomial of degree $$n$$ in $$\lambda$$ given by the determinant of $$A-\lambda I_n.$$

$$p_A(\lambda):=\lvert A-\lambda I_n\rvert$$

The eigenvalues of $$A$$ are the roots of the characteristic polynomial, since $$A\underline{v}=\lambda\underline{v}$$ has a non-zero solution $$\underline{v}$$ if and only if $$A-\lambda I_n$$ is singular.

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix. The **eigen-spectrum** of $$A,$$ written $$\sigma_A,$$ is the set of distinct eigenvalues of $$A.$$

$$\sigma_A:=\{\lambda : \lvert A-\lambda I_n\rvert=0\}$$

The characteristic polynomial of $$A$$ has $$m$$ distinct complex roots where $$1\leq m\leq n,$$ so taking eigenvalues over $$\mathbb{C}$$ the eigen-spectrum has cardinality $$m.$$ A real matrix can have complex eigenvalues: the rotation matrix $$\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$$ has eigenvalues $$\pm i$$ and no real eigenvalues. The statements below that count $$n$$ eigenvalues assume that all roots of the characteristic polynomial lie in $$\mathbb{F},$$ which always holds for $$\mathbb{F}=\mathbb{C}.$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix and $$\lambda \in \sigma_A.$$ The eigenvectors of $$A$$ corresponding to $$\lambda$$ are the non-zero solutions $$\underline{v}$$ of the equation

$$\left(A-\lambda I_n\right)\underline{v}=\underline{0}.$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix and $$\lambda \in \sigma_A.$$ The **eigen-space** of $$A$$ with respect to $$\lambda,$$ written $$\mathcal{E}_{\lambda},$$ is the kernel of $$A-\lambda I_n.$$

$$\mathcal{E}_{\lambda}:=\{\underline{v} \in \mathbb{F}^n : \left(A-\lambda I_n\right)\underline{v}=\underline{0}\}$$

The eigen-space is a subspace of $$\mathbb{F}^n$$ that contains the eigenvectors of $$A$$ corresponding to $$\lambda$$ together with the zero vector, and it is spanned by those eigenvectors.

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix and $$\lambda \in \sigma_A.$$ The **algebraic multiplicity** of $$\lambda,$$ written $$\mu_A\left(\lambda\right),$$ is the number of times $$\lambda$$ appears as a root of the characteristic polynomial of $$A.$$ The sum of the algebraic multiplicities of all eigenvalues of $$A$$ is $$n.$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix and $$\lambda \in \sigma_A.$$ The **geometric multiplicity** of $$\lambda,$$ written $$\gamma_A\left(\lambda\right),$$ is the dimension of the eigen-space $$\mathcal{E}_{\lambda}.$$ The geometric multiplicity is the maximum number of linearly independent eigenvectors of $$A$$ corresponding to $$\lambda.$$

The algebraic and geometric multiplicities have the following properties:

$$1\leq\gamma_A\left(\lambda\right)\leq\mu_A\left(\lambda\right)\leq n\,\,\forall\,\lambda\in\sigma_A$$

Eigenvectors corresponding to distinct eigenvalues are linearly independent. A repeated eigenvalue does not necessarily correspond to multiple linearly independent eigenvectors.

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix and $$\lambda_1,\ldots,\lambda_n \in \mathbb{F}$$ be its eigenvalues repeated according to algebraic multiplicity. The eigenvalues have the following properties:

$$\sum_{i=1}^n \lambda_i = \mathrm{tr}(A)$$

$$\prod_{i=1}^n \lambda_i = \lvert A\rvert$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix. The matrix $$A$$ is **defective** if and only if the geometric multiplicity of some eigenvalue is strictly less than its algebraic multiplicity.

$$\gamma_A\left(\lambda\right)<\mu_A\left(\lambda\right)\,\,\mathrm{for}\,\mathrm{some}\,\,\lambda\in\sigma_A$$

A matrix is defective if and only if it has fewer than $$n$$ linearly independent eigenvectors. A matrix is **non-defective** if and only if $$\gamma_A\left(\lambda\right)=\mu_A\left(\lambda\right)$$ for every $$\lambda\in\sigma_A,$$ in which case it has $$n$$ linearly independent eigenvectors.

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a non-defective matrix. An **eigen-basis** of $$A$$ is a basis of $$\mathbb{F}^n$$ consisting of $$n$$ linearly independent eigenvectors of $$A.$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a non-defective matrix with eigen-basis $$\underline{v}_1,\ldots,\underline{v}_n$$ and corresponding eigenvalues $$\lambda_1,\ldots,\lambda_n.$$ The **eigenvector matrix** $$P$$ is the square matrix whose columns are the eigenvectors, and the **eigenvalue matrix** $$\Lambda$$ is the diagonal matrix whose diagonal elements are the corresponding eigenvalues.

$$P:=\begin{bmatrix}
  \uparrow & & \uparrow \\
  \underline{v}_1 & \ldots & \underline{v}_n \\
  \downarrow & & \downarrow
\end{bmatrix}$$

$$\Lambda:=\begin{bmatrix}
  \lambda_1 & 0 & 0 \\
  0 & \ddots & 0 \\
  0 & 0 & \lambda_n
\end{bmatrix}$$

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a non-defective matrix with eigenvector matrix $$P$$ and eigenvalue matrix $$\Lambda.$$ The **diagonalisation** of $$A$$ is the factorisation of $$A$$ into the product of $$P,$$ $$\Lambda$$ and $$P^{-1}.$$

$$A=P\Lambda P^{-1}$$

A matrix is **diagonalisable** if and only if it is non-defective. The diagonalisation has the property $$A^k=P\Lambda^kP^{-1}$$ for every $$k\in\mathbb{N},$$ where $$\Lambda^k$$ is the diagonal matrix with diagonal elements $$\lambda_i^k.$$
