import { Routes } from '@angular/router';
import { Clientlayout } from './layouts/clientlayout/clientlayout';
import { Adminlayout } from './layouts/adminlayout/adminlayout';
import { Home } from './pages/home/home';
import { Detailproduct } from './pages/detailproduct/detailproduct';
import { Search } from './pages/search/search';
import { Cart } from './pages/cart/cart';
import { Categorypage } from './pages/categorypage/categorypage';

export const routes: Routes = [
    {path:'',component:Clientlayout,children:[
        {path:'',component:Home},
        {path:'list',component:Categorypage},        
        {path:'detail/:id',component:Detailproduct},
        {path:'search', component:Search},
        {path: 'cart', component:Cart}
    ]},
    {path:'admin',component:Adminlayout}
];
