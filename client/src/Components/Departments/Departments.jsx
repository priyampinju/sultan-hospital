import React from "react";
import { useNavigate } from "react-router-dom";
import "./Departments.css";

const Box2 = () => {
  const navigate = useNavigate();

  const departments = [
    "NEUROLOGY",
    "CARDIOLOGY",
    "UROLOGY",
    "ORTHOPEDICS",
    "GYNECOLOGY",
    "MEDICINE",
    "PATHOLOGY",
    "PEDIATRICS",
    "ENDOCRINOLOGY",
    "ANESTHESIOLOGY",
    "SURGERY",
    "PHYSIOTHERAPY",
  ];

  const handleDepartmentClick = (department) => {
    navigate(`/doctors/${department}`);
  };

  return (
    <div className="why-choose-us">
      <div class="why-choose-us-left">
        <h3>Departments</h3>

        <div class="why-choose-box-container">
          {departments.map((department, index) => (
            <div
              class="why-choose-box"
              key={index}
              onClick={() => handleDepartmentClick(department)}
            >
              <div class="why-choose-box-text">
                <strong>{department}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Box2;
