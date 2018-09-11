import React from 'react';

/* Configuration Objects */
import createStore from './redux';

/* Configuration Components */
import { Provider } from 'react-redux';

/* Containers */
import HomepageContainer from './ui/containers/HomepageContainer';

/* Theme related */
import { MuiThemeProvider } from "@material-ui/core/styles";
import materialUiTheme from "./ui/materialUiTheme";

/* Styles */
const App = () => (
    <Provider store={createStore()}>
      <div className='App'>
        <MuiThemeProvider theme={materialUiTheme}>
          <HomepageContainer />
        </MuiThemeProvider>
      </div>
    </Provider>
);

export default App;
