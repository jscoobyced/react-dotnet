import * as React from 'react';

export class Home extends React.Component {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return <article>
            <h1>Hello World</h1>
            <section>This is the homepage.</section>
        </article>;
    }
}