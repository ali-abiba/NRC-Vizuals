import Layout from "../components/layout";

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password:''};

        this.handleChange = this.handleChange.bind(this);
        this.getData = this.getData.bind(this);

    }

    render() {
        return (
            <Layout>
                <h2>NRC Data</h2>
                <p>This app creates several visualizations from your running data from the Nike Run Club app.</p>
                <label>Nike Username
                <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
                </label>
                <label>Password
                <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                </label>
                <button onClick={() => this.getData()}>Get data</button>
            </Layout>
        )
    };

    getData() {
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
}
