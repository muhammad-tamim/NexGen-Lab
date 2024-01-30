import React from 'react';
import './Our-team.css'
const OurTeam = () => {
    return (
        <div>
            <section id="our-team">
                <div className="container">
                    <h1 className="sub-title">Our Team</h1>
                    <div className="developer-list">
                        <div>
                            <img src="../../../public/vite.svg" alt="" />
                            <h2>Muhammad Tamim</h2>
                            <p>Muhammad Tamim, a proficient web developer and SEO expert, dedicated to creating impactful online experiences and optimizing digital content for maximum visibility and success.</p>
                            <a href="#">Contact</a>
                        </div>
                        <div>
                            <img src="../../../public/vite.svg" alt="" />
                            <h2>Saddam Hussain Saikat</h2>
                            <p>Saddam Hussain Saikat, a web developer with a passion for transforming ideas into interactive and innovative digital experiences.</p>
                            <a href="#">Contact</a>
                        </div>
                        <div>
                            <img src="/public/images/mehedi.jpg" alt="" />
                            <h2>Mehedi</h2>
                            <p>Mehedi, an adept Android and iOS apps developer, committed to bringing ideas to life through seamless and user-centric mobile applications.</p>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurTeam;