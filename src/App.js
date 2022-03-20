import logo from './logo.svg';
import './App.css';
import Blog from './components/Blogs/Blog';
import Mobile from './components/Mobile/Mobile';
import Todos from './components/Todos/Todos';

function App() {
  const styleForHeader = {
    backgroundColor: 'black',
    paddingTop: '30px',
    paddingBottom: '30px',
    color: 'yellow'
  }
  return (
    <div className="App">
      <div>
        <h1 style={styleForHeader}>Welcome To React</h1>
        <article className='blog'>
          This is my First article in react.... <p style={{ color: 'red', backgroundColor: 'yellow', paddingTop: '15px', paddingBottom: '15px' }}>This is a paragraph</p>
        </article>
      </div>
      <Mobile></Mobile>
      <Todos></Todos>
      <Blog heading="Heading:" author="AB"></Blog>
      <Blog heading="Heading2:" author="Abul Bashar"></Blog>
      <Blog heading="Heading3:" author="Bashar"></Blog>

    </div>

  );
}




export default App;
