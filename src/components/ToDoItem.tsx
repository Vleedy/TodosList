import {FC} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector } from '../hooks/redux';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';
import filterToDo from '../service/filterFunction';
import { useAppDispatch } from '../hooks/redux';
import { toDoSlice } from '../store/reducers/ToDoReducer';

interface Props {
  buttonVariant: string,
  searchValue: string
}

const ToDoItem: FC<Props> = ({buttonVariant, searchValue}) => {
    const {todos} = useAppSelector(state =>state.ToDoReducers);
    
    const dispatch = useAppDispatch();
    const {completeToDo} = toDoSlice.actions;
    const {deleteToDo} = toDoSlice.actions;

    const onClickDone = (id:number, succes:boolean) => {
        dispatch(completeToDo({id, succes}));
    }

    const onClickDelete = (id:number) => {
      dispatch(deleteToDo(id));
  }

  return (
    <div className='myTodos'>
        {todos.length<1?
          <div className='noToDo'>
            <h2>У вас пока нет ни одной задачи</h2>
            <SpeakerNotesOffIcon color='primary' sx={{fontSize: '50px', marginTop: '15px'}}/> 
          </div>
         : 
         filterToDo(todos, buttonVariant, searchValue)?.map((item, i)=>{
            return (
              <Accordion key={i} sx={{margin: '5px 10px'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography component={'span'} sx={{fontSize: '18px', fontWeight: 500, color:'#1976d2'}}>
                    <div className="todoItem">
                      {item.completed && <CheckCircleIcon sx={{marginRight: '10px', color: '#24e745', marginTop: '1px'}}/>} 
                      {item.name}      
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="todoItem__wrapper">
                    <div className="todoItem__text">
                      <h4>{item.description}</h4>
                      <h5>Задача запланирована на <span>{item.date}</span></h5>
                    </div>
                    <div>
                      {item.completed? 
                      <CloseIcon onClick={()=>onClickDone(i, !item.completed)} sx={{cursor: 'pointer', color: '#cf0e0e87', '&:hover': {color: '#cf0e0e'}}}/>
                      :
                      <DoneIcon onClick={()=>onClickDone(i, !item.completed)} sx={{cursor: 'pointer', color: '#24e74587', '&:hover': {color: '#24e745'}}}/>
                      }
                      <DeleteIcon onClick={()=>onClickDelete(i)} sx={{cursor: 'pointer', color: '#cf0e0e87', '&:hover': {color: '#cf0e0e'}}}/>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            )
        })}
    </div>
  );
}

export default ToDoItem;