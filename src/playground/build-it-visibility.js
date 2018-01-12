let visible = false;

const toggleVisibility = () => {
    visible = !visible;
    render();
}
const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visible ? 'Hide' : 'Show'} details</button>
            {
                visible ? <p>Some details</p> : ''
            }
        </div>
    );
    ReactDOM.render(template, appRoot);
}
render();