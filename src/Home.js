import React from 'react';
import { Button, Table } from 'react-bootstrap';
import dataBase from "./Database";
import { Link, useNavigate } from 'react-router-dom';

function Home (){

    let page = useNavigate();

    function setID(id, username, email, password){
        localStorage.setItem('id', id);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    }

    function deleted(id){
        let index = dataBase.map(function(index){ return index.id ;}).indexOf(id);
        dataBase.splice(index,1);
        page('/');
    }

    return (
        <div>
        <Table>
        <thead>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            {dataBase.map((index) => {
                return (
                    <tr key={index.id}>
                        <td>{index.username}</td>
                        <td>{index.email}</td>
                        <td>{index.password}</td>
                        <td>
                            <Link to={'/edit'}>
                            <Button className='Edit' onClick={() => setID(index.id, index.username, index.email, index.password)}>
                            Update</Button></Link>
                        </td>
                        <td>
                            <Button className='Delete' onClick={() => deleted(index.id)}>Delete</Button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
        </Table>
        <Link className='Link_Button' to='/create'>
            <Button>Create</Button>
        </Link>
        </div>
    )
}

export default Home;