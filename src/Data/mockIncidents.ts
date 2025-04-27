export type SeverityLevel = "Low" | "Medium" | "High";

export type AIIncident = {
  id: number;
  title: string;
  description: string;
  severity: SeverityLevel;
  reported_at: string;
};

export const initialIncidents: AIIncident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics over others during testing, leading to fairness concerns.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "Large Language Model provided incorrect safety procedure information during emergency response simulation.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata through casual conversation logs.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
];

export const mockIncidents: AIIncident[] = [
  {
    id: 1,
    title: "Incident 1",
    description: "Description of incident 1",
    severity: "High",
    reported_at: "2023-01-01T12:00:00Z",
  },
  {
    id: 2,
    title: "Incident 2",
    description: "Description of incident 2",
    severity: "Medium",
    reported_at: "2023-02-01T12:00:00Z",
  },
];




// This file gives you:

// Type safety (AIIncident and SeverityLevel)

// A clean, consistent data format

// Easy reusability across components