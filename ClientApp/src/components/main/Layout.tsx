import * as React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps> {

    public constructor(props: LayoutProps) {
        super(props);
    }

    public render() {
        return <div className='content'>
            <Header />
            <main>
                {this.props.children}
            </main>
            <Footer />
        </div>;
    }
}