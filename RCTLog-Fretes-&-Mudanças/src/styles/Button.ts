import styled from "styled-components";


export const Button = styled.button`
width: 270px;
height: 49px;
border-radius: 10px;
text-align:center;
background-color: var(--color-secundary);
color: var(--grey-2);
font-size: 20px;
font-weight: bold;
border: 0;
:hover{
    animation: pulse 1s infinite;
}
`
