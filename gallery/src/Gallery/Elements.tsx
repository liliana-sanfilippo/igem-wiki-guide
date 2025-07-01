import { Card } from "react-bootstrap";
import {GuideFace} from "./guideinput-interface";

export function Gui({liste}: {liste: Array<GuideFace>}){
    let rows = [];
    for (let i = 0; i < liste.length; i++) {
        let f = <span>Download</span>;
        let cla = "filterable guide-box all show ";
        for (let j = 0; j < liste[i].tags.length; j++){
            cla += " " + liste[i].tags[j]
        }
        let num = ((liste[i].width ?? 1) * 18) + 'em';
        rows.push(
        <Card style={{width: num}} className={cla}>
                    <Card.Body>
                    <Card.Title>{liste[i].title}  <b></b>
                         </Card.Title>
                <Card.Text>
                    <div >
                        {" by"}
                        <span property="author"> <i>{liste[i].author}</i> </span> <span property="datePublished" content={liste[i].year}>{"(" + liste[i].year + ")"}</span>

                        <div>{f} <small> <a  href={liste[i].url} property="url">here</a></small> </div>
                        <div> <small> {liste[i].teampage && (<a href={liste[i].teampage}> {liste[i].teampage}</a>)}</small> </div>
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={liste[i].url} />
        </Card>
        );
    }
    return <>{rows}</>;
}


