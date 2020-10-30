interface Ipermissions
{
    
        'getUsers': {
            all: string[];
            read: string[];
            write: string[];
            Delete: string[];
        },
        'getUser': {
            all: string[];
            read: string[];
            write: string[];
            Delete: string[];
        }   
}

interface Iusers{
    traineeEmail: string;
    reviewerEmail: string;
};
export {Ipermissions};
export {Iusers};
