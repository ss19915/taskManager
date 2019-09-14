import { Task } from '../../models';

const create = (payload, onSuccess, onError) => {
    const task = new Task(payload);

    task.save().then(onSuccess).catch(onError);
};

const getAll = (payload, onSuccess, onError) => {
    Task.find(payload).then(onSuccess).catch(onError);
};

const deleteById = (id, onSuccess, onError) => {
    Task.deleteOne({ _id: id}).then(onSuccess).catch(onError);
}

const updateById = (id, payload, onSuccess, onError) => {
    Task.findOneAndUpdate({ _id: id }, payload, { runValidators: true }).then(onSuccess).catch(onError);
}

export {
    create,
    getAll,
    deleteById,
    updateById,
};  