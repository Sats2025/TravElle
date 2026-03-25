import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupLogin: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const userData = { email, password };

        if (isLogin) {
            // 🔐 LOGIN LOGIC
            const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

            if (
                storedUser.email === email &&
                storedUser.password === password
            ) {
                localStorage.setItem("isAuthenticated", "true");
                alert("Login successful!");
                navigate("/dashboard"); // redirect
            } else {
                alert("Invalid email or password");
            }
        } else {
            // 📝 SIGNUP LOGIC
            localStorage.setItem("user", JSON.stringify(userData));
            alert("Signup successful! Please login.");
            setIsLogin(true); // switch to login
        }

        // clear fields
        setEmail('');
        setPassword('');
    };

    return (
        <div 
            className="flex flex-col items-center justify-center min-h-screen"
            style={{
                background: 'linear-gradient(135deg, #fceabb 0%, #f8b500 100%)',
            }}
        >
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                {isLogin ? 'Login' : 'Sign Up'}
            </h1>

            <form 
                onSubmit={handleSubmit} 
                className="bg-white p-6 rounded-2xl shadow-lg w-80"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            >
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-pink-300"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-pink-300"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-pink-400 text-white py-2 rounded-md hover:bg-pink-500 transition duration-300"
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>

                <p className="mt-4 text-sm text-center text-gray-700">
                    {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-pink-500 ml-1 hover:underline"
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default SignupLogin;