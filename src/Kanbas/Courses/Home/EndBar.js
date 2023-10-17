import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import RedTopCount from '../../../Widgets/RedTopCount';
import db from "../../Database";

function Endbar() {
    const assignments = db.assignments;

    return (
        <>
            <div className="list-group">
                <SidebarItem
                    iconPath={
                        "M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128"
                    }
                    title="Import Existing Content"
                />

                <SidebarItem
                    iconPath={
                        "M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128"
                    }
                    title="Import From Commons"
                />

                <SidebarItem
                    iconPath={"fa fa-file"}
                    iconColor="black"
                    title="Choose Home Page"
                />

                <SidebarItem
                    iconPath={
                        "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
                    }
                    title="View Course Stream"
                />

                <SidebarItem
                    iconPath={
                        "M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"
                    }
                    title="New Announcement"
                />

                <SidebarItem
                    iconPath={
                        "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
                    }
                    title="New Analytics"
                />
            </div>
            <p style={{ marginTop: "10px" }}><strong>To Do</strong></p>
            <hr />

            <div style={{width: "fit-content"}}>
  {assignments.map((assignment) => (
    <ToDoItem
      _id={assignment._id}
      name={assignment.title}
      deadline_date={"Sep 18"}
      deadline_time={"11:59pm"}
      score={100}
    />
  ))}
</div>


        </>
    );
}

function ToDoItem({ _id, name, deadline_date, deadline_time, score }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const clickCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };
    return isCollapsed ? null : (
        <div className="d-flex" style={{ marginBottom: "10px", width:"100%" }}>
          <RedTopCount number={5} />
          <div>
            <p style={{ color: "red" }}>Grade {_id} - {name}</p>
            <div className="d-flex" style={{ color: "grey", alignItems: "center" }}>
              {score} points
              <i className="fa fa-circle" style={{ color: "grey", fontSize: "0.5em", margin: "0 5px" }}></i>
              {deadline_date} at {deadline_time}
            </div>
          </div>
          <i onClick={clickCollapse} className="fa fa-times" style={{ color: "grey", marginTop:"5px", marginLeft: "auto" }}></i>
        </div>
      );
      
}

function SidebarItem({ iconPath, iconColor, title }) {
    return (
        <a href="#" className="list-group-item list-group-item-secondary">
            {iconPath.startsWith("M") ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 512 512">
                    <path
                        d={iconPath} />
                </svg>) :
                (
                    <i className={iconPath} style={{ color: "black" }} />
                )
            }
            <span style={{marginLeft:"10px"}}>{title}</span>
        </a>
    );
}

export default Endbar;