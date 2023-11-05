import './app-info.scss'

const AppInfo = ({ employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Accounting of co-workers in the company "Grain"</h1>
            <h2>Total staff: {employees}</h2>
            <h2>Prize will be awarded: {increased}</h2>
        </div>
    )
}

export default AppInfo;