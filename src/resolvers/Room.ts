import { Context } from '../utils';

export const Room = {
  id: ({ id }, args, ctx: Context) => {
    return ctx.prisma.room({ id }).id();
  },
  users: ({ id }, args, ctx: Context) => {
    return ctx.prisma.room({ id }).users();
  },
};
