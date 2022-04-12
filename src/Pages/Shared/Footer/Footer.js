import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <h2>Copyright &copy; {year}</h2>
        </footer>
    );
};

export default Footer;