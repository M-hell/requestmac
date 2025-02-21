const sampleModel = require("../schema");

const checkmac = async (request, response) => {
    try {
        const { address } = request.params;  // Extract address from URL params
        const sample = await sampleModel.findOne({ address });

        if (sample) {
            response.status(200).json({ message: "yes" });
        } else {
            response.status(404).json({ message: "no" });
        }    
    } catch (error) {
        response.status(500).json({ message: error.message });
    }   
};

module.exports = checkmac;
