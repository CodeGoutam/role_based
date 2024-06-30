import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
const Login = () => {
    let nav = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // let res = await fetch('http://localhost:5000/api/login', {
        let res = await fetch('https://role-based-backend-hbzg.onrender.com/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            })
        })
        res = await res.json()
        if (res.success == true) {
            localStorage.setItem('auth', res.authToken)
            localStorage.setItem('role', res.userDetail.role)
            localStorage.setItem('id', res.userDetail._id)
            nav('/')
        }
        else if (res.success == false) {
            alert("Enter valid details")
        }
        console.log(formData);
    };

    return (
        <div className='container' >
            <div className='d-flex justify-content-center align-items-center ' style={{ height: '100vh' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button className='m-1' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
