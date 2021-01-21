import styled from "styled-components";

export const FormElement = styled.form`
width: 100%;
min-width: 500px;
height: 80%;
background-color: white;
box-shadow: 5px 10px 19px -8px rgba(0,0,0,0.75);
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 500px) {
    min-width: 40%;
    height: 100%;
  }
`;

export const Header = styled.div`
width: 100%;
margin-bottom: 20px;
background-color: #16d6fb;
height: 100px;
color: #2c4970;
font-family: 'Anton', sans-serif;
display: flex;
justify-content: center;
align-items: center;
font-size: 48px;
text-transform: uppercase;
`

export const FormBody = styled.div`
width: 95%;
height: 60%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
@media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const Input = styled.input`
height: 30px;
width: 40%;
margin: 0 10px 25px;
padding: 0 10px;
border-radius: 1px;
border: 1px solid #2e6e9f;
font-family: "Hind Siliguri", sans-serif;
color: #777777;

@media screen and (max-width: 500px) {
    margin: 0 10px 10px;
  }
`

export const Select = styled.select`
height: 30px;
width: 40%;
margin: 0 10px 25px;
padding: 0 10px;
border-radius: 1px;
border: 1px solid #2e6e9f;
font-family: "Hind Siliguri", sans-serif;
color: #777777;
@media screen and (max-width: 500px) {
    width: 47%;
    margin: 0 10px 10px;
  }
`
export const SubscriptionWrapper = styled.div`
display: flex;
flex-direction: row;
`

export const SubCheckbox = styled.input`
color: blue;
margin-right: 5px;
`

export const Disclaimer = styled.p`
color: #a0a0a0;
font-size: 11px;
width: 100%;
`

export const RegisterButton = styled.a`
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
text-decoration: none;
color: #a0a0a0;
background-color: #16d6fb;
color: #2c4970;
height: 40px;
font-size: 20px;
font-weight: 700;
width: 50%;
margin: 20px auto 0 auto;
border-radius: 25px;
cursor: pointer;
      &:active {
        transform: scale(0.98);
      }

      @media screen and (max-width: 500px) {
    height: 40px;
    width: 60%;
    margin-top: 20px;
  }
`