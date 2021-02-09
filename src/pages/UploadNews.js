import axios from 'axios';
import React, { useState } from 'react';
import './uploadnews.css';
import { useHistory } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const UploadNews = () => {
	const history = useHistory();
	const [details, setDetails] = useState({
		author: '',
		title: '',
		discription: '',
		catagory: ''
	})
	const clear = () => {
		setDetails({
			author: '',
			title: '',
			discription: '',
			catagory: ''
		})
	}

	const uploadHandeler = () => {

		axios.post('http://localhost:4000/news/post', { ...details })

			.then(res => {
				clear();
				if (res)
					alert('News Upload Succesffully');
				const pathName = "/news/" + res.data.data.catagory;
				history.push(pathName)
			})
			.catch(err => {
				alert('Your title must be uniqe')
				setDetails({ ...details, title: '' })
			})


	}
	return (
		<div className="contain">
			<div className="upload_form">
				<div className="selecting_bar">
					<h2>Catagory</h2>
					<div className="form">
						<select onChange={(e) => { setDetails({ ...details, catagory: e.target.value }) }} name="cars" size="1">
							<option value="top">Top</option>
							<option value="opinion">Opinion</option>
							<option value="science">Science</option>
							<option value="business">Business</option>
						</select>
					</div>
					<button  >Add New</button>
				</div>
				<div className="uploading_body">
					<h2>UPLOADING FORM</h2>
					<div className="input_form">
						<label htmlFor="author">Corespondent Name</label>
						<input id="author" type="text" onChange={(e) => { setDetails({ ...details, author: e.target.value }) }} value={details.author} placeholder='Enter author name...' />
						<label htmlFor="title">News Title</label>

						<textarea id="title" type="text" onChange={(e) => { setDetails({ ...details, title: e.target.value }) }} value={details.title} placeholder="Title must be less than 50 word.."></textarea>
						<label htmlFor="discription">Discription</label>
						{/* <div id="discription">
							<CKEditor 
							   
								editor={ClassicEditor}
								onChange={(event, editor) => {
									const data = editor.getData();
									setDetails({ ...details, discription: data })
								}}
							/>
						</div> */}

						<textarea id="discription" type="text" onChange={(e) => { setDetails({ ...details, discription: e.target.value }) }} value={details.discription} placeholder="Write your report..."></textarea>
						<button onClick={uploadHandeler} className="bttn">Upload</button>
					</div>

				</div>

			</div>
		</div>

	);
};

export default UploadNews;