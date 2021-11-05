import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './routes/Home/index'
import { Profile } from './routes/Profile/index'
import { Chats } from './routes/Chats/index'
import { NotFound } from './routes/NotFound/index'
import { SimpleMenu } from './components/Menu'

export const App = () => {
  return (
    <BrowserRouter>
      <SimpleMenu />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

        <Route exact path='/chats'>
          <Chats />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
