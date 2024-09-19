const teamMembers = [
    {
        name: 'Alan Chen',
        role: 'Software',
        description: 'Alan brings skills in Computer Vision, powering the complex visual decision making algorithm that Labot uses.',
        imageUrl: 'https://via.placeholder.com/150'
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
        description: 'Elvis gives Labot the muscles required to achieve its tasks by designing the mechanical components needed.',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        name: 'Jagroop Gill',
        role: 'Mechanical, Project Management',
        description: 'Jagroop provides Labot with the necessary appendages, while keeping the team on track to achieve their goals.',
        imageUrl: 'https://via.placeholder.com/150'
    }
];

const updateLog = [
    {
        date: '2024-09-09',
        keyPoints: 'Initial Project Launch',
        details: 'The EZLift project was officially launched, with the team assembled and ideation process begun.'
    },
    {
        date: '2024-09-19',
        keyPoints: 'Webite Launch',
        details: 'The team website v1.0 was launched with simple summary.'
    }
];

function displayTeamMembers() {
    const teamContainer = document.getElementById('teamMembers');
    teamMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');
        memberDiv.innerHTML = `
            <img src="${member.imageUrl}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>Role:</strong> ${member.role}</p>
            <p>${member.description}</p>
        `;
        teamContainer.appendChild(memberDiv);
    });
}

function displayUpdateLog() {
    const logContainer = document.getElementById('updateLog');
    updateLog.forEach(log => {
        const logRow = document.createElement('tr');
        logRow.innerHTML = `
            <td>${log.date}</td>
            <td>${log.keyPoints}</td>
            <td>${log.details}</td>
        `;
        logContainer.appendChild(logRow);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayTeamMembers();
    displayUpdateLog();
});
