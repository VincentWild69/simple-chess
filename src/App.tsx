import './styles/App.scss';
import { changeDataTheme } from './utils/changeDataTheme';


function App() {
  const onChangeTheme = (theme: string) :void => {
    changeDataTheme(theme);
  }

  return (
    <div className="container">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => onChangeTheme('light')}>light</button>
        <button onClick={() => onChangeTheme('dark')}>dark</button>
      </header>
    </div>
  );
}

export default App;
