import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaUsers, FaLaptop, FaUserCheck , FaTimesCircle     } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Dashboard.css";
import '../styles/Default.css';

// =====================
// Types
// =====================
interface CardItem {
  title: string;
  value: string;
  gradient: string;
  icon: React.ReactNode;
}


// =====================
// Main App Component
// =====================
function App() {
  // Sample Dashboard Data
const cards: CardItem[] = [
  {
    title: "Total Enrolled Users",
    value: "100",
    gradient: "card-users icon1",
    icon: <FaUsers />,
  },
  {
    title: "Total Devices Configured",
    value: "50",
    gradient: "card-devices icon2",
    icon: <FaLaptop />,
  },
  {
    title: "Total Valid Transaction",
    value: "20",
    gradient: "card-valid icon3",
    icon: <FaUserCheck />,
  },
  {
    title: "Total Invalid Transaction",
    value: "30",
    gradient: "card-invalid icon4",
    icon: <FaTimesCircle />,
  },
];



  return (
    <Container fluid className="dashboard-container">
      {/* Cards */}
      <Row className="g-4 row-bottom-space">
      {cards.map((card, index) => {
    const [cardClass, iconClass] = card.gradient.split(" ");

    return (
      <Col xl={3} lg={6} md={6} sm={12} key={index}>
        <div className="dashboard-cards-wrapper">
          <div className={`dashboard-card ${cardClass}`}>
            <div className={`card1-icon ${iconClass}`}>
              {card.icon}
            </div>
            <h4 className="card1-title">{card.title}</h4>
            <h2 className="card1-value">{card.value}</h2>
          </div>
        </div>
      </Col>
    );
  })}
      </Row>

      {/* Device Health & Timeline */}
      <Row className="g-4 mb-4">
         {/* Live Transactions Table */}
          <Col xs={12} sm={12} md={12} xl={12} lg={12}>
            <div className="Productheader row-bottom-space">
                <h1 className='engraved-text'>EINS Manage<span className="highlight-x">X</span></h1>
                <hr className="custom-hr"/>
                <h1 className='engraved-text-para'>HID Amico Face Recognition Devices</h1>
            </div>
          </Col>
         
      </Row>

      


    </Container>
  );
}

export default App;
