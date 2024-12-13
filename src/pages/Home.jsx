import React, { useEffect } from 'react';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik
            once: true,     // Apakah animasi hanya dimainkan sekali
        });
    }, []);

    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Footer />
        </div>
    );
}

import AOS from "aos";
import "aos/dist/aos.css";
import '../style/home.css'; // Assuming the CSS is modular or general

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">LIPULL</div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

function Hero() {
    return (
        <section className="hero" data-aos="fade-right">
            <h1 data-aos="zoom-in">Welcome to LIPULL</h1>
            <p data-aos="fade-up">Tempat dimana kalian dapat berlibur bersama keluarga kalian maupun dengan teman-teman kalian</p>
            <a href="#" className="btn" data-aos="flip-left">Pesan Tiket Sekarang</a>
        </section>
    );
}



function About() {
    return (
        <section className="about" data-aos="fade-up">
            <h2 data-aos="zoom-in">LIPULL</h2>
            <p data-aos="fade-left">LIPULL telah menyediakan berbagai layanan seperti pembelian tiket, pembookingan hotel, dan juga rental PS.</p>
        </section>
    );
}


function Services() {
    return (
        <section className="services" data-aos="fade-up">
            <div className="service-cards">
                <div className="service-card" data-aos="fade-right">
                    <h3>Layanan Hotel</h3>
                    <p>Tersedia hotel bintang 5</p>
                </div>
                <div className="service-card2" data-aos="fade-up">
                    <h3>Rental PS</h3>
                    <p>Dapat menyewa PS berapa pun</p>
                </div>
                <div className="service-card3" data-aos="fade-left">
                    <h3>Pembelian Tiket</h3>
                    <p>Pembelian Tiket dengan mudah</p>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer data-aos="fade-up">
            <p> 2024 MyWebsite. All rights reserved.</p>
        </footer>
    );
}

export default App;
