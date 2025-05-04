import { useState, useEffect } from "react";
import { SeverityLevel, mockIncidents } from "../Data/mockIncidents";

type Props = {
  addIncident: (incident: { title: string; description: string; severity: SeverityLevel }) => void;
};

const IncidentForm = ({ addIncident }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState<SeverityLevel>("Low");
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [popupType, setPopupType] = useState<"error" | "success">("success");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let missingFields = [];

    if (!title.trim()) missingFields.push("Title");
    if (!description.trim()) missingFields.push("Description");

    if (missingFields.length > 0) {
      setPopupType("error");
      setPopupMessage(`Please fill: ${missingFields.join(", ")}`);
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
    setPopupType("success");
    setPopupMessage("Incident submitted successfully!");

    setTitle("");
    setDescription("");
    setSeverity("Low");
  };

  useEffect(() => {
    if (popupMessage) {
      const timer = setTimeout(() => {
        setPopupMessage(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [popupMessage]);

  const closePopup = () => {
    setPopupMessage(null);
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

      {popupMessage && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2">
          <div
            className={`px-6 py-3 rounded-md shadow-lg text-white text-center text-sm ${
              popupType === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {popupMessage}
            {popupType === "error" && (
              <button
                onClick={closePopup}
                className="ml-4 underline text-xs"
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default IncidentForm;