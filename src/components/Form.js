import React, { useState, useEffect } from "react";
import axios from "axios"
import * as yup from "yup";

const Form = (props) => {

    const formSchema = yup.object().shape({
        fName: yup.string().required("First Name is a required field"),
        lName: yup.string().required("Last Name is a required field"),
        email: yup
          .string()
          .email("Must be a valid email address")
          .required("Must include email address"),
        size: yup.string().required("Must choose size for pizza"),
        sauce: yup.string().required("Must choose size for pizza"),
        pepperoni: yup.string().required(""),
        sausage: yup.string().required(""),
        olive: yup.string().required(""),
        greenpepper: yup.string().required(""),
        pineapple: yup.string().required(""),
        ham: yup.string().required(""),
        mushroom: yup.string().required(""),
        instruction: yup.string().required("Name is a required field"),
  



      });

    const [formState, setFormState] = useState({
        fName: "",
        lName: "",
        email: "",
        size: "",
        sauce:"",
        topping: "",
        instruction: "",
        quantity: ""
      });

      const [errorState, setErrorState] = useState({
        fName: "",
        lName: "",
        email: "",
        size: "",
        sauce:"",
        topping: "",
        instruction: "",
        quantity: ""
      });

      const validate = e => {
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup
          .reach(formSchema, e.target.name)
          .validate(value)
          .then(valid => {
            setErrorState({
              ...errorState,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrorState({
              ...errorState,
              [e.target.name]: err.errors[0]
            });
          });
      };

      const inputChange = e => {
        e.persist();
        // console.log("input changed!", e.target.value, e.target.checked);
        validate(e);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
      };

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
        axios
          .post("https://reqres.in/api/users", formState)
          .then(response => {

                console.log(response.data);
              props.updateOrder(response.data);
              props.history.push('/order');
          })
          .catch(err => console.log(err));
      };

    return (
      <div>
        <h2>Build Your Own Pizza</h2>
        <form onSubmit={formSubmit}>
            <label htmlFor="fName">
                First Name
                <input 
                type="text"
                name="fName"
                id="fName"
                value={formState.fName}
                onChange={inputChange}
                data-cy="fName"
                />
            </label>
            <label htmlFor="lName">
                Last Name
                <input 
                type="text"
                name="lName"
                id="lName"
                value={formState.lName}
                onChange={inputChange}
                />
            </label>
            <label htmlFor="email">
                Email
                <input 
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={inputChange}
                />
                {errorState.email.length > 0 ? (
                <p className="error">{errorState.email}</p>
                ) : null}
            </label>
            <label htmlFor="size">
                Choice Of Size:
                <select
                              value={formState.size}
                              name="size"
                              id="size"
                              onChange={inputChange}
                >
                    <option value="">Please Select Size</option>
                    <option value="Small Pizza">Small</option>
                    <option value="Medium Pizza">Medium</option>
                    <option value="Large Pizza">Large</option>
                </select>
            </label>
            <label>
                Choice Of Sauce:
                <select
                              value={formState.sauce}
                              name="sauce"
                              id="sauce"
                              onChange={inputChange}
                >
                    <option value="">Please Select Sauce</option>
                    <option value="Original Red">Original Red</option>
                    <option value="Garlic Ranch">Garlic Ranch</option>
                    <option value="BBQ Sauce">BBQ Sauce</option>
                    <option value="Spinach Alfredo">Spinach Alfredo</option>
                </select>
            </label>
            <div>
            <label>
                <input 
                    type="checkbox"
                    id="pepperoni"
                    name="pepperoni"
                    checked={formState.pepperoni}
                    onChange={inputChange}
                />
                
                Pepperoni
            </label>
            <label>
                <input 
                    type="checkbox"
                    id="sausage"
                    name="sausage"
                    checked={formState.sausage}
                    onChange={inputChange}
                />
                
                Sausage
            </label>
            <label>
                <input 
                    type="checkbox"
                    id="olive"
                    name="olive"
                    checked={formState.olive}
                    onChange={inputChange}
                />
                
                Olive
            </label>
            <label>
                <input 
                    type="checkbox"
                    id="greenpepper"
                    name="greenpepper"
                    checked={formState.greenpepper}
                    onChange={inputChange}
                />
                
                Green Pepper
            </label>
            <label>
                <input 
                    type="checkbox"
                    id="pineapple"
                    name="pineapple"
                    checked={formState.pineapple}
                    onChange={inputChange}
                />
                
                Pineapple
            </label>
            <label>
                <input 
                    type="checkbox"
                    id="ham"
                    name="ham"
                    checked={formState.ham}
                    onChange={inputChange}
                />
                
                Ham
            </label>
            <label>
                <input 
                    type="checkbox"
                    id="mushroom"
                    name="mushroom"
                    checked={formState.mushroom}
                    onChange={inputChange}
                />
                
                Mushroom
            </label>
            </div>
            <label>
                Special Instructions:
                <textarea 
                    name="Instruction"
                    id="Instruction"
                    value={formState.instruction}
                    onChange={inputChange}
                />
            </label>
            <label>
                <input 
                    type="number"
                />
            </label>
            <button>Add to Order</button>
        </form>
      </div>
    );
  };
  export default Form;