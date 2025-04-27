import { useState } from "react";
import { AIIncident } from "../Data/mockIncidents";

type Props = {
  incident: AIIncident;
};

const IncidentCard = ({ incident }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => setExpanded(!expanded);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "text-red-600 bg-red-100 hover:ring-red-300";
      case "Medium":
        return "text-yellow-600 bg-orange-100 hover:ring-yellow-300";
      case "Low":
        return "text-green-600 bg-green-100 hover:ring-green-300";
      default:
        return "text-gray-600 bg-gray-100 hover:ring-gray-300";
    }
  };

  const formattedDate = new Date(incident.reported_at).toLocaleString();

  return (
    <div
      className={`bg-white p-4 rounded-xl shadow-sm transition hover:shadow-lg hover:ring-4 ${getSeverityColor(
        incident.severity
      )}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-gray-800">{incident.title}</h3>
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${getSeverityColor(
            incident.severity
          )}`}
        >
          {incident.severity}
        </span>
      </div>
      <p className="text-sm text-gray-500">Reported on: {formattedDate}</p>

      {expanded && (
        <p className="mt-3 text-gray-700 whitespace-pre-line">{incident.description}</p>
      )}

      <button
        onClick={toggleDescription}
        className="mt-3 text-blue-600 hover:underline text-sm font-medium"
      >
        {expanded ? "Hide Details" : "View Details"}
      </button>
    </div>
  );
};

export default IncidentCard;