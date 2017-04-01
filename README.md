# mokum
reactjs - mokum

## Router

  We need to install `react-router-dom`

  ## Route
  ```javascript
    <Route strict path='/orders/' component={Order} />
    <Route strict path='/orders/' render={() => <Order />} />
    <Route strict path='/orders/' children={() => <Order />} />
    <Route strict path='/orders/' children={({match) => match && <Order />} />
  ```
  * *exact*: the path must match exactly
  * *strict*: ensure that `/orders` is NOT the same as `/orders/`
  * *render*: works as a regular render method
  * *children*: ALWAYS it's going to run, no matter is there is a match or not
    - `match` is an argument (bool) that is passed to the children is true is the route matched

  ## Link
  * *to*: wherever you want to go
  * *NavLink*: is the same but it allows a `activeClassName`
      - `activeClassName` you can pass a class to be rendered when active
      - `activeStyle` is available for inline styles
      - *isActive* is a function that we can pass and it will run everything a new route is trigger
        `<NavLink isActive={(match, location) => return true }>Home</NavLink>`
        it's expected to return a boolean

    ```javascript
      <Link to='/orders'>Orders</Link>
      <NavLink activeClassName='active' to='/orders'>Orders</NavLink>
    ```

   ## Params
   We can pass and catch params to a route using the `:` into a path definition
   ```javascript
      <Route path='/orders/:id' />
   ```
   This make it *mandatory*, if we need it optional we just add a `?` at the end of it:

     ```javascript
     <Route path='/orders/:id?' render={({match}) => <Order id={match.params.id} />} />
     ```


## Stories
    * Log and user
    * List of Orders
    * Create Orders
    * Delete Orders
    * Edit Order

## Plan
    * Create a View for list (home) (add delete buttom)
    * Create a View for Edit/Create
    * Create Routes
    * Install Json loader for testing with data
    * Create an User Model
    * Create Orders Model
    * Create Redux Store
    * Create Services Layer / Mananing Async Operations (redux-saga)
    * Testing
    * Persist data?? Maybe.


