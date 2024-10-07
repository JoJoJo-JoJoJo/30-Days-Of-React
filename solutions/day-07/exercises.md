# Exercises

How do you write a pure JavaScript function?
```
function myFunction(value) {
    return value
}
```

*OR*

```
const myFunction = (value) => {
    return value
}
```

What is inheritance and how do you make a child from a parent class?
> Inheritance is accessing the properties (i.e. the attributes and methods) of a parent class inside of a child class.

```
class Child extends Parent {
    constructor({ ...parentProps }, childProp) {
        super({ ...parentProps })
    }
}
```

What is a class-based React component?
> A react component that is made using a JavaScript class and it inherits from React Component.

What is the difference between functional React components and class-based React components?
> Functional React components have hooks that allow you to interact with state and life-cycle, whereas class-based components have built in methods for them, as well as render and constructor methods.

When do we need to use class-based components instead of functional components?
> You used to have to use class-based components for parent components, and also since only they used to have state and life-cycle methods. However, functional components can now do all of this, so they are not needed really apart from to have a deep understanding of React.

What is the use cases of class-based components?
> Lots of older code may need migration from class-based components to functional components, and a deeper understanding of them will help with that, as well as giving you a deeper understanding of how React works as a whole.

Which type of component do we use most frequently? Functional or class-based?
> Functional, as with the recent versions of React you can write every component in an application with them, rather than having to use class-based components for the parent components.
