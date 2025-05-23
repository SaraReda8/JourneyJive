import React from 'react';
import styles from './Team.module.css';

import member1Img from '../../Assets/Images/member1.webp';
import member2Img from '../../Assets/Images/member2.webp';
import member3Img from '../../Assets/Images/member3.webp';
import member4Img from '../../Assets/Images/member4.webp';
import member5Img from '../../Assets/Images/member5.webp';
import member6Img from '../../Assets/Images/member6.webp';
import member7Img from '../../Assets/Images/member7.webp';
import member8Img from '../../Assets/Images/member8.webp';

const teamMembers = [
  { 
    name: 'Farida Gado', 
    role: 'CEO', 
    responsibility: 'Oversees all operations, sets the vision, and leads the strategy for the company.', 
    image: member1Img 
  },
  { 
    name: 'Hajar Ali', 
    role: 'Lead Developer', 
    responsibility: 'Leads the development team, ensures high-quality code, and works on key technical challenges.', 
    image: member2Img 
  },
  { 
    name: 'Kareem Farouk', 
    role: 'Marketing Director', 
    responsibility: 'Creates and implements marketing strategies to drive brand awareness and customer engagement.', 
    image: member3Img 
  },
  { 
    name: 'Sally Zaher', 
    role: 'Project Manager', 
    responsibility: 'Coordinates projects, manages timelines, and ensures effective communication between teams.', 
    image: member4Img 
  },
  { 
    name: 'David Eissa', 
    role: 'Lead Designer', 
    responsibility: 'Designs the user experience and visual identity of the website and marketing materials.', 
    image: member5Img 
  },
  { 
    name: 'Eman Mohamed', 
    role: 'Customer Support', 
    responsibility: 'Assists customers, resolves issues, and ensures a positive experience for clients.', 
    image: member6Img 
  },
  { 
    name: 'Ayat Osama', 
    role: 'Operations Manager', 
    responsibility: 'Manages day-to-day operations, optimizes workflows, and ensures the team is functioning efficiently.', 
    image: member7Img 
  },
  { 
    name: 'Yousif Rady',  
    role: 'Content Writer', 
    responsibility: 'Writes content for blogs, product descriptions, and marketing material.', 
    image: member8Img 
  },
];

export default function Team() {
  return (
    <div className={styles.teamContainer}>
      <h2 className={styles.heading}>Meet Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <img
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              loading="lazy"
              className={`${styles.profileImage} ${styles.fadeIn}`}
              onError={(e) => (e.target.src = 'https://via.placeholder.com/150?text=No+Image')}
            />
            <h3 className={styles.memberName}>{member.name}</h3>
            <p className={styles.memberRole}>{member.role}</p>
            <p className={styles.memberResponsibility}>{member.responsibility}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
