const orderService = require("../services/order.service");

async function createOrder(req, res) {
    try {
        let order = orderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        console.log("Error creating an order", error);
        res.status(500).json({
            message : 'Order creation failed'
        })
    }
    
}

async function getOrderByOrderId(req, res) {
    try {
        let order = await orderService.findOrder(req.params.id);
        if(!order) {
            res.status(404).json({"message": "Order not found"});
        }
        console.log("Order Found");
        res.status(201).json(order);
    } catch(error) {
        console.log("Error finding the order with orderId : ", req.params.id, error.message);
        res.status(500).json({
            "message" : "Failed to get the order"
        })
    }
    
}

module.exports = {
    createOrder,
    getOrderByOrderId
}