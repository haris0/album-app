import React, { useState, useEffect } from 'react'
import './MainPage.scss'
import {HTTP, albums, users} from '../../services'
import {albumType, userType} from '../../type'
import Header from '../Reuseable/Header'
import {Container,
        Form,} from 'react-bootstrap'
import AlbumCardSkeleton from './child/AlbumCardSkeleton'
import AlbumCard from './child/AlbumCard'
import ErrorText from '../Reuseable/ErrorText'

const MainPage = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [dataAlbums, setDataAlbums] = useState<albumType[]>([])
  const [filteredAlbum, setFilteredAlbum] = useState<albumType[]>([]);
  const [error, setError] = useState<any>()
  const [keyWord, setKeyword] = useState<string>("");
  const [filterType, setFilterType] = useState<string>('album');

  const handleChange = (event:React.ChangeEvent<{ value: string }>) => {
    let val = event.target.value
    setKeyword(val);
    if (val === "") {
      setFilteredAlbum(dataAlbums);
    } else if(filterType === 'album') {
      setFilteredAlbum(dataAlbums.filter((album) => 
        album.title.includes(val.toLocaleLowerCase())
      ))
    } else{
      setFilteredAlbum(dataAlbums.filter((album) => 
        album.userName.includes(val.toLocaleLowerCase())
      ))
    }
  };

  useEffect(()=>{
    const getAlbumUser = async() =>{
      setLoading(true)
      try {
        let [responseAlbum, responseUser] = await Promise.all([
           HTTP.get(albums),
           HTTP.get(users)
        ])
        responseAlbum.data.map((album:albumType) => {
          album.userName = responseUser.data[album.userId-1].name.toLocaleLowerCase()
        })
        setDataAlbums(responseAlbum.data)
        setFilteredAlbum(responseAlbum.data)
        console.log(responseAlbum)
        console.log(responseUser)
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }
    getAlbumUser()
  }, [])

  return (
    <div className='main-page'>
      <Header title='Album App'/>
      <Container className='margin'>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput">
            <Form.Control 
              type="text" 
              placeholder="Filter Album"
              value={keyWord}
              onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlRadio">
            <Form.Check 
              inline 
              label="By album name" 
              value="album"
              checked={filterType === 'album'}
              type='radio' 
              name='fileterType' 
              onClick={() => setFilterType('album')} />
            <Form.Check 
              inline 
              label="By user name"
              value="user"
              checked={filterType === 'user'}
              type='radio' 
              name='fileterType'
              onClick={() => setFilterType('user')} />
          </Form.Group>
        </Form>
        {loading && 
          <div className="display-grid">
            <AlbumCardSkeleton/>
          </div>
        }
        {!loading && filteredAlbum &&
          <div className="display-grid">
          {filteredAlbum.map(album => (
            <AlbumCard
              key={album.id}
              albumName={album.title}
              userName={album.userName}/>
          ))}
          </div>
        }
        {!loading && error &&
          <ErrorText/>
        }
      </Container>
    </div>
  )
}

export default MainPage
