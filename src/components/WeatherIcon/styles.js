import styled from "styled-components";

const ENDPOINT = "https://openweathermap.org/img/w/";

export const Icon = styled.div`
  width: 50px;
  height: 50px;

  ${props =>
    props.icon &&
    `
    background-image: url(${ENDPOINT}${props.icon}.png);
  `};
`;
