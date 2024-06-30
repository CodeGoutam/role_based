import React, { useState, useEffect } from 'react'

const Admin = (props) => {
    const [data, setdata] = useState([])
    let fetching = async () => {
        // let res = await fetch('http://localhost:5000/api/admin', {
        let res = await fetch('https://role-based-backend-hbzg.onrender.com/api/admin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then(async (res) => {
            res = await res.json();
            setdata(res)
            console.log(data);
        })
    }
    useEffect(() => {
        fetching()
    }, []);

    return (
        <div>
            Admin
            <div>
                <div className='d-flex justify-content-center h-50 align-items-center'>
                    <form>

                    <table border={1} cellPadding={7}>
                        <tr className='border-1 p-1'>
                            <th className='border-1'>Id</th>
                            <th className='border-1'>Name</th>
                            <th className='border-1'>Email</th>
                            <th className='border-1'>Role</th>
                        </tr>
                        {
                            data.map((res) => {
                                return <tr>
                                    <td className='border-1'>{res._id}</td>
                                    <td className='border-1'>{res.name}</td>
                                    <td className='border-1'>{res.email}</td>
                                    <td className='border-1'>{res.role}</td>
                                    {/* <td className='border-1'>{res.role}</td> */}
                                </tr>
                            })
                        }
                    </table>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Admin
