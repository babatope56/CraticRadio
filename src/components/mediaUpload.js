import React, { Component } from 'react';
import axios from 'axios';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
class mediaUpload extends Component {
    state={
        id:'',
        imageName:'',
        musicName:'' 
}

uploadSubmitHandler = (event) => {
  event.preventDefault();
  const user ={
      imageName: this.state.imageName,
      musicName: this.state.musicName,
      
  }
  console.log(user)
        axios.post('http://localhost:8080/upload-picture', user).then(
            (response) => {
                

            }
        )
}
signUpChangeHandler = (event) =>{
  const name = event.target.name;
  const value = event.target.value;
  this.setState(
      {
          [name]:value
      }
      
  )
}
signupSubmitHandler = (event) => {
  event.preventDefault();
  const media ={
      imageName: this.state.imageName,
      musicName: this.state.musicName,
     
  }
  console.log(media)
  axios.post('http://localhost:8080/upload-picture', media).then(
      (response) => {
          

      }
  )
}


    render() {
        const uploadUrl = 'http://localhost:8080/upload-picture/'+this.props.loggedInUser.alias;

        return (
            <div>
                 
                 <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Uploads <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Recently Added</a>
      </li>
      
    </ul>
  </div>
</nav>
</div>

Welcome, {this.props.loggedInUser.firstName}
<form className="container" onSubmit={this.signupSubmitHandler}>
<div>
<div className="form-group col-md-6">
                        <label for="imageName">Image Name</label>
                        <input name="imageName" type="text" value={this.state.imageName} onChange={this.signUpChangeHandler} className="form-control" id="imageName" placeholder="Image Name" />
                    </div>
                    <div className="form-group col-md-6">
                         <label for="musicName">Music Name</label>
                        <input name="musicName" type="text" value={this.state.musicName} onChange={this.signUpChangeHandler} className="form-control" id="musicName" placeholder="Music Name" />
                    </div>
                    
                

                
                <FilePond allowMultiple={true} server={uploadUrl} />

                <button type="submit" className="btn btn-primary" >Upload</button>
                
                </div>
                </form>

                
            </div>
        );
    }
}

export default mediaUpload;