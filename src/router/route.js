 const route=[
     {
        path:'/',
        name:'omten_home',
        component:r=>require.ensure([],()=>r(require('../apps/home/index.vue')),'omten_home'),
        meta:{title:'欧美特应用'},
        children:[
            {
                path:'/message',
                name:'home_message',
                component:r=>require.ensure([],()=>r(require('../apps/home/message.vue')),'omten_home'),
                meta:{title:'欧美特应用'}
            },
            {
                path:'/mail',
                name:'home_mail',
                component:r=>require.ensure([],()=>r(require('../apps/home/mail.vue')),'omten_home'),
                meta:{title:'欧美特应用'}
            },
            {
                path:'/query',
                name:'home_query',
                component:r=>require.ensure([],()=>r(require('../apps/home/query.vue')),'omten_home'),
                meta:{title:'欧美特应用'}
            },
            {
                path:'/mine',
                name:'home_mine',
                component:r=>require.ensure([],()=>r(require('../apps/home/mine.vue')),'omten_home'),
                meta:{title:'欧美特应用'}
            }
        ]
     }
 ]
    
export default route