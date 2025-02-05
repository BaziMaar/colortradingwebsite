const axios = require('axios');
require('dotenv').config();

const API_BASE_URL = process.env.API_BASE_URL;

exports.createOrder = async (req, res) => {
    try {
        const response = await axios.post(`https://allapi.in/order/create`, req.body, {
            headers: {
                'Content-Type': 'application/json',
                // Add additional headers if needed
            },
        })
        res.status(200).send(response.data)
    } catch (error) {
        res.status(error.response?.status || 500).json({
            error: error.message,
            details: error.response?.data || 'Internal Server Error',
        });
    }
};
exports.checkOrder = async (req, res) => {
    try {
        const response = await axios.post(`https://allapi.in/order/status`, req.body, {
            headers: {
                'Content-Type': 'application/json',
                // Add additional headers if needed
            },
        })
        console.log(response)
        res.status(200).send(response.data)
    } catch (error) {
        console.log('Error:', error.message);
        res.status(error.response?.status || 500).json({
            error: error.message,
            details: error.response?.data || 'Internal Server Error',
        });
    }
};
