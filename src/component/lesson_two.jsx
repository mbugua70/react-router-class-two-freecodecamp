// BrowserRouter router is a context provider and it provide the context of ability for routing to all the children in app you will use it.
// a route is part of url that specify where in your website you are. example.com/about page.

const ChallengeOne = () => {
    return (
        <>
        <div className="test_one">
            <p>Hello world, learning React Router</p>
        </div>
        </>
     );
}

export default ChallengeOne;

// Route
// it takes the following :
// 1. path - this one specify the path to which the route is example path="/about"

// Link component
// intercept to avoid page refresh which might cause the state to misbehave.
// act like the anchor tag <Link to=""></Link> instead of of an href we will 'to'.
