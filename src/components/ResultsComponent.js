import React from 'react'

import './ResultsComponent.css'

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
                        <h3 className='subtitle-score'>Reaction</h3>
                        <p><strong>80</strong> / 100</p>
                    </div>
                    <div className='score-container yellow'>
                        <h3 className='subtitle-score'>Memory</h3>
                        <p><strong>92</strong> / 100</p>
                    </div>
                    <div className='score-container green'>
                        <h3 className='subtitle-score'>Verbal</h3>
                        <p><strong>61</strong> / 100</p>
                    </div>
                    <div className='score-container purple'>
                        <h3 className='subtitle-score'>Visual</h3>
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