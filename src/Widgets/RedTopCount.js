function RedTopCount({number}) {
    return (
        <span className={`fa-stack small`}>
            <i className={`fa fa-circle fa-stack-2x `} style={{ color: 'red' }}></i>
            <span className="fa-stack-1x" style={{ color: 'white', fontSize: '0.8em' }}>
                {number}
            </span>
        </span>
    );
}

export default RedTopCount;