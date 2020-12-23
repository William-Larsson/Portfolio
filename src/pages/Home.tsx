import React from 'react';
import CasePreview from '../components/CasePreview'
import Collaborators from '../components/Collaborators'
import CasePreviewData from './resources/data/casePreviewData'
import CollabData from './resources/data/collabData'

function Home() {
    // Map all the obj from the import to a CasePreview component
    const caseData = CasePreviewData.map((data) => {
        return <CasePreview key={data.id} data={data} />
    })

    return (
        <div>
            {caseData[0]}
            <Collaborators data={CollabData} />
            {caseData.slice(1)}
        </div>
    )
}

export default Home