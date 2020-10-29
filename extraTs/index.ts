//import {diamond,triangle} from './patterns';
//import {hasPermission,validateUsers} from './utils';
import {validateUsers} from "./utils/index"
//import {validateEmail} from "./utils/index"
 
//diamond(5);
//triangle(5);

// import {permissions , users} from './constants';

//  const { getUsers} = permissions;
//  let result = hasPermission(getUsers, 'head-trainer', 'read');
//  console.log(result);


let users: Iusers[] = [
    {traineeEmail: 'TRAINER@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech'
  },
  {traineeEmail: 'trae1@successive.tech',
  reviewerEmail: 'revierccessive.tech'
  },
  {
      traineeEmail: 'trainee1@successive.tech',
      reviewerEmail: 'reviewer1@successive.TECH'
  }
  ];
  
 validateUsers(users);
 import {Iusers} from "./interfaces"

 