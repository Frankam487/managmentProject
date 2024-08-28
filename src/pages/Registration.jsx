import { useState } from "react";
import axios from "axios";
import { Logo } from "../components/Logo";
import { useForm } from 'react-hook-form'
export const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [pass, setPass] = useState(false);

    const onsubmit = (e) => {
        const name = e.name;
        const email = e.email;
        const password = e.password;
        const confirmPass = e.confirm;

        password !== confirmPass ? setPass(true)
            :
            setPass(false)

        const data = {
            name,
            email,
            password,
            confirmPass
        }
        axios.put("http://localhost:2000/post", data);

    }
    return (
        <div className="registration">
            <Logo />
            <div className="registration-content">
                <form onSubmit={handleSubmit(onsubmit)} autoComplete="off">
                    <label htmlFor="email">Nom:</label> <br />
                    <input type="text" autoComplete="off"
                        {...register("name", { required: true, minLength: 3 })} id="name" name="name" placeholder="entrer votre nom" />
                    {errors.name && <p style={{ color: "red" }}>Le nom ne doit pas etre vide et doit avoir au moins 3 caracteres...</p>}
                    <br />

                    <label htmlFor="email">Email: <br /></label>

                    <input autoComplete="off" type="email" name="email"
                        {...register("email", {
                            required: "Ce champ est requis",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Adresse email invalide"
                            }
                        })}
                        id="email" placeholder="entrer email" /> <br />
                    {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                    <label htmlFor="password">password</label>
                    <br />
                    <input
                        autoComplete="off" type="password" name="password" placeholder="enter your password" id="password"
                        {...register("password", {
                            required: "Ce champ est requis",
                            minLength: {
                                value: 6,
                                message: "Le mot de passe doit contenir au moins 6 caractères"
                            }
                        })} /> <br />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                    <label htmlFor="password">Confirm-password</label>
                    <br />
                    <input
                        autoComplete="off" type="password" placeholder="enter your password" name="confirm" id="password" {...register("confirm", { required: true, minLength: 4 })} />
                    {errors.confirm && <p style={{ color: "red" }}>Erreur mot de passe</p>}
                    {pass && <p style={{ color: "red" }}>Les mots de passe ne sont pas identiques...</p>}
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}