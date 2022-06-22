import React from 'react';
import {markupMatchedText} from '~src/utils/helpers/parsers';

export const useOptionsSearch = (options, value) => {
  const [searchedOptions, setSearchedOptions] = React.useState(options);

  const searchOptions = options => {
    return options
      .map(option => {
        const regex = new RegExp(value, 'i'); // value into regex
        const match = option.text.match(regex);
        if (match)
          return {
            ...option,
            text: markupMatchedText(match),
          };
      })
      .filter(Boolean);
  };

  React.useEffect(() => {
    !value ? setSearchedOptions(options) : setSearchedOptions(searchOptions(options));
  }, [value]);

  return searchedOptions;
};
