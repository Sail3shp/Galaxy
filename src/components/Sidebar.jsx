import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
export default function SideBar(props) {
    const {showModal,handleToggleModal,data} = props
    return (
        <div className="sidebar">
            <div onClick = {handleToggleModal} className="bgOverlay"></div>
                <div className="sidebarContents">
                    <h2>{data?.title}</h2>
                    <div className="descriptionContainer">
                        <p className="descriptionTitle">{data?.date}</p>
                        <p>{data?.explanation}</p>
                    </div>
                    <button onClick={handleToggleModal}><FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>
        </div>
    )
}