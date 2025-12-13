import React, { Component } from 'react';
import './SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

class SideMenu extends Component {
    handleClose(e)
    {
        e.preventDefault();
        document.getElementById("navegacao").style.width = "0";
        document.getElementsByClassName("closebtn")[0].style.visibility = "hidden"
    }
    
    handleAjuda(e){
        e.preventDefault();
        if (this.props.onContentViewChange) {
            this.props.onContentViewChange('ajuda');
        }
        var fechar = document.getElementsByClassName('closebtn');
        if (fechar.length > 0) {
            fechar[0].click();
        }
    }

    render()
    {
        var styleIcon = {
            visibility: 'hidden',
        }
        return(
            <ul id="navegacao" className="sidenav">
                <button className="btn btn-sm closebtn" onClick={this.handleClose} style={styleIcon}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </button>
                <li onClick={this.handleAjuda}>Ajuda</li>
                <li>Admissao</li>
                <li>Administração</li>
                <li>Pólos</li>
            </ul>
        );
    }
}

export default SideMenu;