import './Demos.css';

export default function Demos() {
    return (
        <div className='main-container'id='demo_container'>
            <div id='demos'>
                <h1>Demos</h1>
                <img src='public\images\mic.jpg' alt='Image of Recording Mic'></img>
            </div>
            <div id='char_samples'>
                <h2>Character Samples</h2>
                <a href='https://www.audible.com/pd/Like-Sticky-Notes-from-God-Audiobook/B0D2J9X2KQ?source_code=AUDFPWS0223189MWU-BK-ACX0-395929&ref=acx_bty_BK_ACX0_395929_pd_us' target="_blank" rel='noreferrer'>
                    <p>Like Sticky Notes from God - S. Trell Beaty</p>
                </a>
                <h3>Paddy & Pat:</h3>
                <audio controls>
                <source src="public\audio\paddy.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
                <h3>Kendall:</h3>
                <audio controls>
                <source src="public\audio\kendall.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
                <h3>Gage & Reni:</h3>
                <audio controls>
                <source src="public\audio\gage.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}