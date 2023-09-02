import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Row,
  Col,
  Input,
} from "reactstrap";
import FormInput from "./FormInput";
import MultiSelectDropdown from "./MultiSelectDropdown";
const optionStyle = {
  textAlign: "center",
};

const options = ["Mustafa Osama", "Ahmed Khaled", "Ramadan hassan"];
const tagsOptions = ["Tag1", "Tag2", "Tag3"];

const OpportunityForm = () => {
  return (
    <Form>
      <Row>
        {/* The Left Column */}
        <Col md={6}>
          <FormInput
            label="Email"
            id="email"
            name="email"
            placeholder="Please Type Your Email"
            type="email"
          />
          <FormGroup>
            <Label style={{fontSize : "14px" , fontWeight : "700" , color : "#666F7C"}} for="exampleSelect" sm={2} md={0}>
              Asignee
            </Label>
            <Col sm={10}>
              <Input
                style={optionStyle}
                id="exampleSelect"
                name="select"
                type="select"
              >
                <option>Mustafa Osama</option>
                <option>Ahmed Khaled</option>
                <option>Ibrahim Ahmed</option>
              </Input>
            </Col>
          </FormGroup>
          <FormInput
            label="Value"
            id="value"
            name="value"
            placeholder="Please Type Your Value"
            type="number"
            min={1}
          />
          <FormInput
            label="Client Budget"
            id="budget"
            name="budget"
            placeholder="Please Type Your Budget"
            type="number"
            min={1}
          />
          <FormInput
            label="Personal Submission Date"
            id="dateTime"
            name="dateTime"
            type="date"
          />
          <FormInput label="Due Date" id="dueDate" name="dueDate" type="date" />
        </Col>

        {/* The Right Column */}
        <Col md={6}>
          <FormGroup>
            <Label style={{fontSize : "14px" , fontWeight : "700" , color : "#666F7C"}} for="stageSelect" sm={2} md={0}>
              Stage
            </Label>
            <Col sm={10}>
              <Input
                style={optionStyle}
                id="stageSelect"
                name="select"
                type="select"
              >
                <option>Discover</option>
                <option>Example 2</option>
                <option>Example 3</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label style={{fontSize : "14px" , fontWeight : "700" , color : "#666F7C"}} for="companySelect" sm={2} md={0}>
              Company
            </Label>
            <Col sm={10}>
              <Input
                style={optionStyle}
                id="companySelect"
                name="select"
                type="select"
              >
                <option>Holding Company</option>
                <option>Example 2</option>
                <option>Example 3</option>
              </Input>
            </Col>
          </FormGroup>

          <MultiSelectDropdown title="Client" options={options} />
          <MultiSelectDropdown title="Contacts" options={options} />

          <FormGroup>
            <Label style={{fontSize : "14px" , fontWeight : "700" , color : "#666F7C"}} for="companySelect" sm={2} md={0}>
              Incoming/Outgoing
            </Label>
            <Col sm={10}>
              <Input
                style={optionStyle}
                id="companySelect"
                name="select"
                type="select"
              >
                <option>Incoming</option>
                <option>Outgoing</option>
                <option>Example</option>
              </Input>
            </Col>
          </FormGroup>

          <MultiSelectDropdown title="Tags" options={tagsOptions} />
        </Col>
      </Row>
    </Form>
  );
};

export default OpportunityForm;
