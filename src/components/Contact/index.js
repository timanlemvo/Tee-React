import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />

          <h4>
            I have linked my e-mail and cell phone number.
            Please feel free to contact me at any time and if I do not
            immediately respond I will respond within the next buisness day.
            Thank you!
          </h4>
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:661-492-0497">
            <MDBIcon icon="phone-alt" /> 661-492-0497
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:TimaNlemvo">
            <MDBIcon icon="envelope" /> TimaNlemvo@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
