let filterBar = document.querySelector('.filter-bar')
let collectProduct = document.querySelector('.products')
let singleProduct = document.querySelector('.single-prodoct')




function displaySingleProduct(itemId){
    const desiredItem = items.find(item => item.id == itemId);
    console.log(desiredItem);
    filterBar.style.visibility = 'hidden';
    collectProduct.style.visibility = 'hidden';
    singleProduct.innerHTML = `
            <div class="breadcrumbs">
                <p>Home / Clothing / Men's Clothing / <span>Product Name > More By Same Brand</span></p>
            </div>  
            <div class="product-info">
                <div class="product-images">
                    <span class="material-symbols-outlined">style </span>
                    <img src="${desiredItem.image}" alt="">
                    <!-- <img src="/images/offers/2.png" alt="">
                    <img src="/images/offers/1.png" alt="">
                    <img src="/images/offers/1.png" alt=""> -->

                </div>
                <div class="product-detail">
                    <h2 class="brand">${desiredItem.company}</h2>
                    <h1 class="title">${desiredItem.item_name}</h1>
                    <div class="rating"><p>${desiredItem.rating.stars} ⭐ | ${desiredItem.rating.count} Ratings</p></div>
                    <div class="price">
                        <div class="current">Rs.${desiredItem.current_price}</div>
                        <div class="original">MRP Rs.${desiredItem.original_price}</div>
                        <div class="percentage-off">(${desiredItem.discount_percentage}% OFF)</div>
                    </div>
                    <p>inclusive of all taxes</p>
                    <div class="select-size">
                        <div class="size-heading">
                            <h2>SELECT SIZE</h2>
                            <h3>Size Chart ></h3>
                        </div>
                        <div class="size-button">
                            <div>S</div>
                        </div>
                    </div>
                    <div class="action-buttons">
                        <button onclick="addToBag(${items.id})">Add to Cart</button>
                        <button onclick="addToBag(${items.id})">Add to Wishlist</button>
                    </div>
                    <div class="delivery-options">
                        <h2>DELIVERY OPTIONS <span class="material-symbols-outlined">local_shipping </span> </h2>
                        <div class="check-pincode">
                            <input type="number" name="" id="" placeholder="Enter Pincode">
                            <button>Check</button>
                        </div>
                        <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                        <ul>
                            <li>100% Original Products</li>
                            <li>Pay on delivery might be available on ${desiredItem.delivery_date}</li>
                            <li>Easy ${desiredItem.return_period} days returns and exchanges</li>
                            <li>Try & Buy might be available</li>
                        </ul>
                    </div>

                </div>
         
            </div>`
    





}