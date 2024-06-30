import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    });
    // const [role, setrole] = useState('')
    let nav = useNavigate()
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // let res = await fetch('http://localhost:5000/api/signup', {
        let res = await fetch('https://role-based-backend-hbzg.onrender.com/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
                name: formData.name,
                role: formData.role
            })
        })
        res = await res.json()
        if (res.success == true) {
            localStorage.setItem('auth', res.authToken)
            // alert(res.userDetail.role)
            // setrole(res.userDetail.role)
            localStorage.setItem('role', res.userDetail.role)
            localStorage.setItem('id', res.userDetail._id)
            nav('/')
        }
        else if (res.success == false) {
            alert('Please enter valid details')
        }
        console.log(formData);
    };

    return (
        <div className='container' >
            <div className='d-flex justify-content-center align-items-center ' style={{ height: '100vh' }}>
                <Form method='POST' onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

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

                    <Form.Group>
                        <Form.Label>Role</Form.Label>
                        <div>
                            <Form.Check
                                inline
                                type="radio"
                                label="Admin"
                                name="role"
                                value="admin"
                                onChange={handleChange}
                                required
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Moderator"
                                name="role"
                                value="moderator"
                                onChange={handleChange}
                                required
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Client"
                                name="role"
                                value="client"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default SignupForm;
