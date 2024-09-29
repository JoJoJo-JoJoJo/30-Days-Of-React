import react_logo from "./react_logo.png";

export default function UserCard() {
    return (
        <div className="user-card">
            <img src={react_logo} alt="react icon (png)" className="user-pfp" />
            <h1 className="name-title">The React Peep</h1>
            <p className="role-tag">Junior Developer - Antarctica</p>
            <div className="skills-container">
                <p>SKILLS:</p>
                <div className="skills-div">
                    <Skill text="HTML" />
                    <Skill text="CSS" />
                    <Skill text="JS" />
                    <Skill text="React" />
                    <Skill text="TS" />
                    <Skill text="Python" />
                </div>
            </div>
            <p className="date-joined">Joined on Oct 13, 2001</p>
        </div>
    )
}

function Skill({ text }) {
    return (
        <div className="skill">{text}</div>
    )
}
