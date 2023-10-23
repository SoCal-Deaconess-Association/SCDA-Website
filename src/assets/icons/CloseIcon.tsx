import React from 'react';

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        viewBox="0 0 26 26"
        style={{
            filter: "drop-shadow(0 0 10px rgba(54, 55, 58, 0.527))",
            padding: "7px",
        }}
        {...props}
    >
        <path
            d="M4.765 5.112h17.07v15.745H4.765z"
            style={{
                fill: "#eff8f9",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.08332,
            }}
        />
    </svg>
);

export default CloseIcon;
