---
layout: post
category: "frequentist-statistics"
title:  "Hypothesis Testing"
tags: ["statistics", "hypothesis-testing"]
description: "Deciding whether data supports an idea"
---

Let $$\underline{X}$$ be a random sample of size $$n$$ distributed according to the population $$\mathbb{P}_{X;\,\theta},$$ which depends on the parameter $$\theta,$$ and common state space $$S.$$ A **hypothesis** $$H$$ is a statement about the true value of $$\theta.$$

A **simple hypothesis** assigns a single value to $$\theta$$ whereas a **composite hypothesis** states that $$\theta$$ takes a value in a given set. A simple hypothesis fully specifies the population $$\mathbb{P}_{X;\,\theta}$$ whereas a composite hypothesis does not.

A parameter space $$\Theta$$ where $$\theta\in\Theta$$ can be partitioned into two complementary regions $$\Theta_0$$ and $$\Theta_1$$ where $$\Theta_0\cap\Theta_1=\varnothing$$ and $$\Theta_0\cup\Theta_1=\Theta.$$ Two competing hypotheses are formed: the **null hypothesis** $$H_0:\theta\in\Theta_0$$ and the **alternative hypothesis** $$H_1:\theta\in\Theta_1.$$

A **hypothesis test** tries to establish whether an observed random sample $$\underline{x}$$ contradicts a hypothesis:

1. The null hypothesis is assumed to be true and a **test statistic** $$T=g\left(\underline{X}\right)$$ is created such that its sampling distribution is known under the conditions of the null hypothesis.

2. If the observed value of the test statistic $$t=g\left(\underline{x}\right)$$ lies sufficiently far into the tails of the sampling distribution of $$T$$ then it is concluded that the observed data is sufficiently unlikely under the null hypothesis and the null hypothesis is rejected.

Failing to reject the null hypothesis is not evidence that the null hypothesis is true. If the sample size $$n$$ is small, or the true value of $$\theta$$ lies in $$\Theta_1$$ but close to $$\Theta_0,$$ then the sampling distribution of $$T$$ under the alternative hypothesis overlaps heavily with its sampling distribution under the null hypothesis. The observed value $$t$$ is then likely to fail to lie far enough into the tails of the sampling distribution of $$T$$ under the null hypothesis even though the null hypothesis is false. The null hypothesis is therefore never accepted and the only decisions are rejecting or not rejecting the null hypothesis.

The **critical region** $$C_{\alpha}$$ with **size** $$\alpha$$ is the set of values of the test statistic $$T$$ that corresponds to the tails of the sampling distribution of $$T$$ such that the probability under the null hypothesis that the test statistic lies in the critical region is equal to the size of the test:

$$\mathbb{P}\left(T\in C_{\alpha}\mid H_0\right)=\alpha$$

For a composite null hypothesis this probability can vary with $$\theta\in\Theta_0$$ and the size is its largest value:

$$\sup_{\theta\in\Theta_0}\mathbb{P}_{\theta}\left(T\in C_{\alpha}\right)=\alpha$$

The null hypothesis is rejected if and only if $$t\in C_{\alpha}.$$

A **two-sided test** involves a critical region defined over both the upper and lower tails of the sampling distribution of $$T$$ whereas a **one-sided test** involves a critical region defined over one tail which is identified through inspecting the alternative hypothesis $$H_1.$$ For example, $$H_1:\theta>\theta_0$$ leads to a critical region in the upper tail.

The **$$p$$-value** for an observed random sample $$\underline{x}$$ is the probability under the null hypothesis that the test statistic takes a value that is at least as extreme as the observed test statistic $$t:$$

- $$p=\mathbb{P}\left(T\geq t\mid H_0\right)$$ (one-sided test, upper tail);
- $$p=\mathbb{P}\left(T\leq t\mid H_0\right)$$ (one-sided test, lower tail);
- $$p=\mathbb{P}\left(\lvert T\rvert\geq \lvert t\rvert\mid H_0\right)$$ (two-sided test, when the sampling distribution of $$T$$ under $$H_0$$ is symmetric about zero; otherwise a common choice is $$p=2\min\left\{\mathbb{P}\left(T\geq t\mid H_0\right),\mathbb{P}\left(T\leq t\mid H_0\right)\right\}$$).

A small $$p$$-value corresponds to a value of $$t$$ that is unlikely to occur under $$H_0$$ and is an indicator that the data $$\underline{x}$$ and $$H_0$$ are inconsistent.

If the null hypothesis is rejected given that the null hypothesis is true, it is called a **type I error** and the probability of a type I error occurring corresponds to the size $$\alpha$$ of the test:

$$\alpha=\mathbb{P}\left(\mathrm{Type}\,\mathrm{I}\,\mathrm{error}\right)=\mathbb{P}\left(\mathrm{Reject}\,H_0\mid H_0\,\mathrm{is}\,\mathrm{true}\right)$$

If the null hypothesis is not rejected given that the alternative hypothesis is true, it is called a **type II error**. The probability of a type II error occurring is denoted $$\beta$$ and the **power** of the test is $$1-\beta,$$ the probability of correctly rejecting the null hypothesis:

$$1-\beta=1-\mathbb{P}\left(\mathrm{Type}\,\mathrm{II}\,\mathrm{error}\right)=\mathbb{P}\left(\mathrm{Reject}\,H_0\mid H_1\,\mathrm{is}\,\mathrm{true}\right)$$

The **power function** of a test with critical region $$C_{\alpha}$$ is the probability of rejecting the null hypothesis as a function of the true parameter value,

$$\pi\left(\theta\right):=\mathbb{P}_{\theta}\left(T\in C_{\alpha}\right)\,\,\forall\,\theta\in\Theta,$$

so that the size is $$\sup_{\theta\in\Theta_0}\pi\left(\theta\right)$$ and the power against a particular alternative $$\theta\in\Theta_1$$ is $$\pi\left(\theta\right).$$ Tests of the same size are compared by their power functions on $$\Theta_1.$$ If the test statistic has a continuous distribution then under a simple null hypothesis the $$p$$-value is a $$\mathrm{U}\left(0,1\right)$$ random variable by the probability integral transform, and rejecting when $$p\leq\alpha$$ is a test of size $$\alpha.$$

Let $$H_0:\theta=\theta_0$$ and $$H_1:\theta=\theta_1$$ both be simple hypotheses. The **likelihood ratio** of an observed random sample is the ratio of the likelihood under the alternative to the likelihood under the null,

$$\Lambda\left(\underline{x}\right):=\frac{\mathcal{L}\left(\theta_1\mid\underline{x}\right)}{\mathcal{L}\left(\theta_0\mid\underline{x}\right)},$$

and large values indicate that the data are more probable under $$H_1.$$ The **Neyman–Pearson lemma** states that the test that rejects $$H_0$$ if and only if $$\Lambda\left(\underline{x}\right)\geq k,$$ with $$k$$ chosen so that $$\mathbb{P}_{\theta_0}\left(\Lambda\left(\underline{X}\right)\geq k\right)=\alpha,$$ is the **most powerful test** of size $$\alpha:$$ no other test of size at most $$\alpha$$ has greater power at $$\theta_1.$$

A test is a **uniformly most powerful** (UMP) test of size $$\alpha$$ for a composite alternative $$H_1:\theta\in\Theta_1$$ if it is most powerful at every $$\theta\in\Theta_1$$ among tests of size at most $$\alpha.$$ A family of distributions has a **monotone likelihood ratio** in a statistic $$T$$ if $$\frac{\mathcal{L}\left(\theta_1\mid\underline{x}\right)}{\mathcal{L}\left(\theta_0\mid\underline{x}\right)}$$ is a monotonically increasing function of $$T\left(\underline{x}\right)$$ whenever $$\theta_1>\theta_0.$$ The **Karlin–Rubin theorem** states that for such a family the one-sided test that rejects $$H_0:\theta\leq\theta_0$$ when $$T\left(\underline{x}\right)\geq c,$$ with $$\mathbb{P}_{\theta_0}\left(T\geq c\right)=\alpha,$$ is UMP for $$H_1:\theta>\theta_0.$$ Exponential families have a monotone likelihood ratio in their natural statistic. UMP tests do not exist for two-sided alternatives in general, since the most powerful test against $$\theta_1>\theta_0$$ differs from that against $$\theta_1<\theta_0.$$

Let $$H_0:\theta\in\Theta_0$$ and $$H_1:\theta\in\Theta\setminus\Theta_0$$ be general hypotheses. The **likelihood ratio test** statistic compares the largest likelihood attainable under the null hypothesis with the largest likelihood attainable overall,

$$\lambda\left(\underline{x}\right):=\frac{\sup_{\theta\in\Theta_0}\mathcal{L}\left(\theta\mid\underline{x}\right)}{\sup_{\theta\in\Theta}\mathcal{L}\left(\theta\mid\underline{x}\right)}=\frac{\mathcal{L}\left(\hat{\theta}_0\mid\underline{x}\right)}{\mathcal{L}\left(\hat{\theta}\mid\underline{x}\right)}\in\left(0,1\right],$$

where $$\hat{\theta}$$ is the maximum likelihood estimate and $$\hat{\theta}_0$$ is the maximum likelihood estimate restricted to $$\Theta_0,$$ and the test rejects $$H_0$$ for small values of $$\lambda\left(\underline{x}\right).$$ **Wilks' theorem** states that if $$\Theta_0$$ is specified by $$r$$ independent restrictions on the $$k$$-dimensional parameter, so that $$\Theta_0$$ has dimension $$k-r,$$ then under $$H_0$$ and the regularity conditions

$$-2\log_e\lambda\left(\underline{X}\right)\xrightarrow{d}\chi^2_r,$$

which gives an approximate critical value $$-2\log_e\lambda\left(\underline{x}\right)\geq\chi^2_{r,1-\alpha}$$ without deriving the exact sampling distribution, where $$\chi^2_{r,1-\alpha}$$ is the $$\left(1-\alpha\right)$$-quantile of $$\chi^2_r.$$ Many standard tests are exact or approximate likelihood ratio tests.

Two further tests use only the asymptotic normality of the maximum likelihood estimator and avoid one of the two maximisations. Let $$H_0:\theta=\theta_0$$ for a scalar parameter. The **Wald test** standardises the distance between the unrestricted estimate and the null value by its estimated standard error,

$$W:=\frac{\left(\hat{\theta}-\theta_0\right)^2}{\left(n\,I\left(\hat{\theta}\right)\right)^{-1}}=n\,I\left(\hat{\theta}\right)\left(\hat{\theta}-\theta_0\right)^2\xrightarrow{d}\chi^2_1\,\,\mathrm{under}\,\,H_0,$$

and needs only the unrestricted estimate. The **score test** or **Lagrange multiplier test** measures how far the score of the sample at the null value is from zero, which it would be at the unrestricted maximum,

$$S:=\frac{\left(\sum_{i=1}^n s\left(\theta_0;\,x_i\right)\right)^2}{n\,I\left(\theta_0\right)}\xrightarrow{d}\chi^2_1\,\,\mathrm{under}\,\,H_0,$$

and needs no maximisation at all. For a vector parameter with $$r$$ restrictions both statistics are quadratic forms in the Fisher information matrix with limiting distribution $$\chi^2_r.$$ The likelihood ratio, Wald and score tests are asymptotically equivalent under $$H_0$$ and against alternatives close to it, but can differ in finite samples; the Wald test is not invariant to reparametrisation whereas the other two are.

Let $$\underline{X}$$ be a random sample of size $$n$$ from $$\mathrm{N}\left(\mu,\sigma^2\right).$$ The sample mean and sample variance are independent with

$$\overline{X}_n\sim\mathrm{N}\left(\mu,\frac{\sigma^2}{n}\right),\qquad\frac{\left(n-1\right)S_n^2}{\sigma^2}\sim\chi^2_{n-1},\qquad\frac{\sqrt{n}\left(\overline{X}_n-\mu\right)}{S_n}\sim t_{n-1},$$

from which the standard tests for normal populations follow, each with its test statistic and sampling distribution under $$H_0:$$
- the **$$z$$-test** for $$H_0:\mu=\mu_0$$ with known variance uses $$Z=\frac{\sqrt{n}\left(\overline{X}_n-\mu_0\right)}{\sigma}\sim\mathrm{N}\left(0,1\right);$$
- the **one-sample $$t$$-test** for $$H_0:\mu=\mu_0$$ with unknown variance uses $$T=\frac{\sqrt{n}\left(\overline{X}_n-\mu_0\right)}{S_n}\sim t_{n-1};$$
- the **two-sample $$t$$-test** for $$H_0:\mu_1=\mu_2$$ from independent samples of sizes $$n_1$$ and $$n_2$$ with a common variance uses the **pooled variance** $$S_p^2=\frac{\left(n_1-1\right)S_1^2+\left(n_2-1\right)S_2^2}{n_1+n_2-2}$$ and $$T=\frac{\overline{X}_1-\overline{X}_2}{S_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}\sim t_{n_1+n_2-2};$$ **Welch's $$t$$-test** drops the common variance assumption and uses an approximate $$t$$ distribution;
- the **paired $$t$$-test** applies the one-sample $$t$$-test to the differences of paired observations;
- the **chi-squared test for a variance** for $$H_0:\sigma^2=\sigma_0^2$$ uses $$\frac{\left(n-1\right)S_n^2}{\sigma_0^2}\sim\chi^2_{n-1};$$
- the **$$F$$-test for equality of variances** for $$H_0:\sigma_1^2=\sigma_2^2$$ uses $$F=\frac{S_1^2}{S_2^2}\sim F_{n_1-1,n_2-1}.$$

By the central limit theorem the $$z$$- and $$t$$-tests for means remain approximately valid for large samples from non-normal populations, whereas the tests for variances are sensitive to non-normality. Let $$n$$ observations fall into $$k$$ categories with observed counts $$O_1,\ldots,O_k$$ and let $$E_i=n\,p_i$$ be the counts expected under a hypothesised distribution $$\underline{p}$$ that may depend on $$q$$ parameters estimated from the data. **Pearson's chi-squared test** uses

$$X^2:=\sum_{i=1}^k\frac{\left(O_i-E_i\right)^2}{E_i}\xrightarrow{d}\chi^2_{k-1-q}\,\,\mathrm{under}\,\,H_0,$$

which as a **goodness-of-fit test** assesses whether the data follow the hypothesised distribution and, applied to an $$r\times c$$ table of counts with expected counts computed from the row and column totals, gives the **chi-squared test of independence** with $$\left(r-1\right)\left(c-1\right)$$ degrees of freedom. The chi-squared test is an approximation to the likelihood ratio test for multinomial counts. A **non-parametric test** makes no parametric assumption about the population; for example the **Kolmogorov–Smirnov test** of $$H_0:F=F_0$$ uses the statistic $$\sup_x\left\lvert\hat{F}_n\left(x\right)-F_0\left(x\right)\right\rvert,$$ whose null distribution does not depend on $$F_0,$$ and the **Wilcoxon** tests replace observations by their ranks.

Hypothesis tests and confidence intervals are dual: the set of values $$\theta_0$$ for which $$H_0:\theta=\theta_0$$ is not rejected at size $$\alpha$$ is a $$100\left(1-\alpha\right)\%$$ confidence interval for $$\theta,$$ and conversely $$H_0:\theta=\theta_0$$ is rejected at size $$\alpha$$ if and only if $$\theta_0$$ lies outside a $$100\left(1-\alpha\right)\%$$ confidence interval. For example, the one-sample $$t$$-test does not reject $$\mu_0$$ if and only if $$\mu_0\in\overline{X}_n\pm t_{n-1,1-\frac{\alpha}{2}}\frac{S_n}{\sqrt{n}}.$$

**Multiple testing** is the simultaneous testing of $$m>1$$ hypotheses $$H_{0,1},\ldots,H_{0,m}$$ with $$p$$-values $$p_1,\ldots,p_m,$$ of which an unknown $$m_0$$ are true. If each is tested at size $$\alpha$$ then the expected number of true null hypotheses rejected is $$m_0\alpha,$$ and for independent tests the probability of at least one false rejection is $$1-\left(1-\alpha\right)^{m_0},$$ which approaches one as $$m_0$$ grows. The **family-wise error rate** (FWER) is the probability of making at least one type I error across the family of tests,

$$\mathrm{FWER}:=\mathbb{P}\left(\mathrm{at}\,\,\mathrm{least}\,\,\mathrm{one}\,\,\mathrm{true}\,\,H_{0,i}\,\,\mathrm{is}\,\,\mathrm{rejected}\right),$$

and a procedure controls the FWER at level $$\alpha$$ if $$\mathrm{FWER}\leq\alpha$$ for every configuration of true and false null hypotheses.

The **Bonferroni correction** rejects $$H_{0,i}$$ if and only if $$p_i\leq\frac{\alpha}{m}.$$ It controls the FWER at level $$\alpha$$ under any dependence between the tests, since the probability of a union of events is at most the sum of their probabilities, $$\mathrm{FWER}\leq\sum_{i:\,H_{0,i}\,\mathrm{true}}\mathbb{P}\left(p_i\leq\tfrac{\alpha}{m}\right)\leq\frac{m_0\alpha}{m}\leq\alpha,$$ but it is conservative and loses power as $$m$$ grows. **Holm's procedure** orders the $$p$$-values $$p_{(1)}\leq\ldots\leq p_{(m)}$$ and rejects the hypotheses corresponding to $$p_{(1)},\ldots,p_{(k-1)},$$ where $$k$$ is the smallest index with

$$p_{(k)}>\frac{\alpha}{m-k+1},$$

so that each successive $$p$$-value is compared with a less stringent threshold. It controls the FWER at level $$\alpha$$ under any dependence and rejects every hypothesis that the Bonferroni correction rejects, so it is uniformly more powerful.

When $$m$$ is large, controlling the FWER is often too strict. Let $$R$$ be the number of rejected hypotheses and $$V$$ the number of them that are true null hypotheses, so that $$V$$ counts the **false discoveries**. The **false discovery proportion** is $$\frac{V}{\max\{R,1\}}$$ and the **false discovery rate** (FDR) is its expectation.

$$\mathrm{FDR}:=\mathbb{E}\left[\frac{V}{\max\{R,1\}}\right]$$

Controlling the FDR at level $$\alpha$$ allows false rejections as long as they are on average a small fraction of all rejections. When all null hypotheses are true the FDR equals the FWER, so FDR control is weaker than FWER control. The **Benjamini–Hochberg procedure** orders the $$p$$-values and finds the largest $$k$$ with

$$p_{(k)}\leq\frac{k}{m}\alpha,$$

then rejects the hypotheses corresponding to $$p_{(1)},\ldots,p_{(k)},$$ rejecting none if no such $$k$$ exists. If the $$p$$-values of the true null hypotheses are independent, or positively dependent in a specific sense, then it controls the FDR at level $$\frac{m_0}{m}\alpha\leq\alpha.$$ The **Benjamini–Yekutieli procedure** replaces $$\alpha$$ by $$\frac{\alpha}{\sum_{i=1}^m\frac{1}{i}}$$ and controls the FDR under arbitrary dependence. Multiple testing corrections only account for the tests that are actually performed, so selecting which hypotheses to test or to report after seeing the data invalidates the stated error rates.
