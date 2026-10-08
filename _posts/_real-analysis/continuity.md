---
layout: post
category: "real-analysis"
title:  "Continuity"
tags: ["real", "analysis", "continuity"]
description: "Whether a function is unbroken"
---

Let $$X \subseteq \mathbb{R}$$ be a subset of real numbers, $$x_0 \in X$$ and $$f: X \rightarrow \mathbb{R}$$ be a function that maps elements of $$X$$ to real numbers. The function $$f$$ is **continuous** at $$x_0$$ if and only if the limit of $$f(x)$$ as $$x \rightarrow x_0$$ is equal to $$f(x_0).$$

$$ \lim_{x \rightarrow x_0} f(x) = f(x_0) $$

This uses the limit of a function, which requires $$x_0$$ to be a limit point of $$X.$$ If $$x_0$$ is an isolated point of $$X$$ (some open interval around $$x_0$$ contains no other point of $$X$$) then $$f$$ is continuous at $$x_0$$ by convention.

The function $$f$$ is continuous on $$X$$ if and only if $$f$$ is continuous at $$x \, \, \forall \, x \in X.$$ Otherwise, $$f$$ is **discontinuous**.

Continuity of composition

Let $$X \subseteq \mathbb{R}$$ be a subset of real numbers. $$X$$ is an **interval** if for all $$x,y \in X$$ with $$x<y,$$ every $$z \in \mathbb{R}$$ with $$x<z<y$$ is also in $$X.$$ The empty set is an interval since it has no such $$x,y.$$

$$[x,y]\subseteq X \,\, \forall \, x,y \in X$$

Boundedness of intervals

The **intermediate value theorem** states that if a function $$f:[a,b]\rightarrow\mathbb{R}$$ is continuous and $$C$$ lies strictly between $$f(a)$$ and $$f(b)$$ (either $$f(a)<C<f(b)$$ or $$f(b)<C<f(a)$$) then there is at least one $$c\in(a,b) : f(c)=C.$$

Functions of intervals

Continuity of intervals

Uniform continuity

Lipschitz continuity

Continuity of monotonic functions

Continuity of inverse functions
