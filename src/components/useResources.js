import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = () => {
    const [resources, setResources] = useState([]);

    const fetchResource = async () => {
        const response = await axios.get(
            `http://10.71.20.83:5000`
        );
        setResources(response.data);
    };

    useEffect(
        () => {
        fetchResource();
        },
        []
    );
    
    return resources
};

export default useResources;
