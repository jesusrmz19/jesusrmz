import { motion } from 'framer-motion';
import styled from 'styled-components';

const blackBox = {
  initial: {
    height: '100vh',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 2.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const TransitionStyles = styled.div`
  width: 100%;
  background: var(--alwaysblack);
  z-index: 1010;
  position: absolute;
  left: 0;
  p {
    font-size: 35px;
    text-align: center;
    font-family: var(--bold);
    text-transform: uppercase;
    color: var(--white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const InitialTransition = () => {
  return (
    <TransitionStyles>
      <motion.div
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add('overflow-hidden')}
        onAnimationComplete={() =>
          document.body.classList.remove('overflow-hidden')
        }
      >
        <motion.p initial="initial" animate="animate" variants={textContainer}>
          jrm
        </motion.p>
      </motion.div>
    </TransitionStyles>
  );
};

export default InitialTransition;
