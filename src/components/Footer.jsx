import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Footer(props) {
    const {showModal,handleToggleModal,data} = props

    return (

        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>APOD PROJECT</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModal}><FontAwesomeIcon icon={faInfoCircle} className="icon-info" /></button>
        </footer>
    )
}