import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getCharacter } from 'rickmortyapi'
import loading from "../assets/images/giphy.gif";

function CharactersDetailScreen() {
    let { characterId } = useParams()
		const [char, setChar] = useState(null)

    useEffect(() => {
        getCharacter(Number(characterId))
					.then((data) => setChar(data))
					.catch((error) => console.error(error))
    }, [characterId])
		console.log(`${characterId}`)
		console.log(char?.data)
  return char ? (
    <div>
      <Link to="/characters"><button className='btn btn-info btn-sm font-face mt-5 ms-3'>Characters</button></Link>
			<h3 className='text-light'>{char?.data.name}</h3>
			{char?.data?.status === "Alive" && <div className='text-light'><b> {char?.data?.species.toLowerCase( )} - {char?.data?.status.toLowerCase()}</b>🟢</div>}
			{char?.data?.status === "Dead" && <div className='text-light'><b>{char?.data?.species.toLowerCase( )} - {char?.data?.status.toLowerCase()}</b>🔴</div>}
			{char?.data?.status === "unknown" && <div className='text-light'><b> {char?.data?.species.toLowerCase( )} - {char?.data?.status.toLowerCase()}</b>⚫</div>}

    </div>
  ) : (
		<>
			<Link to="/characters"><button className='btn btn-info btn-sm font-face mt-5 ms-3'>Go back</button></Link>
			<div className='d-flex justify-content-center mt-5 pt-5'>
				<img src={loading} alt="loading"></img>
			</div>
		</>
	)
}

export default CharactersDetailScreen