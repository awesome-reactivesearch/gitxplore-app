import React, { useState } from "react";
import { ReactiveBase, DataSearch } from "@appbaseio/reactivesearch";

import Header from "./components/Header";
import Results from "./components/Results";

import theme from "./theme";
import "./App.css";

const App = props => {
  const [currentTopics, setTopics] = useState([]);

  const toggleTopic = topic => {
    const nextState = currentTopics.includes(topic)
      ? currentTopics.filter(item => item !== topic)
      : currentTopics.concat(topic);
    setTopics(nextState);
  };

  return (
    <section className="container">
      <ReactiveBase
        app="gitxplore-app"
        url="https://xe6N9nDRV:51ea7a8a-6354-4b5f-83e1-12dce3b7ec47@arc-cluster-appbase-demo-ps1pgt.searchbase.io"
        enableAppbase
        theme={theme}
      >
        <div className="flex row-reverse app-container">
          <Header currentTopics={currentTopics} setTopics={setTopics} />
          <div className="results-container">
            <DataSearch
              componentId="repo"
              filterLabel="Search"
              dataField={[
                "name",
                "description",
                "name.keyword",
                "fullname",
                "owner",
                "topics"
              ]}
              placeholder="Search Repos"
              iconPosition="left"
              autosuggest={false}
              URLParams
              className="data-search-container results-container"
              innerClass={{
                input: "search-input"
              }}
            />
            <Results currentTopics={currentTopics} toggleTopic={toggleTopic} />
          </div>
        </div>
      </ReactiveBase>
    </section>
  );
};

export default App;
