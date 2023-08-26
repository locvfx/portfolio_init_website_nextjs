import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <a href= "" style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
    </Div1>
    <Div2>
      <li>
        
          <NavLink href="/">Projects</NavLink>
       
      </li>
      <li>
        
          <NavLink>Technologies</NavLink>
       
      </li>        
      <li>
      
          <NavLink>About</NavLink>
       
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        
      </Div3>
    </Container>
);

export default Header;
