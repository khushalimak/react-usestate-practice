import './App.css'

// import Checkbox from './Task/Chackbox'
// import Label from './Task/lebel'
// import HookCustoms from './hook-custum/hook'
// import Counter2 from './hook-custum/usecounter'
// import Home from './pages/home'
// import ParentComponent from './usecallbakeHook/perante'
// import Parent from './usecallbaketask/parent'

// import UseStates from './hookstate/usestate'
// import UseState_2 from './hookstate/usestate2'
// import Hook from './hookstate/usestate3'
import {BrowserRouter , Route , Routes } from 'react-router-dom'


import Home from './pages/home'
import About from './pages/about'
import Product from './pages/product'
import Error404 from './pages/error404'
import Contact from './pages/contact'
import C1 from './pages/c1'
import C2 from './pages/c2'
import C3 from './pages/c3'

 
function App() {

  return (
    <>
      <div>
      
        {/* <Hook/> */}
        {/* <Label/> */}
        {/* <Checkbox/>  */}
        {/* <ParentComponent/> */}               
        {/* <Parent/> */}
        {/* <HookCustoms/> */}
        {/* <Counter2/> */}
        
           
    
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/*" element={<Error404/>}></Route>

            <Route path="/contact/" element={<Contact/>}>
            <Route path="c1" element={<C1/>}/>
            <Route path="c2" element={<C2/>}/>
            <Route path="c3" element={<C3/>}/>

            </Route>
          </Routes>
      </BrowserRouter>
    </div>
       
        
        
    </>
  )
}

export default App
