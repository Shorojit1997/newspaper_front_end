import React, { useEffect, useState } from 'react';
import './navbar.css'
import { AiOutlineMenu } from 'react-icons/ai';
import axios from 'axios'
import {NavLink, Redirect} from 'react-router-dom'
const Navbar = () => {

	const [items, setItems] = useState([]);

	const date = (d) => {
		const date = Object.values(d);
		var str = ''
		for (var i = 0; i < 16; i++) {
			str += date[i];
		}
		return str;
	}
	
	useEffect(() => {
		axios.get('http://localhost:4000/news/items').then(info => {
			setItems(info.data.items)
			
		}).then(err => {
			
		})
	}, [items.length])

	return (
		<div className="navmenu">
			<div className="nav">
				<input type="checkbox" id="check" />
				<label className="checkbtn" htmlFor="check"><AiOutlineMenu /></label>
				<div className="logo">
					<h1>WENEWS</h1>
					<p>{date(Date())}</p>
				</div>
				<div className="navbar">
					<ul>
						{
							items.map(item => {
								const pathName='/news/'+item.item;
								return (<li key={item._id} > <NavLink to={pathName}>{item.item.toUpperCase()}</NavLink>  </li>)
							})
						}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;