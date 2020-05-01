import React from 'react';
import CasePreview from '../components/CasePreview'
import Collaborators from '../components/Collaborators'
import CasePreviewData from './resources/data/casePreviewData'

function Home() {
    const caseData = CasePreviewData.map((data) => {
        return <CasePreview key={data.id} data={data} />
    })

    return (
        <div>
            {caseData[0]}
            <Collaborators />
            {caseData.slice(1)}
        </div>
    )
}

export default Home