import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useHistory } from 'react-router';
const Dashboard1 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const history = useHistory();

    const onSubmit = data => {
        const serviceData = {
            serviceTitle: data.title,
            serviceDescription: data.description,
            price: data.price,
            imageURL: imageURL
        };

        const url = `http://localhost:4000/addServices`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                if (res.status === 200) {
                    history.push('/manageServices')
                }
            })
    }

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '1296a13ce55bb34081ea80a01769e9d4');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="title">Service Title</label>
                                    <input id="title" {...register('title', { required: true, maxLength: 50 })} placeholder="Enter Service Title" className="form-control" />
                                    {errors.title && errors.title.type === "required" && <span>This is required</span>}
                                    {errors.title && errors.title.type === "maxLength" && <span>Max length exceeded</span>}
                                </div>
                                <div className="col">
                                    <label htmlFor="description">Service Description</label>
                                    <input id="description" {...register('description', { required: true, maxLength: 200 })} placeholder="Enter Service Description" className="form-control" />
                                    {errors.description && errors.description.type === "required" && <span>This is required</span>}
                                    {errors.description && errors.description.type === "maxLength" && <span>Max length exceeded</span>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="price">Service Price</label>
                                    <input id="price" {...register('price', { required: true })} placeholder="Enter Service Price" className="form-control" />
                                    {errors.price && errors.price.type === "required" && <span>This is required</span>}
                                </div>
                                <div className="col">
                                    <label htmlFor="file">
                                        <span>
                                            {" "}
                                            <FontAwesomeIcon icon={faCloudUploadAlt} size="1x" />{" "}
                                        </span>
                                        <span style={{ fontSize: "14px" }}>Upload Image</span>
                                    </label>
                                    <input id="file" type="file" {...register('file', { required: true })}
                                        onChange={handleImageUpload} className="form-control" />
                                    {errors.file && errors.file.type === "required" && <span>This is required</span>}
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center save-button">
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Dashboard1;