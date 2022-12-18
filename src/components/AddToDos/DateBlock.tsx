import React, {FC} from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers-pro';
import { MYDATE } from '../../models/MYDATE';


interface DateProps {
  date: object | null,
  setDate: Function;
}


export const DateTab: FC<DateProps> = ({date, setDate}) => {

  const handleChange = (newValue: MYDATE | null) => {
    setDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='date'>
        <h3 style={{marginLeft: '24px'}}>Выберите дату</h3>
        <StaticDatePicker 
          value={date} 
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          displayStaticWrapperAs="desktop"
          disablePast 
        />
      </div>
    </LocalizationProvider>
  );
}