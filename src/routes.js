import Home from './components/Home.vue'
import Input from './components/Input.vue'
import Output from './components/Output.vue'
import Results from './components/Results'

const routes = [
    { path: '/', component: Home },
    { path: '/#/input', component: Input },
    { path: '/#/output', component: Output },
    { path: '/#/results',  component : Results}

];

export default routes;
