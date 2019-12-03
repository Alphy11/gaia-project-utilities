// import { Query } from './Query'
// import { Subscription } from './Subscription'
import { User } from './User';
import { Room } from './Room';
import { Query } from './Query';
import { room } from './Mutation/room';

export default {
  Query,
  Mutation: {
    // ...user,
    ...room,
  },
  // Subscription,
  User,
  Room,
};
