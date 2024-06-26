import {FC} from "react";
import {SvgXml} from "react-native-svg";
import {VectorIconPropsModel} from "../../core/models/interfaces";

const ArrowIcon: FC<VectorIconPropsModel> = ({fill}) => {

    const iconSvg = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_6_1774" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                <rect x="16" y="16" width="16" height="16" transform="rotate(180 16 16)" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_6_1774)">
                <path d="M5.33333 1.33329L12 7.99996L5.33333 14.6666L4.15 13.4833L9.63333 7.99996L4.15 2.51663L5.33333 1.33329Z" fill='${fill || "#D1D1D1"}'/>
            </g>
        </svg>
    `;

    return (
        <SvgXml xml={iconSvg}/>
    )
}

export default ArrowIcon;
