import prisma from "../../../server/database";

export const ITEM_PER_PAGE = 5;
export const COUNT_TEACHERS = await prisma.teacher.count();
