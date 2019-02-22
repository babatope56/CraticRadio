import React from  'react';
import ReactAudioPlayer from 'react-audio-player';

const mediaList =(props) => {


    return props.items.map( (item, index) => <li key ={index} > 
    Artist: {item.alias}
    Song: {item.musicName}
    <ReactAudioPlayer
          src={ 'data:'+item.musicFormat +';base64,'+ item.music }
          autoPlay
          controls
        />
    
    </li>)
}

export default mediaList;