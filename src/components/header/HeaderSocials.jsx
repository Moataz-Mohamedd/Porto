import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" ><BsLinkedin/></a>
      <a href="https://github.com/MarwanMohamedRefaei" ><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
