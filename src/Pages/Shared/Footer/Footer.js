import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-black text-white p-3 mt-5'>
            <p><small>Copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;