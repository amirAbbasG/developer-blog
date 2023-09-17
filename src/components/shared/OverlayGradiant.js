import React from 'react';

const OverlayGradiant = ({classname}) => {
    return (
        <div className={`absolute inset-0 top-0 left-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0 ${classname}`}/>
    );
};

export default OverlayGradiant;