/*
 * @Author: your name
 * @Date: 2019-12-06 13:33:12
 * @LastEditTime: 2019-12-11 10:09:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\router\route.js
 */
 const route=[
     {
        path:'/',
        name:'omten_home',
        component:r=>require.ensure([],()=>r(require('../apps/home/index.vue')),'omten_home'),
        children:[
            {
                path:'/message',
                name:'home_message',
                component:r=>require.ensure([],()=>r(require('../apps/home/message.vue')),'omten_home'),
            },
            {
                path:'/mail',
                name:'home_mail',
                component:r=>require.ensure([],()=>r(require('../apps/home/mail.vue')),'omten_home'),
            },
            {
                path:'/query',
                name:'home_query',
                component:r=>require.ensure([],()=>r(require('../apps/home/query.vue')),'omten_home'),
            },
            {
                path:'/mine',
                name:'home_mine',
                component:r=>require.ensure([],()=>r(require('../apps/home/mine.vue')),'omten_home'),
            },
            {
                path:'/search',
                name:'home_search',
                component:r=>require.ensure([],()=>r(require('../apps/home/search.vue')),'omten_home')
            },
            {
                path:'/code',
                name:'home_code',
                component:r=>require.ensure([],()=>r(require('../apps/home/code.vue')),'omten_home')
            }
        ]
     },
     {
        path:'/login',
        name:'omten_home',
        component:r=>require.ensure([],()=>r(require('../apps/commons/Login.vue')),'omten_home'),
     },
 ]
    
export default route