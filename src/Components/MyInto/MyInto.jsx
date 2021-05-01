import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileImage from "../images/mosharof-1 (1).png"
import "./MyInto.scss"
import PersonalInfo from './PersonalInfo';

const MyInto = () => {
    return (
        <div className="cover2">
            <div className="row p-0 m-0">
                <div className="profile col-md-6">
                    <Image src={profileImage} fluid></Image>
                </div>
                <div className="about-info col-md-6">
                    <PersonalInfo></PersonalInfo>
                </div>

            </div>
        </div>
    );
};

export default MyInto;