import React from 'react';
import './styles/App.css';
import AssistAppContainer from "./Containers/AssistAppContainer";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_STORE);

class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <AssistAppContainer />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
