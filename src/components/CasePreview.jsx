import React from 'react';
import './styles/casePreview.scss'


function CasePreview() {
    return (
        <div>
            <h1>WELCOME.</h1>
            <p>My name is William. <br /> I'm a software developer
            currently studying a Master of Science in
            Interaction technology and design.
            </p>
            {/* Should this be an img instead? */}
            <div className="caseBackground"></div>
        </div>
    )
}

export default CasePreview