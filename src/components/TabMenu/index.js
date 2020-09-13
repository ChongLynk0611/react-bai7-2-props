import React , {Component} from 'react';
import './style.css';
class TabMenu extends Component{
    render(){
        return(
            <div className="TabMenu">
                <div className="menu-item">
                    <i className="fas fa-home"></i>
                    <span>HOME</span>
                </div>
                <div className="menu-item">
                    <i className="fas fa-gift"></i>
                    <span>DEALS</span>
                </div>
                <div className="menu-item">
                    <i className="fas fa-cloud-upload-alt"></i>
                    <span>UPLOAD</span>
                </div>
                <div className="menu-item">
                    <i className="fas fa-mug-hot"></i>
                    <span>WORK</span>
                </div>
                <div className="menu-item">
                    <i className="fas fa-cogs"></i>
                    <span>SETTING</span>
                </div>
            </div>
        );
    }
}

export default TabMenu;