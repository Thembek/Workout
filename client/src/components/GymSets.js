import React from 'react';
import { Link } from 'react-router-dom';

function GymSets(){
    return (
        <div className="gym-sets">
            <Link to="/notes">For Beginners</Link>
            <div className="gym-details">
                <h1 to="/notes">
                    workouts you might need to know
                </h1>
            </div>
        </div>
    );
}

export default GymSets;