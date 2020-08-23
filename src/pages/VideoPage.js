import React from 'react';
import { useQuery } from 'react-query';
import { getMedia } from '../api/getMedia';

function VideoPage() {
    const { isLoading, error, data } = useQuery('predictions', () =>

    getMedia({video: true}));
    return (
        <div>
      <div>
        <video id="webcam"></video>
      </div>

      <div class="current-predictions"></div>
      {error && <div>Error!</div>}
        {isLoading && <div>Page is loading...</div>}
        {data?.map((prediction) => (
          prediction.class
            
          
        ))}
    </div>
    );
}

export default VideoPage;
