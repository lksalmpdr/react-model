import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App/App';
import SideMenu from './js/components/SideMenu/SideMenu'
import Form from './js/components/Form/Form'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MyForm from './js/components/Form/formModel';


ReactDOM.render(
    <div className="container-fluid">
        <div className="content">
            <App />
            <SideMenu />
            <div className="row">
                <div className="col-xs-11 col-md-11 col-lg-11 offset-xs-1 offset-md-1 offset-lg-1" id="conteudo">
                    <Form/>
                    <MyForm />
                </div>
            </div>
            {/*<Rodape />*/}
        </div>
    </div>
    , document.getElementById('root')
);
