import styled from "styled-components";

export const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const Wrapper = styled.div`
height: 100%;
width: 50%;
position: absolute;
top: 0;
right: 0;

@media screen and (max-width: 1030px) {
    position: relative;
    width: 100%;
  }
`;