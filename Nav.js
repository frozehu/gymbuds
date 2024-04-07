import weightlogo from '../images/weight.png'
import heartlogo from '../images/heart.png'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'


const Nav = ({ minimal, setShowModal, showModal, setIsSignUp}) => {
    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false
    return (
        <nav>
        <div className="logo-container">
            <img className ="logo" src={minimal ? logo2 : logo1}/>
        </div>

            {!authToken && !minimal && <button
                className="nav-button"
            onClick={handleClick}
                disabled={showModal}
            >Log in</button>}
        </nav>
    )
}
export default Nav