---
layout: post
category: "Real Analysis"
title:  "Continuity"
tags: ["real", "analysis", "continuity"]
description: "Whether a function is unbroken"
---

Let $$X \subseteq \mathbb{R}$$ be a subset of real numbers, $$x_0 \in X$$ and $$f: X \rightarrow \mathbb{R}$$ be a function that maps elements of $$X$$ to real numbers. The function $$f$$ is **continuous** at $$x_0$$ if and only if the limit of $$f(x)$$ as $$x \rightarrow x_0$$ is equal to $$f(x_0)$$.

$$ \lim_{x \rightarrow x_0} f(x) = f(x_0) $$

The function $$f$$ is continuous on $$X$$ if and only if $$f$$ is continuous at $$x \, \, \forall \, x \in X$$. Otherwise, $$f$$ is **discontinuous**.

Continuity of composition

Let $$X \subseteq \mathbb{R}$$ be a subset of real numbers, $$x,y \in \mathbb{R}$$ and $$x<y$$. $$X$$ is an **interval** if $$X=\varnothing$$ or if $$x,y \in X$$ and $$\exists \, z \in \mathbb{R} : x<z<y$$ then $$z\in X$$ too.

$$[x,y]\subseteq X \,\, \forall \, x,y \in X$$

Boundedness of intervals

The **intermediate value theorem** states that if a function $$f:[a,b]\rightarrow\mathbb{R}$$ is continuous and $$f(a)<C<f(b)$$ then there is at least one $$c\in[a,b] : f(c)=C$$.

Functions of intervals

Continuity of intervals

Uniform continuity

Lipschitz continuity

Continuity of monotonic functions

Continuity of inverse functions
