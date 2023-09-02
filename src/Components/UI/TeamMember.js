import React from "react";
import { BsPersonCircle, BsPersonDash, BsPersonGear } from "react-icons/bs";
const TeamMember = () => {
  return (
    <div className="d-flex justify-content-between mt-3 align-items-center p-2">
      <div left className="d-flex align-items-center justify-content-center">
        <div>
          <BsPersonCircle style={{ fontSize: "30px", marginRight: "8px" }} />
        </div>
        <div className="d-flex flex-column ">
          <p
            style={{
              padding: "0",
              margin: "0",
              fontWeight: "500",
              fontSize: "15px",
            }}
          >
            Mustafa Osama
          </p>
          <span style={{ color: "grey", fontSize: "12px" }}>
            Holding Company CEO
          </span>
        </div>
      </div>
      <div
        right
        className="d-flex justify-content-between align-items-center"
        style={{ width: "180px" }}
      >
        <p style={{ color: "#D75100" }}>Assignee</p>
        <BsPersonGear style={{ fontSize: "25px", marginBottom: "11px" }} />
        <BsPersonDash style={{ fontSize: "25px", marginBottom: "11px" }} />
      </div>
    </div>
  );
};

export default TeamMember;
