import React, { Component, useRef, useState} from 'react';
import {ImageContainer, Image, TextField, UploadContainer, FormContainer} from './components'



class Uploader extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            fileURL: null,
            file: null,
            x: 0,
            y: 0,
            angle: 0,
            fontSize : 50,
            text: ' ',
            x2: 0,
            y2: 0,
            angle2: 0,
            text2: '',
            fontSize2: 50,
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
            
        }else if(target.name === "x2"){
            this.setState({
                x2: target.value
            })
        }
        else if(target.name === "y2"){
            this.setState({
                y2: target.value
            })
        }
        else if(target.name === "text2"){
            this.setState({
                text2: target.value
            })
            
        }
        else{
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
        let yCoordinate = e.nativeEvent.offsetY
       this.setState({
           x: xCoordinate,
           y: yCoordinate
       })
     }   
    
     createJSONRequest(){
         var Obj1  = {x: this.state.x, y: this.state.y, text: this.state.text, angle: this.state.angle, fontSize: this.state.fontSize}
         var Obj2 = {x: this.state.x2, y: this.state.y2, text: this.state.text2, angle: this.state.angle2, fontSize: this.state.fontSize2}

         var JSONData = []
         JSONData.push(Obj1);
         JSONData.push(Obj2);

        return JSONData
     }

    onFormSubmit(e){
        var JSONData = this.createJSONRequest();
        var data;
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',this.state.file);
        formData.append('textData', JSON.stringify(JSONData))
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        fetch(`http://manujell.ddns.net:8080/generate`, {
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

     handleSubmit = e => {
        e.preventDefault();
        console.log("inputFields");
      };

    render() {
        return (
            <div>
            <UploadContainer>
            <form onSubmit={this.onFormSubmit}>
                <input type="file" name="myImage" onChange= {this.handleChange} />
                <br/>
                <label>X Coordinate</label>
                <TextField type="number" name="x" value={this.state.x} onChange={this.handleChange}/>
                <label>Y Coordinate</label>
                <TextField type="number" name="y"value={this.state.y} onChange={this.handleChange}/>
                <label>Text</label>
                <TextField type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
                <br/>
                <label>X Coordinate</label>
                <TextField type="number" name="x2" value={this.state.x2} onChange={this.handleChange}/>
                <label>Y Coordinate</label>
                <TextField type="number" name="y2"value={this.state.y2} onChange={this.handleChange}/>
                <label>Text</label>
                <TextField type="text" name="text2" value={this.state.text2} onChange={this.handleChange}/>
                <button type="submit">Upload</button>
            </form>
            <ImageContainer>
            <Image  id="Image" onClick={this.getTextPosition} src={this.state.fileURL}/>
            </ImageContainer>
            </UploadContainer>
            </div>
        )
    }
}

export default Uploader;