import styled from "styled-components";

export const InfoContainer = styled.div`
  position: relative;
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#162838")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  z-index: 1;
  height: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1030px) {
    flex-wrap: wrap;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  width: 50%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1030px) {
    width: 100%;
  }
`;

export const Column2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  height: 565px;

  @media screen and (max-width: 1030px) {
    width: 100%;
  }
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const HeadImg = styled.img`
  margin-bottom: 15px;
  position: relative;
  z-index: 3;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1.%;
  font-weight: 500;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: ${({ lightText }) => (lightText ? "#16d6fb" : "#162838")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 23px;
  font-family: ${({ fontFamily }) =>
    fontFamily ? "'Anton', sans-serif" : "'Hind Siliguri', sans-serif"};
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: ${({ isButton }) => (isButton ? "flex" : "none")};
  justify-content: flex-start;
`;

export const ElementWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0 -100px;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 565px;
`;
