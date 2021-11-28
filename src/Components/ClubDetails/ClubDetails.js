import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faSkype, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPodcast, faFlag, faFutbol, faMars, faCalendarAlt, faCrown} from '@fortawesome/free-solid-svg-icons'
import './ClubDetails.css'

const ClubDetails = () => {
    let { id, name } = useParams();
    const [teamEquipment, setTeamEquipment] = useState([]);
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupequipment.php?id=${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamEquipment(data.equipment[0]))
    }, [id, setTeamEquipment, url])

    const { strEquipment, date, strType, strSeason, strUsername } = teamEquipment;
    return (
        <div>
            <div className="header">
                <div className="header-area">
                    <img className="jersey-image" src={strEquipment} alt="" />
                    <p> <small className="note">Note: SportDB updated their service. 'Team Details by Id'not available for free anymore.</small> </p>
                </div>
            </div>
            <div className="clubs">
                <div className="club-details">
                    <div className="info">
                        <h1>{name}</h1>
                        <p><FontAwesomeIcon icon={faPodcast} /> Founded: {date} </p>
                        <p><FontAwesomeIcon icon={faCrown} /> Club Type: {strType}</p>
                        <p><FontAwesomeIcon icon={faCalendarAlt} /> Season: {strSeason}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: England</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: Football</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gander: Male</p>
                    </div>
                    <div className="image">
                        <img className="jersey-image" src={strEquipment} alt="" />
                    </div>
                </div>
                <div className="more">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, voluptate in? Hic numquam ex harum aut quod, ipsum corrupti similique omnis beatae quos doloremque labore quas eligendi modi vel delectus suscipit? Culpa vero alias, eius a in id dicta placeat consequatur repellendus minus quam optio fugiat veritatis voluptatibus aliquid adipisci.</p>
                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime accusamus quidem ullam fugit reiciendis voluptatibus. Nam consequatur molestias minima fugiat ratione blanditiis vel earum, qui officiis possimus obcaecati, nostrum temporibus sint, aperiam voluptatum laboriosam. Natus sed mollitia, culpa fuga, ipsa vel fugiat reprehenderit voluptatibus quisquam accusantium quos numquam saepe impedit?</p>
                </div>
            </div>
            <footer>
                <div className="social-media">
                    <a href="https://www.facebook.com/"><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
                    <a href="https://twitter.com/?lang=en"><FontAwesomeIcon className='icon' icon={faTwitter} /></a>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                    <a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1638115236&rver=7.1.6819.0&wp=MBI_SSL&wreply=https%3A%2F%2Flw.skype.com%2Flogin%2Foauth%2Fproxy%3Fclient_id%3D572381%26redirect_uri%3Dhttps%253A%252F%252Fweb.skype.com%252FAuth%252FPostHandler%26state%3D7283e95f-d10a-43cf-978e-9b9f4fc86271&lc=1033&id=293290&mkt=en-US&psi=skype&lw=1&cobrandid=2befc4b5-19e3-46e8-8347-77317a16a5a5&client_flight=ReservedFlight33%2CReservedFlight67"><FontAwesomeIcon className='icon' icon={faSkype} /></a>
                    <a href="https://github.com/"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                </div>
            </footer>
        </div>
    );
};

export default ClubDetails;