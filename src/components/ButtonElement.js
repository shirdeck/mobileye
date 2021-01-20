import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
border-radius: 50px;
background: ${({ primary }) => (primary
? '#16d6fb' : '#16d6fb'
)};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#162838' : '#fff')};
font-size: ${({ fontBig }) => (fontBig
    ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: ${({ primary }) => 
    (primary ? '#fff' : '#01BF71')}:
    }
    &:active {
  transform: scale(0.96);
}
`