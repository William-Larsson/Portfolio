import React from 'react';
import '../global/styles.scss'
import './styles/casePreview.scss'


function CasePreview(props) {
    return (
        <div className="bodyMargin caseContainer">
            <div className="headerContainer">
                <h1 class="highlight">{props.data.header1}</h1>
                <h1>{props.data.header2}</h1>
            </div>
            <p class="caseDesc">{props.data.desc}</p>
            {/* Call to action button here as well? */}
            <div className="caseBackground">
                {/* Should there be an img in here? */}
            </div>
        </div>
    )
}

export default CasePreview