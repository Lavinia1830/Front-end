import React from 'react';

function UserCompobebt(props){
    return(
        <React.Fragment>
            <h1>{props.title}</h1>
            {props.list.map(ele => <p>{ele.name} {ele.lastName} - {ele.city}</p>)}
        </React.Fragment>
    )
}
export default UserCompobebt;