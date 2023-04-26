import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { AddModal, Users } from "./components";

function App() {
  const [visibleModal, setVisibleModal] = useState("d-none");
 

  return (
    <>
      <div>
        <div className="table-wrapper">
          <div className="table-container">
            <button
              className="button-64"
              onClick={() => {
                setVisibleModal("d-block");
              }}
            >
              <span className="text">Add user</span>
            </button>

            <Users   />
          </div>
        </div>
      </div>
      <AddModal
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
       
      />
    </>
  );
}

export default App;
