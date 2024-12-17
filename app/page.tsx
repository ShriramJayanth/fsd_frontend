"use client";
import Image from "next/image";
import { use, useState } from "react";

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

  const removeErr=()=>{
    setFirstNameErr("");
    setLastNameErr("");
    setEmployeeIDErr("");
    setEmailErr("");
    setPhoneNumberErr("");
    setDepartmentErr("");
    setdojErr("");
    setRoleErr("");
  }

  const checkVals=()=>{
    removeErr();
    if(FirstName.trim().length==0)setFirstNameErr("FirstName must not be empty");
    if(LastName.trim().length==0)setLastNameErr("LastName must not be empty");
    if(EmployeeID.trim().length==0)setEmployeeIDErr("LastName must not be empty");
    if(Email.trim().length==0){
      setEmailErr("Email must not be empty");
    }
    if(PhoneNumber.trim().length==0)setPhoneNumberErr("Phone number must not be empty");
  }

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
            <div>{FirstNameErr}</div>
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
            <div>{LastNameErr}</div>
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
            <div>{EmployeeIDErr}</div>
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
            <div>{EmailErr}</div>
          </div>
          <div className="h-[7%] w-[80%]">
            <div>PhoneNumber</div>
            <input
            value={PhoneNumber}
              className="h-[75%] w-[100%] rounded-md p-4 text-black"
              placeholder="PhoneNumber"
              onChange={(e)=>{
                setPhoneNumber(e.target.value);
              }}
            ></input>
            <div>{PhoneNumberErr}</div>
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
            <div>{DepartmentErr}</div>
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
            <div>{dojErr}</div>
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
            <div>{RoleErr}</div>
          </div>
          <div className="h-[7%] w-[80%] flex justify-between items-center ">
            <button className="h-[100%] w-[45%] bg-slate-300 text-black" onClick={()=>{
              setDepartment("");
              setRole("")
              setEmail("");
              setFirstName("");
              setLastName("");
              setEmployeeID("");
              setPhoneNumber("");
              setdoj("");
            }}>
              RESET
            </button>
            <button className="h-[100%] w-[45%] bg-slate-300 text-black" onClick={()=>{
            }}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// console.log({
//   id:EmployeeID,
//   firstName:FirstName,
//   lastName:LastName,
//   email:Email,
//   role:Role,
//   department:Department,
//   dateOfJoining:doj,
// })