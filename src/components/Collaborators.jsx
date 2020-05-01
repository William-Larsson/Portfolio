import React from 'react';
import './styles/collaborators.scss'

function Collaborators(props) {

    const collab = props.data.map((data) => {
        const logoPath = process.env.PUBLIC_URL + data.logo
        return (
            <img
                key={data.id}
                src={logoPath}
                alt={data.alt}
                className="logo"
            />
        )
    })

    return (
        <div className="collaborators">
            <h3 className="collabHeader">previous collaborators</h3>
            <div>
                {collab}
            </div>
        </div>
    )
}

export default Collaborators