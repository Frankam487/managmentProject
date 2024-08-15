import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <div className="logo">
            <h1>
                <span className="bi bi-house"> <Link to='/'>Manager</Link> </span>
            </h1>
            <div className=""></div>
        </div>
    );
}