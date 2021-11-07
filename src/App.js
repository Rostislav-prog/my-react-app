import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './routes/Home/index'
import { Profile } from './routes/Profile/index'
import { Chats } from './routes/Chats/index'
import { NotFound } from './routes/NotFound/index'
import { SimpleMenu } from './components/Menu'
import { Provider } from 'react-redux'
import { store } from './store'
import { useParams } from 'react-router'

export const App = () => {
  



  return (
    <Provider store={store}>
      <BrowserRouter>
        <SimpleMenu />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/profile'>
            <Profile />
          </Route>

          <Route path='/chats'>
            <Chats />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
