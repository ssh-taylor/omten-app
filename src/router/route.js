/*
 * @Author: your name
 * @Date: 2019-12-06 13:33:12
 * @LastEditTime : 2019-12-25 11:19:31
 * @LastEditors  : Please set LastEditors
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
            }
        ]
     },
     {
        path:'/login',
        name:'omten_home',
        component:r=>require.ensure([],()=>r(require('../apps/commons/Login.vue')),'omten_home'),
     },
     {
         path:'/ltxq',
         name:'omten_ltxq',
         component:{template:'<router-view></router-view>'},
         children:[
            {
                path:'/',
                name:'message_chat',
                component:r=>require.ensure([],()=>r(require('../apps/message/chat.vue')),'omten_message'),
             },
             {
                path:'/chatsetting',
                name:'message_chatsetting',
                component:r=>require.ensure([],()=>r(require('../apps/message/chatSetting.vue')),'omten_message'),
             },
             {
                path:'/userinfo',
                name:'message_userinfo',
                component:r=>require.ensure([],()=>r(require('../apps/message/userInfo.vue')),'omten_message'),
             },
         ]
     },
     {
        path:'/forms',
        name:'omten_form',
        component:{template:'<router-view></router-view>'},
        children:[
           {
               path:'/formlist',
               name:'query_formlist',
               component:r=>require.ensure([],()=>r(require('../apps/query/formlist.vue')),'omten_query'),
            },
            {
               path:'/forms',
               name:'query_forms',
               component:r=>require.ensure([],()=>r(require('../apps/query/forms.vue')),'omten_query'),
            },
            {
               path:'/editform',
               name:'query_editform',
               component:r=>require.ensure([],()=>r(require('../apps/query/editform.vue')),'omten_query'),
            },
        ]
    }
 ]
    
export default route