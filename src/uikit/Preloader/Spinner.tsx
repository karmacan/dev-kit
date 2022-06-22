import React from 'react';

export const Spinner = () => {
  return (
    <>
      <svg
        className='spinner'
        width='65px'
        height='65px'
        viewBox='0 0 66 66'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          className='path'
          fill='none'
          strokeWidth='6'
          strokeLinecap='round'
          cx='33'
          cy='33'
          r='30'
        ></circle>
      </svg>

      <style jsx>{`
        .spinner {
          $offset: 187;
          $duration: 1.4s;

          animation: rotateSpinner $duration linear infinite;

          .path {
            stroke-dasharray: $offset;
            stroke-dashoffset: 0;
            transform-origin: center;
            animation: changeStrokeLength $duration ease-in-out infinite,
              changeStrokeColors calc($duration * 4) ease-in-out infinite;
          }

          @keyframes rotateSpinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(270deg);
            }
          }

          @keyframes changeStrokeLength {
            0% {
              stroke-dashoffset: $offset;
            }
            50% {
              stroke-dashoffset: calc($offset/4);
              transform: rotate(135deg);
            }
            100% {
              stroke-dashoffset: $offset;
              transform: rotate(450deg);
            }
          }

          @keyframes changeStrokeColors {
            0% {
              stroke: #4285f4;
            }
            100% {
              stroke: #4285f4;
            }
          }
        }
      `}</style>
    </>
  );
};
