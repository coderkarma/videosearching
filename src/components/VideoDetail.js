import React from 'react';

const VideoDetail = ({ video }) => {
	//  added check to add loading before video gets loaded
	if (!video) {
		return (
			<div className='text-center'>
				<div className='spinner-border' role='status'>
					<span className='sr-only'>Loading...</span>
				</div>
			</div>
		);
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className='video-detail'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe
					className='embed-responsive-item'
					src={url}
					title='myframe'
				/>
			</div>

			<div className='details'>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
