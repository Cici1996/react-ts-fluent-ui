import { AxiosPromise } from "axios";
import appClient, { API_KEY } from "../utils/HttpClient"

export class NewsService {

    public static getNews(): AxiosPromise {
        const url: string = `top-headlines?country=id&category=general&apiKey=${API_KEY}`;
        return new Promise((resolve, reject) => {
            appClient
                .get(url)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

}