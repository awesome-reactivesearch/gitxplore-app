import React from 'react';
import PropTypes from 'prop-types';
import {
	MultiDropdownList,
	SingleDropdownRange,
	RangeSlider,
} from '@appbaseio/reactivesearch';
import { repoActiveDropdownData, repoCreatedDropdownData } from './constants';

const SearchFilters = ({ currentTopics, setTopics, visible }) => (
	<div className={`flex column filters-container ${!visible ? 'hidden' : ''}`}>
		<div className="child m10">
			<MultiDropdownList
				componentId="language"
				dataField="language.raw"
				placeholder="Select languages"
				title="Language"
				filterLabel="Language"
			/>
		</div>
		<div className="child m10">
			<MultiDropdownList
				componentId="topics"
				dataField="topics.raw"
				placeholder="Select topics"
				title="Repo Topics"
				filterLabel="Topics"
				size={1000}
				queryFormat="and"
				defaultSelected={currentTopics}
				onValueChange={setTopics}
			/>
		</div>
		<div className="child m10">
			<SingleDropdownRange
				componentId="pushed"
				dataField="pushed"
				placeholder="Repo last active"
				title="Last Active"
				filterLabel="Last Active"
				data={repoActiveDropdownData}
			/>
		</div>
		<div className="child m10">
			<SingleDropdownRange
				componentId="created"
				dataField="created"
				placeholder="Repo created"
				title="Created"
				filterLabel="Created"
				data={repoCreatedDropdownData}
			/>
		</div>
		<div className="child m10">
			<RangeSlider
				componentId="stars"
				title="Repo Stars"
				dataField="stars"
				range={{ start: 0, end: 300000 }}
				showHistogram={false}
				rangeLabels={{
					start: '0 Stars',
					end: '300K Stars',
				}}
				innerClass={{
					label: 'range-label',
				}}
			/>
		</div>
		<div className="child m10">
			<RangeSlider
				componentId="forks"
				title="Repo Forks"
				dataField="forks"
				range={{ start: 0, end: 180500 }}
				showHistogram={false}
				rangeLabels={{
					start: '0 Forks',
					end: '180K Forks',
				}}
				innerClass={{
					label: 'range-label',
				}}
			/>
		</div>
	</div>
);

SearchFilters.propTypes = {
	currentTopics: PropTypes.arrayOf(PropTypes.string),
	setTopics: PropTypes.func,
	visible: PropTypes.bool,
};

export default SearchFilters;
