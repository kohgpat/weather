import styled from "styled-components";

export const Cities = styled.div`
  margin-top: calc(20px + var(--topbar-height));
  padding: 20px;

  @media (min-width: 768px) {
    margin-top: calc(50px + var(--topbar-height));
  }

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
    grid-auto-rows: minmax(280px, auto);

    ${props =>
    // eslint-disable-next-line indent
      props.isMobile &&
      props.addCitySidebar &&
      props.addCitySidebar.isVisible &&
      `
      display: none;
    `};

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1028px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @supports not (display: grid) {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;

    ${props =>
    // eslint-disable-next-line indent
      props.isMobile &&
      props.addCitySidebar &&
      props.addCitySidebar.isVisible &&
      `
      display: none;
    `};
  }
`;

export const NoCitiesMessage = styled.div`
  margin-top: calc(20px + var(--topbar-height));
  padding: 20px;

  @media (min-width: 768px) {
    margin-top: calc(50px + var(--topbar-height));
  }
`;
