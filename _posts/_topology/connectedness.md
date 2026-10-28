---
layout: post
category: "topology"
title:  "Connectedness"
tags: ["topology", "connectedness"]
description: "Spaces that are all of a piece"
---

Let $$X$$ be a topological space. A **separation** of $$X$$ is a pair of disjoint non-empty open sets whose union is $$X.$$

Let $$X$$ be a topological space. The space $$X$$ is **disconnected** if and only if it has a separation. The space $$X$$ is **connected** if and only if it is not disconnected. Equivalently, $$X$$ is connected if and only if the only subsets of $$X$$ that are both open and closed are $$\varnothing$$ and $$X.$$

Let $$X$$ be a topological space and $$A\subseteq X.$$ The set $$A$$ is **connected** if and only if it is connected as a subspace of $$X.$$ Connected sets have the following properties:
- a subset of $$\mathbb{R}$$ is connected if and only if it is an interval;
- the rational numbers are disconnected, since $$\left\{x\in\mathbb{Q}:x<\sqrt{2}\right\}$$ and $$\left\{x\in\mathbb{Q}:x>\sqrt{2}\right\}$$ separate them;
- a set with the discrete topology is connected only if it has at most one point;
- the closure of a connected set is connected, as is any set between a connected set and its closure;
- the union of connected sets with a common point is connected;
- the product of finitely many connected spaces is connected;
- the continuous image of a connected set is connected: if $$f:X\rightarrow Y$$ is continuous and $$A\subseteq X$$ is connected then $$f(A)$$ is connected.

Since the connected subsets of $$\mathbb{R}$$ are the intervals, a continuous real-valued function on a connected space takes every value between any two of its values, which extends the intermediate value theorem. Connectedness is a topological property, so an interval is not homeomorphic to a circle, which stays connected when a point is removed.

Let $$X$$ be a topological space and $$x\in X.$$ The **connected component** of $$x$$ is the union of all connected subsets of $$X$$ containing $$x.$$ The connected component of $$x$$ is the largest connected set containing $$x.$$ Connected components have the following properties:
- the connected components partition $$X$$ into closed sets;
- $$X$$ is connected if and only if it has exactly one connected component;
- the connected components of $$\mathbb{Q}$$ are its single points.

Let $$X$$ be a topological space and $$x,y\in X.$$ A **path** in $$X$$ from $$x$$ to $$y$$ is a continuous function $$\gamma:\left[0,1\right]\rightarrow X$$ with $$\gamma(0)=x$$ and $$\gamma(1)=y.$$

Let $$X$$ be a topological space. The space $$X$$ is **path-connected** if and only if any two of its points are joined by a path.

Let $$X$$ be a topological space and $$x\in X.$$ The **path component** of $$x$$ is the set of points of $$X$$ that are joined to $$x$$ by a path.

Let $$\underline{x},\underline{y}\in\mathbb{R}^n.$$ The **line segment** between $$\underline{x}$$ and $$\underline{y}$$ is the set $$\left\{\left(1-t\right)\underline{x}+t\,\underline{y}:t\in\left[0,1\right]\right\}.$$ Path-connected sets have the following properties:
- a subset of $$\mathbb{R}^n$$ that contains the line segment between any two of its points is path-connected by those segments, so balls, intervals and $$\mathbb{R}^n$$ are path-connected;
- spheres and $$\mathbb{R}^n$$ with a point removed are path-connected when $$n\geq 2;$$
- the continuous image of a path-connected set is path-connected;
- a path-connected space is connected, since the image of each path is connected and the paths from a fixed point share that point.

The converse of the last property is false. The **topologist's sine curve** is the closure in $$\mathbb{R}^2$$ of the graph of $$x\mapsto\sin\frac{1}{x}$$ on $$\left(0,1\right].$$ The topologist's sine curve is connected, but no path joins the graph to the segment $$\left\{0\right\}\times\left[-1,1\right]$$ in its closure. An open connected subset of $$\mathbb{R}^n$$ is path-connected, and any two of its points are joined by a path made of finitely many line segments, so connectedness and path-connectedness agree for the open sets on which vector fields are defined.
