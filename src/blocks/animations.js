import { keyframes } from 'styled-components'

export const heartbeat = keyframes`
  0% {
    transform: scale( 1 );
  }

  20% {
    transform: scale( 1.25 );
  }

  40% {
    transform: scale( 1 );
  }

  60% {
    transform: scale( 1.25 );
  }

  80% {
    transform: scale( 1 );
  }
  
  100% {
    transform: scale( 1 );
  }
`

export const flip = keyframes`
  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
`

export const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

export const createMoveAndDisappear = (x, y) => keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
    transform: translate(${x}, ${y})
  }

  100% {
    transform: translate(${x}, ${y});
    opacity: 0;
  }
`
