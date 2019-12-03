import { Context } from '../utils';

export const User = {
  id: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).id();
  },
  faction: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).faction();
  },
  points: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).points();
  },
  passed: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).passed();
  },
  isMyTurn: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).isMyTurn();
  },
};
