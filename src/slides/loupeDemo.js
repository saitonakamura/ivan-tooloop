import React from 'react'
import { Slide } from '@saitonakamura/presa'
import { ItTitle } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const LoupeDemoSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <ItTitle>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIGNvbnNvbGUubG9nKCdjbGljaycpOyAgICAKfSk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygidGltZW91dCIpOwp9LCA1MDAwKTsKCmNvbnNvbGUubG9nKCJIZWxsbyB3b3JsZCIpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D"
      >
        Loupe by Philip Roberts
      </a>
    </ItTitle>
  </Slide>
)
