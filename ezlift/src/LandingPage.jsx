import React from 'react';

const teamMembers = [
  {
    name: 'Alan Chen',
    role: 'Software',
    description: 'Alan brings skills in Computer Vision, powering the complex visual decision making algorithm that Labot uses.',
    imageUrl: 'https://via.placeholder.com/150' // Replace with real image URLs
  },
  {
    name: 'Vraj Patel',
    role: 'Software, Hardware',
    description: 'Vraj works on ensuring Labot has the required sensors and hardware, while hooking it all together with code.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Elvis Cheung',
    role: 'Mechanical',
    description: 'Elvis gives Labot the muscles required to acheive its tasks by designing the mechanical components needed.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Jagroop Gill',
    role: 'Mechanical, Project Management',
    description: 'Jagroop provides Labot with the necessary appendeges, while keeping the team ontrack to acheive their goals.',
    imageUrl: 'https://via.placeholder.com/150'
  }
];

const LandingPage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <img
          src="https://via.placeholder.com/1400x500" // Replace with actual hero image
          alt="Warehouse Robotics"
          style={styles.heroImage}
        />
        <div style={styles.heroText}>
          <h1>Meet, Labot</h1>
          <p>Tell it, to do it.</p>
        </div>
      </section>
      <section>
        <h2>Problem Definition</h2>
            <p>There is a need for a robot that can collaborate with humans in completing warehouse operations such as inventory management while also reducing human error, minimising safety risks in human-machine interactions, and improving overall productivity.</p>
      </section>

      {/* Team Members Section */}
      <section style={styles.teamSection}>
        <h2>Meet the Team</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.teamMember}>
              <img src={member.imageUrl} alt={member.name} style={styles.profileImage} />
              <h3>{member.name}</h3>
              <p><strong>{member.role}</strong></p>
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
  heroSection: {
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
  },
  heroText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    background: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '10px',
  },
  teamSection: {
    marginTop: '50px',
    padding: '20px',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns for 4 members
    gap: '20px',
    justifyContent: 'center',
  },
  teamMember: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  },
};

export default LandingPage;
