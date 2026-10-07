---
layout: post
category: "sets"
title:  "Functions"
tags: ["sets", "function"]
description: "Mappings between sets"
---

Let $$X$$ and $$Y$$ be sets and $$P(x,y)$$ be a predicate depending on $$x \in X$$ and $$y \in Y$$ such that $$\forall x \in X$$ there is exactly one $$y \in Y$$ for which $$P(x,y)$$ is true. A **function** $$f : X \rightarrow Y$$ defined by $$P(x,y)$$ maps any input $$x \in X$$ to an output $$f(x) \in Y.$$

$$y=f(x) \Leftrightarrow P(x,y)$$

$$X$$ is the **domain** and $$Y$$ is the **codomain** of the function $$f.$$ The term **range** is sometimes used for the codomain but more often means the image $$f(X)$$ defined below.

Two functions with the same domain $$X$$ and codomain $$Y,$$ $$f : X \rightarrow Y$$ and $$g : X \rightarrow Y,$$ are **equal** $$f=g$$ if and only if $$f(x)=g(x)\, \forall x \in X.$$

Let $$f : X \rightarrow Y$$ and $$g : Y \rightarrow Z$$ be two functions such that the codomain of $$f$$ is the same set as the domain of $$g.$$ The **composition** $$g \circ f : X \rightarrow Z$$ of the two functions $$f$$ and $$g$$ is the function whose output is the output of $$g$$ when its input is the output of $$f$$ given an input $$x \in X.$$

$$(g \circ f)(x) := g\left(f(x)\right)$$

If the codomain of $$f$$ does not match the domain of $$g,$$ the composition $$g \circ f$$ is undefined.

A function $$f: X \rightarrow Y$$ is **injective** or "one-to-one" if distinct elements of its domain $$X$$ map to distinct elements of its codomain $$Y.$$

$$ x \neq x' \Rightarrow f(x) \neq f(x')$$

A function $$f: X \rightarrow Y$$ is **surjective** or "onto" if every element of its codomain $$Y$$ is the image of at least one element of its domain $$X.$$

$$ \forall y \in Y \, \exists x \in X : f(x) = y$$

A function $$f: X \rightarrow Y$$ is **bijective** or **invertible** if it is both injective and surjective.

If $$f: X \rightarrow Y$$ is a function with domain $$X$$ and codomain $$Y$$ and $$S \subseteq X,$$ the **image** of $$S$$ under $$f,$$ $$f(S),$$ is the subset of elements in $$Y$$ that were mapped from $$S.$$

$$f(S) := \{f(x) \in Y : x \in S\} $$

If $$S \subseteq Y,$$ the **inverse image** of $$S$$ under $$f,$$ $$f^{-1}(S),$$ is the subset of elements in $$X$$ which map to $$S$$ by $$f.$$

$$f^{-1}(S) := \{x \in X : f(x) \in S\} $$
