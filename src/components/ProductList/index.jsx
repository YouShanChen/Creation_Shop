import { Row, Col } from "antd";
import ComissionItem from "../ComissionItem";

export default function ProductList({comissions}) {
  return (
    <Row gutter={[32, 32]}>
    {comissions.map(comission => (
        <Col 
          key={comission.id} 
          sm={{ span: 12 }} 
          lg={{ span: 8 }}
          xl={{ span: 6 }}
          xxl={{ span: 4 }}
        >
          <ComissionItem comission={comission}/>
        </Col>
      ))}
    </Row>
  );
}