import { useState } from 'react';
import ToDoItem from './ToDoItem';
import SearchBlock from './SearchBlock';

const MyToDos = () => {
    const [buttonVariant, setButtonVariant] = useState<string>('name');
    const [searchValue, setSearchValue] = useState<string>('');
    return (
        <div className='myToDos-Tab'>
            <ToDoItem 
            buttonVariant={buttonVariant}
            searchValue={searchValue}
            />
            <SearchBlock 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            buttonVariant={buttonVariant} 
            setButtonVariant={setButtonVariant}
            />
        </div>
    );
};

export default MyToDos;