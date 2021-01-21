//=============================================================================
// Section Component
//=============================================================================
/* Reusable info component that holds 2 colums: one for text and button and one for media/form which will be passed on using children components.
'Data.js' is imported into the 'App.js' file to populate sections and components from 'InfoElement.js' imported here for styling. This component could later be used to map an array of objects into sections. */
//=============================================================================


import React from "react";
import { Button } from '../ButtonElement';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, HeadImg, Heading, Subtitle, BtnWrap, ElementWrap } from "./InfoElement";


const InfoSection = ({lightBg, id, imgStart, headImg, lightText, headline, darkText, description, buttonLabel, children, alt, isButton, fontFamily, dark}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                  <Column1>
                  <TextWrapper>
                      <HeadImg src={headImg} alt={alt}/>
                      <Heading lightText={lightText} fontFamily={fontFamily}>{headline}</Heading>
                      <Subtitle darkText={darkText} fontFamily={fontFamily}>{description} </Subtitle>
                      <BtnWrap isButton={isButton}>
                          <Button href="/" dark={dark}>{buttonLabel}</Button>
                      </BtnWrap>
                  </TextWrapper>
                  </Column1>
                  <Column2>
                  <ElementWrap>
                    {children}
                  </ElementWrap>
                  </Column2>
              </InfoRow>
          </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
