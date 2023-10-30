import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Nav from "../Nav";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {

  const [courses, setCourses] = useState(db.courses);

  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });


  const addNewCourse = () => {
    setCourses([...courses,
    {
      ...course,
      _id: new Date().getTime()
    }]);
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course._id !== id));
  };

  return (
    <Provider store={store}>
      <Nav />
      <div className="d-flex">
        <KanbasNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            setCourses={setCourses}
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse} />} />
          <Route path="Courses/*" element={<h1>Courses</h1>} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
        </Routes>
      </div>
      </Provider>

  );
}
export default Kanbas;