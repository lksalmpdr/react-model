import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import Ajuda from '../Ajuda/Ajuda'

class SideMenu extends Component {
    handleClose(e)
    {
        e.preventDefault();
        document.getElementById("navegacao").style.width = "0";
        document.getElementsByClassName("closebtn")[0].style.visibility = "hidden"
    }
    
    handleAjuda(e){
        e.preventDefault();
        ReactDOM.render(<Ajuda />, document.getElementById('conteudo'));
        var fechar = document.getElementsByClassName('closebtn');
        fechar.click;
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