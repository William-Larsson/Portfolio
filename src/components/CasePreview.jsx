import React from 'react';
import './styles/casePreview.scss'


function CasePreview() {
    return (
        <div>
            <h1 class="header" id="headerTop">WEL</h1>
            <h1 class="header">COME.</h1>
            <p class="caseDesc">My name is William. I'm a software developer
            currently studying a Master of Science in
            Interaction technology and design.
            </p>
            {/* Should this be an img instead? */}
            <div className="caseBackground"></div>
        </div>
    )
}

export default CasePreview