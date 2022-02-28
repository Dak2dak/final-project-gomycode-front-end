import React from 'react';


const Popup = (props) => {

    return (props.trigger)? 
        (<div className='popup'>
            <div class="popup-inner">
                <button 
                    className='close-btn' 
                    onClick={() => props.setTrigger(false)} 
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                {props.children}
        
            </div>
        </div>) : "";
}

export default Popup;