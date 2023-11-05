import './app-filter.scss';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'On promotion'},
        {name: 'lessThan1500', label: 'Salary less than 1500$'},
        {name: 'moreThan1500', label: 'Salary more than 1500$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
            type='button'
            className={`btn ${clazz}`}
            key={name}
            onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className='btn-group'>
            {buttons}
        </div>
    )
}

export default AppFilter;