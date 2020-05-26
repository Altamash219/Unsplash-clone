import React from 'react';
import axios from 'axios';
// const fs = require('fs')
// const path = require('path')

class Photos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.downloadPhoto = this.downloadPhoto.bind(this)
    }

    // async downloadPhoto(event, imageLink){
    //     // event.preventDefault();
    //     console.log("we are here")
    //     console.log(imageLink)
    //     // let downloadedImage = await axios.get(link,{
    //     //     params:{
    //     //         client_id :'mECxJaXCkiB_oXL7K_3FsXnrG9q_RxzLLbbbSOzEmmI'
                
    //     //     }
    //     // })
    //     axios.get(imageLink,
    //     {
    //         params:{
    //             client_id :'mECxJaXCkiB_oXL7K_3FsXnrG9q_RxzLLbbbSOzEmmI',
    //             // responseType: 'stream', // important
    //             // force: true
    //         }
    //       }) .then(async(response) => {
    //         //  const url = window.URL.createObjectURL(new Blob([response.data]));
    //          let file = new Blob([response.data.url],{type:'image/png'});
    //          console.log(response.data)
    //         //  const blob = await response.blob();

    //          const link = document.createElement('a');
    //          link.href = URL.createObjectURL(file);
    //         //  link.href = response.data.url
    //          link.setAttribute('download', 'image.png'); //or any other extension
    //          document.body.appendChild(link);
    //          link.click();
    //       })
    //       .catch((err)=>{
    //           console.log(err)
    //       });
          
    // }
    render() { 

        let downloadLinks = this.props.data.map((result)=>{
                return result.links.download_location
        })
        // console.log(downloadLinks)
                
        let images = this.props.img.map((url,idx)=><div className="col-sm-4 ">
            <img  className="img-responsive " src={url} alt="random"></img>
            {/* {console.log(downloadLinks[idx])} */}
            {/* <button  onClick={(event)=>{this.downloadPhoto(event,downloadLinks[idx])}} className="download-button"><i className="glyphicon glyphicon-arrow-down"/></button> */}
            <button className="download-button"><i className="glyphicon glyphicon-arrow-down"/></button>
                                    
            </div>)
        
                
        
        return ( 
            <div className="row container-fluid" >
                {images}
            </div>
         );
    }
}
 
export default Photos;