import React, { useState, useEffect, useRef } from 'react'
import './MainPage.scss'
import {useFetchAlbum} from '../../services'
import {albumType} from '../../types'
import Header from '../Reuseable/Header'
import {Container,
        Form,} from 'react-bootstrap'
import AlbumCardSkeleton from './child/AlbumCardSkeleton'
import AlbumCard from '../Reuseable/AlbumCard'
import ErrorText from '../Reuseable/ErrorText'

const MainPage = () => {

  const isMounted = useRef(true);
  const [filteredAlbum, setFilteredAlbum] = useState<albumType[]>();
  const [keyWord, setKeyword] = useState<string>("");
  const [filterType, setFilterType] = useState<string>('album');
  
  const { loading, data , error } = useFetchAlbum(isMounted);

  const handleChange = (event:React.ChangeEvent<{ value: string }>) => {
    let val = event.target.value
    setKeyword(val);
    if (val === "") {
      setFilteredAlbum(data.data);
    } else if(filterType === 'album') {
      setFilteredAlbum(data.data.filter((album:albumType) => 
        album.title.includes(val.toLocaleLowerCase())
      ))
    } else{
      setFilteredAlbum(data.data.filter((album:albumType) => 
        album.userName.includes(val.toLocaleLowerCase())
      ))
    }
  };

  useEffect(()=>{
    if(data) setFilteredAlbum(data.data)
  },[data])

  return (
    <div className='main-page'>
      <Header/>
      <Container className='margin'>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput">
            <Form.Control 
              type="text" 
              placeholder="Filter Album"
              autoComplete='off'
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
              onChange={() => setFilterType('album')} />
            <Form.Check 
              inline 
              label="By user name"
              value="user"
              checked={filterType === 'user'}
              type='radio' 
              name='fileterType'
              onChange={() => setFilterType('user')} />
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
              id={album.id}
              userId={album.userId}
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
