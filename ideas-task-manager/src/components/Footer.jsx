import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Ideas Task Manager. All rights reserved <span className="font-bold text-fuchsia-600"><a href="https://sdhossain.vercel.app/" target='_blank'>SDCoder</a></span>.</p>
      </div>
    </footer>
  );
}

export default Footer;
