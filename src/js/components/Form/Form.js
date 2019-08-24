import React, { Component } from 'react';
import './Form.css';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/


class Form extends Component {
    
    render()
    {
        return(
            <div className="row">
                <div className="">
                    <form className="form col-md-6">
                        <div className="form-group">
                            <label htmlFor="label" className="form-label">Label</label>
                            <input type="text" className="form-control" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;