import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormStyle } from '../Input/FormField';
import SectionTitle from '../SectionTitle';
import {schemaSignIn} from '../../schema/signInSchema';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import {instance} from '../../utils/axiosInstance/AxiosInstance'
import axios from 'axios'
import { MdPerson, MdPersonAddAlt1 } from 'react-icons/md';

export default function SignIn() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schemaSignIn)
    });

    const onSubmit = data => {
      
      instance.post('/user/login', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    };
  
    console.log(watch("email")); // watch input value by passing the name of it
    console.log(watch("password")); // watch input value by passing the name of it
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
     <FormStyle>
    <SectionTitle>
          Login
          <h5>Welcom!</h5>
          <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group">
          <label htmlFor="email">
          Email
              <div className="input_wrapper">
                <div className="input_icon">
                <AiOutlineMail />
                </div>
                <div className="input_text">
                  <input
                  {...register("email")}
                   type="email"
                   id="email"
                   name="email"
                  />
                </div>
              </div>
              <p>{errors.email?.message}</p>
            </label>
          </div>


          <div className="form-group">
            <label htmlFor="name">
              Password
              <div className="input_wrapper">
                <div className="input_icon">
                <AiFillLock />
                </div>
                <div className="input_text">
                  <input
                   {...register("password")}
                     type="password"
                     id="password"
                     name="password"
                  />
                </div>
              </div>
              <p>{errors.password?.message}</p>
            </label>
          </div>
          <button type="submit">Login</button>
          <div>
            {/* register */}
            {/* <Link>register now</Link> */}
          </div>
      </form>
        </SectionTitle>
     </FormStyle>
    //  
    );
  }