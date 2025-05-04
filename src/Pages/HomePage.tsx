import { useState } from "react";
import FilterBar from '../Components/FilterBar';
import IncidentCard from '../Components/IncidentCard';
import IncidentForm from '../Components/IncidentForm';
import HeroHome from './HeroHome';
import Footer from '../Pages/Footer';
import { initialIncidents , AIIncident, SeverityLevel } from "../Data/mockIncidents";

function HomePage() {
  const [incidents, setIncidents] = useState<AIIncident[]>(initialIncidents);
  const [filterSeverity, setFilterSeverity] = useState<"All" | "Low" | "Medium" | "High">("All");
  const [sortOrder, setSortOrder] = useState<"Newest" | "Oldest">("Newest");

  const filteredIncidents = incidents.filter((incident) => {
    if (filterSeverity === "All") return true;
    return incident.severity === filterSeverity;
  });

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
  });

  const addIncident = (newIncident: { title: string; description: string; severity: SeverityLevel }) => {
    const incident: AIIncident = {
      id: incidents.length + 1,
      title: newIncident.title,
      description: newIncident.description,
      severity: newIncident.severity,
      reported_at: new Date().toISOString(),
    };
    setIncidents([incident, ...incidents]);
  };

  return (
    <>
    <div className=" bg-black">
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroHome />

      <div className="flex-grow p-6">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Title Section */}
          <h1 className="text-4xl font-semibold text-center text-red-200">
            AI Safety Incident Dashboard
          </h1>

          {/* Filters */}
          <section className="bg-white/50 border  border-white p-6 rounded-2xl shadow-md">
            <FilterBar
              filterSeverity={filterSeverity}
              setFilterSeverity={setFilterSeverity}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          </section>

          {/* Incident Cards */}
          <section className="grid md:grid-cols-1 gap-6 lg:grid-cols-2 ">
            {sortedIncidents.length > 0 ? (
              sortedIncidents.map((incident) => <IncidentCard key={incident.id} incident={incident} />)
            ) : (
              <p className="text-center text-white col-span-2">No incidents to display.</p>
            )}
          </section>

          {/* New Incident Form */}
          <section className=" border border-white p-6 rounded-2xl shadow-md mb-50">
            <h2 className="text-2xl font-bold mb-4 text-white">Report a New Incident</h2>
            <IncidentForm addIncident={addIncident} />
          </section>
        </div>
      </div>
    <Footer border={true} />
      
    </div>
    
    </div>  
    </>
  );
}

export default HomePage;