import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faPhone, faEnvelope, faGlobe, faGift, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
// import images from '../../images/Arif.jpg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import './Product.css'



const Product = (props) => {
    // console.log(props);
    // const productName = props.product.name
    // const productImg = props.product.img
    const { name, img, title, phone, email, site, dob, address, hobby1, hobby2, hobby3, skill1, skill2, skill3, income } = props.product;
    // const { img, name, seller, price, stock } = props.product

    

    return (
        <div className="product">
            
            <div className="container">
                <div className="row">
                    <div className="twPc-div">
                        <p className="twPc-bg twPc-block"></p>

                        <div>
                            <div className="twPc-button">
                                {/* follow button */}
                                <button id="btnClick" className="btn btn-success" onClick={() => props.handleAddProduct(props.product)}>
                                    <span className="fa fa-plus-circle"></span>
                                    <FontAwesomeIcon icon={faPlusCircle} /> Follow 
                                </button>
                                
                            </div>

                            <p title="Show Name hover" href="#" className="twPc-avatarLink">
                                <img alt="Show Name Alternative"
                                    src = {img}
                                    className="twPc-avatarImg" />
                            </p>

                            <div className="twPc-divUser">
                                <div className="twPc-divName">
                                    <a>{name}</a>
                                </div>
                                <span>
                                    <a>@<span>{title}</span></a>
                                </span>
                            </div>

                            <div className="twPc-divStats">
                                <ul className="twPc-Arrange">
                                    <li className="twPc-ArrangeSizeFit">
                                        <p className="details">
                                            <p className="twPc-StatLabel twPc-block">Personal Details</p>
                                            <span className="twPc-StatValue"><FontAwesomeIcon icon={faPhone} /> {phone}</span>
                                            <span className="twPc-StatValue"><FontAwesomeIcon icon={faEnvelope} /> {email}</span>
                                            <span className="twPc-StatValue"><FontAwesomeIcon icon={faGlobe} /> {site}</span>
                                            <span className="twPc-StatValue"><FontAwesomeIcon icon={faGift} /> {dob}</span>
                                            <span className="twPc-StatValue"><FontAwesomeIcon icon={faLocationArrow} /> {address}</span>
                                        </p>
                                    </li>
                                    <li className="twPc-ArrangeSizeFit">
                                        <p title="hobbies">
                                            <p className="twPc-StatLabel twPc-block">Hobbies</p>
                                            <span className="twPc-StatValue">{hobby1}</span>
                                            <span className="twPc-StatValue">{hobby2}</span>
                                            <span className="twPc-StatValue">{hobby3}</span>
                                        </p>
                                    </li>
                                    <li className="twPc-ArrangeSizeFit">
                                        <p title="skills">
                                            <p className="twPc-StatLabel twPc-block">Skills</p>
                                            <span className="twPc-StatValue">{skill1}</span>
                                            <span className="twPc-StatValue">{skill2}</span>
                                            <span className="twPc-StatValue">{skill3}</span>
                                        </p>
                                    </li>
                                </ul>
                                {/* <hr />
                                <div className="bottom card-footer">
                                    <a className="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a className="btn btn-danger btn-sm" rel="publisher" href="https://plus.google.com/#">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                    <a className="btn btn-primary btn-sm" rel="publisher" href="https://plus.google.com/#" >
                                        <i className="fa fa-facebook" ></i>
                                    </a>
                                </div> */}
                            </div>
                            <p className="twPc-StatLabel twPc-block cus-css">
                                Yearly Income: ${income}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
    );
};


export default Product;