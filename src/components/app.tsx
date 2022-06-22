import React from 'react';
import './app.scss';
import {useComponentDidMount} from '~src/utils/hooks/lifecycle';
import {setThemeColors} from '~src/utils/theming/colors';
import {Playground} from '~src/components/Playground';
import {generateArray} from '~src/utils/helpers/generators';

export const App = () => {
  useComponentDidMount(() => {
    setThemeColors();
  });

  return (
    <div className='App'>
      <Playground test={generateArray(100)} />
    </div>
  );
};
