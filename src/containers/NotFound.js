import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const NotFound = () => {
  const [redirect] = useState(true);
  return (
    <div>
      {
        redirect ? <Navigate to="/" replace={true} /> : <p>Not Found</p>
      }
    </div>
  );
}

export default NotFound;