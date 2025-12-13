import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Ajuda from './js/components/Ajuda/Ajuda';
import App from './js/components/App/App';
import Form from './js/components/Form/Form';
import MyForm from './js/components/Form/formModel';
import SideMenu from './js/components/SideMenu/SideMenu';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentView: 'default' // 'default' ou 'ajuda'
        };
    }

    handleContentViewChange = (view) => {
        this.setState({ contentView: view });
    }

    renderContent = () => {
        if (this.state.contentView === 'ajuda') {
            return <Ajuda />;
        }
        return (
            <React.Fragment>
                <Form />
                <MyForm />
            </React.Fragment>
        );
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="content">
                    <App />
                    <SideMenu onContentViewChange={this.handleContentViewChange} />
                    <div className="row">
                        <div className="col-xs-11 col-md-11 col-lg-11 offset-xs-1 offset-md-1 offset-lg-1" id="conteudo">
                            {this.renderContent()}
                        </div>
                    </div>
                    {/*<Rodape />*/}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
);
