import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            {/* 
                Using a component, you will need the following syntax below
                However, Javascript variable will use {} 
            */}
            <CommentDetail /> 
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));