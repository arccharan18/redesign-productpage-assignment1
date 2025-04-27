import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const sharedRoutes: Routes = [
  {
    key: 'homePage',
    path: '/hello',  // Accessible to both authorized and unauthorized users
    component: lazy(() => import('@/views/Home')),
    authority: [],  // No authentication required
  },
  {
    key: 'aboutPage',
    path: '/about',  // Another route accessible to both users
    component: lazy(() => import('@/views/About')),
    authority: [],
  },
  {
    key: 'contactPage',
    path: '/contact',  // New shared route
    component: lazy(() => import('@/views/Contact')),
    authority: [],
  },
]

export default sharedRoutes
