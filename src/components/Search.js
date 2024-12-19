import React from 'react';
import './Search.css';

class Search extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state = 
        {
            search: this.props.lastSearch,
            type: this.props.filter,
            page: this.props.currentPage,            
            totalItems: this.props.totalItems,
            totalPages: Math.ceil(this.props.totalItems / this.state.itemsPerPage),
            lastIndex:  this.props.currentPage + 3 > Math.ceil(this.props.totalItems / this.state.itemsPerPage) ? this.props.totalPages : this.props.currentPage + 4,
            firstIndex: this.props.currentPage - 3 > 1 ? this.props.currentPage - 3 : 1            
        };
        console.log("Search.js constructor");  
    }

    state = 
    {
        search: "",
        type: "all",
        page:0,
        itemsPerPage:10,
        totalItems: 0,
        totalPages:0,
        lastIndex:0,
        firstIndex:0,        
    }

    handleKey = (event) =>
    {        
        if(event.key === 'Enter')
        {
            console.log("Enter was pressed");
            this.props.searchMovie(this.state.search, this.state.type);            
        }        
    }

    handlerFilter = (event) =>
    {
        this.setState
        (
            () => ({type:event.target.dataset.type}),
            () => {this.props.searchMovie(this.state.search, this.state.type, 1);}
        );
    }    

    firstPage = () => 
    {
        this.setState
        (
            () => ({page:1}),
            () => {this.props.searchMovie(this.state.search, this.state.type, this.state.page)}
        )
    }

    prevPage = () => 
    (
        this.setState
        (
            () => (this.state.page > 1 ? {page: this.state.page - 1} : {page:1}),
            () => {this.props.searchMovie(this.state.search, this.state.type, this.state.page)}
        )
    )

    nextPage = () => 
    {            
        this.setState
        (            
            () => ({page: this.state.page < Math.ceil(this.state.totalItems  / 10) ? this.state.page + 1 : this.state.page}),
            () => {this.props.searchMovie(this.state.search, this.state.type, this.state.page)}
        );           
    }

    lastPage = () => 
        {
            this.setState
            (                
                () => ({page: Math.ceil(this.state.totalItems  / 10)}),
                () => {this.props.searchMovie(this.state.search, this.state.type, this.state.page)}
            )
        }

    setPage = (pageNumber) => 
    {
        this.setState
        (            
            () => ({page:pageNumber}),
            () => (this.props.searchMovie(this.state.search, this.state.type, this.state.page))
        )
    }

    render()
    {
        console.log("search render");        
        let pageNumbers = [];

        for(let i = 0; i <= this.state.totalPages; i++)
        {
            pageNumbers.push(i);
        } 

        return(
            <>
                <div className='radio'>
                    <div>
                        <input  type="radio" 
                                name="type" 
                                data-type="all"
                                checked={this.state.type === 'all'} 
                                onChange={this.handlerFilter} 
                                id="all"/>
                                <label htmlFor="all"><span>All</span></label>
                    </div>
                    <div>
                        <input  type="radio" 
                                name="type" 
                                data-type="movie" 
                                checked={this.state.type === 'movie'} 
                                onChange={this.handlerFilter} 
                                id="movie"/>
                                <label htmlFor="movie"><span>Movies</span></label>
                    </div>
                    <div>
                        <input  type="radio" 
                                name="type" 
                                data-type="series" 
                                checked={this.state.type === 'series'} 
                                onChange={this.handlerFilter} 
                                id="series"/>
                                <label htmlFor="series"><span>Television series</span></label>
                    </div>
                    <div>
                        <input  type="radio" 
                                name="type" 
                                data-type="game" 
                                checked={this.state.type === 'game'} 
                                onChange={this.handlerFilter} 
                                id="game"/>
                                <label htmlFor="game"><span>Games</span></label>
                    </div>                    
                </div>
                <div className='search'>
                    <input                     
                        type="search"
                        placeholder="search"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}/>
                    <button className='btn' 
                        onClick={() => 
                        {
                            this.props.searchMovie(this.state.search, this.state.type, 1);
                            this.setState({totalItems: this.props.totalItems});
                        }}>
                        Search
                    </button>                    
                </div> 
                <div className='navigator'>
                    <div className='main_buttons'>
                        <button className='btn' onClick={this.firstPage}>First</button>
                        <button className='btn' onClick={this.prevPage}>Previous</button>
                    </div>
                    

                    <div className="items">
                    {
                        pageNumbers
                        .slice(this.state.firstIndex, this.state.lastIndex)
                        .map
                        (
                            (el, index) =>
                            {
                                return <button 
                                    className="btn"
                                    style={{background: this.state.page !== el ? "grey" : ""}}
                                    key={index}
                                    onClick={()=>(this.setPage(el))}
                                    >
                                    {el}
                                </button>
                            }
                        )
                    }
                    </div>
                    <div className='main_buttons'>
                        <button className='btn' onClick={this.nextPage}>Next</button>
                        <button className='btn' onClick={this.lastPage}>Last</button>
                    </div>
                    
                </div>  
                {/* <div className="debug">
                    {this.state.page}                    
                    <br/>
                    {this.state.totalItems}
                    <br/>
                    {this.state.totalPages}
                    <br/>
                    {this.state.firstIndex}
                    <br/>
                    {this.state.lastIndex}
                </div>              */}
            </>
        )
    }    
}

export default Search;
