import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const meunList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const navigator = useNavigate();

    // 로그인 클릭하면 로그인 페이지로 이동
    const getClickLogin = () => {
        navigator('/login');
    }

    return (
        <div>
            <div>
                <div className="login-button">
                    <FontAwesomeIcon icon={faUser} />
                    <div onClick={getClickLogin}>로그인</div>
                </div>
            </div>
            <div className="nav-section">
                <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png" />
            </div>
            <div className="menu-area">
                <ul className="meun-list">
                    {meunList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
            
                <div className="search-area">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" />
                </div>
            </div>    
        </div>
        
    )
}

export default Navbar;