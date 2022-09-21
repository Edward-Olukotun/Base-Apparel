import './App.css';
import { Content, Form } from './components'
function App() {

  return (
    <div className="App">
      <section>
        <img className='logo' src="/images/logo.svg" alt='' />
        <main>
          <Content />
          <Form />
        </main>
      </section>
      <img className='sideImage' src="/images/hero-desktop.jpg" alt='' />
    </div>
  );
}

export default App;
