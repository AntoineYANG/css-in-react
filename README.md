# reacss    ![](https://img.shields.io/badge/npm-v1.0.1-brightgreen)


**Binding CSS dependency in React Components**

将 css 样式规则随着组件导入注入到 document 中，纯 tsx 实现。

* CSS rules contained in React Component module.
* Components depend on their own stylesheets.
* Simpler JSX serializing.
* CSS Animation & pseudo-class selector available.
* No more worring about coming up with a new className.

[TOC]

## Idea Talk

在实际业务中，我们创造了大量的 Presentational Components 来为我们渲染 UI。很多时候，我们希望这样的组件能够表现出某种样式风格。基于其复用的需求，我们会想到对元素设置 `className`，然后在样式表文件中制定对应的规则。

When we design a presentational Components with a certain appearance style, it's normal to use class selector to bind css rules to the elements.

```css
textarea.rc-MarkDown, section.rc-MarkDown {
    padding: 0.6rem 1rem;
    text-align: left;
    font-family: var(--sans-serif);
    /* more */
}
section.rc-MarkDown, {
    lineHeight: 1.5;
}
```

但是，这样带来另一个问题：按照 React 对组件复用的理念，我们希望能通过简单的 `import` 语句导入一个组件，在不同的环境中使用它。然而，如果我们像上面那样做，组件的样式与其渲染逻辑分离，就会面临不得不将样式文件一同导入的问题。

However, we always find that it makes our css file to long too maintain, while seperating it into independent files is not elegent, if you arenot used to tools such as **scss**. When we want to use the component somewhere, we cannot simply use `import` to get the depended style rules. That is unsuggested.

于是，我们又常常选择 **css in js**，把样式定义到标签里。

Thus, **css in js**. Define style in the jsx label, like

```jsx
<section
    style={
        padding: "0.6rem 1rem",
        textAlign: "left",
        fontFamily: "var(--sans-serif)",
        /* more */
    }
 />
```

这是一般组件开发时推崇的写法，但是它违背了样式的复用性，生成了很长的标签内容。

This is how we're supposed to do with React. However, it makes React to generate and differ a lots, ending up a complex (virtual) DOM element. Why don't we maintain the style as a whole rule? 

另一方面，我们希望对组件使用优雅的 **CSS 动画**，或者操作 **CSS 伪类**，这就让操作样式规则成为一个应考虑的方向。

On the other hand, we hope to use **CSS animation** and **pseudo-element selector**. This is impossible without style sheets.

为了更加优雅地编写样式，我想要在使用组件的同时，让它的样式依赖也一并生效。因此，我采用添加标签的方式，动态地将 js 中的样式信息添加到文档中。（*为什么使用 js 格式？*在 js 的格式下，我们更容易获取样式的类型信息，包括枚举，这也符合 react 的标签语法）

To create a better approach, I wanted to find out how to validated the depended style rules as the component is used. Similarly, use `className` to refer a style rule, and create new CSS style rules, inject them into `document`, all in one. It is supported to use js style key name such as `minWidth` and `fontFamily`, because you can get enough help when programming them in a js file, espacially with typescript. It also presentates the same as `React.CSSProperties`.




## Install

* **npm**

  `npm i -s reacss`
  
  

## Example

### Import

> ```tsx
> import { useStyleWrapper, createStyle, createAnimation, connectStyle } from 'reacss';
> ```



### Step1 - Create new css rules / animation keyframes

#### CSS rules

_**Important:**_

​	_This function will **automatically generates a className** ("s" + 8-bit hexadecimal, e.g. `s998c8ac9`), which is added on the elements in ths first level. **You don't need to worry about taking the same selector text as you've taken in other components**._

​	It works like:

![](https://pic3.zhimg.com/80/v2-ad324f87e08564ba347b66cd101dd94a_720w.jpg)

> > Use `createStyle` to get a property object.
> >
> > Better put it outside a component, and avoid using expressions when defining a rule.
> >
> > Then, do what you used to do - define the CSS rules in JSX style.

> ```tsx
> const style = createStyle({
>      "section": {
>         margin:   "16px auto",
>         border:   "1px solid white",
>         padding:  "4vh 6vw 2vh",
>         width:    "12vw",
>         color:    "white",
>         animation: fadeIn({ duration: "1s" })	// this is a string generator, I'll show you later
>      },
>      "section label": {
>        animation: paint({
>          duration: "1.2s",
>          iterationCount: "infinite",
>          timingFunction: "ease-in-out",
>          direction: "alternate"
>        })
>      }
>   });
> ```

#### Animation keyframes

> > Use `createAnimation`, it returns a function that receive partial config and generates formated value string for `animation` property.
> >
> > Check the code above to see how to use it.
> >
> > If you don't like to use generator, you can also use string yourself, just like
> >
> > ```typescript
> > { animation: "fade-in 1s" }	// the first arg of `createAnimation` 
> > ```

>```tsx
>const fadeIn = createAnimation("fade-in", {
>    "0%":   { filter: "blur(4px)" },
>    "100%": { filter: "blur(0)"   }
>});
>
>const paint = createAnimation("paint", {
>    "0%":   { color: "rgb(30,113,164)" },
>    "100%": { color: "rgb(71,196,255)" }
>});
>```

After this, you will get new HTMLStyleElement in the **head** node:

![](https://pic2.zhimg.com/80/v2-6a07f948c000124f5420d14943049279_720w.png)

Check the first rule item of `style#s998c8ac9` using dev tools:

![](https://pic1.zhimg.com/80/v2-90c476be3db3eae972669d8458ff6ac8_720w.jpg)

### Step2 [FC (Function Component)]

> > Use `useStyleWrapper` to get a Wrapper Component, passing the return value of `createStyle`.
> >
> > This container component won't create any additional DOM elements.

> ```tsx
> const BoxFC: React.FC = props => {
>      const StyleWrapper = useStyleWrapper(style);
>     
>      return (
>        <StyleWrapper>
>          <section>
>            <label>Functional Component</label>
>            <p>{ props.children }</p>
>          </section>
>        </StyleWrapper>
>     );
> };
> ```

It ends up like

![](https://pic4.zhimg.com/80/v2-ad0be663d6a6668e776f3dadcb656e53_720w.jpg)



### Step2 [CC (Class Component)]

#### Solution 1: HOC

> > Use `StyledWrapperCC` to create a Wrapper Component, passing the return value of `createStyle`.
> >
> > This container component won't create any additional DOM elements.

> ```tsx
> public render(): JSX.Element {
>   return (
>     <StyledWrapperCC { ...style } >
>       <section>
>         <label>Class Component</label>
>         <p>{ this.props.children }</p>
>       </section>
>     </StyledWrapperCC>
>   );
> }
> ```

#### Solution 2: Decorator

> > If you'd rather use a decorator than a HOC, I suggest using `connectStyle`, which effects with `render`.
> >
> > This container component won't create any additional DOM elements.

> ```tsx
> @connectStyle(style)
>   public render(): JSX.Element {
>      return (
>        <section>
>          <label>Class Component</label>
>          <p>{ this.props.children }</p>
>        </section>
>      );
>   }
> ```

