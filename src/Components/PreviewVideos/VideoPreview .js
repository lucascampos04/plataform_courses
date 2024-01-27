import React from 'react';

const VideoPreview = ({ videoUrl }) => {
    return (
      <div className="video-preview">
        <iframe
          title="Video Preview"
          width="560"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default VideoPreview;