import React, { Component } from 'react';
import p5 from 'p5';
import 'bootstrap/dist/css/bootstrap.min.css';



class P5Canvas extends Component {

    constructor(props) {

        super(props);
        this.canvasRef = React.createRef();
        this.state = {x: 0, y: 0}
    }


    sketch = (p) => {

        p.newImage = null

        p.setup = () => {
            this.can = p.createCanvas(500, 500);
            p.background(0)
            this.clear = p.createButton("clear");
            this.clear.mousePressed(() => p.background(0))
            this.can.drop(p.gotFile)
            this.save = p.createButton("save");
        }


        p.draw = () => {

            if (p.mouseIsPressed) {
                p.stroke(255);
                p.strokeWeight(10)
                p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
            }

            if (p.newImage){

                p.image(
                    p.newImage,
                    this.state.x - this.canvasRef.current.getBoundingClientRect().left,
                    this.state.y - this.canvasRef.current.getBoundingClientRect().top,
                    p.width * 0.2,
                    p.height * 0.2);
            }
        }


        p.gotFile = (file) => {
            console.log(file);

            switch (file.type) {
                case "audio":
                    console.log("this is an audio file")
                    break;
                case "image":
                   p.newImage = p.createImg(file.data,"").hide();
                    break;

                default:
                    console.log("I dont know what this file is?")
                    break;
            }


        }


        // we attach our own function to our P5 instance 'p'
        p.myClear = () => { p.background(155) }
    }

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.canvasRef.current)
        this.testX = 5555;
        this.canvasRef.current.addEventListener("mouseleave", evt =>
        this.setState({ x: evt.x , y: evt.y })
      );
        
    }

    // We can call our own function in our p5 code through our instance P5 'myP5'
    // If we want to call any of our own p5 functions from outside our 'sketch' function,
    // (as for examply calling p.myClear from our button below), we have call it from
    // another class function.
    // We do this because if we try to attach to our button onClick={this.myP5.myClear}
    // This will not work and we will get an error because 'this.myP5.myClear' only exists
    // after 'componentDidMount' and does not exist at the time of first render when it is bound
    // to the buttons onClick.


        render() {
            if (this.canvasRef.current) {
              console.log(
                this.state.x - this.canvasRef.current.getBoundingClientRect().left,
                this.state.y - this.canvasRef.current.getBoundingClientRect().top
              );
              console.log(this.state.x, this.state.y);

            }

        return (
            <>
                <div ref={this.canvasRef} style={{ margin: "50px", width: "500px", height: "500px" }}>
                </div>
            </>
        )
    }
}


export default P5Canvas

