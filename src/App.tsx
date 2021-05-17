import React from 'react';
import SRouter from "./SRouter";
import {Layout} from "./components";
import {BrowserRouter} from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'
import {GlobalState} from "./context";

interface Props {
}

const App: React.FC<Props> = () => {

    return (
        <GlobalState>
            <BrowserRouter>
                <Layout>
                    <SRouter/>
                </Layout>
            </BrowserRouter>
        </GlobalState>
    );
}

export default App;
