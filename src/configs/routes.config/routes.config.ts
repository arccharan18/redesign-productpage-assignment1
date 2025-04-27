import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'

// Public routes for unauthenticated users
export const publicRoutes: Routes = [
    ...authRoute,  // Include authentication routes
    {
        key: 'homePage',  // Home page route accessible to unauthenticated users
        path: '/hello',  // Make sure this is accessible for unauthenticated users
        component: lazy(() => import('@/views/Home')),
        authority: [],  // No authentication needed
    },
]

// Protected routes for authenticated users
export const protectedRoutes: Routes = [
    /** Example purpose only, please remove */
    {
        key: 'singleMenuItem',
        path: '/single-menu-view',
        component: lazy(() => import('@/views/demo/SingleMenuView')),
        authority: [],  // Define authority if needed
    },
    {
        key: 'collapseMenu.item1',
        path: '/collapse-menu-item-view-1',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView1')),
        authority: [],  // Define authority if needed
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-item-view-2',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView2')),
        authority: [],  // Define authority if needed
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: lazy(() => import('@/views/demo/GroupSingleMenuItemView')),
        authority: [],  // Define authority if needed
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: lazy(() => import('@/views/demo/GroupCollapseMenuItemView1')),
        authority: [],  // Define authority if needed
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: lazy(() => import('@/views/demo/GroupCollapseMenuItemView2')),
        authority: [],  // Define authority if needed
    },
    // Additional protected routes
    ...othersRoute,
]
