---
layout: post
category: "sets"
title:  "Sets"
tags: ["sets", "set"]
description: "Collections of elements"
---

An **object** is any abstract entity that can be formally defined and assigned to a variable.

A **set** is an unordered collection of distinct objects. A set is itself an object.

Let $$X$$ be a set and $$x$$ be an object. The object $$x$$ is an **element** of $$X,$$ written $$x \in X,$$ if and only if $$x$$ lies in the collection $$X.$$ Otherwise $$x$$ is not an element of $$X,$$ written $$x \notin X.$$

Let $$X$$ and $$Y$$ be sets. The sets $$X$$ and $$Y$$ are **equal**, written $$X=Y,$$ if and only if every element of $$X$$ is an element of $$Y$$ and every element of $$Y$$ is an element of $$X.$$ Otherwise $$X$$ and $$Y$$ are not equal, written $$X \neq Y.$$

The **empty set** $$\varnothing$$ is the set that contains no elements.

Let $$x$$ be an object. The **singleton set** $$\{x\}$$ is the set whose only element is $$x.$$

Let $$x$$ and $$y$$ be objects. The **pair set** $$\{x, y\}$$ is the set whose only elements are $$x$$ and $$y.$$

Let $$X$$ and $$Y$$ be sets. The set $$X$$ is a **subset** of $$Y,$$ written $$X \subseteq Y,$$ if and only if every element of $$X$$ is an element of $$Y.$$ The set $$X$$ is a **proper subset** of $$Y,$$ written $$X \subset Y,$$ if and only if $$X \subseteq Y$$ and $$X \neq Y.$$

Let $$X$$ be a set. A **predicate** $$P(x)$$ on $$X$$ is a logical statement that depends on an element $$x \in X.$$

Let $$X$$ be a set and $$P(x)$$ be a predicate on $$X.$$ The **universal quantifier** $$\forall$$ denotes "for all". The statement

$$ \forall x \in X : P(x)$$

means "the predicate $$P(x)$$ is true for all elements $$x$$ in $$X$$".

Let $$X$$ be a set and $$P(x)$$ be a predicate on $$X.$$ The **existential quantifier** $$\exists$$ denotes "there exists". The statement

$$\exists x \in X : P(x)$$

means "there exists at least one element $$x$$ in $$X$$ such that the predicate $$P(x)$$ is true". The symbol ":" means "such that".

Let $$X$$ be a set and $$P(x)$$ be a predicate on $$X.$$ **Specification** is the construction of the set $$\{x \in X : P(x)\}$$ whose elements are the elements of $$X$$ for which $$P(x)$$ is true.

Let $$X$$ and $$Y$$ be sets. The **union** of $$X$$ and $$Y,$$ written $$X \cup Y,$$ is the set of objects that are elements of $$X,$$ of $$Y$$ or of both.

$$X \cup Y := \{x : x \in X \ \mathrm{or} \ x \in Y\} $$

Let $$X$$ and $$Y$$ be sets. The **intersection** of $$X$$ and $$Y,$$ written $$X \cap Y,$$ is the set of objects that are elements of both $$X$$ and $$Y.$$

$$X \cap Y := \{x : x \in X \ \mathrm{and} \ x \in Y\} $$

Let $$X$$ and $$Y$$ be sets. The **relative complement** of $$X$$ in $$Y,$$ written $$Y \setminus X,$$ is the set of elements of $$Y$$ that are not elements of $$X.$$

$$Y \setminus X := \{x : x \in Y \ \mathrm{and} \ x \notin X\} $$

Let $$X$$ and $$Y$$ be sets. The **symmetric difference** of $$X$$ and $$Y,$$ written $$X \triangle Y,$$ is the set of objects that are elements of $$X$$ or of $$Y$$ but not of both.

$$X \triangle Y := \{x : x \in X \cup Y \ \mathrm{and} \ x \notin X \cap Y\} = (X \setminus Y) \cup (Y \setminus X) $$

Let $$X$$ and $$Y$$ be sets. The **Cartesian product** of $$X$$ and $$Y,$$ written $$X \times Y,$$ is the set of all ordered pairs $$(x,y)$$ where $$x$$ is an element of $$X$$ and $$y$$ is an element of $$Y.$$

$$X \times Y := \{(x,y) : x \in X \ \mathrm{and} \ y \in Y\} $$

Let $$X$$ and $$Y$$ be sets. The sets $$X$$ and $$Y$$ are **disjoint** if and only if their intersection is the empty set.

$$X\cap Y=\varnothing$$

Let $$X$$ be a set. The **power set** of $$X,$$ written $$\mathcal{P}(X),$$ is the set of all subsets of $$X.$$

$$\mathcal{P}(X) := \{A : A \subseteq X \}$$

Let $$X$$ be a set. A **partition** $$P$$ of $$X$$ is a set of non-empty subsets of $$X$$ such that every element of $$X$$ is an element of exactly one subset in $$P.$$ A partition $$P$$ of $$X$$ has the following properties:

$$\varnothing \notin P$$

$$\bigcup_{A\in P} A=X$$

$$A\cap B = \varnothing\,\,\forall\,A,B\in P, A\neq B.$$
