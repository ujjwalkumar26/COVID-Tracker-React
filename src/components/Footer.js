import React from 'react';
import '../styles/Footer.css';
function Footer({showDisplay}){
    return(
        <footer class="footer">
            <div class="container">
             {/* eslint-disable-next-line */}
            <a className="text-muted space" href="#" onClick={()=>{showDisplay("home")}}>Home</a>
            <a className="text-muted space" target='_blank' rel="noreferrer noopener" href="https://api.covid19india.org/">API</a>
            <a className="text-muted space" target='_blank' rel="noreferrer noopener" href="https://github.com/ujjwalkumar26/COVID-Tracker-React">GitHub</a>
            </div>
        </footer>
    )
}
export default Footer;