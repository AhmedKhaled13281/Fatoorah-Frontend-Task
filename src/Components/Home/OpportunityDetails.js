import React, { useState } from "react";
import {
  BsBag,
  BsFillFileEarmarkPostFill,
  BsTelephone,
  BsPeople,
  BsSave,
} from "react-icons/bs";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
} from "reactstrap";

import Nav from "../../Layout/Nav";
import OpportunityForm from "../UI/Form";

const OpportunityDetails = () => {
  return (
    <>
      <section
        style={{
          borderRadius: "8px",
          backgroundColor: "white",
          boxShadow: `rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`,

        }}
      >
        <Nav title="OpportunityDetails" buttonName="Save Opportunity" />
        <div style={{ width : "80%" , margin : "0 auto"}}>

          <OpportunityForm />
        </div>
      </section>
    </>
  );
};

export default OpportunityDetails;
