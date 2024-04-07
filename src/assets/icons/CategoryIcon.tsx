import {FC} from "react";
import {VectorIconPropsModel} from "../../core/models/interfaces";
import {SvgXml} from "react-native-svg";

const CategoryIcon: FC<VectorIconPropsModel> = ({fill}) => {

    const iconSvg = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_3002_475" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_3002_475)">
                <path d="M2 10V2H10V10H2ZM4 8H8V4H4V8ZM2 22V14H10V22H2ZM4 20H8V16H4V20ZM14 10V2H22V10H14ZM16 8H20V4H16V8ZM14 22V14H22V22H14ZM16 20H20V16H16V20Z" fill='${fill || "#CACACA"}'/>
            </g>
        </svg>
    `

    return (
        <SvgXml xml={iconSvg}/>
    )
}

export default CategoryIcon;
