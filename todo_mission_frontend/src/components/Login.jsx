import React from 'react';

const Login = () => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login with Kakao</button>
        </div>
    );
};

export default Login;