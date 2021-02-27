import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = () =>{
    //     // setcategories(newCategory);
    //     setcategories(cats =>[...cats, 'Arale'])
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}>    
                        </GifGrid>
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
