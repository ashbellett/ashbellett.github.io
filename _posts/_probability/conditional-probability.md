---
layout: post
category: "Probability"
title:  "Conditional Probability"
tags: ["probability", "conditional"]
description: "Using events that have occurred"
---

Given a probability space $$\left(\Omega, \mathcal{F}, \mathbb{P}\right)$$ where $$\Omega$$ is a sample space, $$\mathcal{F}$$ is a $$\sigma$$-algebra on $$\Omega$$ and $$\mathbb{P}$$ is a probability measure, events $$A,B\subseteq\Omega$$ and $$\mathbb{P}\left(B\right)>0,$$ the **conditional probability** of event $$A$$ given that event $$B$$ has occurred is:

$$\mathbb{P}\left(A|B\right)=\frac{\mathbb{P}\left(A\cap B\right)}{\mathbb{P}\left(B\right)}.$$

In general, $$\mathbb{P}\left(A|B\right)\neq\mathbb{P}\left(B|A\right).$$

If events $$A$$ and $$B$$ are independent events then:

$$\mathbb{P}\left(A|B\right)=\frac{\mathbb{P}\left(A\right)\,\mathbb{P}\left(B\right)}{\mathbb{P}\left(B\right)}=\mathbb{P}\left(A\right).$$

Conditional probability is equivalent to shrinking the sample space by replacing events with their intersections and consequently rescaling probabilities.
