import * as React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return <header>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>
                        Home
                    </NavLink>
                    </li>
                    <li>
                        <a href='#' className='menu-space'>&nbsp;</a>
                    </li>
                    <li>
                        <a href='#' className='dropdown'>Options</a>
                        <ul>
                            <li>
                                <NavLink to={'/'}>
                                    Home
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            Home
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>;
    }
}