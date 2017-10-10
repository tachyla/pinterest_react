import React from 'react';

export default function SearchWidget(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="search">Filter</label>&emsp;
            <input type="search" id="filter" name="filter" placeholder="black" 
                onChange={e => props.onChange(e.target.value)} />
        </form>
    );
}
