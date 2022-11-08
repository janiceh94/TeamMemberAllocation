import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="navbar navbar-expanded-lg navbar-light bg-light">
            <ul className="navbar-nav me-auto mb-2 mg-lb-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/GroupedTeamMembers">
                        Teams
                    </Link>
                </li>
            </ul>
        </nav>
    )
}