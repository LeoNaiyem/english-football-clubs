import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const [clubs, setClubs] = useState([])
    useEffect(() =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(response => response.json())
        .then(data => setClubs(data.teams));
    },[])
    return (
        <div>
            <div className="header">
                <Header></Header>
            </div>
            <div className="clubs">
                {
                    clubs.map(club => <Club key={club.idTeam} club = {club} ></Club> )
                }
            </div>
        </div>
    );
};

export default Home;