---
layout: post
category: "sets"
title:  "Functions"
tags: ["sets", "function"]
description: "Mappings between sets"
---

Let $$X$$ and $$Y$$ be sets and $$P(x,y)$$ be a predicate depending on $$x \in X$$ and $$y \in Y$$ such that $$\forall x \in X$$ there is exactly one $$y \in Y$$ for which $$P(x,y)$$ is true. A **function** $$f : X \rightarrow Y$$ defined by $$P(x,y)$$ maps any input $$x \in X$$ to an output $$f(x) \in Y.$$

$$y=f(x) \Leftrightarrow P(x,y)$$

$$X$$ is the **domain** and $$Y$$ is the **codomain** of the function $$f.$$

If $$f: X \rightarrow Y$$ is a function with domain $$X$$ and codomain $$Y$$ and $$S \subseteq X,$$ the **image** of $$S$$ under $$f,$$ $$f(S),$$ is the subset of elements in $$Y$$ that were mapped from $$S.$$

$$f(S) := \{f(x) \in Y : x \in S\} $$

If $$S \subseteq Y,$$ the **inverse image** of $$S$$ under $$f,$$ $$f^{-1}(S),$$ is the subset of elements in $$X$$ which map to $$S$$ by $$f.$$

$$f^{-1}(S) := \{x \in X : f(x) \in S\} $$

The term **range** is sometimes used for the codomain but more often means the image $$f(X).$$

Two functions with the same domain $$X$$ and codomain $$Y,$$ $$f : X \rightarrow Y$$ and $$g : X \rightarrow Y,$$ are **equal** $$f=g$$ if and only if $$f(x)=g(x)\, \forall x \in X.$$

Let $$f : X \rightarrow Y$$ and $$g : Y \rightarrow Z$$ be two functions such that the codomain of $$f$$ is the same set as the domain of $$g.$$ The **composition** $$g \circ f : X \rightarrow Z$$ of the two functions $$f$$ and $$g$$ is the function whose output is the output of $$g$$ when its input is the output of $$f$$ given an input $$x \in X.$$

$$(g \circ f)(x) := g\left(f(x)\right)$$

If the codomain of $$f$$ does not match the domain of $$g,$$ the composition $$g \circ f$$ is undefined.

A function $$f: X \rightarrow Y$$ is **injective** or "one-to-one" if distinct elements of its domain $$X$$ map to distinct elements of its codomain $$Y.$$

$$ x \neq x' \Rightarrow f(x) \neq f(x')$$

A function $$f: X \rightarrow Y$$ is **surjective** or "onto" if every element of its codomain $$Y$$ is the image $$f(x)$$ of at least one element $$x$$ of its domain $$X.$$

$$ \forall y \in Y \, \exists x \in X : f(x) = y$$

A function $$f: X \rightarrow Y$$ is **bijective** or **invertible** if it is both injective and surjective.

Two sets $$X$$ and $$Y$$ have **equal cardinality** if and only if there exists a bijection $$f : X \rightarrow Y,$$ that is, a function pairing every element of $$X$$ with exactly one element of $$Y$$ and vice versa.

Let $$\mathbb{N} = \{0, 1, 2, \ldots\}$$ denote the natural numbers. A set $$X$$ has **cardinality** $$n \in \mathbb{N}$$ if and only if it has equal cardinality with $$ \{i \in \mathbb{N} : i < n\} .$$ $$X$$ has $$n$$ elements if and only if it has cardinality $$n.$$

A set $$X$$ is **finite** if and only if it has cardinality $$n \in \mathbb{N}.$$ Otherwise, the set is **infinite**.

A set $$X$$ is **countably infinite** if and only if it has equal cardinality with the natural numbers $$ \mathbb{N}.$$ A set is **countable** if it is finite or countably infinite, and **uncountable** if it is not countable.
