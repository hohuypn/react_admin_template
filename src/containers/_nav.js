import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/base',
    icon: <CIcon name="cilUser" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All users',
        to: '/users',
        icon: 'cilPeople',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add new user',
        to: '/base/tables',
        icon: 'cilpeopleplus',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Categories',
    route: '/base',
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All categories',
        to: '/categories',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add new categories',
        to: '/categories_add',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Products',
    route: '/base',
    icon: <CIcon name="cilApplicationsSettings" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All products',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add new product',
        to: '/base/tables',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Order manage',
    route: '/base',
    icon: <CIcon name="cilCalendar" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All orders',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add new order',
        to: '/base/tables',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Icons',
    route: '/icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Free',
        to: '/icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
]

