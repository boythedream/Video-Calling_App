import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const submitHandler = () => {
    navigate(`/room/${input}`);
  };

  return (
    <div className="homepage-container">
      <div className="form-container">
        <h1 className="heading">Join a Room</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your name.."
          className="input-field"
        />
        <button onClick={submitHandler} className="join-button">
          Join
        </button>
      </div>
    </div>
  );
};

export default HomePage;
