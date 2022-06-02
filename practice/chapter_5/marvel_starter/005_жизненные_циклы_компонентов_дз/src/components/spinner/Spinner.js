import './spinner.scss';

import spinner from '../../resources/icon/_rings.gif'

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={spinner} alt="spinner" />
        </div>
    )
}

export default Spinner;