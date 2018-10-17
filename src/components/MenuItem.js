import React from 'react';

export default function MenuItem (props) {
    return (
        <div 
            onClick={() => props.menuClickHandler(props.page)}
            className='menu-item'
        >
            {props.page}
        </div>
    );
}