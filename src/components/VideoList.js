import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = props => {
	const videoItems = props.videos.map(video => {
		return (
			<VideoListItem
				video={video}
				key={video.etag}
				onVideoSelect={props.onVideoSelect}
			/>
		);
	});
	return (
		<div>
			<ul className='col-md-4 list-group' />
			{videoItems}
		</div>
	);
};

export default VideoList;
