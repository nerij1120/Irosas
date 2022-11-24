import React, {Component} from 'react'

class Home extends React.Component {
    render() {
        return (
            <div>
                <section id="introducer" > {/* <!------Introducer --> */}
            <div id="slogan">
                <p id="p1">Thưởng thức hương vị</p>
                <p id="p2">nguyên chất</p>
                <p id="p3">"Tràn đầy năng lượng mỗi ngày cùng thức uống tuyệt vời"</p>
            </div>     
            <button type="button" class="btn btn-default get"> Đặt ngay <i class="fas fa-long-arrow-right" id="arrowGet"></i>
            </button>
        </section> {/* <!-----End Introducer--> */}

        <section id="part" > {/* <!-------Body--> */}
            <div class="container-fluid"> {/* <!----Body Part--> */}
                <div class="headline-feature-product">  {/* <!-----headline-feature-product--> */}
                    <p id="p1">Bán chạy nhất</p>
                    <button type="button" class="btn btn-default view">Xem thực đơn
                        <i class="fas fa-long-arrow-right" id="arrowView"></i>
                    </button> {/* <!-----End headline-feature-product--> */}
                </div>
                <div class="row" id="row1"> {/* <!------Feature Product--> */}
                    <div class="col-4" id="col-feature-1">
                        <img class="img-bestSeller" src="assets/image/blackcoffee.png" alt="blackcoffee" />
                        <p class="product-name">Black Coffee</p>
                        <div class="product-choice">
                            <p class="product-price">15.000đ</p>
                            <button type="button" class="btn btn-default add">Thêm vào giỏ
                                <i class="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-4" id="col-feature-2">
                        <img class="img-bestSeller" src="assets/image/thaitea.png" alt="thaitea" />
                        <p class="product-name">Thai Tea</p>
                        <div class="product-choice">
                            <p class="product-price">25.000đ</p>
                            <button type="button" class="btn btn-default add">Thêm vào giỏ
                                <i class="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-4" id="col-feature-3">
                        <img class="img-bestSeller" src="assets/image/strawberry.png" alt="strawberry" />
                        <p class="product-name">Strawberry Cocktail</p>
                        <div class="product-choice">
                            <p class="product-price">39.000đ</p>
                            <button type="button" class="btn btn-default add">Thêm vào giỏ
                                <i class="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
                            </button>
                        </div>
                    </div> 
                </div>
                <div class="row" id="row2">
                    <div class="col-4" id="col-feature-1">
                        <img class="img-bestSeller" src="assets/image/americano.png" alt="americano" />
                        <p class="product-name">Americano</p>
                        <div class="product-choice">
                            <p class="product-price">20.000đ</p>
                            <button type="button" class="btn btn-default add">Thêm vào giỏ
                                <i class="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-4" id="col-feature-2">
                        <img class="img-bestSeller" src="assets/image/capuchino.png" alt="capuchino" />
                        <p class="product-name">Capuchino</p>
                        <div class="product-choice">
                            <p class="product-price">22.000đ</p>
                            <button type="button" class="btn btn-default add">Thêm vào giỏ
                                <i class="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-4" id="col-feature-3">
                        <img class="img-bestSeller" src="assets/image/latte.png" alt="latte" />
                        <p class="product-name">Latte</p>
                        <div class="product-choice">
                            <p class="product-price">19.000đ</p>
                            <button type="button" class="btn btn-default add">Thêm vào giỏ
                                <i class="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
                            </button>
                        </div>
                    </div>
                </div> {/* <!-------End Feature--> */}

                <div class="headline-new-product">  {/* <!-----headline-new-product--> */}
                    <p id="p1">Thức uống mới</p>
                                                    {/* <!-----End headline-new-product--> */}
                </div>
                <div class="row" id="row3"> {/* <!------New Product--> */}
                    <div class="col-4" id="col-feature-1">
                        <img class="img-bestSeller" src="assets/image/icecoffee.png" alt="blackcoffee" />
                        <p class="product-name">Iced Milk Coffee</p>
                        <div class="product-choice">
                            <p class="product-price">15.000đ</p>
                            <button type="button" class="btn btn-default add">Thêm vào giỏ
                                <i class="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-4" id="col-feature-2">
                        <img class="img-bestSeller" src="assets/image/gingerjuice.png" alt="thaitea" />
                        <p class="product-name">Hot ginger juice</p>
                        <div class="product-choice">
                            <p class="product-price">29.000đ</p>
                            <button type="button" class="btn btn-default add">Thêm vào giỏ
                                <i class="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-4" id="col-feature-3">
                        <img class="img-bestSeller" src="assets/image/chocolate.png" alt="strawberry" />
                        <p class="product-name">Hot chocolate</p>
                        <div class="product-choice">
                            <p class="product-price">27.000đ</p>
                            <button type="button" class="btn btn-default add">Thêm vào giỏ
                                <i class="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
                            </button>
                        </div>
                    </div> 
                </div>
                <div class="row" id="row4">
                    <div class="col-4" id="col-feature-1">
                        <img class="img-bestSeller" src="assets/image/orangejuice.png" alt="americano" />
                        <p class="product-name">Honey Orange Juice</p>
                        <div class="product-choice">
                            <p class="product-price">35.000đ</p>
                            <button type="button" class="btn btn-default add">Thêm vào giỏ
                                <i class="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-4" id="col-feature-2">
                        <img class="img-bestSeller" src="assets/image/freshtea.png" alt="capuchino" />
                        <p class="product-name">Hot Fresh Tea</p>
                        <div class="product-choice">
                            <p class="product-price">17.000đ</p>
                            <button type="button" class="btn btn-default add">Thêm vào giỏ
                                <i class="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-4" id="col-feature-3">
                        <img class="img-bestSeller" src="assets/image/matcha.png" alt="latte" />
                        <p class="product-name">Matcha Ice Blended</p>
                        <div class="product-choice">
                            <p class="product-price">39.000đ</p>
                            <button type="button" class="btn btn-default add">Thêm vào giỏ
                                <i class="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
                            </button>
                        </div>
                    </div>
                </div> {/* <!-------End New Product--> */}
                <div class="container-fluid" id="container-rcmd-cate">  {/* <!---Recommended Categorry--> */}
                    <div class="headline-feature-product">  {/* <!-----headline-feature-product--> */}
                        <p id="p2">Danh mục thức uống</p>
                        <button type="button" class="btn btn-default view-cate">Xem tất cả danh mục
                            <i class="fas fa-long-arrow-right" id="arrowView"></i>
                        </button> {/* <!-----End headline-feature-product--> */}
                    </div>
                    <hr class="solid" />
                    <div class="row" id="row5">
                        <div class="col-3" id="col-3-1">   
                            <img class="img-rcmCate" src="assets/image/category/coffee.png" alt="Coffee" />
                            <div id="shape"></div>
                            <p>Coffee</p>
                        </div>
                        <div class="col-3" id="col-3-2">
                            <img class="img-rcmCate" src="assets/image/category/tea.png" alt="Tea" />
                            <div id="shape"></div>
                            <p>Tea</p>
                        </div>
                        <div class="col-3" id="col-3-3">
                            <img class="img-rcmCate" src="assets/image/category/fruitjuice.png" alt="fruit juice" />
                            <div id="shape"></div>
                            <p>Fruit Juice</p>
                        </div>
                        <div class="col-3" id="col-3-4">
                            <img class="img-rcmCate" src="assets/image/category/cocktail.png" alt="cocktail" />
                            <div id="shape"></div>
                            <p>Cocktail</p>
                        </div>
                    </div>
                </div>  {/* <!---------End Recommended Category--> */}
            </div> {/* <!-----End Body Part--> */}
        </section> {/* <!------End Body--> */}
        
        <section id="footer">   {/* <!------Footer--> */}
            <p id="copyright">Copyright 2022</p>
            <hr class="solid" />
            <ul id="footer-info">
                <li id="info-name">Irosas</li>
                <li id="info-email">
                    <i id="envelope" class="fa-regular fa-envelope"></i>
                    <p>admin.irosas@gmail.com</p>
                </li>
                <li id="info-phone">
                    <i class="fa-solid fa-phone"></i>
                    <p>(917) 112-245</p>
                </li>
                <li id="info-address">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>KTX Khu A - ĐHQG HCM</p>
                </li>

            </ul>
        </section>  {/* <!-------End Footer--> */}
            </div>
        )
    }
}
export default Home