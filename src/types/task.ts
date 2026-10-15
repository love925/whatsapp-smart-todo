/**
 * Intended schema for Chunk 2/3. The current UI uses separate dummy preview data.
 * No task records are persisted in Chunk 1.
 */
export type TaskStatus = "pending_review" | "open" | "completed";
export type TaskPriority = "low" | "medium" | "high";
export type TaskSource = "manual" | "whatsapp";

export interface Task {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  source: TaskSource;
  dueAt: string | null;
  reminderAt: string | null;
  person: string | null;
  location: string | null;
  url: string | null;
  amount: string | null;
  sourceMessageId: string | null;
  createdAt: string;
  updatedAt: string;
}
