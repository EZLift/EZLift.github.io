const teamMembers = [
    {
        name: 'Alan Chen',
        role: 'Software',
        description: 'Alan brings skills in Computer Vision, powering the complex visual decision making algorithm that Labot uses.',
        imageUrl: './ac.jpeg'
    },
    {
        name: 'Vraj Patel',
        role: 'Software, Hardware',
        description: 'Vraj works on ensuring Labot has the required sensors and hardware, while hooking it all together with code.',
        imageUrl: './vp.jpeg'
    },
    {
        name: 'Elvis Cheung',
        role: 'Mechanical',
        description: 'Elvis gives Labot the muscles required to achieve its tasks by designing the mechanical components needed.',
        imageUrl: './ec.jpeg'
    },
    {
        name: 'Jagroop Gill',
        role: 'Mechanical, Project Management',
        description: 'Jagroop provides Labot with the necessary appendages, while keeping the team on track to achieve their goals.',
        imageUrl: './jg.jpeg'
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
        keyPoints: 'Website Launch',
        details: 'The team website v1.0 was launched with a simple project summary.'
    },
    {
        date: '2024-09-23',
        keyPoints: 'Problem Finalization',
        details: 'Finalized the problem statement and began discussing constraints and criteria for the design.'
    },
    {
        date: '2024-09-30',
        keyPoints: 'Solution Exploration',
        details: 'Presented four potential solutions and conducted a review of three related patents for insights into design approaches.'
    },
    {
        date: '2024-10-07',
        keyPoints: 'Solution Selection',
        details: 'Selected the best solution for the EZLift robot based on design constraints and feasibility analysis.'
    },
    {
        date: '2024-10-21',
        keyPoints: 'Preliminary Design Presentation',
        details: 'Delivered the PDP, showcasing the high-level design approach, key components, and anticipated challenges.'
    },
    {
        date: '2024-11-04',
        keyPoints: 'Detailed Design Completion',
        details: 'Completed the detailed design, including CAD models and mechanical, electrical, and control system schematics.'
    },
    {
        date: '2024-11-11',
        keyPoints: 'Design Verification',
        details: 'Validated the design through simulations and preliminary testing of the motor and lift system performance.'
    },
    {
        date: '2024-11-25',
        keyPoints: 'Final Design Presentation',
        details: 'Presented the finalized EZLift design, demonstrating its capabilities and compliance with the initial constraints and criteria.'
    },
    {
        date: '2024-12-02',
        keyPoints: 'Final Report and Web Update',
        details: 'Submitted the final design report, updated the team webpage with detailed documentation and a project summary.'
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
