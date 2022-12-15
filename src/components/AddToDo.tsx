import { useState, FC } from 'react';
import { TextField } from "@mui/material";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {DateTab} from './DateBlock';
import { useAppDispatch } from '../hooks/redux';
import { toDoSlice } from '../store/reducers/ToDoReducer';
import { MYDATE } from '../models/MYDATE';
import { fetchToDo } from '../store/reducers/FetchToDo';


const AddToDo: FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState< MYDATE | null>(null);

    const dispatch = useAppDispatch();
    const {todosAdding} = toDoSlice.actions;

    const onClickAddToDoBtn = () => {
        dispatch(todosAdding({name, description, date: date && `${date.$D}.${date.$M}.${date.$y}`, completed: false}));
    }

    const onClickAddRandomToDo = () => {
        dispatch(fetchToDo());
    }

    return (
        <>
            <Box sx={{ border: 1, borderColor: 'divider', borderRadius: '3px', '@media (max-width: 415px)': {border: 'none'}}}>
                <div className='addToDo'>
                    <div className='addToDo__input'>
                        <h3>Добавьте название</h3>
                        <TextField
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                        <h3>Добавьте описание задачи</h3>
                        <TextField
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        fullWidth
                        multiline
                        rows={5}    
                        />
                    </div>
                    <DateTab date={date} setDate={setDate}/>
                </div>
                <Button
                 disabled = {!name || !description || !date}
                 onClick={()=>onClickAddToDoBtn()}
                 sx={{marginBottom:'30px', 
                 marginLeft: '20px'}} 
                 variant='contained'>Добавить задачу</Button>
            </Box>
            <div className='random-ToDo'>
                <AddCircleIcon color='primary' fontSize='large'/>
                <Button onClick={()=>onClickAddRandomToDo()}>Добавить случайные задачи</Button>
            </div>
        </>
    );
};

export default AddToDo;


