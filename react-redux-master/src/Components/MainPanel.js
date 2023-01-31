import React from 'react';
import MyButton from './MyButton';
import DivPanel from './DivPanel';

const MainPanel = () => {
    return (
        <div>
            Tis is main panel <MyButton></MyButton>
            <DivPanel></DivPanel>
        </div>
    );
}


export default MainPanel;