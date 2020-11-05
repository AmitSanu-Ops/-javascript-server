import { userModel } from '../repositories/user/UserModel';
import UserRepositry from '../repositories/user/UserRepository';

const userRepository: UserRepositry = new UserRepositry();
export default() => {
  // userRepository.count()
  //   .then(res =>{
   //   if(res ==0) {
        console.log('Data seeding in progress');
        userRepository.create({name: 'Head Trainer', role:'head trainner'})
        userRepository.create({name: 'Trainee', role:'trainee', email:'trainne@successive.tech'})
      }
   // })
   // .catch(err => console.log(err));


