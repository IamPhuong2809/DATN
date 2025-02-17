import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo_Horizon.png'; // Đảm bảo đường dẫn đúng

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="header-logo" />
        </Link>
      </div>

      <div className="header-main">
        <div className="secondary-nav">
          <div className="right-menu">
            <button className="btn-consultation">Đăng kí tư vấn</button>
            <span>HỢP TÁC ĐÀO TẠO</span>
            <span>TUYỂN DỤNG</span>
            <span>TIN TỨC - SỰ KIỆN</span>
            <span>LIÊN HỆ</span>
            <div className="language-selector">
              <img src="/path-to-flag-icon.png" alt="English" />
            </div>
          </div>
        </div>

        <nav className="main-nav">
          <ul className="nav-menu">
            <li className="nav-item dropdown">
              <span>VỀ CHÚNG TÔI</span>
            </li>
            <li className="nav-item dropdown">
              <span>CƠ SỞ</span>
            </li>
            <li className="nav-item dropdown">
              <span>CHƯƠNG TRÌNH GIÁO DỤC</span>
            </li>
            <li className="nav-item">
              <span>TUYỂN SINH</span>
            </li>
            <li className="nav-item">
              <span>HỌC PHÍ</span>
            </li>
            <li className="nav-item dropdown">
              <span>GÓC TDSERS</span>
            </li>
            <li className="nav-item">
              <span>ĐỜI SỐNG HỌC ĐƯỜNG</span>
            </li>
            <li className="nav-item">
              <span>DỰ ÁN</span>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
}

export default Header;