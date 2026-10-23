---
layout: post
category: "real-analysis"
title:  "Derivatives"
tags: ["real", "analysis", "derivative"]
description: "A function's rate of change"
---

Let $$X \subseteq \mathbb{R}$$ be a subset of real numbers, $$x_0 \in X$$ be a limit point of $$X$$ and $$f: X \rightarrow \mathbb{R}$$ be a function that maps elements of $$X$$ to real numbers. The function $$f$$ is **differentiable** at $$x_0$$ if the limit of $$ \frac{f(x)-f(x_0)}{x-x_0}$$ as $$x \rightarrow x_0$$ converges to a real number $$ \frac{df(x_0)}{dx}$$ which is the **derivative** at $$x_0.$$

$$ \frac{df(x_0)}{dx} := \lim_{x \rightarrow x_0} \frac{f(x)-f(x_0)}{x-x_0}$$

If $$f$$ is differentiable $$ \forall \, x_0 \in X$$ then $$f$$ is differentiable on $$X.$$ If the limit does not exist then $$ \frac{df(x_0)}{dx}$$ is undefined and $$f$$ is not differentiable at $$x_0.$$

Let $$X \subseteq \mathbb{R}$$ be a subset of real numbers and $$f: X \rightarrow \mathbb{R}$$ be differentiable on $$X.$$ The **derivative** of the function $$f$$ is the function that maps each $$x \in X$$ to the derivative of $$f$$ at $$x.$$ Renaming the point $$x_0$$ to $$x$$ and writing the nearby point as $$x+h,$$ where the step size $$h \rightarrow 0,$$ gives the equivalent form

$$ \frac{df(x)}{dx} := \lim_{h \rightarrow 0} \frac{f(x+h)-f(x)}{h}.$$

The derivative is also written $$f'(x)$$ or $$\frac{d}{dx}f(x).$$

If $$f$$ is differentiable at $$x_0$$ then $$f$$ is continuous at $$x_0,$$ so a function that is differentiable on $$X$$ is continuous on $$X.$$ The converse is false: $$f(x)=\lvert x\rvert$$ is continuous at $$0$$ but not differentiable there, since $$\frac{\lvert x\rvert}{x}$$ is $$1$$ for $$x>0$$ and $$-1$$ for $$x<0$$ and so has no limit as $$x\rightarrow 0.$$

If the derivative $$f'$$ is itself differentiable at $$x$$ then its derivative is the **second derivative** $$f''(x)=\frac{d^2f(x)}{dx^2}.$$ Recursively, the **$$k$$-th derivative** $$f^{(k)}(x)=\frac{d^kf(x)}{dx^k}$$ is the derivative of $$f^{(k-1)}$$ with $$f^{(0)}=f.$$ The function $$f$$ is **$$k$$ times continuously differentiable** on $$X,$$ written $$f\in C^k(X),$$ if $$f^{(k)}$$ exists and is continuous on $$X.$$ $$C^0(X)$$ is the set of continuous functions on $$X$$ and $$f$$ is **smooth**, written $$f\in C^{\infty}(X),$$ if $$f^{(k)}$$ exists for every $$k\in\mathbb{N}.$$

Let $$f,g:X\rightarrow\mathbb{R}$$ be differentiable at $$x\in X$$ and $$c\in\mathbb{R}.$$ Derivatives of constants, sums and scalar multiples satisfy

$$\frac{d}{dx}c=0,\qquad\frac{d}{dx}\left(f(x)\pm g(x)\right)=f'(x)\pm g'(x),\qquad\frac{d}{dx}\left(c\,f(x)\right)=c\,f'(x).$$

The **power rule** states that for $$n\in\mathbb{N}$$

$$\frac{d}{dx}x^n=n\,x^{n-1}$$

and the same formula holds for any real exponent $$n$$ when $$x>0.$$ Together with the rules for sums and scalar multiples, every polynomial is differentiable on $$\mathbb{R}.$$

The **product rule** states that $$f\,g$$ is differentiable at $$x$$ with

$$\frac{d}{dx}\left(f(x)\,g(x)\right)=f'(x)\,g(x)+f(x)\,g'(x).$$

The **quotient rule** states that if $$g(x)\neq 0$$ then $$\frac{f}{g}$$ is differentiable at $$x$$ with

$$\frac{d}{dx}\left(\frac{f(x)}{g(x)}\right)=\frac{f'(x)\,g(x)-f(x)\,g'(x)}{g(x)^2}.$$

Let $$Y\subseteq\mathbb{R},$$ $$f:X\rightarrow Y$$ be differentiable at $$x$$ and $$g:Y\rightarrow\mathbb{R}$$ be differentiable at $$f(x).$$ The **chain rule** states that the composition $$g\circ f$$ is differentiable at $$x$$ with

$$\frac{d}{dx}g\left(f(x)\right)=g'\left(f(x)\right)\,f'(x).$$

Let $$X$$ be an interval and $$f:X\rightarrow\mathbb{R}$$ be continuous and strictly monotonic. If $$f$$ is differentiable at $$x$$ with $$f'(x)\neq 0$$ then the inverse function $$f^{-1}$$ is differentiable at $$y=f(x)$$ with

$$\frac{d}{dy}f^{-1}(y)=\frac{1}{f'\left(f^{-1}(y)\right)}.$$

Let $$f:X\rightarrow\mathbb{R}$$ be a function and $$x_0\in X.$$ $$x_0$$ is a **local maximum** of $$f$$ if and only if there exists $$\delta>0$$ such that $$f(x)\leq f(x_0)$$ for all $$x\in X$$ with $$\lvert x-x_0\rvert<\delta,$$ and a **local minimum** if and only if $$f(x)\geq f(x_0)$$ for all such $$x.$$ $$x_0$$ is a **global maximum** if and only if $$f(x)\leq f(x_0)\,\,\forall\,x\in X$$ and a **global minimum** if and only if $$f(x)\geq f(x_0)\,\,\forall\,x\in X.$$ A local or global maximum or minimum is an **extremum**.

A point $$x_0\in X$$ is an **interior point** of $$X$$ if some open interval $$(x_0-\delta,x_0+\delta)$$ with $$\delta>0$$ is contained in $$X.$$ **Fermat's theorem** states that if $$x_0$$ is an interior point of $$X,$$ a local extremum of $$f$$ and $$f$$ is differentiable at $$x_0$$ then

$$f'(x_0)=0.$$

A point at which $$f'(x_0)=0$$ is a **stationary point** of $$f.$$ A stationary point need not be an extremum: $$f(x)=x^3$$ has $$f'(0)=0$$ but $$0$$ is neither a local maximum nor a local minimum. An extremum that is not an interior point, or at which $$f$$ is not differentiable, need not be a stationary point either, so extrema of $$f$$ on $$[a,b]$$ are found among the stationary points, the endpoints and the points of non-differentiability.

**Rolle's theorem** states that if $$f:[a,b]\rightarrow\mathbb{R}$$ is continuous on $$[a,b],$$ differentiable on $$(a,b)$$ and $$f(a)=f(b)$$ then there exists $$c\in(a,b)$$ with $$f'(c)=0.$$

The **mean value theorem** states that if $$f:[a,b]\rightarrow\mathbb{R}$$ is continuous on $$[a,b]$$ and differentiable on $$(a,b)$$ then there exists $$c\in(a,b)$$ at which the derivative equals the average rate of change of $$f$$ over $$[a,b].$$

$$f'(c)=\frac{f(b)-f(a)}{b-a}$$

Let $$X$$ be an interval and $$f:X\rightarrow\mathbb{R}$$ be differentiable. The mean value theorem gives the following consequences:
- if $$f'(x)=0\,\,\forall\,x\in X$$ then $$f$$ is constant on $$X;$$
- if $$f'(x)\geq 0\,\,\forall\,x\in X$$ then $$f$$ is monotonically increasing, and if $$f'(x)>0\,\,\forall\,x\in X$$ then $$f$$ is strictly increasing;
- if $$\lvert f'(x)\rvert\leq L\,\,\forall\,x\in X$$ then $$f$$ is Lipschitz continuous on $$X$$ with Lipschitz constant $$L.$$

The **second derivative test** states that if $$x_0$$ is an interior stationary point of $$f$$ and $$f''(x_0)$$ exists then $$x_0$$ is a local minimum if $$f''(x_0)>0$$ and a local maximum if $$f''(x_0)<0.$$ If $$f''(x_0)=0$$ the test is inconclusive.

Let $$f,g$$ be differentiable on an open interval containing $$x_0,$$ except possibly at $$x_0$$ itself, with $$g'(x)\neq 0$$ on that interval away from $$x_0.$$ **L'Hôpital's rule** states that if either $$\lim_{x\rightarrow x_0}f(x)=\lim_{x\rightarrow x_0}g(x)=0,$$ or $$\lvert g(x)\rvert$$ grows without bound as $$x\rightarrow x_0$$ (for every $$M>0$$ there exists $$\delta>0$$ with $$\lvert g(x)\rvert>M$$ whenever $$0<\lvert x-x_0\rvert<\delta$$), and the limit of the ratio of derivatives exists, then

$$\lim_{x\rightarrow x_0}\frac{f(x)}{g(x)}=\lim_{x\rightarrow x_0}\frac{f'(x)}{g'(x)}.$$

Let $$X$$ be an interval, $$x_0\in X$$ and $$f:X\rightarrow\mathbb{R}$$ be $$k$$ times differentiable at $$x_0.$$ The **Taylor polynomial** of degree $$k$$ of $$f$$ at $$x_0$$ is

$$T_k(x):=\sum_{i=0}^{k}\frac{f^{(i)}(x_0)}{i!}\left(x-x_0\right)^i$$

and the **remainder** is $$R_k(x):=f(x)-T_k(x).$$ **Taylor's theorem** states that the remainder vanishes faster than $$\left(x-x_0\right)^k$$ as $$x\rightarrow x_0,$$

$$\lim_{x\rightarrow x_0}\frac{R_k(x)}{\left(x-x_0\right)^k}=0,$$

and that if $$f$$ is $$k+1$$ times differentiable on the open interval between $$x_0$$ and $$x$$ then there exists $$c$$ strictly between $$x_0$$ and $$x$$ with

$$R_k(x)=\frac{f^{(k+1)}(c)}{(k+1)!}\left(x-x_0\right)^{k+1}.$$

The case $$k=0$$ is the mean value theorem. If $$f$$ is smooth at $$x_0$$ then its **Taylor series** at $$x_0$$ is the power series

$$\sum_{i=0}^{\infty}\frac{f^{(i)}(x_0)}{i!}\left(x-x_0\right)^i$$

and $$f$$ is **analytic** at $$x_0$$ if the Taylor series converges to $$f(x)$$ for all $$x$$ in some open interval containing $$x_0.$$ A smooth function need not be analytic, since its Taylor series may converge to a different function. The exponential series is the Taylor series of $$\exp$$ at $$0,$$ since $$\exp'=\exp$$ and $$\exp(0)=1.$$

Let $$\underline{x}=\left(x_1,\ldots,x_n\right)\in\mathbb{R}^n$$ and $$\underline{y}\in\mathbb{R}^n.$$ The **Euclidean distance** between $$\underline{x}$$ and $$\underline{y}$$ is

$$\lVert\underline{x}-\underline{y}\rVert:=\sqrt{\sum_{i=1}^{n}\left(x_i-y_i\right)^2}$$

and $$\lVert\underline{x}\rVert$$ is the Euclidean distance from $$\underline{x}$$ to $$\underline{0}.$$ A set $$X\subseteq\mathbb{R}^n$$ is **open** if every point $$\underline{x}\in X$$ has a $$\delta>0$$ such that every $$\underline{y}$$ with $$\lVert\underline{y}-\underline{x}\rVert<\delta$$ lies in $$X.$$ Let $$X\subseteq\mathbb{R}^n$$ be open, $$f:X\rightarrow\mathbb{R}$$ be a function and $$\underline{e}_i\in\mathbb{R}^n$$ be the **standard basis vector** with $$1$$ in position $$i$$ and $$0$$ elsewhere. The **partial derivative** of $$f$$ with respect to $$x_i$$ at $$\underline{x}$$ is the derivative of $$f$$ along the $$i$$-th coordinate with the other coordinates held fixed.

$$\frac{\partial f(\underline{x})}{\partial x_i}:=\lim_{h\rightarrow 0}\frac{f\left(\underline{x}+h\,\underline{e}_i\right)-f(\underline{x})}{h}$$

The **gradient** of $$f$$ at $$\underline{x}$$ is the vector of partial derivatives.

$$\nabla f(\underline{x}):=\left(\frac{\partial f(\underline{x})}{\partial x_1},\ldots,\frac{\partial f(\underline{x})}{\partial x_n}\right)$$

Let $$\underline{v}\in\mathbb{R}^n.$$ The **directional derivative** of $$f$$ at $$\underline{x}$$ in the direction $$\underline{v}$$ is

$$D_{\underline{v}}f(\underline{x}):=\lim_{h\rightarrow 0}\frac{f\left(\underline{x}+h\,\underline{v}\right)-f(\underline{x})}{h}$$

so that the partial derivatives are the directional derivatives along the standard basis vectors.

The function $$f$$ is **differentiable** at $$\underline{x}$$ if and only if there exists $$\underline{g}\in\mathbb{R}^n$$ such that the error of the linear approximation $$f(\underline{x})+\sum_{i=1}^{n}g_i h_i$$ vanishes faster than $$\lVert\underline{h}\rVert.$$

$$\lim_{\underline{h}\rightarrow\underline{0}}\frac{\left\lvert f\left(\underline{x}+\underline{h}\right)-f(\underline{x})-\sum_{i=1}^{n}g_i h_i\right\rvert}{\lVert\underline{h}\rVert}=0$$

If $$f$$ is differentiable at $$\underline{x}$$ then $$\underline{g}=\nabla f(\underline{x}),$$ $$f$$ is continuous at $$\underline{x}$$ and every directional derivative exists with

$$D_{\underline{v}}f(\underline{x})=\sum_{i=1}^{n}\frac{\partial f(\underline{x})}{\partial x_i}v_i.$$

The existence of all partial derivatives at $$\underline{x}$$ does not imply differentiability or even continuity at $$\underline{x}.$$ However, if all partial derivatives exist and are continuous on $$X,$$ in which case $$f$$ is **continuously differentiable** and written $$f\in C^1(X),$$ then $$f$$ is differentiable on $$X.$$

Let $$\underline{f}=\left(f_1,\ldots,f_m\right):X\rightarrow\mathbb{R}^m$$ be a function whose components $$f_j:X\rightarrow\mathbb{R}$$ are differentiable at $$\underline{x}.$$ The **Jacobian matrix** of $$\underline{f}$$ at $$\underline{x}$$ is the $$m\times n$$ rectangular array $$J_{\underline{f}}(\underline{x})$$ whose entry in row $$j$$ and column $$i$$ is the partial derivative of the $$j$$-th component with respect to the $$i$$-th coordinate, so that its rows are the gradients of the components.

$$\left[J_{\underline{f}}(\underline{x})\right]_{ji}:=\frac{\partial f_j(\underline{x})}{\partial x_i}$$

Let $$Y\subseteq\mathbb{R}^m$$ be open, $$\underline{f}:X\rightarrow Y$$ be differentiable at $$\underline{x}$$ and $$\underline{g}=\left(g_1,\ldots,g_p\right):Y\rightarrow\mathbb{R}^p$$ be differentiable at $$\underline{f}(\underline{x}).$$ The **multivariate chain rule** states that $$\underline{g}\circ\underline{f}$$ is differentiable at $$\underline{x}$$ with

$$\frac{\partial\left(g_k\circ\underline{f}\right)(\underline{x})}{\partial x_i}=\sum_{j=1}^{m}\frac{\partial g_k\left(\underline{f}(\underline{x})\right)}{\partial y_j}\frac{\partial f_j(\underline{x})}{\partial x_i}.$$

Entry by entry this is the product of the Jacobian matrices, $$J_{\underline{g}\circ\underline{f}}(\underline{x})=J_{\underline{g}}\left(\underline{f}(\underline{x})\right)J_{\underline{f}}(\underline{x}).$$ In particular, if $$\underline{x}(t)=\left(x_1(t),\ldots,x_n(t)\right)$$ is differentiable at $$t$$ and $$f$$ is differentiable at $$\underline{x}(t)$$ then

$$\frac{d}{dt}f\left(\underline{x}(t)\right)=\sum_{i=1}^{n}\frac{\partial f\left(\underline{x}(t)\right)}{\partial x_i}\frac{dx_i(t)}{dt}.$$

The **second-order partial derivative** of $$f$$ with respect to $$x_i$$ and then $$x_j$$ is the partial derivative of $$\frac{\partial f}{\partial x_i}$$ with respect to $$x_j.$$

$$\frac{\partial^2 f(\underline{x})}{\partial x_j\partial x_i}:=\frac{\partial}{\partial x_j}\left(\frac{\partial f(\underline{x})}{\partial x_i}\right)$$

The **Hessian matrix** of $$f$$ at $$\underline{x}$$ is the $$n\times n$$ rectangular array $$H_f(\underline{x})$$ of second-order partial derivatives.

$$\left[H_f(\underline{x})\right]_{ij}:=\frac{\partial^2 f(\underline{x})}{\partial x_i\partial x_j}$$

$$f$$ is **twice continuously differentiable**, written $$f\in C^2(X),$$ if all second-order partial derivatives exist and are continuous on $$X.$$ **Schwarz's theorem** states that if $$f\in C^2(X)$$ then the order of differentiation does not matter, so the Hessian matrix is symmetric.

$$\frac{\partial^2 f(\underline{x})}{\partial x_i\partial x_j}=\frac{\partial^2 f(\underline{x})}{\partial x_j\partial x_i}\,\,\forall\,i,j$$

The **second-order Taylor expansion** of $$f\in C^2(X)$$ at $$\underline{x}$$ states that for $$\underline{h}\in\mathbb{R}^n$$ with $$\underline{x}+\underline{h}\in X$$

$$f\left(\underline{x}+\underline{h}\right)=f(\underline{x})+\sum_{i=1}^{n}\frac{\partial f(\underline{x})}{\partial x_i}h_i+\frac{1}{2}\sum_{i=1}^{n}\sum_{j=1}^{n}\frac{\partial^2 f(\underline{x})}{\partial x_i\partial x_j}h_i h_j+R_2(\underline{h})$$

where the remainder satisfies $$\lim_{\underline{h}\rightarrow\underline{0}}\frac{R_2(\underline{h})}{\lVert\underline{h}\rVert^2}=0.$$ The first-order terms are the directional derivative $$D_{\underline{h}}f(\underline{x})$$ and the second-order terms weight the entries of the Hessian matrix by products of the components of $$\underline{h}.$$
