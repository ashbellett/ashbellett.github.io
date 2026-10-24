---
layout: post
category: "real-analysis"
title:  "Vector Calculus"
tags: ["real", "analysis", "vector calculus"]
description: "Calculus of fields, curves and surfaces"
---

Let $$U\subseteq\mathbb{R}^n$$ be open. A **scalar field** on $$U$$ is a function $$f:U\rightarrow\mathbb{R}$$ and a **vector field** on $$U$$ is a function $$\underline{F}=\left(F_1,\ldots,F_n\right):U\rightarrow\mathbb{R}^n$$ that assigns a vector to each point. A vector field is $$C^k$$ if each of its components is. For $$\underline{x},\underline{y}\in\mathbb{R}^n$$ the **dot product**

$$\underline{x}\cdot\underline{y}:=\sum_{i=1}^{n}x_i\,y_i=\underline{x}^\intercal\underline{y}$$

is the standard inner product on $$\mathbb{R}^n,$$ so that $$\lVert\underline{x}\rVert=\sqrt{\underline{x}\cdot\underline{x}}$$ is the Euclidean distance from $$\underline{x}$$ to $$\underline{0}$$ and two vectors are orthogonal if and only if their dot product is zero. The directional derivative of a differentiable scalar field is $$D_{\underline{v}}f(\underline{x})=\nabla f(\underline{x})\cdot\underline{v}.$$

A **curve** in $$\mathbb{R}^n$$ is a function $$\underline{\gamma}=\left(\gamma_1,\ldots,\gamma_n\right):\left[a,b\right]\rightarrow\mathbb{R}^n$$ with continuous components, whose image is traced from the **initial point** $$\underline{\gamma}(a)$$ to the **terminal point** $$\underline{\gamma}(b).$$ The curve is **closed** if $$\underline{\gamma}(a)=\underline{\gamma}(b)$$ and **simple** if it is injective on $$\left[a,b\right)$$ and on $$\left(a,b\right].$$ A $$C^1$$ curve has **velocity** $$\underline{\gamma}'(t)=\left(\gamma_1'(t),\ldots,\gamma_n'(t)\right),$$ **speed** $$\lVert\underline{\gamma}'(t)\rVert$$ and, where the speed is non-zero, **unit tangent vector** $$\underline{T}(t):=\frac{\underline{\gamma}'(t)}{\lVert\underline{\gamma}'(t)\rVert}.$$ The curve is **regular** if its speed is never zero and **piecewise $$C^1$$** if $$\left[a,b\right]$$ is the union of finitely many intervals on each of which it is $$C^1.$$ The **arc length** of a piecewise $$C^1$$ curve is the integral of its speed.

$$L\left(\underline{\gamma}\right):=\int_a^b\lVert\underline{\gamma}'(t)\rVert\,dt$$

Let $$\varphi:\left[\alpha,\beta\right]\rightarrow\left[a,b\right]$$ be a $$C^1$$ bijection with $$\varphi'\neq 0.$$ The curve $$\underline{\gamma}\circ\varphi$$ is a **reparametrisation** of $$\underline{\gamma},$$ which **preserves orientation** if $$\varphi'>0$$ and **reverses orientation** if $$\varphi'<0;$$ the **reversed curve** $$\underline{\gamma}^-(t):=\underline{\gamma}(a+b-t)$$ traces the same image in the opposite direction. Arc length is unchanged by reparametrisation.

Let $$\underline{a},\underline{b}\in\mathbb{R}^3.$$ The **cross product** of $$\underline{a}$$ and $$\underline{b}$$ is the vector

$$\underline{a}\times\underline{b}:=\left(a_2 b_3-a_3 b_2,\,a_3 b_1-a_1 b_3,\,a_1 b_2-a_2 b_1\right)=\det\begin{bmatrix}\underline{e}_1 & \underline{e}_2 & \underline{e}_3 \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3\end{bmatrix}$$

where the determinant is expanded along its first row of standard basis vectors. The cross product is bilinear and **anticommutative**, $$\underline{b}\times\underline{a}=-\underline{a}\times\underline{b},$$ so $$\underline{a}\times\underline{a}=\underline{0},$$ and it is orthogonal to both of its arguments. If $$\theta$$ is the angle between non-zero $$\underline{a}$$ and $$\underline{b}$$ then

$$\lVert\underline{a}\times\underline{b}\rVert=\lVert\underline{a}\rVert\lVert\underline{b}\rVert\sin\theta,$$

the area of the parallelogram spanned by $$\underline{a}$$ and $$\underline{b},$$ so $$\underline{a}\times\underline{b}=\underline{0}$$ if and only if $$\underline{a}$$ and $$\underline{b}$$ are linearly dependent. The standard basis satisfies $$\underline{e}_1\times\underline{e}_2=\underline{e}_3,$$ $$\underline{e}_2\times\underline{e}_3=\underline{e}_1$$ and $$\underline{e}_3\times\underline{e}_1=\underline{e}_2,$$ which fixes the direction of $$\underline{a}\times\underline{b}$$ by the **right-hand rule**. The **scalar triple product** of $$\underline{a},\underline{b},\underline{c}\in\mathbb{R}^3$$ is the determinant of the matrix with these rows, and its absolute value is the volume of the parallelepiped they span.

$$\underline{a}\cdot\left(\underline{b}\times\underline{c}\right)=\det\begin{bmatrix}a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3\end{bmatrix}=\underline{b}\cdot\left(\underline{c}\times\underline{a}\right)=\underline{c}\cdot\left(\underline{a}\times\underline{b}\right)$$

The **vector triple product** satisfies $$\underline{a}\times\left(\underline{b}\times\underline{c}\right)=\left(\underline{a}\cdot\underline{c}\right)\underline{b}-\left(\underline{a}\cdot\underline{b}\right)\underline{c}.$$

Let $$f:U\rightarrow\mathbb{R}$$ be a $$C^1$$ scalar field and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be a $$C^1$$ vector field. The **del operator** $$\nabla:=\left(\frac{\partial}{\partial x_1},\ldots,\frac{\partial}{\partial x_n}\right)$$ is the vector of partial derivative operators, so that the gradient $$\nabla f$$ is the vector field of partial derivatives of $$f.$$ The gradient at $$\underline{x}$$ points in the direction in which $$f$$ increases fastest, since $$D_{\underline{v}}f(\underline{x})=\nabla f(\underline{x})\cdot\underline{v}$$ is largest over unit vectors $$\underline{v}$$ when $$\underline{v}$$ is parallel to $$\nabla f(\underline{x}),$$ and its length $$\lVert\nabla f(\underline{x})\rVert$$ is that largest rate of increase. For $$c\in\mathbb{R}$$ the **level set** of $$f$$ at $$c$$ is $$\left\{\underline{x}\in U:f(\underline{x})=c\right\},$$ and if $$\underline{\gamma}$$ is a $$C^1$$ curve in a level set then the chain rule gives $$\nabla f\left(\underline{\gamma}(t)\right)\cdot\underline{\gamma}'(t)=0,$$ so the gradient is orthogonal to level sets.

The **divergence** of $$\underline{F}$$ is the scalar field given by the dot product of $$\nabla$$ with $$\underline{F}.$$

$$\nabla\cdot\underline{F}:=\sum_{i=1}^{n}\frac{\partial F_i}{\partial x_i}=\mathrm{tr}\,J_{\underline{F}}$$

The divergence is also written $$\mathrm{div}\,\underline{F},$$ and $$\underline{F}$$ is **solenoidal** if $$\nabla\cdot\underline{F}=0$$ on $$U.$$ When $$n=3$$ the **curl** of $$\underline{F}$$ is the vector field given by the cross product of $$\nabla$$ with $$\underline{F}.$$

$$\nabla\times\underline{F}:=\left(\frac{\partial F_3}{\partial x_2}-\frac{\partial F_2}{\partial x_3},\,\frac{\partial F_1}{\partial x_3}-\frac{\partial F_3}{\partial x_1},\,\frac{\partial F_2}{\partial x_1}-\frac{\partial F_1}{\partial x_2}\right)$$

The curl is also written $$\mathrm{curl}\,\underline{F},$$ and $$\underline{F}$$ is **irrotational** if $$\nabla\times\underline{F}=\underline{0}$$ on $$U.$$ When $$n=2$$ the **scalar curl** of $$\underline{F}=\left(F_1,F_2\right)$$ is $$\frac{\partial F_2}{\partial x_1}-\frac{\partial F_1}{\partial x_2},$$ the third component of the curl of $$\left(F_1,F_2,0\right).$$ The divergence and curl of $$\underline{F}$$ are the trace and the antisymmetric part of its Jacobian matrix: $$J_{\underline{F}}-J_{\underline{F}}^\intercal$$ has the components of $$\nabla\times\underline{F}$$ as its off-diagonal entries. A vector field is **radial** if $$\underline{F}(\underline{x})=g\left(\lVert\underline{x}\rVert\right)\underline{x}$$ for a scalar function $$g,$$ and a $$C^1$$ radial field is irrotational.

Let $$f:U\rightarrow\mathbb{R}$$ be $$C^2.$$ The **Laplacian** of $$f$$ is the divergence of its gradient, the sum of its unmixed second-order partial derivatives.

$$\Delta f:=\nabla\cdot\nabla f=\sum_{i=1}^{n}\frac{\partial^2 f}{\partial x_i^2}=\mathrm{tr}\,H_f$$

The Laplacian is also written $$\nabla^2 f,$$ and $$f$$ is **harmonic** on $$U$$ if $$\Delta f=0$$ on $$U.$$ The **vector Laplacian** $$\Delta\underline{F}$$ of a $$C^2$$ vector field is the vector field whose components are the Laplacians of the components of $$\underline{F}.$$ By Schwarz's theorem, for $$C^2$$ scalar fields $$f,g$$ and $$C^2$$ vector fields $$\underline{F},\underline{G}$$ on $$U\subseteq\mathbb{R}^3$$ the following **vector identities** hold.

$$\nabla\left(f\,g\right)=f\,\nabla g+g\,\nabla f$$

$$\nabla\cdot\left(f\,\underline{F}\right)=\nabla f\cdot\underline{F}+f\,\nabla\cdot\underline{F},\qquad\nabla\times\left(f\,\underline{F}\right)=\nabla f\times\underline{F}+f\,\nabla\times\underline{F}$$

$$\nabla\cdot\left(\underline{F}\times\underline{G}\right)=\underline{G}\cdot\left(\nabla\times\underline{F}\right)-\underline{F}\cdot\left(\nabla\times\underline{G}\right)$$

$$\nabla\times\left(\nabla f\right)=\underline{0},\qquad\nabla\cdot\left(\nabla\times\underline{F}\right)=0$$

$$\nabla\times\left(\nabla\times\underline{F}\right)=\nabla\left(\nabla\cdot\underline{F}\right)-\Delta\underline{F}$$

The first identity on the fourth line states that gradient fields are irrotational and the second that curl fields are solenoidal. The identities on the first two lines hold in $$\mathbb{R}^n$$ with the curl omitted.

Let $$\underline{\gamma}:\left[a,b\right]\rightarrow U$$ be a piecewise $$C^1$$ curve, $$f:U\rightarrow\mathbb{R}$$ be a continuous scalar field and $$\underline{F}:U\rightarrow\mathbb{R}^n$$ be a continuous vector field. The **line integral** of $$f$$ along $$\underline{\gamma}$$ with respect to arc length and the **line integral** of $$\underline{F}$$ along $$\underline{\gamma}$$ are

$$\int_{\underline{\gamma}}f\,ds:=\int_a^b f\left(\underline{\gamma}(t)\right)\lVert\underline{\gamma}'(t)\rVert\,dt,\qquad\int_{\underline{\gamma}}\underline{F}\cdot d\underline{r}:=\int_a^b\underline{F}\left(\underline{\gamma}(t)\right)\cdot\underline{\gamma}'(t)\,dt.$$

The second integrates the component of $$\underline{F}$$ along the unit tangent vector, $$\int_{\underline{\gamma}}\underline{F}\cdot d\underline{r}=\int_{\underline{\gamma}}\underline{F}\cdot\underline{T}\,ds,$$ and is also written $$\int_{\underline{\gamma}}F_1\,dx_1+\cdots+F_n\,dx_n.$$ Both line integrals are unchanged by orientation-preserving reparametrisation, and reversing the curve leaves the first unchanged and changes the sign of the second. The line integral of $$\underline{F}$$ around a closed curve is the **circulation** of $$\underline{F}$$ and is written $$\oint_{\underline{\gamma}}\underline{F}\cdot d\underline{r}.$$

A vector field $$\underline{F}$$ on $$U$$ is **conservative** if $$\underline{F}=\nabla\varphi$$ for a $$C^1$$ scalar field $$\varphi:U\rightarrow\mathbb{R},$$ which is a **potential** of $$\underline{F}.$$ The **gradient theorem** states that the line integral of a gradient field depends only on the endpoints of the curve.

$$\int_{\underline{\gamma}}\nabla\varphi\cdot d\underline{r}=\varphi\left(\underline{\gamma}(b)\right)-\varphi\left(\underline{\gamma}(a)\right)$$

Suppose that any two points of $$U$$ can be joined by a piecewise $$C^1$$ curve in $$U.$$ Then two potentials of $$\underline{F}$$ differ by a constant and the following are equivalent for a continuous vector field $$\underline{F}$$ on $$U:$$ $$\underline{F}$$ is conservative; the line integral of $$\underline{F}$$ is **path independent**, taking the same value along any two curves in $$U$$ with the same initial and terminal points; the circulation of $$\underline{F}$$ around every closed piecewise $$C^1$$ curve in $$U$$ is zero. Since gradient fields are irrotational, a $$C^1$$ conservative field on $$U\subseteq\mathbb{R}^3$$ is irrotational, and a $$C^1$$ conservative field on $$U\subseteq\mathbb{R}^2$$ has zero scalar curl. The converse fails in general: $$\underline{F}(x,y)=\frac{\left(-y,x\right)}{x^2+y^2}$$ has zero scalar curl on $$\mathbb{R}^2\setminus\left\{\underline{0}\right\}$$ but circulation $$2\pi$$ around the unit circle. The set $$U$$ is **simply connected** if every closed curve in $$U$$ can be continuously shrunk within $$U$$ to a point, which holds for $$\mathbb{R}^n,$$ for open rectangles and for $$\mathbb{R}^3$$ with a point removed, but not for $$\mathbb{R}^2$$ with a point removed. On a simply connected open set every $$C^1$$ irrotational field is conservative.

Let $$D\subset\mathbb{R}^2$$ be a closed bounded region of the kind over which multiple integrals are taken and $$\underline{r}:D\rightarrow\mathbb{R}^3$$ be $$C^1.$$ The image $$S=\underline{r}(D)$$ is a **parametrised surface** with **parameters** $$\left(u,v\right)\in D,$$ and the partial derivatives $$\underline{r}_u:=\frac{\partial\underline{r}}{\partial u}$$ and $$\underline{r}_v:=\frac{\partial\underline{r}}{\partial v}$$ are tangent to $$S.$$ The **normal vector** $$\underline{r}_u\times\underline{r}_v$$ is orthogonal to $$S,$$ the surface is **regular** if the normal vector is never zero, and its **unit normal** is $$\underline{n}:=\frac{\underline{r}_u\times\underline{r}_v}{\lVert\underline{r}_u\times\underline{r}_v\rVert}.$$ Since $$\lVert\underline{r}_u\times\underline{r}_v\rVert$$ is the area of the parallelogram spanned by the tangent vectors, the **surface area** of $$S$$ and the **surface integral** of a continuous scalar field $$f$$ over $$S$$ are

$$A\left(S\right):=\int_D\lVert\underline{r}_u\times\underline{r}_v\rVert\,d(u,v),\qquad\int_S f\,dS:=\int_D f\left(\underline{r}(u,v)\right)\lVert\underline{r}_u\times\underline{r}_v\rVert\,d(u,v).$$

For example, the graph $$\underline{r}(u,v)=\left(u,v,g(u,v)\right)$$ of a $$C^1$$ function $$g$$ has $$\lVert\underline{r}_u\times\underline{r}_v\rVert=\sqrt{1+g_u^2+g_v^2},$$ and the sphere of radius $$\rho$$ parametrised by $$\underline{r}(\theta,\phi)=\rho\left(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi\right)$$ on $$\left[0,2\pi\right]\times\left[0,\pi\right]$$ has $$\lVert\underline{r}_\theta\times\underline{r}_\phi\rVert=\rho^2\sin\phi$$ and surface area $$4\pi\rho^2.$$

A surface is **orientable** if it admits a continuous choice of unit normal, and a choice of one of the two such fields $$\pm\underline{n}$$ is an **orientation** of the surface; the Möbius strip is not orientable. The **flux** of a continuous vector field $$\underline{F}$$ through an oriented surface $$S$$ is the surface integral of its normal component.

$$\int_S\underline{F}\cdot\underline{n}\,dS=\int_D\underline{F}\left(\underline{r}(u,v)\right)\cdot\left(\underline{r}_u\times\underline{r}_v\right)d(u,v)$$

Surface area and surface integrals of scalar fields are unchanged by reparametrisation of $$S,$$ and the flux changes sign when the orientation is reversed. A surface is **closed** if it encloses a bounded region of $$\mathbb{R}^3,$$ such as a sphere, and its **outward normal** is the unit normal that points away from that region. Flux through a closed surface is written $$\oint_S\underline{F}\cdot\underline{n}\,dS.$$

The **Jordan curve theorem** states that a simple closed curve in $$\mathbb{R}^2$$ separates the plane into exactly two regions, one bounded and one unbounded, of which it is the common boundary. Let $$\underline{\gamma}$$ be a piecewise $$C^1$$ simple closed curve traversed anticlockwise, so that the bounded region $$D$$ it encloses lies to its left, and write $$\partial D$$ for the curve $$\underline{\gamma}.$$ **Green's theorem** states that for a $$C^1$$ vector field $$\underline{F}=\left(F_1,F_2\right)$$ on an open set containing $$D$$ and $$\underline{\gamma}$$

$$\oint_{\partial D}F_1\,dx+F_2\,dy=\int_D\left(\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}\right)d(x,y).$$

The circulation around the boundary equals the integral of the scalar curl over the region. Taking $$\underline{F}=\frac{1}{2}\left(-y,x\right)$$ gives the area of $$D$$ as $$\frac{1}{2}\oint_{\partial D}x\,dy-y\,dx.$$

Let $$S$$ be a regular oriented parametrised surface in $$\mathbb{R}^3$$ with unit normal $$\underline{n},$$ whose **boundary curve** $$\partial S$$ is the image of the boundary of $$D$$ under $$\underline{r},$$ a piecewise $$C^1$$ closed curve oriented so that $$S$$ lies to the left when walking along $$\partial S$$ with head in the direction of $$\underline{n}.$$ **Stokes' theorem** states that for a $$C^1$$ vector field $$\underline{F}$$ on an open set containing $$S$$

$$\oint_{\partial S}\underline{F}\cdot d\underline{r}=\int_S\left(\nabla\times\underline{F}\right)\cdot\underline{n}\,dS.$$

The circulation around the boundary equals the flux of the curl through the surface. Green's theorem is the case of a flat surface in the plane with $$\underline{n}=\underline{e}_3,$$ and the flux of a curl through a closed surface is zero.

Let $$V\subset\mathbb{R}^3$$ be a bounded region enclosed by a closed, piecewise regular surface $$\partial V$$ with outward normal $$\underline{n}.$$ The **divergence theorem** states that for a $$C^1$$ vector field $$\underline{F}$$ on an open set containing $$V$$ and $$\partial V$$

$$\oint_{\partial V}\underline{F}\cdot\underline{n}\,dS=\int_V\nabla\cdot\underline{F}\,d\underline{x}.$$

The flux out of the region equals the integral of the divergence over the region. The theorem holds in $$\mathbb{R}^n$$ with the surface integral replaced by the integral over the boundary with respect to $$\left(n-1\right)$$-dimensional area; in $$\mathbb{R}^2$$ it states that $$\oint_{\partial D}\underline{F}\cdot\underline{n}\,ds=\int_D\nabla\cdot\underline{F}\,d(x,y),$$ which is Green's theorem applied to $$\left(-F_2,F_1\right).$$ Applied to $$f\,\nabla g$$ for $$C^2$$ scalar fields $$f,g,$$ it gives **Green's identities**.

$$\int_V\left(f\,\Delta g+\nabla f\cdot\nabla g\right)d\underline{x}=\oint_{\partial V}f\,\nabla g\cdot\underline{n}\,dS$$

$$\int_V\left(f\,\Delta g-g\,\Delta f\right)d\underline{x}=\oint_{\partial V}\left(f\,\nabla g-g\,\nabla f\right)\cdot\underline{n}\,dS$$

Let $$B_\rho=\left\{\underline{y}\in\mathbb{R}^3:\lVert\underline{y}-\underline{x}\rVert\leq\rho\right\}$$ be the ball of radius $$\rho$$ centred at $$\underline{x},$$ with volume $$\lvert B_\rho\rvert=\frac{4}{3}\pi\rho^3$$ and boundary sphere $$\partial B_\rho.$$ By the divergence and Stokes' theorems with the mean value theorem for integrals, the divergence of a $$C^1$$ field is its outward flux per unit volume and each component of its curl is its circulation per unit area, where $$\underline{\gamma}_\rho$$ is the circle of radius $$\rho$$ centred at $$\underline{x}$$ in the plane orthogonal to the unit vector $$\underline{v}$$ and traversed anticlockwise about $$\underline{v}.$$

$$\nabla\cdot\underline{F}(\underline{x})=\lim_{\rho\rightarrow 0}\frac{1}{\lvert B_\rho\rvert}\oint_{\partial B_\rho}\underline{F}\cdot\underline{n}\,dS,\qquad\left(\nabla\times\underline{F}(\underline{x})\right)\cdot\underline{v}=\lim_{\rho\rightarrow 0}\frac{1}{\pi\rho^2}\oint_{\underline{\gamma}_\rho}\underline{F}\cdot d\underline{r}$$

These limits define the divergence and curl independently of coordinates, so both are unchanged by rotations of the axes.
