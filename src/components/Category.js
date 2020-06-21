import React from 'react';
import {useParams} from 'react-router';

function Category() {
    const name = useParams();
    console.log((name.name));
    return (<div> user {name.name} </div>);

}

export default Category;