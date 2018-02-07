import React from 'react';
import Media from './Media';
import './playlist.css';
import Play from '../../icons/components/Play';
import Pause from '../../icons/components/Pause';
import Volumen from '../../icons/components/Volumen';
import FullScreen from '../../icons/components/FullScreen';

//componente funcional
 function Playlist (props){
     
         const playlist = props.data.categories[0].playlist;
         console.log(props.data);
         return (
            <div className="Playlist" >
                <Play 
                size={50}
                color="red "
                />
                <Pause
                size={50}
                color="green" />

                <Volumen 
                size={50}
                color="yellow"
                />

                <FullScreen 
                size= {50}
                color="black"
                />

                {
                    playlist.map((item)=> {
                        return <Media {...item} key={item.id} />
                    })
                    
                }
                
            </div>
         )
     
 }

 export default Playlist;