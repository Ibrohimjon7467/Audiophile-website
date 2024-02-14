import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useLocalStorage from "../../hooks/useLocalStorage";
import CartValided from "../../components/cartValided/CartValided";

function Form({ cartTotalPrice, productCart, setQuantityCartItem, setProductCart, setCartTotalPrice }) {

    const { register, handleSubmit, watch,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    const [realPriceOfTaxe, setRealPriceOfTaxe] = useLocalStorage(0);
    const [grandTotalPrice, setGrandTotalPrice] = useLocalStorage(0);

    const onSubmit = (data) => { };

    const shippingFees = 20;
    const feesPercent = 0.05;
    const paymentSelectionTest = watch("paymentSelection");

    useEffect(() => {
        setRealPriceOfTaxe(Math.round(cartTotalPrice * feesPercent * 100) / 100);
        setGrandTotalPrice(
            Math.round((realPriceOfTaxe + cartTotalPrice + shippingFees) * 100) / 100
        );
    });

    return (
        <>
            {isSubmitSuccessful && (
                <CartValided productCart={productCart}
                    grandTotalPrice={grandTotalPrice}
                    setQuantityCartItem={setQuantityCartItem}
                    setProductCart={setProductCart}
                    setCartTotalPrice={setCartTotalPrice}
                />
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container-form-and-summary">
                    <section className="form-section">
                        <div className="billing">
                            <legend>BILLING DETAILS</legend>
                            <div className="billing-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name"
                                        placeholder="Alexel Vard"
                                        {...register("name", { required: true, minLength: 3 })}
                                    />
                                    {errors.name && errors.name.type === "required" && (
                                        <span className="message-error-form">This is required</span>
                                    )}
                                    {errors.name && errors.name.type === "minLength" && (
                                        <span className="message-error-form">Length too weak</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name"> Email Address</label>
                                    <input placeholder="alexel@gmail.com"
                                        type="email" name="email"
                                        {...register("email", {
                                            required: "You have to put an e-mail valid.",
                                        })}
                                    />
                                    {errors.email && (
                                        <span className="message-error-form">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Phone Number</label>
                                    <input placeholder="+1 202-555-0136" type="number" name="phone"
                                        {...register("phone", {
                                            required: "You have to put a phone number valid.",
                                        })}
                                    />
                                    {errors.phone && (
                                        <span className="message-error-form">
                                            {errors.phone.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="shipping">
                            <legend>SHIPPING</legend>
                            <div className="shipping-form">
                                <div className="form-group address-form">
                                    <label htmlFor="address">Address</label>
                                    <input placeholder="1137 Williams Avenue"
                                        type="text" name="address" id="address"
                                        {...register("address", {
                                            required: "You have to put an address valid.",
                                        })}
                                    />
                                    {errors.address && (
                                        <span className="message-error-form">
                                            {errors.address.message}
                                        </span>
                                    )}
                                </div>
                                <div className="form-group zip-form">
                                    <label htmlFor="zipCode"> ZIP Code</label>
                                    <input placeholder="10001"
                                        type="number" name="zip-code" id="zipCode"
                                        {...register("zipCode", {
                                            required: true,
                                            minLength: 5,
                                            maxLength: 5,
                                        })}
                                    />
                                    {errors.zipCode && errors.zipCode.type === "required" && (
                                        <span className="message-error-form">
                                            5 numbers are required
                                        </span>
                                    )}
                                    {errors.zipCode && errors.zipCode.type === "minLength" && (
                                        <span className="message-error-form">
                                            5 numbers are required
                                        </span>
                                    )}
                                    {errors.zipCode && errors.zipCode.type === "maxLength" && (
                                        <span className="message-error-form">
                                            5 numbers are required
                                        </span>
                                    )}
                                </div>
                                <div className="form-group city-form">
                                    <label htmlFor="city">City</label>
                                    <input placeholder="New York"
                                        type="text" name="city" id="city"
                                        {...register("city", { required: "The city is required." })}
                                    />
                                    {errors.city && (
                                        <span className="message-error-form">
                                            {errors.city.message}
                                        </span>
                                    )}
                                </div>
                                <div className="form-group country-form">
                                    <label htmlFor="country">Country</label>
                                    <input placeholder="United States"
                                        type="text" name="country" id="country"
                                        {...register("country", {
                                            required: "The country is required.",
                                        })}
                                    />
                                    {errors.country && (
                                        <span className="message-error-form">
                                            {errors.country.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="payment">
                            <legend>PAYMENT DETAILS</legend>
                            <div className="payment-form">
                                <div className="part-selection-method-payment">
                                    <span>Payment Method</span>
                                    <div className="radios-payment-container">
                                        <div className="box-radio">
                                            <input type="radio" id="e-money" value="e-money"
                                                {...register("paymentSelection", {
                                                    required: "You have to select a payment method",
                                                })}
                                            />
                                            <label htmlFor="e-money">E-Money</label>
                                        </div>
                                        <div className="box-radio">
                                            <input type="radio" id="cash" value="cash"
                                                {...register("paymentSelection")}
                                            />
                                            <label htmlFor="cash">Cash on delivery</label>
                                        </div>
                                        {errors.paymentSelection && (
                                            <span className="message-error-form">
                                                {errors.paymentSelection.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="infos-supp-for-payment">
                                    {paymentSelectionTest === "e-money" && (
                                        <div className="e-money-selected">
                                            <div className="container-emoney">
                                                <div className="form-group">
                                                    <label htmlFor="e-money-number">E-Money Number</label>
                                                    <input placeholder="238521993" type="number"
                                                        name="e-money-number" id="eMoneyNumber"
                                                        {...register("eMoneyNumber", {
                                                            required: "This is required",
                                                        })}
                                                    />
                                                </div>
                                                {errors.eMoneyNumber && (
                                                    <span className="message-error-form">
                                                        {errors.eMoneyNumber.message}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="container-emoney">
                                                <div className="form-group">
                                                    <label htmlFor="e-money-pin">E-money PIN</label>
                                                    <input placeholder="6891" type="number"
                                                        name="e-money-pin" id="eMoneyPin"
                                                        {...register("eMoneyPin", {
                                                            required: "This is required",
                                                        })}
                                                    />
                                                </div>
                                                {errors.eMoneyPin && (
                                                    <span className="message-error-form">
                                                        {errors.eMoneyPin.message}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {paymentSelectionTest === "cash" && (
                                        <div className="cash-delivery-selected">
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z" fill="#D87D4A" />
                                            </svg>
                                            <p>
                                                The ‘Cash on Delivery’ option enables you to pay in cash
                                                when our delivery courier arrives at your residence. Just
                                                make sure your address is correct so that your order will
                                                not be cancelled.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="summary">
                        <h3>SUMMARY</h3>
                        <div className="container-items-cart">
                            {productCart.map((item) => {
                                return (
                                    <div className="infos-item" key={item.id}>
                                        <div className="img-name-price">
                                            <img src={item.cartImage} alt="" />
                                            <div className="name-price">
                                                <h5>{item.shortName}</h5>
                                                <span>${item.price}</span>
                                            </div>
                                        </div>
                                        <span className="quantity">x{item.quantity}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="all-totals">
                            <div className="detail-price">
                                <div className="box-price total">
                                    <span className="recapitulatif-name">TOTAL</span>
                                    <span className="recapitulatif-price">${cartTotalPrice}</span>
                                </div>
                                <div className="box-price shipping">
                                    <span className="recapitulatif-name">SHIPPING</span>
                                    <span className="recapitulatif-price">${shippingFees}</span>
                                </div>
                                <div className="box-price vat">
                                    <span className="recapitulatif-name">VAT (INCLUDED)</span>
                                    <span className="recapitulatif-price">${realPriceOfTaxe}</span>
                                </div>
                            </div>
                            <div className="box-price grand-total">
                                <span className="recapitulatif-name">GRAND</span>
                                <span className="recapitulatif-price">${grandTotalPrice}</span>
                            </div>
                        </div>
                        <input className="btn-style1" value={"CONTINUE & PAY"} type="submit" />
                    </section>
                </div>
            </form>
        </>
    );
}

export default Form