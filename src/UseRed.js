export const initial="";
export const red=(s,action)=>{
    if(action.type==="MAIL"){
        return action.payload;
    }
    return s;
}