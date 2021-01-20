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
                          <Button to='home' dark={dark}>{buttonLabel}</Button>
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
