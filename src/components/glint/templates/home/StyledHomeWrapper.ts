import styled from "styled-components";
type StyledHomeWrapperPropsType = {
	scrollPosition: number;
}
export const StyledHomeWrapper = styled.div<StyledHomeWrapperPropsType>`
backgroundPosition: ${props => props.scrollPosition} ;
`