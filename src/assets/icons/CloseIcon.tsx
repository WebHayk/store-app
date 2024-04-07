import {FC} from "react";
import {SvgXml} from "react-native-svg";
import {VectorIconPropsModel} from "../../core/models/interfaces";

const CloseIcon: FC<VectorIconPropsModel> = ({fill}) => {

    const iconSvg = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_37_533" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_37_533)">
                <path d="M8.4 17L7 15.6L10.6 12L7 8.42499L8.4 7.02499L12 10.625L15.575 7.02499L16.975 8.42499L13.375 12L16.975 15.6L15.575 17L12 13.4L8.4 17Z" fill='${fill || "#9D9D9D"}'/>
            </g>
        </svg>
    `;

    return (
        <SvgXml xml={iconSvg} />
    )
}

export default CloseIcon;
