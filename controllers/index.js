function getAllSanPham() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    mothod: "get",
  });
  promise.then(function (res) {
    console.log(res);
    renderSanPham(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}
getAllSanPham();

// Render chi tiết sản phẩm dựa trên id

function getChiTietSanPham() {
  let search = window.location.search;
  let urlParams = new URLSearchParams(search);
  console.log(urlParams);
  let id = urlParams.get("id");
  var promiseChiTiet = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id,
    mothod: "get",
  });
  promiseChiTiet.then(function (res) {
    console.log(res);
    renderChiTietSanPham(res.data.content);
  });
  promiseChiTiet.catch(function (err) {
    console.log(err);
  });
}
getChiTietSanPham();

// Render sản phẩm ra ngoài index
function renderSanPham(arr) {
  let content = "";
  let newArrivals = "";
  for (var i = 0; i < arr.length; i++) {
    let sanPham = arr[i];
    (content += `
          <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                    <div class="product-cart-wrap mb-30">
                      <div class="product-img-action-wrap">
                        <div class="product-img product-img-zoom">
                          <a href="shop-product-full.html?id=${sanPham.id}">
                            <img
                              class="default-img"
                              src="${sanPham.image}"
                              alt=""
                            />
                            <img
                              class="hover-img"
                              src="${sanPham.image}"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="product-action-1">
                          <a
                            aria-label="Quick view"
                            class="action-btn hover-up"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            ><i class="fi-rs-eye"></i
                          ></a>
                          <a
                            aria-label="Add To Wishlist"
                            class="action-btn hover-up"
                            href="#"
                            ><i class="fi-rs-heart"></i
                          ></a>
                          <a
                            aria-label="Compare"
                            class="action-btn hover-up"
                            href="#"
                            ><i class="fi-rs-shuffle"></i
                          ></a>
                        </div>
                        <div
                          class="product-badges product-badges-position product-badges-mrg"
                        >
                          <span class="hot">Hot</span>
                        </div>
                      </div>
                      <div class="product-content-wrap">
                        <div class="product-category">
                          <a href="shop-grid-right.html">Clothing</a>
                        </div>
                        <h2>
                          <a href="shop-product-right.html"
                            >${sanPham.name}</a
                          >
                        </h2>
                        <div class="rating-result" title="90%">
                          <span>
                            <span>90%</span>
                          </span>
                        </div>
                        <div class="product-price">
                          <span>${sanPham.price}</span>
                          <span class="old-price">$245.8</span>
                        </div>
                        <div class="product-action-1 show">
                          <a
                            aria-label="Add To Cart"
                            class="action-btn hover-up"
                            href="shop-cart.html"
                            ><i class="fi-rs-shopping-bag-add"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
          `),
      (newArrivals += `
        <div class="product-cart-wrap small hover-up">
        <div class="product-img-action-wrap">
          <div class="product-img product-img-zoom">
            <a href="shop-product-right.html">
              <img
                class="default-img"
                src="assets/imgs/shop/product-4-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="assets/imgs/shop/product-4-2.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="product-action-1">
            <a
              aria-label="Quick view"
              class="action-btn small hover-up"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
            >
              <i class="fi-rs-eye"></i
            ></a>
            <a
              aria-label="Add To Wishlist"
              class="action-btn small hover-up"
              href="#"
              tabindex="0"
              ><i class="fi-rs-heart"></i
            ></a>
            <a
              aria-label="Compare"
              class="action-btn small hover-up"
              href="#"
              tabindex="0"
              ><i class="fi-rs-shuffle"></i
            ></a>
          </div>
          <div
            class="product-badges product-badges-position product-badges-mrg"
          >
            <span class="new">New</span>
          </div>
        </div>
        <div class="product-content-wrap">
          <h2><a href="shop-product-right.html">Aliquam posuere</a></h2>
          <div class="rating-result" title="90%">
            <span> </span>
          </div>
          <div class="product-price">
            <span>$173.85 </span>
            <span class="old-price">$185.8</span>
          </div>
        </div>
    </div>
        `);
  }
  // document.getElementById("carausel-6-columns-2").innerHTML = newArrivals;
  document.getElementById("tbodySanPham").innerHTML = content;
}

// Render chi tiết sản phẩm dựa trên id
function renderChiTietSanPham(sanPham) {
  var content = "";
  content += `
    <h2 class="title-detail">${sanPham.name}</h2>
    <div class="product-detail-rating">
        <div class="pro-details-brand">
            <span> Brands: <a href="shop-grid-right.html">Bootstrap</a></span>
        </div>
        <div class="product-rate-cover text-end">
            <div class="product-rate d-inline-block">
                <div class="product-rating" style="width:90%">
                </div>
            </div>
            <span class="font-small ml-5 text-muted"> (25 reviews)</span>
        </div>
    </div>
    <div class="clearfix product-price-cover">
        <div class="product-price primary-color float-left">
            <ins><span class="text-brand">$${sanPham.price}</span></ins>
            <ins><span class="old-price font-md ml-15">$200.00</span></ins>
            <span class="save-price  font-md color3 ml-15">25% Off</span>
        </div>
    </div>
    <div class="bt-1 border-color-1 mt-15 mb-15"></div>
    <div class="short-desc mb-30">
    <p>${sanPham.shortDescription}</p></div>
    <div class="product_sort_info font-xs mb-30">
        <ul>
            <li class="mb-10"><i class="fi-rs-crown mr-5"></i> 1 Year AL Jazeera Brand Warranty</li>
            <li class="mb-10"><i class="fi-rs-refresh mr-5"></i> 30 Day Return Policy</li>
            <li><i class="fi-rs-credit-card mr-5"></i> Cash on Delivery available</li>
        </ul>
    </div>
    <div class="attr-detail attr-color mb-15">
        <strong class="mr-10">Color</strong>
        <ul class="list-filter color-filter">
            <li><a href="#" data-color="Red"><span class="product-color-red"></span></a></li>
            <li><a href="#" data-color="Yellow"><span class="product-color-yellow"></span></a></li>
            <li class="active"><a href="#" data-color="White"><span class="product-color-white"></span></a></li>
            <li><a href="#" data-color="Orange"><span class="product-color-orange"></span></a></li>
            <li><a href="#" data-color="Cyan"><span class="product-color-cyan"></span></a></li>
            <li><a href="#" data-color="Green"><span class="product-color-green"></span></a></li>
            <li><a href="#" data-color="Purple"><span class="product-color-purple"></span></a></li>
        </ul>
    </div>
    <div class="attr-detail attr-size" >
        <strong class="mr-10">Size</strong>
        <ul class="list-filter size-filter font-small" id="sizeSanPham">
        </ul>
    </div>
    <div class="bt-1 border-color-1 mt-30 mb-30"></div>
    <div class="detail-extralink">
        <div class="detail-qty border radius">
            <a href="#" class="qty-down"><i class="fi-rs-angle-small-down"></i></a>
            <span class="qty-val">1</span>
            <a href="#" class="qty-up"><i class="fi-rs-angle-small-up"></i></a>
        </div>
        <div class="product-extra-link2">
            <button type="submit" class="button button-add-to-cart">Add to cart</button>
            <a aria-label="Add To Wishlist" class="action-btn hover-up" href="#"><i class="fi-rs-heart"></i></a>
            <a aria-label="Compare" class="action-btn hover-up" href="#"><i class="fi-rs-shuffle"></i></a>
        </div>
    </div>
    <ul class="product-meta font-xs color-grey mt-50">
        <li class="mb-5">SKU: <a href="#">FWM15VKT</a></li>
        <li class="mb-5">Tags: <a href="#" rel="tag">Cloth</a>, <a href="#" rel="tag">Women</a>, <a href="#" rel="tag">Dress</a> </li>
        <li>Availability:<span class="in-stock text-success ml-5">${sanPham.quantity} items in stock</span></li>
    </ul>
          `;
  var hinhAnh = "";
  hinhAnh += `
              <img
                src="${sanPham.image}"
                alt="product image"
              />
                  `;
  var moTa = "";
  moTa += `
                           <p>${sanPham.description}</p>
             `;

  var tenSanPham = "";
  tenSanPham += `          
  <a href="index.html" rel="nofollow">Home</a>
    <span></span> Fashion <span></span> ${sanPham.name}
             `;

  document.getElementById("productNameTitel").innerHTML = tenSanPham;
  document.getElementById("chiTietSanPham").innerHTML = content;
  document.getElementById("tbodyHinhAnh").innerHTML = hinhAnh;
  document.getElementById("Description").innerHTML = moTa;

  renderRelatedProducts(sanPham.relatedProducts);
  sizeSanPham(sanPham.size);
}

function renderRelatedProducts(arrRelatedProtc) {
  var related = "";
  for (i = 0; i < arrRelatedProtc.length; i++) {
    var relatedSanPham = arrRelatedProtc[i];
    related += `
      <div class="col-lg-3 col-md-4 col-12 col-sm-6">
      <div class="product-cart-wrap small hover-up">
          <div class="product-img-action-wrap">
              <div class="product-img product-img-zoom">
                  <a href="shop-product-full.html?id=${relatedSanPham.id}" tabindex="0">
                      <img class="default-img" src="${relatedSanPham.image}" alt="">
                      <img class="hover-img" src="${relatedSanPham.image}" alt="">
                  </a>
              </div>
              <div class="product-action-1">
                  <a aria-label="Quick view" class="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal
  "><i class="fi-rs-search"></i></a>
                  <a aria-label="Add To Wishlist" class="action-btn small hover-up" href="#" tabindex="0"><i class="fi-rs-heart"></i></a>
                  <a aria-label="Compare" class="action-btn small hover-up" href="#" tabindex="0"><i class="fi-rs-shuffle"></i></a>
              </div>
              <div class="product-badges product-badges-position product-badges-mrg">
                  <span class="hot">Hot</span>
              </div>
          </div>
          <div class="product-content-wrap">
              <h2><a href="shop-product-right.html" tabindex="0">${relatedSanPham.name}</a></h2>
              <div class="rating-result" title="90%">
                  <span>
                  </span>
              </div>
              <div class="product-price">
                  <span>${relatedSanPham.price}</span>
                  <span class="old-price">${relatedSanPham.price}</span>
              </div>
          </div>
      </div>
  </div>
      `;
  }
  document.getElementById("relatedProducts").innerHTML = related;
}

// QuickView sản phẩm đang fix
// function renderQuickeView(arrQuickView) {
//   var quickViewProduct = "";
//   for (i = 0; i < arrQuickView.length; i++) {
//     var relatedSanPham = arrQuickView[i];
//     quickViewProduct += `
//   <div class="col-md-6 col-sm-12 col-xs-12">
//   <div class="detail-gallery">
//     <span class="zoom-icon"><i class="fi-rs-search"></i></span>
//     <!-- MAIN SLIDES -->
//     <div class="product-image-slider">
//       <figure class="border-radius-10">
//         <img
//           src="assets/imgs/shop/product-16-2.jpg"
//           alt="product image"
//         />
//       </figure>
//       <figure class="border-radius-10">
//         <img
//           src="assets/imgs/shop/product-16-1.jpg"
//           alt="product image"
//         />
//       </figure>
//       <figure class="border-radius-10">
//         <img
//           src="assets/imgs/shop/product-16-3.jpg"
//           alt="product image"
//         />
//       </figure>
//       <figure class="border-radius-10">
//         <img
//           src="assets/imgs/shop/product-16-4.jpg"
//           alt="product image"
//         />
//       </figure>
//       <figure class="border-radius-10">
//         <img
//           src="assets/imgs/shop/product-16-5.jpg"
//           alt="product image"
//         />
//       </figure>
//       <figure class="border-radius-10">
//         <img
//           src="assets/imgs/shop/product-16-6.jpg"
//           alt="product image"
//         />
//       </figure>
//       <figure class="border-radius-10">
//         <img
//           src="assets/imgs/shop/product-16-7.jpg"
//           alt="product image"
//         />
//       </figure>
//     </div>
//     <!-- THUMBNAILS -->
//     <div class="slider-nav-thumbnails pl-15 pr-15">
//       <div>
//         <img
//           src="assets/imgs/shop/thumbnail-3.jpg"
//           alt="product image"
//         />
//       </div>
//       <div>
//         <img
//           src="assets/imgs/shop/thumbnail-4.jpg"
//           alt="product image"
//         />
//       </div>
//       <div>
//         <img
//           src="assets/imgs/shop/thumbnail-5.jpg"
//           alt="product image"
//         />
//       </div>
//       <div>
//         <img
//           src="assets/imgs/shop/thumbnail-6.jpg"
//           alt="product image"
//         />
//       </div>
//       <div>
//         <img
//           src="assets/imgs/shop/thumbnail-7.jpg"
//           alt="product image"
//         />
//       </div>
//       <div>
//         <img
//           src="assets/imgs/shop/thumbnail-8.jpg"
//           alt="product image"
//         />
//       </div>
//       <div>
//         <img
//           src="assets/imgs/shop/thumbnail-9.jpg"
//           alt="product image"
//         />
//       </div>
//     </div>
//   </div>
//   <!-- End Gallery -->
//   <div class="social-icons single-share">
//     <ul class="text-grey-5 d-inline-block">
//       <li><strong class="mr-10">Share this:</strong></li>
//       <li class="social-facebook">
//         <a href="#"
//           ><img
//             src="assets/imgs/theme/icons/icon-facebook.svg"
//             alt=""
//         /></a>
//       </li>
//       <li class="social-twitter">
//         <a href="#"
//           ><img
//             src="assets/imgs/theme/icons/icon-twitter.svg"
//             alt=""
//         /></a>
//       </li>
//       <li class="social-instagram">
//         <a href="#"
//           ><img
//             src="assets/imgs/theme/icons/icon-instagram.svg"
//             alt=""
//         /></a>
//       </li>
//       <li class="social-linkedin">
//         <a href="#"
//           ><img
//             src="assets/imgs/theme/icons/icon-pinterest.svg"
//             alt=""
//         /></a>
//       </li>
//     </ul>
//   </div>
// </div>
// <div class="col-md-6 col-sm-12 col-xs-12">
//   <div class="detail-info">
//   </div>
//   <!-- Detail Info -->
// </div>`;
//   }
//   document.getElementById("quickView").innerHTML = quickViewProduct;
// }

function sizeSanPham(arrSize) {
  var sizeList = "";
  for (i = 0; i < arrSize.length; i++) {
    var sizeListSanPham = arrSize[i];
    sizeList += `
                <li><a href="#">${sizeListSanPham}</a></li>
                `;
  }
  document.getElementById("sizeSanPham").innerHTML = sizeList;

  console.log(sizeList);
}

function addTaiKhoan() {
  event.preventDefault();

  var taiKhoan = new TaiKhoan();
  taiKhoan.email = document.getElementById("emailInput").value;
  taiKhoan.password = document.getElementById("passwordInput").value;
  taiKhoan.name = document.getElementById("nameInput").value;
  taiKhoan.gender = document.getElementById("genderInput").value;
  taiKhoan.phone = document.getElementById("phoneInput").value;

  console.log(taiKhoan);

  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: taiKhoan,
  });
  promise.then(function (res) {
    console.log(res);
    alert("Bạn đã đăng ký thành công");
  });
  promise.catch(function (err) {
    console.log(err);
    
  });
}

function dangNhap() {
  event.preventDefault();

  var taiKhoan = new TaiKhoan();

  taiKhoan.email = document.getElementById("emailLoginInput").value;
  taiKhoan.password = document.getElementById("passwordLoginInput").value;

  console.log(taiKhoan);

  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signin",
    method: "POST",
    data: taiKhoan,
  });
  promise.then(function (res) {
    console.log(res);
    alert("Đăng nhập thành công");
  });
  promise.catch(function (err) {
    console.log(err);
    alert("Sai tài khoản hoặc mật khẩu, vui lòng kiểm tra lại");
  });
}
