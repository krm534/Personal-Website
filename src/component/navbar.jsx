import "../styles/Navbar.css";

const Navbar = () => {
  const sections = [
    { id: 1, name: "About" },
    { id: 3, name: "Projects" },
    { id: 4, name: "Contact" },
  ];

  const checkId = (id) => {
    alert("Id: " + id);
  };

  return (
    <div className="nav-container">
      <ul>
        {sections.map((section) => {
          return (
            <li onMouseDown={() => checkId(section.id)}>
              <a>{section.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
