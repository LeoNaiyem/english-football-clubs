import React from 'react';
import './Club.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Clubs = (props) => {
    const { strAlternate, strSport, strTeamBadge, idTeam } = props.club;
    return (
        <div className="club-area">
            <div className="club-logo">
                <img src={strTeamBadge} alt="" />
            </div>
            <div className="club-info">
                <h3>{strAlternate} </h3>
                <p>Sport type: {strSport} </p>
                <Link to={`club/${strAlternate}/${idTeam}`}>
                    <button className="explore-btn">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
            </div>
        </div>
    );
};

export default Clubs;