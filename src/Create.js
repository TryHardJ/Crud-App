import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import dataBase from './Database';
import {v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let page = useNavigate();

    const createPost = (e) =>{
        e.preventDefault();
        const ids = uuid();
        let uni = ids.slice(0,8);
        let a = username, b = email, c = password;
        dataBase.push({id:uni, username: a, email: b, password: c})
        page('/');
    }

    return (
        <div>
            <Form>
                <Form.Group controlId='Username'>
                    <Form.Control onChange={e => setUsername(e.target.value)}
                    type="text"
                    placeholder = "Create Username" required/>
                </Form.Group>
                <Form.Group controlId='Email'>
                    <Form.Control onChange={e => setEmail(e.target.value)}
                    type="text"
                    placeholder = "Enter Email" required/>
                </Form.Group>
                <Form.Group controlId='Password'>
                    <Form.Control onChange={e => setPassword(e.target.value)}
                    type="text"
                    placeholder = "Create Password" required/>
                </Form.Group>
                <Button onClick={e => createPost(e)} type="submit">Submit</Button>
                <Link to='/'>
                    <Button>Home</Button>
                </Link>
            </Form>
        </div>
    )
}

export default Create;