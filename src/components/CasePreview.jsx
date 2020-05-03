import React from 'react';
import './styles/casePreview.scss'


function CasePreview(props) {
    console.log(props.data.headerColor)

    return (
        <div className="bodyMargin caseContainer">
            <div className="headerContainer">
                <h1 style={{ color: props.data.headerColor }}>{props.data.header1}</h1>
                <h1>{props.data.header2}</h1>
            </div>
            <p className="caseDesc">{props.data.desc}</p>
            {/* Call-to-action button here as well? */}
            <div className="caseBackground">
                {/* Should there be an img in here? */}
            </div>
        </div>
    )
}

export default CasePreview