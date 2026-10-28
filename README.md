# Ash Bellett

This is my personal website that contains notes on mathematics, science and engineering for data scientists.

## Prerequisites

Install [Ruby](https://www.ruby-lang.org/) 4.0, e.g. `brew install ruby` on macOS. CI builds with the exact version in `.ruby-version` (currently 4.0.9); any 4.0.x release works locally.

## Installation

Install Ruby gems:

```bash
bundle install
```

Run website locally at http://localhost:4000:

```bash
bundle exec jekyll serve
```

## Maths

Formulae are written in TeX between `$$` delimiters and converted to HTML when the site is built, using [KaTeX](https://katex.org/) via the `kramdown-math-katex` gem. No JavaScript is served; `assets/css/katex.css` and `assets/css/fonts` hold the KaTeX stylesheet and fonts.

KaTeX itself is vendored (currently 0.19.0) because the `katex` gem bundles an older release. To upgrade, download the release's npm tarball and check its `integrity` hash from `https://registry.npmjs.org/katex`, then copy `dist/katex.min.js` to `_vendor/katex/`, `dist/fonts/*.woff2` to `assets/css/fonts/`, and `dist/katex.min.css` to `assets/css/katex.css` with the `woff` and `ttf` `src` entries removed. All three must come from the same release. Dependabot does not track this. A formula KaTeX cannot parse is rendered as-is in red with the error in its `title` attribute, so check the build output for `katex-error`.

## Fonts

Body text uses [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4), self-hosted so no page requests a third-party host. `assets/fonts/source-serif-4-latin.woff2` is the variable (weight 400–700, optical size 8–60) latin subset served by Google Fonts. To update it, request `https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400..700` with a modern browser user agent, download the woff2 under `/* latin */`, and copy its `unicode-range` into the `@font-face` rule in `_sass/main.scss`.

## Colour scheme

Pages follow the visitor's system light/dark setting through CSS. The header toggle, `assets/js/theme.js`, overrides it: the choice is saved in `localStorage` and applied in `<head>` before the page is drawn, and switching back to the system's scheme clears it. The script is the site's only JavaScript, allowed by `script-src 'self'` in the Content Security Policy; without it the toggle is hidden and the system setting applies.

## Topics

Topics are in dependency order. Topics and sections marked *(planned)* have no notes yet.

### Mathematics

#### 1. Sets
- **Logic**
  - Logical statements
  - Necessity, sufficiency and equivalence
  - Negation, conjunction and disjunction
- **Sets**
  - Membership, equality and subsets
  - Predicates, quantifiers and specification
  - Set operations
- **Functions**
  - Functions, images and composition
  - Injection, surjection and bijection
  - Cardinality, finiteness and countability

#### 2. Linear algebra
- **Vector spaces**
  - Fields and vector spaces
  - Subspaces
  - Linear independence
  - Span, basis and dimension
- **Inner product spaces**
  - Bilinear and sesquilinear forms
  - Positive definiteness
  - Inner products, length and angles
  - Orthogonality and Gram-Schmidt orthonormalisation
- **Linear transformations**
  - Linear transformations
  - Image, kernel and rank
  - Rank-nullity theorem
- **Matrices**
  - Matrix algebra
  - Column space, row space and rank
  - Special matrices
  - Invertibility
- **Determinants**
  - Minors and co-factors
  - Determinants and Laplace expansion
- **Eigenvalues and eigenvectors**
  - Eigenvalues, eigenvectors and the characteristic polynomial
  - Algebraic and geometric multiplicity
  - Diagonalisation
- **Matrix decompositions**
  - Spectral decomposition
  - LU and PLU decompositions
  - Rank factorisation
  - Cholesky decomposition
  - QR decomposition
  - Singular value decomposition and low-rank approximation
  - Moore–Penrose pseudo-inverse
- **Matrix applications** *(planned)*
  - Systems of linear equations
  - Projection

#### 3. Real analysis
- **Real numbers**
  - Absolute value, distance and closeness
  - Bounds, suprema and infima
- **Sequences**
  - Boundedness and monotonicity
  - Convergence and Cauchy sequences
- **Limits**
  - Limits of sequences and limit laws
  - Limits of functions
- **Series**
  - Finite series and series over finite sets
  - Infinite series and convergence tests
  - Power series
  - Sequences of functions and uniform convergence
  - Exponential and trigonometric series and Euler's formula
- **Continuity**
  - Continuity and intervals
  - Intermediate and extreme value theorems
  - Uniform and Lipschitz continuity
  - Monotonic and inverse functions
- **Derivatives**
  - Differentiability and higher-order derivatives
  - Derivative rules
  - Extrema and mean value theorems
  - L'Hôpital's rule and Taylor expansion
  - Multivariate differential calculus
- **Integrals**
  - Partitions and the Riemann integral
  - Fundamental theorems of calculus
  - Integration by parts and substitution
  - Improper integrals
  - Multiple integrals and change of variables
- **Vector calculus**
  - Scalar and vector fields
  - Cross product
  - Gradient, divergence and curl
  - Laplacian and vector identities
  - Line integrals and conservative fields
  - Surface integrals and flux
  - Green's, Stokes' and divergence theorems

#### 4. Topology
- **Metric spaces**
  - Metrics, norms and examples
  - Equivalent metrics and norms
  - Open balls, open and closed sets
  - Interior, closure and boundary
  - Convergence and continuity
- **Completeness**
  - Cauchy sequences and complete spaces
  - Contraction mapping theorem
- **Topological spaces**
  - Topologies and neighbourhoods
  - Bases and the metric topology
  - Subspaces and product topologies
  - Continuity and homeomorphisms
  - Hausdorff spaces
- **Compactness**
  - Open covers and compactness
  - Sequential compactness and the Heine–Borel theorem
  - Continuous functions on compact sets
- **Connectedness**
  - Connected and path-connected sets
  - Continuous images of connected sets
- **Function spaces**
  - Continuous functions and the supremum norm
  - Completeness of continuous functions
  - Weierstrass and Stone–Weierstrass approximation theorems

#### 5. Differential equations
- **Ordinary differential equations**
  - Order, linearity and solutions
  - Initial and boundary value problems
  - Existence and uniqueness
- **First-order equations**
  - Separable equations
  - Linear equations and integrating factors
  - Exact equations
  - Autonomous equations and stability
- **Second-order linear equations**
  - Homogeneous equations with constant coefficients
  - Characteristic equation
  - Superposition and the Wronskian
  - Undetermined coefficients
  - Variation of parameters
- **Systems of equations**
  - Linear systems
  - Matrix exponential
  - Phase portraits
  - Equilibria and linearisation
- **Series and transform methods**
  - Power series solutions
  - Laplace transform
  - Fourier series
- **Partial differential equations**
  - Classification of PDEs
  - Heat equation
  - Wave equation
  - Laplace's equation
  - Separation of variables
- **Boundary value problems**
  - Sturm–Liouville theory
  - Eigenfunction expansions
  - Green's functions

#### 6. Optimisation
- **Convexity**
  - Convex sets and functions
  - Jensen's inequality
  - First- and second-order conditions
  - Operations preserving convexity
  - Implications for minimisation
- **Unconstrained optimisation**
  - Optimisation problems and existence of minimisers
  - Optimality conditions
  - Line search methods and convergence rates
  - Gradient descent
  - Newton and quasi-Newton methods
- **Constrained optimisation**
  - Constraints and active sets
  - Substitution method
  - Lagrangian multipliers
  - Karush-Kuhn-Tucker conditions
  - Lagrangian duality
  - Linear programming and the simplex method
  - Interior point methods

#### 7. Probability
- **Events**
  - Experiments, outcomes and events
  - Algebras and sigma algebras
- **Probability spaces**
  - Probability measures and axioms
  - Marginal and joint probability
  - Independent events
- **Conditional probability**
  - Conditional probability and independence
  - Total probability and Bayes' theorem
- **Random variables**
  - Pushforward probability measure and support
  - Discrete and continuous random variables
  - Random vectors, joint, marginal and conditional distributions
  - Transformations of random variables
- **Moments**
  - Expectation
  - Variance and higher-order moments
  - Covariance and correlation
  - Conditional expectation and variance
  - Probability, moment and characteristic generating functions
- **Distributions**
  - Parametric families and quantiles
  - Discrete uniform, Bernoulli, binomial, geometric and Poisson
  - Continuous uniform, exponential, gamma, beta and chi-squared
  - Normal, Student's t and F
  - Multinomial, multivariate normal and Dirichlet
  - Exponential families
- **Concentration bounds**
  - Markov, Chebyshev and Chernoff bounds
  - Jensen, Cauchy-Schwarz, Hölder and Lyapunov inequalities
  - Sub-Gaussian variables, Hoeffding and Bernstein inequalities
  - McDiarmid, Efron-Stein and Gaussian concentration
- **Probabilistic convergence**
  - Pointwise and uniform convergence
  - Almost sure convergence, convergence in probability and in mean
  - Convergence in distribution
  - Continuous mapping and Slutsky's theorems
  - Delta method
- **Limit theorems**
  - Laws of large numbers and the Glivenko-Cantelli theorem
  - Central limit theorems
  - Order statistics
- **Stochastic processes**
  - Processes, sample paths and finite-dimensional distributions
  - Mean, autocovariance and stationarity
  - Gaussian processes
  - Wiener process and martingales
  - Poisson and renewal processes
  - Markov chains

#### 8. Frequentist statistics
- **Samples**
  - Random samples and populations
  - Statistics and sampling distributions
  - Summary statistics
- **Sufficiency**
  - Sufficient statistics
  - Factorisation theorem
- **Estimators**
  - Bias, standard error and mean squared error
  - Consistency and asymptotic normality
  - Score, Fisher information and the Cramér-Rao lower bound
  - Efficiency
- **Point estimation**
  - Method of moments
  - Likelihood function
  - Maximum likelihood estimation and its asymptotics
- **Interval estimation**
  - Interval estimators
  - Coverage probability
  - Confidence intervals
- **Hypothesis testing**
  - Null and alternative hypotheses
  - Test statistics, critical regions and p-values
  - Type I and II errors and power
  - Neyman-Pearson lemma and uniformly most powerful tests
  - Likelihood ratio, Wald and score tests
  - Standard parametric and non-parametric tests
  - Multiple testing

#### 9. Bayesian statistics
- **Bayesian inference**
  - Prior, likelihood, posterior and marginal likelihood
  - Sequential updating and nuisance parameters
  - Posterior predictive distribution
  - Exchangeability and de Finetti's representation theorem
- **Priors**
  - Conjugate priors and exponential families
  - Improper, flat, Jeffreys and reference priors
  - Weakly informative priors
  - Hierarchical priors and shrinkage
  - Posterior consistency and the Bernstein-von Mises theorem
- **Posterior summaries**
  - Loss, utility and Bayes actions
  - Posterior mean, median and mode
  - Credible intervals and highest posterior density regions
  - Posterior probabilities of hypotheses
  - Prediction
- **Computational inference**
  - Intractable integrals
  - Monte Carlo, rejection and importance sampling
  - Markov chain Monte Carlo
  - Metropolis-Hastings, Gibbs and Hamiltonian Monte Carlo
  - Laplace approximation and variational inference
- **Model choice**
  - Model uncertainty and Bayes factors
  - Bayesian model averaging
  - Model selection and information criteria
  - Posterior predictive checking

#### 10. Causal inference
- **Potential outcomes**
  - Units, treatments and potential outcomes
  - Individual and average causal effects
  - Fundamental problem of causal inference
  - Stable unit treatment value assumption
  - Causal estimands
  - Association, selection bias and confounding
- **Causal graphs**
  - Directed acyclic graphs, paths and colliders
  - Structural causal models
  - Markov factorisation and d-separation
  - Interventions and the do-operator
  - Counterfactuals
  - Confounders, mediators, colliders and selection
- **Identification**
  - Randomised experiments
  - Ignorability, positivity and consistency
  - Adjustment formula and the backdoor criterion
  - Front-door criterion
  - Do-calculus
  - Bounds and partial identification
- **Estimation under ignorability**
  - Outcome regression
  - Propensity scores and balancing
  - Stratification and matching
  - Inverse probability weighting
  - Doubly robust estimation
  - Influence functions, efficiency and double machine learning
- **Instrumental variables**
  - Instrument assumptions
  - Wald estimator and two-stage least squares
  - Compliance types and the local average treatment effect
  - Weak instruments and overidentification
- **Quasi-experimental designs**
  - Fixed effects and panel data
  - Difference-in-differences and parallel trends
  - Event studies and staggered adoption
  - Regression discontinuity designs
  - Synthetic control
- **Mediation and time-varying treatments**
  - Direct and indirect effects
  - Sequential ignorability and the mediation formula
  - Time-varying confounding
  - G-formula
  - Marginal structural models and inverse probability of treatment weighting
  - Structural nested models and g-estimation
- **Heterogeneous effects and sensitivity**
  - Conditional average treatment effects and effect modification
  - Meta-learners, the R-learner and causal forests
  - Policy learning
  - Unmeasured confounding and sensitivity models
  - Cornfield conditions and E-values
- **Causal discovery**
  - Markov equivalence
  - Faithfulness and causal sufficiency
  - Constraint-based algorithms
  - Score-based algorithms
  - Functional causal models
  - Latent variables and interventional data

### Machine learning *(planned)*

#### 11. Supervised learning
- **Linear models**
  - Linear regression
  - Logistic regression
  - Multinomial regression
  - Generalised linear models
- **Non-linear models**
  - Polynomial regression
  - Spline regression
  - Fourier and wavelet bases
  - Generalised additive models
- **Kernel models**
  - Maximal margin classifier
  - Support vector classifier
  - Support vector machines
- **Tree models and ensembling**
  - Classification and regression trees
  - Bagging
  - Random forests
  - Boosting
  - Voting and stacked ensembles
- **Resampling methods**
  - Cross-validation
  - Bootstrap methods
- **Feature selection**
  - Exhaustive search
  - Subset selection
  - Recursive feature elimination
  - Regularisation penalties
- **Model selection**
  - Adjusted R-squared
  - Mallows's Cp
  - AIC and BIC
  - Loss functions
  - Validation metrics

#### 12. Unsupervised learning
- **Dimension reduction**
  - Principal components analysis
  - Canonical correlation analysis
  - Factor analysis
  - Independent components analysis
- **Manifold learning**
  - Multi-dimensional scaling
  - Isometric feature mapping
  - Local linear embeddings
  - Stochastic neighbourhood embeddings and t-SNE
  - Spectral embeddings
- **Density estimation**
  - Gaussian mixture models
  - Expectation-maximisation algorithm
  - Histogram estimators
  - Kernel density estimators
- **Clustering**
  - K-means clustering
  - K-medoids and PAM
  - Affinity propagation
  - Spectral clustering
  - Agglomerative hierarchical clustering
  - DBSCAN
  - Biclustering
  - Cluster evaluation
- **Novelty and outlier detection**
  - One-class support vector machine
  - Elliptic envelope
  - Isolation forest
  - Local outlier factor
- **Association rule learning**
  - Apriori algorithm
  - ECLAT algorithm
  - FP-growth algorithm
- **Covariance estimation**
  - Empirical covariance
  - Shrinkage methods
  - Minimum covariance determinant

#### 13. Bayesian models
- **Linear models**
  - Conjugate prior
  - Reference prior
  - General basis functions
  - Generalised linear models
- **Non-parametric models**
  - Random probability measures
  - Dirichlet processes
  - Pólya Trees
  - Partition models
  - Gaussian processes
  - Spline models
  - Partition regression models
- **Mixture models**
  - Finite mixture models
  - Dirichlet process mixture models
  - Mixed-membership models
  - Latent factor models
- **Graphical models**
  - Belief networks
  - Markov networks
  - Factor graphs

#### 14. Deep learning
- **Activation functions**
  - Linear
  - Sigmoid
  - RELU
  - ELU
  - Softmax
- **Loss functions**
  - Mean squared error
  - Cross-entropy loss
  - Cosine similarity
  - KL divergence
- **Optimisers**
  - Stochastic gradient descent
  - Momentum
  - Nesterov momentum
  - Adagrad
  - RMSprop
  - Adam
- **Initialisers**
  - Glorot/Xavier initialisation
  - Orthogonal initialisation
- **Regularisation**
  - Weight sharing
  - Dropout
  - Weight regularisation
  - Early stopping/patience
- **Normalisation**
  - Batch normalisation
  - Layer normalisation
- **Feed-forward networks**
  - Neuron unit
  - Multi-layer perceptron
- **Convolutional networks**
  - Convolution operation
  - Pooling
  - Padding and stride
  - Transposed convolutions
- **Recurrent networks**
  - RNN cell
  - Stacked and bi-directional RNNs
  - Back-propagation through time
  - Long short term memory cell
- **Transformer networks**
  - Multi-head attention
  - Positional encoding
  - Transformer architecture
- **Normalising flows**
  - Bijectors
  - Autoregressive flows
  - Masked autoregressive flow (MAF)
  - Masked autoencoder for distribution estimation (MADE)
  - Inverse autoregressive flow (IAF)
  - Non-linear independent components estimation (NICE)
  - RealNVP model
  - Glow model
- **Auto-encoder networks**
  - Bottleneck architecture
  - Evidence lower bound (ELBO)
  - Reparameterisation trick
  - Variational auto-encoder
- **Bayesian networks**
  - Aleatoric and epistemic uncertainty
  - Bayes by backpropagation
  - MC dropout
  - Uncertainty estimation

#### 15. Agent systems
- **Multi-armed bandits**
  - Optimal arm identification
  - Regret minimisation
  - Optimistic approaches
  - Thompson sampling
  - Contextual bandits
  - Bayesian optimisation
- **Reinforcement learning**
  - Markov decision processes
  - Dynamic programming
  - Q-learning
  - Importance sampling
  - Linear function approximation
  - Deep Q-learning
  - Policy gradient methods

#### 16. Structured data analysis
- Data types
- Data summaries
- Data transformations
- Data quality
- Data visualisation
- Temporal data
- Spatial data
- Multivariate data

#### 17. Unstructured data analysis
- **Networks**
  - Vertices and edges
  - Adjacency and direction
  - Neighbourhoods
  - Paths and cycles
  - Cliques and separation
  - Graph data structures
  - Graph embeddings
  - Search algorithms
  - Pathfinding algorithms
  - Minimum weight spanning tree
  - Community detection
  - Graph classification
- **Images**
  - Image histograms
  - Affine transformations
  - Denoising
  - Edge detection
  - Feature detection
  - Image segmentation
  - Pose estimation
  - Motion estimation
  - Stereo correspondence
  - Object recognition
- **Language**
  - Word classification
  - Word embeddings
  - Text clustering
  - Sequence modelling

#### 18. Big data methods
- **Optimisation**
  - Gradient descent methods
  - Distributed, stochastic gradient descent
  - Stochastic variational inference
- **Markov chain Monte Carlo**
  - Divide and conquer methods
  - Subsampling methods
- **Streaming**
  - Parameter estimation
  - Forgetting factors
  - Change point detection
