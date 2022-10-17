import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Lista from '../src/components/Lista/Lista';
import { useIndex } from '../src/hooks/pages/useindex';

const Home: NextPage = () => {
  const objeto = useIndex();

  return (
    // add cor de fundo
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={objeto.listaProfessores}></Lista>
    </Box>
  )
}

export default Home
