import React from "react";
import Colors from "./Colors";
import DetailsThumble from "./DetailsThumble";
import './productDetails.css';

 class ProductDetails extends React.Component{

    state ={
        products:[
            {
                "_id":"1",
                "title":"nike shoes",
                "src":[
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXMlMjBuaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    "https://images.unsplash.com/photo-1584590069631-1c180f90a54c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1634316427425-722247ebe036?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"



                ],
                "description":"UI/UX designing, tml css tutorials",
                "content":"welcome to our chanel dev at . here you can learn web desiging , ui /ux desiging htmla css eatc",
                "price":"23",
                "colors":["red","black","crimson","teal" ],
                "count":1

            }
        ],
        index:0
    };

    myRef = React.createRef();

    handleTab = index =>{
        this.setState({index: index})
// click er por active dekanor jonno nicer coad 
        const images =this.myRef.current.children;
        for(let i=0; i<images.length; i++){
            images[i].className =images[i].className.replace("active","");

        }
        images[index].className = "active";
    };

    componentDidMount(){
        const {index} = this.state;
        this.myRef.current.children[index].className ="active";
    }

    render(){
        const {products, index} = this.state;
        return(
            <div className="appp">
                {
                    products.map(item =>(
                        <div className="details" key={item._id}>
                            <div className="big-img">
                                <img src={item.src[index]} alt="" />
                            </div>

                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>

                                <Colors colors={item.colors}/>
                               
                                <p>{item.description}</p>
                                <p>{item.content}</p>

                              <DetailsThumble images={item.src} tab={this.handleTab} myRef={this.myRef}/> 

                                <button className="cart">Add to cart</button>

                            </div>


                        </div>
                    ))
                }
            </div>
        );
    };
 }
  export default ProductDetails;