import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import ToggleLink from "./ToggleLink";
import Dropdown from 'react-bootstrap/Dropdown';
import StackWithCheckIcon from "../../../Widgets/StackWithCheckIcon";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <button className="btn btn-grey btn-secondary button-margin">Collapse All</button>
        <button className="btn btn-grey btn-secondary button-margin">View Progress</button>

        <Dropdown>
          <Dropdown.Toggle variant="btn btn-grey btn-secondary button-margin" id="dropdown-basic">
          <StackWithCheckIcon />
            Publish All
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Publish All</Dropdown.Item>
            <Dropdown.Item href="#">Publish all Items and Modules</Dropdown.Item>
            <Dropdown.Item href="#">Unpublish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <button className="btn btn-danger button-margin">+ Module</button>
        <div className="btn btn-grey btn-secondary button-margin" >

          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512" >
            <path
              d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
            />
          </svg>

        </div>
      </div>
      <hr style={{marginBottom: "60px"}}/>
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <ToggleLink module={module} />
          ))
      }
    </>
  );
}
export default ModuleList;