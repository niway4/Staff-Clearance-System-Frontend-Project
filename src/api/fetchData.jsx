// 1. Using the Hook for Fetching Data

import React, { useEffect } from 'react';
import useFetch from './useFetch'; // Adjust the import based on your file structure

const ExampleComponent = () => {
    const { data, error, loading, get } = useFetch('https://api.example.com');

    useEffect(() => {
        get('/data'); // Fetch data on component mount
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

// 2. Using the Hook for Posting Data

const PostComponent = () => {
    const { data, error, loading, post } = useFetch('https://api.example.com');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newData = { name: 'John', age: 30 };
        await post('/data', newData);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Post Data</button>
            {data && <div>Data posted successfully!</div>}
        </form>
    );
};

export default PostComponent;

// 3. Using the Hook for Updating Data

const UpdateComponent = () => {
    const { data, error, loading, put } = useFetch('https://api.example.com');

    const handleUpdate = async () => {
        const updatedData = { name: 'Jane', age: 25 };
        await put('/data/1', updatedData); // Assuming the ID is 1
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <button onClick={handleUpdate}>Update Data</button>
            {data && <div>Data updated successfully!</div>}
        </div>
    );
};

export default UpdateComponent;

// 4. Using the Hook for Deleting Data

const DeleteComponent = () => {
    const { data, error, loading, del } = useFetch('https://api.example.com');

    const handleDelete = async () => {
        await del('/data/1'); // Assuming the ID is 1
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <button onClick={handleDelete}>Delete Data</button>
            {data && <div>Data deleted successfully!</div>}
        </div>
    );
};

export default DeleteComponent;


