import React, { useEffect, useState } from 'react'

const Client = () => {
    const [data, setdata] = useState({
        name: '',
        email: '',
        role: ''
    });
    let fetching = async () => {
        // let res = await fetch('http://localhost:5000/api/client', {
        let res = await fetch('https://role-based-backend-hbzg.onrender.com/api/client', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: localStorage.getItem("id")
            })
        }).then(async (res) => {
            res = await res.json()
            if (res.success) {
                setdata({
                    name: res.userDetail.name,
                    email: res.userDetail.email,
                    role: res.userDetail.role
                })
            }
        })
    }
    useEffect(() => {
        fetching()
    }, []);

    return (
        <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className='card p-2'>
                <p>Name:{data.name}</p>
                <p>Email:{data.email}</p>
                <p>Role:{data.role}</p>
            </div>

        </div>
    )
}

export default Client
