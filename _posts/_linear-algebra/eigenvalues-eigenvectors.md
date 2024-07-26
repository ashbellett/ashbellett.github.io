---
layout: post
category: "linear-algebra"
title:  "Eigenvalues and Eigenvectors"
tags: ["linear", "algebra", "eigenvalue", "eigenvector"]
description: "Fundamental decomposition of square matrices"
---

Let $$A\in\mathbb{F}^{\,n\times n}$$ be a square matrix and $$\underline{v} \in \mathbb{F}^n$$ be a non-zero vector. $$\underline{v}$$ is an **eigenvector** of $$A$$ if and only if

$$A\underline{v}=\lambda\underline{v}$$

where $$\lambda\in\mathbb{F}$$ is called an **eigenvalue** of $$A$$ if $$\underline{v}$$ exists.

The linear transformation $$A\underline{v}$$ where $$\underline{v}$$ is an eigenvector of $$A$$ is equivalent to the scalar transformation $$\lambda\underline{v}.$$

Eigenvalues satisfy the following properties:

$$\sum_{i=1}^n \lambda_i = \mathrm{tr}(A)$$

$$\prod_{i=1}^n \lambda_i = \lvert A\rvert$$

The expression $$\lvert A-\lambda I_n\rvert$$ is an $$n^{\mathrm{th}}$$-order polynomial in $$\lambda$$ called the **characteristic polynomial** of $$A.$$ The roots $$\lvert A-\lambda I_n\rvert=0$$ are the eigenvalues of $$A.$$

The set of all distinct eigenvalues of $$A$$ is called the **eigen-spectrum** $$\sigma_A$$ of $$A.$$

$$\sigma_A=\{\lambda : \lvert A-\lambda I_n\rvert=0\}$$

The characteristic polynomial of $$A$$ will admit $$m$$ distinct complex roots where $$1\leq m\leq n.$$ Therefore the cardinality of the eigen-spectrum $$\sigma_A$$ is $$m.$$

For each eigenvalue $$\lambda_i\in\sigma_A,$$ the non-zero solution to

$$\left(A-\lambda_i I_n\right)\underline{v_i}=\underline{0}$$

yields the corresponding eigenvector $$\underline{v_i}$$ of $$A.$$

The **eigen-space** $$\mathcal{E}_{\lambda}$$ of $$A$$ with respect to eigenvalue $$\lambda$$ is the vector space that is spanned by all eigenvectors of $$A.$$

The **algebraic multiplicity** $$\mu_A\left(\lambda\right)$$ of $$\lambda$$ with respect to the matrix $$A$$ is the number of times $$\lambda$$ appears as a root of the characteristic polynomial of $$A.$$ The sum of the algebraic multiplicities of all eigenvalues of $$A$$ is $$n.$$

The **geometric multiplicity** $$\gamma_A\left(\lambda\right)$$ of $$\lambda$$ with respect to the matrix $$A$$ is the number of linearly independent eigenvectors of $$A$$ and is equivalent to the dimension of the eigen-space of $$A$$ with respect to $$\lambda.$$

The algebraic and geometric multiplicities are related by:

$$1\leq\gamma_A\left(\lambda\right)\leq\mu_A\left(\lambda\right)\leq n\,\,\forall\,\lambda\in\sigma_A$$

which means that while distinct eigenvalues correspond to linearly independent eigenvectors, repeated eigenvalues do no necessarily correspond to multiple linearly independent eigenvectors.

$$A$$ will admit $$n$$ linearly independent eigenvectors if and only if:

$$\gamma_A\left(\lambda_i\right)=\mu_A\left(\lambda_i\right)\,\,\forall\,\lambda_i\in\sigma_A.$$

$$A$$ will admit fewer than $$n$$ linearly independent eigenvectors if and only if:

$$\gamma_A\left(\lambda_i\right)<\mu_A\left(\lambda_i\right)\,\,\exists\,\lambda_i\in\sigma_A$$

and $$A$$ is referred to as **defective**.

For a non-defective matrix $$A,$$ the $$n$$ linearly independent eigenvectors will form a basis for $$\mathbb{F}^n$$ and is called an **eigen-basis**.

Let $$A$$ be a non-defective matrix with $$n$$ linearly independent eigenvectors $$\underline{v}_1,\ldots,\underline{v}_n$$ and corresponding eigenvalues $$\lambda_1,\ldots,\lambda_n.$$ The following matrices can be constructed:

$$P=\begin{bmatrix}
  \uparrow & & \uparrow \\
  \underline{v}_1 & \ldots & \underline{v}_n \\
  \downarrow & & \downarrow
\end{bmatrix}$$

$$\Lambda=\begin{bmatrix}
  \lambda_1 & 0 & 0 \\
  0 & \ddots & 0 \\
  0 & 0 & \lambda_n
\end{bmatrix}$$

where $$P$$ is the eigenvectors in columnar form stacked horizontally to form a square matrix and $$\Lambda$$ is a diagonal matrix with eigenvalues along the diagonal.

The **diagonalisation** of $$A$$ is the decomposition:

$$A=P\Lambda P^{-1}$$
