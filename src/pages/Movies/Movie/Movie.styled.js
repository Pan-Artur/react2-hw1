import styled from "styled-components";

export const StyledMovie = styled.section`
  padding: 30px 0 0 0;
`;

export const StyledCouple = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const StyledPoster = styled.img`
  width: 450px;
  height: auto;
  border: solid 5px black;
`;

export const StyledDescription = styled.article`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  gap: 30px;
  width: 450px;

  & > h2 {
    font-size: 35px;
  }
`;

export const StyledVote = styled.p`
  color: ${(props) => props.color};
  font-weight: 900;
  font-size: 23px;
`;

export const StyledOverview = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;

  & > span {
    padding: 0 0 20px 0;
    font-size: 20px;
    background-color: #fff;
  }

  & > p {
    padding: 20px;
    border-radius: 20px;
    background-color: #ffd900;
  }
`;

export const StyledGenres = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;

  & > span {
    padding: 0 0 20px 0;
    font-size: 20px;
    background-color: #fff;
  }

  & > p {
    width: fit-content;
    padding: 20px;
    border-radius: 20px;
    color: #ffd900;
    background-color: #000000;
  }
`;

export const StyledManagment = styled.div`
  padding: 30px 0;

  & > h2 {
    margin: 0 0 30px 0;
    font-size: 40px;
  }

  & > ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  & li {
    padding: 5px 10px;
    background-color: #ffd900;
    border-radius: 10px;

    transition: all 300ms ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  & a {
    padding: 10px 15px;
    font-size: 18px;
    font-weight: 500;
    color: #000000;
  }
`;
