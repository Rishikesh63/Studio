import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { createStore } from "../../actions/userActions";

const CreadStoreForm = () => {
    const { token } = useSelector((state) => state.authReducer);

    const [name, setName] = useState('');
    const [tokenParse, setTokenParse] = useState({});
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createStore({
            'userId': tokenParse?.id,
            'name': name
        }));
    };

    useEffect(() => {
        if (token !== null && token !== 'undefined') {
            setTokenParse(JSON.parse(token));
        }
    }, [token]); // Include 'token' in the dependency array

    return (
        <div className={styles.container}>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Store Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreadStoreForm;
