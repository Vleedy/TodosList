import * as React from 'react';
import { FC } from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

interface SearchProps {
    buttonVariant: string,
    setButtonVariant: Function,
    searchValue: string,
    setSearchValue: Function
}

const SearchBlock: FC<SearchProps> = ({buttonVariant, setButtonVariant, searchValue, setSearchValue}) => {
  return (
    <div className="search">
          <div className='search__input'>
            <div>
              <SearchIcon sx={{paddingTop: '8px', paddingLeft: '5px'}} color='primary'/>
            </div>
            <InputBase
              sx={{paddingLeft: '5px'}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchValue}
              onChange={(e)=>setSearchValue(e.target.value)}
            />
          </div>
          <div className="search__buttons">
            <Button sx={{'@media (max-width: 640px)': {fontSize: '11px'}}}
            size='small' variant={buttonVariant==='name'? 'contained' : 'outlined'} onClick={()=>setButtonVariant('name')}>По названию</Button>
            <Button 
            sx={{'@media (max-width: 640px)': {fontSize: '11px'}}}
            size='small' variant={buttonVariant==='description'? 'contained' : 'outlined'} onClick={()=>setButtonVariant('description')}>По описанию</Button>
            <Button 
            sx={{'@media (max-width: 640px)': {fontSize: '11px'}}}
            size='small' variant={buttonVariant==='date'? 'contained' : 'outlined'} onClick={()=>setButtonVariant('date')}>По дате</Button>
          </div>
    </div>
  );
}

export default SearchBlock;