// import http from "k6/http";
// import { check, sleep } from "k6";

// export const options ={
// vus :5,
// duration :'05s',
// };

// // export const options ={
// //  stages :[
// //     {duration:'05s',target:5},
// //     {duration:'10s',target:10}
// //  ]
// // };

// export default function(){
//   const res= http.get('https://www.google.com');
//   check (res,{
//     'staurs was 200': (r) => r.status ==200,
//     ' resposne message': (r)=> r.body.includes('')
// });
//   sleep(1);
//   const url = 'http://test.k6.io/login';
//   const payload = JSON.stringify({
//     email: 'aaa',
//     password: 'bbb',
//   });
//   const params = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//  const res2= http.post(url, payload, params);
//  check (res2,{
//     'staurs was post 200': (r) => r.status ==200
// });

// }