import styled from "styled-components";

export const Cities = styled.div`
  margin-top: 50px;
  padding: 20px;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    grid-auto-rows: minmax(300px, auto);
  }

  @supports not (display: grid) {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }
`;
