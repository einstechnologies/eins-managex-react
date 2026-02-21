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
    { title: "Total Users", value: "100", gradient: "gradient-1", icon: <FaUsers /> },
    { title: "Total Devices", value: "50", gradient: "gradient-2", icon: <FaLaptop /> },
    { title: "Total Valid", value: "20", gradient: "gradient-3", icon: <FaUserCheck  /> },
    { title: "Total Invalid", value: "30", gradient: "gradient-4", icon: <FaTimesCircle    /> },
  ];



  return (
    <Container fluid className="dashboard-container">
      {/* Cards */}
      <Row className="g-4 row-bottom-space">
        {cards.map((card, idx) => (
          <Col key={idx} xl={3} lg={6} md={6} sm={12}>
            <div className={`custom-card ${card.gradient}`}>
              <div className="card-content">
                <div>
                  <p className="card-title">{card.title}</p>
                  <h2 className="card-value">{card.value}</h2>
                </div>
                <div className="card-icon">{card.icon}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Device Health & Timeline */}
      <Row className="g-4 mb-4">
         {/* Live Transactions Table */}
          <Col xl={12} lg={12}>
            <div className="Productheader">
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
