import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import HomePage from '../pages/HomePage';
import axios from 'axios'
import UploadNews from '../pages/UploadNews'
import ShowPost from '../pages/ShowPost';
import NotFound from '../pages/NotFound';

const RoutePage = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/news/items')
            .then(info => {
                setItems(info.data.items)
            })
    }, [items.length])
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                 <Switch>
                   {
                        items.map(data => {
                            const pathname= '/news/'+data.item+'/:slug';
                            return (
                                <Route key={data._id} path={pathname}  > <ShowPost catagory={data.item} /></Route>
                            )
                        })
                        
                    }
                    {
                        items.map(data => {
                            const pathname= '/news/'+data.item;
                            return (
                                <Route key={data._id} path={pathname}  > <HomePage catagory={data.item} /></Route>
                            )
                        })
                    }
                    <Route exact path='/news/post' component={UploadNews} />
                    <Route exact path='*' ><NotFound/></Route>

                </Switch>
            </BrowserRouter>

        </div>
    );
};

export default RoutePage;