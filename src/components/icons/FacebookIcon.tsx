import * as React from "react";
const FacebookIcon = ({ width }: { width: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 36 36">
    <linearGradient
      id="a"
      x1={6.228}
      x2={42.077}
      y1={4.896}
      y2={43.432}
      gradientTransform="translate(-6 -6)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#0d61a9" />
      <stop offset={1} stopColor="#16528c" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M36 34a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2z"
      style={{
        fill: "url(#a)",
      }}
    />
    <path
      d="M19 32V21h-4v-6h4v-2.138c0-5.042 2.666-7.818 7.505-7.818 1.995 0 3.077.14 3.598.208l.858.111.039.861V11h-3.635C26.237 11 26 12.378 26 13.535V15h4.723l-.928 6H26v11z"
      opacity={0.05}
    />
    <path
      d="M19.5 31.5v-11h-4v-5h4v-2.638c0-4.788 2.422-7.318 7.005-7.318 1.971 0 3.03.138 3.54.204l.436.057.02.442V10.5h-3.135c-1.623 0-1.865 1.901-1.865 3.035V15.5h4.64l-.773 5H25.5v11z"
      opacity={0.07}
    />
    <path
      fill="#fff"
      d="M27.365 10H30V6.246c-.492-.064-1.531-.203-3.495-.203-4.101 0-6.505 2.08-6.505 6.819V16h-4v4h4v11h5V20h3.938l.618-4H25v-2.465c0-1.874.612-3.535 2.365-3.535Z"
    />
  </svg>
);
export default FacebookIcon;
