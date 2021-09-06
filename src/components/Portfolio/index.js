import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";


const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="https://github.com/AtimaB/The-Fight-Club/raw/master/public/assets/images/welcomePage.png"
            alt="Fight Club"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">The Fight Club</MDBCardTitle>
            <MDBCardText>
              As gamers we wanted to create a game that we could play with our
              friends and share with others so they could play with their
              friends
            </MDBCardText>
            <MDBBtn
              href="https://github.com/AtimaB/The-Fight-Club"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
