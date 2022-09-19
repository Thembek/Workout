import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components';

const Name = style.a`
    text-decoration: none;
    &:hover{
        color: #009bff;
    }
`;

function GymSets(){
    return (
        <div className="gym-sets">
            <Link to="/notes">
                <Name>
                    For Beginners
                </Name>
            </Link>
            <div className="gym-details">
                <h1 to="/notes">
                    workouts you might need to know
                </h1>
            </div>
        </div>
    );
}

export default GymSets;