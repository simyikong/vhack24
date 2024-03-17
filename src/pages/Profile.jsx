import { Link } from 'react-router-dom';

export const Profile = () => {
    // This is just a placeholder. Replace it with your actual user data.
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 py-2">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <p className="text-xl"><strong>Name:</strong> {user.name}</p>
            <p className="text-xl"><strong>Email:</strong> {user.email}</p>
            <p className="text-xl"><strong>Bio:</strong> {user.bio}</p>
            <Link to="/EditProfile" className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-400">
                Edit Profile
            </Link>
        </div>
    );
};