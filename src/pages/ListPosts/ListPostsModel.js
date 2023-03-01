import React, { Component, useState } from 'react'
import axios from 'axios';


export default class ListPostsModel extends Component {


    async get(){
      const datas = []
           const data = await axios
             .get('http://localhost:3030/posts')
             .then((res) => datas.push(res))
           return datas.data;   
    }
}
