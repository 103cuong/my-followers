import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="container p-4">
      <Header title="My Followers" />
      <Content />
      <p className="text-center text-dark mt-2">
        <span role="img" aria-label="thanks">
          🙏
        </span>{' '}
        <span className="font-italic">Thanks for following me!</span>
      </p>
    </div>
  );
}

export default App;
