import React from 'react'

import './ResultsComponent.css'

import reaction from '../assets/images/icon-reaction.svg'
import memory from '../assets/images/icon-memory.svg'
import verbal from '../assets/images/icon-verbal.svg'
import visual from '../assets/images/icon-visual.svg'

function ResultsComponent() {
    return (
        <main className='principal-container'>
            <div className='results-summary-container'>
                <div className='results-container'>
                    <h2 className='title-results'>Your Result</h2>
                    <div className='circle-punctuation'>
                        <h1>76</h1>
                        <h3>of 100</h3>
                    </div>
                    <div className='results-description'>
                        <h2 className='title-description'>Great</h2>
                        <p>You scored higher than 65% of the people who have taken these test</p>
                    </div>
                </div>
                <div className='summary-container'>
                    <h2 className='title-summary'>Summary</h2>
                    <div className='summary-scores'>
                        <div className='score-container red'>
                            <div className='icon-subtitle-score'>
                                <img src={reaction} alt='reaction' />
                                <h3 className='subtitle-score'>Reaction</h3>
                            </div>
                            <p><strong>80</strong> / 100</p>
                        </div>
                        <div className='score-container yellow'>
                            <div className='icon-subtitle-score'>
                                <img src={memory} alt='memory' />
                                <h3 className='subtitle-score'>Memory</h3>
                            </div>
                            <p><strong>92</strong> / 100</p>
                        </div>
                        <div className='score-container green'>
                            <div className='icon-subtitle-score'>
                                <img src={verbal} alt='verbal' />
                                <h3 className='subtitle-score'>Verbal</h3>
                            </div>
                            <p><strong>61</strong> / 100</p>
                        </div>
                        <div className='score-container purple'>
                            <div className='icon-subtitle-score'>
                                <img src={visual} alt='visual' />
                                <h3 className='subtitle-score'>Visual</h3>
                            </div>
                            <p><strong>72</strong> / 100</p>
                        </div>
                    </div>
                    <button className='button-continue'>Continue</button>
                </div>
            </div>
        </main>
    )
}

export default ResultsComponent