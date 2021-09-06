import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <p style={{ fontSize: "27px" }}>
            Hello, my name is Tima Nlemvo. I am actively looking for job opportunities as a Junior Web Developer remotely or in the Los Angeles Area.           </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;


