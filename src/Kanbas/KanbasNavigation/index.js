import { Link, useLocation, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css';
import 'font-awesome/css/font-awesome.min.css';

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = ["fa-tachometer", "fa-book", "fa-calendar", "fa-inbox", "fa-history", "fa-tv", "fa-arrow-right", "fa-question-circle"]
    const { pathname } = useLocation();
    return (
        <>
            <div className="col-1" style={{ width: "fit-content" }} id="SideBar">
                <div className="logo"></div>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/${link}`}
                        className={`list-group-item ${pathname.includes(link) && "active"}`}>
                        {(index == 0) ? (
                            <span className={`fa-stack fa-2x`}>
                                <i className={`fa fa-circle fa-stack-2x`} style={{ color: 'white' }}></i>
                                <i className={`fa fa-user fa-stack-1x`} style={{ color: 'grey' }}></i>
                            </span>
                        ) : (
                            <i className={`fa ${icons[index - 1]} fa-3x`}></i>
                        )
                        }
                        {link}
                    </Link>
                ))}
            </div>


        </>
    );
}
export default KanbasNavigation;