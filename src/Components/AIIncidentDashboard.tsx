import { useState } from "react";
import { mockIncidents, AIIncident, SeverityLevel } from "../Data/mockIncidents";
import IncidentCard from "./IncidentCard";
import FilterBar from "./FilterBar";
import IncidentForm from "./IncidentForm";

const AIIncidentDashboard = () => {
  const [incidents, setIncidents] = useState<AIIncident[]>(mockIncidents);
  const [filterSeverity, setFilterSeverity] = useState<SeverityLevel | "All">("All");
  const [sortOrder, setSortOrder] = useState<"Newest" | "Oldest">("Newest");

  // Handle Filtering
  const filteredIncidents = incidents.filter((incident) =>
    filterSeverity === "All" ? true : incident.severity === filterSeverity
  );

  // Handle Sorting
  const sortedIncidents = filteredIncidents.sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
  });

  // Handle Adding New Incident
  const addIncident = (newIncident: Omit<AIIncident, "id" | "reported_at">) => {
    const incidentToAdd: AIIncident = {
      ...newIncident,
      id: incidents.length + 1, // Simple id increment
      reported_at: new Date().toISOString(), // Current time
    };
    setIncidents([incidentToAdd, ...incidents]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 ">AI Safety Incident Dashboard</h1>

      <FilterBar
        filterSeverity={filterSeverity}
        setFilterSeverity={setFilterSeverity}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <div className="grid gap-4 mt-6">
        {sortedIncidents.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Report New Incident</h2>
        <IncidentForm addIncident={addIncident} />
      </div>
    </div>
  );
};

export default AIIncidentDashboard;


// ✅ This file handles:

// Managing state of incidents

// Managing filters and sort order

// Adding new incidents

// Organizing the full dashboard layout