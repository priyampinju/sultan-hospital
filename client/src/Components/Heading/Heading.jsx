import React from "react";
import "./Heading.css";
import { Container } from "../AdminDashboard/Dashboard-styled";
// import AppointmentForm from "../FormAppointment/AppointmentForm";
const Heading = () => {
  return (
    <>
      <Container>
        <div className="flex-heading">
          <div class="leading-healthcare-excellence-container">
            <h1 class="leading-healthcare">
              <span class="leading">Leading </span>
              <span>Healthcare</span>
            </h1>
            <h1 class="excellence-in">Excellence in </h1>
            <h1 class="excellence-in">Morigaon</h1>
          </div>
          {/* <AppointmentForm /> */}
        </div>
      </Container>
    </>
  );
};

export default Heading;
