const express = require('express');
const app = express();
const chalk = require('chalk');

app.get('/person', function (req, res) {
    res.json({
        id: 1,
        name: 'Halouma',
        surname: 'Hadidi',
        age: 30
    });
});

app.listen(9000, () => {
    console.log(chalk.green.bold('Server is running on port localhost:9000'));
});
