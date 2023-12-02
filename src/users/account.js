import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from 'react-router-dom';
import "./signin.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function setValidDate(dob) {
    let date = new Date(dob);
    if(!(date instanceof Date && !isNaN(date))) {
        date = new Date();
    }
    date = date.toISOString().split('T')[0];
    return date;
  }

function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        let user = await client.findUserById(id);
        setAccount(user);
    };
    const navigate = useNavigate();
    const fetchAccount = async () => {
        let account = await client.account();
        setAccount(account);
    };
    const save = async () => {

        await client.updateUser(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div className="signin-screen">
                    <div className="signin-input">
                        <label htmlFor="username">Username:</label>
                        <input value={account.username}
                            onChange={(e) => setAccount({
                                ...account,
                                username: e.target.value
                            })} />
                    </div>

                    <div className="signin-input">
                        <label htmlFor="username">Password:</label>
                        <input type="password" value={account.password}
                            onChange={(e) => setAccount({
                                ...account,
                                password: e.target.value
                            })} />
                    </div>
                    <div className="signin-input">
                    <label htmlFor="username">First Name:</label>
                    <input value={account.firstName}
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    </div>
                    <div className="signin-input">
                    <label htmlFor="username">Last Name:</label>
                    <input value={account.lastName}
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    </div>
                    <div className="signin-input">
                    <label htmlFor="username">Birth  date:</label>
                    <input type="date" value={setValidDate(account.dob)}
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    </div>
                    <div className="signin-input">
                    <label htmlFor="username" className="me-4">Email:</label>
                    <input value={account.email}
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    </div>
                    <div className="signin-input">
                    <label htmlFor="username" className="me-4">Role:</label>
                    <select onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    </div>
 
                    <button className="btn btn-primary mt-3 w-100" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-warning mt-3 w-100" onClick={signout}>
                        Signout
                    </button>
                    <Link to="/project/admin/users" className="btn mt-3 btn-warning w-100">
                        Users
                    </Link>

                </div>
            )}
        </div>
    );
}
export default Account;