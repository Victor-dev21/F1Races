
import React, {Component} from 'react'
import '../App.css';

class ImageRetreive extends Component{
    constructor(props){
        super();
        this.state = {
            image: props.image
        }
    }
renderImage = () => {
    return <div key={this.props.image["id"]}><img src={this.props.image["src"]}/></div>
}

    render(){
        return(
            this.renderImage()
        )
    }
}
export default ImageRetreive;