import { Repository } from "typeorm";
import { Schedule } from "../entities";
import { z } from "zod";
import { createScheduleSchema } from "../schemas/schedules.schema";

export type ScheduleRepo = Repository<Schedule>
export type CreateSchedule = z.infer<typeof createScheduleSchema>