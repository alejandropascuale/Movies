import PropTypes from 'prop-types';
import React from 'react';


function WidgetMovies ({title, border, text, quantity, icon}) {
    
    return (				
        <div className="col-md-4 mb-4">
            <div className={`card ${border} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold ${text} text-uppercase mb-1`}>{title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{quantity}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
WidgetMovies.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    border: PropTypes.oneOf(['border-left-primary', 'border-left-success', 'border-left-warning']).isRequired,
}
export default WidgetMovies