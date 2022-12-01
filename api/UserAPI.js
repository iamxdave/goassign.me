const UserRepository = require('../repositories/UserRepository');

exports.getUsers = (req, res, next) => {
    
    UserRepository.getUsers()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getUserById = (req, res, next) => {
    
    const id = req.params.id;
    
    UserRepository.getUserById(id)
    .then(user => {
        if(!user)
            res.status(404).json({
                message: `User with id ${id} not found`
            })
        else
            res.status(200).json(user);
    })
};

exports.createUser = (req, res, next) => {
    
    UserRepository.createUser(req.body)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        if(!err.statusCode)
            err.statusCode = 500;
        next(err);
    })
};

exports.updateUser = (req, res, next) => {
    
    const id = req.params.id;

    UserRepository.updateUser(id, req.body)
    .then(user => {
        res.status(200).json({message: 'User updated', user: user});
    })
    .catch(err => {
        if(!err.statusCode)
            err.statusCode = 500;
        next(err);
    })
};

exports.deleteUser = (req, res, next) => {
    
    const id = req.params.id;

    UserRepository.deleteUser(id)
    .then(user => {
        res.status(200).json({ message: 'Removed user', user: user});
    })
    .catch(err => {
        if(!err.statusCode)
            err.statusCode = 500;
        next(err);
    })
};




