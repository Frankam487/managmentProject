import { Link } from "react-router-dom";
import { NavLogin } from "../components/NavLogin";

const Home = () => {
    return (
        <div className="home">
           <div className="home-header">
           <h1 className="bi bi-house">Manager</h1>
           <NavLogin />
           </div>
            <div className="login-container">
                <h1>Login</h1>
                <form autoComplete="off">
                    <label htmlFor="email">email:</label>
                    <input type="text" autoComplete="off" id="email" placeholder="enter your email" />
                    <label htmlFor="password">password</label>
                    <input autoComplete="off" type="password" placeholder="enter your password" id="password" />
                    <button>Login</button>
                </form>
            </div>

        </div>
    );
}

export default Home;