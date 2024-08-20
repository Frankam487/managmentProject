import { Logo } from "../components/Logo";

export const Registration = () => {
    return (
        <div className="registration">
            <Logo />
            <div className="registration-content">
                <form autoComplete="off">
                    <label htmlFor="email">Nom:</label>
                    <input type="text" autoComplete="off" id="name" placeholder="entrer votre nom" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" autoComplete="off" id="email" placeholder="entrer email" />
                    <label htmlFor="password">password</label>
                    <input autoComplete="off" type="password" placeholder="enter your password" id="password" />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}