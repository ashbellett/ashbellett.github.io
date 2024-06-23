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

Eigen-space

Algebraic and geometric multiplicities

Eigen-bases

Diagonalisation

Spectral theorem
