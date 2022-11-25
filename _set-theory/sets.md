---
layout: post
category: "Set Theory"
title:  "Sets"
tags: ["set theory", "set"]
description: "Collections of elements"
---

An **object** $$x$$ is any abstract entity that can be formally defined and assigned to a variable.

A **set** $$X$$ is an unordered collection of distinct objects. Sets are themselves objects.

 If an object $$x$$ lies in the set $$X$$ then $$x$$ is an **element** of $$X$$, $$x \in X$$. Otherwise, $$x$$ is not an element of $$X$$, $$x \notin X$$.

Two sets $$X$$ and $$Y$$ are **equal**, $$X=Y$$, if and only if every element of $$X$$ is an element of $$Y$$ and every element of $$Y$$ is an element of $$X$$. Otherwise $$X$$ and $$Y$$ are not equal, $$X \neq Y$$.

A set containing no elements is the **empty set** $$\varnothing $$. A **singleton set** is the set $$ \{x\} $$ whose only element is $$x$$. A **pair set** is the set $$ \{x, y\} $$ whose only elements are $$x$$ and $$y$$.

A set $$X$$ is a **subset** of another set $$Y$$, $$X \subseteq Y$$, if and only if every element of $$X$$ is also an element of $$Y$$. $$X$$ is a **proper subset** of $$Y$$, $$X \subset Y$$ if and only if $$X \subseteq Y$$ and $$X \neq Y$$.

Let $$X$$ be a set. The statement $$P(x)$$ is a **predicate** if it depends on each $$x \in X$$.

Let $$X$$ be a set and $$P(x)$$ be a predicate depending on $$x \in X$$. If $$P(x)$$ is true for all $$x \in X$$, the **universal quantifier** $$\forall $$ can be used to denote "for all". Hence $$ \forall x \in X : P(x)$$ means "the predicate $$P(x)$$ is true for all elements in $$X$$". If $$P(x)$$ is true for some $$x \in X$$, the **existential quantifier** $$\exists $$ can be used to mean "there exists some". Hence $$\exists x \in X : P(x)$$ means "there exists some elements in $$X$$ such that the predicate $$P(x)$$ is true".

Let $$X$$ be a set and for each element $$x \in X$$ let $$P(x)$$ be a predicate depending on $$x$$. Then there exists a set $$ \{x \in X : P(x)\} $$ whose elements are the elements in $$X$$ for which $$P(x)$$ is true where the symbol ":" means "such that". Hence $$ \{x \in X : P(x)\} $$ means "the set of elements in $$X$$ such that the predicate $$P(x)$$ is true". Building sets from predicates is called **specification**.

The **union** of a set $$X$$ with another set $$Y$$, $$X \cup Y$$, is the set of elements in $$X$$, $$Y$$ or both.

$$X \cup Y := \{x : x \in X \ \mathrm{or} \ x \in Y\} $$

The **intersection** of a set $$X$$ with another set $$Y$$, $$X \cap Y$$, is the set of elements in both $$X$$ and $$Y$$.

$$X \cap Y := \{x : x \in X \ \mathrm{and} \ x \in Y\} $$

The **relative complement** of a set $$X$$ in another set $$Y$$, $$Y \setminus X$$ is the set of elements in $$Y$$ that are not in $$X$$.

$$Y \setminus X := \{x : x \in Y \ \mathrm{and} \ x \notin X\} $$

The **symmetric difference** of a set $$X$$ with another set $$Y$$, $$X \ominus Y$$ is the set of elements in $$X$$ or $$Y$$ and not in $$X$$ and $$Y$$.

$$X \ominus Y := \{x : x \in X \ \mathrm{and} \ x \in Y \ \mathrm{and} \ x \notin X \cup Y\} $$

The **Cartesian product** of sets $$X$$ and $$Y$$, $$X \times Y$$ is the set of all ordered pairs $$(x,y)$$ where $$x$$ is an element of $$X$$ and $$y$$ is an element of $$Y$$.

$$X \times Y := \{(x,y) : x \in X \ \mathrm{and} \ y \in Y\} $$

Let $$X$$ be a set. The **power set** $$\mathcal{P}(X)$$ is the set of all subsets of $$X$$.

$$\mathcal{P}(X) := \{A : A \subseteq X \}$$

A set $$X$$ has **cardinality** $$n \in \mathbb{N}$$ if and only if it has equal cardinality with $$ \{i \in \mathbb{N} : i < n\} $$. $$X$$ has $$n$$ elements if and only if it has cardinality $$n$$.

A set $$X$$ is **finite** if and only if it has cardinality $$n \in \mathbb{N}$$. Otherwise, the set is **infinite**.

A set $$X$$ is **countable** if and only if it has cardinality equal with the natural numbers $$ \mathbb{N}$$. The set is **uncountable** if it is infinite and not countable.
