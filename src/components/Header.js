import React from "react";

const Header = (props) => {
  const [time, setTime] = React.useState(new Date());

  const getDay = () => {
    switch (time.getDay()) {
      case 0:
        return "Sun";
        break;
      case 1:
        return "Mon";
        break;
      case 2:
        return "Tue";
        break;
      case 3:
        return "Wed";
        break;
      case 4:
        return "Thu";
        break;
      case 5:
        return "Fri";
        break;
      case 6:
        return "Sat";
        break;
    }
  };

  const getMonth = () => {
    switch (time.getMonth()) {
      case 0:
        return "Jan";
        break;
      case 1:
        return "Feb";
        break;
      case 2:
        return "Mar";
        break;
      case 3:
        return "Apr";
        break;
      case 4:
        return "May";
        break;
      case 5:
        return "Jun";
        break;
      case 6:
        return "Jul";
        break;
      case 7:
        return "Aug";
        break;
      case 8:
        return "Sept";
        break;
      case 9:
        return "Oct";
        break;
      case 10:
        return "Nov";
        break;
      case 11:
        return "Dec";
        break;
    }
  };

  React.useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__navigation navigation">
          <div className="navigation__content">
            <p className="navigation__date date">
              {time.getHours()}:
              {time.getMinutes() < 10
                ? `0${time.getMinutes()}`
                : time.getMinutes()}
              , {getDay()} {getMonth()} {time.getDate()}
            </p>
            <p className="navigation__location location">
              {props.weather.name}, {props.weather.sys.country}
            </p>
          </div>
          {/* <div className="navigation__burger-menu burger-menu">
            <button>
                <img src="./images/icons/menu.png"/>
            </button>
        </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
