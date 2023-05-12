const express = require('express');
const router = express.Router();

const employees = [
    { id: 1, name: "Max Muster", position: "Software Engineer" },
    { id: 2, name: "Sophia Example", position: "Product Manager" },
    { id: 3, name: "Mike Smith", position: "Facility Manager" },
    { id: 4, name: "Ramses Horus", position: "Human Recruitment" },
    { id: 5, name: "Peter Meter", position: "Shipping Clerk" }
];

// https://expressjs.com/de/guide/writing-middleware.html
function auth(req, res, next) {
    if (req.query.admin == 'true') {
        return next();
    } else {
        return res.status(401).send('Not authenticated!');
    }
}

// Middleware-Function: Protokoliert bei jedem Aufruf eines Endpunkts in diesem Router.
const logging = (req, res, next) => {
    console.log(req.url);
    next();
};

// Registriert die Funktion "logging" als Middleware.
router.use(logging);

router.get('/', (req, res) => {
    res.send(employees);
});

router.get('/:id', (request, response) => {
    const employee = employees.find((currentEmployee) => currentEmployee.id == request.params.id);
    if(employee == undefined) {
        return response.status(404).send("Employee not found.");
    }
    response.send(employee);
});

router.post('/', (req, res) => {
    const employee = {
        id: employees.length + 1,
        name: req.body.name,
        position: req.body.position
    };
    employees.push(employee);
    console.log(employee);
    res.send(employee);
});

router.put('/:id', (req, res) => {
    const employeeId = req.params.id;
    // object destructuring
    const { name, position } = req.body;
    /**
     * const name = req.body.name;
     * const position = req.body.position;
     */

    // Suchen und zurückgeben des Mitarbeiters mit der id employeeId (aus den req.params)
    const employee = employees.find((currentEmployee) => currentEmployee.id == employeeId);

    if(employee == undefined) {
        return res.status(404).send("Employee not found.");
    };

    // Umwandeln der Daten in einen String und ändern der Mitarbeiter-Daten
    employee.name = `${name}`;
    employee.position = `${position}`;

    res.send(employee);
});

router.delete('/:id', auth, (req, res) => {
    const employeeId = req.params.id;
    
    const getIndexToDelete = (currentEmployee) => employeeId == currentEmployee.id;

    const indexToDelete = employees.findIndex(getIndexToDelete);

    if(indexToDelete == -1) {
        return res.status(404).send("Employee not found.");
    }

    employees.splice(indexToDelete, 1);
    res.send(employeeId);
});




module.exports = router;