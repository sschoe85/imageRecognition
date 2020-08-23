import React from 'react';
import styled from '@emotion/styled';
import Camera from '../components/Camera';

function VideoPage() {
  const StyledDiv = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: blueviolet;
    font-weight: bold;
    font-size: 2em;
    
  `;
    
    return (
        <div>

      <Camera/>
      <StyledDiv className="current-predictions"/>

    </div>
    );
}

export default VideoPage;
