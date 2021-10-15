import React from "react";
import Header from "./components/Header";
import './style.css';

function Home() {
    return (
        <div>
            <div>
                <Header />
                <main className="main">
                    <div className="navbar">
                        Navbar
                    </div>
                    <div className="feed">
                        Feed
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;