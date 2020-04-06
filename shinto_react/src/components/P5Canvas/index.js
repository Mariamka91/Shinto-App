import React, {Component} from "react";
import p5 from "p5";

class P5Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  sketch = p => {
    p.setup = () => {
      p.createCanvas(600, 600);
      p.background(0);
      this.clear = p.createButton("clear");
      this.clear.mousePressed(() => p.background(0));
    };

    p.draw = () => {
      if (p.mouseIsPressed) {
        p.stroke(255);
        p.strokeWeight(10);
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
      }
    };
  };

  componentDidMount() {
    this.myP5 = new p5(this.sketch, this.canvasRef.current);
  }

  render() {
    return <div ref={this.canvasRef} style={{ marginTop: "50px" }}></div>;
  }
}

export default P5Canvas;
