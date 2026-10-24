---
layout: post
category: "topology"
title:  "Connectedness"
tags: ["topology", "connectedness"]
description: "Spaces that are all of a piece"
---

Let $$X$$ be a topological space. A **separation** of $$X$$ is a pair of disjoint non-empty open sets whose union is $$X.$$ $$X$$ is **disconnected** if it has a separation and **connected** otherwise, and a subset $$A\subseteq X$$ is connected if it is connected as a subspace. Equivalently, $$X$$ is connected if and only if the only subsets of $$X$$ that are both open and closed are $$\varnothing$$ and $$X.$$

A subset of $$\mathbb{R}$$ is connected if and only if it is an interval. The rational numbers are disconnected, since $$\left\{x\in\mathbb{Q}:x<\sqrt{2}\right\}$$ and $$\left\{x\in\mathbb{Q}:x>\sqrt{2}\right\}$$ separate them, and a set with the discrete topology is connected only if it has at most one point. Connected sets have the following properties:
- the closure of a connected set is connected, as is any set between a connected set and its closure;
- the union of connected sets with a common point is connected;
- the product of finitely many connected spaces is connected;
- the continuous image of a connected set is connected.

The last property states that if $$f:X\rightarrow Y$$ is continuous and $$A\subseteq X$$ is connected then $$f(A)$$ is connected. Since the connected subsets of $$\mathbb{R}$$ are the intervals, a continuous real-valued function on a connected space takes every value between any two of its values, which extends the intermediate value theorem. Connectedness is a topological property, so an interval is not homeomorphic to a circle, which stays connected when a point is removed.

Let $$x\in X.$$ The **connected component** of $$x$$ is the union of all connected subsets of $$X$$ containing $$x,$$ which is the largest connected set containing $$x.$$ The connected components partition $$X$$ into closed sets, and $$X$$ is connected if and only if it has exactly one component. The components of $$\mathbb{Q}$$ are its single points.

A **path** in $$X$$ from $$x$$ to $$y$$ is a continuous function $$\gamma:\left[0,1\right]\rightarrow X$$ with $$\gamma(0)=x$$ and $$\gamma(1)=y.$$ $$X$$ is **path-connected** if any two of its points are joined by a path, and the **path component** of $$x$$ is the set of points joined to $$x$$ by a path. A subset of $$\mathbb{R}^n$$ that contains the line segment $$\left\{\left(1-t\right)\underline{x}+t\,\underline{y}:t\in\left[0,1\right]\right\}$$ between any two of its points is path-connected by those segments, so balls, intervals and $$\mathbb{R}^n$$ are path-connected, as are spheres and $$\mathbb{R}^n$$ with a point removed when $$n\geq 2.$$ The continuous image of a path-connected set is path-connected.

A path-connected space is connected, since the image of each path is connected and the paths from a fixed point share that point. The converse is false: the **topologist's sine curve**, the closure in $$\mathbb{R}^2$$ of the graph of $$x\mapsto\sin\frac{1}{x}$$ on $$\left(0,1\right],$$ is connected but no path joins the graph to the segment $$\left\{0\right\}\times\left[-1,1\right]$$ in its closure. An open connected subset of $$\mathbb{R}^n$$ is path-connected, and any two of its points are joined by a path made of finitely many line segments, so the two notions agree for the open sets on which vector fields are defined.
