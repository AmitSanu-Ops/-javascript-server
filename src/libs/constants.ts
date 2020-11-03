
 const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: [],
    },
    'getUser': {
        all: ['head-trainer'],
        read: ['trainer'],
        write: ['trainee'],
        Delete: [],
    }
};
export {permissions};

