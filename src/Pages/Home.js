import React from 'react'
import OpportunityDetails from '../Components/Home/OpportunityDetails'
import Files from '../Components/Home/Files'
import Contact from '../Components/Home/Contact'
import TeamSpace from '../Components/Home/TeamSpace'


const Home = () => {
  return (
    <div className="p-2">
        <OpportunityDetails />
        <Files />
        <Contact />
        <TeamSpace />
    </div>
  )
}

export default Home