import React from 'react'
import Nav from '../../Layout/Nav'
import TeamMember from '../UI/TeamMember'
import {
  Button,
  Container,
} from 'reactstrap';
const TeamSpace = () => {
  return (
    <section
      style={{
        borderRadius: "8px",
        backgroundColor: "white",
        boxShadow: `rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`,
      }}
    >
      <Nav title="TeamSpace" buttonName="Add Users" />
      <Container>
        <TeamMember />
      </Container>
    </section>
  )
}

export default TeamSpace