import React from 'react';
import PropTypes from 'prop-types';

const Topic = props => {
	return (
		<div className={`topic ${props.active ? 'active' : ''}`} onClick={() => props.toggleTopic(props.children)}>
			#{props.children}
		</div>
	);
}

Topic.propTypes = {
	children: PropTypes.string,
	active: PropTypes.bool,
	toggleTopic: PropTypes.func,
};

export default Topic;
