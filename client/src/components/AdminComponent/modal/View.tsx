import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FetchResidentById } from '../../../service/api/AdminQuery';
import { useSelector } from 'react-redux';
import { RootState } from '../../../service/state/store';
import TextFieldReadOnlyUI from '../../UI/TextFieldReadOnlyUI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh', // Set the maximum height of the modal
  overflowY: 'auto', // Add a scrollbar when content exceeds the height
  backgroundColor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  padding: '40px',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  justifyItem: 'center',

  '@media (max-width: 800px)': {
    width: '90%',
    padding: '36px 26px',
  },
};

type CPProps = {
  id: number | null;
  openView: boolean;
  setOpenView: React.Dispatch<React.SetStateAction<boolean>>;
  setidView: React.Dispatch<React.SetStateAction<number | null>>;
};

const View: React.FC<CPProps> = ({ openView, setOpenView, id, setidView }) => {
  const { adminInfo } = useSelector((state: RootState) => state.admin);
  const token = adminInfo.token;

  const { data, isLoading } = FetchResidentById({ id, token });

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data[0]?.email)
  const handleClose = () => {
    setOpenView(false);
    setidView(null);
  };

  return (
    <div>
      <Modal
        onClose={handleClose}
        open={openView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextFieldReadOnlyUI label="First Name" value={data[0]?.first_name} />
          <TextFieldReadOnlyUI label="Last Name" value={data[0]?.last_name} />
          <TextFieldReadOnlyUI label="Email" value={data[0]?.email} />
          <TextFieldReadOnlyUI
            label="Address"
            value={data[0]?.address || 'Not Updated'}
          />
          <TextFieldReadOnlyUI label="Age" value={data[0]?.age ||'Not Updated'} />
          <TextFieldReadOnlyUI
            label="Birth Place"
            value={data[0]?.birth_place || 'Not Updated'}
          />
          <TextFieldReadOnlyUI
            label="Birth Day"
            value={data[0]?.birth_date ||'Not Updated' }
          />
          <button onClick={handleClose}>close</button>
        </Box>
      </Modal>
    </div>
  );
};

export default View;
