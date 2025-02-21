const sampleModel = require("../schema");

const addmac = async (request, response) => {
    try {
        const { address } = request.body;
        const newSample = new sampleModel({ address });
        await newSample.save();
        response.status(201).json({ message: "MAC address added successfully" });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

module.exports = addmac;