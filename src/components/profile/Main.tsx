import React from "react";

type props = {
  nume?: string;
  linia1?: string;
  linia2?: string;
};

function Main({ nume, linia1, linia2 }: props) {
  return (
    <div className="main">
      {nume ? (
        <>
          <h2>Bine ai venit, {nume}!</h2>
          <h1>Acesta este profilul tău</h1>
        </>
      ) : (
        <>
          {linia1 && <h2>{linia1}</h2>} {linia2 && <h1>{linia2}</h1>}
        </>
      )}
      <svg
        width="1387"
        height="975"
        viewBox="0 0 1387 975"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100.625 389.622C-40.324 293.549 1.48083 50.7761 22.3834 -1H1387V951.681C1182 1018.5 934.12 924.161 885 833.5C797.5 672 896.665 572.222 885 503.5C862 368 757.618 235.576 547.825 296.155C338.031 356.734 282.995 490.298 100.625 389.622Z"
          fill="url(#paint0_angular)"
        />
        <path
          d="M1032.85 174.571C952.69 170.901 967.585 56.2715 985.053 0.27533H1387L1387 648.149C1298.89 634.58 1162.42 571.551 1155.51 496.788C1146.87 403.333 1206.18 396.453 1206.18 276.625C1206.18 156.797 1133.05 179.157 1032.85 174.571Z"
          fill="url(#paint1_linear)"
        />
        <ellipse
          cx="272.459"
          cy="292.103"
          rx="10.9196"
          ry="12.0691"
          fill="#583D72"
        />
        <ellipse
          cx="272.459"
          cy="292.103"
          rx="10.9196"
          ry="12.0691"
          fill="#583D72"
        />
        <ellipse
          cx="272.459"
          cy="292.103"
          rx="10.9196"
          ry="12.0691"
          fill="#583D72"
        />
        <ellipse
          cx="232.803"
          cy="348.426"
          rx="14.9427"
          ry="16.6668"
          fill="#583D72"
        />
        <ellipse
          cx="232.803"
          cy="348.426"
          rx="14.9427"
          ry="16.6668"
          fill="#583D72"
        />
        <ellipse
          cx="232.803"
          cy="348.426"
          rx="14.9427"
          ry="16.6668"
          fill="#583D72"
        />
        <ellipse
          cx="181.078"
          cy="259.345"
          rx="29.8853"
          ry="33.3336"
          fill="#583D72"
        />
        <ellipse
          cx="181.078"
          cy="259.345"
          rx="29.8853"
          ry="33.3336"
          fill="#583D72"
        />
        <ellipse
          cx="181.078"
          cy="259.345"
          rx="29.8853"
          ry="33.3336"
          fill="#583D72"
        />
        <ellipse
          cx="296.597"
          cy="238.08"
          rx="10.9196"
          ry="12.0691"
          fill="#583D72"
        />
        <ellipse
          cx="296.597"
          cy="238.08"
          rx="10.9196"
          ry="12.0691"
          fill="#583D72"
        />
        <ellipse
          cx="296.597"
          cy="238.08"
          rx="10.9196"
          ry="12.0691"
          fill="#583D72"
        />
        <ellipse
          cx="312.114"
          cy="324.288"
          rx="14.9427"
          ry="20.1151"
          fill="#583D72"
        />
        <ellipse
          cx="312.114"
          cy="324.288"
          rx="14.9427"
          ry="20.1151"
          fill="#583D72"
        />
        <ellipse
          cx="312.114"
          cy="324.288"
          rx="14.9427"
          ry="20.1151"
          fill="#583D72"
        />
        <path
          d="M100.625 389.622C-40.324 293.549 1.48083 50.7761 22.3834 -1H1387V951.681C1182 1018.5 934.12 924.161 885 833.5C797.5 672 896.665 572.222 885 503.5C862 368 757.618 235.576 547.825 296.155C338.031 356.734 282.995 490.298 100.625 389.622Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <radialGradient
            id="paint0_angular"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(816.284 244.503) rotate(90.9039) scale(708.416 865.391)"
          >
            <stop offset="0.0384205" stopColor="#9F5F80" />
            <stop offset="1" stopColor="#583D72" />
          </radialGradient>
          <linearGradient
            id="paint1_linear"
            x1="1179.12"
            y1="0.27533"
            x2="1179.12"
            y2="580.495"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B46D91" />
            <stop offset="1" stopColor="#583D72" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="987.5"
            y1="163.5"
            x2="990.502"
            y2="846.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.161458" stopColor="#9F5F80" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Main;
