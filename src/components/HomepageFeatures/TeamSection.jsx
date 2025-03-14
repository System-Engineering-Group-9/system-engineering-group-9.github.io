import styles from "../../css/index.module.css";

export default function TeamSection() {
    const teamMembers = [
        {
            name: 'Ryan Li',
            role: 'team leader',
            imageUrl: 'https://github.com/Ryanli-BP.png',
        },
        {
            name: 'Jack Mok',
            role: 'UI/UX Designer',
            imageUrl: 'https://github.com/jackmok33.png',
        },
        {
            name: 'Jack Pan',
            role: 'AI engineer',
            imageUrl: 'https://github.com/dcloud347.png',
        },
        {
            name: 'Prantanil',
            role: 'Network engineer',
            imageUrl: 'https://github.com/Pran-bho.png',
        },
    ];

    return (
        <div className={styles.teamSection}>
            <h2>Meet the Team</h2>
            <div className={styles.teamGrid}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.teamMember}>
                        <img src={member.imageUrl} alt={`${member.name}'s photo`}/>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
