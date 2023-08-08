import React from "react";

function Home() {
  return (
    <div className="HomePageWrapper">
      <div className="formWrapper">
        <h4 className="mainLabel">Paste Invitation ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOMID" />
          <input type="text" className="inputBox" placeholder="UserName" />
          <button className="btn joinButton">Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="" className="createNewBtn">
              New Room
            </a>
          </span>
        </div>
      </div> 
    </div>
  );
}

export default Home;
