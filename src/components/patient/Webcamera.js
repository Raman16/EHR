import React from "react";
import Webcam from "react-webcam";
class Webcamera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReply: false,
      screenshot: null,
      tab: 0
    };
  }
  Loadwebcam = webcam => {
    this.webcam = webcam;
  };

  onClick(e) {
    this.setState({ showReply: !this.state.showReply });
  }

  handleClick = () => {
    const screenshot = this.webcam.getScreenshot();
    this.setState({ screenshot });
  };

  render() {
    return (
      <div>
        {this.state.screenshot
          ? <img src={this.state.screenshot} alt="" />
          : null}
        <Webcam
          audio={true}
          height={75}
          ref={this.Loadwebcam}
          close={this.Loadwebcam.close}
          screenshotFormat="image/png"
          width={75}
        />
        <div className="img-change">
          <button className="option" onClick={this.handleClick}>capture</button>
        </div>
      </div>
    );
  }
}
export default Webcamera;
