import React, { Component } from 'react';
import './Ajuda.css';


class Ajuda extends Component {
  

    render()
    {
        return(
            <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-12">
                    <div className="form-group">
                        <img src="..." alt="Primeira Ajuda" className="img-thumbnail" />
                        <p className="form-label">Primeira Ajuda</p>
                    </div>
                    <div className="form-group">
                        <img src="..." alt="Segunda Ajuda" className="img-thumbnail" />
                        <p className="form-label">Segunda Ajuda</p>
                    </div>
                    <div className="form-group">
                        <img src="..." alt="Terceira Ajuda" className="img-thumbnail" />
                        <p className="form-label">Terceira Ajuda</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ajuda;