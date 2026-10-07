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

If the population $$\mathbb{P}_{X;\,\theta}$$ is continuous with joint pdf of the random sample given by $$f_{\underline{X}}\left(\underline{x}\mid\theta\right)$$ and the pdf of a statistic $$T=t\left(\underline{X}\right)$$ is given by $$f_T\left(t\mid\theta\right)$$ then $$T$$ is a sufficient statistic for $$\theta$$ if and only if the ratio of pdfs

$$\frac{f_{\underline{X}}\left(\underline{x}\mid\theta\right)}{f_T\left(t\left(\underline{x}\right)\mid\theta\right)}$$

does not depend on $$\theta$$ (it is constant as a function of $$\theta$$) $$\forall\,\underline{x}\in S^n.$$

The **factorisation theorem** states that a statistic $$T=t\left(\underline{X}\right)$$ is a sufficient statistic for $$\theta$$ if and only if there exist functions $$u\left(t\mid\theta\right)$$ and $$v\left(\underline{x}\right)$$ such that the joint pdf of the random sample can be factored:

$$f_{\underline{X}}\left(\underline{x}\mid\theta\right)=u\left(t\left(\underline{x}\right)\mid\theta\right)v\left(\underline{x}\right)\,\,\forall\,\underline{x}\in S^n,\,\theta\in\Theta.$$

The tests for sufficient statistics are also true for discrete random samples using the corresponding pmfs instead.
