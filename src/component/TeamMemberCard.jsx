import femaleProfile from "../images/femaleProfile.jpeg";
import maleProfile from "../images/maleProfile.jpeg";

export default function TeamMemberCard({employee, handleEmployeeCardClick, selectedTeam}){
    return (
        // m => margin
        <div 
        key={employee.id}
        id={employee.id} 
        className={(employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2" )}
        style={{cursor:"pointer"}}
        onClick={handleEmployeeCardClick}
    >
        {/* determine employee img */}
        {(employee.gender === "female") ? 
            <img src={femaleProfile} alt="employee profile" className="card-img-top"/> : 
            <img src={maleProfile} alt="employee profile" className="card-img-top"/>
        }
        <div className="card-body">
            <h5 className="card-title">
                Full Name: {employee.fullName}
            </h5>
            <p className="card-text">
                <b>Designation:</b> {employee.designation}
            </p>
        </div>
    </div>
    )
}