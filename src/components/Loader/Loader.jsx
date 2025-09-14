import { StyledLoading, StyledSpinner, StyledLoadingText } from "./Loader.styled";

export const Loader = () => {
  return (
    <div>
      <StyledLoading>
        <StyledSpinner />
        <StyledLoadingText>Loading...</StyledLoadingText>
      </StyledLoading>
    </div>
  );
};
