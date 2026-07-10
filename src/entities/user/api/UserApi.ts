import { getUserFromJwt } from "../lib/UserLib";
import type IUser from "../model/IUser";

export default class UserApi {
    static aunthenticate(login: string, password: string): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            // одним з правил автентифікації - навмисно закладений відчутний час
            // самої процедури (близько 1с) з безпекових міркувань
            setTimeout(() => {
                // fetch -> JWT
                if (login == "user" && password == "123") {
                    // імітуємо зображення токена
                    let jwt = "eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzgzNDQwMDE5NTcxLCJleHAiOjE3ODQ2NDk2NjIwMDAsIm5hbWUiOiJFeHBlcmluY2VkIFVzZXIiLCJlbWFpbCI6InVzZXJAaS51YSJ9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI";
                    // обробляємо по справжньому
                    // для фронтенда цікавий тільки payload: розділяємо токен за символом "." і беремо другу частину 
                    resolve(getUserFromJwt(jwt));
                }
                else {
                    reject(401);
                }
            }, 1000);
        });
    }
}

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
*/