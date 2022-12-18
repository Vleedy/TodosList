import { FC, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Props {
  openModal: boolean;
  setOpenModal: Function;
}

export const AlertDialogSucces: FC<Props> = ({openModal, setOpenModal}) => {
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const closeAuto = () => {
   const timer = setTimeout(()=>setOpenModal(false), 1300);
    openModal===false && clearTimeout(timer);
  };

  useEffect(()=>closeAuto(), [])

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{textAlign: 'center'}}>
          <CheckCircleIcon sx={{color: 'rgb(36, 231, 69)', fontSize: '80px', marginTop: '15px'}}/>
          <h2 className='text-Modal'>Задача успешно добавлена</h2>
        </DialogContent>
 
      </Dialog>
    </div>
  );
}