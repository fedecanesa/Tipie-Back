const { Router } = require('express');
const router = Router();
const { httpErrors } = require('../config/errors.json');
const db = require('../db/data_tipie.json')

router.get('/', (req, res) => {
    try {
        if (!req) {
            return res.status(404).send(httpErrors.notFound)
        }
        return res.status(200).send(db);
    } catch {
        return res.status(500).send(httpErrors.serverError);
    }
});

module.exports = router