---
layout: post
category: "Real Analysis"
title:  "Derivatives"
tags: ["real analysis", "derivative"]
description: "A function's rate of change"
---

Let $$X \subseteq \mathbb{R}$$ be a subset of real numbers, $$x_0 \in X$$ and $$f: X \rightarrow \mathbb{R}$$ be a function that maps elements of $$X$$ to real numbers. The function $$f$$ is **continuous** at $$x_0$$ if and only if the limit of $$f(x)$$ as $$x \rightarrow x_0$$ is equal to $$f(x_0)$$.

$$ \lim_{x \rightarrow x_0} f(x) = f(x_0) $$

The function $$f$$ is continuous on $$X$$ if and only if $$f$$ is continuous at $$x_0 \, \, \forall x_0 \in X$$. Otherwise, $$f$$ is **discontinuous**.

Let $$X \subseteq \mathbb{R}$$ be a subset of real numbers, $$x_0 \in X$$ and $$f: X \rightarrow \mathbb{R}$$ be a function that maps elements of $$X$$ to real numbers. The function $$f$$ is **differentiable** at $$x_0$$ if the limit of $$ \frac{f(x)-f(x_0)}{x-x_0}$$ as $$x \rightarrow x_0$$ converges to a real number $$ \frac{df(x_0)}{dx}$$ which is the **derivative** at $$x_0$$.

$$ \frac{df(x_0)}{dx} := \lim_{x \rightarrow x_0} \frac{f(x)-f(x_0)}{x-x_0}$$

If $$f$$ is differentiable $$ \forall x_0 \in X$$ then $$f$$ is differentiable on $$X$$. If the limit does not exist then $$ \frac{df(x_0)}{dx}$$ is undefined and $$f$$ is not differentiable at $$x_0$$.

Let $$X \subseteq \mathbb{R}$$ be a subset of real numbers, $$x_0 \in X$$ and $$f: X \rightarrow \mathbb{R}$$ be a function that maps elements of $$X$$ to real numbers. The **derivative** of the function $$f$$ is

$$ \frac{df(x)}{dx} := \lim_{x_0 \rightarrow 0} \frac{f(x+x_0)-f(x)}{x_0}.$$