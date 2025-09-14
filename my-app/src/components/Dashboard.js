import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="header">📊 Project Dashboard</header>
      <div className="main">
        <aside className="sidebar">
          <ul>
            <li>🏠 Home</li>
            <li>📈 Analytics</li>
            <li>🗂 Reports</li>
            <li>⚙ Settings</li>
          </ul>
        </aside>
        <section className="content">
          <h2>Welcome to Your AI Project Dashboard 🚀</h2>
          <p>
            This dashboard will help monitor chatbot usage, performance, and
            customer queries.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
