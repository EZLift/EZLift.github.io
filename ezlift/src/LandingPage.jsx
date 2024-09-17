import React from 'react';

const teamMembers = [
  { name: 'John Doe', role: 'CEO', description: 'John leads the team with over 10 years of experience in the industry.' },
  { name: 'Jane Smith', role: 'CTO', description: 'Jane is responsible for all technical aspects of the company.' },
  { name: 'Michael Brown', role: 'Lead Designer', description: 'Michael crafts the visual identity of EZLift.' },
  { name: 'Emily White', role: 'Lead Engineer', description: 'Emily brings the technical solutions to life.' }
];

const LandingPage = () => {
  return (
    <div style={styles.container}>
      {/* Title Section */}
      <header style={styles.header}>
        <h1>EZLift</h1>
        <p>Your lifting solution made easy.</p>
      </header>

      {/* Team Members Section */}
      <section style={styles.teamSection}>
        <h2>Meet the Team</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.teamMember}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    marginBottom: '50px',
  },
  teamSection: {
    padding: '20px',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },
  teamMember: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
  }
};

export default LandingPage;
