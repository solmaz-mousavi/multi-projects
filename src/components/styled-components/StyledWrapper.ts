import styled from "styled-components";

export type StyledWrapperPropsType = {
	displayWidth: string;
}

export const StyledWrapper = styled.div<StyledWrapperPropsType>`
background-color: #000;


margin: 0 auto;
overflow-y: auto;
transition: all ease-out 400ms;

max-width: ${props => props.displayWidth};
`