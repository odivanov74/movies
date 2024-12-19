import './Preloader.css';

function Preloader()
{
    return(
        <>
            <div className='radio'>
                    <div>
                        <input  type="radio" 
                                name="type" 
                                data-type="all"
                                id="all"/>
                                <label htmlFor="all"><span>All</span></label>
                    </div>
                    <div>
                        <input  type="radio" 
                                name="type" 
                                data-type="movie"
                                id="movie"/>
                                <label htmlFor="movie"><span>Movies</span></label>
                    </div>
                    <div>
                        <input  type="radio" 
                                name="type" 
                                data-type="series"                                 
                                id="series"/>
                                <label htmlFor="series"><span>Television series</span></label>
                    </div>
                    <div>
                        <input  type="radio" 
                                name="type" 
                                data-type="game"                                 
                                id="game"/>
                                <label htmlFor="game"><span>Games</span></label>
                    </div>                    
                </div>

                <div className='search'>
                    <input                     
                        type="search"
                        placeholder="search"/>
                    <button className='btn'>
                        Search
                    </button>                    
                </div> 
                <div className='navigator'>
                    <div className='main_buttons'>
                        <button className='btn' >First</button>
                        <button className='btn' >Previous</button>
                    </div>
                    

                    <div className="items">
                    
                    </div>
                    <div className='main_buttons'>
                        <button className='btn' >Next</button>
                        <button className='btn' >Last</button>
                    </div>
                    
                </div>  
            <div className ='page'>
                {console.log("preloader")}
                <h2>Loading data...</h2>
                <div className="lds-facebook"><div></div><div></div><div></div></div>
            </div> 
        </>
               
    )
}
export default Preloader;