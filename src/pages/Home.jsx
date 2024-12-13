import React from 'react';
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
        <section className="hero">
            <h1>Welcome to LIPULL</h1>
            <p>Tempat dimana kalian dapat berlibur bersama keluarga kalian maupun dengan teman-teman kalian</p>
            <a href="#" className="btn">Pesan Tiket Sekarang</a>
        </section>
    );
}

function About() {
    return (
        <section className="about">
            <h2>LIPULL</h2>
            <p>LIPULL telah menyediakan berbagai layanan seperti pembelian tiket, pembookingan hotel, dan juga rental PS.</p>
        </section>
    );
}

function Services() {
    return (
        <section className="services">
            <div className="service-cards">
                <div className="service-card">
                    <h3>Layanan Hotel</h3>
                    <p>Tersedia hotel bintang 5</p>
                </div>
                <div className="service-card2">
                    <h3>Rental PS</h3>
                    <p>Dapat menyewa PS berapa pun</p>
                </div>
                <div className="service-card3">
                    <h3>Pembelian Tiket</h3>
                    <p>Pembelian Tiket dengan mudah</p>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer>
            <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        </footer>
    );
}

function App() {
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

export default App;
