import React from "react";
import "./Section.css";

const Section = ({ users }) => {
  return (
    <div className="section">
      {users.map((item, i) => {
        console.log(item.name);
        return (
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              gap: "20px",
              fontSize: "22px",
              border: "2px solid black",
            }}
            key={item.id}
          >
            <p style={{ marginLeft: "15px" }}>{item.id}</p>
            <p>Name: {item.name}</p>
            <p>Surname: {item.lastName}</p>
            <p>Age: {item.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
