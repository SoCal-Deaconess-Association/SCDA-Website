import React, { SVGProps } from 'react';

interface SvgProps extends SVGProps<SVGSVGElement> {
    color1?: string;
    color2?: string;
}

export const FullscreenIcon: React.FC<SvgProps> = ({ color1 = "#000", color2 = "#111", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 23.06 23.06"
        {...props}
    >
        <defs>
            <style>{`.cls-2{stroke-width:0;fill:${color1}}`}</style>
        </defs>
        <rect
            width={23.06}
            height={23.06}
            rx={4.7}
            ry={4.7}
            style={{
                strokeWidth: 0,
                fill: color2,
            }}
        />
        <path
            d="M20.4 14.92c0-.54-.42-.98-.93-.98s-.93.44-.93.98v2.03l-3.77-3.77a.942.942 0 0 0-1.32 0c-.36.36-.36.96 0 1.32l3.75 3.74h-2.02c-.55 0-1 .42-1 .93s.44.93 1 .93h4.23c.55 0 .99-.42 1-.93v-4.26M8.29 13.19l-3.76 3.77v-2.03c0-.54-.42-.98-.93-.98-.52 0-.93.44-.93.98v4.26c0 .52.45.93 1 .93H7.9c.55 0 .99-.42.99-.93s-.44-.93-.99-.93H5.88l3.75-3.74c.36-.36.36-.96 0-1.32a.924.924 0 0 0-1.32 0M14.77 9.88l3.77-3.77v2.03c0 .54.42.98.93.98.52 0 .93-.44.93-.98V3.88c0-.52-.45-.93-1-.93h-4.23c-.55 0-1 .42-1 .93s.44.93 1 .93h2.02l-3.75 3.74c-.36.36-.36.95 0 1.32.36.37.95.37 1.32 0M5.87 4.82h2.02c.55 0 .99-.42.99-.93s-.44-.93-.99-.93H3.66c-.55 0-.99.42-1 .93v4.26c0 .54.42.98.93.98s.93-.44.93-.98V6.12l3.76 3.77c.37.37.96.37 1.32 0 .36-.36.36-.95 0-1.32L5.85 4.82z"
            className="cls-2"
        />
    </svg>
);

export default FullscreenIcon;
