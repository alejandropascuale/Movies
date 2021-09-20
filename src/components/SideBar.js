import React from 'react';
import logo from '../assets/images/logo-DH.png'
import { faTable, faChartArea, faFolder, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBar () {
    return (
        <ul className = "navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={logo} alt="Digital House" />
				</div>
			</a>
			<hr className="sidebar-divider my-0" />
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<FontAwesomeIcon icon={faTachometerAlt} className="fas fa-fw"/>
					<span>Dashboard - DH movies</span>
                </a>
			</li>
			<hr className="sidebar-divider" />
			<div className="sidebar-heading">Actions</div>
			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<FontAwesomeIcon icon={faFolder} className="fas fa-fw" />
					<span>Pages</span>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="/">
					<FontAwesomeIcon icon={faChartArea} className="fas fa-fw" />
					<span>Charts</span>
                </a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="/">
					<FontAwesomeIcon icon={faTable} className="fas fa-fw" />
					<span>Tables</span>
                </a>
			</li>
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
    );
}

export default SideBar