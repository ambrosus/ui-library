import React from 'react';

const TailArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.73076 4.23917C8.03068 3.95348 8.50541 3.96502 8.79111 4.26494L13.7924 9.5154C14.0684 9.80507 14.0684 10.2603 13.7924 10.55L8.79111 15.8004C8.50541 16.1004 8.03068 16.1119 7.73076 15.8262C7.43084 15.5405 7.4193 15.0658 7.70499 14.7659L12.2136 10.0327L7.70499 5.29952C7.4193 4.9996 7.43084 4.52486 7.73076 4.23917Z'
        fill='#0C0C0D'
      />
    </svg>
  );
};

export default TailArrow;
