import './App.css';
import Admin from '../src/Screens/Admin'
import Client from '../src/Screens/Client'
import Moderator from '../src/Screens/Moderator'
import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
function App() {
    const [role, setrole] = useState(localStorage.getItem('role'))
    let nav = useNavigate()
    const [auth, setauth] = useState(localStorage.getItem('auth'));
    console.log(auth);
    return (
        <div className="App">
            <div>
                <Navbar bg="light" expand="lg" className='w-100'>
                    <div className='d-flex justify-content-between w-100 p-2' >
                        <h3>Role Based App</h3>
                        <div id="basic-navbar-nav">
                            {auth !== null ? <Button className='btn m-1 bg-danger text-white' onClick={() => {
                                localStorage.removeItem('auth')
                                localStorage.removeItem('role')
                                localStorage.removeItem('id')
                                setauth(null)
                            }}>Logout</Button> : <Nav className="ml-auto">
                                <Link className='btn m-1 bg-primary text-white' to={'/login'}>Login</Link>
                                <Link className='btn m-1 bg-danger text-white' to={'/signup'}>Signup</Link>
                            </Nav>}
                        </div>

                    </div>
                </Navbar>

            </div>
            {role === 'admin' && auth && <Admin />}
            {role === 'client' && auth && <Client />}
            {role === 'moderator' && auth && <Moderator />}

        </div>
    );
}

export default App;
