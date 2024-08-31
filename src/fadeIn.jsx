import React, { useEffect } from 'react';
import './index.css';

function FadeIn({ children }) {
    useEffect(() => {
        const element = document.querySelector('.fade-in');
        element.classList.add('show');
    }, []);

    return (
        <div className="fade-in">
            {children}
        </div>
    );
}

export default FadeIn;