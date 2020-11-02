 import { Ipermissions, Iusers} from "./interfaces"
 const permissions: Ipermissions = {
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



// let users:Iusers = [
//   {traineeEmail: 'TRAINER@successive.tech',reviewerEmail: 'reviewer1@successive.tech'
// },
// {traineeEmail: 'trae1@successive.tech',reviewerEmail: 'revierccessive.tech'
// },
// {traineeEmail: 'trainee1@successive.tech',reviewerEmail: 'reviewer1@successive.TECH'
// }
// ];
