// Nested Routes
// we are talking about the
// 1. nested pieces of the url. e.g /van and /van/van-id or van-name
// 2. shared UI
// NESTING ROUTE
// example <Route></Route>
// why and when you will want to use nesting routing on your page.
//when you want to keep some of the display on your page and you still  want to display more.

// relative paths
// instead of using slashes in the nested route we can use relative path technique.
{/* <Route path = "/host/reviews" element = {<Reviews/>}/> instead of writing like this */}
{/* <Route path = "reviews" element = {<Reviews/>}/> using relative path it can be achieved like this */}

// index routes
// if you have a component to be displayed in the outlet of the layout component but you want it to be on the same route as the path of the layout component we will index routes./ we will replace path with index

// what is the reason to use nested route
//  if you want to display component that share a common layout/ UI

// what is a layout route
// its the  actual route that host or contains shared ui portion of the nested route.

//Navlink
// same as Link in route in that the style prop and className prop can take function as its value

// happy path va sad path
// data layer APIs

// Happy path
// assumes everthing goes according to plan exactly as we hpe it does.
//

// sad path
// forces us to imagine what could go wrong and plan accordingly.
// handle things like error handling, loading states, form validation

// loaders
// loaders in react routers
// came from remix
// using loader to fetch data.

// steps of using the loader.
// export the loader functionn from the page that fetches the data that page will be needed.
// pass the loader prop to the route and pass the loader function.
// use useLoaderData hook to get the data.
// NB BrowserRouter are specific to the non data layer api


// LOADER QUIZ
// when does the code in the loader function run?
// it runs before the component load and the routes for that component change happens

// what are the benefits of using data loader function?
// we dont have to write a lengthy useEffect
// we dont need to worry about handling the loading state in our routes
// we dont need to handle the error state in the component


// protected routes
// a pattern you can use to protech certain routes.
// allow only logged in user to access their information
// stop the data fetching of sensitive information.

// to create protected routes when we are using loaders we  will use a function called redirect()
// when the current user isn't logged in redirect to the login page when protected route loader run, before any route rendering happen.
// downside hs to happen in every protected routes

// send logging message prompt to the logging page
//We will use search params
//consuming message from the search url
// we will use useSearchParams hook
// example const [searchParams, setSearchParams  = useSearchParams();
// console.log(searchParams.get("message"));

// we can also use loader to get the search params message.
// when using layout component instead of loaders to check user login in we can use the state to pass the message down
// for example state={{message: "You must log in first"}}


// consuming message from the search param on login page.
//

// forms in react.
// useNavigate() hook
// const navigate = useNavigate()
// navigate('/host', {replace: true})


// react form component
// here we will use the component <Form></Form> from the react router dom

// your browser keep track of the location you have visited

// redirectTo
//

// the use of deffered data.
// We will learn about promises and defer()
//defer() wont stop the user interface from loading/ wont stop the component from being rendered before even the data is being fetched.
// defer expect an object as its arguement
//Await component from react router - allows us to surround the code we will be waiting when that component surronded will be first rendered
// in await component we will pass the prop resolve where we will pass our promise
// inside the await component we will have javascript like code
//  example >>>>>>
//  <await> {loadingData => {
        //  const test one = you code goes here
        // return(
        //    Your code goes here
        // )
// }}

// react suspend component.
//Suspense component
// example <React.Suspend fallback></React.Suspend>
// fallback gives react the ability to render a something as data is being fetched
//the suspense component its from React