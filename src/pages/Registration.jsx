import { useState } from "react";
import { Logo } from "../components/Logo";
import { useForm } from 'react-hook-form'
export const Registration = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();


    const onsubmit = (e) => {
        console.log(e);

    }
    return (
        <div className="registration">
            <Logo />
            <div className="registration-content">
                <form onSubmit={handleSubmit(onsubmit)} autoComplete="off">
                    <label htmlFor="email">Nom:</label> <br />
                    <input type="text" autoComplete="off" 
                    {...register("name")} id="name" name="name" placeholder="entrer votre nom" /> <br />

                    <label htmlFor="email">Email: <br /></label>

                    <input type="email" name="email"
                        {...register("email")}
                        autoComplete="off" id="email" placeholder="entrer email" /> <br />
                    <label htmlFor="password">password</label>
                    <br />
                    <input
                        autoComplete="off" type="password" name="password" placeholder="enter your password" id="password" {...register(password)} /> <br />
                    <label htmlFor="password">Confirm-password</label>
                    <br />
                    <input
                        autoComplete="off" type="password" placeholder="enter your password" name="confirm" id="password" {...register("confirm")} />
                    <br /> <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}