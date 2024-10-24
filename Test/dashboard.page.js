class DashboardPage {
    constructor(page) {
        this.page = page;
        this.inventoryList = '.inventory_list';
    }

    async isDashboardVisible() {
        return this.page.isVisible(this.inventoryList);
    }
}

module.exports = DashboardPage;
