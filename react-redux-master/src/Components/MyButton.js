import React from 'react';
import { useDispatch } from 'react-redux';
import increment from '../Action';

const  MyButton = () => {
    let dispatch = useDispatch();

    return(
        <button onClick={() => dispatch(increment(1))}>Increase Counter</button>
    );
}

export default MyButton;