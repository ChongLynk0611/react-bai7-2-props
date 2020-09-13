import React , {Component} from 'react';
import './style.css';
import home from '../../public/home.png';
import deals from '../../public/gift.png';
import upload from '../../public/server.png';
import work from '../../public/food.png';
import setting from '../../public/settings.png';
class TabMenu extends Component{
    
    render(){
        const icons = [
            {lable:'HOME' , icon:home},
            {lable:'DEALS' , icon: deals},
            {lable:'UPLOAD', icon:upload},
            {lable:'WORK', icon:work},
            {lable:'SETTING',icon:setting}
        ];
        return(
            <div className="TabMenu">
                {icons.map((icon, index)=>(
                    <div className="menu-item">
                    <img src={icon.icon}></img>
                <span>{icon.lable}</span>
                </div> 
                ))}
                {/* /* <div className="menu-item">
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
                </div> */ }
            </div>
        );
    }
}

export default TabMenu;