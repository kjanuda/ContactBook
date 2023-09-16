const express = require('express');
const PhoneBook = require('../mongodb/model/phonebook');

const router = express.Router();

router.get('/:id', async (req, res) => {
try{
    const { id } = req.params;
    const { name, phone } = req.body;

    const phoneNumber = await PhoneBook.findById(id);

     if(!phoneNumber) {
       return res.status(400).json({
       status : 'Failed',
       message : 'Phone Book Entry Not Found'
       });
        }
    res.status(200).json({
        status : 'Success',
        data: {
            phoneNumber,
        },
    });
}catch (err) {
    res.status(500).json({
        status: "Failed",
        data: {
            error,
        },
    });
   }
});

module.exports = router;
