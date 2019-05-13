import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            {/* 
                Using a component, you will need the following syntax below
                However, Javascript variable will use {} 
            */}
            <ApprovalCard>
                Are you sure you want to do this?
                <div>
                    <h4>WARNING!</h4>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author ="Sam" userName="sam123"
                    timeAgo ="Today at 4:45PM" content="This is my first comment"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author ="Alex" userName="tempid"
                    timeAgo = "Today at 2:00PM" content="This is my second made up comment"/>
            </ApprovalCard>    
            <ApprovalCard>
                <CommentDetail author ="Jane" userName="temporaryUserName"
                    timeAgo = "Yesterday at 5:00PM" content="Last comment, BOOM!"/> 
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));