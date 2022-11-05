import {Card } from "react-bootstrap";
import {Link} from "react-router-dom";

export const Card = (props) => {

    return (
        <Card className="my-3 rounded">
        <Card.Img src={props.fotoLink} height={250} width={250} />
        <Card.Body>
          <Card.Title>{props.nome}</Card.Title>
          <Card.Text>{props.valor}</Card.Text>
          {/* <Link to={`/produto/${props.id}`}>Detalhe</Link> */}
        </Card.Body>
      </Card>
    );

}