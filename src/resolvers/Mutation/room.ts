import { shuffle } from 'underscore';
import { getUserId, Context } from '../../utils';

export const room = {
  async createRoom(parent, { userIDs }, ctx: Context, info) {
    const roomId = getUserId(ctx);
    const users = shuffle(
      userIDs.map(id => ({
        connect: {
          id,
        },
      }))
    );

    return ctx.prisma.createRoom({
      id: roomId,
      users,
    });
  },
};
