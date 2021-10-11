  const reducer=(state,action)=>{
      if(action.type==="REMOVE-ITEMS"){
        return {...state,
        items:state.items.filter((ele)=>{
            return ele.id!==action.payload 
        })}
      }


      if(action.type==="CLEAR-CART"){
        return {...state,items:[]};
    }


     if(action.type==="ADDITION"){
       const addCart=state.items.map(( curEle)=>{
         if(curEle.id===action.payload){
           return{...curEle,amount:curEle.amount+1}
         }
          return curEle;
       })
       return {...state ,items:addCart}
       
     }



     if(action.type==="SUBSTRACTION"){
       const addCart=state.items.map(( curEle)=>{
         if(curEle.id===action.payload){
           return{...curEle,amount:curEle.amount-1}
         }

          return curEle;
       })
       .filter((curEle)=> curEle.amount!==0);
       return {...state ,items:addCart}
       
     }



     if(action.type==="GET-TOTAL"){
       let{totalitems,totalamount}= state.items.reduce((accum,curval)=>{
         let{   price,amount}=curval;
         let updatedtotalamount=price*amount;
         accum.totalitems+= amount;
         accum.totalamount+= updatedtotalamount

         return accum;
       },{
        totalitems:0,
        totalamount:0,
       })
       return{...state,totalitems,totalamount};
     }



   
   

  return state;  

}

export default reducer;