import Prisma from "../../../server/database.js";

export const ITEM_PER_PAGE = await Prisma.teacher.count();
