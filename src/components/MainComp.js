import { Alert, Autocomplete, Avatar, AvatarGroup, Button, Card, Chip, CircularProgress, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, Table, TableBody, TableRow, TextField, Typography } from '@mui/material'
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from '@mui/icons-material/Add';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import DateRangeIcon from '@mui/icons-material/DateRange';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import SendIcon from '@mui/icons-material/Send';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import GrainOutlinedIcon from '@mui/icons-material/GrainOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

function MainComp() {
  const chipData = [
    {
      icon: <BusinessCenterOutlinedIcon />,
      txt: 'New 200'
    },
    {
      icon: <PhoneForwardedIcon />,
      txt: 'Contact 50'
    },
    {
      icon: <DateRangeIcon />,
      txt: 'Schedule 30'
    },
    {
      icon: <HourglassEmptyIcon />,
      txt: 'Estimate 12'
    },
    {
      icon: <DriveFileRenameOutlineIcon />,
      txt: 'Write 15'
    },
    {
      icon: <RefreshIcon />,
      txt: 'Revise 2'
    },
    {
      icon: <SendIcon />,
      txt: 'Send 8'
    },
    {
      icon: <LocalMallOutlinedIcon color='#aaa' />,
      txt: 'Sell 10'
    },
  ]

  const daysData = [
    {
      percent: '40%',
      days: '3 DAYS'
    },
    {
      percent: '70%',
      days: '12 DAYS'
    },
    {
      percent: '30%',
      days: '3 DAYS'
    },
    {
      percent: '40%',
      days: '3 DAYS'
    },
    {
      percent: '20%',
      days: '9 DAYS'
    },
    {
      percent: '20%',
      days: '8 DAYS'
    },
    {
      percent: '10%',
      days: '5 DAYS'
    },
    {
      percent: '10%',
      days: '8 DAYS'
    }
  ]

  const btnData1 = [
    {
      icon: <PauseCircleOutlineOutlinedIcon />,
      txt: 'on hold'
    },
    {
      icon: <DeleteOutlineOutlinedIcon />,
      txt: 'rejected'
    },
    {
      icon: <CheckBoxOutlinedIcon />,
      txt: 'completed (20)'
    },
    {
      icon: <CancelPresentationOutlinedIcon />,
      txt: 'cancled (1)'
    }
  ]
  const btnData2 = [
    {
      icon: <UnfoldMoreOutlinedIcon />,
      txt: 'sort'
    },
    {
      icon: <ImportExportOutlinedIcon />,
      txt: 'filters'
    },
    {
      icon: <DateRangeIcon />,
      txt: 'Sep 17 - Sep 21,2022'
    }
  ]
  const autoData = ['Design', 'Home decorator', 'Bathroom remodeling', 'Home cleaning']
  const tableData = [
    {
      txt1: 'Company Labour Costs',
      txt2: '$6,400.00',
      txt3: '42%'
    },
    {
      txt1: 'Company Material Costs',
      txt2: '$6,400.00',
      txt3: '42%'
    },
    {
      txt1: 'Other Company Costs',
      txt2: '$6,400.00',
      txt3: '42%'
    },
  ]

  const cardData = [
    {
      cardBg: '#fbbead',
      cardTxt: 'March 8,2023 <br/> 8:00 Am <br/> Next follow-up',
      name: 'Leslie Alexander',
      id: '25896162',
      showBtn: 'show less',
      showBtnIcon: <KeyboardArrowUpOutlinedIcon />,
      update: '1s',
      rev: '$90,000.00',
      sale: 75,
    },
    {
      cardBg: '#b3d4ff',
      cardTxt: 'No follow-up scheduled',
      name: 'Esther Howard',
      id: '25896135',
      showBtn: 'show more',
      showBtnIcon: <KeyboardArrowDownIcon />,
      update: '4h',
      rev: '$90,000.00',
      sale: 45,
    },
    {
      cardBg: '#fdf0b3',
      cardTxt: 'No follow-up scheduled',
      name: 'Jerome Bell',
      id: '25896161',
      showBtn: 'show more',
      showBtnIcon: <KeyboardArrowDownIcon />,
      update: '12h',
      rev: '$22,000.00',
      sale: 86,
    },
    {
      cardBg: '#abf5d1',
      cardTxt: 'No follow-up scheduled',
      name: 'Ronald Richards',
      id: '25896181',
      showBtn: 'show more',
      showBtnIcon: <KeyboardArrowDownIcon />,
      update: '22h',
      rev: '$22,000.00',
      sale: 86.5,
    },
  ]
  return (
    <Stack sx={{width: '100%', color: '#223353'}} gap={0.8}>
      <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'center', px: '0.5rem'}}>
        <Stack direction='row' sx={{alignItems: 'center'}}>
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
          <Typography>Lead Pipeline</Typography>
        </Stack>
        <Button variant='contained' startIcon={<AddIcon />} size='small'>Add</Button>
      </Stack>
      
      <Stack direction='row' sx={{px: '2rem'}} gap={1}>
        <Typography variant='h6' sx={{fontWeight: '600'}}>Estimate to Sell</Typography>
        <Button startIcon={<ArrowRightIcon sx={{mr: '-0.8rem'}} fontSize='1rem' />} sx={{textTransform: 'uppercase', color: '#223353'}}>tutorial video</Button>
      </Stack>

      <Stack direction='row' sx={{alignItems: 'center', px: '2.5rem'}} gap={2}>
        {chipData.map((e,i) => (
          <>
            {e.txt === 'Sell 10' ? 
              <Chip key={i} icon={e.icon} label={e.txt} sx={{px: '1.5rem', borderRadius: '5px', bgcolor: '#000', color: '#fff'}} /> :
              <Chip key={i} icon={e.icon} label={e.txt} sx={{px: '1.5rem', borderRadius: '5px', bgcolor: '#f5f7f9'}} />
            }
            
            <Divider orientation="vertical" variant='middle' />
          </>
        ))}
        <Chip icon={<ThumbUpOutlinedIcon />} label="Sold 30" sx={{px: '1.5rem', borderRadius: '5px', bgcolor: '#f5f7f9'}} />
      </Stack>

      <Stack direction='row' sx={{alignItems: 'center', justifyContent: 'space-evenly', px:'3.5rem'}} >
        {daysData.map((e,i) => (
          <Stack key={i} direction='row' sx={{alignItems: 'center'}} gap={1}>
            <Typography sx={{fontWeight: '600'}}>{e.percent}</Typography>
            <Typography variant='body2'>{e.days}</Typography>
          </Stack>
        ))}
      </Stack>

      <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'center', px: '2rem'}}>
        <Stack direction='row' sx={{alignItems: 'center'}} gap={3}>
          {btnData1.map((e,i) => (
            <Button key={i} sx={{textTransform: 'uppercase', color: '#223353' }} startIcon={e.icon}>{e.txt}</Button>
          ))}
        </Stack>
        
        <Stack direction='row' sx={{alignItems: 'center'}} gap={3}>
          {btnData2.map((e,i) => (
            <Button key={i} sx={{textTransform: 'uppercase', color: '#223353' }} startIcon={e.icon}>{e.txt}</Button>
          ))}
        </Stack>
      </Stack>
      <Divider />

      {cardData.map((e,i) => (
        <Card key={i} elevation={2} sx={{mx: '1rem', p: '5px'}}>
        <Stack direction='row' sx={{alignItems: 'center', justifyContent: 'space-between'}}>
          <Stack direction='row' sx={{alignItems: 'center'}} gap={2}>
            <Card sx={{bgcolor: e.cardBg, maxWidth: '10rem'}}>
              <Stack sx={{p: '3px 2rem 2rem 5px'}}>
                <DragIndicatorOutlinedIcon />
                {e.name === 'Leslie Alexander' ? <Typography variant='body1' sx={{fontWeight: '600'}}>March 8,2023 <br/> 8:00 Am <br/> Next follow-up</Typography> :
                <Typography variant='body1' sx={{fontWeight: '600'}}>No follow-up <br/> scheduled</Typography>
                }
              </Stack>
            </Card>

            <Stack gap={1}>
              <Stack direction='row' sx={{alignItems: 'center'}} gap={1}> 
                <Typography variant='subtitle1' sx={{fontWeight: '600'}}>{e.name}</Typography>
                <Typography variant='body2' >{e.id}</Typography>
              </Stack>
              <Stack direction='row' sx={{alignItems: 'center'}} gap={1}>
                {[<PhoneOutlinedIcon />, <EmailOutlinedIcon />, <LocationOnOutlinedIcon />].map((e,i) => (
                  <IconButton key={i} sx={{bgcolor: '#f4f5f7', p: '8px', borderRadius: '5px'}}>
                    {e}
                  </IconButton>
                ))}
              </Stack>
              <Stack direction='row' sx={{alignItems: 'center'}} gap={1}>
                <Button sx={{textTransform: 'uppercase'}} endIcon={e.showBtnIcon}>{e.showBtn}</Button>
                <Typography variant='caption'>Updated {e.update} ago</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack gap={1}>
            <Stack direction='row' sx={{alignItems: 'center', justifyContent: 'space-between', pr: '3rem'}} gap={10}>
              <Stack gap={1}>
                <Typography variant='body2' sx={{textTransform: 'uppercase'}}>project info</Typography>
                <FormControl size='small' sx={{width: '14rem'}} fullWidth>
                  <InputLabel>Bathroom modeling</InputLabel>
                  <Select
                    label="Age"
                  >
                    <MenuItem>Bathroom modeling</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack gap={1}>
                <Typography variant='body2' sx={{textTransform: 'uppercase'}}>est.revenue</Typography>
                <Typography variant='body2' sx={{textTransform: 'uppercase', color: '#223353', fontWeight: '600'}}>{e.rev}</Typography>
              </Stack>
              <Stack gap={1}>
                <Typography variant='body2' sx={{textTransform: 'uppercase'}}>likelihood of sale</Typography>
                <Stack direction='row' sx={{alignItems: 'center'}} gap={1}>
                  <CircularProgress variant="determinate" value={e.sale} />
                  <Typography variant='body1' sx={{fontWeight: '600'}}>{e.sale}%</Typography>
                </Stack>
              </Stack>
              <Stack gap={1}>
                <Typography variant='body2' sx={{textTransform: 'uppercase'}}>sales rep.</Typography>
                {e.name === 'Esther Howard' ? <Avatar sizes='0.5rem' alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" /> : 
                <AvatarGroup max={2}>
                  <Avatar sizes='0.5rem' alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                  <Avatar sizes='0.5rem' alt="Travis Howard" src="https://mui.com/static/images/avatar/3.jpg" />
                </AvatarGroup>
                }
              </Stack>
            </Stack>
            <Stack direction='row' sx={{justifyContent: 'flex-end', alignItems: 'center'}}>
              <Button endIcon={<KeyboardArrowDownIcon />} size='small' sx={{textTransform: 'uppercase', color: '#223353', fontWeight: '600', pr: '5rem'}}>record communication</Button>

              <Stack direction='row' sx={{ alignItems: 'center'}} gap={1}>
                {[<CameraAltOutlinedIcon />, <ArticleOutlinedIcon />, <DriveFileRenameOutlineOutlinedIcon />, <GrainOutlinedIcon />, <MoreHorizOutlinedIcon />].map((e,i) => (
                  <IconButton key={i}>
                    {e}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        {e.name === 'Leslie Alexander' ?
          <Stack direction='row' sx={{alignItems: 'center', justifyContent: 'space-between'}}>
          <Stack gap={1}>
           <Typography variant='body2' sx={{textTransform: 'uppercase'}}>add tags</Typography>
           <Autocomplete
              multiple
              options={autoData}
              getOptionLabel={(option) => option}
              defaultValue={[autoData[0]]}
              renderInput={(params) => (
                <TextField sx={{width:'23rem'}}
                  {...params}
                  variant="outlined"
                  size='small'
                />
              )}
            />
            <Typography sx={{pt: '1rem'}}>Suggested: </Typography>
          </Stack>
          <Stack gap={1}>
            <Typography variant='body2' sx={{textTransform: 'uppercase'}}>add notes</Typography>
            <TextField sx={{width: '30rem'}}
              multiline
              rows={2}
              placeholder="Add Project Notes..."
            />
            <Alert onClose={() => {}}>All changes saved 1 sec ago</Alert>
          </Stack>
          <Table size='small' sx={{
             [`& .${tableCellClasses.root}`]: {
               borderBottom: "none"
             }, maxWidth: '35rem', pb: '1rem'
           }}>
            <TableBody>
              {tableData.map((e,i) => (
                <TableRow key={i}>
                  <TableCell>{e.txt1}</TableCell>
                  <TableCell>{e.txt2}</TableCell>
                  <TableCell>{e.txt3}</TableCell>
                </TableRow>
              ))}
              <TableRow sx={{borderTop: '1px solid #999'}}>
                <TableCell>Estimate gross profit</TableCell>
                <TableCell>$6,400.00</TableCell>
                <TableCell>
                  <Stack>
                    <Typography variant='caption' sx={{textTransform: 'uppercase'}}>markup</Typography>
                    <Typography>42%</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack>
                    <Typography variant='caption' sx={{textTransform: 'uppercase'}}>margin</Typography>
                    <Typography>140%</Typography>
                  </Stack>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Stack> : ''
        }
        
      </Card>
      ))}

      <Button variant='contained' startIcon={<TipsAndUpdatesOutlinedIcon sx={{color: '#5394D6'}} />} endIcon={<ChevronRightOutlinedIcon />} sx={{background: '#f3f5f7', color: '#000', width: '20rem', mx: '1rem'}}>Pro Tip and Guidance</Button>
    </Stack>
  )
}

export default MainComp