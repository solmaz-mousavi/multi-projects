import styled from "styled-components";
type StyledHomeWrapperPropsType = {
	scrollPosition: string;
}
export const StyledHomeWrapper = styled.div<StyledHomeWrapperPropsType>`
background-position: ${props => (props.scrollPosition)};
`