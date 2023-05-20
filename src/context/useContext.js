import React,{useState,useContext, useEffect} from 'react'
import { createContext } from 'react'

const getBookmark = () =>{
    return JSON.parse(localStorage.getItem('bookmark'))
}
const AppContext = React.createContext()


export const AppProvider = ({children})=>{
    const [menutoggle, setMenuToggle] = useState(false);
    const [searchtoggle, setSearchToggle] = useState(false);
    const [signintoggle, setSigninToggle] = useState(false);
    const [searchterm, setSearchTerm ] = useState('');
    const [current, setCurrent] = useState(0);
    const [register, setRegister] = useState(true);
    const [bookmark, setBookmark] = useState([getBookmark]);

    
    const addToBookmark = (data)=> {

        const index = bookmark.findIndex(item => item.id === data.id) 

        if (index){
            setBookmark((bookmark) => [ ...bookmark, data ])
        }
    }

    const removeFromBookmark = (data) => {

        const index = bookmark.filter(item => item.id !== data.id) 
        setBookmark(index)
    }

        const isBookmarkItem = (data) => {

        const index = bookmark.findIndex(item => item.id === data.id) 
        if (index < 0) {
            return false
        }
        return true
    }



    useEffect(()=>{
       
       signintoggle? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
       

     },[signintoggle])

    useEffect(()=>{
       
       searchtoggle? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
       

     },[searchtoggle])

    useEffect(()=>{
       
        localStorage.setItem('bookmark', JSON.stringify(bookmark))
    
       

     },[bookmark])

   return(
    <AppContext.Provider value={{
        searchterm, setSearchTerm, current, setCurrent, register, setRegister, bookmark, menutoggle, setMenuToggle,searchtoggle, setSearchToggle, signintoggle, setSigninToggle , addToBookmark, isBookmarkItem,removeFromBookmark
        }}>
        {children}
    </AppContext.Provider>
   )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}