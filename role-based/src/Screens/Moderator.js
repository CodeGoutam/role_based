import React, { useEffect, useState } from 'react'

const Moderator = () => {
    const [data, setdata] = useState([])
    let fetching = async () => {
        let res = await fetch('http://localhost:5000/api/moderator', {
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
        <div className='container' style={{ height: '100vh' }}>
            Moderator having details of all the clients.
            <div className='d-flex justify-content-center h-50 align-items-center'>
                <table border={1} cellPadding={7}>
                    <tr className='border-1 p-1'>
                        <th className='border-1'>Id</th>
                        <th className='border-1'>Name</th>
                        <th className='border-1'>Email</th>
                    </tr>
                    {
                        data.map((res) => {
                            return <tr>
                                <td className='border-1'>{res._id}</td>
                                <td className='border-1'>{res.name}</td>
                                <td className='border-1'>{res.email}</td>
                            </tr>
                        })
                    }
                </table>
            </div>

        </div >
    )
}

export default Moderator
