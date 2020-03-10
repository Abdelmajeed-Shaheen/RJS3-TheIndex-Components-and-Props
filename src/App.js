import React from "react";
import authors from "./data";
import AuthorList from "./AuthorList";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">
          <AuthorList authors={authors} />
        </div>
      </div>
    </div>
  );
}

export default App;
