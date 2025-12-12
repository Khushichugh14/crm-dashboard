export type EmployeeStatus = "Active" | "On Leave" | "Archived";

export type Employee = {
  id: string;
  name: string;
  role: string;
  team: string;
  avatarColor?: string; 
  salary: number;
  performance: number; // 0-10
  status: EmployeeStatus;
};
