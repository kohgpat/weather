import styled from "styled-components";

export const City = styled.div`
  height: 300px;
  width: 300px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  jusityf-content: space-between;
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
  visibility: hidden;
  cursor: pointer;

  ${City}:hover & {
    visibility: visible;
  }
`;

export const Stats = styled.div`
  margin: auto 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Stat = styled.h4`
  text-transform: capitalize;
`;
