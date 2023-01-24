import styled from "styled-components";

export const OnlineStatus = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;

border: solid 2px ${({status}) => (status ? 'green' : 'red')};
filter: drop-shadow(2px 2px 2px rgba(29, 132, 27, 0.369));

margin-right: 30px;
`