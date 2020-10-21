// const permissions={

    
//     all: ['head-trainer'],
//     read  :['trainee', 'trainer'],
//     write : ['trainer'],
//     delete: [],
    
// }
// function hasPermission()
// {
    
    
//     console.log(this.all)
    
    

//         console.log(this.read)

//         console.log(this.write)
//         console.log(this.delete)

const permissions={

    'getUsers': {
    all: ['head-trainer'],
    read  :['trainee', 'trainer'],
      write : ['trainer'],
      delete: []
    },
    'getUsers1': {
         all: ['head-trainer'],
        read  :['trainee', 'trainer'],
          write : ['trainer'],
          delete: []
        },
        'getUsers2': {
            all: ['head-trainer'],
           read  :['trainee', 'trainer'],
             write : ['trainer'],
             delete: []
           }

 };
// function hasPermission(moduleName,role,pType)
// {
//       console.log(role)
//      //console.log(all.include(role));
//     // if(role===moduleName.delete[0])
//     // return false;

//     // else
//     // return true;
//     //var role = all.include() 
//     //permissions.includes('g0etUsers','trainee','read')
// }

// function roles(x)
// {
// if(x==='head-trainer')
// {
//     hasPermission("getUsers",permissions.getUsers.all.includes(x),console.log("all(read,write,delete)"));
    
// }
// else
// {
// //hasPermission("getUsers",permissions.getUsers.all.includes(x),console.log("all"));
// hasPermission("getUsers",permissions.getUsers.read.includes(x),console.log("read"));
// hasPermission("getUsers",permissions.getUsers.write.includes(x),console.log("write"));
// hasPermission("getUsers",permissions.getUsers.delete.includes(x),console.log("delete"));
// //hasPermission(getUsers,trainee,read)
// }
// }
// roles('head-trainer')
function hasPermission(moduleName,role,pType)
{
    console.log(permissions[moduleName][pType].includes(role))
}
hasPermission('getUsers','trainer','read')
hasPermission('getUsers2','trainee','write')
