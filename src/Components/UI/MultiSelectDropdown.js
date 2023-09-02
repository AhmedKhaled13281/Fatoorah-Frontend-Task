import React, { useState } from "react";
import { Badge, FormGroup, Label, Input, Col } from "reactstrap";
import { BsPersonCircle, BsTelephone } from "react-icons/bs";

const optionIcons = {
  Client: <BsPersonCircle style={{ marginRight: "10px" }} />,
  Contacts: <BsTelephone style={{ marginRight: "10px" }} />,
};

function MultiSelectDropdown({ title, options }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (selectedItems.includes(value)) {
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item !== value)
      );
    } else {
      setSelectedItems((prevItems) => [...prevItems, value]);
    }
  };

  return (
    <div>
      <FormGroup>
        <Label style={{fontSize : "14px" , fontWeight : "700" , color : "#666F7C"}} for="exampleSelectMulti">{title}</Label>
        <Col sm={10}>
          <>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              onChange={handleSelectChange}
            >
              {options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </Input>
            <div className="optionHeight">
              {selectedItems.length > 0 &&
                selectedItems.map((item, idx) => (
                  <Badge key={idx} color="secondary" style={{ margin: "5px" }}>
                    <div>
                      {optionIcons[title]}
                      {item}
                    </div>
                  </Badge>
                ))}
            </div>
          </>
        </Col>
      </FormGroup>
    </div>
  );
}

export default MultiSelectDropdown;
