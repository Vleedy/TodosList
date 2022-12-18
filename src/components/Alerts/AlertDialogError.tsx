import { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { toDoSlice } from '../../store/reducers/ToDoReducer';

export const AlertDialogError: FC = () => {
    const {error} = useAppSelector(state => state.ToDoReducers);
    const {clearError} = toDoSlice.actions;
    const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(clearError());
  };

  return (
    <div>
      <Dialog
        open={error!==''}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{textAlign: 'center'}}>
          <CancelIcon sx={{color: '#cf0e0e', fontSize: '80px', marginTop: '15px'}}/>
          <h2 className='text-Modal'>{error}</h2>
          <h6>Перезагрузите страницу или попробуйте позже</h6>
          <Button onClick={()=> handleCloseModal()} variant="outlined">продолжить</Button>
        </DialogContent>
 
      </Dialog>
    </div>
  );
}