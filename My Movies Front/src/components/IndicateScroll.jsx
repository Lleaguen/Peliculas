import React from "react";
import { Arrow, Edge, Line, Text1 } from "./styles/IndicateScroll";
import { TiArrowDownThick } from 'react-icons/ti';

export default function IndicateScroll(){
    return(
        <Arrow>
            <Line/>
            <Edge>
                <TiArrowDownThick/>
            </Edge>
            <Text1>Scroll for more information...</Text1>
        </Arrow>
    )
}