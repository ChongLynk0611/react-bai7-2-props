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
        const email = this.props.email;
        return(
            <div className="TabMenu">
                {icons.map((icon, index)=>(
                    <div className="menu-item">
                        <img src={icon.icon}></img>
                        <span>{icon.lable}</span>
                        
                    </div>
                    
                ))}
                <div>Email: {email}</div>
            </div>
        );
    }
}

export default TabMenu;