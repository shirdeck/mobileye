//=============================================================================
// Image Component
//=============================================================================

import React from 'react'
import {Img, Wrapper} from './ImgElement';
import Street from '../../images/img_1.jpg';


const ImgWrapper = () => {
return (
    <Wrapper>
    <Img src={Street} alt=""/>
    </Wrapper>
)
}

export default ImgWrapper;