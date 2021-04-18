import React from 'react';

const FooterCol = (props) => {
    return (
        <>
            <h6>{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index}>{item.name}</li>)
                }
            </ul>
            {props.children && props.children}
        </>
    );
};

export default FooterCol;
