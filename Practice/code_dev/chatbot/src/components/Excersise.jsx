import Click from "./button/Click";
import Cancel from "./button/Cancel";
import React from "react";
import Cart from "./button/Cart";

function Exercise(props) {

    return <>

        <div className="bg-gray-200 p-3 rounded-lg">

            <h1 className="text-3xl font-bold text-center text-red-800 mt-3">hello this is gk my age is {props.age}</h1>



            <div className="flex justify-center gap-3 mt-3">
                <Click label="Click Me" />
                <Cancel label="Cancel" />
            </div>

           
        </div>

        <div className="mt-4 flex justify-center">
            <Cart
                name="My Cart"
                content="This is my cart content"
            />
        </div>

    </>
}

export default Exercise;