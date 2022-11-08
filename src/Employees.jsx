import femaleProfile from "./images/femaleProfile.jpeg";
import maleProfile from "./images/maleProfile.jpeg";

export default function Employees({employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick}){
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select className="form-select form-select-lg"
                        value={selectedTeam}
                        onChange={handleTeamSelectionChange}
                    >
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>
            {/* class = bootstrap */}
            {/* mt, mb => margin-top, margin-bottom */}
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees.map((employee) => (
                                // m => margin
                                <div 
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
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}