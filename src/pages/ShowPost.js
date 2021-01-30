import React, { useEffect, useState } from 'react';
import './view.css'
import axios from 'axios'

import { useHistory, useParams, useRouteMatch } from 'react-router-dom'

const ShowPost = () => {
    const [doc, setDoc] = useState([]);
    const history = useHistory();
    const params = useParams();
    const { url } = useRouteMatch();
    const postPath = url.split('/')
    const Url = "http://localhost:4000/news/slug/" + params.slug;

    useEffect(() => {
        axios.get(Url)
            .then(res => {

                if (res.data.data.length)
                    setDoc(res.data.data);

            })
            .catch(err => {
                history.push('*')
            })
    }, [])

    const date = (d, char) => {
        if (!d) return '';
        const date = Object.values(d);
        var str = ''
        for (var i = 0; i < char; i++) {
            str += date[i];
        }
        return str;
    }

    return (


        <div className="contain">
            <div className="sub_container">
                {
                    doc.length ? <div key={doc[0]._id} className="post_box">
                        <div className="post_directory">{postPath[1].toUpperCase() + ' >> ' + postPath[2].toUpperCase()}</div>
                        <div className="post_date">{date(Date(), 16)} /LAST MODIFIED {date(doc[0].createdAt, 10)}</div>
                        <div className="post_title">{doc[0].title} </div>
                        <div className="post_author" >{doc[0].author} </div >
                        <div className="post_des">{doc[0].discription}</div>
                        <div className="post_footer">Stay updated on the go with The WENEWS Android  iOS News App. Click here to download it for your device</div>
                    </div>
                        :
                        <h1 style={{ paddingTop: '200px' }}>404 not found</h1>
                }

            </div>
        </div>
    );
};

export default ShowPost;