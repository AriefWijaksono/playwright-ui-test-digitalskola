class CartPage {
    constructor(page) {
        this.page = page;
        this.cartIcon = '.shopping_cart_link';
        this.cartItem = '.cart_item';
    }

    async addItemToCart(itemName) {
        await this.page.click(`text=${itemName}`);
        await this.page.click('text=Add to cart');
    }

    async isItemInCart(itemName) {
        await this.page.click(this.cartIcon);
        return this.page.isVisible(`text=${itemName}`);
    }
}

module.exports = CartPage;
