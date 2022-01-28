import axios, { AxiosResponse } from "axios";
import { PassThrough } from "stream";

export class TenorAPI {
    private httpGetAsync(url: string, callback: Function) {
        
        
        let ret = axios.get(url)
        .then(res => {
            const headerDate = res.headers && res.headers.date ? res.headers.date : "no response date";
            console.log("Status Code: ", res.status);
            console.log("Request Date: ", headerDate); 

            const dat = res.data;
            console.log(dat);
            return callback(res);
        }).catch(err => {
            return "n/a";
        });

        return ret;
    }
    
    private tenorCallback_search(response_objects: AxiosResponse)
    {
        var gif = response_objects.data["results"][0]['url'];
    
        return gif;
    }
    
    grab_data(search_term: string) {
    
        var apiKey = process.env.tenorToken;
        var lmt = 1;
    
        var search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
        process.env.tenorToken + "&limit=" + lmt;
    
        return this.httpGetAsync(search_url, this.tenorCallback_search);
    }
}