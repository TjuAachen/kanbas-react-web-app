import axios from "axios";
const ASSIGNMENTS_URL = "https://kanbas-node-server-app-z6w7.onrender.com/api/assignments";
const COURSES_URL = "https://kanbas-node-server-app-z6w7.onrender.com/api/courses";
export const deleteAssignment = async (assignmentId) => {
    const response = await axios
        .delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
};
export const findAssignmentsForCourse = async (courseId) => {
    const response = await axios
        .get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
};

export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

export const updateAssignment = async (assignment) => {
    const response = await axios.
        put(`${ASSIGNMENTS_URL}/${assignment._id}`, assignment);
    return response.data;
};
