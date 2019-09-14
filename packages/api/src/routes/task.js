import express from 'express';
import { task } from '@task-manager/db';

const router = express.Router();

router.post('/', (req, res, next) => {
    const { name, description } = req.body;
    const payload = { name, description };

    const onSuccess = (task) => {
        res.statusCode = 201;
        res.send(task);
        next();
    };

    if (!name) {
        res.send({
            status: 401,
            error: 'Field name is required!'
        });
        return;
    }

    task.create(payload, onSuccess, next);
});

router.get('/', (req, res, next) => {
    task.getAll({}, (allTasks) => { res.send(allTasks); next() }, next);
});

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    task.deleteById(id, (status) => { res.send(status); next() }, next);
});

router.patch('/:id', (req, res, next) => {
    const { id } = req.params;
    const payload = req.body;
    task.updateById(id, payload, () => { res.send(); next() }, next);
})

export default router;