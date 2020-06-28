import styled from "styled-components";

export const ErrorWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;

`;
export const message = styled.h3`
margin: 3rem;
font-size: 30px;
`;
export const button = styled.button`
	background-color:#ff0000;
	border-radius:42px;
	border:2px solid #000000;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:19px;
	padding:18px 40px;
	text-decoration:none;

&:hover {
	background-color:#8f063d;
}
&:active {
	position:relative;
	top:1px;
}
`;