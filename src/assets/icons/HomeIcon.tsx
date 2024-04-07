import {FC} from "react";
import {VectorIconPropsModel} from "../../core/models/interfaces";
import {SvgXml} from "react-native-svg";

const HomeIcon: FC<VectorIconPropsModel> = ({fill}) => {

    const iconSvg = `
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_3002_470" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                  height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_3002_470)">
                <path d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM4 21V9L12 3L20 9V21H13V15H11V21H4Z" fill='${fill || "#CACACA"}'/>
            </g>
        </svg>
    `;

    return (
        <SvgXml xml={iconSvg}/>
    )
}

export default HomeIcon
