import React, {Component} from 'react';
import {Container, Header, Footer, EditorContainer, TextField} from './Components/components'
import Uploader from './Components/uploader'
import { Stage, Layer, Rect, Text } from 'react-konva';

export default class App extends Component {
  
  render(){
  return (
    <>
    <Header>Image Macro Generator</Header>
    <Uploader>
    </Uploader>
    <Footer>Footer</Footer>
    </>
  );
}
}

