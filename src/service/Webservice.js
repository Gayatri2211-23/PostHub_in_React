import axios from "axios"

class WebService
{
   postAPICall(url,data)
   {
      var result = axios.post(url,data);
     return result;
    }

    

    getAPICall(url,token)
   {
      var result = axios.get(url,{
         headers:{
            Authorization :'Bearer '+token
         }
      });
     return result;
    }

    putAPICall(url,token,data)
   {
      var result = axios.put(url,data,{
         headers:{
            Authorization :'Bearer '+token
         }
      });
     return result;
    }

    postAPIAuthCall(url,token,data)
    {
      var result = axios.post(url,data,{
         headers:{
            Authorization :'Bearer '+token
         }
      });
     return result;
    }
}
export default new WebService