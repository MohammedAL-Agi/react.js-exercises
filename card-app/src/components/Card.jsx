import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
function Card(props) {
    return (

        <div className="card">

            <div className="card-img" >

                <a href="#"><FaPen /></a>

            </div>

            <div className="pro-img">
                <img src={props.Image} alt="" />
            </div>

            <div className="name">

                {props.Name}
            </div>

            <div className="contry">

                {props.Contry}
            </div>

            <div className="job">

                {props.Job}
            </div>
            <div className="info">
                {props.Info}
            </div>

            <div className="media" >
                <a href="https://www.instagram.com/alagi4real/"><FaInstagram size='2em' className="ins" /></a>
                <a href="#"> <FaTwitter size='2em' className='twet' /></a>
                <a href="https://web.facebook.com/profile.php?id=100006109893924"><FaFacebook size='2em' className='face' /></a>
            </div>

        </div>

    )
}
export default Card;

