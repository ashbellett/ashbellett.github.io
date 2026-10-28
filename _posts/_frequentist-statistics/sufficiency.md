---
layout: post
category: "frequentist-statistics"
title:  "Sufficiency"
tags: ["statistics", "sufficiency"]
description: "Information in statistics"
---

Let $$\underline{X}$$ be a random sample of size $$n$$ from the population $$\mathbb{P}_{X;\,\theta}$$ and $$T=t\left(\underline{X}\right)$$ be a statistic. The statistic $$T$$ is a **sufficient statistic** for $$\theta$$ if and only if the conditional distribution of the random sample given $$T$$ does not depend on $$\theta.$$

$$\mathbb{P}\left(\underline{X}\mid T,\theta\right)=\mathbb{P}\left(\underline{X}\mid T\right)$$

A sufficient statistic contains all of the information in the random sample about $$\theta.$$ A statistic cannot contain more information about $$\theta$$ than the random sample that it summarises.

Let $$\underline{X}$$ be a random sample of size $$n$$ from a continuous population $$\mathbb{P}_{X;\,\theta}$$ with joint pdf $$f_{\underline{X}}\left(\underline{x}\mid\theta\right)$$ and $$T=t\left(\underline{X}\right)$$ be a statistic with pdf $$f_T\left(t\mid\theta\right).$$ The statistic $$T$$ is a sufficient statistic for $$\theta$$ if and only if the ratio of the joint pdf of the random sample to the pdf of the statistic does not depend on $$\theta$$ for all $$\underline{x}\in S^n.$$

$$\frac{f_{\underline{X}}\left(\underline{x}\mid\theta\right)}{f_T\left(t\left(\underline{x}\right)\mid\theta\right)}$$

Let $$\underline{X}$$ be a random sample of size $$n$$ from a continuous population $$\mathbb{P}_{X;\,\theta}$$ with joint pdf $$f_{\underline{X}}\left(\underline{x}\mid\theta\right)$$ and $$T=t\left(\underline{X}\right)$$ be a statistic. The **factorisation theorem** states that $$T$$ is a sufficient statistic for $$\theta$$ if and only if there exist functions $$u\left(t\mid\theta\right)$$ and $$v\left(\underline{x}\right)$$ such that the joint pdf of the random sample factorises into a function of the statistic and the parameter and a function of the data alone.

$$f_{\underline{X}}\left(\underline{x}\mid\theta\right)=u\left(t\left(\underline{x}\right)\mid\theta\right)v\left(\underline{x}\right)\,\,\forall\,\underline{x}\in S^n,\,\theta\in\Theta$$

The ratio test and the factorisation theorem also hold for discrete populations with the corresponding pmfs in place of pdfs.
