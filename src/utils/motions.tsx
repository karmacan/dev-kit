import React from 'react';
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

// todo: replace with ToggleHeightMotion
export const MotionToggleHeight = ({children, hidden}) => (
  <motion.div
    initial={hidden ? 'hide' : 'hide'}
    animate={hidden ? 'show' : 'hide'}
    variants={{show: {height: 'auto'}, hide: {height: 0}}}
  >
    {children}
  </motion.div>
);

export type TMotionProps = {
  reanimateOn?: any; // for animate on rerender (AnimatePresense)
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  duration?: number; // s
  doOnlyOnExit?: boolean;
  isHidden?: boolean;
  initialHeight?: number;
};

export const ToggleHeightMotion = ({
  children,
  style,
  isHidden,
  duration = 0.2, // s
  initialHeight = 0,
}: TMotionProps) =>
  isHidden === undefined ? (
    <>{children}</>
  ) : (
    <motion.div
      style={{overflowY: 'hidden', ...style}}
      initial='hide'
      animate={isHidden ? 'hide' : 'show'}
      variants={{
        show: {height: 'auto'},
        hide: {height: initialHeight},
      }}
      transition={{duration}}
    >
      {children}
    </motion.div>
  );

export const BlurMotion = ({
  reanimateOn,
  children,
  duration = 0.2, // s
  doOnlyOnExit = false,
}: TMotionProps) => (
  <motion.div
    key={reanimateOn}
    initial={{opacity: doOnlyOnExit ? 1 : 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration}}
  >
    {children}
  </motion.div>
);

export const LeftShiftMotion = ({children}: TMotionProps) => (
  <motion.div initial={{x: -100}} animate={{x: 0}} exit={{x: -100}}>
    {children}
  </motion.div>
);

export const RightShiftMotion = ({children, style}: TMotionProps) => (
  <motion.div style={style} initial={{x: 100}} animate={{x: 0}} exit={{x: 100}}>
    {children}
  </motion.div>
);
