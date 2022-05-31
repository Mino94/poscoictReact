import React, { useState } from "react";
import "../style/Form.css";

export const Form = () => {
  const [form, setForm] = useState({
    id: "",
    password: "",
    gender: "",
    email: "",
    age: "",
  });

  const genderList = [
    { name: "남자", value: 1 },
    { name: "여자", value: 2 },
  ];

  const onSubmit = () => {
    console.log(form);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // 중요!!!!!!
    // console.log({ ...form, [name]: value });
    console.log({ [name]: value});
    // console.log({value});
  };

  return (
    <div>
      <div className="flexBox">
        <p>ID: </p>
        <input
          type={"text"}
          name="id"
          value={form.id}
          onChange={(e) => onChangeHandler(e)}
        ></input>
      </div>
      <div className="flexBox">
        <p>Password: </p>
        <input
          type={"password"}
          name="password"
          value={form.password}
          onChange={(e) => onChangeHandler(e)}
        ></input>
      </div>
      <div className="flexBox">
        <p>성별: </p>
        <select
          name="gender"
          onChange={(e) => onChangeHandler(e)}
          value={form.gender}
        >
          {genderList.map((data) => (
            <option value={data.value} key={data.name}>
              {data.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flexBox">
        <p>나이: </p>
        <input
          type={"text"}
          name="age"
          value={form.age}
          onChange={(e) => onChangeHandler(e)}
        ></input>
      </div>
      <div className="flexBox">
        <p>email: </p>
        <input
          type={"text"}
          name="email"
          value={form.email}
          onChange={(e) => onChangeHandler(e)}
        ></input>
      </div>

      <button onClick={onSubmit}>submit</button>
    </div>
  );
};