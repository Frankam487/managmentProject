import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const NavLogin = () => {
    return (
        <div className="navLogin">
       
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/registration">Sign up</Link>
                </li>
            </ul>
        </div>
    );
}