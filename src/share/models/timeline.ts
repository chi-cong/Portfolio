export interface TimelineData {
  start?: string | null;
  end: string;
  place: string;
  type: "job" | "education";
  position: string;
}
