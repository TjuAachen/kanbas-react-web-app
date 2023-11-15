import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ToggleLink from "./ToggleLink";
import Dropdown from 'react-bootstrap/Dropdown';
import StackWithCheckIcon from "../../../Widgets/StackWithCheckIcon";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();


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
      <hr style={{ marginBottom: "20px" }} />

      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input style={{ height: "fit-content", marginRight: "20px" }} value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
        }
        />
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
        }
        />
        <button onClick={handleUpdateModule} className="btn btn-seconday float-end" style={{ backgroundColor: "blue", marginLeft: "2%", marginRight: "2%", color: "white", width: "fit-content", height: "fit-content" }}>Update</button>
        <button onClick={handleAddModule} className="btn btn-seconday float-end" style={{ backgroundColor: "green", marginLeft: "2%", marginRight: "2%", color: "white", width: "fit-content", height: "fit-content" }}>Add</button>


      </div>
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