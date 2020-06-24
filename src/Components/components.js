
import styled from 'styled-components';


const Container = styled.div`
`
const UploadContainer = styled.div`
    margin-top: 2%;
    margin-left: 2%;
`
const Header = styled.div`
width: 100%;
height: 4vh;
background-color: black;
color: white;
padding-top: 20px;
padding-left: 20px
position: absolute;
`

const Footer = styled.div`
width: 100%;
height: 3vh;
background-color: black;
color: white;
bottom: 0;
position: absolute;
`




const TextField = styled.input`
border: 1px solid black;
`

const ImageContainer = styled.div`
float: right;
overflow: hidden;
width: 30%;
height: 50vh;
margin-right: 20%;
border: 1px solid black;
display: flex;
justify-content: center;
`

const Image = styled.img`

max-width: 100%;
max-height: 100%;
`

export {Container, Header, Footer, TextField, ImageContainer, Image, UploadContainer} ;
