import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

import Home from 'app/view/Home';
import Splash from 'app/view/Splash';

const App = (): JSX.Element => {
  const [readyFont, setReadyFont] = useState(false);
  const fonts = {
    'open-sans': require('./app/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-semi-bold': require('./app/assets/fonts/OpenSans-SemiBold.ttf'),
  };

  useEffect(() => {
    /**
     * Await font is loaded before rendering App
     * Using an IIFE
     */
    (async () => {
      await Font.loadAsync(fonts);
      setReadyFont(true);
    })();
  }, []);

  return readyFont ? <Home /> : <Splash />;
};

export default App;