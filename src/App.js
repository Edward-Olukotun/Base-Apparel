import './App.css';
import { Content, Form } from './components'
function App() {

  return (
    <div className="App">
      <div className='logo'>
        <img className='logo' src="/images/logo.svg" alt='' />
      </div>
      <div className='desktop'>
        <img src="/images/hero-desktop.jpg" alt='' />
      </div>
      <div className='mobile'>
        <img src="/images/hero-mobile.jpg" alt='' />
      </div>
      <main>
        <Content />
        <Form />
      </main>


    </div>
  );
}

export default App;
