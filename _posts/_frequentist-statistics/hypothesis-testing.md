---
layout: post
category: "frequentist-statistics"
title:  "Hypothesis Testing"
tags: ["statistics", "hypothesis-testing"]
description: "Deciding whether data supports an idea"
---

Let $$\underline{X}$$ be a random sample of size $$n$$ from the population $$\mathbb{P}_{X;\,\theta}$$ with parameter space $$\Theta.$$ A **hypothesis** $$H$$ is a statement about the true value of $$\theta.$$

Let $$H$$ be a hypothesis. The hypothesis $$H$$ is a **simple hypothesis** if and only if it assigns a single value to $$\theta,$$ so that it fully specifies the population $$\mathbb{P}_{X;\,\theta}.$$ The hypothesis $$H$$ is a **composite hypothesis** if and only if it states that $$\theta$$ takes a value in a set containing more than one value.

Let $$\Theta_0$$ and $$\Theta_1$$ be a partition of the parameter space $$\Theta$$ into two complementary regions, so that $$\Theta_0\cap\Theta_1=\varnothing$$ and $$\Theta_0\cup\Theta_1=\Theta.$$ The **null hypothesis** is the hypothesis $$H_0:\theta\in\Theta_0.$$ The **alternative hypothesis** is the hypothesis $$H_1:\theta\in\Theta_1.$$

Let $$H_0$$ be a null hypothesis and $$g:S^n\rightarrow\mathbb{R}$$ be a function. A **test statistic** is a statistic $$T=g\left(\underline{X}\right)$$ whose sampling distribution is known under the null hypothesis. The **observed test statistic** is the realised value $$t=g\left(\underline{x}\right)$$ at an observed random sample $$\underline{x}.$$

Let $$H_0$$ and $$H_1$$ be null and alternative hypotheses and $$T$$ be a test statistic. A **hypothesis test** is a rule that rejects $$H_0$$ if and only if the observed test statistic lies in a specified set of values. A hypothesis test proceeds as follows:
1. the null hypothesis is assumed to be true and a test statistic $$T$$ is chosen whose sampling distribution is known under $$H_0;$$
2. if the observed test statistic $$t$$ lies sufficiently far into the tails of the sampling distribution of $$T$$ then the observed data are judged sufficiently unlikely under $$H_0$$ and $$H_0$$ is rejected.

Hypothesis tests have the following properties:
- the only decisions are rejecting or not rejecting $$H_0,$$ and $$H_0$$ is never accepted;
- failing to reject $$H_0$$ is not evidence that $$H_0$$ is true, since when $$n$$ is small or the true value of $$\theta$$ lies in $$\Theta_1$$ close to $$\Theta_0$$ the sampling distributions of $$T$$ under $$H_0$$ and $$H_1$$ overlap heavily and $$t$$ is likely to fail to lie far enough into the tails even though $$H_0$$ is false.

Let $$H_0$$ be a null hypothesis, $$T$$ be a test statistic and $$\alpha\in\left(0,1\right).$$ A **critical region** of **size** $$\alpha$$ is a set $$C_{\alpha}$$ of values of $$T$$ in the tails of its sampling distribution such that the largest probability under $$H_0$$ that $$T$$ lies in $$C_{\alpha}$$ is $$\alpha.$$

$$\sup_{\theta\in\Theta_0}\mathbb{P}_{\theta}\left(T\in C_{\alpha}\right)=\alpha$$

For a simple null hypothesis the supremum is the single probability $$\mathbb{P}\left(T\in C_{\alpha}\mid H_0\right)=\alpha.$$ The hypothesis test with critical region $$C_{\alpha}$$ rejects $$H_0$$ if and only if $$t\in C_{\alpha}.$$

Let $$T$$ be a test statistic. A **two-sided test** is a hypothesis test whose critical region lies in both the upper and lower tails of the sampling distribution of $$T.$$ A **one-sided test** is a hypothesis test whose critical region lies in one tail of the sampling distribution of $$T,$$ which is identified from the alternative hypothesis. For example, $$H_1:\theta>\theta_0$$ leads to a critical region in the upper tail.

Let $$H_0$$ be a null hypothesis, $$T$$ be a test statistic and $$t$$ be the observed test statistic. The **$$p$$-value** of the observed random sample is the probability under $$H_0$$ that the test statistic takes a value at least as extreme as $$t.$$
- For a one-sided test in the upper tail, $$p=\mathbb{P}\left(T\geq t\mid H_0\right).$$
- For a one-sided test in the lower tail, $$p=\mathbb{P}\left(T\leq t\mid H_0\right).$$
- For a two-sided test with a sampling distribution of $$T$$ under $$H_0$$ that is symmetric about zero, $$p=\mathbb{P}\left(\lvert T\rvert\geq \lvert t\rvert\mid H_0\right).$$ Otherwise a common choice is $$p=2\min\left\{\mathbb{P}\left(T\geq t\mid H_0\right),\mathbb{P}\left(T\leq t\mid H_0\right)\right\}.$$

A small $$p$$-value corresponds to a value of $$t$$ that is unlikely under $$H_0$$ and indicates that the data and $$H_0$$ are inconsistent. If the test statistic has a continuous distribution then under a simple null hypothesis the $$p$$-value is a $$\mathrm{U}\left(0,1\right)$$ random variable by the probability integral transform, and rejecting when $$p\leq\alpha$$ is a test of size $$\alpha.$$

Let $$H_0$$ be a null hypothesis and $$C_{\alpha}$$ be a critical region of size $$\alpha.$$ A **type I error** is the rejection of $$H_0$$ when $$H_0$$ is true. The probability of a type I error is the size $$\alpha$$ of the test.

$$\alpha=\mathbb{P}\left(\mathrm{Type}\,\mathrm{I}\,\mathrm{error}\right)=\mathbb{P}\left(\mathrm{Reject}\,H_0\mid H_0\,\mathrm{is}\,\mathrm{true}\right)$$

Let $$H_0$$ and $$H_1$$ be null and alternative hypotheses and $$C_{\alpha}$$ be a critical region. A **type II error** is the failure to reject $$H_0$$ when $$H_1$$ is true. The probability of a type II error is written $$\beta.$$

Let $$H_0$$ and $$H_1$$ be null and alternative hypotheses and $$C_{\alpha}$$ be a critical region. The **power** of the test is the probability of correctly rejecting $$H_0$$ when $$H_1$$ is true.

$$1-\beta=1-\mathbb{P}\left(\mathrm{Type}\,\mathrm{II}\,\mathrm{error}\right)=\mathbb{P}\left(\mathrm{Reject}\,H_0\mid H_1\,\mathrm{is}\,\mathrm{true}\right)$$

Let $$T$$ be a test statistic and $$C_{\alpha}$$ be a critical region. The **power function** of the test is the probability of rejecting $$H_0$$ as a function of the true parameter value.

$$\pi\left(\theta\right):=\mathbb{P}_{\theta}\left(T\in C_{\alpha}\right)\,\,\forall\,\theta\in\Theta$$

The power function has the following properties:
- the size of the test is $$\sup_{\theta\in\Theta_0}\pi\left(\theta\right);$$
- the power against a particular alternative $$\theta\in\Theta_1$$ is $$\pi\left(\theta\right);$$
- tests of the same size are compared by their power functions on $$\Theta_1.$$

Let $$H_0:\theta=\theta_0$$ and $$H_1:\theta=\theta_1$$ be simple hypotheses and $$\underline{x}$$ be an observed random sample. The **likelihood ratio** of $$\underline{x}$$ is the ratio of the likelihood under the alternative to the likelihood under the null.

$$\Lambda\left(\underline{x}\right):=\frac{\mathcal{L}\left(\theta_1\mid\underline{x}\right)}{\mathcal{L}\left(\theta_0\mid\underline{x}\right)}$$

Large values of the likelihood ratio indicate that the data are more probable under $$H_1.$$

Let $$H_0$$ and $$H_1$$ be hypotheses, $$\theta_1\in\Theta_1$$ and $$\alpha\in\left(0,1\right).$$ A hypothesis test is a **most powerful test** of size $$\alpha$$ at $$\theta_1$$ if and only if no other test of size at most $$\alpha$$ has greater power at $$\theta_1.$$

Let $$H_0:\theta=\theta_0$$ and $$H_1:\theta=\theta_1$$ be simple hypotheses, $$\alpha\in\left(0,1\right)$$ and $$k$$ be chosen so that $$\mathbb{P}_{\theta_0}\left(\Lambda\left(\underline{X}\right)\geq k\right)=\alpha.$$ The **Neyman–Pearson lemma** states that the test that rejects $$H_0$$ if and only if $$\Lambda\left(\underline{x}\right)\geq k$$ is the most powerful test of size $$\alpha$$ at $$\theta_1.$$

Let $$H_0$$ be a null hypothesis, $$H_1:\theta\in\Theta_1$$ be a composite alternative hypothesis and $$\alpha\in\left(0,1\right).$$ A hypothesis test is a **uniformly most powerful** (UMP) test of size $$\alpha$$ if and only if it is a most powerful test of size $$\alpha$$ at every $$\theta\in\Theta_1.$$

Let $$\left\{\mathbb{P}_{X;\,\theta}:\theta\in\Theta\right\}$$ be a parametric family with $$\Theta\subseteq\mathbb{R}$$ and $$T$$ be a statistic. The family has a **monotone likelihood ratio** in $$T$$ if and only if $$\frac{\mathcal{L}\left(\theta_1\mid\underline{x}\right)}{\mathcal{L}\left(\theta_0\mid\underline{x}\right)}$$ is a monotonically increasing function of $$T\left(\underline{x}\right)$$ whenever $$\theta_1>\theta_0.$$ Exponential families have a monotone likelihood ratio in their natural statistic.

Let $$\left\{\mathbb{P}_{X;\,\theta}\right\}$$ be a family with a monotone likelihood ratio in $$T,$$ $$\alpha\in\left(0,1\right)$$ and $$c$$ be chosen so that $$\mathbb{P}_{\theta_0}\left(T\geq c\right)=\alpha.$$ The **Karlin–Rubin theorem** states that the one-sided test that rejects $$H_0:\theta\leq\theta_0$$ when $$T\left(\underline{x}\right)\geq c$$ is UMP of size $$\alpha$$ for $$H_1:\theta>\theta_0.$$ UMP tests do not exist for two-sided alternatives in general, since the most powerful test against $$\theta_1>\theta_0$$ differs from that against $$\theta_1<\theta_0.$$

Let $$H_0:\theta\in\Theta_0$$ and $$H_1:\theta\in\Theta\setminus\Theta_0$$ be hypotheses, $$\hat{\theta}$$ be the maximum likelihood estimate and $$\hat{\theta}_0$$ be the maximum likelihood estimate restricted to $$\Theta_0.$$ The **likelihood ratio test statistic** is the ratio of the largest likelihood attainable under $$H_0$$ to the largest likelihood attainable overall.

$$\lambda\left(\underline{x}\right):=\frac{\sup_{\theta\in\Theta_0}\mathcal{L}\left(\theta\mid\underline{x}\right)}{\sup_{\theta\in\Theta}\mathcal{L}\left(\theta\mid\underline{x}\right)}=\frac{\mathcal{L}\left(\hat{\theta}_0\mid\underline{x}\right)}{\mathcal{L}\left(\hat{\theta}\mid\underline{x}\right)}\in\left(0,1\right]$$

The **likelihood ratio test** is the hypothesis test that rejects $$H_0$$ for small values of $$\lambda\left(\underline{x}\right).$$

Let $$\Theta_0$$ be specified by $$r$$ independent restrictions on the $$k$$-dimensional parameter, so that $$\Theta_0$$ has dimension $$k-r,$$ and the regularity conditions hold. **Wilks' theorem** states that under $$H_0$$ the transformed likelihood ratio test statistic converges in distribution to a chi-squared distribution with $$r$$ degrees of freedom.

$$-2\log_e\lambda\left(\underline{X}\right)\xrightarrow{d}\chi^2_r$$

Let $$\chi^2_{r,1-\alpha}$$ be the $$\left(1-\alpha\right)$$-quantile of $$\chi^2_r.$$ Wilks' theorem gives the approximate critical region $$-2\log_e\lambda\left(\underline{x}\right)\geq\chi^2_{r,1-\alpha}$$ without deriving the exact sampling distribution. Many standard tests are exact or approximate likelihood ratio tests.

Let $$H_0:\theta=\theta_0$$ for a scalar parameter, $$\hat{\theta}$$ be the maximum likelihood estimate and $$I$$ be the Fisher information. The **Wald test statistic** is the squared distance between the unrestricted estimate and the null value divided by its estimated variance.

$$W:=\frac{\left(\hat{\theta}-\theta_0\right)^2}{\left(n\,I\left(\hat{\theta}\right)\right)^{-1}}=n\,I\left(\hat{\theta}\right)\left(\hat{\theta}-\theta_0\right)^2$$

The **Wald test** is the hypothesis test that rejects $$H_0$$ for large values of $$W.$$ Under $$H_0,$$ $$W\xrightarrow{d}\chi^2_1.$$ The Wald test needs only the unrestricted estimate.

Let $$H_0:\theta=\theta_0$$ for a scalar parameter, $$s$$ be the score and $$I$$ be the Fisher information. The **score test statistic** is the squared score of the sample at the null value divided by the Fisher information of the sample.

$$S:=\frac{\left(\sum_{i=1}^n s\left(\theta_0;\,x_i\right)\right)^2}{n\,I\left(\theta_0\right)}$$

The **score test** or **Lagrange multiplier test** is the hypothesis test that rejects $$H_0$$ for large values of $$S.$$ Under $$H_0,$$ $$S\xrightarrow{d}\chi^2_1.$$ The score test measures how far the score at the null value is from zero, which it would be at the unrestricted maximum, and needs no maximisation. The likelihood ratio, Wald and score tests have the following properties:
- for a vector parameter with $$r$$ restrictions the Wald and score statistics are quadratic forms in the Fisher information matrix with limiting distribution $$\chi^2_r;$$
- the three tests are asymptotically equivalent under $$H_0$$ and against alternatives close to it, but can differ in finite samples;
- the Wald test is not invariant to reparametrisation whereas the other two are.

Let $$\underline{X}$$ be a random sample of size $$n$$ from $$\mathrm{N}\left(\mu,\sigma^2\right).$$ The sample mean and sample variance are independent, and their sampling distributions are as follows.

$$\overline{X}_n\sim\mathrm{N}\left(\mu,\frac{\sigma^2}{n}\right),\qquad\frac{\left(n-1\right)S_n^2}{\sigma^2}\sim\chi^2_{n-1},\qquad\frac{\sqrt{n}\left(\overline{X}_n-\mu\right)}{S_n}\sim t_{n-1}$$

The standard tests for normal populations follow from these sampling distributions, each with its test statistic and sampling distribution under $$H_0:$$
- the **$$z$$-test** for $$H_0:\mu=\mu_0$$ with known variance uses $$Z=\frac{\sqrt{n}\left(\overline{X}_n-\mu_0\right)}{\sigma}\sim\mathrm{N}\left(0,1\right);$$
- the **one-sample $$t$$-test** for $$H_0:\mu=\mu_0$$ with unknown variance uses $$T=\frac{\sqrt{n}\left(\overline{X}_n-\mu_0\right)}{S_n}\sim t_{n-1};$$
- the **two-sample $$t$$-test** for $$H_0:\mu_1=\mu_2$$ from independent samples of sizes $$n_1$$ and $$n_2$$ with a common variance uses the **pooled variance** $$S_p^2=\frac{\left(n_1-1\right)S_1^2+\left(n_2-1\right)S_2^2}{n_1+n_2-2}$$ and $$T=\frac{\overline{X}_1-\overline{X}_2}{S_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}\sim t_{n_1+n_2-2};$$
- **Welch's $$t$$-test** is the two-sample $$t$$-test without the common variance assumption, which uses an approximate $$t$$ distribution;
- the **paired $$t$$-test** applies the one-sample $$t$$-test to the differences of paired observations;
- the **chi-squared test for a variance** for $$H_0:\sigma^2=\sigma_0^2$$ uses $$\frac{\left(n-1\right)S_n^2}{\sigma_0^2}\sim\chi^2_{n-1};$$
- the **$$F$$-test for equality of variances** for $$H_0:\sigma_1^2=\sigma_2^2$$ uses $$F=\frac{S_1^2}{S_2^2}\sim F_{n_1-1,n_2-1}.$$

By the central limit theorem the $$z$$- and $$t$$-tests for means remain approximately valid for large samples from non-normal populations, whereas the tests for variances are sensitive to non-normality.

Let $$n$$ observations fall into $$k$$ categories with observed counts $$O_1,\ldots,O_k,$$ and $$E_i=n\,p_i$$ be the counts expected under a hypothesised distribution $$\underline{p}$$ that may depend on $$q$$ parameters estimated from the data. **Pearson's chi-squared test statistic** is the sum of the squared differences between observed and expected counts divided by the expected counts.

$$X^2:=\sum_{i=1}^k\frac{\left(O_i-E_i\right)^2}{E_i}$$

**Pearson's chi-squared test** is the hypothesis test that rejects $$H_0$$ for large values of $$X^2.$$ Under $$H_0,$$ $$X^2\xrightarrow{d}\chi^2_{k-1-q}.$$ Pearson's chi-squared test has the following properties:
- as a **goodness-of-fit test** it assesses whether the data follow the hypothesised distribution;
- applied to an $$r\times c$$ table of counts with expected counts computed from the row and column totals, it gives the **chi-squared test of independence** with $$\left(r-1\right)\left(c-1\right)$$ degrees of freedom;
- it is an approximation to the likelihood ratio test for multinomial counts.

A **non-parametric test** is a hypothesis test that makes no parametric assumption about the population. The **Kolmogorov–Smirnov test** of $$H_0:F=F_0$$ is the non-parametric test that uses the statistic $$\sup_x\left\lvert\hat{F}_n\left(x\right)-F_0\left(x\right)\right\rvert,$$ whose null distribution does not depend on $$F_0.$$ The **Wilcoxon tests** are non-parametric tests that replace observations by their ranks.

Hypothesis tests and confidence intervals are **dual**: the set of values $$\theta_0$$ for which $$H_0:\theta=\theta_0$$ is not rejected at size $$\alpha$$ is a $$100\left(1-\alpha\right)\%$$ confidence interval for $$\theta,$$ and conversely $$H_0:\theta=\theta_0$$ is rejected at size $$\alpha$$ if and only if $$\theta_0$$ lies outside a $$100\left(1-\alpha\right)\%$$ confidence interval. For example, the one-sample $$t$$-test does not reject $$\mu_0$$ if and only if $$\mu_0\in\overline{X}_n\pm t_{n-1,1-\frac{\alpha}{2}}\frac{S_n}{\sqrt{n}}.$$

Let $$H_{0,1},\ldots,H_{0,m}$$ be $$m>1$$ null hypotheses with $$p$$-values $$p_1,\ldots,p_m,$$ of which an unknown $$m_0$$ are true. **Multiple testing** is the simultaneous testing of the $$m$$ hypotheses. Multiple testing has the following properties:
- if each hypothesis is tested at size $$\alpha$$ then the expected number of true null hypotheses rejected is $$m_0\alpha;$$
- for independent tests the probability of at least one false rejection is $$1-\left(1-\alpha\right)^{m_0},$$ which approaches one as $$m_0$$ grows.

Let $$H_{0,1},\ldots,H_{0,m}$$ be a family of null hypotheses. The **family-wise error rate** (FWER) is the probability of making at least one type I error across the family of tests.

$$\mathrm{FWER}:=\mathbb{P}\left(\mathrm{at}\,\,\mathrm{least}\,\,\mathrm{one}\,\,\mathrm{true}\,\,H_{0,i}\,\,\mathrm{is}\,\,\mathrm{rejected}\right)$$

A multiple testing procedure **controls the FWER** at level $$\alpha$$ if and only if $$\mathrm{FWER}\leq\alpha$$ for every configuration of true and false null hypotheses.

Let $$H_{0,1},\ldots,H_{0,m}$$ be a family of null hypotheses with $$p$$-values $$p_1,\ldots,p_m$$ and $$\alpha\in\left(0,1\right).$$ The **Bonferroni correction** is the procedure that rejects $$H_{0,i}$$ if and only if $$p_i\leq\frac{\alpha}{m}.$$ The Bonferroni correction has the following properties:
- it controls the FWER at level $$\alpha$$ under any dependence between the tests, since the probability of a union of events is at most the sum of their probabilities, $$\mathrm{FWER}\leq\sum_{i:\,H_{0,i}\,\mathrm{true}}\mathbb{P}\left(p_i\leq\tfrac{\alpha}{m}\right)\leq\frac{m_0\alpha}{m}\leq\alpha;$$
- it is conservative and loses power as $$m$$ grows.

Let $$H_{0,1},\ldots,H_{0,m}$$ be a family of null hypotheses with ordered $$p$$-values $$p_{(1)}\leq\ldots\leq p_{(m)}$$ and $$\alpha\in\left(0,1\right).$$ **Holm's procedure** is the procedure that rejects the hypotheses corresponding to $$p_{(1)},\ldots,p_{(k-1)},$$ where $$k$$ is the smallest index with

$$p_{(k)}>\frac{\alpha}{m-k+1},$$

so that each successive $$p$$-value is compared with a less stringent threshold. Holm's procedure controls the FWER at level $$\alpha$$ under any dependence and rejects every hypothesis that the Bonferroni correction rejects, so it is uniformly more powerful.

Let $$H_{0,1},\ldots,H_{0,m}$$ be a family of null hypotheses tested by some procedure, $$R$$ be the number of rejected hypotheses and $$V$$ be the number of rejected hypotheses that are true null hypotheses. The rejected true null hypotheses are the **false discoveries**. The **false discovery proportion** is the fraction of rejections that are false discoveries, $$\frac{V}{\max\{R,1\}}.$$ The **false discovery rate** (FDR) is the expectation of the false discovery proportion.

$$\mathrm{FDR}:=\mathbb{E}\left[\frac{V}{\max\{R,1\}}\right]$$

A multiple testing procedure **controls the FDR** at level $$\alpha$$ if and only if $$\mathrm{FDR}\leq\alpha$$ for every configuration of true and false null hypotheses. FDR control has the following properties:
- it allows false rejections as long as they are on average a small fraction of all rejections, which is less strict than FWER control when $$m$$ is large;
- when all null hypotheses are true the FDR equals the FWER, so FDR control is weaker than FWER control.

Let $$H_{0,1},\ldots,H_{0,m}$$ be a family of null hypotheses with ordered $$p$$-values $$p_{(1)}\leq\ldots\leq p_{(m)}$$ and $$\alpha\in\left(0,1\right).$$ The **Benjamini–Hochberg procedure** is the procedure that finds the largest $$k$$ with

$$p_{(k)}\leq\frac{k}{m}\alpha$$

and rejects the hypotheses corresponding to $$p_{(1)},\ldots,p_{(k)},$$ rejecting none if no such $$k$$ exists. If the $$p$$-values of the true null hypotheses are independent, or positively dependent in a specific sense, then the Benjamini–Hochberg procedure controls the FDR at level $$\frac{m_0}{m}\alpha\leq\alpha.$$

The **Benjamini–Yekutieli procedure** is the Benjamini–Hochberg procedure with $$\alpha$$ replaced by $$\frac{\alpha}{\sum_{i=1}^m\frac{1}{i}},$$ which controls the FDR under arbitrary dependence.

Multiple testing corrections only account for the tests that are actually performed, so selecting which hypotheses to test or to report after seeing the data invalidates the stated error rates.
