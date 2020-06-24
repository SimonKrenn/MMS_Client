import React, { Component, useRef } from 'react';
import {ImageContainer, Image, TextField, UploadContainer} from './components'
import Form from './inputs'


class Uploader extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            fileURL: null,
            file: null,
            x: 0,
            y: 0,
            angle: 0,
            text: ' ',
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getTextPosition = this.getTextPosition.bind(this);
    }
     handleChange(event) {
        const target= event.target;
        if (target.name === 'x'){
            this.setState({
                x: target.value
            })
        }
        else if(target.name === "y"){
            this.setState({
                y: target.value
            })
        }
        else if(target.name === "text"){
            this.setState({
                text: target.value
            })
        }else{
            this.setState({
                fileURL: URL.createObjectURL(event.target.files[0]),
                file: event.target.files[0]
              })
        }
        }


     getTextPosition(e){
        //const inputRef = useRef();
        let rect = e.target.getBoundingClientRect()

        let xCoordinate = Math.round(rect.left- e.nativeEvent.offsetX);
        let yCoordinate = e.nativeEvent.offsetY//Math.round( e.nativeEvent.offsetY - rect.top);
       this.setState({
           x: xCoordinate,
           y: yCoordinate
       })
     }   
    
    onFormSubmit(e){
        var data;
        console.log(this.state.x + "X" + this.state.y + "Y");
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',this.state.file);
        formData.append('x', this.state.x )
        formData.append('y', this.state.y )
        formData.append('text', this.state.text )
        formData.append('angle', this.state.angle)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        fetch(`http://manujell.ddns.net:8080/upload`, {
            method: 'POST',
            body: formData
          }).then(response => {
              console.log(response.status)
              response.blob()
              .then(blobResponse =>{
                data = URL.createObjectURL(blobResponse);
              }).then(() => this.setState({
                fileURL: data
            }))
          })
    }

    render() {
        return (
            <div>
            <UploadContainer>
            <form onSubmit={this.onFormSubmit}>
                <TextField type="file" name="myImage" onChange= {this.handleChange} />
                <TextField type="number" name="x" value={this.state.x} onChange={this.handleChange}/>
                <TextField type="number" name="y"value={this.state.y} onChange={this.handleChange}/>
                <TextField type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
                <button type="submit">Upload</button>
            </form>
            <Form></Form>
            <ImageContainer>
            <Image  id="Image" onClick={this.getTextPosition} src={this.state.fileURL}/>
            </ImageContainer>
            </UploadContainer>
            </div>
        )
    }
}

export default Uploader;