import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { workoutListData } from '../workoutListData';

//styed-components code
export const Container = styled.section`
    width: 100%;
    height: 100%;
    .cursor: {
        width: 25px;
        height: 25px;
        margin: 0;
        padding: 0;
        background-color: rgb(238, 130, 31);
        border-radius: 50%;
        pointer-events: none;
        position: fixed;
    }
`;

export const Title = styled.h1`
    font-size: 45px;
    letter-spacing: 4px;
    text-align: center;
    color: #1aac83;
    border: 2px solid #fff;
    cursor: pointer;
`;

export const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 45%);
    justify-content: center;
    margin: auto;
    position: relative;
    top: 40px;
    li {
        color: #1aac83;
        margin-bottom: 15px;
        list-style: none;
        padding: 7px;
        margin: 15px 10px;
        font-size: 30px;
        text-transform: uppercase;
        border-bottom: 0.5px solid gray;
        cursor: pointer;
        span {
            &:hover {
                & ~ div {
                    transform: rotate(-5deg) scale(1);
                    opacity: 1;
                }
            }
        }
        .img-cont {
            position: absolute;
            width: 300px;
            transform: translateX(100px) scale(0.8);
            opacity: 0;
            transition: 0.6s;
            img {
                border: 1px solid rgb(255, 255, 25,, 0.5);
                width: 100%:
                border-radius: 15px;
            }
        }
    }
`;

export const Reference = styled.a`
    text-decoration: none;
    font-size: 1.1rem;
`

const WorkoutList = () => {
    const [position, setPosition] = useState({
        x: "",
        y: "",
    });

    const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Container>
            <Title>Well Known Gym-Workouts</Title>
            <Ul>
                {workoutListData.map((elem, i) => (
                    <li key={i}>
                        <span>{elem.name}</span>
                        <div className="img-cont">
                            <img src={elem.img} alt={elem.name} />
                        </div>
                    </li>
                ))}
            </Ul>

            <div
                style={{ left: `${position.x}px`, top: `${position.y}px`}}
                className="cursor"
            ></div>
        </Container>
    );
} 

export default WorkoutList;


