import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import '../Form/Mui.css'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function valuetext(value) {
    return `${value}°C`;
  }


export const MuiComponents = () => {
const [value, setValue] = React.useState(30);
const [devices, setDevices] = React.useState(() => ['phone']);



const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log('>>>>>',newValue);
    };
    const [element, setElement] = React.useState([20, 37]);

    const handle = (event, newValue) => {
      setElement(newValue);
      console.log('range',newValue);
    };

    const handleDevices = (event, newDevices) => {
      if (newDevices.length) {
        setDevices(newDevices);
        console.log(newDevices,'Device');
      }
    };



    return (
        <>
        <div>
        {/* Slider start*/}
        <Box sx={{ width: 200, mx:'auto' }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
        </Box>
        {/* Slider end*/}

        {/* Range start*/}
        <Box sx={{ width: 300, mx:'auto' }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={element}
          onChange={handle}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      {/* Range End*/}

      {/* Toggle start*/}
      <Stack direction="row" spacing={4}>

      <ToggleButtonGroup
        value={devices}
        onChange={handleDevices}
        aria-label="device"
      >
        <ToggleButton value="laptop" aria-label="laptop">
          <LaptopIcon />
        </ToggleButton>
        <ToggleButton value="tv" aria-label="tv">
          <TvIcon />
        </ToggleButton>
        <ToggleButton value="phone" aria-label="phone">
          <PhoneAndroidIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      </Stack>
      {/* Toggle End*/}
        </div>
      </>
  )
}





