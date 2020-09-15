import React, { Suspense } from 'react'
import { BroweserRouter as Router, Route, Switch } from 'react-router'

import routes from '../../routes'

const Layout = (props) => {
    return (
        <>
            <Router>
                <Suspense fallback="Loader...">
                    <Switch>
                        {
                            routes.map((route, i) => {
                                return (
                                    <Route component={route.component}
                                    exact={route.exact}
                                    path={route.path}
                                    key={route.name + `_${i}`}
                                    />
                                )
                            })
                        }
                    </Switch>
                </Suspense>
            </Router>
        </>
    )
}

export default Layout