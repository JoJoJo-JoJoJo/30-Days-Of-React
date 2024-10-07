import { useState, useRef } from "react";
import "./App.css";
import FormGroup from "./FormGroup.jsx";

export default function App() {
  const title = useRef();
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cool: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is the place where I connect a backend API to send the data to the database.
    title.current.innerText = `WELCOME ${info.firstName} ${info.lastName}!${
      info.cool ? "YOU ARE REALLY COOL!" : ""
    }`
  }

  const errors = {
    email: ""
  }

  const validate = () => {
    if (info.email.includes("@")) {
      errors.email = "Invalid email."
    }

    return errors
  }

  const handleChange = (key, value) => {
    setInfo({
      ...info,
      [key]: value
    });
    validate();
  }

  return (
    <div className="app">
      <h1 className="title" ref={title}>{"Create Account (Validation)"}</h1>
      <form onSubmit={handleSubmit} noValidate>
        <FormGroup
          handleChange={handleChange}
          infoProp={info.firstName}
          type={"text"}
          errors={errors?.firstName}
        />
        <FormGroup
          handleChange={handleChange}
          infoProp={info.lastName}
          type={"text"}
          errors={errors?.lastName}
        />
        <FormGroup
          handleChange={handleChange}
          infoProp={info.email}
          type={"text"}
          errors={errors?.email}
        />
        <FormGroup
          handleChange={handleChange}
          infoProp={info.cool}
          type={"button"}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
