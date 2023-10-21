import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCountry } from "../../redux/actions";

const SearchBar= () => {
    const [name, setName] = useState('');
    const error = useSelector(state => state.error);

    const dispatch = useDispatch();
    const handleChange = (event) => {
        const { value } = event.target;
        console.log(value)
        if(name)dispatch(searchCountry(name))
        setName(value);
    }
    
    const onSearch = () => {
        console.log(name)
        if(name)dispatch(searchCountry(name))
    }

    return (
        <div>
            <input type="text" name="name" placeholder="Name Country" value={name} onChange={handleChange} />
            <button disabled= {!name|| !error} onClick={onSearch}>Search Country</button>
            {name && !error && <p>No se encontró país con ese nombre</p>}
            
        </div>
    );
}
export default SearchBar;