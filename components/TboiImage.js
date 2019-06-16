import React from "react";
import { SimpleImg } from 'react-simple-img';

export default (props) => {
    return <SimpleImg key={props.src} {...props} placeholder={false} draggable="false"/>;
}