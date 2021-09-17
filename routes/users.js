// const { Router } = require('express');
// const router = Router();
// localhost:4000/api/users

const router = require('express').Router();

const { getUsers,
        putUsers,
        postUsers,
        deleteUsers,
        patchUsers } = require('../controllers/users');

router.get('/', getUsers)

router.post('/', postUsers)

router.put('/:id', putUsers)

router.patch('/', patchUsers)

router.delete('/:id', deleteUsers)

module.exports = router;
