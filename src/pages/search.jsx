import { useRouter } from "next/router";
import SearchItem from "@/Components/SearchItem";
import useFetchData from "@/useFetchData";
import LangeNavLinks from "@/Components/LargeNavLinks";


const Search = () => {

  const router = useRouter();
  console.log(router);

  const { moviesdata} = useFetchData ('search', 'multi', router.query.keyword)

  return (

       <>        
          <div>
              <SearchItem moviesdata={moviesdata} router={router.query.keyword}/>
          </div>
    
    </>
  )
}

export default Search;