---
layout: post
category: "frequentist-statistics"
title:  "Sufficiency"
tags: ["statistics", "sufficiency"]
description: "Information in statistics"
---

A statistic cannot contain more information than the random sample that it summarises. The degree to which a statistic encodes information about the distribution of a random sample is referred to as **sufficiency**.

Given a random sample  $$\underline{X}$$ of size $$n$$ from the population $$\mathbb{P}_{X;\,\theta},$$ a statistic $$T$$ is a **sufficient statistic** for the parameter $$\theta$$ if:

$$\mathbb{P}\left(\underline{X}\mid T,\theta\right)=\mathbb{P}\left(\underline{X}\mid T\right).$$

That is, the conditional distribution of the random sample given the value of the statistic $$T$$ is independent of the parameter $$\theta.$$

If the population $$\mathbb{P}_{X;\,\theta}$$ is continuous with joint pdf of the random sample given by $$f_{\underline{X}}\left(\underline{X}\mid\theta\right)$$ and the pdf of a statistic $$T$$ is given by $$f_T\left(t\mid\theta\right)$$ then $$T$$ is a sufficient statistic for $$\theta$$ if and only if the ratio of pdfs

$$\frac{f_{\underline{X}}\left(\underline{x}\mid\theta\right)}{f_T\left(t\mid\theta\right)}$$

is a function of only $$\theta\,\,\forall\,\underline{X}\in S^n.$$

A statistic $$T$$ is a sufficient statistic for $$\theta$$ if and only if there exist functions $$u\left(t\mid\theta\right)$$ and $$v\left(\underline{X}\right)$$ such that the joint pdf of the random sample can be factored:

$$f_{\underline{X}}\left(\underline{x}\mid\theta\right)=u\left(t\mid\theta\right)v\left(\underline{X}\right)$$

The tests for sufficient statistics are also true for discrete random samples using the corresponding pmfs instead.
