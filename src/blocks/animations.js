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

export const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                     transform: translate3d(0,0,0);
               transform-style: preserve-3d;
                    box-shadow: 0 0 0 rgba(0,0,0,.9);
  }

  40%, 43% {
    transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
                     transform: translate3d(0, -30px, 0);
               transform-style: preserve-3d;
                    box-shadow: 0 30px 30px rgba(0,0,0,.01);
  }

  70% {
    transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
                     transform: translate3d(0, -15px, 0);
               transform-style: preserve-3d;
                    box-shadow: 0 15px 15px rgba(0,0,0,.5);
  }

  90% {
            transform: translate3d(0,-4px,0);
      transform-style: preserve-3d;
           box-shadow: 0 4px 4px rgba(4px,0,4px,.7);
  }
`
