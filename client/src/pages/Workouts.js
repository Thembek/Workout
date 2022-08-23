import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//components
import WorkoutList from '../components/WorkoutList';

const Workouts = () => {
    return (
        <div className="workouts">
            <Link to="/">
                <ArrowBackIcon classsName="arrow-back" />
            </Link>
            <div className="workouts-grid">
                <WorkoutList />
            </div>
        </div>
    );
}

export default Workouts;