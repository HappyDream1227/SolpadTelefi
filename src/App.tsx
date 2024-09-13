import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import { useState, createContext } from 'react'

interface MainContextProps {
  search : {
    search : string,
    handleSearch : Function,
  }
}

export const MainContext = createContext<MainContextProps>({
  search : {
    search : '',
    handleSearch : () => {}
  }
})

export default function App () {
  const [search, SetSearch] = useState('')

  const handleSearch = (v : string) => {
    SetSearch(v)
  }

  return (
    <MainContext.Provider value = {{
      search : {
        search,
        handleSearch,
      }
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  )
}