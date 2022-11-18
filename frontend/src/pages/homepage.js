import React from 'react';
import Navbar from '../components/nav/navbar';
import Pins from '../components/pin/pins';
import "./homepage.css"
import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import CreateForm from '../components/createForm/createForm';
import { fetchUserPin } from '../actions/pin_actions';
// import { counter } from '@fortawesome/fontawesome-svg-core';

const Home = () => {
const ref = useRef(null)

const pinsObjArr = [

        {
            "_id": "63765e7a99829291a0f373c1",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/140x140_RS/9a/e6/53/9ae6537702bf6992f56940dada13c74e.jpg",
            "title": "random",
            "description": "random2",
            "link": "pintrest.com",
            "date": "2022-11-17T16:16:58.089Z",
            "createdAt": "2022-11-17T16:16:58.089Z",
            "updatedAt": "2022-11-17T16:16:58.089Z",
            "__v": 0
        },
        {
            "_id": "6377b3a399829291a0f374e1",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/08/9a/0f/089a0f8279adb81348c23784a82969c0.jpg",
            "title": "asdsadas",
            "description": "sadsasa",
            "link": "pintrest.com",
            "date": "2022-11-18T16:32:35.535Z",
            "createdAt": "2022-11-18T16:32:35.535Z",
            "updatedAt": "2022-11-18T16:32:35.535Z",
            "__v": 0
        },
        {
            "_id": "6377b58599829291a0f374e9",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/73/9a/15/739a15bdb9b26dfd4b5e42c92caa3463.jpg",
            "title": "Tzuyu",
            "description": "K pop",
            "link": "pintrest.com",
            "date": "2022-11-18T16:40:37.703Z",
            "createdAt": "2022-11-18T16:40:37.704Z",
            "updatedAt": "2022-11-18T16:40:37.704Z",
            "__v": 0
        },
        {
            "_id": "6377b75699829291a0f374f4",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/d9/c3/b3/d9c3b31dc42ea42608eb82cc4290c8f8.jpg",
            "title": "Japan",
            "description": "",
            "link": "pintrest.com",
            "date": "2022-11-18T16:48:22.225Z",
            "createdAt": "2022-11-18T16:48:22.225Z",
            "updatedAt": "2022-11-18T16:48:22.225Z",
            "__v": 0
        },
        {
            "_id": "6377dca699829291a0f374fd",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/e2/a3/81/e2a38177120d8d1154251e3a9766f894.jpg",
            "title": "Planet",
            "description": "Planet",
            "link": "pintrest.com",
            "date": "2022-11-18T19:27:34.291Z",
            "createdAt": "2022-11-18T19:27:34.291Z",
            "updatedAt": "2022-11-18T19:27:34.291Z",
            "__v": 0
        },
        {
            "_id": "6377f4c3d8438bee7f1625b2",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/c7/b8/d4/c7b8d41fe274411b7f6166a247bae44e.jpg",
            "title": "Skyscaper",
            "description": "",
            "link": "pintrest.com",
            "date": "2022-11-18T21:10:27.611Z",
            "createdAt": "2022-11-18T21:10:27.612Z",
            "updatedAt": "2022-11-18T21:10:27.612Z",
            "__v": 0
        },        {
            "_id": "63765e7a99829291a0f373c1",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/140x140_RS/9a/e6/53/9ae6537702bf6992f56940dada13c74e.jpg",
            "title": "random",
            "description": "random2",
            "link": "pintrest.com",
            "date": "2022-11-17T16:16:58.089Z",
            "createdAt": "2022-11-17T16:16:58.089Z",
            "updatedAt": "2022-11-17T16:16:58.089Z",
            "__v": 0
        },
        {
            "_id": "6377b3a399829291a0f374e1",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/08/9a/0f/089a0f8279adb81348c23784a82969c0.jpg",
            "title": "asdsadas",
            "description": "sadsasa",
            "link": "pintrest.com",
            "date": "2022-11-18T16:32:35.535Z",
            "createdAt": "2022-11-18T16:32:35.535Z",
            "updatedAt": "2022-11-18T16:32:35.535Z",
            "__v": 0
        },
        {
            "_id": "6377b58599829291a0f374e9",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/73/9a/15/739a15bdb9b26dfd4b5e42c92caa3463.jpg",
            "title": "Tzuyu",
            "description": "K pop",
            "link": "pintrest.com",
            "date": "2022-11-18T16:40:37.703Z",
            "createdAt": "2022-11-18T16:40:37.704Z",
            "updatedAt": "2022-11-18T16:40:37.704Z",
            "__v": 0
        },
        {
            "_id": "6377b75699829291a0f374f4",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/d9/c3/b3/d9c3b31dc42ea42608eb82cc4290c8f8.jpg",
            "title": "Japan",
            "description": "",
            "link": "pintrest.com",
            "date": "2022-11-18T16:48:22.225Z",
            "createdAt": "2022-11-18T16:48:22.225Z",
            "updatedAt": "2022-11-18T16:48:22.225Z",
            "__v": 0
        },
        {
            "_id": "6377dca699829291a0f374fd",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/e2/a3/81/e2a38177120d8d1154251e3a9766f894.jpg",
            "title": "Planet",
            "description": "Planet",
            "link": "pintrest.com",
            "date": "2022-11-18T19:27:34.291Z",
            "createdAt": "2022-11-18T19:27:34.291Z",
            "updatedAt": "2022-11-18T19:27:34.291Z",
            "__v": 0
        },
        {
            "_id": "6377f4c3d8438bee7f1625b2",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/c7/b8/d4/c7b8d41fe274411b7f6166a247bae44e.jpg",
            "title": "Skyscaper",
            "description": "",
            "link": "pintrest.com",
            "date": "2022-11-18T21:10:27.611Z",
            "createdAt": "2022-11-18T21:10:27.612Z",
            "updatedAt": "2022-11-18T21:10:27.612Z",
            "__v": 0
        },        {
            "_id": "63765e7a99829291a0f373c1",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/140x140_RS/9a/e6/53/9ae6537702bf6992f56940dada13c74e.jpg",
            "title": "random",
            "description": "random2",
            "link": "pintrest.com",
            "date": "2022-11-17T16:16:58.089Z",
            "createdAt": "2022-11-17T16:16:58.089Z",
            "updatedAt": "2022-11-17T16:16:58.089Z",
            "__v": 0
        },
        {
            "_id": "6377b3a399829291a0f374e1",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/08/9a/0f/089a0f8279adb81348c23784a82969c0.jpg",
            "title": "asdsadas",
            "description": "sadsasa",
            "link": "pintrest.com",
            "date": "2022-11-18T16:32:35.535Z",
            "createdAt": "2022-11-18T16:32:35.535Z",
            "updatedAt": "2022-11-18T16:32:35.535Z",
            "__v": 0
        },
        {
            "_id": "6377b58599829291a0f374e9",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/73/9a/15/739a15bdb9b26dfd4b5e42c92caa3463.jpg",
            "title": "Tzuyu",
            "description": "K pop",
            "link": "pintrest.com",
            "date": "2022-11-18T16:40:37.703Z",
            "createdAt": "2022-11-18T16:40:37.704Z",
            "updatedAt": "2022-11-18T16:40:37.704Z",
            "__v": 0
        },
        {
            "_id": "6377b75699829291a0f374f4",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/d9/c3/b3/d9c3b31dc42ea42608eb82cc4290c8f8.jpg",
            "title": "Japan",
            "description": "",
            "link": "pintrest.com",
            "date": "2022-11-18T16:48:22.225Z",
            "createdAt": "2022-11-18T16:48:22.225Z",
            "updatedAt": "2022-11-18T16:48:22.225Z",
            "__v": 0
        },
        {
            "_id": "6377dca699829291a0f374fd",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/e2/a3/81/e2a38177120d8d1154251e3a9766f894.jpg",
            "title": "Planet",
            "description": "Planet",
            "link": "pintrest.com",
            "date": "2022-11-18T19:27:34.291Z",
            "createdAt": "2022-11-18T19:27:34.291Z",
            "updatedAt": "2022-11-18T19:27:34.291Z",
            "__v": 0
        },
        {
            "_id": "6377f4c3d8438bee7f1625b2",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/c7/b8/d4/c7b8d41fe274411b7f6166a247bae44e.jpg",
            "title": "Skyscaper",
            "description": "",
            "link": "pintrest.com",
            "date": "2022-11-18T21:10:27.611Z",
            "createdAt": "2022-11-18T21:10:27.612Z",
            "updatedAt": "2022-11-18T21:10:27.612Z",
            "__v": 0
        },        {
            "_id": "63765e7a99829291a0f373c1",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/140x140_RS/9a/e6/53/9ae6537702bf6992f56940dada13c74e.jpg",
            "title": "random",
            "description": "random2",
            "link": "pintrest.com",
            "date": "2022-11-17T16:16:58.089Z",
            "createdAt": "2022-11-17T16:16:58.089Z",
            "updatedAt": "2022-11-17T16:16:58.089Z",
            "__v": 0
        },
        {
            "_id": "6377b3a399829291a0f374e1",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/08/9a/0f/089a0f8279adb81348c23784a82969c0.jpg",
            "title": "asdsadas",
            "description": "sadsasa",
            "link": "pintrest.com",
            "date": "2022-11-18T16:32:35.535Z",
            "createdAt": "2022-11-18T16:32:35.535Z",
            "updatedAt": "2022-11-18T16:32:35.535Z",
            "__v": 0
        },
        {
            "_id": "6377b58599829291a0f374e9",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/73/9a/15/739a15bdb9b26dfd4b5e42c92caa3463.jpg",
            "title": "Tzuyu",
            "description": "K pop",
            "link": "pintrest.com",
            "date": "2022-11-18T16:40:37.703Z",
            "createdAt": "2022-11-18T16:40:37.704Z",
            "updatedAt": "2022-11-18T16:40:37.704Z",
            "__v": 0
        },
        {
            "_id": "6377b75699829291a0f374f4",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/d9/c3/b3/d9c3b31dc42ea42608eb82cc4290c8f8.jpg",
            "title": "Japan",
            "description": "",
            "link": "pintrest.com",
            "date": "2022-11-18T16:48:22.225Z",
            "createdAt": "2022-11-18T16:48:22.225Z",
            "updatedAt": "2022-11-18T16:48:22.225Z",
            "__v": 0
        },
        {
            "_id": "6377dca699829291a0f374fd",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/e2/a3/81/e2a38177120d8d1154251e3a9766f894.jpg",
            "title": "Planet",
            "description": "Planet",
            "link": "pintrest.com",
            "date": "2022-11-18T19:27:34.291Z",
            "createdAt": "2022-11-18T19:27:34.291Z",
            "updatedAt": "2022-11-18T19:27:34.291Z",
            "__v": 0
        },
        {
            "_id": "6377f4c3d8438bee7f1625b2",
            "user": "6351b72f4f17942eb48a15df",
            "image": "https://i.pinimg.com/564x/c7/b8/d4/c7b8d41fe274411b7f6166a247bae44e.jpg",
            "title": "Skyscaper",
            "description": "",
            "link": "pintrest.com",
            "date": "2022-11-18T21:10:27.611Z",
            "createdAt": "2022-11-18T21:10:27.612Z",
            "updatedAt": "2022-11-18T21:10:27.612Z",
            "__v": 0
        },
        
]

    return (
        <React.Fragment>
            <Navbar/>
            <div ref={ref} className='homePageContainer'>
                <div className='homePageBodyFlex'>
                    <div className='homePageBody'>
                    {   
                    //
                        pinsObjArr.map((pinObj) => {
                            return(
                                <Pins url={pinObj} key={pinObj._id}/>
                            )
                        } )
                    }
                        <div>This is homepage</div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Home