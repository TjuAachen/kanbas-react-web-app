function StackWithCheckIcon() {
    return (
      <span className={`fa-stack small`}>
      <i className={`fa fa-circle fa-stack-2x `} style={{ color: 'green' }}></i>
      <i className={`fa fa-check fa-stack-1x`} style={{ color: 'white' }}></i>
  </span>
    );
  }

  export default StackWithCheckIcon;