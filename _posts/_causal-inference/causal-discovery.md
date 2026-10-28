---
title:  "Causal Discovery"
description: "Learning causal graphs from data"
---

**Causal discovery** or **structure learning** is the problem of inferring the causal graph of a structural causal model from the observational distribution of its variables, possibly together with interventional data. The methods below assume the causal Markov condition, under which the observational distribution is Markov with respect to the causal graph.

Let $$G$$ be a DAG on $$V.$$ The **skeleton** of $$G$$ is the undirected graph obtained by removing the directions of its edges. A **v-structure** or **unshielded collider** in $$G$$ is a triple $$X\rightarrow Z\leftarrow Y$$ in which $$X$$ and $$Y$$ are not adjacent.

Let $$G$$ and $$G'$$ be DAGs on $$V.$$ The DAGs $$G$$ and $$G'$$ are **Markov equivalent** if and only if they have the same d-separations, so that they imply the same conditional independences. The **Markov equivalence class** of $$G$$ is the set of DAGs Markov equivalent to $$G.$$

Let $$G$$ and $$G'$$ be DAGs on $$V.$$ The **Verma–Pearl theorem** states that $$G$$ and $$G'$$ are Markov equivalent if and only if they have the same skeleton and the same v-structures.

Let $$\mathcal{E}$$ be a Markov equivalence class. The **completed partially directed acyclic graph** (CPDAG) of $$\mathcal{E}$$ is the graph with the common skeleton in which an edge is directed if and only if it has the same direction in every DAG in $$\mathcal{E},$$ and undirected otherwise. The CPDAG is the most that can be learned about the causal graph from conditional independences alone.

Let $$G$$ be a DAG and $$\mathbb{P}$$ be a distribution on $$V.$$ The distribution $$\mathbb{P}$$ is **faithful** to $$G$$ if and only if every conditional independence in $$\mathbb{P}$$ is implied by d-separation in $$G.$$

$$X\perp\!\!\!\perp Y\mid Z\Rightarrow X\perp_G Y\mid Z$$

Faithfulness is the converse of the global Markov property. Faithfulness fails when causal effects along different paths cancel exactly, which has probability zero under a continuous prior on the parameters of a linear model but can hold approximately in finite samples.

Let $$V$$ be the set of observed variables. **Causal sufficiency** is the assumption that every common cause of two or more variables in $$V$$ is itself in $$V,$$ so that there are no latent confounders.

Let $$\mathbb{P}$$ be Markov and faithful to a DAG $$G$$ on $$V$$ and causal sufficiency hold. Then $$X$$ and $$Y$$ are adjacent in $$G$$ if and only if there is no set $$Z\subseteq V\setminus\{X,Y\}$$ such that $$X\perp\!\!\!\perp Y\mid Z.$$ The Markov equivalence class of $$G$$ is identified from the conditional independences of $$\mathbb{P}.$$

A **constraint-based algorithm** is a causal discovery algorithm that learns the CPDAG from conditional independence tests. The **PC algorithm** is the constraint-based algorithm with the following steps:
- start with the complete undirected graph on $$V;$$
- for $$k=0,1,2,\ldots,$$ for each pair of adjacent vertices $$X,Y,$$ test $$X\perp\!\!\!\perp Y\mid Z$$ for each subset $$Z$$ of size $$k$$ of the neighbours of $$X$$ or of $$Y;$$ if any test does not reject, remove the edge and record $$Z$$ as the **separating set** of $$X$$ and $$Y;$$
- for each triple $$X-Z-Y$$ with $$X$$ and $$Y$$ not adjacent, orient it as the v-structure $$X\rightarrow Z\leftarrow Y$$ if and only if $$Z$$ is not in the separating set of $$X$$ and $$Y;$$
- apply the **Meek orientation rules** repeatedly: orient $$Y-Z$$ as $$Y\rightarrow Z$$ whenever $$X\rightarrow Y-Z$$ with $$X$$ and $$Z$$ not adjacent, and orient any edge whose other direction would create a directed cycle or a new v-structure.

The PC algorithm has the following properties:
- under the causal Markov condition, faithfulness, causal sufficiency and a consistent conditional independence test, it recovers the CPDAG of the causal graph in the large sample limit;
- the number of tests is polynomial in the number of variables when the true graph is sparse, since the conditioning sets are restricted to neighbours;
- in finite samples the output depends on the order in which tests are performed and on the significance level, and errors in early tests propagate.

Let $$G$$ be a DAG and $$\mathbb{P}$$ be a distribution with sample $$D.$$ A **score** is a function $$S\left(G,D\right)$$ that measures how well the distributions Markov to $$G$$ fit the data, with a penalty for the number of parameters. The score is **decomposable** if and only if it is a sum of terms, one for each variable, that depend only on the variable and its parents. The Bayesian information criterion, $$\mathrm{BIC}\left(G,D\right)=\ell\left(\hat{\theta}_G\mid D\right)-\frac{d_G}{2}\log_e n,$$ is a decomposable score that is equal for Markov equivalent DAGs when the parametric model is the same for each, and it is consistent, in that the true equivalence class has the highest score in the large sample limit.

A **score-based algorithm** is a causal discovery algorithm that searches the space of graphs for the one with the highest score. **Greedy equivalence search** (GES) is the score-based algorithm that searches over CPDAGs in two phases:
- a **forward phase** that starts from the empty graph and repeatedly adds the single edge that most increases the score until no addition increases it;
- a **backward phase** that repeatedly removes the single edge that most increases the score until no removal increases it.

Greedy equivalence search has the following properties:
- with a consistent decomposable score it recovers the CPDAG of the causal graph in the large sample limit under the causal Markov condition, faithfulness and causal sufficiency;
- exhaustive search over DAGs is infeasible, since the number of DAGs grows faster than exponentially in the number of variables, and greedy search can stop at a local optimum in finite samples.

Let $$V=\left\{V_1,\ldots,V_p\right\}$$ be endogenous variables with exogenous variables $$U_1,\ldots,U_p.$$ A **functional causal model** is a structural causal model in which the structural equations are restricted to a class of functions, so that the direction of an edge can be identified from the joint distribution of the two variables it joins. The following are standard functional causal models:
- the **linear non-Gaussian acyclic model** (LiNGAM) has linear structural equations $$V_j=\sum_{k\in\mathrm{pa}_j}b_{jk}V_k+U_j$$ with mutually independent non-Gaussian exogenous variables;
- the **additive noise model** has structural equations $$V_j=f_j\left(\mathrm{pa}_j\right)+U_j$$ with non-linear $$f_j$$ and exogenous variables independent of the parents.

Functional causal models have the following properties:
- under LiNGAM the full DAG is identified, not only its equivalence class, since by the Darmois–Skitovich theorem the regression residual is independent of the regressor in the causal direction and dependent in the reverse direction when the exogenous variable is non-Gaussian;
- under the additive noise model with non-linear $$f_j$$ the full DAG is identified for all but a measure-zero set of parameters, by the same residual independence argument;
- in the linear Gaussian case the two directions are indistinguishable, which is why conditional independence alone identifies only the Markov equivalence class.

Let $$V$$ be the observed variables and causal sufficiency fail. A **latent variable** is an unobserved common cause of two or more observed variables. Latent confounders induce dependences between observed variables that no DAG on $$V$$ alone explains, since marginalising a DAG over a latent variable does not in general give a DAG on the remaining variables.

Let $$V$$ be the observed variables of a DAG with latent variables. A **maximal ancestral graph** (MAG) on $$V$$ is a graph with directed edges $$X\rightarrow Y,$$ meaning $$X$$ is an ancestor of $$Y,$$ and bidirected edges $$X\leftrightarrow Y,$$ meaning $$X$$ and $$Y$$ share a latent common cause, that encodes the conditional independences among the observed variables implied by the DAG. The **partial ancestral graph** (PAG) of a Markov equivalence class of MAGs is the graph that marks each edge end as an arrowhead, a tail or a circle according to whether it is the same in every MAG of the class.

The **fast causal inference algorithm** (FCI) is the constraint-based algorithm that learns the PAG from conditional independence tests without assuming causal sufficiency. The FCI algorithm has the following properties:
- it extends the PC algorithm with additional edge removals, using separating sets that may include non-neighbours, and additional orientation rules for bidirected edges;
- under the causal Markov condition and faithfulness it recovers the PAG of the causal graph in the large sample limit;
- a directed edge in the PAG is an ancestral relation that holds in every graph consistent with the data, so the PAG identifies which causal effects are identifiable despite latent confounding.

Let $$G$$ be a DAG and interventions on some variables be available. **Interventional data** are samples from the interventional distributions $$p\left(v\mid\mathrm{do}\left(x\right)\right).$$ An intervention on $$X$$ removes the edges into $$X$$ and leaves those out of $$X,$$ so comparing the observational and interventional distributions orients the edges adjacent to $$X$$ and can distinguish DAGs within a Markov equivalence class. With interventions on every variable the full DAG is identified, and the number of interventions needed to identify a DAG is at most logarithmic in the number of variables when the interventions can target several variables at once.
