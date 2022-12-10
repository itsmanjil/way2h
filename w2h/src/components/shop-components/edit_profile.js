// ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { instance } from "../../utils/axiosInstance/AxiosInstance";

const ProfilePage = () => {
    const [q, setUser] = useState([]);
    const id = localStorage.getItem("_id");
    console.log(id);
    const token = localStorage.getItem("token");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        instance
            .get(`me/${id}`, {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            })
            .then((res) => {
                setUser(res.data.q);
                //   console.log("Profile data" + JSON.stringify(res.data.q));
                console.log(res.data.q);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [token]);
    function updateUser()
  {
    let item={name,email}
    console.warn("item",q)
    instance
    .put(`me/update/${id}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(q)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
    })
  }
    return (

        <div className='nk'>
            {q.map((put) => {
                const { name, email } = put;
                return ((

                    <div className="ltn__form-box contact-form-box box-shadow white-bg" style={{ position: 'relative', top: "150px" }}>
                        <h4 className="title-2">Edit Profile</h4>
                        <form id="contact-form" method="put">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-item input-item-name ltn__custom-icon">
                                        <input type="text" name="{name}" placeholder="Enter your name" value={name}  onChange={(e)=>{setName(e.target.value)}} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-item input-item-email ltn__custom-icon">
                                        <input type="email" name="email" placeholder="Enter email address" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                    </div>
                                </div>


                            </div>

                            <p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label></p>
                            <div className="btn-wrapper mt-0">
                                <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit" onClick={updateUser}>Update Profile</button>
                            </div>
                            <p className="form-messege mb-0 mt-20" />
                        </form>
                    </div>
                ))
            })}


        </div>
    )
}


export default ProfilePage