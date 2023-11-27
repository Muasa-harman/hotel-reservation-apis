import express  from "express";
const router = express.Router();
import * as hotelsController from '../controllers/hotelsController.js';
// const hotelsController = require("../controllers/hotelsController.js")

router.get('/', hotelsController.getAllHotels)
router.get('/:id', hotelsController.getHotel)
router.get('/search/:key', hotelsController.searchHotel)
router.post('/', hotelsController.createHotel)
router.put('/:id', hotelsController.updateHotel)
router.delete('/:id', hotelsController.deleteHotel)


export default router;