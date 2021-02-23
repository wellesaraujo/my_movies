import React, { useEffect, useState } from 'react';
import { getMovies, getMoviesBySearch} from '../../api/movies';


const Home = () => {
    //[MOVIES é variavel, SETMOVIES a função que atualiza a variavel]
    const [movies, setMovies] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        getMovies().then(response => {
            setMovies(response)
        })
    }, []) // [] faz com que useEffect seja chamado apenas 1 vez ao abrir a pagina

    const searchRequest = () =>{
        const hasSearch = searchField !=='';
         
        hasSearch && getMoviesBySearch(searchField).then(response =>{
            setMovies(response)
        })

        !hasSearch && getMovies().then(response => {
            setMovies(response)
        })
    }


    return <div className="home">
        <div className="containerSearch">
            <input 
                data-testid="input-search"
                type="text" 
                value={searchField} 
                onChange={(e)=>setSearchField(e.target.value)}
            />
            <button 
                data-testid="request-search"
                onClick={()=>searchRequest()}>
                Pesquisar
            </button>
        </div>
        {   
            //INTERROGAÇÃO verifica se o atributo existe para nao chamar nenhum campo null e quebrar a a aplicacao
            // a chamada antes do && é pra verificar se a imagem.medium existe para nao exibir conteudo quebrado
            //pois algumas series existem mas nao possuem imagem
            movies?.map(movie => {
                return movie?.show?.image?.medium && 
                <a href={`details/${movie.show.id}`}>
                    <img  src={movie?.show?.image?.medium} alt="description" data-testid={`${movie.show.id}`}/>
                </a>//ir para details
            })
        }
    </div>
}

export default Home; 