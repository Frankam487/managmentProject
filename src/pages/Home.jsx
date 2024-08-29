import { Link } from "react-router-dom";
import { NavLogin } from "../components/NavLogin";
import { useForm } from "react-hook-form";
import axios from "axios";

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const signIn = (e) => {
        const email = e.email;
        const password = e.password;
        axios.get("http://localhost:2001/users").then((res) => {
            const datas = res.data;
            console.log(res.data);
            
            const users = datas.find((user) => user.email === email && user.password===password)
            if(users){
                alert('ok')
            } else{
                alert('nn!')
            }
        }
        )
    }
    return (
        <div className="home">
            <div className="home-header">
                <h1 className="bi bi-house">Manager</h1>
                <NavLogin />
            </div>
            <div className="login-container">
                <h1>Login</h1>
                <form autoComplete="off" onSubmit={handleSubmit(signIn)}>
                    <label htmlFor="email">email:</label>
                    <input type="text" autoComplete="off" id="email" {...register("email", { required: true })} name="email"
                        laceholder="enter your email" />
                    {errors.email && <p style={{ color: "red" }}>Email requis</p>}
                    <label htmlFor="password">password</label>
                    <input autoComplete="off" type="password" placeholder="enter your password" id="password" {...register("password", { required: true })} />
                    {errors.password && <p style={{ color: "red" }}>Erreur mdp</p>}
                    <button type="submit">Login</button>
                </form>
            </div>

        </div>
    );
}

export default Home;