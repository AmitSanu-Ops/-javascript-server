import {diamond,triangle} from './patterns';
import {hasPermission,validateUsers} from './utils';


diamond(5);
triangle(5);

import {permissions , users} from './constants';

 const { getUsers} = permissions;
 let result = hasPermission(getUsers, 'head-trainer', 'read');
 console.log(result);

 validateUsers(users);

 