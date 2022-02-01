import { useRef, useState } from "react";
import "./Coupon.css"


const Coupon = ({openCoupon ,toggleCoupon }) => {
    // select coupon input
    const couponInput = useRef()

    // get the value of the input
    const [couponInputValue , setCouponInputValue] = useState('')

    //set error for input
    const [error , setError] = useState(false)

    // add activate class to coupon input (for showing it)
    const [active , setActive] = useState('inactive')

    // check the value of the input and add the class active to the coupon input
    const couponValidator = (e) => {
        e.preventDefault()
        couponInputValue === 'benyamin' ? setError(false) : setError(true)
        setActive('active')
    }

    return ( 
        <>
            <button onClick={toggleCoupon} className={`coupon-btn `}>Enter a coupon code</button>
            <div className={ `coupon-form ${openCoupon ? 'coupon-hide' : 'coupon-show'}`}>
                <input 
                    ref={couponInput} 
                    onChange={(e)=>setCouponInputValue(e.target.value)} 
                    value={couponInputValue} 
                    type="text" 
                    placeholder="e.g., CouponCode"
                />
                
                <button onClick={couponValidator} className="coupon-icon"> <i className="fas fa-greater-than  "></i></button>
            </div>
                {
                    error 
                    ? <p className={`coupon-code-error ${active}`}>your code is invalid</p> 
                    : <p className={`coupon-code-success ${active}`}>your code is valid</p>
                }
                
        </>
     );
}
 
export default Coupon;