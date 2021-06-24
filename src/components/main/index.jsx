import React from 'react';
import Image from '../../img/KMT07302.jpg';
import './main.css';

function Main() {
    return (
        <div className="main">
            <div className="introduce" id="home">
                <div className="header">
                    <p><a href="#home">HOME</a></p>
                    <p><a href="#about">ABOUT</a></p>
                    <p><a href="#skill">SKILL</a></p>
                    <p><a href="#project">PROJECT</a></p>
                </div>
                <div className="welcome">
                    <p>WELCOME TO MY PORTFOLIO</p>
                    <pre>This is my cv. <i class="fas fa-long-arrow-alt-right"></i> <a href="https://drive.google.com/file/d/15wuz_D3C5-12TEUCFd7TOKd6rMZArS2o/view?usp=sharing" target="_blank" rel="noreferrer">Download</a></pre>
                </div>
            </div>
            <div className="about" id="about">
                <p>ABOUT ME</p>
                <div className="content-about">
                    <div className="top">
                        <img src={Image} alt="img" />
                        <ul className="info">
                            <li><pre>Name:                  Nguyễn Quang Bình</pre></li>
                            <li><pre>Date Of Birth:      13/09/1999</pre></li>
                            <li><pre>Phone:                 0334241820</pre></li>
                            <li><pre>Address:              Hồ Chí Minh</pre></li>
                            <li><pre>Gmail:                 95quangbinhndu1314@gmail.com</pre></li>
                        </ul>
                    </div>
                    <div className="bottom">
                        <p>My name is Binh. I am Front End Web Developer. I am a recent graduate student at University Of Science. I'm a person who is responsible at work. I am trying to improve my skills everyday. </p>
                    </div>
                </div>
            </div>
            <div className="skill" id="skill">
                <p>SKILL</p>
                <div className="content-skill">
                    <ul className="type-skill">
                        <li className="list-skill">
                            <i class="fas fa-star"></i> Web Skills
                            <ul>
                                <li>HTML/CSS</li>
                                <li>JS</li>
                                <li>ReactJS</li>
                            </ul>
                        </li>
                        <li className="list-skill">
                            <i class="fas fa-star"></i> Database Skill
                            <ul>
                                <li>MS SQL Server</li>
                            </ul>
                        </li>
                        <li className="list-skill">
                            <i class="fas fa-star"></i> Language
                            <ul>
                                <li>English</li>
                            </ul>
                        </li>
                        <li className="list-skill">
                            <i class="fas fa-star"></i> Version Control
                            <ul>
                                <li>Git/Github</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="project" id="project">
                <p>PROJECT</p>
                <div className="content-project">
                    <table>
                        <tr>
                            <th className="name-project">Zing mp3 Theme</th>
                            <td className="description">
                                <ul>
                                    <li>Description: This is project I clone base on Zing mp3</li>
                                    <li>Knowledge: HTML/CSS</li>
                                    <li>Demo: <a href="#" style={{ color: "lightblue" }}>Update later</a> </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th className="name-project">Calendar</th>
                            <td className="description">
                                <ul>
                                    <li>Description: Making Calendar in VietNam</li>
                                    <li>Knowledge: HTML/CSS, JavaScript</li>
                                    <li>Demo: <a href="https://binhnguyen1133.github.io/timer/" style={{ color: "lightblue" }} target="_blank">Click me</a> </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th className="name-project">Graduation thesis</th>
                            <td className="description">
                                <ul>
                                    <li>Description: This is my graduation project. A Website for finding job</li>
                                    <li>Knowledge: HTML/CSS, ReactJS, .Net core, PostgreSQL</li>
                                    <li>Demo: <a href="https://www.timkiemvieclam.tech/" style={{ color: "lightblue" }}>Click me</a> </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Main;