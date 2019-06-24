
export const countDes = {
    type:"COUNTDES",
}

export function increment(num){
    return{
        type:"increment",
        num
    }
}



export const DECREMENT = "decrement";
export function decrement(num){
    return{
        type:DECREMENT,
        num
    }
}

export const CHANGECITY = "CHANGECITY";
export function changeCity(city){
    return{
        type:"CHANGECITY",
        city
    }
}


export const CHANGEMSG = "CHANGEMSG";
export function changeMsg(msg){
    return{
        type:"CHANGEMSG",
        msg
    }
}
export const CHANGEMSGONE ="CHANGEMSGONE";
export function changeMsgOne(msg){
    return{
        type:CHANGEMSGONE,
        msg
    }
}


import axios from "@/utils/axios";
export const chengeWord = ()=>{

   return axios.get("vue/goodType")
    .then(res=>{
        console.log(res.data.msg);
        return{
            type:"CHANGEWORD",
            word:res.data.msg,

        }
    })
}

export const getGenre = () =>(
    axios.get("vue/goodType")
    .then(res=>(
        
        {
            type:"GETGENRE",
            genre:res.data.result,
        }
    ))
)


export const getGood = ({url,params,cb}) =>(
    axios.get(url,{params})
    .then(res=>{
        cb(res);
        return   {
            type:"GETGOOD",
            goods:res.data.result
        }
      
    })
)