import React from 'react';
import './styles/casePreview.scss'

interface Props {
    data: {
        id: number;
        headerColor: string;
        header1: string;
        header2: string;
        desc: string;
    }
}

function CasePreview({data}: Props) {
    console.log(data.headerColor)

    return (
        <div className="bodyMargin caseContainer">
            <div className="headerContainer">
                <h1 style={{ color: data.headerColor }}>{data.header1}</h1>
                <h1>{data.header2}</h1>
            </div>
            <p className="caseDesc">{data.desc}</p>
            {/* Call-to-action button here as well? */}
            <div className="caseBackground">
                {/* Should there be an img in here? */}
            </div>
        </div>
    )
}

export default CasePreview