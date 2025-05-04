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
        return "text-red-600 bg-red-200 border hover:ring-red-400 hover:bg-red-300/50";
      case "Medium":
        return "text-yellow-600 bg-orange-100 border hover:ring-yellow-400 hover:bg-yellow-100/50";
      case "Low":
        return "text-green-600 bg-green-100 border hover:ring-green-400 hover:bg-green-100/50";
      default:
        return "text-gray-600 bg-gray-100 border hover:ring-gray-400";
    }
  };

  const formattedDate = new Date(incident.reported_at).toLocaleString();

  return (
    <div
      className={`bg-white/30 p-4 rounded-xl shadow-sm transition hover:shadow-lg hover:ring-4 ${getSeverityColor(
        incident.severity
      )} sm:p-6 md:p-8`}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
        <h3 className="text-lg font-semibold sm:text-xl">{incident.title}</h3>
        <span
          className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full ${getSeverityColor(
            incident.severity
          )}`}
        >
          {incident.severity}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-gray-800">Reported on: {formattedDate}</p>

      {expanded && (
        <p className="mt-3 text-white whitespace-pre-line text-sm sm:text-base">
          {incident.description}
        </p>
      )}

      <button
        onClick={toggleDescription}
        className="mt-3 text-blue-500 hover:underline text-xs sm:text-sm font-medium"
      >
        {expanded ? "Hide Details" : "View Details"}
      </button>
    </div>
  );
};

export default IncidentCard;