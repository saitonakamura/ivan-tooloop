import React from 'react'
import { Slide } from '@saitonakamura/presa'
import TombstoneIcon from '../assets/svgReact/Tombstone'

export const RipSlide = props => (
  <Slide centered {...props}>
    <TombstoneIcon size={500} />
  </Slide>
)
