const orderRepository = require("../repositories/order.repository");

async function createOrder(orderData) {
    let order = await orderRepository.createOrder(orderData);
    return order;
}

async function findOrder(orderId) {
    let order = await orderRepository.findOrderByOrderId(orderId);
    return order;
}

module.exports = {
    createOrder,
    findOrder
}