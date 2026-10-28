---
layout: post
category: "real-analysis"
title:  "Vector Calculus"
tags: ["real", "analysis", "vector calculus"]
description: "Calculus of fields, curves and surfaces"
---

Let $$U\subseteq\mathbb{R}^n$$ be open. A **scalar field** on $$U$$ is a function $$f:U\rightarrow\mathbb{R}.$$ A **vector field** on $$U$$ is a function $$\underline{F}=\left(F_1,\ldots,F_n\right):U\rightarrow\mathbb{R}^n$$ that assigns a vector to each point of $$U.$$ A vector field is $$C^k$$ if and only if each of its components is $$C^k.$$

Let $$\underline{x},\underline{y}\in\mathbb{R}^n.$$ The **dot product** of $$\underline{x}$$ and $$\underline{y}$$ is the sum of the products of their coordinates.

$$\underline{x}\cdot\underline{y}:=\sum_{i=1}^{n}x_i\,y_i=\underline{x}^\intercal\underline{y}$$

The dot product is the standard inner product on $$\mathbb{R}^n,$$ so that $$\lVert\underline{x}\rVert=\sqrt{\underline{x}\cdot\underline{x}}$$ is the Euclidean length of $$\underline{x}$$ and two vectors are orthogonal if and only if their dot product is zero. The directional derivative of a differentiable scalar field is $$D_{\underline{v}}f(\underline{x})=\nabla f(\underline{x})\cdot\underline{v}.$$

A **curve** in $$\mathbb{R}^n$$ is a function $$\underline{\gamma}=\left(\gamma_1,\ldots,\gamma_n\right):\left[a,b\right]\rightarrow\mathbb{R}^n$$ with continuous components. The **initial point** of $$\underline{\gamma}$$ is $$\underline{\gamma}(a)$$ and the **terminal point** of $$\underline{\gamma}$$ is $$\underline{\gamma}(b).$$

Let $$\underline{\gamma}:\left[a,b\right]\rightarrow\mathbb{R}^n$$ be a curve. The curve $$\underline{\gamma}$$ is **closed** if and only if $$\underline{\gamma}(a)=\underline{\gamma}(b).$$ The curve $$\underline{\gamma}$$ is **simple** if and only if it is injective on $$\left[a,b\right)$$ and on $$\left(a,b\right].$$

Let $$\underline{\gamma}:\left[a,b\right]\rightarrow\mathbb{R}^n$$ be a $$C^1$$ curve. The **velocity** of $$\underline{\gamma}$$ at $$t$$ is the vector of derivatives of its components, $$\underline{\gamma}'(t)=\left(\gamma_1'(t),\ldots,\gamma_n'(t)\right).$$ The **speed** of $$\underline{\gamma}$$ at $$t$$ is $$\lVert\underline{\gamma}'(t)\rVert.$$ Where the speed is non-zero, the **unit tangent vector** of $$\underline{\gamma}$$ at $$t$$ is the velocity divided by the speed.

$$\underline{T}(t):=\frac{\underline{\gamma}'(t)}{\lVert\underline{\gamma}'(t)\rVert}$$

Let $$\underline{\gamma}:\left[a,b\right]\rightarrow\mathbb{R}^n$$ be a $$C^1$$ curve. The curve $$\underline{\gamma}$$ is **regular** if and only if its speed is never zero.

Let $$\underline{\gamma}:\left[a,b\right]\rightarrow\mathbb{R}^n$$ be a curve. The curve $$\underline{\gamma}$$ is **piecewise $$C^1$$** if and only if $$\left[a,b\right]$$ is the union of finitely many intervals on each of which $$\underline{\gamma}$$ is $$C^1.$$

Let $$\underline{\gamma}:\left[a,b\right]\rightarrow\mathbb{R}^n$$ be a piecewise $$C^1$$ curve. The **arc length** of $$\underline{\gamma}$$ is the integral of its speed.

$$L\left(\underline{\gamma}\right):=\int_a^b\lVert\underline{\gamma}'(t)\rVert\,dt$$

Let $$\underline{\gamma}:\left[a,b\right]\rightarrow\mathbb{R}^n$$ be a curve and $$\varphi:\left[\alpha,\beta\right]\rightarrow\left[a,b\right]$$ be a $$C^1$$ bijection with $$\varphi'\neq 0.$$ The curve $$\underline{\gamma}\circ\varphi$$ is a **reparametrisation** of $$\underline{\gamma}.$$ The reparametrisation **preserves orientation** if and only if $$\varphi'>0$$ and **reverses orientation** if and only if $$\varphi'<0.$$ Arc length is unchanged by reparametrisation.

Let $$\underline{\gamma}:\left[a,b\right]\rightarrow\mathbb{R}^n$$ be a curve. The **reversed curve** of $$\underline{\gamma}$$ is the curve $$\underline{\gamma}^-(t):=\underline{\gamma}(a+b-t),$$ which traces the same image in the opposite direction.

Let $$\underline{a},\underline{b}\in\mathbb{R}^3.$$ The **cross product** of $$\underline{a}$$ and $$\underline{b}$$ is the vector

$$\underline{a}\times\underline{b}:=\left(a_2 b_3-a_3 b_2,\,a_3 b_1-a_1 b_3,\,a_1 b_2-a_2 b_1\right)=\det\begin{bmatrix}\underline{e}_1 & \underline{e}_2 & \underline{e}_3 \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3\end{bmatrix}$$

where the determinant is expanded along its first row of standard basis vectors. The cross product has the following properties:
- it is bilinear;
- it is **anticommutative**, $$\underline{b}\times\underline{a}=-\underline{a}\times\underline{b},$$ so $$\underline{a}\times\underline{a}=\underline{0};$$
- it is orthogonal to both of its arguments;
- if $$\theta$$ is the angle between non-zero $$\underline{a}$$ and $$\underline{b}$$ then $$\lVert\underline{a}\times\underline{b}\rVert=\lVert\underline{a}\rVert\lVert\underline{b}\rVert\sin\theta,$$ the area of the parallelogram spanned by $$\underline{a}$$ and $$\underline{b};$$
- $$\underline{a}\times\underline{b}=\underline{0}$$ if and only if $$\underline{a}$$ and $$\underline{b}$$ are linearly dependent;
- the standard basis satisfies $$\underline{e}_1\times\underline{e}_2=\underline{e}_3,$$ $$\underline{e}_2\times\underline{e}_3=\underline{e}_1$$ and $$\underline{e}_3\times\underline{e}_1=\underline{e}_2,$$ which fixes the direction of $$\underline{a}\times\underline{b}$$ by the **right-hand rule**.

Let $$\underline{a},\underline{b},\underline{c}\in\mathbb{R}^3.$$ The **scalar triple product** of $$\underline{a},\underline{b}$$ and $$\underline{c}$$ is the dot product of $$\underline{a}$$ with the cross product of $$\underline{b}$$ and $$\underline{c},$$ which is the determinant of the matrix with rows $$\underline{a},\underline{b},\underline{c}.$$

$$\underline{a}\cdot\left(\underline{b}\times\underline{c}\right)=\det\begin{bmatrix}a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3\end{bmatrix}=\underline{b}\cdot\left(\underline{c}\times\underline{a}\right)=\underline{c}\cdot\left(\underline{a}\times\underline{b}\right)$$

The absolute value of the scalar triple product is the volume of the parallelepiped spanned by $$\underline{a},\underline{b}$$ and $$\underline{c}.$$

Let $$\underline{a},\underline{b},\underline{c}\in\mathbb{R}^3.$$ The **vector triple product** of $$\underline{a},\underline{b}$$ and $$\underline{c}$$ is $$\underline{a}\times\left(\underline{b}\times\underline{c}\right),$$ and it satisfies

$$\underline{a}\times\left(\underline{b}\times\underline{c}\right)=\left(\underline{a}\cdot\underline{c}\right)\underline{b}-\left(\underline{a}\cdot\underline{b}\right)\underline{c}.$$

The **del operator** is the vector of partial derivative operators.

$$\nabla:=\left(\frac{\partial}{\partial x_1},\ldots,\frac{\partial}{\partial x_n}\right)$$

Let $$U\subseteq\mathbb{R}^n$$ be open and $$f:U\rightarrow\mathbb{R}$$ be a $$C^1$$ scalar field. The gradient $$\nabla f$$ of $$f$$ is the vector field on $$U$$ whose value at each point is the gradient of $$f$$ at that point. The gradient has the following properties:
- the gradient at $$\underline{x}$$ points in the direction in which $$f$$ increases fastest, since $$D_{\underline{v}}f(\underline{x})=\nabla f(\underline{x})\cdot\underline{v}$$ is largest over unit vectors $$\underline{v}$$ when $$\underline{v}$$ is parallel to $$\nabla f(\underline{x});$$
- the length $$\lVert\nabla f(\underline{x})\rVert$$ is that largest rate of increase.

Let $$U\subseteq\mathbb{R}^n$$ be open, $$f:U\rightarrow\mathbb{R}$$ be a scalar field and $$c\in\mathbb{R}.$$ The **level set** of $$f$$ at $$c$$ is the set of points at which $$f$$ takes the value $$c.$$

$$\left\{\underline{x}\in U:f(\underline{x})=c\right\}$$

If $$f$$ is $$C^1$$ and $$\underline{\gamma}$$ is a $$C^1$$ curve in a level set of $$f$$ then the chain rule gives $$\nabla f\left(\underline{\gamma}(t)\right)\cdot\underline{\gamma}'(t)=0,$$ so the gradient is orthogonal to level sets.

Let $$U\subseteq\mathbb{R}^n$$ be open and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be a $$C^1$$ vector field. The **divergence** of $$\underline{F}$$ is the scalar field given by the dot product of $$\nabla$$ with $$\underline{F}.$$

$$\nabla\cdot\underline{F}:=\sum_{i=1}^{n}\frac{\partial F_i}{\partial x_i}=\mathrm{tr}\,J_{\underline{F}}$$

The divergence is also written $$\mathrm{div}\,\underline{F}.$$ The vector field $$\underline{F}$$ is **solenoidal** if and only if $$\nabla\cdot\underline{F}=0$$ on $$U.$$

Let $$U\subseteq\mathbb{R}^3$$ be open and $$\underline{F}:U\rightarrow\mathbb{R}^3$$ be a $$C^1$$ vector field. The **curl** of $$\underline{F}$$ is the vector field given by the cross product of $$\nabla$$ with $$\underline{F}.$$

$$\nabla\times\underline{F}:=\left(\frac{\partial F_3}{\partial x_2}-\frac{\partial F_2}{\partial x_3},\,\frac{\partial F_1}{\partial x_3}-\frac{\partial F_3}{\partial x_1},\,\frac{\partial F_2}{\partial x_1}-\frac{\partial F_1}{\partial x_2}\right)$$

The curl is also written $$\mathrm{curl}\,\underline{F}.$$ The vector field $$\underline{F}$$ is **irrotational** if and only if $$\nabla\times\underline{F}=\underline{0}$$ on $$U.$$

Let $$U\subseteq\mathbb{R}^2$$ be open and $$\underline{F}=\left(F_1,F_2\right):U\rightarrow\mathbb{R}^2$$ be a $$C^1$$ vector field. The **scalar curl** of $$\underline{F}$$ is the scalar field $$\frac{\partial F_2}{\partial x_1}-\frac{\partial F_1}{\partial x_2},$$ which is the third component of the curl of $$\left(F_1,F_2,0\right).$$

The divergence and the curl of $$\underline{F}$$ are the trace and the antisymmetric part of its Jacobian matrix: the matrix $$J_{\underline{F}}-J_{\underline{F}}^\intercal$$ has the components of $$\nabla\times\underline{F}$$ as its off-diagonal entries.

Let $$U\subseteq\mathbb{R}^n$$ be open and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be a vector field. The vector field $$\underline{F}$$ is **radial** if and only if $$\underline{F}(\underline{x})=g\left(\lVert\underline{x}\rVert\right)\underline{x}$$ for some scalar function $$g.$$ A $$C^1$$ radial field is irrotational.

Let $$U\subseteq\mathbb{R}^n$$ be open and $$f:U\rightarrow\mathbb{R}$$ be a $$C^2$$ scalar field. The **Laplacian** of $$f$$ is the divergence of its gradient, which is the sum of its unmixed second-order partial derivatives.

$$\Delta f:=\nabla\cdot\nabla f=\sum_{i=1}^{n}\frac{\partial^2 f}{\partial x_i^2}=\mathrm{tr}\,H_f$$

The Laplacian is also written $$\nabla^2 f.$$ The scalar field $$f$$ is **harmonic** on $$U$$ if and only if $$\Delta f=0$$ on $$U.$$

Let $$U\subseteq\mathbb{R}^n$$ be open and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be a $$C^2$$ vector field. The **vector Laplacian** of $$\underline{F}$$ is the vector field $$\Delta\underline{F}$$ whose components are the Laplacians of the components of $$\underline{F}.$$

Let $$U\subseteq\mathbb{R}^3$$ be open, $$f,g$$ be $$C^2$$ scalar fields on $$U$$ and $$\underline{F},\underline{G}$$ be $$C^2$$ vector fields on $$U.$$ By Schwarz's theorem the following **vector identities** hold:

$$\nabla\left(f\,g\right)=f\,\nabla g+g\,\nabla f$$

$$\nabla\cdot\left(f\,\underline{F}\right)=\nabla f\cdot\underline{F}+f\,\nabla\cdot\underline{F},\qquad\nabla\times\left(f\,\underline{F}\right)=\nabla f\times\underline{F}+f\,\nabla\times\underline{F}$$

$$\nabla\cdot\left(\underline{F}\times\underline{G}\right)=\underline{G}\cdot\left(\nabla\times\underline{F}\right)-\underline{F}\cdot\left(\nabla\times\underline{G}\right)$$

$$\nabla\times\left(\nabla f\right)=\underline{0},\qquad\nabla\cdot\left(\nabla\times\underline{F}\right)=0$$

$$\nabla\times\left(\nabla\times\underline{F}\right)=\nabla\left(\nabla\cdot\underline{F}\right)-\Delta\underline{F}$$

The first identity on the fourth line states that gradient fields are irrotational, and the second states that curl fields are solenoidal. The identities on the first two lines hold in $$\mathbb{R}^n$$ with the curl omitted.

Let $$U\subseteq\mathbb{R}^n$$ be open, $$\underline{\gamma}:\left[a,b\right]\rightarrow U$$ be a piecewise $$C^1$$ curve and $$f:U\rightarrow\mathbb{R}$$ be a continuous scalar field. The **line integral** of $$f$$ along $$\underline{\gamma}$$ with respect to arc length is the integral of $$f$$ along the curve weighted by the speed.

$$\int_{\underline{\gamma}}f\,ds:=\int_a^b f\left(\underline{\gamma}(t)\right)\lVert\underline{\gamma}'(t)\rVert\,dt$$

Let $$U\subseteq\mathbb{R}^n$$ be open, $$\underline{\gamma}:\left[a,b\right]\rightarrow U$$ be a piecewise $$C^1$$ curve and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be a continuous vector field. The **line integral** of $$\underline{F}$$ along $$\underline{\gamma}$$ is the integral of the dot product of $$\underline{F}$$ with the velocity of the curve.

$$\int_{\underline{\gamma}}\underline{F}\cdot d\underline{r}:=\int_a^b\underline{F}\left(\underline{\gamma}(t)\right)\cdot\underline{\gamma}'(t)\,dt$$

The line integral of $$\underline{F}$$ integrates the component of $$\underline{F}$$ along the unit tangent vector, $$\int_{\underline{\gamma}}\underline{F}\cdot d\underline{r}=\int_{\underline{\gamma}}\underline{F}\cdot\underline{T}\,ds,$$ and is also written $$\int_{\underline{\gamma}}F_1\,dx_1+\cdots+F_n\,dx_n.$$ Line integrals have the following properties:
- both line integrals are unchanged by orientation-preserving reparametrisation;
- reversing the curve leaves the line integral of a scalar field unchanged and changes the sign of the line integral of a vector field.

Let $$U\subseteq\mathbb{R}^n$$ be open, $$\underline{\gamma}$$ be a closed piecewise $$C^1$$ curve in $$U$$ and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be a continuous vector field. The **circulation** of $$\underline{F}$$ around $$\underline{\gamma}$$ is the line integral of $$\underline{F}$$ around the closed curve, written $$\oint_{\underline{\gamma}}\underline{F}\cdot d\underline{r}.$$

Let $$U\subseteq\mathbb{R}^n$$ be open and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be a vector field. A **potential** of $$\underline{F}$$ is a $$C^1$$ scalar field $$\varphi:U\rightarrow\mathbb{R}$$ with $$\underline{F}=\nabla\varphi.$$ The vector field $$\underline{F}$$ is **conservative** if and only if it has a potential.

Let $$U\subseteq\mathbb{R}^n$$ be open, $$\varphi:U\rightarrow\mathbb{R}$$ be a $$C^1$$ scalar field and $$\underline{\gamma}:\left[a,b\right]\rightarrow U$$ be a piecewise $$C^1$$ curve. The **gradient theorem** states that the line integral of a gradient field depends only on the endpoints of the curve.

$$\int_{\underline{\gamma}}\nabla\varphi\cdot d\underline{r}=\varphi\left(\underline{\gamma}(b)\right)-\varphi\left(\underline{\gamma}(a)\right)$$

Let $$U\subseteq\mathbb{R}^n$$ be open and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be a continuous vector field. The line integral of $$\underline{F}$$ is **path independent** if and only if it takes the same value along any two piecewise $$C^1$$ curves in $$U$$ with the same initial and terminal points.

Let $$U\subseteq\mathbb{R}^n$$ be an open set such that any two points of $$U$$ can be joined by a piecewise $$C^1$$ curve in $$U,$$ and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be a continuous vector field. Conservative fields have the following properties:
- two potentials of $$\underline{F}$$ differ by a constant;
- the following are equivalent: $$\underline{F}$$ is conservative; the line integral of $$\underline{F}$$ is path independent; the circulation of $$\underline{F}$$ around every closed piecewise $$C^1$$ curve in $$U$$ is zero;
- a $$C^1$$ conservative field on $$U\subseteq\mathbb{R}^3$$ is irrotational, and a $$C^1$$ conservative field on $$U\subseteq\mathbb{R}^2$$ has zero scalar curl, since gradient fields are irrotational;
- the converse fails in general: $$\underline{F}(x,y)=\frac{\left(-y,x\right)}{x^2+y^2}$$ has zero scalar curl on $$\mathbb{R}^2\setminus\left\{\underline{0}\right\}$$ but circulation $$2\pi$$ around the unit circle.

Let $$U\subseteq\mathbb{R}^n$$ be open. The set $$U$$ is **simply connected** if and only if every closed curve in $$U$$ can be continuously shrunk within $$U$$ to a point. The sets $$\mathbb{R}^n,$$ open rectangles and $$\mathbb{R}^3$$ with a point removed are simply connected, whereas $$\mathbb{R}^2$$ with a point removed is not. On a simply connected open set every $$C^1$$ irrotational field is conservative.

Let $$D\subset\mathbb{R}^2$$ be a closed bounded region of the kind over which multiple integrals are taken and $$\underline{r}:D\rightarrow\mathbb{R}^3$$ be $$C^1.$$ The image $$S=\underline{r}(D)$$ is a **parametrised surface** with **parameters** $$\left(u,v\right)\in D.$$ The partial derivatives $$\underline{r}_u:=\frac{\partial\underline{r}}{\partial u}$$ and $$\underline{r}_v:=\frac{\partial\underline{r}}{\partial v}$$ are tangent to $$S.$$

Let $$S=\underline{r}(D)$$ be a parametrised surface. The **normal vector** of $$S$$ at $$\underline{r}(u,v)$$ is the cross product $$\underline{r}_u\times\underline{r}_v,$$ which is orthogonal to $$S.$$ The surface $$S$$ is **regular** if and only if the normal vector is never zero. The **unit normal** of a regular surface is the normal vector divided by its length.

$$\underline{n}:=\frac{\underline{r}_u\times\underline{r}_v}{\lVert\underline{r}_u\times\underline{r}_v\rVert}$$

Let $$S=\underline{r}(D)$$ be a parametrised surface and $$f$$ be a continuous scalar field on an open set containing $$S.$$ The **surface area** of $$S$$ is the integral over $$D$$ of the length of the normal vector, which is the area of the parallelogram spanned by the tangent vectors. The **surface integral** of $$f$$ over $$S$$ is the integral of $$f$$ over the surface weighted by the length of the normal vector.

$$A\left(S\right):=\int_D\lVert\underline{r}_u\times\underline{r}_v\rVert\,d(u,v),\qquad\int_S f\,dS:=\int_D f\left(\underline{r}(u,v)\right)\lVert\underline{r}_u\times\underline{r}_v\rVert\,d(u,v)$$

For example, the graph $$\underline{r}(u,v)=\left(u,v,g(u,v)\right)$$ of a $$C^1$$ function $$g$$ has $$\lVert\underline{r}_u\times\underline{r}_v\rVert=\sqrt{1+g_u^2+g_v^2},$$ and the sphere of radius $$\rho$$ parametrised by $$\underline{r}(\theta,\phi)=\rho\left(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi\right)$$ on $$\left[0,2\pi\right]\times\left[0,\pi\right]$$ has $$\lVert\underline{r}_\theta\times\underline{r}_\phi\rVert=\rho^2\sin\phi$$ and surface area $$4\pi\rho^2.$$

Let $$S$$ be a regular parametrised surface. The surface $$S$$ is **orientable** if and only if it admits a continuous choice of unit normal. An **orientation** of an orientable surface is a choice of one of the two continuous unit normal fields $$\pm\underline{n}.$$ The Möbius strip is not orientable.

Let $$S$$ be an oriented surface with unit normal $$\underline{n}$$ and $$\underline{F}$$ be a continuous vector field on an open set containing $$S.$$ The **flux** of $$\underline{F}$$ through $$S$$ is the surface integral of the normal component of $$\underline{F}.$$

$$\int_S\underline{F}\cdot\underline{n}\,dS=\int_D\underline{F}\left(\underline{r}(u,v)\right)\cdot\left(\underline{r}_u\times\underline{r}_v\right)d(u,v)$$

Surface area and surface integrals of scalar fields are unchanged by reparametrisation of $$S,$$ and the flux changes sign when the orientation is reversed.

Let $$S$$ be a surface in $$\mathbb{R}^3.$$ The surface $$S$$ is **closed** if and only if it encloses a bounded region of $$\mathbb{R}^3,$$ such as a sphere. The **outward normal** of a closed surface is the unit normal that points away from the enclosed region. Flux through a closed surface is written $$\oint_S\underline{F}\cdot\underline{n}\,dS.$$

Let $$\underline{\gamma}$$ be a simple closed curve in $$\mathbb{R}^2.$$ The **Jordan curve theorem** states that $$\underline{\gamma}$$ separates the plane into exactly two regions, one bounded and one unbounded, of which it is the common boundary.

Let $$\underline{\gamma}$$ be a piecewise $$C^1$$ simple closed curve in $$\mathbb{R}^2$$ traversed anticlockwise, so that the bounded region $$D$$ it encloses lies to its left, and write $$\partial D$$ for the curve $$\underline{\gamma}.$$ Let $$\underline{F}=\left(F_1,F_2\right)$$ be a $$C^1$$ vector field on an open set containing $$D$$ and $$\underline{\gamma}.$$ **Green's theorem** states that the circulation of $$\underline{F}$$ around the boundary equals the integral of the scalar curl of $$\underline{F}$$ over the region.

$$\oint_{\partial D}F_1\,dx+F_2\,dy=\int_D\left(\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}\right)d(x,y)$$

Taking $$\underline{F}=\frac{1}{2}\left(-y,x\right)$$ gives the area of $$D$$ as $$\frac{1}{2}\oint_{\partial D}x\,dy-y\,dx.$$

Let $$S$$ be a regular oriented parametrised surface in $$\mathbb{R}^3$$ with unit normal $$\underline{n}.$$ The **boundary curve** of $$S,$$ written $$\partial S,$$ is the image of the boundary of $$D$$ under $$\underline{r},$$ a piecewise $$C^1$$ closed curve oriented so that $$S$$ lies to the left when walking along $$\partial S$$ with head in the direction of $$\underline{n}.$$

Let $$S$$ be a regular oriented parametrised surface in $$\mathbb{R}^3$$ with unit normal $$\underline{n}$$ and boundary curve $$\partial S,$$ and $$\underline{F}$$ be a $$C^1$$ vector field on an open set containing $$S.$$ **Stokes' theorem** states that the circulation of $$\underline{F}$$ around the boundary equals the flux of the curl of $$\underline{F}$$ through the surface.

$$\oint_{\partial S}\underline{F}\cdot d\underline{r}=\int_S\left(\nabla\times\underline{F}\right)\cdot\underline{n}\,dS$$

Green's theorem is the case of a flat surface in the plane with $$\underline{n}=\underline{e}_3.$$ The flux of a curl through a closed surface is zero.

Let $$V\subset\mathbb{R}^3$$ be a bounded region enclosed by a closed, piecewise regular surface $$\partial V$$ with outward normal $$\underline{n},$$ and $$\underline{F}$$ be a $$C^1$$ vector field on an open set containing $$V$$ and $$\partial V.$$ The **divergence theorem** states that the flux of $$\underline{F}$$ out of the region equals the integral of the divergence of $$\underline{F}$$ over the region.

$$\oint_{\partial V}\underline{F}\cdot\underline{n}\,dS=\int_V\nabla\cdot\underline{F}\,d\underline{x}$$

The divergence theorem holds in $$\mathbb{R}^n$$ with the surface integral replaced by the integral over the boundary with respect to $$\left(n-1\right)$$-dimensional area. In $$\mathbb{R}^2$$ it states that $$\oint_{\partial D}\underline{F}\cdot\underline{n}\,ds=\int_D\nabla\cdot\underline{F}\,d(x,y),$$ which is Green's theorem applied to $$\left(-F_2,F_1\right).$$

Let $$V\subset\mathbb{R}^3$$ be a bounded region enclosed by a closed, piecewise regular surface $$\partial V$$ with outward normal $$\underline{n},$$ and $$f,g$$ be $$C^2$$ scalar fields on an open set containing $$V$$ and $$\partial V.$$ **Green's identities** are the divergence theorem applied to $$f\,\nabla g.$$

$$\int_V\left(f\,\Delta g+\nabla f\cdot\nabla g\right)d\underline{x}=\oint_{\partial V}f\,\nabla g\cdot\underline{n}\,dS$$

$$\int_V\left(f\,\Delta g-g\,\Delta f\right)d\underline{x}=\oint_{\partial V}\left(f\,\nabla g-g\,\nabla f\right)\cdot\underline{n}\,dS$$

Let $$\underline{x}\in\mathbb{R}^3$$ and $$\rho>0.$$ The **ball** of radius $$\rho$$ centred at $$\underline{x}$$ is the set $$B_\rho=\left\{\underline{y}\in\mathbb{R}^3:\lVert\underline{y}-\underline{x}\rVert\leq\rho\right\},$$ with volume $$\lvert B_\rho\rvert=\frac{4}{3}\pi\rho^3$$ and boundary sphere $$\partial B_\rho.$$ Let $$\underline{v}$$ be a unit vector and $$\underline{\gamma}_\rho$$ be the circle of radius $$\rho$$ centred at $$\underline{x}$$ in the plane orthogonal to $$\underline{v}$$ and traversed anticlockwise about $$\underline{v}.$$ By the divergence and Stokes' theorems with the mean value theorem for integrals, the divergence of a $$C^1$$ field is its outward flux per unit volume and each component of its curl is its circulation per unit area.

$$\nabla\cdot\underline{F}(\underline{x})=\lim_{\rho\rightarrow 0}\frac{1}{\lvert B_\rho\rvert}\oint_{\partial B_\rho}\underline{F}\cdot\underline{n}\,dS,\qquad\left(\nabla\times\underline{F}(\underline{x})\right)\cdot\underline{v}=\lim_{\rho\rightarrow 0}\frac{1}{\pi\rho^2}\oint_{\underline{\gamma}_\rho}\underline{F}\cdot d\underline{r}$$

These limits define the divergence and curl independently of coordinates, so both are unchanged by rotations of the axes.
