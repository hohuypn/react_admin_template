import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const User = React.lazy(() => import('./views/users/User'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Category = React.lazy(() => import('./views/categories/category'));
const Add_Category = React.lazy(() => import('./views/categories/addCategory'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', name: 'User', component: User },
  { path: '/registers', name: 'Register', component: Register },
  { path: '/categories', name: 'Category', component: Category },
  { path: '/categories_add', name: 'Add Category', component: Add_Category },
];

export default routes;
