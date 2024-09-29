# Exercises

## Exercises: Level 1

What is the difference between a regular function and an arrow function?
> A regular function can be instantiated anywhere within the main scope of the code, as it is hoisted up to the top of the procedure. It also doesn't require any parameters.
> An arrow function has to be instantiated above anywhere it might be used, so it is good practice to write these at the top of code. It does however require a parameter/parameters.

What is a React Component?
> A small bit of reusable code which makes up a small part of the application UI.

How do you make a React functional component?
> Using a JavaScript function, which returns JSX (JavaScript XML).

What is the difference between a pure JavaScript function and a functional component?
> A functional component returns JSX (JavaScript XML), whereas a pure JS function returns a value (or in some cases nothing at all).

How small is a React component?
> It can be as big or as small as you like, but it is generally good practice to break the code down into many small components, each containing a tiny chunk of JSX for the UI.
> A 'small component' by definition is a component that returns just one HTML element as JSX.

Can we make a button or input field component?
> Yes!

Make a reusable Button component.
```
function Button() {
    return (
        <button className="btn">Press Me</button>
    )
}
```

Make a reusable InputField component.
```
function InputField() {
    return (
        <div className="input-field">
            <input type="text" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </div>
    )
}
```

Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
```
function AlertBox({ resRej }) {
    const msg = (bool) => {
        return bool === true ? "Success" : "Error"
    }

    return (
        <div>
            <p>{msg(resRej)}</p>
        </div>
    )
}
```

## Exercises: Level 2:

*I built them yesterday with functional components - whoops.*

## Exercises: Level 3:

*I built the second task yesterday with functional components - so I will just do the first.*
