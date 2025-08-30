import styled from "styled-components";

export const StyledCast = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 220px);
  grid-template-rows: repeat(1, 410px);
  justify-content: center;
  gap: 24px;

  & > li {
    height: 410px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);

    & > h3 {
      margin: 10px 0 6px 0;
    }

    & > p {
      font-size: 13px;
    }
  }
`;

export const StyledProfile = styled.img`
  width: 220px;
`;
