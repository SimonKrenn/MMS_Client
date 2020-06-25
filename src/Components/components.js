import styled from "styled-components";

/**
 * Stylesheet
 */

const FlexContainer = styled.div`
  margin: 2% 2% 2% 2%;
  display: flex;
`;
const FlexRow = styled.div`
  width: 50%;
  height: 70vh;
`;

/**const FormContainer = styled.div`
border: 1px solid black;
align-self: flex-start;
max-width: 50%;
overflow: hidden;
**/
const Header = styled.div`
width: 100%;
height: 4vh;
background-color: black;
color: white;
padding-top: 20px;
padding-left: 20px
position: absolute;
`;

const Footer = styled.div`
  width: 100%;
  height: 3vh;
  background-color: black;
  color: white;
  bottom: 0;
  position: absolute;
`;

const TextField = styled.input`
  border: none;
  width: 100px;
  height: 28px;
  margin: 8px;
  background-color: #e1dfe6;
  border-radius: 2px;
`;

const NumberField = styled.input`
  border: none;
  width: 50px;
  height: 28px;
  margin: 8px;
  background-color: #e1dfe6;
  border-radius: 2px;
  padding-left: 8px;
`;

const FileInput = styled.input.attrs({
    type: 'file'
})`
    width: 1000px;

`

const Button = styled.button`
width: 100px;

`

const ImageContainer = styled.div`
  float: right;
  width: 100%
  height: 100%
  border: 1px solid black;
  display: flex;
  justify-content: center;
  margin-right: 20%;
  box-shadow 2px 2px 10px #e1dfe6 ;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export {
  FlexContainer,
  Header,
  Footer,
  TextField,
  ImageContainer,
  Image,
  FlexRow,
  NumberField,
  FileInput, Button
};
