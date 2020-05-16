import React from "react";


const Order = (props) => {
    return(
        <div>
            <h2>Order Confirmation</h2>
            <h4>Name: {props.order.fName} {props.order.lName}</h4>
            <h4>{props.order.quantity} {props.order.size} with {props.order.sauce}.</h4>
            <div>
                <h4>Toppings:</h4>
                {props.order.pepperoni ? <p>Pepperoni</p> : null }
                {props.order.sausage ? <p>Sausage</p> : null }
                {props.order.olive ? <p>Olive</p> : null }
                {props.order.greenpepper ? <p>Green Pepper</p> : null }
                {props.order.pineapple ? <p>Pineapple</p> : null }
                {props.order.ham ? <p>Ham</p>: null }
                {props.order.mushroom ? <p>Mushroom</p>  : null }
            </div>
         
            

            <h4>Total</h4>

        </div>
    );

};

export default Order;