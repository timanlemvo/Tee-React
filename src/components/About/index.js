import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="my-app/src/assets/images/Memoji.png"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Tima Nlemvo"
          />
          <p style={{ fontSize: "27px" }}>
            Hello, my name is Tima Nlemov.  I am
            actively looking for job opportunities as a remote Junior Web Developer or in Los Angeles.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
