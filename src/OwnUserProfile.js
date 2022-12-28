import React from "react";
import {
    Link,
    Outlet,
  } from "react-router-dom";
  
function OwnUserProfile() {
    return (
      <div>
        <nav>
          <Link to="me">My Profile</Link>
        </nav>
  
        <Outlet />
      </div>
    );
  }

export default OwnUserProfile()
