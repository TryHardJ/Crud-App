import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import dataBase from './Database';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Edit(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setid] = useState('');
    let page = useNavigate();
    
    let index = dataBase.map(function(e) {return e.id;}).indexOf(id);

    const editSubmit = (e) => {
        e.preventDefault();
        let a = dataBase[index];
        a.username = username;
        a.email = email;
        a.password = password;
        page('/');
    }

    useEffect(() => {
        setUsername(localStorage.getItem('username'));
        setEmail(localStorage.getItem('email'));
        setPassword(localStorage.getItem('password'));
        setid(localStorage.getItem('id'));
    }, [])

    return (
        <div>
            <Form>
                <Form.Group controlId='Username'>
                    <Form.Control 
                    value = {username}
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    placeholder = "Update Username"/>
                </Form.Group>
                <Form.Group controlId='Email'>
                    <Form.Control 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                    placeholder = "Update Email"/>
                </Form.Group>
                <Form.Group controlId='Password'>
                    <Form.Control 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="text"
                    placeholder = "Update Password"/>
                </Form.Group>
                <Button onClick={e=> editSubmit(e)}
                    type="submit">Update
                </Button>

                <Link to='/'>
                    <Button>Home</Button>
                </Link>
            </Form>
        </div>
    )
}
export default Edit