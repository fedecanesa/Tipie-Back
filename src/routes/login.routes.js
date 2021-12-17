const { Router } = require('express');
const router = Router();
const { httpErrors } = require('../config/errors.json');
const config = require('../config/config');

router.post('/', (req, res) => {
    const valid_email = config.email;
    const valid_password = config.password;
    try {
        if (!req) {
            return res.status(404).send(httpErrors.notFound)
        }
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).send(httpErrors.notFound);
        }

        if (valid_email === email && valid_password === password) {
            const user = { email }
            return res.status(200).send({ user, success: "success" })
        } else {
            return res.status(404).send({ message: "User o passworrd invalid" })
        }
    } catch {
        return res.status(500).send(httpErrors.serverError);
    }
});

module.exports = router