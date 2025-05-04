import { useState } from "react";
import { SeverityLevel, mockIncidents } from "../Data/mockIncidents";
import { toast } from "sonner";

type Props = {
  addIncident: (incident: { title: string; description: string; severity: SeverityLevel }) => void;
};

const IncidentForm = ({ addIncident }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState<SeverityLevel>("Low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let missingFields = [];

    if (!title.trim()) missingFields.push("Title");
    if (!description.trim()) missingFields.push("Description");

    if (missingFields.length > 0) {
      toast.error("All the fields are required")
      return;
    }

    const newIncident = {
      id: Date.now(), // Generate a unique ID as a number
      title: title.trim(),
      description: description.trim(),
      severity,
      reported_at: new Date().toISOString(), // Add the current timestamp
    };

    // Update mockIncidents (simulating persistence)
    mockIncidents.push(newIncident);

    addIncident(newIncident);
    toast.success("Added Successfully");

    setTitle("");
    setDescription("");
    setSeverity("Low");
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className=" p-4 rounded-xl shadow-md space-y-4">
        <div>
          <label className="block text-lg font-medium text-white">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the incident title"
            className="border-white mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring placeholder-white/50 text-white"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-white ">Description</label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            title="Incident Description"
            placeholder="Enter a detailed description of the incident"
            className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring resize-none border-white placeholder-white/50 text-white"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-white mb-1">Severity</label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value as SeverityLevel)}
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring border-white font-bold text-blue-500"
            aria-label="Select severity level"
            
          >
            <option value="Low"  className="font-bold" >Low</option>
            <option value="Medium" className="font-bold">Medium</option>
            <option value="High" className="font-bold">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Submit Incident
        </button>
      </form>

      </div>
  );
};

export default IncidentForm;