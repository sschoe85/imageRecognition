import React from 'react';
import { useQuery } from 'react-query';
import { getMedia } from '../api/getMedia';
import styled from '@emotion/styled';

function VideoPage() {
  const StyledDiv = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: blueviolet;
    font-weight: bold;
    font-size: 2em;
    
  `;
    const { isLoading, error, data } = useQuery('predictions', () =>

    getMedia({video: true}));
    return (
        <div>
      <div>
        <video id="webcam"></video>
      </div>

      <StyledDiv className="current-predictions"/>
      {error && <div>Error!</div>}
        {isLoading && <div>Page is loading...</div>}
        {data?.map((prediction) => (
          prediction.class
            
          
        ))}
    </div>
    );
}

export default VideoPage;
