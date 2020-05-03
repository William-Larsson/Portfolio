import React from 'react'
import './styles/footnote.scss'

function Footnote() {
    return (
        <footer>
            <div className="footerContent bodyMargin">
                <h1>CON</h1>
                <h1>TACT.</h1>
                <p>Umeå, Sweden</p>
                <p>E-mail:
                    <a href="mailto:william_larsson@outlook.com"> william_larsson@outlook.com</a>
                </p>
                <p>Phone:
                    <a href="tel:+4670-6538862"> +46 70-6538862</a>
                </p>
            </div>
        </footer>
    )
}

export default Footnote