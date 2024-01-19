import { z } from "zod";

export const registerUserSchema = z.object({
    fullName: z.string().max(140, "Name must be less than 140 characters."),
    email: z.string().email("Invalid email address"),
    password: z.string().max(96, "Password must be less than 96 characters").min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string().max(96, "Password must be less than 96 characters").min(6, "Password must be at least 6 characters."),
});

export const loginUserSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(1, "Please enter a password")
});

export const contractEntrySchema = z.object({
    parentContract: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    description: z.string().optional(),
    projectCode: z.string().optional(),
    owner: z.string(),
    approver: z.string().optional(),
    department: z.string().optional(),
    amount: z.string().optional(),
    spendCategory: z.enum(["Contract", "Clinical", "Other"]).optional(),
});

export type ContractEntryForm = typeof contractEntrySchema;