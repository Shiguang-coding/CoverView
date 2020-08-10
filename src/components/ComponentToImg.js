import React from 'react';
import { exportComponentAsJPEG, exportComponentAsPNG } from "react-component-export-image";
// import CoverImage from './CoverImage'
import './CoverImage.css'


class ComponentToImg extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    render() {
        console.log(this.props.children);

        return (
            <React.Fragment>

                <div ref={this.componentRef} style={{height:this.props.children.height}}>
                    {this.props.children}
                </div>

                {/* <button onClick={() => exportComponentAsJPEG(this.componentRef)}>
                    Export As JPEG
            </button> */}

                <button onClick={() => exportComponentAsPNG(this.componentRef)}>
                    Download
            </button>
            </React.Fragment>);
    }

}

export default ComponentToImg;