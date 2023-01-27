import React from "react";
import ReactDOM from "react-dom/client";

import { employees } from "./details";
import Employee from "./employee";

function Staff() {
  return (
    <>
      <h1>Our Staff</h1><hr></hr>
      <h2>Name --- Designation</h2>
      <div>
        {employees.map((emp) => {
          return <Employee {...emp} key={emp.id} />;
        })}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Staff/>);
