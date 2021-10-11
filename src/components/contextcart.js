import React,{useContext} from 'react' 
import Scrollbars, {scrollbar} from "react-custom-scrollbars"
import "./Cart.css"
import  { Cart_items } from './Cart'



const Contextcart = () => {
    const {items} =useContext(Cart_items)
    const {clear,removeItems, add,minus,totalitems,totalamount}=useContext(Cart_items);

    if(items.length === 0){
        return (
            <>
            <header className="main-header"> 
            <div className="continue-shoping">
                <img src="./Images/pic2.jpg" className="arrow-icon"/>
                <h3> Continue shoping </h3>
            </div>
            <div className="cart-icon">
                <img src="./Images/cart.jpg"  className="cart-img"/>
                <p>   0  </p>
            </div>
            </header>   
        {/* header end=================================== */}
        <section className="container">
            <div className="main-cart-section">
                <h1> shoping cart </h1>
                <p> you have <span>0</span> items in shoping cart</p>
            </div>
        </section>   
        </> 
        );
    }

    return (

        <>
        <header className="main-header">
        <div className="continue-shoping">
            <img src="./Images/pic2.jpg" className="arrow-icon"/>
            <h3> Continue shoping </h3>
        </div>
        <div className="cart-icon">
            <img src="./Images/cart.jpg"  className="cart-img"/>
            <p> {totalitems} </p>
        </div>
        </header>   
    {/* header end=================================== */}
    <section className="container">
        <div className="main-cart-section">
            <h1> shoping cart </h1>
            <p> you have <span> {totalitems}</span> items in shoping cart</p>
   
            <div className="cart-items">
            <Scrollbars>
                <div className="cart-item-container">
                
                    {
                        items.map((ele)=>{
   
        const{id,tittle,description,price,img,amount}=ele;
                            return(
                                <>
                                 <div className="container-info" key={id}>
                                     <div className="product-img">
                                         {img} 
                                     </div>

                                     <div className="product-tittle">
                                         <h3> {tittle} </h3>
                                         <p> {description}</p>
                                     </div>
                                     

                                     <div className="add-minus-quantity">
                                         <i class="fas fa-minus"  onClick={()=> minus(id)}/>
                                         <input  type="text" placeholder={amount} className="ip"/>
                                         <i class="fas fa-plus"  onClick={()=> add(id)}/>
                                     </div>

                                     <div className="price ">
                                         <h3> {price}</h3>
                                     </div>

                                     <div className="remove-items">
                                         <i  onClick={()=>removeItems(id)}className="fas fa-trash-alt remove"></i>
                                    </div>

                                 </div>
                                </>
                            )
                        })
                    }
                    
                </div>
                </Scrollbars>
             </div>
             <div className="total">
             <h3> Card total: <span> {totalamount} </span></h3>
             <button > checkout </button>
             <button className="btn3" onClick={clear} >  Clearall</button>

             </div>
        </div>
    </section>
            
        </>
    )
}

export default Contextcart
