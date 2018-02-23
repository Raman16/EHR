import React from "react";
import DropzoneComponent from "react-dropzone-component";

var ImageConfig = {
  iconFiletypes: [".jpg", ".png"],
  height: 100,
  showFiletypeIcon: false,
  maxFiles: 1,
  postUrl: "/uploadHandler"
};

var ImagelimitConfig = {
  autoProcessQueue: false
};
var eventHandlers = {
  addedfile: file => console.log(file),
  canceledmultiple: true
};

export default class Fileupload extends React.Component {
  render() {
    return (
      <div>
        <DropzoneComponent
          config={ImageConfig}
          eventHandlers={eventHandlers}
          djsConfig={ImagelimitConfig}
        />
      </div>
    );
  }
}
