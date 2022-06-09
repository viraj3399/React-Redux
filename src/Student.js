import React from 'react';
function Student (props){
    const {data} = props
    return(
        <div>
            <h1>{data.name}</h1>
            <h2>{data.email}</h2>
        </div>
    );
}
export default Student;