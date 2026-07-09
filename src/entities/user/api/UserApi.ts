import type IUser from "../model/IUser";

export default class UserApi {
<<<<<<< HEAD
    static aunthenticate(login: string, password: string): Promise<IUser> {
=======

    static authenticate(login:string, password:string):Promise<IUser> {
>>>>>>> fca8381fd0f2a630875965682be907c14684d76a
        return new Promise<IUser>((resolve, reject) => {
            // одним з правил автентифікації - навмисно закладений відчутний час
            // самої процедури (близько 1с) з безпекових міркувань
            setTimeout(() => {
                // fetch -> JWT
<<<<<<< HEAD
                if (login == "user" && password == "123") {
                    let jwt = "eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzgzNDQwMDE5NTcxLCJleHAiOjE3ODQ2NDk2NjIwMDAsIm5hbWUiOiJFeHBlcmluY2VkIFVzZXIiLCJlbWFpbCI6InVzZXJAaS51YSJ9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI";
                }
                else{
=======
                if(login == "user" && password == "123") {
                    let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzgzNDQwMDE5NTcxLCJleHAiOjE3ODQ2NDk2NjIwMDAsIm5hbWUiOiJFeHBlcmluY2VkIFVzZXIiLCJlbWFpbCI6InVzZXJAaS51YSJ9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI";

                }
                else {
>>>>>>> fca8381fd0f2a630875965682be907c14684d76a
                    reject(401);
                }
            }, 1000);
        });
    }
}
<<<<<<< HEAD

/*
JWT
 header.payload.signature
 для фронтенду важливий payload, який містить дані користувача
 sub (Subject) - кому виданий токен (login)
 exp (Expiration Time) - час життя токена
 iat (Issued at) - час видачі токена
 name 
 email

 header: {
 
  alg: "HS256",
  typ: "JWT"
 } = eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9

 payload = {
    sub: "user",
    iat: 1783440081663,
    exp: 1784649662000,
    name: "Example User",
    email: "user@i.ua"
 } =>
 {"sub":"user","iat":1783440019571,"exp":1784649662000,"name":"Experinced User","email":"user@i.ua"} 
 eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzgzNDQwMDE5NTcxLCJleHAiOjE3ODQ2NDk2NjIwMDAsIm5hbWUiOiJFeHBlcmluY2VkIFVzZXIiLCJlbWFpbCI6InVzZXJAaS51YSJ9

 signature = gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI
=======
/*
JWT
 header.payload.signature
 для фронтенда цікавий тільки payload:
 sub (Subject) - кому виданий токен (login)
 exp (Expiration Time)
 iat (Issued at)
 name
 email


header: {
  "alg": "HS256",
  "typ": "JWT"
} = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

payload = {
    sub: "user",
    iat: 1783440019571,
    exp: 1784649662000,
    name: "Experinced User",
    email: "user@i.ua"
} =>
{"sub":"user","iat":1783440019571,"exp":1784649662000,"name":"Experinced User","email":"user@i.ua"} 
eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzgzNDQwMDE5NTcxLCJleHAiOjE3ODQ2NDk2NjIwMDAsIm5hbWUiOiJFeHBlcmluY2VkIFVzZXIiLCJlbWFpbCI6InVzZXJAaS51YSJ9

signature = gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI
>>>>>>> fca8381fd0f2a630875965682be907c14684d76a
*/