import ModuleList from "../Modules/ModuleList";
import EndBar from "./EndBar";
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return (
      <div  style={{width: "100%", display: "flex"}}>
        <div className="col-8">
        <ModuleList />
        </div>
        <div style={{margin: "0 30px 0 30px", float: "end", width: "100%"}}>
        <EndBar />
        </div>
        

      </div>
    );
  }
  export default Home;