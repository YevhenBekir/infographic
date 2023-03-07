import './appHeader.scss'

const AppHeader = () => {
    return(
        <div className="menu-list">
            <nav>
                <ul className='list'>
                    <li className="list__item"><a href="#linear">linear</a></li>
                    <li className="list__item"><a href="#radial">radial</a></li>
                    <li className="list__item"><a href="#square">square</a></li>
                </ul>
            </nav>
        </div>
        
    )
}

export default AppHeader;