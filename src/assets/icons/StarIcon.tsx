import {FC} from "react";
import {SvgXml} from "react-native-svg";

export const StarIcon: FC = () => {

    const svgIcon = `
       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_6_1949" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
             <rect width="16" height="16" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_6_1949)">
             <path d="M3.88331 14.6667L4.96665 9.98333L1.33331 6.83333L6.13331 6.41667L7.99998 2L9.86665 6.41667L14.6666 6.83333L11.0333 9.98333L12.1166 14.6667L7.99998 12.1833L3.88331 14.6667Z" fill="#FFC700"/>
          </g>
       </svg>
    `;

    return (
        <SvgXml xml={svgIcon} />
    )
}
