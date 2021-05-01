import dynamic from 'next/dynamic'

import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-04-20T20:49:07.968Z',
      '2021-04-21T20:49:07.968Z',
      '2021-04-22T20:49:07.968Z',
      '2021-04-23T20:49:07.968Z',
      '2021-04-24T20:49:07.968Z',
      '2021-04-25T20:49:07.968Z',
      '2021-04-26T20:49:07.968Z',
      ,
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}

const series = [{ name: 'series', data: [26, 8, 10, 16, 45, 12, 90] }]

export default function Dashboard() {
  console.log(new Date().toISOString())
  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' mx='auto' my='6' maxWidth={1480} px='6'>
        <Sidebar />

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
          <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb='4'>
            <Text fontSize='lg' mb='4'>
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type='area' height={160} />
          </Box>
          <Box p='8' bg='gray.800' borderRadius={8} pb='4'>
            <Text fontSize='lg' mb='4'>
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type='area' height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
