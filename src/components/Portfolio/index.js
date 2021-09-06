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
            style={{ width: "225px" }}
            src="https://tannercarter.github.io/tanner-carter-portfolio/assets/images/vod-on-demand.PNG"
            alt="VOD on Demand"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">VOD on Demand</MDBCardTitle>
            <MDBCardText>
            The goal of the VOD on demand to have an easy and simple way of finding the top streamer’s vods (I.E. the top clips) and saving the clips for future find.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/TannerCarter/twitch-vod-hype"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="https://user-images.githubusercontent.com/64516562/94870920-00858f80-0406-11eb-9891-00634c7764d1.PNG"
            alt="Budget"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Budget Tracker</MDBCardTitle>
            <MDBCardText>
              An app that allows the user to track their withdrawals and
              deposits with or without a data/internet connection
            </MDBCardText>
            <MDBBtn
              href="https://github.com/timanlemvo/Budget-Tracker-PWA"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src="https://user-images.githubusercontent.com/81401217/120935815-6cb54300-c6b9-11eb-9945-12e840645407.png"
            alt="Pointless-adventures"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Pointless Adventures</MDBCardTitle>
            <MDBCardText>
            The intention in building this applciaiton was to provide information on a travel destination including flights, weather and points of interest. We built the applciaiton in hopes of preventing packing mishaps before trips and to make sure no time goes to waste in newly trveled destinations by providing ideas on fun things to do.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Collin-Hodgson/WorkoutTracker"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>

      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "205px" }}
            src="https://user-images.githubusercontent.com/64516562/97790062-321b8300-1b8b-11eb-8a0e-079e54b31341.png"
            alt="Planner"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Day Planner</MDBCardTitle>
            <MDBCardText>
              This is a work day plan app. It has hours sections on it so when
              the user enters a description for each hour and save it the
              description will stay until erased.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/timanlemvo/work-day-schedual"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            src="https://user-images.githubusercontent.com/64516562/97790068-3a73be00-1b8b-11eb-94f9-459018a10c80.PNG"
            alt="Password"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Password Generator</MDBCardTitle>
            <MDBCardText>
              This app allows the user to generate a random password with
              criteria of their choosing. This app utilizes numbers, letters,
              and special characters.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/timanlemvo/pass-gen"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://user-images.githubusercontent.com/64516562/97785431-882bfe80-1b6a-11eb-8f73-a79d66dce85a.png"
            alt="Weather"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
            <MDBCardText>
              This website pulls data from an API to show the user the daily and
              five day forecast for any city on earth
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Collin-Hodgson/weatherdashboard"
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
