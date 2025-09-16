import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 40px 20px;
  color: #ffd900;
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 120px;
  font-weight: 900;
  margin-bottom: 20px;
  color: #ffd900;
  text-shadow: 3px 3px 0 #333, 6px 6px 0 rgba(255, 217, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 80px;
  }
`;

export const NotFoundSubtitle = styled.h2`
  font-size: 34px;
  margin-bottom: 20px;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const NotFoundText = styled.p`
  font-size: 18px;
  margin: 0 auto 30px;
  max-width: 450px;
  line-height: 1.6;
  color: #ccc;
`;

export const FilmReel = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 40px;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 180px;
    background: repeating-linear-gradient(
      to bottom,
      #000,
      #000 10px,
      #ffd900 10px,
      #ffd900 20px
    );
    border-radius: 5px;
  }
  
  &::before {
    left: 0;
  }
  
  &::after {
    right: 0;
    bottom: 20px;
  }
`;

export const FilmStrip = styled.div`
  width: 120px;
  height: 180px;
  margin: 0 auto;
  background: repeating-linear-gradient(
    to bottom,
    #ffd900,
    #ffd900 10px,
    #000 10px,
    #000 20px
  );
  position: relative;
  z-index: 1;
  border-radius: 3px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(90deg, transparent 5%, rgba(255, 217, 0, 0.1) 5%, rgba(255, 217, 0, 0.1) 10%, transparent 10%),
      linear-gradient(90deg, transparent 15%, rgba(255, 217, 0, 0.1) 15%, rgba(255, 217, 0, 0.1) 20%, transparent 20%),
      linear-gradient(90deg, transparent 25%, rgba(255, 217, 0, 0.1) 25%, rgba(255, 217, 0, 0.1) 30%, transparent 30%),
      linear-gradient(90deg, transparent 35%, rgba(255, 217, 0, 0.1) 35%, rgba(255, 217, 0, 0.1) 40%, transparent 40%),
      linear-gradient(90deg, transparent 45%, rgba(255, 217, 0, 0.1) 45%, rgba(255, 217, 0, 0.1) 50%, transparent 50%),
      linear-gradient(90deg, transparent 55%, rgba(255, 217, 0, 0.1) 55%, rgba(255, 217, 0, 0.1) 60%, transparent 60%),
      linear-gradient(90deg, transparent 65%, rgba(255, 217, 0, 0.1) 65%, rgba(255, 217, 0, 0.1) 70%, transparent 70%),
      linear-gradient(90deg, transparent 75%, rgba(255, 217, 0, 0.1) 75%, rgba(255, 217, 0, 0.1) 80%, transparent 80%),
      linear-gradient(90deg, transparent 85%, rgba(255, 217, 0, 0.1) 85%, rgba(255, 217, 0, 0.1) 90%, transparent 90%);
  }
`;

export const HomeButton = styled(NavLink)`
  display: inline-block;
  padding: 12px 30px;
  background-color: #ffd900;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;