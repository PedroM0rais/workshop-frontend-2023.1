import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Galeria() {

    const [character, setCharacter] = useState([])

    useEffect(() => {
        async function getCharacter() {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()

            setCharacter(data)
        }

        getCharacter()
    }, [])

    console.log(Galeria)

    return (
        <>
            <h1>Personagens</h1>
            <ul>
                {
                    character.length < 1 ? <span>Carregando...</span> :
                    character.map((character) => {
                        return (
                           
                            <li key={character._id}>
                                <Link to={`components/${character._id}`}>
                                  {character.name}
                                </Link>  
                            </li>
                            
                            )
                    })
                }   
            </ul>
        </>
    )
 }


    

export default Galeria