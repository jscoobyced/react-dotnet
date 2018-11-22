import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/main/Home';
import { Layout } from './components/main/Layout';

export class Page extends React.Component<{}, {}> {

    public constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        const routes = <Layout>
            <Route exact path='/' component={() => <Home />} />
        </Layout>;
        return <BrowserRouter children={routes} basename='/' />;
    }
}