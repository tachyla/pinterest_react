import React from 'react';

export default function SearchWidget(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="search">Search</label>&emsp;
            <input type="search" id="search" name="search" placeholder="cute" 
                onChange={e => props.onChange(e.target.value)} />
        </form>
    );
}
