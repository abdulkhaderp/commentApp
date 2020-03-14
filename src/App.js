import React from 'react';
import './App.css';
import CommentList from './components/commentList';
import CommentForm from './components/commentForm';
import ImageSect from './components/imageSect';

function App() {
  return (
    <div className="App">
     <div className="header"></div>
     <div className="row">
       <div className="col-md-6">
         <CommentList/>
         <div className="pb-2"></div>
         
       </div>
       <div className="col-md-6">
          <CommentForm/>
       </div>
     </div>
    </div>
  );
}

export default App;
