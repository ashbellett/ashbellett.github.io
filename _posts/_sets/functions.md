---
title:  "Functions"
description: "Mappings between sets"
---

Let $$X$$ and $$Y$$ be sets and $$P(x,y)$$ be a predicate on $$X \times Y$$ such that for every $$x \in X$$ there is exactly one $$y \in Y$$ for which $$P(x,y)$$ is true. The **function** $$f : X \rightarrow Y$$ defined by $$P(x,y)$$ is the rule that maps each input $$x \in X$$ to the unique output $$f(x) \in Y$$ for which $$P(x,f(x))$$ is true.

$$y=f(x) \Leftrightarrow P(x,y)$$

Let $$f : X \rightarrow Y$$ be a function. The set $$X$$ is the **domain** of $$f$$ and the set $$Y$$ is the **codomain** of $$f.$$

Let $$f : X \rightarrow Y$$ be a function and $$S \subseteq X.$$ The **image** of $$S$$ under $$f,$$ written $$f(S),$$ is the set of elements of $$Y$$ that are mapped from elements of $$S.$$

$$f(S) := \{f(x) \in Y : x \in S\} $$

Let $$f : X \rightarrow Y$$ be a function and $$S \subseteq Y.$$ The **inverse image** of $$S$$ under $$f,$$ written $$f^{-1}(S),$$ is the set of elements of $$X$$ that are mapped into $$S$$ by $$f.$$

$$f^{-1}(S) := \{x \in X : f(x) \in S\} $$

Let $$f : X \rightarrow Y$$ be a function. The **range** of $$f$$ is the image $$f(X)$$ of the domain. The term range is sometimes used for the codomain instead.

Let $$f : X \rightarrow Y$$ and $$g : X \rightarrow Y$$ be functions with the same domain and codomain. The functions $$f$$ and $$g$$ are **equal**, written $$f=g,$$ if and only if $$f(x)=g(x)$$ for all $$x \in X.$$

Let $$f : X \rightarrow Y$$ and $$g : Y \rightarrow Z$$ be functions such that the codomain of $$f$$ is the domain of $$g.$$ The **composition** of $$f$$ and $$g,$$ written $$g \circ f : X \rightarrow Z,$$ is the function that maps each $$x \in X$$ to the output of $$g$$ at the input $$f(x).$$

$$(g \circ f)(x) := g\left(f(x)\right)$$

If the codomain of $$f$$ is not the domain of $$g$$ then the composition $$g \circ f$$ is undefined.

Let $$f: X \rightarrow Y$$ be a function. The function $$f$$ is **injective**, or one-to-one, if and only if distinct elements of $$X$$ are mapped to distinct elements of $$Y.$$

$$ x \neq x' \Rightarrow f(x) \neq f(x')$$

Let $$f: X \rightarrow Y$$ be a function. The function $$f$$ is **surjective**, or onto, if and only if every element of $$Y$$ is the image of at least one element of $$X.$$

$$ \forall y \in Y \, \exists x \in X : f(x) = y$$

Let $$f: X \rightarrow Y$$ be a function. The function $$f$$ is **bijective** if and only if it is both injective and surjective. A bijective function is also called a **bijection**.

Let $$f: X \rightarrow Y$$ be a bijection. The **inverse function** of $$f,$$ written $$f^{-1} : Y \rightarrow X,$$ is the function that maps each $$y \in Y$$ to the unique $$x \in X$$ with $$f(x)=y.$$ A bijective function is also called **invertible**.

Let $$X$$ and $$Y$$ be sets. The sets $$X$$ and $$Y$$ have **equal cardinality** if and only if there exists a bijection $$f : X \rightarrow Y.$$

The set of **natural numbers** is $$\mathbb{N} = \{0, 1, 2, \ldots\}.$$

Let $$X$$ be a set and $$n \in \mathbb{N}.$$ The set $$X$$ has **cardinality** $$n$$ if and only if $$X$$ has equal cardinality with the set $$\{i \in \mathbb{N} : i < n\}.$$ A set with cardinality $$n$$ has $$n$$ elements.

Let $$X$$ be a set. The set $$X$$ is **finite** if and only if $$X$$ has cardinality $$n$$ for some $$n \in \mathbb{N}.$$ Otherwise $$X$$ is **infinite**.

Let $$X$$ be a set. The set $$X$$ is **countably infinite** if and only if $$X$$ has equal cardinality with $$\mathbb{N}.$$ The set $$X$$ is **countable** if and only if $$X$$ is finite or countably infinite. The set $$X$$ is **uncountable** if and only if $$X$$ is not countable.
