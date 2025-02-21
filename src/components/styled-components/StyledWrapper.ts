import styled from "styled-components";

export type StyledWrapperPropsType = {
  displayWidth: string;
};

export const StyledWrapper = styled.div<StyledWrapperPropsType>`
  background-color: #000;
  height: calc(100vh - 60px);
  margin: 0 auto;
  transition: all ease-out 400ms;
	container-type: inline-size;
  max-width: ${(props) => props.displayWidth};
`;
