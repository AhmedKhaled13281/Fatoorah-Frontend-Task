import React from 'react'
import { BsBag , BsFillFileEarmarkPostFill , BsTelephone , BsPeople , BsSave , BsPlus} from "react-icons/bs";
import {
  Button,
  Container,
} from 'reactstrap';

const titleIcons = {
    OpportunityDetails : <BsBag className="mt-1" style={{ marginRight: "10px" }} />,
    Files : <BsFillFileEarmarkPostFill className="mt-1" style={{ marginRight: "10px" }} />,
    Contact : <BsTelephone className="mt-1" style={{ marginRight: "10px" }} />,
    TeamSpace : <BsPeople className="mt-1" style={{ marginRight: "10px" }} />,
}

const buttonIcons = {
    OpportunityDetails : <BsSave style={{ marginRight: "10px" }}/>,
    Files : <BsPlus style={{ marginRight: "10px" , fontSize : "22px"}}/>,
    Contact : <BsPlus style={{ marginRight: "10px" , fontSize : "22px"}}/>,
    TeamSpace : <BsPlus style={{ marginRight: "10px" , fontSize : "22px"}}/>,
}

const Nav = ({title , buttonName}) => {
  return (
    <div
      className="d-flex justify-content-between mt-3 align-items-center flex-wrap"
      style={{
        boxShadow: `rgba(0, 0, 0, 0.16) 0px 10px 15px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`,
        backgroundColor: "white",
        borderRadius: "8px, 8px, 0px, 0px",
        height: "62px",
        padding: "0 15px",
        overflow : "hidden",
        marginBottom : "10px"
      }}
    >
      <div
        left
        className="d-flex align-items-center"
        style={{ fontSize: "16px", fontWeight: "600" }}
      >
        {titleIcons[title]}
        {title}
      </div>
      <div right>
        <Button
          style={{
            backgroundColor: "#D75100",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {buttonIcons[title]}
          {buttonName}
        </Button>
      </div>
    </div>
  );
}

export default Nav