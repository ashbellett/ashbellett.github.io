---
layout: post
category: "real-analysis"
title:  "Derivatives"
tags: ["real", "analysis", "derivative"]
description: "A function's rate of change"
---

Let $$X \subseteq \mathbb{R},$$ $$f: X \rightarrow \mathbb{R}$$ be a function and $$x_0 \in X$$ be a limit point of $$X.$$ The function $$f$$ is **differentiable** at $$x_0$$ if and only if the limit of the difference quotient $$ \frac{f(x)-f(x_0)}{x-x_0}$$ as $$x \rightarrow x_0$$ exists.

Let $$X \subseteq \mathbb{R},$$ $$f: X \rightarrow \mathbb{R}$$ be a function and $$x_0 \in X$$ be a limit point of $$X$$ at which $$f$$ is differentiable. The **derivative** of $$f$$ at $$x_0,$$ written $$\frac{df(x_0)}{dx}$$ or $$f'(x_0),$$ is the limit of the difference quotient.

$$ \frac{df(x_0)}{dx} := \lim_{x \rightarrow x_0} \frac{f(x)-f(x_0)}{x-x_0}$$

If the limit does not exist then $$ \frac{df(x_0)}{dx}$$ is undefined and $$f$$ is not differentiable at $$x_0.$$

Let $$X \subseteq \mathbb{R}$$ and $$f: X \rightarrow \mathbb{R}$$ be a function. The function $$f$$ is **differentiable** on $$X$$ if and only if $$f$$ is differentiable at every $$x_0 \in X.$$

Let $$X \subseteq \mathbb{R}$$ and $$f: X \rightarrow \mathbb{R}$$ be differentiable on $$X.$$ The **derivative** of $$f$$ is the function $$f': X \rightarrow \mathbb{R}$$ that maps each $$x \in X$$ to the derivative of $$f$$ at $$x.$$ Writing the nearby point as $$x+h$$ with step size $$h \rightarrow 0$$ gives the equivalent form

$$ \frac{df(x)}{dx} = \lim_{h \rightarrow 0} \frac{f(x+h)-f(x)}{h}.$$

The derivative is also written $$\frac{d}{dx}f(x).$$

Let $$X \subseteq \mathbb{R},$$ $$f: X \rightarrow \mathbb{R}$$ be a function and $$x_0 \in X.$$ If $$f$$ is differentiable at $$x_0$$ then $$f$$ is continuous at $$x_0,$$ so a function that is differentiable on $$X$$ is continuous on $$X.$$ The converse is false: $$f(x)=\lvert x\rvert$$ is continuous at $$0$$ but not differentiable there, since $$\frac{\lvert x\rvert}{x}$$ is $$1$$ for $$x>0$$ and $$-1$$ for $$x<0$$ and so has no limit as $$x\rightarrow 0.$$

Let $$X \subseteq \mathbb{R}$$ and $$f: X \rightarrow \mathbb{R}$$ be differentiable on $$X.$$ The **second derivative** of $$f$$ at $$x,$$ written $$f''(x)=\frac{d^2f(x)}{dx^2},$$ is the derivative of $$f'$$ at $$x$$ wherever $$f'$$ is differentiable. The **$$k$$-th derivative** of $$f,$$ written $$f^{(k)}(x)=\frac{d^kf(x)}{dx^k},$$ is defined recursively as the derivative of $$f^{(k-1)}$$ with $$f^{(0)}=f.$$

Let $$X \subseteq \mathbb{R},$$ $$f: X \rightarrow \mathbb{R}$$ be a function and $$k\in\mathbb{N}.$$ The function $$f$$ is **$$k$$ times continuously differentiable** on $$X,$$ written $$f\in C^k(X),$$ if and only if $$f^{(k)}$$ exists and is continuous on $$X.$$ The set $$C^0(X)$$ is the set of continuous functions on $$X.$$ The function $$f$$ is **smooth** on $$X,$$ written $$f\in C^{\infty}(X),$$ if and only if $$f^{(k)}$$ exists for every $$k\in\mathbb{N}.$$

Let $$X \subseteq \mathbb{R},$$ $$f,g:X\rightarrow\mathbb{R}$$ be differentiable at $$x\in X$$ and $$c\in\mathbb{R}.$$ Derivatives of constants, sums and scalar multiples satisfy the following rules.

$$\frac{d}{dx}c=0,\qquad\frac{d}{dx}\left(f(x)\pm g(x)\right)=f'(x)\pm g'(x),\qquad\frac{d}{dx}\left(c\,f(x)\right)=c\,f'(x)$$

Let $$n\in\mathbb{N}.$$ The **power rule** states that the derivative of $$x^n$$ is $$n$$ times $$x^{n-1}.$$

$$\frac{d}{dx}x^n=n\,x^{n-1}$$

The same formula holds for any real exponent $$n$$ when $$x>0.$$ Together with the rules for sums and scalar multiples, every polynomial is differentiable on $$\mathbb{R}.$$

Let $$X \subseteq \mathbb{R}$$ and $$f,g:X\rightarrow\mathbb{R}$$ be differentiable at $$x\in X.$$ The **product rule** states that $$f\,g$$ is differentiable at $$x$$ with

$$\frac{d}{dx}\left(f(x)\,g(x)\right)=f'(x)\,g(x)+f(x)\,g'(x).$$

Let $$X \subseteq \mathbb{R}$$ and $$f,g:X\rightarrow\mathbb{R}$$ be differentiable at $$x\in X$$ with $$g(x)\neq 0.$$ The **quotient rule** states that $$\frac{f}{g}$$ is differentiable at $$x$$ with

$$\frac{d}{dx}\left(\frac{f(x)}{g(x)}\right)=\frac{f'(x)\,g(x)-f(x)\,g'(x)}{g(x)^2}.$$

Let $$X,Y\subseteq\mathbb{R},$$ $$f:X\rightarrow Y$$ be differentiable at $$x \in X$$ and $$g:Y\rightarrow\mathbb{R}$$ be differentiable at $$f(x).$$ The **chain rule** states that the composition $$g\circ f$$ is differentiable at $$x$$ with

$$\frac{d}{dx}g\left(f(x)\right)=g'\left(f(x)\right)\,f'(x).$$

Let $$X$$ be an interval and $$f:X\rightarrow\mathbb{R}$$ be continuous and strictly monotonic. The **inverse function rule** states that if $$f$$ is differentiable at $$x$$ with $$f'(x)\neq 0$$ then the inverse function $$f^{-1}$$ is differentiable at $$y=f(x)$$ with

$$\frac{d}{dy}f^{-1}(y)=\frac{1}{f'\left(f^{-1}(y)\right)}.$$

Let $$X \subseteq \mathbb{R},$$ $$f:X\rightarrow\mathbb{R}$$ be a function and $$x_0\in X.$$ The point $$x_0$$ is a **local maximum** of $$f$$ if and only if there exists $$\delta>0$$ such that $$f(x)\leq f(x_0)$$ for all $$x\in X$$ with $$\lvert x-x_0\rvert<\delta.$$ The point $$x_0$$ is a **local minimum** of $$f$$ if and only if there exists $$\delta>0$$ such that $$f(x)\geq f(x_0)$$ for all $$x\in X$$ with $$\lvert x-x_0\rvert<\delta.$$

Let $$X \subseteq \mathbb{R},$$ $$f:X\rightarrow\mathbb{R}$$ be a function and $$x_0\in X.$$ The point $$x_0$$ is a **global maximum** of $$f$$ if and only if $$f(x)\leq f(x_0)$$ for all $$x\in X.$$ The point $$x_0$$ is a **global minimum** of $$f$$ if and only if $$f(x)\geq f(x_0)$$ for all $$x\in X.$$

Let $$X \subseteq \mathbb{R},$$ $$f:X\rightarrow\mathbb{R}$$ be a function and $$x_0\in X.$$ The point $$x_0$$ is an **extremum** of $$f$$ if and only if it is a local or global maximum or minimum of $$f.$$

Let $$X \subseteq \mathbb{R}$$ and $$x_0\in X.$$ The point $$x_0$$ is an **interior point** of $$X$$ if and only if some open interval $$(x_0-\delta,x_0+\delta)$$ with $$\delta>0$$ is contained in $$X.$$

Let $$X \subseteq \mathbb{R},$$ $$f:X\rightarrow\mathbb{R}$$ be a function and $$x_0\in X$$ be an interior point of $$X$$ at which $$f$$ is differentiable. **Fermat's theorem** states that if $$x_0$$ is a local extremum of $$f$$ then the derivative of $$f$$ at $$x_0$$ is zero.

$$f'(x_0)=0$$

Let $$X \subseteq \mathbb{R},$$ $$f:X\rightarrow\mathbb{R}$$ be a function and $$x_0\in X.$$ The point $$x_0$$ is a **stationary point** of $$f$$ if and only if $$f$$ is differentiable at $$x_0$$ with $$f'(x_0)=0.$$ Stationary points have the following properties:
- a stationary point need not be an extremum: $$f(x)=x^3$$ has $$f'(0)=0$$ but $$0$$ is neither a local maximum nor a local minimum;
- an extremum that is not an interior point, or at which $$f$$ is not differentiable, need not be a stationary point;
- the extrema of $$f$$ on $$[a,b]$$ are found among the stationary points, the endpoints and the points of non-differentiability.

Let $$f:[a,b]\rightarrow\mathbb{R}$$ be continuous on $$[a,b]$$ and differentiable on $$(a,b)$$ with $$f(a)=f(b).$$ **Rolle's theorem** states that the derivative of $$f$$ is zero at some point strictly between $$a$$ and $$b.$$

$$\exists\,c\in(a,b) : f'(c)=0$$

Let $$f:[a,b]\rightarrow\mathbb{R}$$ be continuous on $$[a,b]$$ and differentiable on $$(a,b).$$ The **mean value theorem** states that the derivative of $$f$$ equals the average rate of change of $$f$$ over $$[a,b]$$ at some point strictly between $$a$$ and $$b.$$

$$\exists\,c\in(a,b) : f'(c)=\frac{f(b)-f(a)}{b-a}$$

Let $$X$$ be an interval and $$f:X\rightarrow\mathbb{R}$$ be differentiable. The mean value theorem has the following consequences:
- if $$f'(x)=0$$ for all $$x\in X$$ then $$f$$ is constant on $$X;$$
- if $$f'(x)\geq 0$$ for all $$x\in X$$ then $$f$$ is monotonically increasing, and if $$f'(x)>0$$ for all $$x\in X$$ then $$f$$ is strictly increasing;
- if $$\lvert f'(x)\rvert\leq L$$ for all $$x\in X$$ then $$f$$ is Lipschitz continuous on $$X$$ with Lipschitz constant $$L.$$

Let $$X \subseteq \mathbb{R},$$ $$f:X\rightarrow\mathbb{R}$$ be a function and $$x_0$$ be an interior stationary point of $$f$$ at which $$f''(x_0)$$ exists. The **second derivative test** states that $$x_0$$ is a local minimum if $$f''(x_0)>0$$ and a local maximum if $$f''(x_0)<0.$$ If $$f''(x_0)=0$$ the test is inconclusive.

Let $$f,g$$ be differentiable on an open interval containing $$x_0,$$ except possibly at $$x_0$$ itself, with $$g'(x)\neq 0$$ on that interval away from $$x_0.$$ **L'Hôpital's rule** states that if the limit of the ratio of derivatives exists, and either $$\lim_{x\rightarrow x_0}f(x)=\lim_{x\rightarrow x_0}g(x)=0$$ or $$\lvert g(x)\rvert$$ grows without bound as $$x\rightarrow x_0,$$ then the limit of the ratio of the functions equals the limit of the ratio of their derivatives.

$$\lim_{x\rightarrow x_0}\frac{f(x)}{g(x)}=\lim_{x\rightarrow x_0}\frac{f'(x)}{g'(x)}$$

Here $$\lvert g(x)\rvert$$ grows without bound as $$x\rightarrow x_0$$ means that for every $$M>0$$ there exists $$\delta>0$$ with $$\lvert g(x)\rvert>M$$ whenever $$0<\lvert x-x_0\rvert<\delta.$$

Let $$X$$ be an interval, $$x_0\in X$$ and $$f:X\rightarrow\mathbb{R}$$ be $$k$$ times differentiable at $$x_0.$$ The **Taylor polynomial** of degree $$k$$ of $$f$$ at $$x_0$$ is the polynomial whose derivatives at $$x_0$$ up to order $$k$$ agree with those of $$f.$$

$$T_k(x):=\sum_{i=0}^{k}\frac{f^{(i)}(x_0)}{i!}\left(x-x_0\right)^i$$

Let $$X$$ be an interval, $$x_0\in X$$ and $$f:X\rightarrow\mathbb{R}$$ be $$k$$ times differentiable at $$x_0$$ with Taylor polynomial $$T_k.$$ The **remainder** of the Taylor polynomial is the difference $$R_k(x):=f(x)-T_k(x).$$

Let $$X$$ be an interval, $$x_0\in X$$ and $$f:X\rightarrow\mathbb{R}$$ be $$k$$ times differentiable at $$x_0.$$ **Taylor's theorem** states that the remainder vanishes faster than $$\left(x-x_0\right)^k$$ as $$x\rightarrow x_0,$$

$$\lim_{x\rightarrow x_0}\frac{R_k(x)}{\left(x-x_0\right)^k}=0,$$

and that if $$f$$ is $$k+1$$ times differentiable on the open interval between $$x_0$$ and $$x$$ then there exists $$c$$ strictly between $$x_0$$ and $$x$$ with

$$R_k(x)=\frac{f^{(k+1)}(c)}{(k+1)!}\left(x-x_0\right)^{k+1}.$$

The case $$k=0$$ is the mean value theorem.

Let $$X$$ be an interval, $$x_0\in X$$ and $$f:X\rightarrow\mathbb{R}$$ be smooth at $$x_0.$$ The **Taylor series** of $$f$$ at $$x_0$$ is the power series centred at $$x_0$$ whose coefficients are the derivatives of $$f$$ at $$x_0$$ divided by factorials.

$$\sum_{i=0}^{\infty}\frac{f^{(i)}(x_0)}{i!}\left(x-x_0\right)^i$$

Let $$X$$ be an interval, $$x_0\in X$$ and $$f:X\rightarrow\mathbb{R}$$ be smooth at $$x_0.$$ The function $$f$$ is **analytic** at $$x_0$$ if and only if its Taylor series at $$x_0$$ converges to $$f(x)$$ for all $$x$$ in some open interval containing $$x_0.$$ A smooth function need not be analytic, since its Taylor series may converge to a different function.

Let $$\sum_{n=0}^{\infty} a_n\left(x-c\right)^n$$ be a power series with radius of convergence $$R>0.$$ The **term-by-term derivative** of the power series is the power series obtained by differentiating each term.

$$\sum_{n=1}^{\infty} n\,a_n\left(x-c\right)^{n-1}$$

A power series is differentiable on $$\left(c-R,c+R\right),$$ its derivative is its term-by-term derivative and the term-by-term derivative has the same radius of convergence.

$$\frac{d}{dx}\sum_{n=0}^{\infty} a_n\left(x-c\right)^n=\sum_{n=1}^{\infty} n\,a_n\left(x-c\right)^{n-1}$$

Repeating this, a power series is smooth on its open interval of convergence, its coefficients are $$a_k=\frac{f^{(k)}(c)}{k!},$$ so the series is its own Taylor series at $$c,$$ and it is analytic there. Differentiating the exponential, cosine and sine series term by term gives

$$\exp'=\exp,\qquad\cos'=-\sin,\qquad\sin'=\cos.$$

By the inverse function rule, the derivative of the natural logarithm is $$\frac{d}{dx}\log_e x=\frac{1}{x}$$ for $$x>0.$$ Since $$\exp'=\exp>0$$ on $$\mathbb{R},$$ the exponential function is strictly increasing, and the real power $$a^x=\exp\left(x\log_e a\right)$$ has derivative $$a^x\log_e a$$ for $$a>0.$$

Let $$\underline{x}=\left(x_1,\ldots,x_n\right)\in\mathbb{R}^n$$ and $$\underline{y}\in\mathbb{R}^n.$$ The **Euclidean distance** between $$\underline{x}$$ and $$\underline{y}$$ is the square root of the sum of the squared differences of their coordinates.

$$\lVert\underline{x}-\underline{y}\rVert:=\sqrt{\sum_{i=1}^{n}\left(x_i-y_i\right)^2}$$

The **Euclidean length** of $$\underline{x},$$ written $$\lVert\underline{x}\rVert,$$ is the Euclidean distance from $$\underline{x}$$ to $$\underline{0}.$$

Let $$X\subseteq\mathbb{R}^n.$$ The set $$X$$ is **open** if and only if every point $$\underline{x}\in X$$ has a $$\delta>0$$ such that every $$\underline{y}$$ with $$\lVert\underline{y}-\underline{x}\rVert<\delta$$ lies in $$X.$$

Let $$X\subseteq\mathbb{R}^n$$ be open, $$f:X\rightarrow\mathbb{R}$$ be a function, $$\underline{x}\in X,$$ $$i\in\{1,\ldots,n\}$$ and $$\underline{e}_i\in\mathbb{R}^n$$ be the $$i$$-th standard basis vector. The **partial derivative** of $$f$$ with respect to $$x_i$$ at $$\underline{x}$$ is the derivative of $$f$$ along the $$i$$-th coordinate with the other coordinates held fixed.

$$\frac{\partial f(\underline{x})}{\partial x_i}:=\lim_{h\rightarrow 0}\frac{f\left(\underline{x}+h\,\underline{e}_i\right)-f(\underline{x})}{h}$$

Let $$X\subseteq\mathbb{R}^n$$ be open, $$f:X\rightarrow\mathbb{R}$$ be a function and $$\underline{x}\in X$$ be a point at which all partial derivatives of $$f$$ exist. The **gradient** of $$f$$ at $$\underline{x}$$ is the vector of partial derivatives.

$$\nabla f(\underline{x}):=\left(\frac{\partial f(\underline{x})}{\partial x_1},\ldots,\frac{\partial f(\underline{x})}{\partial x_n}\right)$$

Let $$X\subseteq\mathbb{R}^n$$ be open, $$f:X\rightarrow\mathbb{R}$$ be a function and $$\underline{x}_0\in X$$ be a point at which the gradient of $$f$$ exists. The point $$\underline{x}_0$$ is a **stationary point** of $$f$$ if and only if $$\nabla f(\underline{x}_0)=\underline{0}.$$ For $$n=1$$ this is the earlier definition of a stationary point.

Let $$X\subseteq\mathbb{R}^n$$ be open, $$f:X\rightarrow\mathbb{R}$$ be a function, $$\underline{x}\in X$$ and $$\underline{v}\in\mathbb{R}^n.$$ The **directional derivative** of $$f$$ at $$\underline{x}$$ in the direction $$\underline{v}$$ is the derivative of $$f$$ along the line through $$\underline{x}$$ in the direction $$\underline{v}.$$

$$D_{\underline{v}}f(\underline{x}):=\lim_{h\rightarrow 0}\frac{f\left(\underline{x}+h\,\underline{v}\right)-f(\underline{x})}{h}$$

The partial derivatives are the directional derivatives along the standard basis vectors.

Let $$X\subseteq\mathbb{R}^n$$ be open, $$f:X\rightarrow\mathbb{R}$$ be a function and $$\underline{x}\in X.$$ The function $$f$$ is **differentiable** at $$\underline{x}$$ if and only if there exists $$\underline{g}\in\mathbb{R}^n$$ such that the error of the linear approximation $$f(\underline{x})+\sum_{i=1}^{n}g_i h_i$$ vanishes faster than $$\lVert\underline{h}\rVert.$$

$$\lim_{\underline{h}\rightarrow\underline{0}}\frac{\left\lvert f\left(\underline{x}+\underline{h}\right)-f(\underline{x})-\sum_{i=1}^{n}g_i h_i\right\rvert}{\lVert\underline{h}\rVert}=0$$

Differentiability of a function of several variables has the following properties:
- if $$f$$ is differentiable at $$\underline{x}$$ then $$\underline{g}=\nabla f(\underline{x}),$$ $$f$$ is continuous at $$\underline{x}$$ and every directional derivative exists with $$D_{\underline{v}}f(\underline{x})=\sum_{i=1}^{n}\frac{\partial f(\underline{x})}{\partial x_i}v_i;$$
- the existence of all partial derivatives at $$\underline{x}$$ does not imply differentiability or even continuity at $$\underline{x}.$$

Let $$X\subseteq\mathbb{R}^n$$ be open and $$f:X\rightarrow\mathbb{R}$$ be a function. The function $$f$$ is **continuously differentiable** on $$X,$$ written $$f\in C^1(X),$$ if and only if all partial derivatives of $$f$$ exist and are continuous on $$X.$$ A continuously differentiable function is differentiable on $$X.$$

Let $$X\subseteq\mathbb{R}^n$$ be open and $$\underline{f}=\left(f_1,\ldots,f_m\right):X\rightarrow\mathbb{R}^m$$ be a function whose components $$f_j:X\rightarrow\mathbb{R}$$ are differentiable at $$\underline{x}\in X.$$ The **Jacobian matrix** of $$\underline{f}$$ at $$\underline{x}$$ is the $$m\times n$$ matrix $$J_{\underline{f}}(\underline{x})$$ whose entry in row $$j$$ and column $$i$$ is the partial derivative of the $$j$$-th component with respect to the $$i$$-th coordinate.

$$\left[J_{\underline{f}}(\underline{x})\right]_{ji}:=\frac{\partial f_j(\underline{x})}{\partial x_i}$$

The rows of the Jacobian matrix are the gradients of the components of $$\underline{f}.$$

Let $$X\subseteq\mathbb{R}^n$$ and $$Y\subseteq\mathbb{R}^m$$ be open, $$\underline{f}:X\rightarrow Y$$ be differentiable at $$\underline{x}\in X$$ and $$\underline{g}=\left(g_1,\ldots,g_p\right):Y\rightarrow\mathbb{R}^p$$ be differentiable at $$\underline{f}(\underline{x}).$$ The **multivariate chain rule** states that $$\underline{g}\circ\underline{f}$$ is differentiable at $$\underline{x}$$ with

$$\frac{\partial\left(g_k\circ\underline{f}\right)(\underline{x})}{\partial x_i}=\sum_{j=1}^{m}\frac{\partial g_k\left(\underline{f}(\underline{x})\right)}{\partial y_j}\frac{\partial f_j(\underline{x})}{\partial x_i}.$$

Entry by entry this is the product of the Jacobian matrices, $$J_{\underline{g}\circ\underline{f}}(\underline{x})=J_{\underline{g}}\left(\underline{f}(\underline{x})\right)J_{\underline{f}}(\underline{x}).$$ In particular, if $$\underline{x}(t)=\left(x_1(t),\ldots,x_n(t)\right)$$ is differentiable at $$t$$ and $$f$$ is differentiable at $$\underline{x}(t)$$ then

$$\frac{d}{dt}f\left(\underline{x}(t)\right)=\sum_{i=1}^{n}\frac{\partial f\left(\underline{x}(t)\right)}{\partial x_i}\frac{dx_i(t)}{dt}.$$

Let $$X\subseteq\mathbb{R}^n$$ be open, $$f:X\rightarrow\mathbb{R}$$ be a function and $$i,j\in\{1,\ldots,n\}.$$ The **second-order partial derivative** of $$f$$ with respect to $$x_i$$ and then $$x_j$$ is the partial derivative of $$\frac{\partial f}{\partial x_i}$$ with respect to $$x_j.$$

$$\frac{\partial^2 f(\underline{x})}{\partial x_j\partial x_i}:=\frac{\partial}{\partial x_j}\left(\frac{\partial f(\underline{x})}{\partial x_i}\right)$$

Let $$X\subseteq\mathbb{R}^n$$ be open, $$f:X\rightarrow\mathbb{R}$$ be a function and $$\underline{x}\in X$$ be a point at which all second-order partial derivatives of $$f$$ exist. The **Hessian matrix** of $$f$$ at $$\underline{x}$$ is the $$n\times n$$ matrix $$H_f(\underline{x})$$ of second-order partial derivatives.

$$\left[H_f(\underline{x})\right]_{ij}:=\frac{\partial^2 f(\underline{x})}{\partial x_i\partial x_j}$$

Let $$X\subseteq\mathbb{R}^n$$ be open and $$f:X\rightarrow\mathbb{R}$$ be a function. The function $$f$$ is **twice continuously differentiable** on $$X,$$ written $$f\in C^2(X),$$ if and only if all second-order partial derivatives of $$f$$ exist and are continuous on $$X.$$

Let $$X\subseteq\mathbb{R}^n$$ be open and $$f\in C^2(X).$$ **Schwarz's theorem** states that the order of differentiation does not matter, so the Hessian matrix is symmetric.

$$\frac{\partial^2 f(\underline{x})}{\partial x_i\partial x_j}=\frac{\partial^2 f(\underline{x})}{\partial x_j\partial x_i}\,\,\forall\,i,j$$

Let $$X\subseteq\mathbb{R}^n$$ be open, $$f\in C^2(X),$$ $$\underline{x}\in X$$ and $$\underline{h}\in\mathbb{R}^n$$ with $$\underline{x}+\underline{h}\in X.$$ The **second-order Taylor expansion** of $$f$$ at $$\underline{x}$$ states that

$$f\left(\underline{x}+\underline{h}\right)=f(\underline{x})+\sum_{i=1}^{n}\frac{\partial f(\underline{x})}{\partial x_i}h_i+\frac{1}{2}\sum_{i=1}^{n}\sum_{j=1}^{n}\frac{\partial^2 f(\underline{x})}{\partial x_i\partial x_j}h_i h_j+R_2(\underline{h})$$

where the remainder satisfies $$\lim_{\underline{h}\rightarrow\underline{0}}\frac{R_2(\underline{h})}{\lVert\underline{h}\rVert^2}=0.$$ The first-order terms are the directional derivative $$D_{\underline{h}}f(\underline{x})$$ and the second-order terms are the quadratic form $$\frac{1}{2}\underline{h}^\intercal H_f(\underline{x})\underline{h}$$ of the Hessian matrix.
