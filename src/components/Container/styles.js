import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  min-width: 320px;

  @media (min-width: 768px) {
    width: 1200px;
  }
`;
