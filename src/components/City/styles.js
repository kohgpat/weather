import styled from "styled-components";

export const City = styled.div`
  height: 280px;
  width: 280px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    height: 300px;
    width: 300px;
  }

  @supports not (display: grid) {
    margin-top: 30px;

    @media (orientation: landscape) {
      &:not(:last-child) {
        margin-right: 30px;
      }
    }

    @media (min-width: 768px) {
      &:not(:last-child) {
        margin-right: 30px;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.h1`
  margin: 10px;
`;

export const RemoveButton = styled.button.attrs({ type: "button" })`
  padding: 0;
  font-weight: bold;
  font-size: 32px;
  background-color: transparent;
  border: 0;
  margin: 10px 10px 10px auto;
  visibility: visibility;
  cursor: pointer;

  @media (min-width: 768px) {
    visibility: hidden;

    ${City}:hover & {
      visibility: visible;
    }
  }
`;

export const WeatherIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Stats = styled.div`
  margin: auto 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Stat = styled.h4`
  text-transform: capitalize;
  margin: 0;

  ${props =>
    props.major &&
    `
    font-size: 3rem;
  `};
`;
