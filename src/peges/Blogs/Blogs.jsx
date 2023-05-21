import { useEffect } from 'react'

const Blogs = () => {
   useEffect(() => {
      document.title = 'Creative Toy Store | Blog'
   }, [])
   return (
      <div className="my-12">
         <div className="px-6">
            <h2 className="text-3xl font-bold">
               1. What is an access token and refresh token? How do they work
               and where should we store them on the client-side?
            </h2>
            <div className="my-4">
               <p>
                  <span className="font-bold text-xl">Answer:</span>
                  <span className="underline">Access token:</span>- It contains
                  all the information the server needs to know if the user /
                  device can access the resource you are requesting or not. They
                  are usually expired tokens with a short validity period.
                  Access tokens are used in token-based authentication to allow
                  an application to access an API. The application receives an
                  access token after a user successfully authenticates and
                  authorizes access, then passes the access token as a
                  credential when it calls the target API{' '}
               </p>
               <p>
                  <span className="underline">Refresh token:</span>- A refresh
                  token just helps you re-validate a user without them having to
                  re-enter their login credentials multiple times.Refresh tokens
                  have longer expiration times than access tokens and allow you
                  to use shorter lifetimes for access tokens without having to
                  request user credentials multiple times. When an
                  authentication server issues an access token to a user, it
                  also issues a valid refresh token.
               </p>
               <p>
                  <span className="underline">How do they work:</span>-
                  Normally, a user with an access token can only access
                  protected resources or perform specific actions for a set
                  period of time, which reduces the risk of the token being
                  compromised. A refresh token allows the user to get a new
                  access token without needing to log in again.
               </p>
               <p>
                  <span className="underline">Where should we store them:</span>
                  - Access token and refresh token should not be stored in the
                  local/session storage, because they are not a place for any
                  sensitive data. Hence I would store the access token in a
                  httpOnly cookie even though there is CSRF and I need it for
                  most of my requests to the Resource Server anyway. But what
                  about the refresh token? I cannot store it in a cookie,
                  because it would be send with every request to my Resource
                  Server as well which makes it vulnerable to CSRF too and it
                  would send expose both access/refresh token with an identical
                  attack vector.
               </p>
            </div>
         </div>
         <div className="px-6">
            <h2 className="text-3xl font-bold">
               2. Compare SQL and NoSQL databases?
            </h2>
            <p>
               <span className="font-bold text-xl">Answer:</span>SQL databases
               are vertically scalable, while NoSQL databases are horizontally
               scalable. SQL databases are table-based, while NoSQL databases
               are document, key-value, graph, or wide-column stores. SQL
               databases are better for multi-row transactions, while NoSQL is
               better for unstructured data like documents or JSON
            </p>
         </div>
         <div className="px-6 py-9">
            <h2 className="text-3xl font-bold">
               3. What is Express? What is NestJS?
            </h2>
            <p>
               <span className="font-bold text-xl">Answer:</span> Express is a
               minimal and flexible Node.js framework that provides a robust set
               of features for building web and mobile applications. It is a
               lightweight and unopinionated framework that allows developers to
               create applications with their preferred tools and libraries.
               Express is popular among developers due to its simplicity and
               ease of use.
            </p>
            <p>
               NestJS is a progressive Node.js framework for building efficient,
               scalable, and reliable server-side applications. It is built on
               top of Express.js and provides a more structured way of building
               applications with TypeScript. NestJS uses a modular architecture,
               making it easy to maintain and scale applications as they grow.
            </p>
         </div>
         <div className="px-6">
            <h2 className="text-3xl font-bold">
               4. What is MongoDB aggregate and how does it work
            </h2>
            <p>
               <span className="font-bold text-xl">Answer:</span>-Aggregation is
               a way of processing a large number of documents in a collection
               by means of passing them through different stages. The stages
               make up what is known as a pipeline. The stages in a pipeline can
               filter, sort, group, reshape and modify documents that pass
               through the pipeline.Data aggregators work by combining atomic
               data from multiple sources, processing the data for new insights
               and presenting the aggregate data in a summary view. Furthermore,
               data aggregators usually provide the ability to track data
               lineage and can trace back to the underlying atomic data that was
               aggregated.
            </p>
         </div>
      </div>
   )
}

export default Blogs
