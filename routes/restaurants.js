import express from 'express'

const router = express.Router()

import {getRestaurants, getRestaurantsById, createRestaurant, deleteRestaurant, updateRestaurant} from '../controllers/restaurants.js'

router.get('/', getRestaurants);
router.get('/:id',getRestaurantsById);
router.post('/', createRestaurant);
router.delete('/:id', deleteRestaurant);
router.patch('/:id', updateRestaurant);

export default router;
