import React, { useState } from "react";
import "./Style.css";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <form action="#" onSubmit={submitForm}>
        <h1 className="title">customer login</h1>
        <div className="username">
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>
        <input type="submit" className="btn" value="login" />
      </form>
    </>
  );
}

export default Form;
