import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 30px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    padding: 0 8px;
    border: none;
    background-color: #f6f6f6ff;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      opacity: 0.8;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.8;
    }

    &.active {
      background-color: #ffd900;
      color: #000;
      border: none;
    }
  }
`;