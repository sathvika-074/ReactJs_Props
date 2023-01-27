const Employee = (props) => {
  const { name, designation } = props;

  return (
    <div className="employee">
      <ul>
      <li><h2>{name} --- {designation}</h2></li>
      <h4> </h4>
      </ul>
    </div>
  );
};

export default Employee;
