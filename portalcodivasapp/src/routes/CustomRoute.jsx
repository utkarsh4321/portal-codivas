import { Route } from 'react-router';
const CustomRoute = (props) => { // Roles
    const {
        pages: Pages,
        root,
        isPrivate //  bolean
    } = props;
    return (
        <>
            {Pages.map(Page => (
                <Route exact path={root + Page.uri}>
                    <Page.Component />
                </Route>
            ))}
        </>
    )
}

export default CustomRoute;