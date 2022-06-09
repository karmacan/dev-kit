import {motion} from 'framer-motion';

export const MotionToggleOpacityWithShift = ({children, hidden}) => (
  <motion.div
    initial={hidden ? 'hide' : 'show'}
    animate={hidden ? 'show' : 'hide'}
    variants={{show: {opacity: 1, x: 0}, hide: {opacity: 0, x: -40}}}
  >
    {children}
  </motion.div>
);

export const MotionToggleHeight = ({children, hidden}) => (
  <motion.div
    initial={hidden ? 'hide' : 'hide'}
    animate={hidden ? 'show' : 'hide'}
    variants={{show: {height: 'auto'}, hide: {height: 0}}}
  >
    {children}
  </motion.div>
);
