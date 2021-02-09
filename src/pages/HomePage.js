import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import './homepage.css'

const HomePage = (props) => {
    const history = useHistory();
    const [items, setItems] = useState([]);
    const {url } = useRouteMatch();
    const Url = "http://localhost:4000/news/article/" + props.catagory;

    useEffect(() => {
        axios.get(Url)
            .then(info => {
                setItems(info.data.data)
            })
            .catch(err => {
                alert('Sorry Please try again')
            })

    }, [history])
    return (
        <div className="contain">
            <div className="sub_container">
                <div className="news_item">
                    {
                        items.map(item => {
                            return (
                                <div onClick={() => { history.push(`${url}/${item.slug} `) }} key={item._id} className="highlight_item">
                                    <h3>{item.title}</h3>
                                    <p>{item.discription} </p>
                                    <div className="news_footer">
                                        <button>More</button>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default HomePage;