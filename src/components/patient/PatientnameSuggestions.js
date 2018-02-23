import React from "react";

import Autosuggest from "react-autosuggest";
import { request } from "../../helpers";

var obj = {};
const SuggestionsItems = [];

request.get("patient").then(function(response) {
  console.log(response);

  response.data.forEach(function(item, i) {
    obj = { name: item.name, id: item.id };
    SuggestionsItems.push(obj);
  });
  console.log(JSON.stringify(SuggestionsItems));
});

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return SuggestionsItems.filter(
    language => regex.test(language.name),
    language => regex.test(language.id)
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.name;

  // return suggestion.id;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name} {suggestion.id}</span>;
}

class PatientnameSuggestions extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { suggestions } = this.state;

    const inputProps = {
      value: this.props.field.value,
      onChange: this.props.field.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
export default PatientnameSuggestions;
