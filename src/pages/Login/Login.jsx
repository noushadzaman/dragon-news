import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password");
        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center mt-9 font-bold text-[#403F3F]">Please login</h2>
            <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#403F3F] font-bold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered bg-[#F3F3F3]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#403F3F] font-bold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered bg-[#F3F3F3]" required />
                    <label className="label text-[#403F3F] font-bold">
                        <a className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <input value="Login" type="submit" className="btn border-0 text-white bg-[#403F3F]"></input>
                </div>
            </form>
            <p className="text-center text-[#706F6F] font-semibold">Do not have an account? <Link className="text-[#F75B5F]" to="/register">Register</Link></p>
        </div>
    );
};

export default Login;