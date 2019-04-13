import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaReddit, FaSlackHash, FaDiscord } from 'react-icons/fa'
export const SoicalData = [
    {
        id:10,
        url: 'https://www.facebook.com/',
        name:'FaceBook',
        icon: <FaFacebook className='icon' />
    },
    {
        id:20,
        url: 'https://twitter.com/',
        name:'Twitter',
        icon: <FaTwitter className='icon'/>
    },
    {
        id:30,
        url: 'https://www.linkedin.com/',
        name:'Linkedin',
        icon: <FaLinkedin className='icon'/>
    },
    {
        id:40,
        url: 'https://www.reddit.com/',
        name:'Reddit',
        icon: <FaReddit className='icon'/>
    },
    {
        id:50,
        url: 'https://slack.com/',
        name:'Slack',
        icon: <FaSlackHash className='icon'/>
    },
    {
        id:60,
        url: 'https://discordapp.com/',
        name:'Discordapp',
        icon: <FaDiscord className='icon'/>
    }
] 