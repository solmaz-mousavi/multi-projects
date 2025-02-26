import styled from "styled-components";
type StyledHomeWrapperPropsType = {
	$scrollposition: string;
}
export const StyledHomeWrapper = styled.div<StyledHomeWrapperPropsType>`
background-position: ${props => props.$scrollposition};
`;