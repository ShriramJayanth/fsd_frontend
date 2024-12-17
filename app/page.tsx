"use client";
import { useState } from "react";

export default function Home() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [EmployeeID, setEmployeeID] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Department, setDepartment] = useState("");
  const [doj, setdoj] = useState("");
  const [Role, setRole] = useState("");
  const [FirstNameErr, setFirstNameErr] = useState("");
  const [LastNameErr, setLastNameErr] = useState("");
  const [EmployeeIDErr, setEmployeeIDErr] = useState("");
  const [EmailErr, setEmailErr] = useState("");
  const [PhoneNumberErr, setPhoneNumberErr] = useState("");
  const [DepartmentErr, setDepartmentErr] = useState("");
  const [dojErr, setdojErr] = useState("");
  const [RoleErr, setRoleErr] = useState("");

  const removeErr = () => {
    setFirstNameErr("");
    setLastNameErr("");
    setEmployeeIDErr("");
    setEmailErr("");
    setPhoneNumberErr("");
    setDepartmentErr("");
    setdojErr("");
    setRoleErr("");
  };

  const removeVals=()=>{
    setDepartment("");
    setRole("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setEmployeeID("");
    setPhoneNumber("");
    setdoj("");
  }

  const checkVals = () => {
    removeErr();
    let flag = true;
    if (FirstName.trim().length == 0) {
      setFirstNameErr("FirstName must not be empty");
      flag = false;
    }
    if (LastName.trim().length == 0) {
      setLastNameErr("LastName must not be empty");
      flag = false;
    }
    if (EmployeeID.trim().length == 0) {
      setEmployeeIDErr("LastName must not be empty");
      flag = false;
    }
    if (Email.trim().length == 0) {
      setEmailErr("Email must not be empty");
      flag = false;
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      setEmailErr("Enter a valid Email Id");
      flag = false;
    }
    if (PhoneNumber.trim().length == 0) {
      setPhoneNumberErr("Phone number must not be empty");
      flag = false;
    }
    else if(!/^\d{10}$/.test(PhoneNumber)){
      setPhoneNumberErr("Enter a valid phone number");
      flag=false;

    }
    if (Department == "Choose a Department" || Department.length == 0) {
      setDepartmentErr("Department must not be empty");
      flag = false;
    }
    if (Role == "Choose a role" || Role.length == 0) {
      setRoleErr("Department must not be empty");
      flag = false;
    }
    if (doj.length == 0) {
      setdojErr("DateOfJoining must not be empty");
      flag = false;
    }
    return flag;
  };

  return (
    <div className="h-[100vh] w-[100%] bg-gray-700">
      <div className="h-[10%] w-[100%] flex">
        <div className="h-[100%] w-[10%] bg-gray-700 flex items-center justify-center">
          Add Employee
        </div>
        <div className="h-[100%] w-[10%] bg-gray-700 flex items-center justify-center">
          View Employees
        </div>
      </div>
      <hr></hr>
      <div className="h-[90%] w-[100%] flex items-center justify-center">
        <div className="h-[95%] w-[35%] outline-double flex flex-col items-center justify-around gap-4">
          <div className="h-[7%] w-[80%]">
            <div>FirstName</div>
            <input
              value={FirstName}
              className="h-[75%] w-[100%] rounded-md p-4 text-black"
              placeholder="FirstName"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            ></input>
            <div className="text-red-400">{FirstNameErr}</div>
          </div>
          <div className="h-[7%] w-[80%]">
            <div>LastName</div>
            <input
              value={LastName}
              className="h-[75%] w-[100%] rounded-md p-4 text-black"
              placeholder="LastName"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            ></input>
            <div className="text-red-400">{LastNameErr}</div>
          </div>
          <div className="h-[7%] w-[80%]">
            <div>EmployeeID</div>
            <input
              value={EmployeeID}
              className="h-[75%] w-[100%] rounded-md p-4 text-black"
              placeholder="EmployeeID"
              onChange={(e) => {
                setEmployeeID(e.target.value);
              }}
            ></input>
            <div className="text-red-400">{EmployeeIDErr}</div>
          </div>
          <div className="h-[7%] w-[80%]">
            <div>Email</div>
            <input
              value={Email}
              className="h-[75%] w-[100%] rounded-md p-4 text-black"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <div className="text-red-400">{EmailErr}</div>
          </div>
          <div className="h-[7%] w-[80%]">
            <div>PhoneNumber</div>
            <input
              value={PhoneNumber}
              className="h-[75%] w-[100%] rounded-md p-4 text-black"
              placeholder="PhoneNumber"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            ></input>
            <div className="text-red-400">{PhoneNumberErr}</div>
          </div>
          <div className="h-[9%] w-[80%]">
            <div>Department</div>
            <select
              value={Department}
              className="h-[75%] w-[100%] rounded-md p-4 text-black"
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
            >
              <option>Choose a Department</option>
              <option>Development</option>
              <option>Testing</option>
              <option>Design</option>
            </select>
            <div className="text-red-400">{DepartmentErr}</div>
          </div>
          <div className="h-[7%] w-[80%] ">
            <div>DateOfJoining</div>
            <input
              value={doj}
              type="date"
              max={new Date().toISOString().substring(0, 10)}
              className="h-[75%] w-[100%] rounded-md p-4 text-black"
              placeholder="DateOfJoining"
              onChange={(e) => {
                setdoj(e.target.value);
              }}
            ></input>
            <div className="text-red-400">{dojErr}</div>
          </div>
          <div className="h-[9%] w-[80%] ">
            <div>Role</div>
            <select
              value={Role}
              className="h-[75%] w-[100%] rounded-md p-4 text-black"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option>Choose a role</option>
              <option>Developer</option>
              <option>Manager</option>
              <option>TeamLead</option>
            </select>
            <div className="text-red-400">{RoleErr}</div>
          </div>
          <div className="h-[7%] w-[80%] flex justify-between items-center ">
            <button
              className="h-[100%] w-[45%] bg-slate-300 text-black"
              onClick={() => {
                removeErr();
                removeVals();
              }}
            >
              RESET
            </button>
            <button
              className="h-[100%] w-[45%] bg-slate-300 text-black"
              onClick={async() => {
                if (checkVals()) {
                  // console.log({
                  //   id: EmployeeID,
                  //   firstName: FirstName,
                  //   lastName: LastName,
                  //   email: Email,
                  //   role: Role,
                  //   department: Department,
                  //   dateOfJoining: doj,
                  // });
                  const response = await fetch("http://13.127.235.22:3002/employee/add", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      id: EmployeeID,
                      firstName: FirstName,
                      lastName: LastName,
                      email: Email,
                      role: Role,
                      department: Department,
                      dateOfJoining: doj,
                    }),
                  });
                  if(!response.ok){
                    alert("error in DB, please try again later");
                    return;
                  }

                  const result = await response.json();
                  if(result.message=="User already exists"){
                    alert("User already exists");
                    return;
                  }
                  alert(result.message);
                  removeVals();
                }
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
