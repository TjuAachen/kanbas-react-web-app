import db from "../../Database";
import { useParams } from "react-router-dom";
import React, { useState } from 'react';

function StudentNameToID(name) {
    const [firstName, lastName] = name.split(" ");
    const user = db.users.find((user) => user.firstName === firstName && user.lastName === lastName);
    
    return user === undefined ? -1 : user._id;
}

function Grades() {
    const { courseId } = useParams();
    var searchedStudentName = ""
    var searchedAssignmentName = ""
    const [assignments, setAssignments] = useState(db.assignments.filter((assignment) => assignment.course === courseId));
    const [enrollments, setEnrollments] = useState(db.enrollments.filter((enrollment) => enrollment.course === courseId));

    return (
        <div style={{width:"100%"}}>

            <div className="row" style={{ display: 'flex', marginTop: '10px' }}>
                <div className="col-5"></div>
                <div className="col-7" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn btn-grey btn-secondary">Import</button>
                    <button className="btn btn-grey btn-secondary">Export</button>
                    <button className="btn btn-grey btn-secondary">
                        <i className="fa fa-cog" style={{ color: 'black' }}></i>
                    </button>
                </div>

                <div className="row" style={{ display: 'flex', marginTop: '10px' }}>
                    <div className="col-6">
                        <label><b>Student Names</b></label>
                        <input placeholder="Search Students" className="form-control" onChange={(e) => {searchedStudentName = e.target.value}}></input>
                    </div>
                    <div className="col-6">
                        <label><b>Assignment Names</b></label>
                        <input placeholder="Search Assignments" className="form-control" onChange={(e) => searchedAssignmentName = e.target.value}></input>
                    </div>
                </div>
            </div>

            <button className="btn btn-grey btn-secondary" style={{ margin: '20px 0 0 0' }} onClick={() => {
                
                if (searchedAssignmentName !== "") {
                    setAssignments(assignments.filter((assignment) => assignment.title === searchedAssignmentName));
                }else {
                    setAssignments(db.assignments.filter((assignment) => assignment.course === courseId));
                }
                if (searchedStudentName !== "") {
                    const id = StudentNameToID(searchedStudentName);
                    setEnrollments(db.enrollments.filter((enrollment) => enrollment.user === id));
                }else {
                    setEnrollments(db.enrollments.filter((enrollment) => enrollment.course === courseId));
                }
            }}>
            <i class="fa fa-filter" style={{color:"black", marginRight: "5px"}} ></i>
                Apply Filter
                </button>

            <div className="table-responsive">
                <p>{searchedStudentName}</p>
                <table className="table table-bordered">
                    <thead>
                        <th className="btn-grey border-length" style={{textAlign:"center", padding: "10px 0px"}}>Student Name</th>
                        {assignments.map((assignment) => (<th className="btn-grey border-length"style={{textAlign:"center", padding: "10px 0px"}}>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment, index) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td className={index % 2 === 1 ? 'btn-grey border-length' : 'border-length'} style={{textAlign:"center"}}>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td className={index % 2 === 1 ? 'btn-grey border-length' : 'border-length'} style={{textAlign:"center"}}>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody>
                    </table>
            </div></div>);
}
export default Grades;