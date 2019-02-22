import React, { Component } from 'react';
import axios from 'axios';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import MediaList from './mediaList';
class dashboard extends Component {
    state={
        
        imageName:'',
        musicName:'' ,
        query:'',
        audios:[]
}
submit = (event) =>{
  event.preventDefault();
  axios.get('http://localhost:8080/search',{
    
    params:{
      music:this.state.query
      
    }
  }).then(
    (response) =>{
      console.log(response.data);
      //const url = this.getAudioUrl(response.data[0].music);
      const audios = response.data;
      if(audios){
      this.setState({
        audios:audios
      })
    }
    }

  )
}

getAudioUrl(music) {
  const blob = new Blob([music], { type: 'audio/mp3' });
  const url = URL.createObjectURL(blob)

  console.log("this is the url:", url);
  return url;
}

handleInputChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  this.setState(
      {
          [name]:value
      }
  );
}

uploadSubmitHandler = (event) => {
  event.preventDefault();
  const user ={
      
      musicName: this.state.musicName,
      
  }
  console.log(user)
        axios.post('http://localhost:8080/upload-audio/', user).then(
            (response) => {
                

            }
        )
}
imageUploadHandler =(event) => {
  event.preventDefault();
  const user = {
    imageName: this.state.imageName
  }
  console.log(user)
        axios.post('http://localhost:8080/upload-picture/', user).then(
          (response) => {

          }
        )
}

uploadChangeHandler = (event) =>{
  const name = event.target.name;
  const value = event.target.value;
  this.setState(
      {
          [name]:value
      }
      
  )
}


    render() {

        const uploadUrl = 'http://localhost:8080/upload-audio/'+this.props.loggedInUser.alias;
        const uploadImageUrl = 'http://localhost:8080/upload-picture/'+this.props.loggedInUser.alias;

 
        return (

            <div>
            
            
                <div className="dashboard-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Uploads <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Recently Added</a>
      </li>
     
  
     
      <input type="text" name="query" placeholder="Search.." value={this.state.query} onChange={this.handleInputChange} ref={input => this.music=input}
              />
              <button type="submit" onClick={this.submit}>SEARCH</button>

              <p>{this.state.music}</p>

          

    </ul>
  </div>
</nav>
</div>

Welcome, {this.props.loggedInUser.firstName}
                <FilePond className="upload-card" allowMultiple={true} server={uploadUrl + uploadImageUrl} />
                

                <MediaList items = {this.state.audios}/>
          
                
                
            </div>
        );
    }
}

export default dashboard;