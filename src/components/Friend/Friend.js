
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    const handClick = (friendId) => {
        history.push(`/friend/${friendId}`)
    }
    const friendStyle = {
        border : '1px solid purple',
        margin : '20px',
        padding : '20px',
        borderRadius : '20px'
    }
    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <p>id:<Link to={`/friend/${id}`}>show detail about of {id}</Link></p>
            <button onClick={() => handClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;