import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(process.env.REACT_APP_API_URL);
            console.log(formData);
            
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/register`, formData);
            setMessage("Login Successful!");
            console.log(response.data);
        } catch (error) {
            setMessage(error.response?.data?.error || "Login failed. Please check your credentials.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
