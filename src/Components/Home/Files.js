import React from 'react'
import Nav from '../../Layout/Nav'

const Files = () => {

  return (
    <section
      style={{
        borderRadius: "8px",
        backgroundColor: "white",
        boxShadow: `rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`,
      }}
    >
      <Nav title="Files" buttonName="Add Files" />
      <div className="d-flex justify-content-center align-items-center p-3">
        <h4>No Files Uploaded</h4>
      </div>
    </section>
  );
}

export default Files