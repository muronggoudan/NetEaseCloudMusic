import React from 'react'
import { Redirect } from "react-router-dom"
import Home from '../pages/Home/Home.tsx'
import Recommend from '../pages/Recommend.tsx'
import Singers from '../pages/Singers.tsx'
import Rank from '../pages/Rank.tsx'

export default [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render() {
          return <Redirect to={"/recommend"} />
        }
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/singers',
        component: Singers
      },
      {
        path: '/rank',
        component: Rank
      }
    ]
  }
]
