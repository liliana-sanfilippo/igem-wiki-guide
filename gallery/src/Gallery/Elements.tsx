import {GuideFace} from "./guideinput-interface";

export function Gui({liste}: {liste: Array<GuideFace>}){
    let rows = [];
    for (let i = 0; i < liste.length; i++) {
        let f = <span>Download</span>;
        let cla = "filterable guide-box all show ";
        for (let j = 0; j < liste[i].tags.length; j++){
            cla += " " + liste[i].tags[j]
        }
        rows.push(
            <div className={cla} typeof={liste[i].type}>
                <div className="row"><img src={liste[i].url}/></div>
                <br/>
                <div>
                    <b>{liste[i].title}</b>
                    {" by"}
                    <span property="author"> <i>{liste[i].author}</i> </span> <span property="datePublished" content={liste[i].year}>{"(" + liste[i].year + ")"}</span>
                </div>
                <div>{f} <small> <a  href={liste[i].url} property="url">here</a></small> </div>
               <div> <small> {liste[i].teampage && (<a href={liste[i].teampage}> {liste[i].teampage}</a>)}</small> </div>
            </div>
        );
    }
    return <>{rows}</>;
}