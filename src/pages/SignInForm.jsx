// // eslint-disable-next-line no-unused-vars
import { useState } from 'react';

const SignInForm = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold mb-5 text-gray-900">Sign In</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700">Password:</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded" />
                </div>
                <input type="submit" value="Sign In" className="w-full p-2 text-white bg-purple-500 rounded hover:bg-purple-400" />
            </form>
        </div>
    );
};

export default SignInForm;