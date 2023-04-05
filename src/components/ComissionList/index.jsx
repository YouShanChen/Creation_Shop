import { Row, Col } from "antd";
import ComissionItem from "../ComissionItem";

export default function ComissionList({comissions}) {
  return (
    <Row gutter={[32, 32]}>
    {comissions.map(comission => (
        <Col 
          key={comission.id} 
          sm={{ span: 24 }} 
          md={{ span: 12 }}
        >
          <ComissionItem comission={comission}/>
        </Col>
      ))}
    </Row>
  );
}