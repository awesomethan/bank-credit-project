import React, { useState, useEffect } from "react";
function Home() {
  const [data, setData] = useState({
    name: "",
    gender: "male",
    car: true,
    property: true,
    children: 0,
    income: 0,
    incomeCategory: "working",
    education: "secondary",
    marital: "married",
    housing: "house",
    birthDate: "",
    monthEmployed: "",
    phone: true,
    email: true,
    occupation: "",
    family: 1,
  });
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  async function submit(e) {
    e.preventDefault();
    if (data.name == '' || data.birthDate == '' || data.monthEmployed == '' || data.occupation == '') {
      setError("Please fill in all the fields as all the information is required.")
    }  else  {  
      fetch("/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      fetch("/test2")
      .then((res) =>
         res.json())
      .then((text) => {
        console.log('GET response:');
        console.log(text); 
        
      });
    }}

  //

  return (
    <div>
      <form>
        <fieldset className="container">
          <legend className="title">Personal Information</legend>
          <div className="section">
            <label htmlFor="name" className="heading">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="text-box box-size-1"
            ></input>
          </div>
          <div className="section">
            <label htmlFor="gender-list" className="heading">
              Gender
            </label>
            <select
              name="gender-list"
              id="gender-list"
              value={data.gender}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
              className="text-box text"
            >
              <optgroup>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </optgroup>
            </select>
          </div>
          <div className="section">
            <label className="heading">Do you own a car?</label>
            <input
              type="radio"
              checked="checked"
              id="yes"
              name="car"
              value={true}
              onChange={(e) => setData({ ...data, car: true })}
            ></input>
            <label htmlFor="yes" className="text">
              Yes
            </label>
            <input
              type="radio"
              id="no"
              name="car"
              value={false}
              onChange={(e) => setData({ ...data, car: false })}
            ></input>
            <label htmlFor="no" className="text">
              No
            </label>
          </div>
          <div className="section">
            <label className="heading">Do you own a property?</label>
            <input
              type="radio"
              checked="checked"
              id="yes"
              name="property"
              value={true}
              onChange={(e) => setData({ ...data, property: true })}
            ></input>
            <label htmlFor="yes" className="text">
              Yes
            </label>
            <input
              type="radio"
              id="no"
              name="property"
              value={false}
              onChange={(e) => setData({ ...data, property: false })}
            ></input>
            <label htmlFor="no" className="text">
              No
            </label>
          </div>
          <div className="section">
            <label htmlFor="children" className="heading">
              How many children do you have?
            </label>
            <input
              type="number"
              name="children"
              id="children"
              min={0}
              max={20}
              value={data.children}
              onChange={(e) => setData({ ...data, children: e.target.value })}
              className="text-box box-size-3"
            ></input>
          </div>
          <div className="section">
            <label htmlFor="income" className="heading">
              What is your annual income?
            </label>
            <input
              type="number"
              name="income"
              id="income"
              min={0}
              value={data.income}
              onChange={(e) => setData({ ...data, income: e.target.value })}
              className="text-box box-size-2"
            ></input>
          </div>
          <div className="section">
            <label htmlFor="income-list" className="heading">
              What is your income category?
            </label>
            <select
              name="income-list"
              id="income-list"
              className="text-box text"
              onChange={(e) =>
                setData({ ...data, incomeCategory: e.target.value })
              }
            >
              <optgroup>
                <option value="working">Working</option>
                <option value="commercial">Commercial Associate</option>
                <option value="pensioner">Pensioner</option>
                <option value="state servant">State Servant</option>
                <option value="student">Student</option>
                <option value="unemployed">Unemployed</option>
                <option value="businessman">Businessman</option>
                <option value="maternity">Maternity Leave</option>
              </optgroup>
            </select>
          </div>
          <div className="section">
            <label htmlFor="education-list" className="heading">
              What is your education level?
            </label>
            <select
              name="education-list"
              id="education-list"
              onChange={(e) => setData({ ...data, education: e.target.value })}
              className="text-box text"
            >
              <optgroup>
                <option value="secondary">Secondary</option>
                <option value="higher education">Higher Education</option>
                <option value="incomplete higher">Incomplete Higher</option>
                <option value="lower secondary">Lower Secondary</option>
                <option value="academic degree">Academic Degree</option>
              </optgroup>
            </select>
          </div>
          <div className="section">
            <label htmlFor="marital-list" className="heading">
              What is your marital status?
            </label>
            <select
              name="marital-list"
              id="marital-list"
              onChange={(e) => setData({ ...data, marital: e.target.value })}
              className="text-box text"
            >
              <optgroup>
                <option value="married">Married</option>
                <option value="single">Single/Not Married</option>
                <option value="civil marriage">Civil Marriage</option>
                <option value="separated">Separated</option>
                <option value="widow">widow</option>
              </optgroup>
            </select>
          </div>
          <div className="section">
            <label htmlFor="housing-list" className="heading">
              What is your housing type?
            </label>
            <select
              name="housing-list"
              id="housing-list"
              onChange={(e) => setData({ ...data, housing: e.target.value })}
              className="text-box text"
            >
              <optgroup>
                <option value="house">House/Apartment</option>
                <option value="parents">With Parents</option>
                <option value="municipal">Municipal Apartment</option>
                <option value="rented">Rented Apartment</option>
                <option value="office">Office Apartment</option>
                <option value="co-op">Co-op Apartment</option>
              </optgroup>
            </select>
          </div>
          <div className="section">
            <label htmlFor="month" className="heading">
              When were you born?
            </label>
            <input
              type="month"
              name="month"
              id="month"
              value={data.birthDate}
              onChange={(e) => setData({ ...data, birthDate: e.target.value })}
              className="text-box"
            />
          </div>
          <div className="section">
            <label htmlFor="employment" className="heading">
              What month was your first date of employment?
            </label>
            <input
              type="month"
              name="employment"
              id="employment"
              value={data.monthEmployed}
              onChange={(e) =>
                setData({ ...data, monthEmployed: e.target.value })
              }
              className="text-box"
            />
          </div>
          <div className="section">
            <label className="heading">Do you have a mobile phone?</label>
            <input
              type="radio"
              checked="checked"
              id="yes"
              name="phone"
              value={true}
              onChange={(e) => setData({ ...data, phone: true })}
            ></input>
            <label htmlFor="yes" className="text">
              Yes
            </label>
            <input
              type="radio"
              id="no"
              name="phone"
              value={false}
              onChange={(e) => setData({ ...data, phone: false })}
            ></input>
            <label htmlFor="no" className="text">
              No
            </label>
          </div>
          <div className="section">
            <label className="heading">Do you have an email?</label>
            <input
              type="radio"
              checked="checked"
              id="yes"
              name="email"
              value={true}
              onChange={(e) => setData({ ...data, email: true })}
            ></input>
            <label htmlFor="yes" className="text">
              Yes
            </label>
            <input
              type="radio"
              id="no"
              name="email"
              value={false}
              onChange={(e) => setData({ ...data, email: false })}
            ></input>
            <label htmlFor="no" className="text">
              No
            </label>
          </div>
          <div className="section">
            <label htmlFor="occupation" className="heading">
              What is your occupation?
            </label>
            <input
              type="text"
              name="occupation"
              id="occupation"
              value={data.value}
              onChange={(e) => setData({ ...data, occupation: e.target.value })}
              className="text-box box-size-1"
            ></input>
          </div>
          <div className="section">
            <label htmlFor="family" className="heading">
              How many people are in your family?
            </label>
            <input
              type="number"
              name="family"
              id="family"
              value={1}
              onChange={(e) => setData({ ...data, family: e.target.value })}
              className="text-box box-size-3"
            ></input>
          </div>
          <div className="button-container">
            <button type="reset" className="button">
              Reset
            </button>
            <button onClick={submit} className="button">
              Submit!
            </button>
          </div>
          <p className="error-msg">{error}</p>
        </fieldset>
      </form>
    </div>
  );
}

export default Home;
