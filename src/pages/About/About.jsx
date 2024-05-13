import { useState } from 'react';
import './About.css';

export default function About() {
    const [isStudioInfoVisible, setIsStudioInfoVisible] = useState(false);

    const toggleStudioInfoVisibility = () => {
        setIsStudioInfoVisible(!isStudioInfoVisible);
    };

    return (
        <div className='main-container' id='about-maria'>
            <h1>About</h1>
            <div id='about'>
                <img src='/images/me with mic.jpg' alt='Photo of Maria Recording'></img>
                <div id="about-bio">
                    <p>
                    Maria L. Johnson is an exceptional American Female Voice Actor with a talent for delivering 
                    a soothing and captivating voice that leaves listeners spellbound. She is skilled at bringing 
                    scripts to life with enchanting results. Maria works from her professional home studio,
                    where she devotes her time to the world of Voiceover. With a focus on Audio Book Narration, 
                    she also lends her voice to a plethora of other projects including Commercials, E-Learning,
                     Documentaries, and Animated Character and Cartoon Voices. Her versatility and range make 
                     her a highly sought-after talent in the industry.  
                    </p>
                    <p>
                    Maria L. Johnson recently split her time between Northern California and New York City, where 
                    she had an illustrious career, as an International Flight Attendant. Her love for travel has
                     often taken her to different parts of the world. However, she confesses that her favorite 
                     times are spent at home on the West Coast with her family. She has a passion for cooking and 
                     enjoys sharing great meals with her loved ones. When she is not busy with her Voiceover work, 
                     Maria also enjoys knitting and watching murder mysteries with her husband and their miniature 
                     poodle, Lucy.
                    </p>
                </div>
            </div>
            <div id='studio-info'>
                <button onClick={toggleStudioInfoVisibility}>
                    {isStudioInfoVisible ? 'Hide Studio Info' : 'View Studio Info'}
                </button>
                {isStudioInfoVisible && (
                    <>
                        <h3>Workstation:</h3>
                        <p>M1 Mac</p>
                        <h3>Interface:</h3>
                        <p>Focusrite Scarlett 2i2</p>
                        <h3>Microphone:</h3>
                        <p>Rhode NT1 Studio Condenser Microphone</p>
                        <h3>Digital Audio Workspace:</h3>
                        <p>Adobe Audition CC</p>
                        <h3>Audio Editor:</h3>
                        <p>Izotope RX10 Standard</p>
                    </>
                )}
            </div>
            <img src='public\images\logo with niches.jpg' id='niches'></img>
        </div>
    )
}