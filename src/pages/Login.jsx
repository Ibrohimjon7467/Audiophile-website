import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Login</h2>
                {error && <h3>{error}</h3>}
                <form onSubmit={handleSubmit}>
                    <label className="mb-3">
                        <input type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label className="mb-3">
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <div className="d-grid gap-2">
                        <button type="submit">
                            Log In
                        </button>
                    </div>
                </form>
                <hr />
                <div>
                    <button onClick={handleGoogleSignIn}></button>
                </div>
            </div>
            <div className="p-4 box mt-3 text-center">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
        </>
    );
};

export default Login;