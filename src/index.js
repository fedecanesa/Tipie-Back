const { app } = require('./app.js');

/* CONFIGURACION */
const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
    if (err) console.log("Server connection failed");
    else console.log(`Server on port ${PORT}`);
})