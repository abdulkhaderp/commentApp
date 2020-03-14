import React,{Component} from 'react';
export default class ImageSect extends Component{
    state = {
        fake:""
    }
   
    render(){
        
        return(
            <div className="container image-wrapper">
                <div className="img-animate kenburns-left"></div>
            </div>
        )
    }
}