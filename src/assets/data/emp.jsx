import React, { useEffect } from 'react';
import useFetch from '../../api/useFetch'; // Adjust the import based on your file structure

const ExampleComponent = () => {
    const { data, error, loading, get } = useFetch(    "https://jsonplaceholder.typicode.com"
    );

    useEffect(() => {
        get('/posts'); // Fetch data on component mount
    }, [get]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Fetched Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default ExampleComponent;