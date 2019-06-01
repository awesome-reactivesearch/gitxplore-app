import React from 'react';
import PropTypes from 'prop-types';
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch';
import Topic from './Topic';
import { sortOptions } from './constants'

const onResultStats = (results, time) => (
	<div className="flex justify-end">
		{results} results found in {time}ms
	</div>
);

const onData = (data, currentTopics, toggleTopic) => {
	return <div className="result-item" key={data.fullname}>
		<div className="flex justify-center align-center result-card-header">
			<img className="avatar" src={data.avatar} alt="User avatar" />
			<a className="link" href={data.url} target="_blank" rel="noopener noreferrer">
				<div className="flex wrap">
					<div>{data.owner}/</div>
					<div>{data.name}</div>
				</div>
			</a>
		</div>
		<div className="m10">{data.description}</div>
		<div className="flex wrap justify-center">
			{
				data.topics.slice(0, 7)
					.map(item => (
						<Topic
							key={item}
							active={currentTopics.includes(item)}
							toggleTopic={toggleTopic}
						>
							{item}
						</Topic>
					))
			}
		</div>
		<div className="flex">
			<div><div className="btn card-btn"><i className="card-icon fas fa-star" />{data.stars}</div></div>
			<div><div className="btn card-btn"><i className="card-icon fas fa-code-branch" />{data.forks}</div></div>
			<div><div className="btn card-btn"><i className="card-icon fas fa-eye" />{data.watchers}</div></div>
		</div>
	</div>
};

const Results = ({ toggleTopic, currentTopics }) => (
  <div className="result-list">
    <SelectedFilters className="m1" />
    <ReactiveList
      componentId="results"
      dataField="name"
      renderItem={data => onData(data, currentTopics, toggleTopic)}
      onResultStats={onResultStats}
      react={{
        and: [
          "language",
          "topics",
          "pushed",
          "created",
          "stars",
          "forks",
          "repo"
        ]
      }}
      pagination
      innerClass={{
        list: "result-list-container",
        pagination: "result-list-pagination",
        resultsInfo: "result-list-info",
        poweredBy: "powered-by"
      }}
      size={6}
      sortOptions={sortOptions}
    />
  </div>
);

Results.propTypes = {
	toggleTopic: PropTypes.func,
	currentTopics: PropTypes.arrayOf(PropTypes.string),
};

export default Results;
