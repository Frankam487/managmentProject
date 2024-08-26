import { useState } from "react";
import { Logo } from "../components/Logo";

export const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    return (
        <div className="registration">
            <Logo />
            <div className="registration-content">
                <form autoComplete="off">
                    <label htmlFor="email">Nom:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} autoComplete="off" id="name" placeholder="entrer votre nom" />
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off" id="email" placeholder="entrer email" />
                    <label htmlFor="password">password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)} autoComplete="off" type="password" placeholder="enter your password" id="password" />
                    <label htmlFor="password">Confirm-password</label>
                    <input
                        onChange={(e) => setConfirm(e.target.value)}
                        autoComplete="off" type="password" placeholder="enter your password" id="password" />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}