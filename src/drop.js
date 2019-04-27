https://stackoverflow.com/questions/51149598/call-function-on-button-click-reactjs

export default class ResourceLog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            streamData: {},
            streamMessage : "",
            interval : 5000,
            showDatePicker:false,
            selectionConfigs : [],
            params : {},
            flag: true
        }
    }
    streamLogs = ()=> {
           if(this.props.resource.status === "ACTIVE"){
                this.setState({""})
                   axios.instance.get("")
                   .then((resp) => {
                       this.setState({"", show: "abc"})
                   }).catch(err => {       
                       this.setState({""})
                   })              
           }else{
                this.setState({""})              
           }
    }
    onCloud = () =>{
    
        let endTime = this.state.params.endTime;
        if(endTime === -1){
            endTime = new Date().getTime();
        }
        let startTime = this.state.params.startTime;
        if(startTime === -1){
            startTime = endTime - this.state.params.diff*1000;
        }
    
        let filter = this.state.params.duration;
        if(filter === -1){
            filter = "";
        }
    
        let params = Object.assign({},{startTime:startTime,endTime:endTime,filter:period});
    
    getBody = () => {
        if(this.state.show == "abc"){
            return (
                <div>
                    <div>
                        <h3>Logs
                            <span><i onClick={this.streamLogs}></i></span>
                        </h3>
                    </div>
                    <div className="clearfix"/>
                    <div>
                        <div>{this.state.streamMessage}</div>
                        {mapObject(this.state.streamData,(k,v) => <div><pre>{v.join("\n")}</pre></div>)}
                    </div>
                </div>
            );
        }else if(this.state.show == "xyz"){
            return(
                <div>
                    <div>
                        <span onClick={() =>this.updateStatsConf(this.state.selectionConfigs[0])}>{this.state.selectionConfigs[0].name}</span>
                        <span onClick={() =>this.updateStatsConf(this.state.selectionConfigs[1])}>{this.state.selectionConfigs[1].name}</span>
                        <span onClick={() =>this.updateStatsConf(this.state.selectionConfigs[2])}>{this.state.selectionConfigs[2].name}</span>
                    </div>
    
                <div>
                    <div>
                        <div>{this.state.streamMessage}</div>
                        {mapObject(this.state.streamData,(k,v) => <div><pre>{v.join("\n")}</pre></div>)}
                    </div>
                </div>
            </div>
    
            );
        }else{
            <h1> please click a BUtton </h1>
        }
    }
    render(){   
        return (
            <div>
                <button onClick={this.streamLogs}>abc</button>
                <button onClick={this.onCloud}>xyz</button>
                {this.getBody()}
            </div>
        )
    }
        // abc = () =>{
    
        // }
        // xyz = () =>{
    
        // }
    }