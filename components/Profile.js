
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';
import './Profile.css';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Удаляем токен из localStorage и вызываем logout
        localStorage.removeItem('token');
        dispatch(logout());
        // Редирект на страницу логина
        navigate('/login');
    };

    return (
        <div className="profile-page">
            <h1>Profile Page</h1>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
