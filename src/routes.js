// //Lazy Loading: İsteğe bağlı olarak modüllerin yüklenmmesi işlemidir. Uyguluma modüllerinizi, çoklu modüllere bölerek talep üzerine yüklenmesini sağlar. Buradaki amaç vakit ve performanstan kazanmaktır
// const User=resolve =>{
//     require.ensure(["./components/user/User.vue"], () =>{ //eğer ki burada bulunan component kullanılacaksa eğer onu require ile kesinlikle import et
//         resolve(require("./components/user/User.vue"));
//     },"User"); //buradki ,"User" yaptığı iş; sayfa yüklendiğinde hepsi birlikte açılsın dedik
// }//aşağı da yaptığımız import işlemini burada lazy load olarak yaptık

// const UserStart=resolve =>{
//     require.ensure(["./components/user/User.vue"], () =>{ 
//         resolve(require("./components/user/User.vue"));
//     },"User");
// }

// const UserDetail=resolve =>{
//     require.ensure(["./components/user/User.vue"], () =>{
//         resolve(require("./components/user/User.vue"));
//     },"User");
// }

// const UserEdit=resolve =>{
//     require.ensure(["./components/user/User.vue"], () =>{ 
//         resolve(require("./components/user/User.vue"));
//     },"User");
// }

import Home from "./components/Home.vue";
import Header from "./components/Header.vue"
import User from './components/user/User.vue';
import UserStart from "./components/user/UserStart.vue";
import UserDetail from "./components/user/UserDetail.vue";
import UserEdit from "./components/user/UserEdit.vue";


export const routes=[
    {   
        path:'/', name:'anasayfa',
        components:{  //hangi yol gelirse hangi component gelecek diye anlamı vardır
        default:Home,
        "header-top":Header,
        }
    },

    {
        path:'/user/',name:'kullanici',
        components:{
            default:User,
            "header-bottom":Header
        },
        children:[ //burada child route oluşturduk
            {path:'',component:UserStart}, // /user böyleyken UserStart çalışsın dedik
            {path:':id',component:UserDetail}, // /user/12 gibi bir şey gelirse o id sahip olan çalışacak
            {path:':id/edit',component:UserEdit,name:"userEdit"} // /user/12/edit
        ]
    },
    {path:"/redirect",redirect:"/user"}, //localhost'ta redicet yazdıpı zaman /user componentine gitsin deedik
    {path:"*",redirect:"/"},

];

