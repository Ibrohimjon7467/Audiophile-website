import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Signup</h2>
                {error && <h3>{error}</h3>}
                <form onSubmit={handleSubmit}>
                    <label className="mb-3">
                        <input type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label className="mb-3">
                        <input type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <div className="d-grid gap-2">
                        <button type="submit">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
            <div className="p-4 box mt-3 text-center">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    );
};

export default Signup;