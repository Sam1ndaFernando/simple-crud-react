import express from "express";
import {Customer} from '../model/Customer';
import {CustomerList} from "../database/data-store";



const router = express.Router();

router.get("/view", (req, res) => {
    res.send("Customer View");
    res.status(201).send(CustomerList)
});

router.post("/post", (req, res) => {
    const {_id, _name, _address}=req.body;
    CustomerList.push(new Customer(_id, _name))
    res.status(201).send("customer Saved")
});

router.delete("/delete", async (req, res) => {
    const { _id } = req.body;
    const index = CustomerList.findIndex(customer => customer._id === _id);
    if (index !== -1) {
        CustomerList.splice(index, 1);
    }
    res.status(200).send("Customer deleted");
});


export default router;