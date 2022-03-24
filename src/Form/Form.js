import React, { useState } from "react";
import classes from "./Form.module.css";

function Form() {
  const [formData, setFormData] = useState({
    Username: "",
    Date: "",
    Education: "",
    Gender: "",
    Language:"",
    Textarea: ""
  });
 

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const {value, name  } = e.target;

    
    setFormData({ ...formData, [name]: value });
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newReccord = { ...formData };
    setRecords([...records, newReccord]);
    console.log(records);
    alert("Form Data :" + formData.Username + " " + formData.Date+ " " + formData.Education + " " + formData.Gender+
    " " + formData.Language + " " + formData.Textarea)
  };
  const handleReset = () =>{
    setFormData('')

    setFormData({...formData,Textarea:"", Username:'', Date:''})
  }

  return (
    <div  className={classes.containerDiv}>
      <div className={classes.mainDiv}>
        <form  onSubmit={handleSubmit}>
          <h1> Contact </h1>
          <label  >Username :</label>
          <input
            style={{ width: "80%" }}
            required minLength={5}
            type="text"
            name="Username"
            value={formData.Username}
            class="form-control"
            id="floatingInput"
            placeholder="username"
         
            onChange={handleChange}
          />
          
          <label htmlFor="">DOB</label>
          <input
            style={{ width: "50%" }}
            type="date"
            name="Date"
            value={formData.Date}
            class="form-control"
            id="floatingInput"
            placeholder="DoB"
            onChange={handleChange}
          />
          <label >Education Qualification :</label>
          <select
            
            name="Education"
            value={formData.Education}
            onChange={handleChange}
          >
              <option  value="choose" >choose</option>
            <option  value="b.tech">
              B.tech
            </option>
            <option  value="b.e">
              B.E
            </option>
            <option  value="b.sce">
              B.sc
            </option>
          </select>
          <br />
          <label >Gender :</label>
          <div class="form-check ">
            <input
              class="form-check-input"
              type="radio"
              name="Gender"
              value="Male"
              id="flexRadioDefault"
              onChange={handleChange}
            /> Male
            
            <br />
            <input
              class="form-check-input"
              type="radio"
              name="Gender"
              value="Female"
              id="flexRadioDefault"
              onChange={handleChange}
            /> Female
            
          </div>
          <label htmlFor="">Languages Known :</label>
          <div class="form-check ">
        
            <input
            
              class="form-check-input"
              type="checkbox"
              value="English"
              name="Language"
              
              onChange={handleChange}
            /> English
            <br />
            <input
            
            class="form-check-input"
            type="checkbox"
            value="Hindi"
            name="Language"
            
            onChange={handleChange}
          /> Hindi

          

          </div>
          <label htmlFor="">About :</label> <br />
          <textarea
            style={{ width: "80%" }}
            name="Textarea"
            value={formData.Textarea}
            id=""
            cols="20"
            rows="3"
            onChange={handleChange}
          ></textarea>
          <br />
          <div class="col-12 m-2">
            <button class="btn btn-primary m-1" type="submit">
              Submit
            </button>
            <button onClick={handleReset} type="reset"  value="reset" class="btn btn-danger"   >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
